'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, MapPin, ArrowRight, ArrowLeft, Lock, Calendar, CheckCircle2 } from 'lucide-react';

// Calendly Embed Component
interface CalendlyEmbedProps {
  url: string;
  prefill?: {
    name?: string;
    email?: string;
  };
  onEventScheduled?: (eventData?: { date?: string; time?: string }) => void;
}

// Helper to split full name into first and last
function splitName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: '' };
  }
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(' ')
  };
}

function CalendlyEmbed({ url, prefill, onEventScheduled }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Calendly && containerRef.current) {
        const nameParts = prefill?.name ? splitName(prefill.name) : { firstName: '', lastName: '' };

        window.Calendly.initInlineWidget({
          url: url,
          parentElement: containerRef.current,
          prefill: {
            firstName: nameParts.firstName,
            lastName: nameParts.lastName,
            email: prefill?.email,
          },
        });
      }
    };

    // Listen for Calendly events
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event === 'calendly.event_scheduled') {
        // Extract event details if available
        const eventData = e.data.payload?.event;
        onEventScheduled?.({
          date: eventData?.start_time,
          time: eventData?.start_time,
        });
      }
    };

    window.addEventListener('message', handleCalendlyEvent);

    return () => {
      // Cleanup
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

// Add Calendly type to window
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

interface ClaimCountyFormDarkProps {
  step: 1 | 2 | 3 | 4;
  setStep: (step: 1 | 2 | 3 | 4) => void;
}

function ClaimCountyFormDark({ step, setStep }: ClaimCountyFormDarkProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [jurisdictions, setJurisdictions] = useState<Jurisdiction[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: searchParams.get('email') || '',
    phone: '',
  });
  const [stateSelections, setStateSelections] = useState<StateSelection[]>([
    { id: '1', stateCode: '', counties: [], searchQuery: '' }
  ]);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [bookingComplete, setBookingComplete] = useState(false);
  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  // Format phone number
  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const digits = numbers.startsWith('1') ? numbers.slice(1) : numbers;
    const limited = digits.slice(0, 10);
    if (limited.length === 0) return '';
    if (limited.length <= 3) return `+1 (${limited}`;
    if (limited.length <= 6) return `+1 (${limited.slice(0, 3)}) ${limited.slice(3)}`;
    return `+1 (${limited.slice(0, 3)}) ${limited.slice(3, 6)}-${limited.slice(6)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, phone: formatPhoneNumber(e.target.value) });
  };

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

  useEffect(() => {
    setLoading(false);
  }, []);

  const states = [
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

  const getCountiesForState = (stateCode: string) => jurisdictions.filter(j => j.state_code === stateCode);

  const getFilteredCounties = (stateCode: string, query: string, selectedCounties: string[]) => {
    const stateCounties = getCountiesForState(stateCode);
    if (!query.trim()) return stateCounties.filter(c => !selectedCounties.includes(c.county_name));
    return stateCounties.filter(c =>
      c.county_name.toLowerCase().includes(query.toLowerCase()) && !selectedCounties.includes(c.county_name)
    );
  };

  const handleStateChange = (selectionId: string, stateCode: string) => {
    setStateSelections(prev => prev.map(sel =>
      sel.id === selectionId ? { ...sel, stateCode, counties: [], searchQuery: '' } : sel
    ));
    fetchCountiesForState(stateCode);
  };

  const handleSearchChange = (selectionId: string, query: string) => {
    setStateSelections(prev => prev.map(sel =>
      sel.id === selectionId ? { ...sel, searchQuery: query } : sel
    ));
    setActiveDropdown(selectionId);
  };

  const addCounty = (selectionId: string, countyName: string) => {
    setStateSelections(prev => prev.map(sel => {
      if (sel.id !== selectionId || sel.counties.length >= 3 || sel.counties.includes(countyName)) return sel;
      return { ...sel, counties: [...sel.counties, countyName], searchQuery: '' };
    }));
    setTimeout(() => inputRefs.current[selectionId]?.focus(), 0);
  };

  const removeCounty = (selectionId: string, countyName: string) => {
    setStateSelections(prev => prev.map(sel =>
      sel.id === selectionId ? { ...sel, counties: sel.counties.filter(c => c !== countyName) } : sel
    ));
  };

  const addStateSelection = () => {
    if (stateSelections.length < 3) {
      setStateSelections(prev => [...prev, { id: Date.now().toString(), stateCode: '', counties: [], searchQuery: '' }]);
    }
  };

  const removeStateSelection = (selectionId: string) => {
    if (stateSelections.length > 1) {
      setStateSelections(prev => prev.filter(sel => sel.id !== selectionId));
    }
  };

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

  const handleNextStep = () => {
    if (!formData.name || !formData.phone || !formData.email) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }
    if (!isValidEmail(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    setStatus('idle');
    setErrorMessage('');
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) { handleNextStep(); return; }

    setStatus('submitting');
    setErrorMessage('');

    const jurisdictionsRequested = stateSelections
      .filter(sel => sel.stateCode && sel.counties.length > 0)
      .map(sel => ({ state: sel.stateCode, counties: sel.counties }));

    if (jurisdictionsRequested.length === 0) {
      setStatus('error');
      setErrorMessage('Please select a state and at least one county.');
      return;
    }

    try {
      await supabase.from('prospect_responses').insert([{
        email: formData.email,
        name: formData.name,
        phone: formData.phone,
        source: 'hub_upgrade_page',
        jurisdictions_requested: jurisdictionsRequested
      }]);

      const { error } = await supabase.from('prospects').insert([{
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        source: 'hub_upgrade_page',
        jurisdictions_requested: jurisdictionsRequested
      }]);

      if (error && error.code !== '23505') throw error;

      // Move to confirmation step with Calendly embed
      setStep(3);
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#83d4c0]"></div>
      </div>
    );
  }

  const inputStyles = "w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] focus:outline-none focus:ring-2 focus:ring-[#83d4c0]/30 focus:border-[#83d4c0]/50 transition-all text-[15px] text-white placeholder:text-white/30";

  const ProgressIndicator = ({ currentStep }: { currentStep: 1 | 2 | 3 | 4 }) => {
    const progressWidth = currentStep === 1 ? '0%' : currentStep === 2 ? '33%' : currentStep === 3 ? '66%' : '100%';
    return (
      <div className="flex items-center justify-center mb-6">
        <div className="relative flex items-center w-44">
          <div className="absolute left-0 right-0 h-0.5 bg-white/10 rounded-full" />
          <div
            className="absolute left-0 h-0.5 bg-gradient-to-r from-[#83d4c0] to-[#0891b2] rounded-full transition-all duration-300"
            style={{ width: progressWidth }}
          />
          <div className="relative flex justify-between w-full">
            {[1, 2, 3, 4].map((dotStep) => (
              <div
                key={dotStep}
                className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                  dotStep <= currentStep
                    ? 'bg-gradient-to-r from-[#83d4c0] to-[#0891b2] border-transparent'
                    : 'bg-transparent border-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {step <= 2 && <ProgressIndicator currentStep={step} />}

      {status === 'error' && (
        <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl text-sm">
          {errorMessage}
        </div>
      )}

      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4 max-w-md"
          >
            <input
              type="text"
              required
              placeholder="Full name"
              className={inputStyles}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="tel"
              required
              placeholder="Phone +1 (555) 555-1212"
              className={inputStyles}
              value={formData.phone}
              onChange={handlePhoneChange}
            />
            <input
              type="email"
              required
              placeholder="Email"
              className={inputStyles}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <button
              type="submit"
              className="w-full btn-gradient py-4 rounded-xl font-bold text-sm uppercase tracking-wide hover:scale-[1.01] transition-all flex items-center justify-center gap-2 mt-2"
            >
              Select Your Markets
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        ) : step === 2 ? (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-5"
          >
            {/* Step 2 Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-sans font-semibold text-xl" style={{ color: 'rgba(255,255,255,0.95)' }}>
                  Select Your Markets
                </h2>
                <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Choose up to 3 counties per state
                </p>
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex items-center gap-1.5 text-white/40 hover:text-white/60 transition-colors text-sm"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
              </button>
            </div>

            <div className="space-y-3">
              <AnimatePresence>
                {stateSelections.map((selection, index) => (
                  <motion.div
                    key={selection.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-white/[0.02] rounded-xl border border-white/[0.06]"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-white/40">Market {index + 1}</span>
                      {stateSelections.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeStateSelection(selection.id)}
                          className="text-white/30 hover:text-red-400 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <select
                      value={selection.stateCode}
                      onChange={(e) => handleStateChange(selection.id, e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/[0.03] focus:outline-none focus:ring-2 focus:ring-[#83d4c0]/30 focus:border-[#83d4c0]/50 transition-all text-white text-sm mb-3"
                    >
                      <option value="" className="bg-[#0a0a0f]">Select a state...</option>
                      {states.map(state => (
                        <option key={state.code} value={state.code} className="bg-[#0a0a0f]">
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
                                className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#83d4c0]/10 border border-[#83d4c0]/30 rounded-full text-xs text-white/80"
                              >
                                {county}
                                <button
                                  type="button"
                                  onClick={() => removeCounty(selection.id, county)}
                                  className="text-white/40 hover:text-red-400 transition-colors ml-0.5"
                                >
                                  <X className="w-3 h-3" />
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
                              className="w-full px-3 py-2 rounded-lg border border-white/10 bg-white/[0.02] focus:outline-none focus:ring-2 focus:ring-[#83d4c0]/30 focus:border-[#83d4c0]/50 transition-all text-white text-sm placeholder:text-white/30"
                            />

                            {activeDropdown === selection.id && (
                              <div className="absolute z-10 w-full mt-1 bg-[#0f0f14] border border-white/10 rounded-lg shadow-xl max-h-48 overflow-y-auto">
                                {getFilteredCounties(selection.stateCode, selection.searchQuery, selection.counties).length > 0 ? (
                                  getFilteredCounties(selection.stateCode, selection.searchQuery, selection.counties).map(jurisdiction => (
                                    <button
                                      key={jurisdiction.id}
                                      type="button"
                                      onMouseDown={(e) => e.preventDefault()}
                                      onClick={() => addCounty(selection.id, jurisdiction.county_name)}
                                      className="w-full px-3 py-2 text-left text-sm text-white/70 hover:bg-white/[0.05] flex items-center justify-between transition-colors"
                                    >
                                      <span>{jurisdiction.county_name}</span>
                                      {jurisdiction.status === 'active' && (
                                        <span className="text-[10px] px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded">Live</span>
                                      )}
                                    </button>
                                  ))
                                ) : (
                                  <div className="px-3 py-2 text-sm text-white/40">
                                    {getCountiesForState(selection.stateCode).length === 0
                                      ? 'Loading counties...'
                                      : 'No matching counties'
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
                  className="w-full py-2.5 border border-dashed border-white/10 rounded-xl text-white/40 hover:border-[#83d4c0]/50 hover:text-[#83d4c0] transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Plus className="w-4 h-4" />
                  Add Another State
                </button>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full btn-gradient py-3.5 rounded-xl font-bold text-sm uppercase tracking-wide hover:scale-[1.01] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? 'Processing...' : (
                <>
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.div>
        ) : step === 3 ? (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-8 md:py-12"
          >
            {/* Checkpoint - Centered, Spacious Layout */}
            <div className="flex flex-col items-center text-center max-w-md mx-auto">
              {/* Status Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(131,212,192,0.1)' }}
              >
                <CheckCircle2 className="w-7 h-7" style={{ color: '#83d4c0' }} />
              </div>

              {/* Headline */}
              <h2 className="font-sans font-semibold text-2xl mb-3" style={{ color: 'rgba(255,255,255,0.95)' }}>
                County Activation Pending
              </h2>

              {/* Supporting Copy */}
              <p className="text-[15px] leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Your county has been submitted. Access will be activated after setup is completed.
              </p>

              {/* CTA */}
              <button
                type="button"
                onClick={() => setStep(4)}
                className="w-full btn-gradient py-4 rounded-xl font-bold text-sm uppercase tracking-wide hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                Finalize Setup
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Expectation-Setting Line */}
              <p className="text-[13px] mt-5" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Next step: schedule your implementation call to complete activation.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="step4"
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
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h2 className="font-sans font-semibold text-2xl mb-3" style={{ color: 'rgba(255,255,255,0.95)' }}>
                      Complete County Activation
                    </h2>
                    <p className="text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      To complete county activation, schedule a short implementation call. We'll confirm your setup and activate access after the call.
                    </p>
                  </div>

                  {/* Calendly Container */}
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)'
                    }}
                  >
                    <div className="p-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.4)' }} />
                        <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>
                          Schedule your implementation call
                        </span>
                      </div>
                    </div>
                    <CalendlyEmbed
                      url="https://calendly.com/wb-props/homeflip-activation?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0a0a0f&text_color=ffffff&primary_color=189ab4"
                      prefill={{
                        name: formData.name,
                        email: formData.email,
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
                  className="py-12 md:py-16"
                >
                  {/* Confirmation State */}
                  <div className="flex flex-col items-center text-center max-w-md mx-auto">
                    {/* Status Icon */}
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: 'rgba(131,212,192,0.1)' }}
                    >
                      <CheckCircle2 className="w-8 h-8" style={{ color: '#83d4c0' }} />
                    </div>

                    {/* Headline */}
                    <h2 className="font-sans font-semibold text-2xl mb-3" style={{ color: 'rgba(255,255,255,0.95)' }}>
                      Implementation Call Scheduled
                    </h2>

                    {/* Supporting Copy */}
                    <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Your county activation is now in progress. We'll complete setup during your scheduled call.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

export default function HubUpgradePage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  return (
    <>
      {/* Content - Two Column Layout on Desktop */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 md:p-10 pt-16 md:pt-20 max-w-4xl mx-auto">
          {/* Subtle Container */}
          <div
            className="rounded-xl p-8 md:p-10"
            style={{
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)'
            }}
          >
            {/* Flex container that keeps form anchored right */}
            <div className="flex justify-end">
              <motion.div
                className="flex gap-10 lg:gap-14 items-start"
                animate={{
                  width: step === 1 ? '100%' : '100%'
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {/* Left Column - Context (hidden on step 2) */}
                <AnimatePresence>
                  {step === 1 && (
                    <motion.div
                      className="flex-1 hidden lg:block"
                      initial={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0, marginRight: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      {/* Feature Access Label */}
                      <div className="flex items-center gap-2 mb-4">
                        <Lock className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.4)' }} strokeWidth={1.5} />
                        <span className="text-xs font-medium uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          Feature Access
                        </span>
                      </div>

                      <h1 className="font-sans font-bold text-3xl md:text-4xl mb-5" style={{ color: 'rgba(255,255,255,0.95)' }}>
                        Claim Your County
                      </h1>

                      <p className="text-[15px] leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        To start working probate cases, you'll need to claim a county. This unlocks access to live cases in the full Homeflip.ai platform.
                      </p>
                      <ul className="space-y-4">
                        {[
                          'Access live probate cases for one county',
                          'Receive daily updates from court records',
                          'Use the full Homeflip.ai platform',
                          'View cases only from your selected county'
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-[14px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#83d4c0]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Right Column - Form (expands on step 2) */}
                <motion.div
                  className="w-full lg:w-auto"
                  animate={{
                    flex: step === 1 ? '1 1 0%' : '1 1 100%'
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <Suspense fallback={
                    <div className="flex items-center justify-center p-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#83d4c0]"></div>
                    </div>
                  }>
                    <ClaimCountyFormDark step={step} setStep={setStep} />
                  </Suspense>

                  {/* Reassurance - only show on step 1 */}
                  <AnimatePresence>
                    {step === 1 && (
                      <motion.p
                        className="text-center text-[13px] mt-5"
                        style={{ color: 'rgba(255,255,255,0.35)' }}
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        No credit card required · You can change counties later
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
