'use client';

import React, { useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar, Home, MapPin, ChevronLeft, ChevronRight, Check,
  Sparkles, Building, Search, Zap, RotateCcw
} from 'lucide-react';
import DiamondIcon from '@/components/icons/DiamondIcon';

// ============================================================================
// TYPES
// ============================================================================

type CaseStatus = 'new' | 'revealed' | 'unclaimed' | 'claimed';
type RevealPhase = 'idle' | 'investigating' | 'complete' | 'awaiting_action' | 'transitioning';
type CaseStage = 'found' | 'checking' | 'complete';

interface DemoCase {
  id: number;
  caseNumber: string;
  decedentName: string;
  propertyAddress: string;
  city: string;
  estimatedValue: number;
  equity: number;
  propertyCount: number;
  status: CaseStatus;
}

// ============================================================================
// DEMO DATA
// ============================================================================

const DEMO_CASES_POOL: Omit<DemoCase, 'id' | 'status'>[] = [
  { caseNumber: '2026-EST-0142', decedentName: 'Richardson', propertyAddress: '4521 Vine St', city: 'Cincinnati', estimatedValue: 285000, equity: 92, propertyCount: 1 },
  { caseNumber: '2026-EST-0143', decedentName: 'Thompson', propertyAddress: '1847 Oak Ave', city: 'Hamilton', estimatedValue: 195000, equity: 100, propertyCount: 2 },
  { caseNumber: '2026-EST-0144', decedentName: 'Williams', propertyAddress: '892 Elm Dr', city: 'Fairfield', estimatedValue: 342000, equity: 78, propertyCount: 1 },
  { caseNumber: '2026-EST-0145', decedentName: 'Anderson', propertyAddress: '2156 Main St', city: 'Mason', estimatedValue: 415000, equity: 85, propertyCount: 1 },
  { caseNumber: '2026-EST-0146', decedentName: 'Martinez', propertyAddress: '723 Walnut Ln', city: 'Loveland', estimatedValue: 268000, equity: 88, propertyCount: 1 },
  { caseNumber: '2026-EST-0147', decedentName: 'Taylor', propertyAddress: '1456 Cherry St', city: 'Norwood', estimatedValue: 175000, equity: 100, propertyCount: 2 },
  { caseNumber: '2026-EST-0148', decedentName: 'Johnson', propertyAddress: '3892 Beech Ave', city: 'Blue Ash', estimatedValue: 389000, equity: 72, propertyCount: 1 },
  { caseNumber: '2026-EST-0149', decedentName: 'Brown', propertyAddress: '567 Maple Dr', city: 'Sharonville', estimatedValue: 225000, equity: 95, propertyCount: 1 },
  { caseNumber: '2026-EST-0150', decedentName: 'Davis', propertyAddress: '2341 Pine Rd', city: 'West Chester', estimatedValue: 445000, equity: 81, propertyCount: 1 },
  { caseNumber: '2026-EST-0151', decedentName: 'Wilson', propertyAddress: '891 Cedar Ct', city: 'Liberty Twp', estimatedValue: 312000, equity: 100, propertyCount: 2 },
];

