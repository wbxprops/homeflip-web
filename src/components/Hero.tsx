'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CTAForm } from './CTAForm';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-[#0a0118]">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#22d3ee]/10 via-transparent to-transparent" />
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#22d3ee]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#a855f7]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#22d3ee] animate-pulse" />
            Join 500+ investors in the private beta
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-hero text-[14vw] sm:text-[10rem] lg:text-[13rem] font-[800] text-white leading-[0.8] tracking-[-0.05em] mb-12 uppercase italic"
          >
            Probate <br />
            Isn&apos;t <br />
            About <br />
            <span className="text-white/20">Being Early.</span> <br /> 
            It&apos;s About <br />
            <span className="bg-gradient-to-r from-[#22d3ee] via-[#2DD4BF] to-[#a855f7] bg-clip-text text-transparent">
              Being On Time.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-12 font-medium"
          >
            Stop fighting over cold leads. Homeflip.ai uses <strong>Timeline Intelligence</strong> to track the probate lifecycle—so you reach heirs exactly when they&apos;re ready to sell.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            <CTAForm className="w-full max-w-2xl shadow-2xl shadow-[#22d3ee]/10 rounded-full p-2 bg-white/5 backdrop-blur-xl border border-white/10" />
            
            <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-white/40 uppercase tracking-widest mt-4">
              <div className="flex items-center gap-2">
                <span className="text-[#22d3ee]">✓</span> Verified Records
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#22d3ee]">✓</span> Daily Updates
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#22d3ee]">✓</span> AI Lead Scoring
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative max-w-5xl mx-auto mt-20 p-4 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#22d3ee]/5 to-[#a855f7]/5 pointer-events-none" />
          <div className="aspect-[16/9] bg-black/40 rounded-[1.5rem] border border-white/5 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#22d3ee]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="text-white/40 font-bold flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-xl shadow-xl flex items-center justify-center text-3xl border border-white/10">🚀</div>
              <span className="text-lg tracking-wide uppercase">Interactive Dashboard Preview</span>
              <Link href="/how-it-works" className="mt-4 flex items-center gap-2 text-[#22d3ee] hover:text-[#2DD4BF] transition-colors font-bold">
                See How It Works <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
