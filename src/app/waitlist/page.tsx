'use client';

import React from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { WaitlistForm } from "@/components/WaitlistForm";
import { motion } from 'framer-motion';

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <Section className="!pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-full bg-[#5EEADC]/10 text-[#2DD4BF] text-sm font-bold mb-6 tracking-widest uppercase">
              PRIVATE BETA
            </div>
            <h1 className="text-5xl sm:text-7xl font-black text-gray-900 mb-8 tracking-tight">
              Join the <br />
              <span className="text-gray-400">Waitlist.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Homeflip.ai is currently in private beta. Be the first to know when we open up new spots in your market.
            </p>
          </div>
        </Section>

        <Section className="!pt-0">
          <div className="max-w-xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-10 sm:p-12 rounded-[3rem] border border-gray-100 shadow-2xl shadow-gray-200/50 relative"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#5EEADC]/10 rounded-full blur-3xl pointer-events-none" />
              <WaitlistForm />
            </motion.div>
            
            <div className="mt-16 grid grid-cols-2 gap-8">
              <div className="text-center p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                <div className="text-4xl font-black text-gray-900 mb-2 tracking-tight">500+</div>
                <div className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Investors Waiting</div>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                <div className="text-4xl font-black text-gray-900 mb-2 tracking-tight">5</div>
                <div className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Counties Live</div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
