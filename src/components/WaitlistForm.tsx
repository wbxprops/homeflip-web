'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';

export const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    market: '',
    investorType: 'individual'
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            market: formData.market, 
            investor_type: formData.investorType,
            source: 'marketing_website'
          }
        ]);

      if (error) throw error;
      
      setStatus('success');
    } catch (error: any) {
      console.error('Waitlist submission error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center p-8 bg-[#83d4c0]/10 rounded-3xl border border-[#83d4c0]/30">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">You&apos;re on the list!</h3>
        <p className="text-slate-600">
          Thanks for your interest in Homeflip.ai. We&apos;ll be in touch soon with early access details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">
          {errorMessage}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1 ml-1">Full Name</label>
          <input
            type="text"
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#83d4c0]/30 focus:border-[#83d4c0] transition-all"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1 ml-1">Email Address</label>
          <input
            type="email"
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#83d4c0]/30 focus:border-[#83d4c0] transition-all"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1 ml-1">Primary Market (City/County)</label>
        <input
          type="text"
          required
          placeholder="e.g. Miami, FL or Cook County, IL"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#83d4c0]/30 focus:border-[#83d4c0] transition-all"
          value={formData.market}
          onChange={(e) => setFormData({ ...formData, market: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1 ml-1">Investor Type</label>
        <select
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#83d4c0]/30 focus:border-[#83d4c0] transition-all bg-white"
          value={formData.investorType}
          onChange={(e) => setFormData({ ...formData, investorType: e.target.value })}
        >
          <option value="individual">Individual Investor</option>
          <option value="team">Investment Team</option>
          <option value="wholesaler">Wholesaler</option>
          <option value="agent">Real Estate Agent/Broker</option>
          <option value="institutional">Institutional Buyer</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full btn-gradient py-5 rounded-2xl font-hero font-[900] text-4xl uppercase tracking-tighter shadow-lg shadow-[#83d4c0]/20 hover:scale-[1.01] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Joining...' : 'Claim Your County'}
      </button>
      
      <p className="text-center text-sm text-slate-500">
        By joining, you agree to our <a href="/terms" className="underline hover:text-[#83d4c0]">Terms</a> and <a href="/privacy" className="underline hover:text-[#83d4c0]">Privacy Policy</a>.
      </p>
    </form>
  );
};

