'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Question } from '../types';

interface ConfirmationScreenProps {
  question: Question;
  theme?: 'dark' | 'light';
}

export const ConfirmationScreen = ({ question, theme = 'dark' }: ConfirmationScreenProps) => {
  const isDark = theme === 'dark';

  return (
    <div className="text-center space-y-6">
      {/* Success icon */}
      <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center ${
        isDark ? 'bg-[#83d4c0]/10' : 'bg-[#0891b2]/10'
      }`}>
        <CheckCircle2 className={`w-8 h-8 ${isDark ? 'text-[#83d4c0]' : 'text-[#0891b2]'}`} />
      </div>

      {question.header && (
        <h1 className={`font-hero font-[900] text-3xl sm:text-4xl uppercase tracking-tighter ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          {question.header}
        </h1>
      )}

      {question.body && (
        <p className={`text-lg leading-relaxed ${isDark ? 'text-white/80' : 'text-slate-700'}`}>
          {question.body}
        </p>
      )}

      {question.subPrompt && (
        <p className={`text-base ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
          {question.subPrompt}
        </p>
      )}

      {question.note && (
        <p className={`text-sm ${isDark ? 'text-white/40' : 'text-slate-400'}`}>
          {question.note}
        </p>
      )}
    </div>
  );
};
