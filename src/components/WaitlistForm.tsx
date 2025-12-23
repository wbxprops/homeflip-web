'use client';

import React, { useState } from 'react';

export const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    market: '',
    investorType: 'individual'
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    console.log('Form submission:', formData);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="text-center p-8 bg-[#5EEADC]/10 rounded-3xl border border-[#5EEADC]/30">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">You&apos;re on the list!</h3>
        <p className="text-gray-600">
          Thanks for your interest in Homeflip.ai. We&apos;ll be in touch soon with early access details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Full Name</label>
          <input
            type="text"
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5EEADC] focus:border-transparent transition-all"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Email Address</label>
          <input
            type="email"
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5EEADC] focus:border-transparent transition-all"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Primary Market (City/County)</label>
        <input
          type="text"
          required
          placeholder="e.g. Miami, FL or Cook County, IL"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5EEADC] focus:border-transparent transition-all"
          value={formData.market}
          onChange={(e) => setFormData({ ...formData, market: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Investor Type</label>
        <select
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5EEADC] focus:border-transparent transition-all bg-white"
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
        className="w-full btn-gradient py-4 rounded-xl font-bold text-lg shadow-lg shadow-[#5EEADC]/20 hover:scale-[1.01] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Joining...' : 'Get Early Access'}
      </button>
      
      <p className="text-center text-sm text-gray-500">
        By joining, you agree to our <a href="/terms" className="underline">Terms</a> and <a href="/privacy" className="underline">Privacy Policy</a>.
      </p>
    </form>
  );
};

