'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CTAForm } from './CTAForm';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#5EEADC]/5 via-transparent to-transparent" />
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#5EEADC]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#A855F7]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-gray-600 text-sm font-medium mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#5EEADC] animate-pulse" />
            Join 500+ investors in the private beta
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.05] tracking-tight mb-8"
          >
            Probate Isn&apos;t About <br className="hidden md:block" /> 
            <span className="text-gray-400">Being Early.</span> It&apos;s About <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#5EEADC] via-[#2DD4BF] to-[#A855F7] bg-clip-text text-transparent">
              Being On Time.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Stop fighting over cold leads. Homeflip.ai uses <strong>Timeline Intelligence</strong> to track the probate lifecycle—so you reach heirs exactly when they&apos;re ready to sell.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            <CTAForm className="w-full max-w-2xl shadow-2xl shadow-gray-200/50 rounded-full p-2 bg-white/50 backdrop-blur-sm" />
            
            <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-gray-400 uppercase tracking-widest mt-4">
              <div className="flex items-center gap-2">
                <span className="text-[#5EEADC]">✓</span> Verified Records
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#5EEADC]">✓</span> Daily Updates
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#5EEADC]">✓</span> AI Lead Scoring
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative max-w-5xl mx-auto mt-20 p-4 bg-white/50 backdrop-blur-md rounded-[2.5rem] border border-white shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#5EEADC]/5 to-[#A855F7]/5 pointer-events-none" />
          <div className="aspect-[16/9] bg-gray-50 rounded-[1.5rem] border border-gray-100 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#5EEADC]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="text-gray-400 font-bold flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center text-3xl">🚀</div>
              <span className="text-lg tracking-wide uppercase">Interactive Dashboard Preview</span>
              <Link href="/how-it-works" className="mt-4 flex items-center gap-2 text-[#5EEADC] hover:text-[#2DD4BF] transition-colors font-bold">
                See How It Works <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
