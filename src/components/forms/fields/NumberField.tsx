'use client';

import React from 'react';
import { FieldProps } from '../types';

export const NumberField = ({ question, value, onChange, error, theme = 'dark', autoFocus }: FieldProps) => {
  const isDark = theme === 'dark';

  const inputStyles = isDark
    ? "w-full px-5 py-4 rounded-xl border-2 border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#83d4c0]/50 focus:border-[#83d4c0] transition-all text-lg"
    : "w-full px-5 py-4 rounded-xl border-2 border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0891b2]/30 focus:border-[#0891b2] transition-all text-lg";

  return (
    <div className="space-y-2">
      <input
        type="number"
        value={value === '' || value === undefined ? '' : (value as string | number)}
        onChange={(e) => onChange(e.target.value === '' ? '' : parseInt(e.target.value))}
        placeholder={question.placeholder || 'Enter a number'}
        required={question.required}
        min={question.min}
        max={question.max}
        autoFocus={autoFocus}
        className={`${inputStyles} ${error ? 'border-red-500' : ''}`}
      />
      {error && (
        <p className={`text-sm ${isDark ? 'text-red-400' : 'text-red-600'}`}>{error}</p>
      )}
    </div>
  );
};
