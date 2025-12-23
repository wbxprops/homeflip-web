'use client';

import React from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { WaitlistForm } from "@/components/WaitlistForm";
import { motion } from 'framer-motion';

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-[#0a0118]">
      <Navbar />
      <main className="pt-24">
        <Section className="!pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-full bg-white/5 text-[#22d3ee] text-sm font-bold mb-6 tracking-widest uppercase border border-white/10">
              PRIVATE BETA
            </div>
            <h1 className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
              Join the <br />
              <span className="text-white/20 italic">Waitlist.</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
              Homeflip.ai is currently in private beta. Be the first to know when we open up new spots in your market.
            </p>
          </div>
        </Section>

        <Section className="!pt-0">
          <div className="max-w-xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/[0.02] backdrop-blur-3xl p-10 sm:p-12 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#22d3ee]/10 rounded-full blur-3xl pointer-events-none" />
              <WaitlistForm />
            </motion.div>
            
            <div className="mt-16 grid grid-cols-2 gap-8">
              <div className="text-center p-8 bg-black/20 rounded-[2rem] border border-white/5 backdrop-blur-md">
                <div className="text-4xl font-black text-white mb-2 tracking-tighter">500+</div>
                <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Investors Waiting</div>
              </div>
              <div className="text-center p-8 bg-black/20 rounded-[2rem] border border-white/5 backdrop-blur-md">
                <div className="text-4xl font-black text-white mb-2 tracking-tighter">5</div>
                <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Counties Live</div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
