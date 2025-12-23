'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CTAFormProps {
  buttonText?: string;
  placeholder?: string;
  className?: string;
  onSuccess?: () => void;
}

export const CTAForm = ({ 
  buttonText = "Get Early Access", 
  placeholder = "Enter your email address",
  className = "",
  onSuccess
}: CTAFormProps) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // In a real app, this would call your waitlist API/Supabase
    console.log('Waitlist submission:', email);
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
        Success! You&apos;re on the list.
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`relative flex flex-col sm:flex-row gap-3 ${className}`}>
      <div className="relative flex-1 group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
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
