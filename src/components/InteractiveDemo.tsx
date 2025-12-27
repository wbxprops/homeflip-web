'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Home, MapPin, ChevronLeft, ChevronRight, Check, Sparkles } from 'lucide-react';

// Large pool of mock cases for variety
const ALL_DEMO_CASES = [
  { id: 1, caseNumber: '2025005337', decedentName: 'Eckerle', propertyAddress: '4521 Vine St, Cincinnati', estimatedValue: 285000, equity: 92, caseType: 'Full Administration' },
  { id: 2, caseNumber: '2025005339', decedentName: 'Moore', propertyAddress: '1847 Oak Ave, Hamilton', estimatedValue: 195000, equity: 100, caseType: 'Release from Admin' },
  { id: 3, caseNumber: '2025005341', decedentName: 'Richardson', propertyAddress: '892 Elm Dr, Fairfield', estimatedValue: 342000, equity: 78, caseType: 'Full Administration' },
  { id: 4, caseNumber: '2025005344', decedentName: 'Thompson', propertyAddress: '2156 Main St, Mason', estimatedValue: 415000, equity: 85, caseType: 'Summary Release' },
  { id: 5, caseNumber: '2025005348', decedentName: 'Williams', propertyAddress: '723 Walnut Ln, Loveland', estimatedValue: 268000, equity: 88, caseType: 'Full Administration' },
  { id: 6, caseNumber: '2025005351', decedentName: 'Anderson', propertyAddress: '1456 Cherry St, Norwood', estimatedValue: 175000, equity: 100, caseType: 'Summary Release' },
  { id: 7, caseNumber: '2025005355', decedentName: 'Martinez', propertyAddress: '3892 Beech Ave, Blue Ash', estimatedValue: 389000, equity: 72, caseType: 'Full Administration' },
  { id: 8, caseNumber: '2025005359', decedentName: 'Taylor', propertyAddress: '567 Maple Dr, Sharonville', estimatedValue: 225000, equity: 95, caseType: 'Release from Admin' },
  { id: 9, caseNumber: '2025005362', decedentName: 'Johnson', propertyAddress: '2341 Pine Rd, West Chester', estimatedValue: 445000, equity: 81, caseType: 'Full Administration' },
  { id: 10, caseNumber: '2025005366', decedentName: 'Brown', propertyAddress: '891 Cedar Ct, Liberty Twp', estimatedValue: 312000, equity: 100, caseType: 'Summary Release' },
  { id: 11, caseNumber: '2025005370', decedentName: 'Davis', propertyAddress: '1678 Spruce Way, Madeira', estimatedValue: 278000, equity: 67, caseType: 'Full Administration' },
  { id: 12, caseNumber: '2025005374', decedentName: 'Wilson', propertyAddress: '4523 Birch Blvd, Montgomery', estimatedValue: 525000, equity: 90, caseType: 'Release from Admin' },
  { id: 13, caseNumber: '2025005378', decedentName: 'Garcia', propertyAddress: '789 Ash St, Deer Park', estimatedValue: 165000, equity: 100, caseType: 'Summary Release' },
  { id: 14, caseNumber: '2025005382', decedentName: 'Miller', propertyAddress: '2156 Hickory Ln, Reading', estimatedValue: 198000, equity: 84, caseType: 'Full Administration' },
  { id: 15, caseNumber: '2025005386', decedentName: 'Jones', propertyAddress: '3467 Willow Dr, Springdale', estimatedValue: 289000, equity: 76, caseType: 'Release from Admin' },
];

// Function to get cases for a specific day (deterministic based on day number)
const getCasesForDay = (day: number, count: number) => {
  // Use day as seed for deterministic "random" selection
  const startIndex = (day * 3) % ALL_DEMO_CASES.length;
  const cases = [];
  for (let i = 0; i < count; i++) {
    const index = (startIndex + i) % ALL_DEMO_CASES.length;
    cases.push({
      ...ALL_DEMO_CASES[index],
      // Make case numbers unique per day
      id: day * 100 + i,
      caseNumber: `2025${String(day).padStart(2, '0')}${String(5300 + i).padStart(4, '0')}`,
    });
  }
  return cases;
};

// Calendar data showing which days have leads
const CALENDAR_DATA: Record<number, number> = {
  1: 2, 2: 3, 3: 5, 4: 2, 5: 4,
  8: 4, 9: 6, 10: 3, 11: 4, 12: 2,
  15: 3, 16: 4, 17: 3, 18: 2, 19: 5,
  22: 5, 23: 4, // Today - this will be interactive
};

