'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

// ==================== TYPES ====================

type InvestorType = 'new_investor' | 'restart' | 'active' | 'not_investor' | '';
type FullTimeStatus = 'yes' | 'day_job' | 'retired' | '';
type ProbateInterest = 'first_heard' | 'heard_no_start' | 'tried_no_work' | 'better_source';

interface SurveyData {
  investor_type: InvestorType;
  is_full_time: FullTimeStatus;
  houses_completed_12mo: number | '';
  houses_goal_12mo: number | '';
  goal_achieve: string;
  biggest_struggle: string;
  probate_interest: ProbateInterest[];
}

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

// ==================== CONSTANTS ====================

const INVESTOR_TYPE_OPTIONS = [
  { value: 'new_investor', label: "I'm looking for my first property." },
  { value: 'restart', label: "I've done deals before but took a break - ready to get back on track." },
  { value: 'active', label: "I'm actively investing - I've closed at least one deal in the past 12 months." },
  { value: 'not_investor', label: "I'm NOT an investor, I'm looking for a place to live." },
];

const FULL_TIME_OPTIONS = [
  { value: 'yes', label: "Yes, I'm a full time real estate investor." },
  { value: 'day_job', label: "I've got a day job, real estate is something I do on the side." },
  { value: 'retired', label: "I'm retired, but real estate is something I do on the side." },
];

const PROBATE_INTEREST_OPTIONS = [
  { value: 'first_heard', label: "This is the first I've heard of probate investing" },
  { value: 'heard_no_start', label: "I've heard about probate but never knew how to get started" },
  { value: 'tried_no_work', label: "I've tried probate before but couldn't make it work" },
  { value: 'better_source', label: "I'm looking for a better source of off-market deals" },
];

// ==================== TRACKING PARAMS ====================

// Fields that are used for contact info (not tracking)
const CONTACT_FIELDS = ['name', 'firstName', 'first_name', 'lastName', 'last_name', 'email', 'phone', 'redirect_after'];

// Standard UTM fields for marketing attribution
// Usage in email/ad links: ?utm_source=email&utm_medium=drip&utm_campaign=ppm_sequence&utm_term=email_5&utm_content=cta_button
// Also supports: fbclid, gclid, ref, and any custom params

// Extract all tracking params from URL (everything except contact fields)
const getTrackingParams = (searchParams: URLSearchParams): Record<string, string> => {
  const tracking: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    if (!CONTACT_FIELDS.includes(key)) {
      tracking[key] = value;
    }
  });
  return tracking;
};

// ==================== MAIN COMPONENT ====================

interface PreStrategySurveyFormProps {
  onPageChange?: (page: number) => void;
}

