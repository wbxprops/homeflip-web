'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { FieldProps } from '../types';

export const CheckboxField = ({ question, value, onChange, error, theme = 'dark' }: FieldProps) => {
  const isDark = theme === 'dark';
  const options = question.options || [];
  const selectedValues = (value as string[]) || [];

  const baseStyles = isDark
    ? "w-full px-5 py-4 rounded-xl border-2 text-left transition-all cursor-pointer"
    : "w-full px-5 py-4 rounded-xl border-2 text-left transition-all cursor-pointer";

  const unselectedStyles = isDark
    ? "border-white/20 bg-white/5 text-white hover:bg-white/10"
    : "border-slate-300 bg-white text-slate-900 hover:bg-slate-50";

  const selectedStyles = isDark
    ? "border-[#83d4c0] bg-[#83d4c0]/10 text-white"
    : "border-[#0891b2] bg-[#0891b2]/10 text-slate-900";

  const handleToggle = (optionValue: string) => {
    const isSelected = selectedValues.includes(optionValue);
    if (isSelected) {
      onChange(selectedValues.filter(v => v !== optionValue));
    } else {
      onChange([...selectedValues, optionValue]);
    }
    // No auto-advance for checkboxes since multiple can be selected
  };

  return (
    <div className="space-y-3">
      <p className={`text-sm font-medium mb-3 ${isDark ? 'text-white/80' : 'text-slate-600'}`}>
        Select all that apply:
      </p>
      {options.map((option, index) => {
        const isSelected = selectedValues.includes(option.value);
        return (
          <motion.button
            key={option.value}
            type="button"
            onClick={() => handleToggle(option.value)}
            className={`${baseStyles} ${isSelected ? selectedStyles : unselectedStyles}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-3">
              <span className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                isSelected
                  ? isDark ? 'border-[#83d4c0] bg-[#83d4c0]' : 'border-[#0891b2] bg-[#0891b2]'
                  : isDark ? 'border-white/40' : 'border-slate-400'
              }`}>
                {isSelected && (
                  <CheckCircle2 className={`w-4 h-4 ${isDark ? 'text-black' : 'text-white'}`} />
                )}
              </span>
              <span className="text-lg">{option.label}</span>
            </span>
          </motion.button>
        );
      })}
    </div>
  );
};
