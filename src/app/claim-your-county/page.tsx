'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ClaimCountyForm } from '@/components/ClaimCountyForm';
import { MapPin, Users, Clock, Shield } from 'lucide-react';

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
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-4">
              Get exclusive access to probate leads in your market.
            </p>
            <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto mb-8 font-medium">
              We&apos;re accepting beta users <span className="text-[#0891b2] font-bold">right now</span>. Get in on the ground floor, lock in founding member pricing, and help us build the probate lead platform you&apos;ve always wanted.
            </p>
          </motion.div>

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <div className="p-4 bg-slate-50 rounded-xl">
              <MapPin className="w-6 h-6 text-[#0891b2] mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-700">Your Market</p>
              <p className="text-xs text-slate-500">Hyper-local leads</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <Users className="w-6 h-6 text-[#0891b2] mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-700">Beta Access</p>
              <p className="text-xs text-slate-500">Limited spots open</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <Clock className="w-6 h-6 text-[#0891b2] mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-700">Founder Pricing</p>
              <p className="text-xs text-slate-500">Locked in forever</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <Shield className="w-6 h-6 text-[#0891b2] mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-700">Shape the Product</p>
              <p className="text-xs text-slate-500">Your feedback matters</p>
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
          <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0891b2] to-[#7c3aed] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Select Your Counties</h3>
              <p className="text-slate-600 text-sm">
                Tell us where you invest. We&apos;re expanding fast and your county could be next.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0891b2] to-[#7c3aed] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Join the Beta</h3>
              <p className="text-slate-600 text-sm">
                We&apos;ll reach out personally to get you set up. Beta users get white-glove onboarding and direct access to the founders.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0891b2] to-[#7c3aed] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Start Finding Deals</h3>
              <p className="text-slate-600 text-sm">
                Fresh probate leads delivered daily. Our AI agent monitors the courts 24/7 so you can focus on closing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
