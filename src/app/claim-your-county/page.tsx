'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ClaimCountyForm } from '@/components/ClaimCountyForm';
import { MapPin, Bot, Clock } from 'lucide-react';

export default function ClaimYourCountyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
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
            <p className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto mb-8">
              Apply now to lock in <span className="text-[#0891b2] font-bold">founder pricing</span> on jurisdictional licenses and leads&mdash;discounts you&apos;ll keep for life.
            </p>
          </motion.div>

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
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
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8">
            <ClaimCountyForm />
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-hero font-[900] text-5xl md:text-6xl lg:text-7xl text-slate-900 uppercase tracking-tighter text-center leading-[0.9] mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-3xl shadow-sm">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0891b2] to-[#7c3aed] text-white font-bold text-2xl flex items-center justify-center mx-auto mb-6">
                1
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Claim Your Counties</h3>
              <p className="text-slate-600 text-base">
                Pick up to 3 counties where you invest. If spots are available, you&apos;re in. If not, you&apos;ll join the waitlist.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-3xl shadow-sm">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0891b2] to-[#7c3aed] text-white font-bold text-2xl flex items-center justify-center mx-auto mb-6">
                2
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Book Your Strategy Call</h3>
              <p className="text-slate-600 text-base">
                After you apply, you&apos;ll get a link to schedule a one-on-one roadmap session with our team.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-3xl shadow-sm">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0891b2] to-[#7c3aed] text-white font-bold text-2xl flex items-center justify-center mx-auto mb-6">
                3
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Start Closing</h3>
              <p className="text-slate-600 text-base">
                Fresh probate leads hit your dashboard daily. Our AI watches the courts 24/7&mdash;you just work the deals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
