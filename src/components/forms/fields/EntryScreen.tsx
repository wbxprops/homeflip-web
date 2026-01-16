'use client';

import React from 'react';
import { Question } from '../types';

interface EntryScreenProps {
  question: Question;
  theme?: 'dark' | 'light';
}

export const EntryScreen = ({ question, theme = 'dark' }: EntryScreenProps) => {
  const isDark = theme === 'dark';

  return (
    <div className="text-center space-y-6">
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

      {question.note && (
        <p className={`text-sm ${isDark ? 'text-white/40' : 'text-slate-400'}`}>
          {question.note}
        </p>
      )}
    </div>
  );
};
