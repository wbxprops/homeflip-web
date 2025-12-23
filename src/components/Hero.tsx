'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-8 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5EEADC]/5 via-white to-[#A855F7]/5" />
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#5EEADC]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#A855F7]/15 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight"
        >
          Probate Isn&apos;t About Being Early.
          <br />
          <span className="bg-gradient-to-r from-[#5EEADC] to-[#A855F7] bg-clip-text text-transparent">
            It&apos;s About Being On Time.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          Other vendors sell you static lists. Homeflip.ai tracks the probate timeline—so you call when it actually matters.
        </motion.p>

        {/* Inline Email Capture */}
        <motion.form 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-xl mx-auto" 
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            window.location.href = '/waitlist';
          }}
        >
          <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-full shadow-2xl shadow-gray-200/50 border border-gray-100">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full text-lg focus:outline-none"
              required
            />
            <button
              type="submit"
              className="btn-gradient px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-lg hover:shadow-[#5EEADC]/30 hover:scale-[1.02] whitespace-nowrap"
            >
              Get Early Access
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Join 500+ investors on the waitlist. No spam, ever.
          </p>
        </motion.form>
      </div>
    </section>
  );
};
