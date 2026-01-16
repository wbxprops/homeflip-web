'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FieldProps } from '../types';

export const RadioField = ({ question, value, onChange, error, theme = 'dark' }: FieldProps) => {
  const isDark = theme === 'dark';
  const options = question.options || [];
  const hasSelection = !!value;

  const baseStyles = isDark
    ? "w-full px-5 py-4 rounded-xl border-2 text-left transition-all cursor-pointer"
    : "w-full px-5 py-4 rounded-xl border-2 text-left transition-all cursor-pointer";

  const unselectedStyles = isDark
    ? "border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30"
    : "border-slate-300 bg-white text-slate-900 hover:bg-slate-50 hover:border-slate-400";

  const selectedStyles = isDark
    ? "border-[#83d4c0] bg-[#83d4c0]/10 text-white shadow-[0_0_20px_rgba(131,212,192,0.15)]"
    : "border-[#0891b2] bg-[#0891b2]/10 text-slate-900";

  const handleSelect = (optionValue: string) => {
    // Toggle: if already selected, deselect; otherwise select
    if (value === optionValue) {
      onChange('');
    } else {
      onChange(optionValue);
    }
  };

  return (
    <div className="space-y-3">
      {options.map((option, index) => {
        const isSelected = value === option.value;
        return (
          <motion.button
            key={option.value}
            type="button"
            onClick={() => handleSelect(option.value)}
            className={`${baseStyles} ${isSelected ? selectedStyles : unselectedStyles}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-3">
              <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                isSelected
                  ? isDark ? 'border-[#83d4c0] bg-[#83d4c0]' : 'border-[#0891b2] bg-[#0891b2]'
                  : isDark ? 'border-white/40' : 'border-slate-400'
              }`}>
                {isSelected && (
                  <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-black' : 'bg-white'}`} />
                )}
              </span>
              <span className="text-lg">{option.label}</span>
            </span>
          </motion.button>
        );
      })}

      {/* Acknowledgment text - appears after selection */}
      <AnimatePresence>
        {hasSelection && question.acknowledgment && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`text-sm mt-4 ${isDark ? 'text-[#83d4c0]/80' : 'text-[#0891b2]'}`}
          >
            {question.acknowledgment}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};
