'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Check, MapPin, ArrowRight, ArrowLeft } from 'lucide-react';

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
}

export const ClaimCountyForm = () => {
  const [jurisdictions, setJurisdictions] = useState<Jurisdiction[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [stateSelections, setStateSelections] = useState<StateSelection[]>([
    { id: '1', stateCode: '', counties: [] }
  ]);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [step, setStep] = useState<1 | 2>(1);

  // Fetch jurisdictions on mount
  useEffect(() => {
    async function fetchJurisdictions() {
      const { data, error } = await supabase
        .from('jurisdictions')
        .select('id, jurisdiction_code, state_code, county_name, display_name, status')
        .order('state_code')
        .order('county_name');

      if (error) {
        console.error('Error fetching jurisdictions:', error);
      } else {
        setJurisdictions(data || []);
      }
      setLoading(false);
    }
    fetchJurisdictions();
  }, []);

  // Get unique states from jurisdictions
  const states = [...new Set(jurisdictions.map(j => j.state_code))].sort();

  // Get counties for a given state
  const getCountiesForState = (stateCode: string) => {
    return jurisdictions.filter(j => j.state_code === stateCode);
  };

  // Get state name from code
  const getStateName = (code: string) => {
    const stateNames: Record<string, string> = {
      'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas', 'CA': 'California',
      'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware', 'FL': 'Florida', 'GA': 'Georgia',
      'HI': 'Hawaii', 'ID': 'Idaho', 'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa',
      'KS': 'Kansas', 'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
      'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi', 'MO': 'Missouri',
      'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada', 'NH': 'New Hampshire', 'NJ': 'New Jersey',
      'NM': 'New Mexico', 'NY': 'New York', 'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio',
      'OK': 'Oklahoma', 'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
      'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah', 'VT': 'Vermont',
      'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia', 'WI': 'Wisconsin', 'WY': 'Wyoming'
    };
    return stateNames[code] || code;
  };

  // Handle state selection change
  const handleStateChange = (selectionId: string, stateCode: string) => {
    setStateSelections(prev => prev.map(sel =>
      sel.id === selectionId
        ? { ...sel, stateCode, counties: [] }
        : sel
    ));
  };

  // Handle county toggle
  const handleCountyToggle = (selectionId: string, countyName: string) => {
    setStateSelections(prev => prev.map(sel => {
      if (sel.id !== selectionId) return sel;

      const isSelected = sel.counties.includes(countyName);
      if (isSelected) {
        return { ...sel, counties: sel.counties.filter(c => c !== countyName) };
      } else if (sel.counties.length < 3) {
        return { ...sel, counties: [...sel.counties, countyName] };
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
        counties: []
      }]);
    }
  };

  // Remove a state selection
  const removeStateSelection = (selectionId: string) => {
    if (stateSelections.length > 1) {
      setStateSelections(prev => prev.filter(sel => sel.id !== selectionId));
    }
  };

  // Handle step 1 to step 2 transition
  const handleNextStep = () => {
    if (!formData.name || !formData.phone || !formData.email) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
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

    // Build jurisdictions_requested JSON
    const jurisdictionsRequested = stateSelections
      .filter(sel => sel.stateCode && sel.counties.length > 0)
      .map(sel => ({
        state: sel.stateCode,
        counties: sel.counties
      }));

    if (jurisdictionsRequested.length === 0) {
      setStatus('error');
      setErrorMessage('Please select at least one state and county.');
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

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0891b2]"></div>
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
              placeholder="Phone *"
              className={inputStyles}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                        <option key={state} value={state}>
                          {getStateName(state)} ({state})
                        </option>
                      ))}
                    </select>

                    {/* County Checkboxes */}
                    {selection.stateCode && (
                      <div className="space-y-2">
                        <p className="text-xs text-slate-500">
                          Select up to 3 counties ({selection.counties.length}/3 selected)
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                          {getCountiesForState(selection.stateCode).map(jurisdiction => {
                            const isSelected = selection.counties.includes(jurisdiction.county_name);
                            const isDisabled = !isSelected && selection.counties.length >= 3;

                            return (
                              <label
                                key={jurisdiction.id}
                                className={`
                                  flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all
                                  ${isSelected ? 'bg-[#0891b2]/10 border border-[#0891b2]/30' : 'bg-white border border-slate-100 hover:border-slate-200'}
                                  ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
                                `}
                              >
                                <input
                                  type="checkbox"
                                  checked={isSelected}
                                  disabled={isDisabled}
                                  onChange={() => handleCountyToggle(selection.id, jurisdiction.county_name)}
                                  className="w-4 h-4 rounded border-slate-300 text-[#0891b2] focus:ring-[#0891b2]"
                                />
                                <span className="text-sm text-slate-700">{jurisdiction.county_name}</span>
                                {jurisdiction.status === 'active' && (
                                  <span className="ml-auto text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Live</span>
                                )}
                                {jurisdiction.status === 'coming_soon' && (
                                  <span className="ml-auto text-xs px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full">Soon</span>
                                )}
                              </label>
                            );
                          })}
                        </div>
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
