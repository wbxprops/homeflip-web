'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Check, MapPin, ArrowRight, ArrowLeft } from 'lucide-react';

interface StateSelection {
  id: string;
  stateCode: string;
  counties: string[];
}

export const ClaimCountyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [stateSelections, setStateSelections] = useState<StateSelection[]>([
    { id: '1', stateCode: '', counties: [''] }
  ]);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [step, setStep] = useState<1 | 2>(1);

  // Format phone number as +1 (XXX) XXX-XXXX
  const formatPhoneNumber = (value: string) => {
    // Strip all non-numeric characters
    const numbers = value.replace(/\D/g, '');

    // Remove leading 1 if present (we'll add it back formatted)
    const digits = numbers.startsWith('1') ? numbers.slice(1) : numbers;

    // Limit to 10 digits
    const limited = digits.slice(0, 10);

    // Format based on length
    if (limited.length === 0) return '';
    if (limited.length <= 3) return `+1 (${limited}`;
    if (limited.length <= 6) return `+1 (${limited.slice(0, 3)}) ${limited.slice(3)}`;
    return `+1 (${limited.slice(0, 3)}) ${limited.slice(3, 6)}-${limited.slice(6)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formatted });
  };

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

  // Handle state selection change
  const handleStateChange = (selectionId: string, stateCode: string) => {
    setStateSelections(prev => prev.map(sel =>
      sel.id === selectionId
        ? { ...sel, stateCode, counties: [''] }
        : sel
    ));
  };

  // Handle county text input change
  const handleCountyChange = (selectionId: string, countyIndex: number, value: string) => {
    setStateSelections(prev => prev.map(sel => {
      if (sel.id !== selectionId) return sel;
      const newCounties = [...sel.counties];
      newCounties[countyIndex] = value;
      return { ...sel, counties: newCounties };
    }));
  };

  // Add another county input
  const addCountyInput = (selectionId: string) => {
    setStateSelections(prev => prev.map(sel => {
      if (sel.id !== selectionId) return sel;
      if (sel.counties.length < 3) {
        return { ...sel, counties: [...sel.counties, ''] };
      }
      return sel;
    }));
  };

  // Remove a county input
  const removeCountyInput = (selectionId: string, countyIndex: number) => {
    setStateSelections(prev => prev.map(sel => {
      if (sel.id !== selectionId) return sel;
      if (sel.counties.length > 1) {
        const newCounties = sel.counties.filter((_, i) => i !== countyIndex);
        return { ...sel, counties: newCounties };
      }
      return sel;
    }));
  };

  // Add another state selection
  const addStateSelection = () => {
    if (stateSelections.length < 3) {
      setStateSelections(prev => [...prev, {
        id: Date.now().toString(),
        stateCode: '',
        counties: ['']
      }]);
    }
  };

  // Remove a state selection
  const removeStateSelection = (selectionId: string) => {
    if (stateSelections.length > 1) {
      setStateSelections(prev => prev.filter(sel => sel.id !== selectionId));
    }
  };

  // Validate email format
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
  };

  // Handle step 1 to step 2 transition
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

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Build jurisdictions_requested JSON, filtering out empty county strings
    const jurisdictionsRequested = stateSelections
      .filter(sel => sel.stateCode && sel.counties.some(c => c.trim() !== ''))
      .map(sel => ({
        state: sel.stateCode,
        counties: sel.counties.filter(c => c.trim() !== '').map(c => c.trim())
      }));

    if (jurisdictionsRequested.length === 0) {
      setStatus('error');
      setErrorMessage('Please select a state and enter at least one county.');
      return;
    }

    try {
      const { error } = await supabase
        .from('prospects')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          source: 'claim_county_page',
          jurisdictions_requested: jurisdictionsRequested
        }]);

      if (error) throw error;
      setStatus('success');
    } catch (error: any) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div>
        {/* Progress indicator at step 3 */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative flex items-center w-48">
            <div className="absolute left-0 right-0 h-1 bg-slate-200 rounded-full" />
            <div className="absolute left-0 h-1 bg-gradient-to-r from-[#0891b2] to-[#7c3aed] rounded-full w-full" />
            <div className="relative flex justify-between w-full">
              {[1, 2, 3].map((dotStep) => (
                <div
                  key={dotStep}
                  className="w-5 h-5 rounded-full bg-gradient-to-r from-[#0891b2] to-[#7c3aed] border-2 border-transparent"
                />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-8 bg-gradient-to-br from-[#0891b2]/10 to-[#7c3aed]/10 rounded-3xl border border-[#0891b2]/30"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#0891b2] to-[#7c3aed] flex items-center justify-center">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">You&apos;re In.</h3>
          <p className="text-slate-600 mb-4">
            Your spot is locked. We&apos;ll reach out within 48 hours to activate your account and get you set up.
          </p>
          <p className="text-sm text-slate-500">
            Check your inbox&mdash;your welcome email is on the way.
          </p>
        </motion.div>
      </div>
    );
  }

  const inputStyles = "w-full px-5 py-4 rounded-xl border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0891b2]/30 focus:border-[#0891b2] transition-all text-lg placeholder:text-slate-400";

  // Progress indicator component
  const ProgressIndicator = ({ currentStep }: { currentStep: 1 | 2 | 3 }) => (
    <div className="flex items-center justify-center mb-8">
      <div className="relative flex items-center w-48">
        {/* Background line */}
        <div className="absolute left-0 right-0 h-1 bg-slate-200 rounded-full" />
        {/* Progress line */}
        <div
          className="absolute left-0 h-1 bg-gradient-to-r from-[#0891b2] to-[#7c3aed] rounded-full transition-all duration-300"
          style={{ width: currentStep === 1 ? '0%' : currentStep === 2 ? '50%' : '100%' }}
        />
        {/* Dots */}
        <div className="relative flex justify-between w-full">
          {[1, 2, 3].map((dotStep) => (
            <div
              key={dotStep}
              className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <ProgressIndicator currentStep={step} />

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
            {/* Contact Info - Step 1 */}
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

            {/* Next Step Button */}
            <button
              type="button"
              onClick={handleNextStep}
              className="w-full btn-gradient py-5 rounded-2xl font-hero font-[900] text-2xl uppercase tracking-tighter shadow-lg shadow-[#0891b2]/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-3"
            >
              Select Your Markets
              <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            {/* Back button */}
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex items-center gap-2 text-slate-500 hover:text-[#0891b2] transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to contact info
            </button>

            {/* State/County Selections - Step 2 */}
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

                    {/* State Dropdown */}
                    <select
                      value={selection.stateCode}
                      onChange={(e) => handleStateChange(selection.id, e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0891b2]/30 focus:border-[#0891b2] transition-all bg-white mb-3"
                    >
                      <option value="">Select a state...</option>
                      {states.map(state => (
                        <option key={state.code} value={state.code}>
                          {state.name} ({state.code})
                        </option>
                      ))}
                    </select>

                    {/* County Text Inputs */}
                    {selection.stateCode && (
                      <div className="space-y-3">
                        <p className="text-xs text-slate-500">
                          Enter up to 3 counties ({selection.counties.filter(c => c.trim()).length}/3)
                        </p>
                        {selection.counties.map((county, countyIndex) => (
                          <div key={countyIndex} className="flex items-center gap-2">
                            <input
                              type="text"
                              value={county}
                              onChange={(e) => handleCountyChange(selection.id, countyIndex, e.target.value)}
                              placeholder={`County ${countyIndex + 1}`}
                              className="flex-1 px-4 py-2 rounded-lg border-2 border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0891b2]/30 focus:border-[#0891b2] transition-all bg-white text-sm"
                            />
                            {selection.counties.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeCountyInput(selection.id, countyIndex)}
                                className="text-slate-400 hover:text-red-500 transition-colors p-1"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        ))}
                        {selection.counties.length < 3 && (
                          <button
                            type="button"
                            onClick={() => addCountyInput(selection.id)}
                            className="text-sm text-[#0891b2] hover:text-[#0891b2]/80 transition-colors flex items-center gap-1"
                          >
                            <Plus className="w-4 h-4" />
                            Add another county
                          </button>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Add Another State Button */}
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full btn-gradient py-5 rounded-2xl font-hero font-[900] text-2xl uppercase tracking-tighter shadow-lg shadow-[#0891b2]/20 hover:scale-[1.01] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Joining...' : 'Join the Beta'}
            </button>

            <p className="text-center text-sm text-slate-500">
              By submitting, you agree to our{' '}
              <a href="/terms" className="underline hover:text-[#0891b2]">Terms</a> and{' '}
              <a href="/privacy" className="underline hover:text-[#0891b2]">Privacy Policy</a>.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};
