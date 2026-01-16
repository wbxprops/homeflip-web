'use client';

import React from 'react';
import { FieldProps, ContactInfoValue } from '../types';

// Format phone as +1 (XXX) XXX-XXXX
const formatPhoneNumber = (value: string) => {
  const numbers = value.replace(/\D/g, '');
  const digits = numbers.startsWith('1') ? numbers.slice(1) : numbers;
  const limited = digits.slice(0, 10);

  if (limited.length === 0) return '';
  if (limited.length <= 3) return `+1 (${limited}`;
  if (limited.length <= 6) return `+1 (${limited.slice(0, 3)}) ${limited.slice(3)}`;
  return `+1 (${limited.slice(0, 3)}) ${limited.slice(3, 6)}-${limited.slice(6)}`;
};

export const ContactInfoField = ({ question, value, onChange, error, theme = 'dark', autoFocus }: FieldProps) => {
  const isDark = theme === 'dark';
  const contactValue = (value as ContactInfoValue) || { name: '', email: '', phone: '' };

  const inputStyles = isDark
    ? "w-full px-5 py-4 rounded-xl border-2 border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#83d4c0]/50 focus:border-[#83d4c0] transition-all text-lg"
    : "w-full px-5 py-4 rounded-xl border-2 border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0891b2]/30 focus:border-[#0891b2] transition-all text-lg";

  const handleChange = (field: keyof ContactInfoValue, newValue: string) => {
    onChange({
      ...contactValue,
      [field]: field === 'phone' ? formatPhoneNumber(newValue) : newValue,
    });
  };

  // Parse error string which may contain multiple errors separated by newlines
  const errors = error?.split('\n').filter(Boolean) || [];

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={contactValue.name}
        onChange={(e) => handleChange('name', e.target.value)}
        placeholder="Full name *"
        required
        autoFocus={autoFocus}
        className={inputStyles}
      />
      <input
        type="tel"
        value={contactValue.phone}
        onChange={(e) => handleChange('phone', e.target.value)}
        placeholder="Phone * +1 (555) 555-1212"
        required
        className={inputStyles}
      />
      <input
        type="email"
        value={contactValue.email}
        onChange={(e) => handleChange('email', e.target.value)}
        placeholder="Email *"
        required
        className={inputStyles}
      />
      {errors.length > 0 && (
        <div className={`text-sm ${isDark ? 'text-red-400' : 'text-red-600'}`}>
          {errors.map((err, idx) => (
            <p key={idx}>{err}</p>
          ))}
        </div>
      )}
    </div>
  );
};
