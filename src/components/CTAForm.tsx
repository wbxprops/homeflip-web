'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CTAFormProps {
  buttonText?: string;
  className?: string;
  onSuccess?: () => void;
}

export const CTAForm = ({
  buttonText = "Claim Your County",
  className = "",
  onSuccess
}: CTAFormProps) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // In a real app, this would call your waitlist API/Supabase
    console.log('Waitlist submission:', { firstName, email });
    await new Promise(resolve => setTimeout(resolve, 1000));

    setStatus('success');
    if (onSuccess) onSuccess();
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-[#22d3ee] font-bold py-4 px-6 bg-[#22d3ee]/10 rounded-full border border-[#22d3ee]/20 inline-block"
      >
        You&apos;re in! Check your inbox.
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`relative flex flex-col sm:flex-row gap-3 ${className}`}>
      <div className="relative group">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          required
          autoComplete="given-name"
          data-lpignore="true"
          className="w-full sm:w-40 px-6 py-4 rounded-full bg-black/20 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30 focus:border-[#22d3ee] transition-all text-white shadow-sm group-hover:border-white/20"
        />
      </div>
      <div className="relative flex-1 group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          required
          autoComplete="email"
          data-lpignore="true"
          className="w-full px-6 py-4 rounded-full bg-black/20 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30 focus:border-[#22d3ee] transition-all text-white shadow-sm group-hover:border-white/20"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-gradient px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-xl hover:shadow-[#22d3ee]/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 whitespace-nowrap"
      >
        {status === 'submitting' ? 'Joining...' : buttonText}
      </button>
    </form>
  );
};
