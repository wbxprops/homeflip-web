'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { logos } from '@/config/hub.config';
import { PreStrategySurveyForm } from '@/components/PreStrategySurveyForm';

export default function PreStrategySurveyPage() {
  return (
    <main className="min-h-screen bg-[#050505] dark">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="w-full flex items-center justify-center relative">
          {/* Centered Logo */}
          <div className="flex items-center">
            <img
              src={logos.logo.onDark}
              alt="Homeflip.ai"
              className="h-8"
            />
          </div>

          {/* Phone Number - Far Right */}
          <a
            href="tel:5139865440"
            className="absolute right-0 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium hidden sm:inline">(513) 986-5440</span>
          </a>
        </div>
      </header>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#83d4c0]/10 via-transparent to-transparent opacity-50" />
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#83d4c0]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[0%] left-[-5%] w-[800px] h-[800px] bg-[#0891b2]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Content */}
      <div className="relative min-h-screen flex items-start justify-center px-4 sm:px-6 pt-24 pb-12">
        <div className="w-full max-w-2xl mx-auto">
          {/* Eyebrow */}
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 bg-[#83d4c0]/10 border border-[#83d4c0]/30 rounded-full text-[#83d4c0] text-sm font-medium uppercase tracking-wider">
              Pre-Strategy Call Survey
            </span>
          </div>

          {/* Form Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8">
            <PreStrategySurveyForm />
          </div>

          {/* Footer Note */}
          <p className="text-center text-white/40 text-sm mt-6">
            Your information is secure and will never be shared.
          </p>
        </div>
      </div>
    </main>
  );
}
