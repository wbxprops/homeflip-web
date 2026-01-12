'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Mail, Phone, ArrowRight, Play, Quote, Clock, Target, Users, Zap } from 'lucide-react';
import { logos } from '@/config/hub.config';

// CTA Button Component
const StrategyCallCTA = ({ variant = 'primary' }: { variant?: 'primary' | 'secondary' }) => (
  <a
    href="/ppm-pre-strategy-survey"
    className={`inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-hero font-[900] text-xl uppercase tracking-tighter transition-all hover:scale-[1.02] ${
      variant === 'primary'
        ? 'btn-gradient shadow-lg shadow-[#0891b2]/20'
        : 'bg-white/10 border-2 border-white/20 text-white hover:bg-white/20'
    }`}
  >
    Book Your Free Strategy Call
    <ArrowRight className="w-6 h-6" />
  </a>
);

export default function ThankYouVSLPage() {
  return (
    <main className="min-h-screen bg-[#050505] dark">
      {/* Header - Fixed */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="w-full flex items-center justify-center relative">
          <div className="flex items-center">
            <img
              src={logos.logo.onDark}
              alt="Homeflip.ai"
              className="h-8"
            />
          </div>
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
      <div className="relative">
        {/* SECTION 1: Confirmation + Video */}
        <section className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Success Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-6"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#10b981] to-[#0891b2] rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            {/* Confirmation Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-hero font-[900] text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tighter leading-[0.95] mb-4"
            >
              Your Guide Is On Its Way!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-white/70 mb-8 max-w-2xl mx-auto"
            >
              Check your inbox for an email from <strong className="text-white">gary@homeflip.ai</strong> with your personal access link.
            </motion.p>

            {/* Video Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden mb-10 max-w-3xl mx-auto"
            >
              {/* TODO: Replace with Wistia embed */}
              <div className="aspect-video bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-white/60 text-sm">Watch: How Probate Leads Can Transform Your Business</p>
                  <p className="text-white/40 text-xs mt-1">[Video placeholder - Wistia embed goes here]</p>
                </div>
              </div>
            </motion.div>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <StrategyCallCTA />
              <p className="text-white/50 text-sm mt-4">
                Limited spots available this week
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: The Problem */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm font-medium uppercase tracking-wider mb-4">
                The Problem
              </span>
              <h2 className="font-hero font-[900] text-3xl sm:text-4xl text-white uppercase tracking-tighter mb-4">
                Why Most Investors Struggle to Find Deals
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                [Placeholder: Problem-focused copy about the competitive landscape, rising marketing costs, and shrinking margins that most real estate investors face today.]
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Target, title: 'Competition', desc: '[Placeholder: Too many investors chasing the same deals]' },
                { icon: Clock, title: 'Time Wasted', desc: '[Placeholder: Hours spent on leads that go nowhere]' },
                { icon: Zap, title: 'Rising Costs', desc: '[Placeholder: Marketing costs eating into margins]' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-red-500/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: The Solution */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#83d4c0]/5 to-transparent">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-[#83d4c0]/10 border border-[#83d4c0]/30 rounded-full text-[#83d4c0] text-sm font-medium uppercase tracking-wider mb-4">
                The Solution
              </span>
              <h2 className="font-hero font-[900] text-3xl sm:text-4xl text-white uppercase tracking-tighter mb-4">
                Why Probate Is Different
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                [Placeholder: Solution-focused copy about why probate leads are different - motivated sellers, less competition, predictable deal flow.]
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: 'Motivated Sellers', desc: '[Placeholder: Families need to sell - it\'s not optional]' },
                { title: 'Less Competition', desc: '[Placeholder: Most investors don\'t know how to find these]' },
                { title: 'Predictable Flow', desc: '[Placeholder: New cases filed every single week]' },
                { title: 'Better Margins', desc: '[Placeholder: Buy at 60-70% of market value]' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#83d4c0]/20 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#83d4c0]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <StrategyCallCTA variant="secondary" />
            </div>
          </div>
        </section>

        {/* SECTION 4: Social Proof / Testimonials */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-[#83d4c0]/10 border border-[#83d4c0]/30 rounded-full text-[#83d4c0] text-sm font-medium uppercase tracking-wider mb-4">
                Success Stories
              </span>
              <h2 className="font-hero font-[900] text-3xl sm:text-4xl text-white uppercase tracking-tighter mb-4">
                Real Investors, Real Results
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <Quote className="w-8 h-8 text-[#83d4c0]/30 mb-4" />
                  <p className="text-white/70 mb-4 italic">
                    &quot;[Placeholder: Testimonial quote from investor about their success with probate leads]&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-white/40" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">[Investor Name]</p>
                      <p className="text-white/40 text-xs">[Location] - [X] deals closed</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: What You'll Learn on the Call */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0891b2]/5 to-transparent">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-[#83d4c0]/10 border border-[#83d4c0]/30 rounded-full text-[#83d4c0] text-sm font-medium uppercase tracking-wider mb-4">
                Your Strategy Call
              </span>
              <h2 className="font-hero font-[900] text-3xl sm:text-4xl text-white uppercase tracking-tighter mb-4">
                What We&apos;ll Cover in 15 Minutes
              </h2>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-10">
              <div className="space-y-4">
                {[
                  'How to identify the highest-quality probate leads in your market',
                  'The exact approach to contact heirs without being pushy',
                  'Why most investors fail at probate (and how to avoid their mistakes)',
                  'A custom plan for your specific situation and market',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#83d4c0]/20 flex items-center justify-center text-[#83d4c0] font-bold text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-white/80 pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <StrategyCallCTA />
              <p className="text-white/50 text-sm mt-4">
                No obligation. No pressure. Just clarity.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: Final CTA */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-hero font-[900] text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tighter mb-6">
              Ready to Unlock{' '}
              <span className="text-[#83d4c0]">Probate Leads</span>{' '}
              in Your Market?
            </h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Book your free 15-minute strategy call and discover how probate can become your most reliable source of off-market deals.
            </p>
            <StrategyCallCTA />

            {/* Email Reminder */}
            <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left max-w-xl mx-auto">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#83d4c0] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white mb-1">Don&apos;t Forget Your Guide!</h3>
                  <p className="text-white/60 text-sm">
                    Check your inbox for an email from <strong className="text-white/80">gary@homeflip.ai</strong>.
                    If you don&apos;t see it within a few minutes, check your spam or promotions folder.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} WhiteBox Academy. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
