'use client';

import React from 'react';
import { CTAForm } from './CTAForm';
import { motion } from 'framer-motion';

export const FinalCTA = () => {
  return (
    <section id="waitlist" className="px-6 py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5EEADC]/20 via-transparent to-[#A855F7]/20 opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#5EEADC]/10 rounded-full blur-[150px] animate-pulse pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-10 tracking-tight leading-[1.05]">
            Ready to Build a <br />
            <span className="text-[#5EEADC]">Predictable</span> Deal Pipeline?
          </h2>
          <p className="mt-10 text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-16">
            Join the elite group of investors using <strong>Timeline Intelligence</strong> to dominate the probate market.
          </p>

          <CTAForm className="max-w-2xl mx-auto shadow-2xl p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20" />

          <p className="mt-8 text-sm text-gray-500 font-medium tracking-widest uppercase">
            Private Beta Access • Limited Markets Available
          </p>
        </motion.div>
      </div>
    </section>
  );
};
