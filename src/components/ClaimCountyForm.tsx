'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, MapPin, ArrowRight, ArrowLeft, Calendar, CheckCircle2 } from 'lucide-react';

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

// Calendly Embed Component
interface CalendlyEmbedProps {
  url: string;
  prefill?: {
    name?: string;
    email?: string;
  };
  onEventScheduled?: () => void;
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

export const ClaimCountyForm = () => {
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
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [bookingComplete, setBookingComplete] = useState(false);
  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  // Format phone number as +1 (XXX) XXX-XXXX
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
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formatted });
  };

  // Fetch counties when a state is selected
  const fetchCountiesForState = async (stateCode: string) => {
    if (!stateCode) return;

    const { data, error } = await supabase
      .from('jurisdictions_public')
      .select('id, jurisdiction_code, state_code, county_name, display_name, status')
      .eq('state_code', stateCode)
      .order('county_name');

    if (error) {
      console.error('Error fetching counties:', error);
    } else {
      setJurisdictions(prev => {
        const otherStates = prev.filter(j => j.state_code !== stateCode);
        return [...otherStates, ...(data || [])];
      });
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  // All 50 US states
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

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
  };

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

    if (step === 1) {
      handleNextStep();
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

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

    try {
      await supabase
        .from('prospect_responses')
        .insert([{
          email: formData.email,
          name: formData.name,
          phone: formData.phone,
          source: 'claim_county_page',
          jurisdictions_requested: jurisdictionsRequested
        }]);

      const { error } = await supabase
        .from('prospects')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          source: 'claim_county_page',
          jurisdictions_requested: jurisdictionsRequested
        }]);

      if (error && error.code !== '23505') {
        throw error;
      }

      // Move to confirmation step
      setStep(3);
      setStatus('idle');
    } catch (error: any) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0891b2]"></div>
      </div>
    );
  }

  const inputStyles = "w-full px-5 py-4 rounded-xl border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0891b2]/30 focus:border-[#0891b2] transition-all text-lg placeholder:text-slate-400";

  // Progress indicator component - only shows on steps 1-2
  const ProgressIndicator = ({ currentStep }: { currentStep: 1 | 2 | 3 | 4 }) => {
    const progressWidth = currentStep === 1 ? '0%' : currentStep === 2 ? '33%' : currentStep === 3 ? '66%' : '100%';
    return (
      <div className="flex items-center justify-center mb-8">
        <div className="relative flex items-center w-48">
          <div className="absolute left-0 right-0 h-1 bg-slate-200 rounded-full" />
          <div
            className="absolute left-0 h-1 bg-gradient-to-r from-[#0891b2] to-[#7c3aed] rounded-full transition-all duration-300"
            style={{ width: progressWidth }}
          />
          <div className="relative flex justify-between w-full">
            {[1, 2, 3, 4].map((dotStep) => (
              <div
                key={dotStep}
                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  dotStep <= currentStep
                    ? 'bg-gradient-to-r from-[#0891b2] to-[#7c3aed] border-transparent'
                    : 'bg-white border-slate-300'
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
        <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">
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
            className="space-y-4"
          >
            <input
              type="text"
              required
              placeholder="Full name *"
              className={inputStyles}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="tel"
              required
              placeholder="Phone * +1 (555) 555-1212"
              className={inputStyles}
              value={formData.phone}
              onChange={handlePhoneChange}
            />
            <input
              type="email"
              required
              placeholder="Email *"
              className={inputStyles}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <button
              type="submit"
              className="w-full btn-gradient py-5 rounded-2xl font-hero font-[900] text-2xl uppercase tracking-tighter shadow-lg shadow-[#0891b2]/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-3"
            >
              Select Your Markets
              <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        ) : step === 2 ? (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex items-center gap-2 text-slate-500 hover:text-[#0891b2] transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to contact info
            </button>

            <div className="space-y-4">
              <label className="block text-sm font-bold text-slate-700 ml-1">
                <MapPin className="w-4 h-4 inline mr-1" />
                Select Your Markets (up to 3 counties per state)
              </label>

              <AnimatePresence>
                {stateSelections.map((selection, index) => (
                  <motion.div
                    key={selection.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-slate-50 rounded-xl border border-slate-200"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-slate-600">Market {index + 1}</span>
                      {stateSelections.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeStateSelection(selection.id)}
                          className="text-slate-400 hover:text-red-500 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      )}
                    </div>

                    <select
                      value={selection.stateCode}
                      onChange={(e) => handleStateChange(selection.id, e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0891b2]/30 focus:border-[#0891b2] transition-all bg-white mb-3 ${selection.stateCode ? 'appearance-none' : ''}`}
                    >
                      <option value="">Select a state...</option>
                      {states.map(state => (
                        <option key={state.code} value={state.code}>
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
                                className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-[#0891b2]/10 to-[#7c3aed]/10 border border-[#0891b2]/30 rounded-full text-sm text-slate-700"
                              >
                                {county}
                                <button
                                  type="button"
                                  onClick={() => removeCounty(selection.id, county)}
                                  className="text-slate-400 hover:text-red-500 transition-colors ml-1"
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
                              placeholder={selection.counties.length === 0 ? 'Select up to 3 counties...' : `${3 - selection.counties.length} remaining...`}
                              className="w-full px-4 py-2 rounded-lg border-2 border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0891b2]/30 focus:border-[#0891b2] transition-all bg-white text-sm"
                            />

                            {activeDropdown === selection.id && (
                              <div className="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg max-h-64 overflow-y-auto">
                                {getFilteredCounties(selection.stateCode, selection.searchQuery, selection.counties).length > 0 ? (
                                  getFilteredCounties(selection.stateCode, selection.searchQuery, selection.counties).map(jurisdiction => (
                                    <button
                                      key={jurisdiction.id}
                                      type="button"
                                      onMouseDown={(e) => e.preventDefault()}
                                      onClick={() => addCounty(selection.id, jurisdiction.county_name)}
                                      className="w-full px-4 py-2 text-left text-sm hover:bg-slate-50 flex items-center justify-between transition-colors"
                                    >
                                      <span>{jurisdiction.county_name}</span>
                                      {jurisdiction.status === 'active' && (
                                        <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Live</span>
                                      )}
                                    </button>
                                  ))
                                ) : (
                                  <div className="px-4 py-3 text-sm text-slate-500">
                                    {getCountiesForState(selection.stateCode).length === 0
                                      ? 'No counties available for this state yet'
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
                  className="w-full py-3 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 hover:border-[#0891b2] hover:text-[#0891b2] transition-all flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add Another State
                </button>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full btn-gradient py-5 rounded-2xl font-hero font-[900] text-2xl uppercase tracking-tighter shadow-lg shadow-[#0891b2]/20 hover:scale-[1.01] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {status === 'submitting' ? 'Processing...' : (
                <>
                  Continue
                  <ArrowRight className="w-6 h-6" />
                </>
              )}
            </button>
          </motion.div>
        ) : step === 3 ? (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-8"
          >
            {/* Confirmation Checkpoint */}
            <div className="flex flex-col items-center text-center max-w-md mx-auto">
              {/* Status Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#0891b2]/10 to-[#7c3aed]/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#0891b2]" />
              </div>

              {/* Headline */}
              <h2 className="font-hero font-[900] text-3xl text-slate-900 uppercase tracking-tighter mb-3">
                County Activation Pending
              </h2>

              {/* Supporting Copy */}
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Your county has been submitted. Access will be activated after setup is completed.
              </p>

              {/* CTA */}
              <button
                type="button"
                onClick={() => setStep(4)}
                className="w-full btn-gradient py-5 rounded-2xl font-hero font-[900] text-2xl uppercase tracking-tighter shadow-lg shadow-[#0891b2]/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-3"
              >
                Finalize Setup
                <ArrowRight className="w-6 h-6" />
              </button>

              {/* Expectation-Setting Line */}
              <p className="text-sm text-slate-500 mt-5">
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
                  <div className="text-center mb-6">
                    <h2 className="font-hero font-[900] text-3xl text-slate-900 uppercase tracking-tighter mb-3">
                      Book Your Call
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
                      Select a time for your setup call. We'll confirm your county selection and get you started.
                    </p>
                  </div>

                  {/* Calendly Container */}
                  <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
                    <div className="p-4 border-b border-slate-200 bg-white">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-slate-400" />
                        <span className="text-sm font-medium text-slate-600">
                          Schedule your setup call
                        </span>
                      </div>
                    </div>
                    <CalendlyEmbed
                      url="https://calendly.com/wb-props/county-activation?hide_event_type_details=1&hide_gdpr_banner=1"
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
                  className="py-12"
                >
                  {/* Final Confirmation */}
                  <div className="flex flex-col items-center text-center max-w-md mx-auto">
                    {/* Status Icon */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-green-400/20 to-emerald-500/20 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>

                    {/* Headline */}
                    <h2 className="font-hero font-[900] text-3xl text-slate-900 uppercase tracking-tighter mb-3">
                      You're All Set!
                    </h2>

                    {/* Supporting Copy */}
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Your setup call is booked. Check your email for confirmation and calendar invite.
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
};
