'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Mail, Phone, ArrowRight } from 'lucide-react';
import { logos } from '@/config/hub.config';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#050505] dark">
      {/* Header - Same as HVCO page */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6">
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#83d4c0]/15 via-transparent to-transparent opacity-50" />
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#83d4c0]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[0%] left-[-5%] w-[800px] h-[800px] bg-[#0891b2]/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-[#10b981] to-[#0891b2] rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-hero font-[900] text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tighter leading-[0.95] mb-6"
          >
            You&apos;re In!{' '}
            <span className="text-[#83d4c0]">
              Check Your Email
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-white/70 mb-10"
          >
            We just sent your personal access link to your inbox.<br />
            Click it to unlock your <strong className="text-white">Probate Profit Machine</strong>.
          </motion.p>

          {/* Ebook Cover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-10"
          >
            <img
              src="/ebook-cover-probate-profit-machine.png"
              alt="Probate Profit Machine"
              className="h-56 mx-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Email Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left mb-10"
          >
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#83d4c0] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white mb-1">Check Your Inbox</h3>
                <p className="text-white/60">
                  Look for an email from <strong className="text-white/80">gary@homeflip.ai</strong>.
                  If you don&apos;t see it within a few minutes, check your spam or promotions folder.
                </p>
              </div>
            </div>
          </motion.div>

          {/* What's Next CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="pt-8 border-t border-white/10"
          >
            <h3 className="font-bold text-lg text-white/80 mb-4">Ready to take it further?</h3>
            <p className="text-white/50 mb-6">
              Get exclusive probate leads delivered to your inbox every week.
            </p>
            <a
              href="/claim-your-county"
              className="inline-flex items-center gap-2 btn-gradient px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide hover:scale-[1.02] transition-all"
            >
              Claim Your County
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
