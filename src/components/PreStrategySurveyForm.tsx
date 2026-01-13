'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, MapPin, ArrowRight, ArrowLeft, Calendar, CheckCircle2, User, Target, Building2, MessageSquare } from 'lucide-react';

// ==================== TYPES ====================

type InvestorType = 'experienced' | 'completed_one' | 'looking_first' | 'not_investor' | '';
type FullTimeStatus = 'yes' | 'day_job' | 'retired' | '';
type Strategy = 'long_term_rentals' | 'short_term_rentals' | 'buy_fix_sell' | 'wholesaling' | 'agent' | 'other' | 'unsure';
type ExperienceYears = '0-6_months' | '6mo-1yr' | '1-2yrs' | '2+yrs' | 'less_than_1yr' | '1-5yrs' | '5+yrs' | '';

interface SurveyData {
  investor_type: InvestorType;
  is_full_time: FullTimeStatus;
  strategies: Strategy[];
  experience_years: ExperienceYears;
  deals_last_12_months: number | null;
  goal: string;
  biggest_struggle: string;
  current_sources: string;
  why_now: string;
  commitment_level: number | null;
}

interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface Jurisdiction {
  id: number;
  jurisdiction_code: string;
  state_code: string;
  county_name: string;
  display_name: string;
  status: string;
}

interface StateSelection {
  id: string;
  stateCode: string;
  counties: string[];
  searchQuery: string;
}

// ==================== CALENDLY EMBED ====================

interface CalendlyEmbedProps {
  url: string;
  prefill?: {
    firstName?: string;
    lastName?: string;
    email?: string;
  };
  onEventScheduled?: () => void;
}

function CalendlyEmbed({ url, prefill, onEventScheduled }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Calendly && containerRef.current) {
        window.Calendly.initInlineWidget({
          url: url,
          parentElement: containerRef.current,
          prefill: {
            firstName: prefill?.firstName,
            lastName: prefill?.lastName,
            email: prefill?.email,
          },
        });
      }
    };

    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event === 'calendly.event_scheduled') {
        onEventScheduled?.();
      }
    };

    window.addEventListener('message', handleCalendlyEvent);

    return () => {
      window.removeEventListener('message', handleCalendlyEvent);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [url, prefill, onEventScheduled]);

  return (
    <div
      ref={containerRef}
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: {
          firstName?: string;
          lastName?: string;
          email?: string;
        };
        hideEventTypeDetails?: boolean;
        hideGdprBanner?: boolean;
      }) => void;
    };
  }
}

// ==================== CONSTANTS ====================

const INVESTOR_TYPE_OPTIONS = [
  { value: 'experienced', label: "I'm an experienced investor looking for additional sources of off-market properties." },
  { value: 'completed_one', label: "I've completed at least 1 property and want to grow my real estate business." },
  { value: 'looking_first', label: "I've always wanted to invest but am still looking for my first property." },
  { value: 'not_investor', label: "I'm NOT an investor, just looking for an off-market property." },
];

const FULL_TIME_OPTIONS = [
  { value: 'yes', label: "Yes, I'm a full-time real estate investor." },
  { value: 'day_job', label: "I've got a day job, real estate is something I do on the side." },
  { value: 'retired', label: "I'm retired, but real estate is something I do on the side." },
];

const STRATEGY_OPTIONS = [
  { value: 'long_term_rentals', label: 'Long Term Rentals' },
  { value: 'short_term_rentals', label: 'Short Term Rentals' },
  { value: 'buy_fix_sell', label: 'Buy-Fix-Sell' },
  { value: 'wholesaling', label: 'Wholesaling' },
  { value: 'agent', label: 'Real Estate Agent' },
  { value: 'other', label: 'Other' },
  { value: 'unsure', label: 'Unsure' },
];

const EXPERIENCE_NEW_OPTIONS = [
  { value: '0-6_months', label: '0-6 months' },
  { value: '6mo-1yr', label: '6 months - 1 year' },
  { value: '1-2yrs', label: '1 - 2 years' },
  { value: '2+yrs', label: '2+ years' },
];

const EXPERIENCE_EXISTING_OPTIONS = [
  { value: 'less_than_1yr', label: 'Less than 1 year' },
  { value: '1-5yrs', label: '1-5 years' },
  { value: '5+yrs', label: '5+ years' },
];

