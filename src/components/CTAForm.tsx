'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';

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
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([
          { 
            email: email, 
            source: 'cta_form'
          }
        ]);

      if (error) throw error;
      
      setStatus('success');
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error('Waitlist submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-[#83d4c0] font-hero font-[900] py-4 px-10 bg-[#83d4c0]/10 rounded-2xl border border-[#83d4c0]/20 inline-block uppercase tracking-tighter text-2xl"
      >
        You&apos;re in! Check your inbox.
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-2xl sm:rounded-2xl border border-slate-200 p-3 sm:p-1.5 shadow-xl focus-within:ring-2 focus-within:ring-[#83d4c0]/30 focus-within:border-[#83d4c0] transition-all dark:bg-white/5 dark:border-white/10 gap-3 sm:gap-0 ${className}`}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        required
        autoComplete="email"
        data-lpignore="true"
        className="flex-1 bg-transparent px-4 sm:px-8 py-3 sm:py-4 focus:outline-none text-slate-900 dark:text-white text-base sm:text-lg placeholder:text-slate-400 rounded-xl sm:rounded-none"
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-gradient px-6 sm:px-10 py-4 rounded-xl font-hero font-[900] text-xl sm:text-2xl md:text-3xl uppercase tracking-tighter shadow-lg shadow-[#83d4c0]/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 whitespace-nowrap w-full sm:w-auto"
      >
        {status === 'submitting' ? 'Joining...' : buttonText}
      </button>
      {status === 'error' && (
        <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-red-500 text-xs font-bold whitespace-nowrap">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
};