// Initial calendar data: day -> count of cases
// All days start as 'new' - user reveals them during the demo
const INITIAL_CALENDAR_DATA: Record<number, { count: number; status: CaseStatus }> = {
  6: { count: 3, status: 'new' },
  7: { count: 4, status: 'new' },
  8: { count: 2, status: 'new' },
  9: { count: 5, status: 'new' },
  10: { count: 3, status: 'new' },
  13: { count: 4, status: 'new' },
  14: { count: 3, status: 'new' },
  15: { count: 2, status: 'new' },
  16: { count: 4, status: 'new' },
  17: { count: 3, status: 'new' },
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

const getCasesForDay = (day: number, count: number): DemoCase[] => {
  const startIndex = (day * 3) % DEMO_CASES_POOL.length;
  const cases: DemoCase[] = [];
  for (let i = 0; i < count; i++) {
    const index = (startIndex + i) % DEMO_CASES_POOL.length;
    const baseCase = DEMO_CASES_POOL[index];
    cases.push({
      ...baseCase,
      id: day * 100 + i,
      caseNumber: `2026-EST-${String(day).padStart(2, '0')}${String(40 + i).padStart(2, '0')}`,
      status: 'new',
    });
  }
  return cases;
};

const formatCurrency = (num: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(num);

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// ============================================================================
// ANIMATION TIMINGS (matching CRM)
// ============================================================================

const REVEAL_TIMINGS = {
  INITIAL_DELAY: 400,        // Before first case
  CASE_FOUND_PULSE: 200,     // Diamond pulse on "found"
  CASE_FOUND_HOLD: 500,      // Hold after found
  CASE_CHECKING: 800,        // "Checking for real estate..."
  CASE_COMPLETE_PULSE: 150,  // Diamond pulse on complete
  BETWEEN_CASES: 400,        // Gap between cases
  TRANSITION_DELAY: 600,     // Before transitioning cards
  STAGGER_DELAY: 450,        // Between card transitions
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const CaseClaimDemo = () => {
  // Calendar state
  const [calendarData, setCalendarData] = useState<Record<number, { count: number; status: CaseStatus }>>(
    () => JSON.parse(JSON.stringify(INITIAL_CALENDAR_DATA))
  );
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  // Cases state
  const [currentDayCases, setCurrentDayCases] = useState<DemoCase[]>([]);
  const [visibleCaseIds, setVisibleCaseIds] = useState<Set<number>>(new Set());
  const [transitionedCaseIds, setTransitionedCaseIds] = useState<Set<number>>(new Set());
  const [claimedCaseIds, setClaimedCaseIds] = useState<Set<number>>(new Set());
  const [pendingClaimIds, setPendingClaimIds] = useState<Set<number>>(new Set());

  // Animation state
  const [revealPhase, setRevealPhase] = useState<RevealPhase>('idle');
  const [caseStages, setCaseStages] = useState<Record<number, CaseStage>>({});
  const [currentInvestigatingId, setCurrentInvestigatingId] = useState<number | null>(null);
  const [diamondPulse, setDiamondPulse] = useState(false);
  const [diamondFading, setDiamondFading] = useState(false);

  // Celebration state
  const [showCelebration, setShowCelebration] = useState(false);
  const [credits, setCredits] = useState(47);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Current date info for calendar
  const now = new Date();
  const currentMonth = now.toLocaleString('default', { month: 'long' });
  const currentYear = now.getFullYear();
  const daysInMonth = new Date(currentYear, now.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, now.getMonth(), 1).getDay();
  const today = 16; // Fixed for demo consistency

  // ============================================================================
  // HANDLERS
  // ============================================================================

  const handleDateClick = useCallback((day: number) => {
    const dayData = calendarData[day];
    if (!dayData) return;

    // Mark as interacted
    setHasInteracted(true);

    // Reset state for new selection
    setSelectedDate(day);
    setRevealPhase('idle');
    setVisibleCaseIds(new Set());
    setTransitionedCaseIds(new Set());
    setCaseStages({});
    setCurrentInvestigatingId(null);
    setDiamondPulse(false);
    setDiamondFading(false);
    setPendingClaimIds(new Set());

    // Generate cases for this day
    const cases = getCasesForDay(day, dayData.count);

    // If already claimed/unclaimed, show them directly
    if (dayData.status === 'claimed' || dayData.status === 'unclaimed') {
      const updatedCases = cases.map(c => ({
        ...c,
        status: dayData.status as CaseStatus
      }));
      setCurrentDayCases(updatedCases);
      setVisibleCaseIds(new Set(updatedCases.map(c => c.id)));
      setTransitionedCaseIds(new Set(updatedCases.map(c => c.id)));
    } else {
      // New cases - need to be revealed
      setCurrentDayCases(cases);
    }
  }, [calendarData]);

  const handleRevealCases = useCallback(async () => {
    if (revealPhase !== 'idle' || currentDayCases.length === 0) return;

    setRevealPhase('investigating');
    await delay(REVEAL_TIMINGS.INITIAL_DELAY);

    // Process each case with the three-beat animation
    for (let i = 0; i < currentDayCases.length; i++) {
      const caseItem = currentDayCases[i];

      // Beat 1: Case Found
      setDiamondPulse(true);
      setCurrentInvestigatingId(caseItem.id);
      setVisibleCaseIds(prev => new Set([...prev, caseItem.id]));
      setCaseStages(prev => ({ ...prev, [caseItem.id]: 'found' }));

      await delay(REVEAL_TIMINGS.CASE_FOUND_PULSE);
      setDiamondPulse(false);
      await delay(REVEAL_TIMINGS.CASE_FOUND_HOLD);

      // Beat 2: Checking for real estate
      setCaseStages(prev => ({ ...prev, [caseItem.id]: 'checking' }));
      await delay(REVEAL_TIMINGS.CASE_CHECKING);

      // Beat 3: Complete
      setDiamondPulse(true);
      setCaseStages(prev => ({ ...prev, [caseItem.id]: 'complete' }));
      await delay(REVEAL_TIMINGS.CASE_COMPLETE_PULSE);
      setDiamondPulse(false);

      // Brief pause before next case
      if (i < currentDayCases.length - 1) {
        await delay(REVEAL_TIMINGS.BETWEEN_CASES);
      }
    }

    setCurrentInvestigatingId(null);
    setRevealPhase('complete');
  }, [revealPhase, currentDayCases]);

  const handleContinueToReview = useCallback(async () => {
    if (revealPhase !== 'complete' || !selectedDate) return;

    setRevealPhase('transitioning');
    setDiamondFading(true);
    await delay(REVEAL_TIMINGS.TRANSITION_DELAY);

    // Cascade transition for each card
    for (let i = 0; i < currentDayCases.length; i++) {
      if (i > 0) await delay(REVEAL_TIMINGS.STAGGER_DELAY);
      setTransitionedCaseIds(prev => new Set([...prev, currentDayCases[i].id]));
    }

    // Update case statuses
    await delay(600);
    setCurrentDayCases(prev => prev.map(c => ({ ...c, status: 'unclaimed' as CaseStatus })));

    // Update calendar day status to unclaimed (teal)
    setCalendarData(prev => ({
      ...prev,
      [selectedDate]: { ...prev[selectedDate], status: 'unclaimed' as CaseStatus }
    }));

    setRevealPhase('awaiting_action');
    setDiamondFading(false);
  }, [revealPhase, currentDayCases, selectedDate]);

  const handleToggleClaim = useCallback((caseId: number) => {
    setPendingClaimIds(prev => {
      const next = new Set(prev);
      if (next.has(caseId)) {
        next.delete(caseId);
      } else {
        next.add(caseId);
      }
      return next;
    });
  }, []);

  const handleClaimSelected = useCallback(async () => {
    if (pendingClaimIds.size === 0 || !selectedDate) return;

    const claimCount = pendingClaimIds.size;

    // Add to claimed
    setClaimedCaseIds(prev => new Set([...prev, ...pendingClaimIds]));

    // Update cases
    const updatedCases = currentDayCases.map(c =>
      pendingClaimIds.has(c.id) ? { ...c, status: 'claimed' as CaseStatus } : c
    );
    setCurrentDayCases(updatedCases);

    // Check if all cases for this day are now claimed
    const allClaimed = updatedCases.every(c => c.status === 'claimed');
    if (allClaimed) {
      // Update calendar day status to claimed (purple)
      setCalendarData(prev => ({
        ...prev,
        [selectedDate]: { ...prev[selectedDate], status: 'claimed' as CaseStatus }
      }));
    }

    // Deduct credits
    setCredits(prev => prev - claimCount);

    // Clear pending
    setPendingClaimIds(new Set());

    // Show celebration
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 2500);
  }, [pendingClaimIds, selectedDate, currentDayCases]);

  const handleResetDemo = useCallback(() => {
    // Reset calendar data to initial state (all amber/new)
    setCalendarData(JSON.parse(JSON.stringify(INITIAL_CALENDAR_DATA)));
    setSelectedDate(null);
    setCurrentDayCases([]);
    setVisibleCaseIds(new Set());
    setTransitionedCaseIds(new Set());
    setClaimedCaseIds(new Set());
    setPendingClaimIds(new Set());
    setRevealPhase('idle');
    setCaseStages({});
    setCurrentInvestigatingId(null);
    setDiamondPulse(false);
    setDiamondFading(false);
    setShowCelebration(false);
    setCredits(47);
    setHasInteracted(false);
  }, []);

  // ============================================================================
  // COMPUTED VALUES
  // ============================================================================

  const selectedDayData = selectedDate ? calendarData[selectedDate] : null;
  const isNewDay = selectedDayData?.status === 'new';
  const hasNewCases = isNewDay && revealPhase === 'idle' && currentDayCases.length > 0;
  const pendingClaimCount = pendingClaimIds.size;

  // ============================================================================
  // RENDER
  // ============================================================================

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto">
        {/* Demo Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50"
        >
          {/* App Header Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 sm:py-4 gap-2 sm:gap-0 border-b border-white/10 bg-[#080808]">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="text-xs sm:text-sm text-white/40 font-mono">app.homeflip.ai/probate-inbox</div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#83d4c0]/10 border border-[#83d4c0]/30">
                <Sparkles className="w-4 h-4 text-[#83d4c0]" />
                <span className="text-sm font-bold text-[#83d4c0]">{credits} Credits</span>
              </div>
              {hasInteracted && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={handleResetDemo}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/50 hover:text-white/80 text-sm transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </motion.button>
              )}
            </div>
          </div>

          {/* Demo Disclaimer */}
          <div className="px-6 py-2 bg-[#070707] border-b border-white/5 text-center">
            <span className="text-xs text-white/30 italic">Interactive demo with sample data</span>
          </div>

          {/* Main Content Grid - Stack on mobile, side-by-side on desktop */}
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-0 min-h-[400px] lg:min-h-[500px]">
            {/* Calendar Panel - Full width on mobile, 2 columns on desktop */}
            <div className="lg:col-span-2 p-4 sm:p-5 lg:p-6 border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0c0c0c]">
              {/* Month Header */}
              <div className="flex items-center justify-between mb-4 lg:mb-5">
                <h3 className="text-base lg:text-lg font-bold text-white">{currentMonth} {currentYear}</h3>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/40 transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/40 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid - Weekdays only (Mon-Fri) */}
              <div className="grid grid-cols-5 gap-1.5 lg:gap-2 mb-4">
                {['M', 'T', 'W', 'T', 'F'].map((day, i) => (
                  <div key={i} className="text-center text-[10px] lg:text-xs font-bold text-white/30 py-1.5">
                    {day}
                  </div>
                ))}

                {/* Days - weekdays only */}
                {(() => {
                  const cells: React.ReactNode[] = [];

                  // Calculate offset for first weekday of month
                  const firstDayDOW = firstDayOfMonth; // 0=Sun, 1=Mon, ..., 6=Sat
                  // Mon=0, Tue=1, Wed=2, Thu=3, Fri=4 in our 5-col grid
                  let firstWeekdayOffset = 0;
                  if (firstDayDOW >= 1 && firstDayDOW <= 5) {
                    // Mon-Fri: offset is (dayOfWeek - 1)
                    firstWeekdayOffset = firstDayDOW - 1;
                  }
                  // If Sun (0) or Sat (6), first weekday is the following Monday, no offset

                  // Add empty cells for offset
                  for (let i = 0; i < firstWeekdayOffset; i++) {
                    cells.push(<div key={`empty-${i}`} />);
                  }

                  // Add day cells (only weekdays)
                  for (let day = 1; day <= daysInMonth; day++) {
                    const dayOfWeek = (firstDayOfMonth + day - 1) % 7;
                    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

                    // Skip weekends
                    if (isWeekend) continue;

                    const dayData = calendarData[day];
                    const hasData = !!dayData;
                    const isSelected = day === selectedDate;
                    const isToday = day === today;

                    // Determine dot color based on status
                    let dotColor = '';
                    if (dayData) {
                      switch (dayData.status) {
                        case 'new': dotColor = 'bg-amber-500'; break;
                        case 'unclaimed': dotColor = 'bg-teal-400'; break;
                        case 'claimed': dotColor = 'bg-purple-500'; break;
                      }
                    }

                    cells.push(
                      <button
                        key={day}
                        onClick={() => handleDateClick(day)}
                        disabled={!hasData}
                        className={`
                          relative rounded-xl flex flex-col items-center justify-center transition-all
                          py-3 lg:py-3.5
                          ${hasData
                            ? 'cursor-pointer hover:bg-white/15 bg-white/5'
                            : 'text-white/30'
                          }
                          ${isSelected ? 'ring-2 ring-[#83d4c0] bg-white/15' : ''}
                          ${isToday && !isSelected ? 'ring-1 ring-white/30' : ''}
                        `}
                      >
                        <span className={`text-sm lg:text-base font-semibold ${hasData ? 'text-white' : ''}`}>{day}</span>
                        {hasData && (
                          <div className={`
                            w-2.5 h-2.5 rounded-full mt-1.5 ${dotColor}
                            ${isSelected ? 'animate-pulse' : ''}
                          `} />
                        )}
                      </button>
                    );
                  }

                  return cells;
                })()}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-xs sm:text-sm text-white/50 pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <span>New Cases</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-teal-400" />
                  <span>Unclaimed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                  <span>Claimed</span>
                </div>
              </div>
            </div>

            {/* Cases Panel - 3 columns */}
            <div className="lg:col-span-3 p-4 sm:p-6 bg-[#080808] relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!selectedDate ? (
                  /* Empty State */
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                      <Calendar className="w-10 h-10 text-white/20" />
                    </div>
                    <h4 className="text-xl font-bold text-white/60 mb-2">Select a Date</h4>
                    <p className="text-white/40 max-w-xs text-sm">
                      Click on a date with an amber dot to reveal new probate cases filed that day.
                    </p>
                  </motion.div>
                ) : hasNewCases ? (
                  /* Reveal Button State */
                  <motion.div
                    key="reveal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="mb-8"
                    >
                      <DiamondIcon size={80} variant="amber" />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      {currentDayCases.length} New Cases Found
                    </h4>
                    <p className="text-white/50 mb-8">
                      {currentMonth.slice(0, 3)} {selectedDate}, {currentYear}
                    </p>
                    <motion.button
                      onClick={handleRevealCases}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg shadow-lg shadow-amber-500/30 flex items-center gap-3"
                    >
                      <Search className="w-5 h-5" />
                      Reveal {currentDayCases.length} Cases
                    </motion.button>
                  </motion.div>
                ) : revealPhase === 'investigating' || revealPhase === 'complete' ? (
                  /* Revealing/Complete State */
                  <motion.div
                    key="investigating"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative h-full flex flex-col"
                  >
                    {/* Header with Diamond */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {revealPhase === 'complete' ? 'Scan Complete' : 'Investigating Cases'}
                        </h4>
                        <p className="text-white/40 text-sm">
                          {currentMonth.slice(0, 3)} {selectedDate}, {currentYear}
                        </p>
                      </div>
                      <motion.div
                        animate={{
                          scale: diamondPulse ? 1.2 : 1,
                          filter: diamondPulse ? 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.8))' : 'drop-shadow(0 4px 12px rgba(245, 158, 11, 0.4))',
                        }}
                        transition={{ duration: 0.15 }}
                      >
                        <DiamondIcon size={48} variant="amber" />
                      </motion.div>
                    </div>

                    {/* Case Cards */}
                    <div className="flex-1 space-y-3 pb-20">
                      {currentDayCases.map((caseItem) => {
                        const isVisible = visibleCaseIds.has(caseItem.id);
                        const stage = caseStages[caseItem.id];
                        const isInvestigating = currentInvestigatingId === caseItem.id;

                        if (!isVisible) return null;

                        return (
                          <motion.div
                            key={caseItem.id}
                            initial={{ opacity: 0, y: -20, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                              opacity: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                              y: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                              scale: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                            }}
                            className={`
                              p-4 rounded-2xl border backdrop-blur-sm transition-all duration-300
                              ${isInvestigating
                                ? 'bg-amber-500/10 border-amber-500/40 shadow-lg shadow-amber-500/10'
                                : 'bg-amber-500/5 border-amber-500/20'
                              }
                            `}
                          >
                            {/* Zone 1: Identity */}
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-sm font-bold text-white font-mono">
                                    {caseItem.caseNumber}
                                  </span>
                                </div>
                                <div className="text-xs text-white/50">
                                  Hamilton County, OH • {caseItem.decedentName}
                                </div>
                              </div>

                              {/* Status Badge */}
                              <div className={`
                                px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider
                                ${stage === 'complete'
                                  ? 'bg-amber-500/20 text-amber-400'
                                  : 'bg-white/10 text-white/40'
                                }
                              `}>
                                {stage === 'found' && (
                                  <span className="flex items-center gap-1">
                                    <span className="animate-pulse">Scanning...</span>
                                  </span>
                                )}
                                {stage === 'checking' && (
                                  <span className="flex items-center gap-1">
                                    <Search className="w-3 h-3 animate-pulse" />
                                    Checking...
                                  </span>
                                )}
                                {stage === 'complete' && (
                                  <span className="flex items-center gap-1">
                                    <Check className="w-3 h-3" />
                                    Verified
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Zone 2: Context - Only show when complete */}
                            <AnimatePresence>
                              {stage === 'complete' && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  transition={{ duration: 0.3 }}
                                  className="flex flex-wrap items-center gap-3 pt-3 border-t border-amber-500/10"
                                >
                                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-amber-500/10 h-7">
                                    <Building className="w-3.5 h-3.5 text-amber-400" />
                                    <span className="text-xs text-amber-300 font-medium">
                                      {caseItem.propertyCount} {caseItem.propertyCount > 1 ? 'Properties' : 'Property'}
                                    </span>
                                  </div>
                                  <div className="flex items-center px-2 py-1 rounded-lg bg-amber-500/10 h-7">
                                    <span className="text-xs text-amber-300 font-medium">
                                      {formatCurrency(caseItem.estimatedValue)}
                                    </span>
                                  </div>
                                  <div className="flex items-center px-2 py-1 rounded-lg bg-green-500/20 text-green-400 text-xs font-bold h-7">
                                    {caseItem.equity}% Equity
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Continue Button - Floating */}
                    {revealPhase === 'complete' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-0 left-0 right-0 pt-8 pb-2 bg-gradient-to-t from-[#080808] via-[#080808]/95 to-transparent"
                      >
                        <motion.button
                          onClick={handleContinueToReview}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                        >
                          <Zap className="w-5 h-5" />
                          Continue to Review
                        </motion.button>
                      </motion.div>
                    )}
                  </motion.div>
                ) : (
                  /* Awaiting Action / Transitioned State */
                  <motion.div
                    key="review"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          Cases Ready to Claim
                        </h4>
                        <p className="text-white/40 text-sm">
                          {currentMonth.slice(0, 3)} {selectedDate}, {currentYear}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[rgba(131,212,192,0.1)] text-[#83d4c0]/70 text-sm font-medium">
                        {currentDayCases.filter(c => c.status === 'unclaimed').length} Available
                      </span>
                    </div>

                    {/* Case Cards - CRM-style unclaimed cards */}
                    <div className="space-y-3">
                      {currentDayCases.map((caseItem, index) => {
                        const isTransitioned = transitionedCaseIds.has(caseItem.id);
                        const isClaimed = claimedCaseIds.has(caseItem.id) || caseItem.status === 'claimed';
                        const isPendingClaim = pendingClaimIds.has(caseItem.id);

                        return (
                          <motion.div
                            key={caseItem.id}
                            initial={revealPhase === 'transitioning' ? {
                              borderColor: 'rgba(245, 158, 11, 0.4)',
                              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(245, 158, 11, 0.04))'
                            } : false}
                            animate={{
                              borderColor: isTransitioned
                                ? (isClaimed ? 'rgba(168, 85, 247, 0.5)' : '#83d4c0')
                                : 'rgba(245, 158, 11, 0.4)',
                              background: isTransitioned
                                ? (isClaimed
                                    ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(168, 85, 247, 0.05))'
                                    : 'linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6))')
                                : 'linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(245, 158, 11, 0.04))',
                              boxShadow: isTransitioned && !isClaimed
                                ? (isPendingClaim
                                    ? 'inset 0 0 20px rgba(131, 212, 192, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 20px rgba(131, 212, 192, 0.2)'
                                    : 'inset 0 0 16px rgba(131, 212, 192, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.08)')
                                : 'none',
                            }}
                            transition={{
                              delay: revealPhase === 'transitioning' ? index * 0.15 : 0,
                              duration: 0.5,
                              ease: [0.22, 1, 0.36, 1]
                            }}
                            style={{
                              borderWidth: isTransitioned && !isClaimed ? '2px' : '1px',
                            }}
                            className="px-4 py-3 rounded-2xl border backdrop-blur-md transition-all"
                          >
                            {/* Two-Row Layout */}
                            <div className="space-y-2.5">
                              {/* Top Row: Identity + Action */}
                              <div className="flex items-start justify-between gap-4">
                                {/* Identity */}
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-mono text-white/60">
                                    {caseItem.caseNumber}
                                  </span>
                                  <span className="text-white/30">•</span>
                                  <span className="text-sm font-semibold text-white">
                                    Hamilton County
                                  </span>
                                </div>

                                {/* Action Capsule */}
                                <div className="shrink-0">
                                  {isClaimed ? (
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500 text-white">
                                      <Check className="w-4 h-4" />
                                      <span className="text-sm font-semibold">Claimed</span>
                                    </div>
                                  ) : (
                                    <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-[rgba(131,212,192,0.06)] border border-[rgba(131,212,192,0.12)]">
                                      <button
                                        onClick={() => handleToggleClaim(caseItem.id)}
                                        className={`
                                          px-3 py-1 rounded-md text-sm font-semibold transition-all
                                          ${isPendingClaim
                                            ? 'bg-[#83d4c0] text-[#0a1421] shadow-[0_2px_8px_rgba(131,212,192,0.35)]'
                                            : 'bg-[#83d4c0] text-[#0a1421] hover:bg-[#6bc4b0] hover:shadow-[0_2px_8px_rgba(131,212,192,0.35)]'
                                          }
                                        `}
                                      >
                                        {isPendingClaim ? 'Selected' : 'Claim'}
                                      </button>
                                      <span className="text-[10px] text-white/30 hover:text-white/60 cursor-pointer px-1 transition-colors">
                                        reject
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>

                              {/* Bottom Row: Context Badges */}
                              <div className="flex flex-wrap items-center gap-2">
                                {/* Property Linked Badge */}
                                <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-[rgba(131,212,192,0.15)]">
                                  <Home className="w-3 h-3 text-[#83d4c0]" />
                                  <span className="text-xs text-[#83d4c0] font-medium">
                                    {caseItem.propertyCount} {caseItem.propertyCount > 1 ? 'Properties' : 'Property'}
                                  </span>
                                </div>
                                {/* Value Badge */}
                                <div className="px-2 py-1 rounded-md bg-black/25">
                                  <span className="text-xs text-white font-semibold">
                                    {formatCurrency(caseItem.estimatedValue)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Floating Claim Bar */}
                    <AnimatePresence>
                      {pendingClaimCount > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          className="fixed bottom-6 left-1/2 -translate-x-1/2 sm:relative sm:bottom-auto sm:left-auto sm:translate-x-0 z-50"
                        >
                          <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-[#0f0f0f] border border-teal-500/30 shadow-2xl shadow-black/50">
                            <div className="text-white/60 text-sm">
                              <span className="text-white font-bold">{pendingClaimCount}</span> case{pendingClaimCount > 1 ? 's' : ''} selected
                            </div>
                            <div className="text-white/40 text-sm">
                              ({pendingClaimCount} credit{pendingClaimCount > 1 ? 's' : ''})
                            </div>
                            <motion.button
                              onClick={handleClaimSelected}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-teal-500 text-[#0a1421] font-bold shadow-lg shadow-teal-500/30"
                            >
                              Claim {pendingClaimCount} Case{pendingClaimCount > 1 ? 's' : ''}
                            </motion.button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Celebration Toast */}
        <AnimatePresence>
          {showCelebration && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
            >
              <div className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold shadow-2xl shadow-purple-500/50">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: 2 }}
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>
                <span className="text-lg">Cases claimed! Added to your deals.</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CaseClaimDemo;