const US_STATES = [
  { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' }, { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' }, { code: 'CA', name: 'California' }, { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' }, { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' }, { code: 'HI', name: 'Hawaii' }, { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' }, { code: 'IN', name: 'Indiana' }, { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' }, { code: 'KY', name: 'Kentucky' }, { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' }, { code: 'MD', name: 'Maryland' }, { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' }, { code: 'MN', name: 'Minnesota' }, { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' }, { code: 'MT', name: 'Montana' }, { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' }, { code: 'NH', name: 'New Hampshire' }, { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' }, { code: 'NY', name: 'New York' }, { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' }, { code: 'OH', name: 'Ohio' }, { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' }, { code: 'PA', name: 'Pennsylvania' }, { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' }, { code: 'SD', name: 'South Dakota' }, { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' }, { code: 'UT', name: 'Utah' }, { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' }, { code: 'WA', name: 'Washington' }, { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' }, { code: 'WY', name: 'Wyoming' }
];

// ==================== MAIN COMPONENT ====================

export const PreStrategySurveyForm = () => {
  const searchParams = useSearchParams();

  // Form state - now 6 steps
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Contact info (Step 1) - pre-fill from URL params if available
  // AC merge fields: ?email=%EMAIL%&firstName=%FIRSTNAME%&lastName=%LASTNAME%&phone=%PHONE%
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    firstName: searchParams.get('firstName') || searchParams.get('first_name') || '',
    lastName: searchParams.get('lastName') || searchParams.get('last_name') || '',
    email: searchParams.get('email') || '',
    phone: searchParams.get('phone') || '',
  });

  // Survey data
  const [surveyData, setSurveyData] = useState<SurveyData>({
    investor_type: '',
    is_full_time: '',
    strategies: [],
    experience_years: '',
    deals_last_12_months: null,
    goal: '',
    biggest_struggle: '',
    current_sources: '',
    why_now: '',
    commitment_level: null,
  });

  // County selection
  const [jurisdictions, setJurisdictions] = useState<Jurisdiction[]>([]);
  const [stateSelections, setStateSelections] = useState<StateSelection[]>([
    { id: '1', stateCode: '', counties: [], searchQuery: '' }
  ]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  // Booking state
  const [bookingComplete, setBookingComplete] = useState(false);

  // ==================== HELPERS ====================

  const isExperiencedInvestor = surveyData.investor_type === 'experienced' || surveyData.investor_type === 'completed_one';
  const isNewInvestor = surveyData.investor_type === 'looking_first';
  const isNotInvestor = surveyData.investor_type === 'not_investor';

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

  // ==================== COUNTY SELECTION LOGIC ====================

  const fetchCountiesForState = async (stateCode: string) => {
    if (!stateCode) return;

    const { data, error } = await supabase
      .from('jurisdictions_public')
      .select('id, jurisdiction_code, state_code, county_name, display_name, status')
      .eq('state_code', stateCode)
      .order('county_name');

    if (!error && data) {
      setJurisdictions(prev => {
        const otherStates = prev.filter(j => j.state_code !== stateCode);
        return [...otherStates, ...data];
      });
    }
  };

  const getCountiesForState = (stateCode: string) => {
    return jurisdictions.filter(j => j.state_code === stateCode);
  };

  const getFilteredCounties = (stateCode: string, query: string, selectedCounties: string[]) => {
    const stateCounties = getCountiesForState(stateCode);
    if (!query.trim()) return stateCounties.filter(c => !selectedCounties.includes(c.county_name));
    return stateCounties
      .filter(c =>
        c.county_name.toLowerCase().includes(query.toLowerCase()) &&
        !selectedCounties.includes(c.county_name)
      );
  };

  const handleStateChange = (selectionId: string, stateCode: string) => {
    setStateSelections(prev => prev.map(sel =>
      sel.id === selectionId
        ? { ...sel, stateCode, counties: [], searchQuery: '' }
        : sel
    ));
    fetchCountiesForState(stateCode);
  };

  const handleSearchChange = (selectionId: string, query: string) => {
    setStateSelections(prev => prev.map(sel =>
      sel.id === selectionId
        ? { ...sel, searchQuery: query }
        : sel
    ));
    setActiveDropdown(selectionId);
  };

  const addCounty = (selectionId: string, countyName: string) => {
    setStateSelections(prev => prev.map(sel => {
      if (sel.id !== selectionId) return sel;
      if (sel.counties.length >= 3) return sel;
      if (sel.counties.includes(countyName)) return sel;
      return { ...sel, counties: [...sel.counties, countyName], searchQuery: '' };
    }));
    setTimeout(() => {
      inputRefs.current[selectionId]?.focus();
    }, 0);
  };

  const removeCounty = (selectionId: string, countyName: string) => {
    setStateSelections(prev => prev.map(sel => {
      if (sel.id !== selectionId) return sel;
      return { ...sel, counties: sel.counties.filter(c => c !== countyName) };
    }));
  };

  const addStateSelection = () => {
    if (stateSelections.length < 3) {
      setStateSelections(prev => [...prev, {
        id: Date.now().toString(),
        stateCode: '',
        counties: [],
        searchQuery: ''
      }]);
    }
  };

  const removeStateSelection = (selectionId: string) => {
    if (stateSelections.length > 1) {
      setStateSelections(prev => prev.filter(sel => sel.id !== selectionId));
    }
  };

  // ==================== STEP NAVIGATION ====================

  const clearError = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  const handleStep1Submit = () => {
    if (!contactInfo.firstName || !contactInfo.lastName || !contactInfo.email || !contactInfo.phone) {
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
    setStep(2);
  };

  const handleStep2Submit = () => {
    if (!surveyData.investor_type) {
      setStatus('error');
      setErrorMessage('Please select what best describes you.');
      return;
    }
    if (isExperiencedInvestor && !surveyData.is_full_time) {
      setStatus('error');
      setErrorMessage('Please indicate if real estate is your full-time job.');
      return;
    }
    clearError();
    setStep(3);
  };

  const handleStep3Submit = () => {
    if (!isNotInvestor && surveyData.strategies.length === 0) {
      setStatus('error');
      setErrorMessage('Please select at least one investment strategy.');
      return;
    }
    if (!surveyData.experience_years) {
      setStatus('error');
      setErrorMessage('Please select your experience level.');
      return;
    }
    clearError();
    setStep(4);
  };

  const handleStep4Submit = () => {
    if (!surveyData.goal) {
      setStatus('error');
      setErrorMessage('Please tell us your #1 goal.');
      return;
    }
    if (!surveyData.biggest_struggle) {
      setStatus('error');
      setErrorMessage('Please tell us your biggest challenge.');
      return;
    }
    clearError();
    setStep(5);
  };

  const handleStep5Submit = async () => {
    const jurisdictionsRequested = stateSelections
      .filter(sel => sel.stateCode && sel.counties.length > 0)
      .map(sel => ({
        state: sel.stateCode,
        counties: sel.counties
      }));

    if (jurisdictionsRequested.length === 0) {
      setStatus('error');
      setErrorMessage('Please select a state and at least one county.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Save to Supabase
      await supabase
        .from('prospect_responses')
        .insert([{
          email: contactInfo.email,
          name: `${contactInfo.firstName} ${contactInfo.lastName}`,
          phone: contactInfo.phone,
          source: 'ppm_pre_strategy_survey',
          jurisdictions_requested: jurisdictionsRequested,
          survey_data: surveyData
        }]);

      // Call n8n webhook
      try {
        await fetch('https://whitebox-one.onrender.com/webhook/ppm-survey-complete', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: contactInfo.email,
            firstName: contactInfo.firstName,
            lastName: contactInfo.lastName,
            phone: contactInfo.phone,
            surveyData: surveyData,
            jurisdictionsRequested: jurisdictionsRequested
          })
        });
      } catch (webhookError) {
        console.error('Webhook error:', webhookError);
      }

      setStatus('idle');
      setStep(6);
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
  const checkboxStyles = "px-4 py-3 rounded-lg border-2 border-white/20 bg-white/5 text-white text-sm hover:bg-white/10 transition-all cursor-pointer";
  const checkboxSelectedStyles = "px-4 py-3 rounded-lg border-2 border-[#83d4c0] bg-[#83d4c0]/10 text-white text-sm cursor-pointer";

  // ==================== PROGRESS INDICATOR ====================

  const ProgressIndicator = ({ currentStep }: { currentStep: number }) => {
    const steps = [
      { num: 1, label: 'Contact', icon: User },
      { num: 2, label: 'Type', icon: Target },
      { num: 3, label: 'Strategy', icon: Building2 },
      { num: 4, label: 'Goals', icon: MessageSquare },
      { num: 5, label: 'Markets', icon: MapPin },
      { num: 6, label: 'Book', icon: Calendar },
    ];

    return (
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center gap-1 sm:gap-2">
          {steps.map((s, idx) => (
            <React.Fragment key={s.num}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${
                    s.num < currentStep
                      ? 'bg-[#83d4c0] text-black'
                      : s.num === currentStep
                      ? 'bg-gradient-to-r from-[#83d4c0] to-[#0891b2] text-black'
                      : 'bg-white/10 text-white/40'
                  }`}
                >
                  {s.num < currentStep ? (
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <s.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </div>
                <span className={`text-[10px] sm:text-xs mt-1 hidden sm:block ${
                  s.num <= currentStep ? 'text-white/80' : 'text-white/40'
                }`}>
                  {s.label}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div className={`w-4 sm:w-8 h-0.5 ${
                  s.num < currentStep ? 'bg-[#83d4c0]' : 'bg-white/20'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  // ==================== BACK BUTTON ====================

  const BackButton = ({ onClick, label }: { onClick: () => void; label: string }) => (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 text-white/50 hover:text-[#83d4c0] transition-colors text-sm font-medium"
    >
      <ArrowLeft className="w-4 h-4" />
      {label}
    </button>
  );

  // ==================== CONTINUE BUTTON ====================

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
      <ProgressIndicator currentStep={step} />

      {status === 'error' && (
        <div className="p-4 bg-red-500/20 border border-red-500/50 text-red-200 rounded-xl text-sm">
          {errorMessage}
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* STEP 1: Contact Info */}
        {step === 1 && (
          <motion.div
            key="step1"
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

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="First name *"
                className={inputStyles}
                value={contactInfo.firstName}
                onChange={(e) => setContactInfo({ ...contactInfo, firstName: e.target.value })}
              />
              <input
                type="text"
                required
                placeholder="Last name *"
                className={inputStyles}
                value={contactInfo.lastName}
                onChange={(e) => setContactInfo({ ...contactInfo, lastName: e.target.value })}
              />
            </div>
            <input
              type="email"
              required
              placeholder="Email *"
              className={inputStyles}
              value={contactInfo.email}
              onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
            />
            <input
              type="tel"
              required
              placeholder="Phone * +1 (555) 555-1212"
              className={inputStyles}
              value={contactInfo.phone}
              onChange={(e) => setContactInfo({ ...contactInfo, phone: formatPhoneNumber(e.target.value) })}
            />

            <ContinueButton onClick={handleStep1Submit} />
          </motion.div>
        )}

        {/* STEP 2: Investor Type + Full-Time Status */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-6"
          >
            <BackButton onClick={() => setStep(1)} label="Back" />

            <div className="text-center mb-6">
              <h2 className="font-hero font-[900] text-2xl sm:text-3xl text-white uppercase tracking-tighter mb-2">
                About You
              </h2>
              <p className="text-white/60">
                What best describes your situation?
              </p>
            </div>

            {/* Investor Type */}
            <div className="space-y-3">
              {INVESTOR_TYPE_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setSurveyData({ ...surveyData, investor_type: option.value as InvestorType })}
                  className={surveyData.investor_type === option.value ? radioSelectedStyles : radioStyles}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Full Time (conditional) */}
            {isExperiencedInvestor && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-3"
              >
                <label className="block text-sm font-medium text-white/80">
                  Is real estate investing your full-time job?
                </label>
                {FULL_TIME_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setSurveyData({ ...surveyData, is_full_time: option.value as FullTimeStatus })}
                    className={surveyData.is_full_time === option.value ? radioSelectedStyles : radioStyles}
                  >
                    {option.label}
                  </button>
                ))}
              </motion.div>
            )}

            <ContinueButton onClick={handleStep2Submit} />
          </motion.div>
        )}

        {/* STEP 3: Strategy + Experience */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-6"
          >
            <BackButton onClick={() => setStep(2)} label="Back" />

            <div className="text-center mb-6">
              <h2 className="font-hero font-[900] text-2xl sm:text-3xl text-white uppercase tracking-tighter mb-2">
                Your Strategy
              </h2>
              <p className="text-white/60">
                Tell us about your investing approach.
              </p>
            </div>

            {/* Investment Strategy */}
            {!isNotInvestor && (
              <div className="space-y-3">
                <label className="block text-sm font-medium text-white/80">
                  What is your investing strategy? (select all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                  {STRATEGY_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        const strategies = surveyData.strategies.includes(option.value as Strategy)
                          ? surveyData.strategies.filter(s => s !== option.value)
                          : [...surveyData.strategies, option.value as Strategy];
                        setSurveyData({ ...surveyData, strategies });
                      }}
                      className={surveyData.strategies.includes(option.value as Strategy) ? checkboxSelectedStyles : checkboxStyles}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Experience Years */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-white/80">
                {isNewInvestor
                  ? 'How long have you been thinking about investing?'
                  : 'How long have you been investing?'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(isNewInvestor ? EXPERIENCE_NEW_OPTIONS : EXPERIENCE_EXISTING_OPTIONS).map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setSurveyData({ ...surveyData, experience_years: option.value as ExperienceYears })}
                    className={surveyData.experience_years === option.value ? radioSelectedStyles : radioStyles}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <ContinueButton onClick={handleStep3Submit} />
          </motion.div>
        )}

        {/* STEP 4: Goal + Struggle */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-6"
          >
            <BackButton onClick={() => setStep(3)} label="Back" />

            <div className="text-center mb-6">
              <h2 className="font-hero font-[900] text-2xl sm:text-3xl text-white uppercase tracking-tighter mb-2">
                Your Goals
              </h2>
              <p className="text-white/60">
                What are you trying to achieve?
              </p>
            </div>

            {/* Goal */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">
                What is the #1 thing you want to achieve through real estate?
              </label>
              <textarea
                rows={3}
                placeholder="Tell us your main goal..."
                className={`${inputStyles} resize-none`}
                value={surveyData.goal}
                onChange={(e) => setSurveyData({ ...surveyData, goal: e.target.value })}
              />
            </div>

            {/* Biggest Struggle */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">
                {isNewInvestor
                  ? 'What is currently stopping you from getting started?'
                  : 'What is your biggest challenge right now?'}
              </label>
              <textarea
                rows={3}
                placeholder="Tell us what's holding you back..."
                className={`${inputStyles} resize-none`}
                value={surveyData.biggest_struggle}
                onChange={(e) => setSurveyData({ ...surveyData, biggest_struggle: e.target.value })}
              />
            </div>

            <ContinueButton onClick={handleStep4Submit} />
          </motion.div>
        )}

        {/* STEP 5: County Selection */}
        {step === 5 && (
          <motion.div
            key="step5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-6"
          >
            <BackButton onClick={() => setStep(4)} label="Back" />

            <div className="text-center mb-6">
              <h2 className="font-hero font-[900] text-2xl sm:text-3xl text-white uppercase tracking-tighter mb-2">
                Your Markets
              </h2>
              <p className="text-white/60">
                Where do you want to invest?
              </p>
            </div>

            {/* County Selection */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-white/80">
                <MapPin className="w-4 h-4 inline mr-1" />
                Select your investment markets (up to 3 counties per state)
              </label>

              <AnimatePresence>
                {stateSelections.map((selection, index) => (
                  <motion.div
                    key={selection.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-white/60">Market {index + 1}</span>
                      {stateSelections.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeStateSelection(selection.id)}
                          className="text-white/40 hover:text-red-400 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      )}
                    </div>

                    <select
                      value={selection.stateCode}
                      onChange={(e) => handleStateChange(selection.id, e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-white/20 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[#83d4c0]/50 focus:border-[#83d4c0] transition-all mb-3"
                    >
                      <option value="" className="bg-[#0a0a0a]">Select a state...</option>
                      {US_STATES.map(state => (
                        <option key={state.code} value={state.code} className="bg-[#0a0a0a]">
                          {state.name} ({state.code})
                        </option>
                      ))}
                    </select>

                    {selection.stateCode && (
                      <div className="space-y-2">
                        {selection.counties.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-2">
                            {selection.counties.map(county => (
                              <span
                                key={county}
                                className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#83d4c0]/20 border border-[#83d4c0]/30 rounded-full text-sm text-white"
                              >
                                {county}
                                <button
                                  type="button"
                                  onClick={() => removeCounty(selection.id, county)}
                                  className="text-white/60 hover:text-red-400 transition-colors ml-1"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </span>
                            ))}
                          </div>
                        )}

                        {selection.counties.length < 3 && (
                          <div className="relative">
                            <input
                              ref={(el) => { inputRefs.current[selection.id] = el; }}
                              type="text"
                              value={selection.searchQuery}
                              onChange={(e) => handleSearchChange(selection.id, e.target.value)}
                              onFocus={() => setActiveDropdown(selection.id)}
                              onBlur={() => setTimeout(() => setActiveDropdown(null), 200)}
                              placeholder={selection.counties.length === 0 ? 'Search counties...' : `${3 - selection.counties.length} remaining...`}
                              className="w-full px-4 py-2 rounded-lg border-2 border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#83d4c0]/50 focus:border-[#83d4c0] transition-all text-sm"
                            />

                            {activeDropdown === selection.id && (
                              <div className="absolute z-10 w-full mt-1 bg-[#1a1a1a] border border-white/20 rounded-xl shadow-lg max-h-64 overflow-y-auto">
                                {getFilteredCounties(selection.stateCode, selection.searchQuery, selection.counties).length > 0 ? (
                                  getFilteredCounties(selection.stateCode, selection.searchQuery, selection.counties).map(jurisdiction => (
                                    <button
                                      key={jurisdiction.id}
                                      type="button"
                                      onMouseDown={(e) => e.preventDefault()}
                                      onClick={() => addCounty(selection.id, jurisdiction.county_name)}
                                      className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/10 flex items-center justify-between transition-colors"
                                    >
                                      <span>{jurisdiction.county_name}</span>
                                      {jurisdiction.status === 'active' && (
                                        <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">Live</span>
                                      )}
                                    </button>
                                  ))
                                ) : (
                                  <div className="px-4 py-3 text-sm text-white/50">
                                    {getCountiesForState(selection.stateCode).length === 0
                                      ? 'Loading counties...'
                                      : 'No matching counties found'
                                    }
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {stateSelections.length < 3 && (
                <button
                  type="button"
                  onClick={addStateSelection}
                  className="w-full py-3 border-2 border-dashed border-white/20 rounded-xl text-white/50 hover:border-[#83d4c0] hover:text-[#83d4c0] transition-all flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add Another State
                </button>
              )}
            </div>

            <ContinueButton
              onClick={handleStep5Submit}
              loading={status === 'submitting'}
              label="Book Your Strategy Call"
            />
          </motion.div>
        )}

        {/* STEP 6: Calendly Booking */}
        {step === 6 && (
          <motion.div
            key="step6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-4"
          >
            <AnimatePresence mode="wait">
              {!bookingComplete ? (
                <motion.div
                  key="calendly"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h2 className="font-hero font-[900] text-2xl sm:text-3xl text-white uppercase tracking-tighter mb-2">
                      Book Your Strategy Call
                    </h2>
                    <p className="text-white/60">
                      Select a time for your free 15-minute blueprint session.
                    </p>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-white/20 bg-white/5">
                    <div className="p-4 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-[#83d4c0]" />
                        <span className="text-sm font-medium text-white/80">
                          Free 15-Minute Homeflip.ai Blueprint Session
                        </span>
                      </div>
                    </div>
                    <CalendlyEmbed
                      url="https://calendly.com/wb-props/homeflip-15-min-blueprint?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=5EEADC"
                      prefill={{
                        firstName: contactInfo.firstName,
                        lastName: contactInfo.lastName,
                        email: contactInfo.email,
                      }}
                      onEventScheduled={() => setBookingComplete(true)}
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12"
                >
                  <div className="flex flex-col items-center text-center max-w-md mx-auto">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-green-400/20 to-emerald-500/20 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-400" />
                    </div>
                    <h2 className="font-hero font-[900] text-3xl text-white uppercase tracking-tighter mb-3">
                      You&apos;re All Set!
                    </h2>
                    <p className="text-lg text-white/60 leading-relaxed">
                      Your strategy call is booked. Check your email for confirmation and calendar invite.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