export const PreStrategySurveyForm = ({ onPageChange }: PreStrategySurveyFormProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Capture all tracking params on mount (UTMs, fbclid, campaign, etc.)
  const [trackingParams] = useState<Record<string, string>>(() => getTrackingParams(searchParams));

  // Check if contact info is pre-filled from URL params
  const hasPrefilledContact = !!(
    searchParams.get('name') ||
    searchParams.get('firstName') ||
    searchParams.get('email')
  );

  // Form state - 5 pages (0-4)
  const [page, setPage] = useState<0 | 1 | 2 | 3 | 4>(hasPrefilledContact ? 1 : 0);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Contact info (Page 0)
  const firstName = searchParams.get('firstName') || searchParams.get('first_name') || '';
  const lastName = searchParams.get('lastName') || searchParams.get('last_name') || '';
  const nameFromParams = searchParams.get('name') || (firstName && lastName ? `${firstName} ${lastName}` : firstName);

  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: nameFromParams,
    email: searchParams.get('email') || '',
    phone: searchParams.get('phone') || '',
  });

  // Survey data
  const [surveyData, setSurveyData] = useState<SurveyData>({
    investor_type: '',
    is_full_time: '',
    houses_completed_12mo: '',
    houses_goal_12mo: '',
    goal_achieve: '',
    biggest_struggle: '',
    probate_interest: [],
  });

  // Progressive display for Q2
  const [showQ2, setShowQ2] = useState(false);

  // Notify parent of page changes
  useEffect(() => {
    onPageChange?.(page);
  }, [page, onPageChange]);

  // Show Q2 when Q1 is answered
  useEffect(() => {
    if (surveyData.investor_type) {
      const timer = setTimeout(() => setShowQ2(true), 300);
      return () => clearTimeout(timer);
    } else {
      setShowQ2(false);
    }
  }, [surveyData.investor_type]);

  // ==================== HELPERS ====================

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const digits = numbers.startsWith('1') ? numbers.slice(1) : numbers;
    const limited = digits.slice(0, 10);

    if (limited.length === 0) return '';
    if (limited.length <= 3) return `+1 (${limited}`;
    if (limited.length <= 6) return `+1 (${limited.slice(0, 3)}) ${limited.slice(3)}`;
    return `+1 (${limited.slice(0, 3)}) ${limited.slice(3, 6)}-${limited.slice(6)}`;
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
  };

  const clearError = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  // ==================== PAGE NAVIGATION ====================

  const handlePage0Submit = () => {
    if (!contactInfo.name || !contactInfo.email || !contactInfo.phone) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }
    if (!isValidEmail(contactInfo.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    clearError();
    setPage(1);
  };

  const handlePage1Submit = () => {
    if (!surveyData.investor_type) {
      setStatus('error');
      setErrorMessage('Please select what best describes you.');
      return;
    }
    if (!surveyData.is_full_time) {
      setStatus('error');
      setErrorMessage('Please indicate if real estate is your full-time job.');
      return;
    }
    clearError();
    setPage(2);
  };

  const handlePage2Submit = () => {
    if (surveyData.houses_completed_12mo === '' || surveyData.houses_completed_12mo < 0) {
      setStatus('error');
      setErrorMessage('Please enter how many houses you completed.');
      return;
    }
    if (surveyData.houses_goal_12mo === '' || surveyData.houses_goal_12mo < 0) {
      setStatus('error');
      setErrorMessage('Please enter your goal for next 12 months.');
      return;
    }
    clearError();
    setPage(3);
  };

  const handlePage3Submit = () => {
    if (!surveyData.goal_achieve.trim()) {
      setStatus('error');
      setErrorMessage('Please tell us your #1 goal.');
      return;
    }
    if (!surveyData.biggest_struggle.trim()) {
      setStatus('error');
      setErrorMessage('Please tell us your #1 biggest struggle.');
      return;
    }
    clearError();
    setPage(4);
  };

  const handlePage4Submit = async () => {
    if (surveyData.probate_interest.length === 0) {
      setStatus('error');
      setErrorMessage('Please select at least one option.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Save survey response (always creates new record for each submission)
      await supabase
        .from('prospect_responses')
        .insert([{
          email: contactInfo.email,
          name: contactInfo.name,
          phone: contactInfo.phone,
          source: 'pre_strategy_survey_v1',
          survey_data: {
            investor_type: surveyData.investor_type,
            is_full_time: surveyData.is_full_time,
            houses_completed_12mo: surveyData.houses_completed_12mo,
            houses_goal_12mo: surveyData.houses_goal_12mo,
            goal_achieve: surveyData.goal_achieve,
            biggest_struggle: surveyData.biggest_struggle,
            probate_interest: surveyData.probate_interest,
          },
          // Store all tracking params (UTMs, fbclid, campaign, etc.)
          ...(Object.keys(trackingParams).length > 0 && { tracking_params: trackingParams }),
        }]);

      // Upsert to prospects table (creates or updates based on email)
      const { error } = await supabase
        .from('prospects')
        .upsert([{
          email: contactInfo.email,
          name: contactInfo.name,
          phone: contactInfo.phone,
          source: 'pre_strategy_survey_v1',
          // Store all tracking params (UTMs, fbclid, campaign, etc.)
          ...(Object.keys(trackingParams).length > 0 && { tracking_params: trackingParams }),
        }], { onConflict: 'email' });

      if (error) {
        console.error('Prospects upsert error:', error);
      }

      // Redirect to Claim Your County with params
      // Include tracking params so they flow through the funnel
      const params = new URLSearchParams({
        name: contactInfo.name,
        email: contactInfo.email,
        phone: contactInfo.phone,
        redirect_after: 'booking-blueprint',
        ...trackingParams, // Pass tracking params through
      });

      router.push(`/claim-your-county?${params.toString()}`);
    } catch (error: unknown) {
      console.error('Submission error:', error);
      setStatus('error');
      const errorMsg = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      setErrorMessage(errorMsg);
    }
  };

  // ==================== STYLES ====================

  const inputStyles = "w-full px-5 py-4 rounded-xl border-2 border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#83d4c0]/50 focus:border-[#83d4c0] transition-all text-lg";
  const radioStyles = "w-full px-5 py-4 rounded-xl border-2 border-white/20 bg-white/5 text-white text-left hover:bg-white/10 transition-all cursor-pointer";
  const radioSelectedStyles = "w-full px-5 py-4 rounded-xl border-2 border-[#83d4c0] bg-[#83d4c0]/10 text-white text-left cursor-pointer";
  const checkboxStyles = "w-full px-5 py-4 rounded-xl border-2 border-white/20 bg-white/5 text-white text-left hover:bg-white/10 transition-all cursor-pointer";
  const checkboxSelectedStyles = "w-full px-5 py-4 rounded-xl border-2 border-[#83d4c0] bg-[#83d4c0]/10 text-white text-left cursor-pointer";

  // ==================== PROGRESS INDICATOR ====================

  const ProgressIndicator = ({ currentPage }: { currentPage: number }) => {
    // Don't count page 0 if we skipped it
    const totalPages = hasPrefilledContact ? 4 : 5;
    const adjustedPage = hasPrefilledContact ? currentPage : currentPage + 1;

    return (
      <div className="flex items-center justify-center gap-2 mb-8">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <div
            key={idx}
            className={`h-2 rounded-full transition-all ${
              idx < adjustedPage
                ? 'w-8 bg-[#83d4c0]'
                : idx === adjustedPage - 1
                ? 'w-8 bg-gradient-to-r from-[#83d4c0] to-[#0891b2]'
                : 'w-2 bg-white/20'
            }`}
          />
        ))}
      </div>
    );
  };

  // ==================== BUTTONS ====================

  const BackButton = ({ onClick }: { onClick: () => void }) => (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 text-white/50 hover:text-[#83d4c0] transition-colors text-sm font-medium mb-6"
    >
      <ArrowLeft className="w-4 h-4" />
      Back
    </button>
  );

  const ContinueButton = ({ onClick, loading, label = 'Continue' }: { onClick: () => void; loading?: boolean; label?: string }) => (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className="w-full btn-gradient py-5 rounded-2xl font-hero font-[900] text-xl uppercase tracking-tighter shadow-lg shadow-[#0891b2]/20 hover:scale-[1.01] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
    >
      {loading ? 'Saving...' : (
        <>
          {label}
          <ArrowRight className="w-6 h-6" />
        </>
      )}
    </button>
  );

  // ==================== RENDER ====================

  return (
    <div className="space-y-6">
      <ProgressIndicator currentPage={page + 1} />

      {status === 'error' && (
        <div className="p-4 bg-red-500/20 border border-red-500/50 text-red-200 rounded-xl text-sm">
          {errorMessage}
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* PAGE 0: Contact Info */}
        {page === 0 && (
          <motion.div
            key="page0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-6">
              <h2 className="font-hero font-[900] text-2xl sm:text-3xl text-white uppercase tracking-tighter mb-2">
                Let&apos;s Get Started
              </h2>
              <p className="text-white/60">
                Tell us a bit about yourself.
              </p>
            </div>

            <input
              type="text"
              required
              placeholder="Full name *"
              className={inputStyles}
              value={contactInfo.name}
              onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
            />
            <input
              type="tel"
              required
              placeholder="Phone * +1 (555) 555-1212"
              className={inputStyles}
              value={contactInfo.phone}
              onChange={(e) => setContactInfo({ ...contactInfo, phone: formatPhoneNumber(e.target.value) })}
            />
            <input
              type="email"
              required
              placeholder="Email *"
              className={inputStyles}
              value={contactInfo.email}
              onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
            />

            <ContinueButton onClick={handlePage0Submit} />
          </motion.div>
        )}

        {/* PAGE 1: About You (Progressive) */}
        {page === 1 && (
          <motion.div
            key="page1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-6"
          >
            {!hasPrefilledContact && <BackButton onClick={() => setPage(0)} />}

            <div className="text-center mb-6">
              <h2 className="font-hero font-[900] text-2xl sm:text-3xl text-white uppercase tracking-tighter mb-2">
                About You
              </h2>
              <p className="text-white/60">
                What best describes your situation?
              </p>
            </div>

            {/* Q1: Investor Type */}
            <div className="space-y-3">
              <AnimatePresence mode="sync">
                {INVESTOR_TYPE_OPTIONS.map((option) => {
                  const isSelected = surveyData.investor_type === option.value;
                  const hasSelection = surveyData.investor_type !== '';
                  // Show if: no selection yet, OR this is the selected option
                  if (hasSelection && !isSelected) return null;
                  return (
                    <motion.button
                      key={option.value}
                      type="button"
                      onClick={() => setSurveyData({ ...surveyData, investor_type: isSelected ? '' : option.value as InvestorType })}
                      className={isSelected ? radioSelectedStyles : radioStyles}
                      initial={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {option.label}
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Q2: Full Time (Progressive - appears after Q1) */}
            <AnimatePresence>
              {showQ2 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-3 overflow-hidden"
                >
                  <label className="block text-sm font-medium text-white/80 mt-6 mb-3">
                    Is real estate investing your full time job?
                  </label>
                  <AnimatePresence mode="sync">
                    {FULL_TIME_OPTIONS.map((option) => {
                      const isSelected = surveyData.is_full_time === option.value;
                      const hasSelection = surveyData.is_full_time !== '';
                      if (hasSelection && !isSelected) return null;
                      return (
                        <motion.button
                          key={option.value}
                          type="button"
                          onClick={() => setSurveyData({ ...surveyData, is_full_time: isSelected ? '' : option.value as FullTimeStatus })}
                          className={isSelected ? radioSelectedStyles : radioStyles}
                          initial={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {option.label}
                        </motion.button>
                      );
                    })}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>

            {showQ2 && surveyData.is_full_time && (
              <ContinueButton onClick={handlePage1Submit} />
            )}
          </motion.div>
        )}

        {/* PAGE 2: Experience (Together) */}
        {page === 2 && (
          <motion.div
            key="page2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-6"
          >
            <BackButton onClick={() => setPage(1)} />

            <div className="text-center mb-6">
              <h2 className="font-hero font-[900] text-2xl sm:text-3xl text-white uppercase tracking-tighter mb-2">
                Your Experience
              </h2>
              <p className="text-white/60">
                Tell us about your track record.
              </p>
            </div>

            {/* Q3: Houses Completed */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">
                How many houses have you completed in the past twelve months?
              </label>
              <input
                type="number"
                min="0"
                required
                placeholder="Enter a number"
                className={inputStyles}
                value={surveyData.houses_completed_12mo}
                onChange={(e) => setSurveyData({
                  ...surveyData,
                  houses_completed_12mo: e.target.value === '' ? '' : parseInt(e.target.value)
                })}
              />
            </div>

            {/* Q4: Houses Goal */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">
                How many houses would you like to complete in the next twelve months?
              </label>
              <input
                type="number"
                min="0"
                required
                placeholder="Enter a number"
                className={inputStyles}
                value={surveyData.houses_goal_12mo}
                onChange={(e) => setSurveyData({
                  ...surveyData,
                  houses_goal_12mo: e.target.value === '' ? '' : parseInt(e.target.value)
                })}
              />
            </div>

            <ContinueButton onClick={handlePage2Submit} />
          </motion.div>
        )}

        {/* PAGE 3: Goals (Together) */}
        {page === 3 && (
          <motion.div
            key="page3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-6"
          >
            <BackButton onClick={() => setPage(2)} />

            <div className="text-center mb-6">
              <h2 className="font-hero font-[900] text-2xl sm:text-3xl text-white uppercase tracking-tighter mb-2">
                Your Goals
              </h2>
              <p className="text-white/60">
                What are you trying to achieve?
              </p>
            </div>

            {/* Q5: #1 Goal */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">
                What is the #1 thing you want to achieve through real estate investing?
              </label>
              <textarea
                rows={3}
                maxLength={255}
                placeholder="Tell us your main goal..."
                className={`${inputStyles} resize-none`}
                value={surveyData.goal_achieve}
                onChange={(e) => setSurveyData({ ...surveyData, goal_achieve: e.target.value })}
              />
              <p className="text-xs text-white/40 text-right">{surveyData.goal_achieve.length}/255</p>
            </div>

            {/* Q6: #1 Struggle */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">
                What is your #1 biggest struggle in achieving your real estate investing goals?
              </label>
              <textarea
                rows={3}
                maxLength={255}
                placeholder="Tell us what's holding you back..."
                className={`${inputStyles} resize-none`}
                value={surveyData.biggest_struggle}
                onChange={(e) => setSurveyData({ ...surveyData, biggest_struggle: e.target.value })}
              />
              <p className="text-xs text-white/40 text-right">{surveyData.biggest_struggle.length}/255</p>
            </div>

            <ContinueButton onClick={handlePage3Submit} />
          </motion.div>
        )}

        {/* PAGE 4: Probate Interest (Multi-select) */}
        {page === 4 && (
          <motion.div
            key="page4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-6"
          >
            <BackButton onClick={() => setPage(3)} />

            <div className="text-center mb-6">
              <h2 className="font-hero font-[900] text-2xl sm:text-3xl text-white uppercase tracking-tighter mb-2">
                Probate Interest
              </h2>
              <p className="text-white/60">
                What has sparked your interest in probate investing?
              </p>
            </div>

            {/* Q7: Probate Interest */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-white/80 mb-3">
                Select all that apply:
              </label>
              {PROBATE_INTEREST_OPTIONS.map((option) => {
                const isSelected = surveyData.probate_interest.includes(option.value as ProbateInterest);
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      const newInterests = isSelected
                        ? surveyData.probate_interest.filter(i => i !== option.value)
                        : [...surveyData.probate_interest, option.value as ProbateInterest];
                      setSurveyData({ ...surveyData, probate_interest: newInterests });
                    }}
                    className={isSelected ? checkboxSelectedStyles : checkboxStyles}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                        isSelected ? 'border-[#83d4c0] bg-[#83d4c0]' : 'border-white/40'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-black" />}
                      </span>
                      {option.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <ContinueButton
              onClick={handlePage4Submit}
              loading={status === 'submitting'}
              label="Continue to County Selection"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
