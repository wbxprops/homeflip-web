'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-[#050505] dark">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#83d4c0]/15 via-transparent to-transparent opacity-50" />

      {/* The Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#83d4c0]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[0%] left-[-5%] w-[800px] h-[800px] bg-[#0891b2]/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Center Spotlight behind headline */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[#83d4c0]/15 to-[#0891b2]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(#83d4c0 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-hero text-[14vw] sm:text-[8rem] lg:text-[10rem] font-[800] text-white leading-[0.85] tracking-[-0.03em] mb-8 sm:mb-12 uppercase"
          >
            The AI-Powered <br />
            Probate Lead Platform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl text-slate-400 max-w-4xl mx-auto leading-snug mb-12 font-normal"
          >
            Built for real estate investors who want consistent off-market deals with <span className="text-[#83d4c0] italic">high equity and motivated sellers.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            <Link
              href="/claim-your-county"
              className="btn-gradient inline-block px-10 sm:px-16 py-5 sm:py-7 rounded-2xl font-hero font-[900] text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter shadow-2xl shadow-[#83d4c0]/30 hover:scale-105 active:scale-95 transition-all"
            >
              Claim Your County
            </Link>

            <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-slate-500 uppercase tracking-tighter mt-6">
              <div className="flex items-center gap-2">
                <span className="text-[#83d4c0]">✓</span> Verified Records
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#83d4c0]">✓</span> Daily Updates
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#83d4c0]">✓</span> Timeline Tracking
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Teaser Removed for Letter-First Layout */}
      </div>

      {/* Bottom Border Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#83d4c0]/50 to-transparent" />
    </section>
  );
};
