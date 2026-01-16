'use client';

import React from 'react';
import { FieldProps } from '../types';

export const TextareaField = ({ question, value, onChange, error, theme = 'dark', autoFocus }: FieldProps) => {
  const isDark = theme === 'dark';
  const maxLength = question.maxLength || 500;
  const currentLength = ((value as string) || '').length;
  const starterAnchors = question.starterAnchors || [];

  const inputStyles = isDark
    ? "w-full px-5 py-4 rounded-xl border-2 border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#83d4c0]/50 focus:border-[#83d4c0] transition-all text-lg resize-none"
    : "w-full px-5 py-4 rounded-xl border-2 border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0891b2]/30 focus:border-[#0891b2] transition-all text-lg resize-none";

  const anchorStyles = isDark
    ? "px-3 py-1.5 rounded-full text-sm border border-white/20 text-white/60 hover:bg-white/10 hover:text-white/80 transition-all cursor-pointer"
    : "px-3 py-1.5 rounded-full text-sm border border-slate-300 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-all cursor-pointer";

  const handleAnchorClick = (anchor: string) => {
    const currentValue = (value as string) || '';
    // If empty, set the anchor as the value; otherwise append with space
    if (!currentValue.trim()) {
      onChange(anchor);
    } else {
      // Don't append if it would exceed maxLength
      const newValue = `${currentValue} ${anchor}`;
      if (newValue.length <= maxLength) {
        onChange(newValue);
      }
    }
  };

  return (
    <div className="space-y-3">
      {/* Starter anchors */}
      {starterAnchors.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {starterAnchors.map((anchor) => (
            <button
              key={anchor}
              type="button"
              onClick={() => handleAnchorClick(anchor)}
              className={anchorStyles}
            >
              {anchor}
            </button>
          ))}
        </div>
      )}

      <textarea
        rows={4}
        value={(value as string) || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={question.placeholder}
        required={question.required}
        maxLength={maxLength}
        autoFocus={autoFocus}
        className={`${inputStyles} ${error ? 'border-red-500' : ''}`}
      />
      <div className="flex justify-between items-center">
        {error ? (
          <p className={`text-sm ${isDark ? 'text-red-400' : 'text-red-600'}`}>{error}</p>
        ) : (
          <span />
        )}
        <p className={`text-xs ${isDark ? 'text-white/40' : 'text-slate-400'}`}>
          {currentLength} / {maxLength}
        </p>
      </div>
    </div>
  );
};