export const InteractiveDemo = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [claimedCases, setClaimedCases] = useState<Set<number>>(new Set());
  const [showCelebration, setShowCelebration] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleCases, setVisibleCases] = useState<typeof ALL_DEMO_CASES>([]);
  const [currentDayCases, setCurrentDayCases] = useState<typeof ALL_DEMO_CASES>([]);

  // Get current date info
  const now = new Date();
  const currentMonth = now.toLocaleString('default', { month: 'long' });
  const currentYear = now.getFullYear();
  const today = now.getDate();
  const daysInMonth = new Date(currentYear, now.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, now.getMonth(), 1).getDay(); // 0 = Sunday

  const handleDateClick = (day: number) => {
    const caseCount = CALENDAR_DATA[day];
    if (caseCount) {
      setSelectedDate(day);
      setIsLoading(true);
      setVisibleCases([]);

      // Get unique cases for this day
      const dayCases = getCasesForDay(day, caseCount);
      setCurrentDayCases(dayCases);

      // Simulate loading then reveal cases one by one
      setTimeout(() => {
        setIsLoading(false);
        dayCases.forEach((_, index) => {
          setTimeout(() => {
            setVisibleCases(prev => [...prev, dayCases[index]]);
          }, index * 300);
        });
      }, 800);
    }
  };

  const handleClaimCase = (caseId: number) => {
    setClaimedCases(prev => new Set([...prev, caseId]));
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 2000);
  };

  const formatCurrency = (num: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(num);

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-white/5 text-slate-400 text-sm font-bold mb-6 tracking-widest uppercase border border-white/10"
          >
            INTERACTIVE DEMO
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            See It In Action
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Click on a date with leads to see how easy it is to claim probate cases.
          </p>
        </motion.div>

        {/* Demo Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111] rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
        >
          {/* Demo Header Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 sm:py-4 gap-2 sm:gap-0 border-b border-white/10 bg-[#0d0d0d]">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="text-xs sm:text-sm text-slate-500 font-mono">app.homeflip.ai/leads</div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#83d4c0]/10 border border-[#83d4c0]/30">
                <Sparkles className="w-4 h-4 text-[#83d4c0]" />
                <span className="text-sm font-bold text-[#83d4c0]">47 Credits</span>
              </div>
            </div>
          </div>

          {/* Demo Disclaimer */}
          <div className="px-6 py-2 bg-[#0a0a0a] border-b border-white/5 text-center">
            <span className="text-xs text-slate-500 italic">Sample data for demonstration purposes only</span>
          </div>

          {/* Demo Content */}
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Calendar Panel */}
            <div className="p-4 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">{currentMonth} {currentYear}</h3>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                  <div key={day} className="text-center text-xs font-bold text-slate-500 py-2">
                    {day}
                  </div>
                ))}

                {/* Empty cells for days before the 1st */}
                {Array.from({ length: firstDayOfMonth }, (_, i) => (
                  <div key={`empty-${i}`} />
                ))}

                {/* Days */}
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
                  const hasLeads = CALENDAR_DATA[day];
                  const isToday = day === today;
                  const isSelected = day === selectedDate;
                  const dayOfWeek = (firstDayOfMonth + day - 1) % 7; // 0 = Sunday, 6 = Saturday
                  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

                  return (
                    <button
                      key={day}
                      onClick={() => handleDateClick(day)}
                      disabled={!hasLeads}
                      className={`
                        relative aspect-square rounded-xl flex flex-col items-center justify-center transition-all
                        ${hasLeads
                          ? 'bg-[#83d4c0]/20 hover:bg-[#83d4c0]/30 cursor-pointer border border-[#83d4c0]/30'
                          : isWeekend
                            ? 'bg-white/5 text-slate-600'
                            : 'bg-transparent text-slate-500'
                        }
                        ${isSelected ? 'ring-2 ring-[#83d4c0] bg-[#83d4c0]/30' : ''}
                        ${isToday ? 'ring-2 ring-white/30' : ''}
                      `}
                    >
                      <span className={`text-sm font-bold ${hasLeads ? 'text-white' : ''}`}>{day}</span>
                      {hasLeads && (
                        <div className="flex gap-0.5 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#83d4c0]" />
                          {hasLeads > 2 && <div className="w-1.5 h-1.5 rounded-full bg-[#83d4c0]" />}
                          {hasLeads > 4 && <div className="w-1.5 h-1.5 rounded-full bg-[#83d4c0]" />}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-6 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#83d4c0]" />
                  <span>New Leads</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <span>Weekend</span>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-sm text-slate-400 mb-1">Cases with Real Estate</div>
                <div className="text-4xl font-black text-[#83d4c0]">236</div>
              </div>
            </div>

            {/* Cases Panel */}
            <div className="p-4 sm:p-8 bg-[#0d0d0d] min-h-[400px] sm:min-h-[500px]">
              <AnimatePresence mode="wait">
                {!selectedDate ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <Calendar className="w-16 h-16 text-slate-600 mb-4" />
                    <h4 className="text-xl font-bold text-slate-400 mb-2">Select a Date</h4>
                    <p className="text-slate-500 max-w-xs">
                      Click on any highlighted date to see available probate cases filed that day.
                    </p>
                  </motion.div>
                ) : isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center"
                  >
                    <div className="w-12 h-12 border-4 border-[#83d4c0]/30 border-t-[#83d4c0] rounded-full animate-spin mb-4" />
                    <p className="text-slate-400">Loading cases for {currentMonth.slice(0, 3)} {selectedDate}...</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="cases"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-lg font-bold text-white">
                        Cases Filed {currentMonth.slice(0, 3)} {selectedDate}, {currentYear}
                      </h4>
                      <span className="px-3 py-1 rounded-full bg-[#83d4c0]/20 text-[#83d4c0] text-sm font-bold">
                        {currentDayCases.length} Available
                      </span>
                    </div>

                    <div className="space-y-4">
                      {visibleCases.map((caseItem, index) => {
                        const isClaimed = claimedCases.has(caseItem.id);

                        return (
                          <motion.div
                            key={caseItem.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`
                              p-4 rounded-2xl border transition-all
                              ${isClaimed
                                ? 'bg-[#83d4c0]/10 border-[#83d4c0]/30'
                                : 'bg-white/5 border-white/10 hover:border-white/20'
                              }
                            `}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                              <div>
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                  <Home className="w-4 h-4 text-[#83d4c0]" />
                                  <span className="text-sm font-bold text-white">
                                    Case #{caseItem.caseNumber}
                                  </span>
                                  <span className="text-xs text-slate-500">
                                    ({caseItem.decedentName})
                                  </span>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-slate-400">
                                  <MapPin className="w-3 h-3 flex-shrink-0" />
                                  <span className="truncate">{caseItem.propertyAddress}</span>
                                </div>
                              </div>

                              {isClaimed ? (
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#83d4c0] text-[#0a1421] self-start">
                                  <Check className="w-4 h-4" />
                                  <span className="text-sm font-bold">Claimed</span>
                                </div>
                              ) : (
                                <button
                                  onClick={() => handleClaimCase(caseItem.id)}
                                  className="px-3 sm:px-4 py-2 rounded-xl bg-[#83d4c0] text-[#0a1421] font-bold text-sm hover:bg-[#83d4c0]/90 transition-colors whitespace-nowrap self-start"
                                >
                                  <span className="sm:hidden">Claim</span>
                                  <span className="hidden sm:inline">Claim (1 credit)</span>
                                </button>
                              )}
                            </div>

                            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm">
                              <div className="flex items-center gap-1">
                                <span className="text-white font-bold">
                                  {formatCurrency(caseItem.estimatedValue)}
                                </span>
                              </div>
                              <div className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 text-xs font-bold">
                                {caseItem.equity}% Equity
                              </div>
                              <div className="text-slate-500 text-xs hidden sm:block">
                                {caseItem.caseType}
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
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
              className="fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-4 rounded-2xl bg-[#83d4c0] text-[#0a1421] font-bold shadow-2xl flex items-center gap-3 z-50"
            >
              <Check className="w-6 h-6" />
              Case claimed! Added to your deals.
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Below Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 text-lg mb-6">
            Ready to start finding deals like these in your market?
          </p>
          <a
            href="/waitlist"
            className="btn-gradient inline-block px-8 sm:px-12 py-4 sm:py-6 rounded-2xl font-hero font-[900] text-2xl sm:text-3xl md:text-4xl uppercase tracking-tighter shadow-xl shadow-[#83d4c0]/20 hover:scale-105 active:scale-95 transition-all"
          >
            Claim Your County
          </a>
        </motion.div>
      </div>
    </section>
  );
};
