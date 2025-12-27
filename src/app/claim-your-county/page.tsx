'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { ClaimCountyForm } from '@/components/ClaimCountyForm';
import { MapPin, Bot, Clock } from 'lucide-react';

export default function ClaimYourCountyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar minimal />

      {/* Hero Section */}
      <section className="pt-32 pb-6 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-hero font-[900] text-5xl md:text-6xl lg:text-7xl text-slate-900 uppercase tracking-tighter leading-[0.9] mb-6">
              Claim Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0891b2] to-[#7c3aed]">
                County
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto mb-3">
              Apply now to lock in <span className="text-[#0891b2] font-bold">founder pricing</span> on jurisdictional licenses and leads&mdash;discounts you&apos;ll keep for life.
            </p>
            <p className="text-slate-500 text-sm">(No CC required)</p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8">
            <Suspense fallback={<div className="flex items-center justify-center p-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0891b2]"></div></div>}>
              <ClaimCountyForm />
            </Suspense>
          </div>
        </motion.div>
      </section>

      {/* Value Props */}
      <section className="pb-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="p-8 bg-slate-50 rounded-3xl text-center">
            <MapPin className="w-12 h-12 text-[#0891b2] mx-auto mb-4" />
            <p className="text-lg font-bold text-slate-800 mb-1">Your Territory</p>
            <p className="text-base text-slate-500">Probate leads in up to 3 markets</p>
          </div>
          <div className="p-8 bg-slate-50 rounded-3xl text-center">
            <Bot className="w-12 h-12 text-[#0891b2] mx-auto mb-4" />
            <p className="text-lg font-bold text-slate-800 mb-1">Personalized AI Agent</p>
            <p className="text-base text-slate-500">Trained on your specific buying criteria</p>
          </div>
          <div className="p-8 bg-slate-50 rounded-3xl text-center">
            <Clock className="w-12 h-12 text-[#0891b2] mx-auto mb-4" />
            <p className="text-lg font-bold text-slate-800 mb-1">Lifetime Access</p>
            <p className="text-base text-slate-500">Discounted for founding members</p>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
