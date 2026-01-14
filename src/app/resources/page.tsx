'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from "@/components/Navbar";
import { PlayCircle, ArrowRight } from 'lucide-react';

const resources = [
  {
    title: 'Probate Investing Training - Day 1',
    description: 'Learn how probate leads work and why they are the best opportunity in real estate.',
    href: '/resources/probate-training-1',
    type: 'video',
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#83d4c0]/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden min-h-[80vh]" style={{ background: 'linear-gradient(180deg, #050505 0%, #0a0a0a 100%)' }}>
        {/* Background Decor */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#83d4c0]/10 via-transparent to-transparent opacity-50" />

        {/* The Glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#83d4c0]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[0%] left-[-5%] w-[600px] h-[600px] bg-[#0891b2]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[#83d4c0]/10 to-[#0891b2]/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#83d4c0 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="font-hero text-[14vw] sm:text-7xl lg:text-8xl font-[800] text-white leading-[0.9] tracking-[-0.02em] uppercase mb-6">
              Free Resources
            </h1>
            <p className="text-xl sm:text-2xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Training videos and guides to help you succeed with probate investing.
            </p>
          </motion.div>

          {/* Resource Cards */}
          <div className="space-y-4">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Link
                  href={resource.href}
                  className="block p-6 sm:p-8 rounded-2xl group transition-all duration-300 hover:translate-y-[-2px]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, rgba(131,212,192,0.04) 100%)',
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -1px 1px rgba(0,0,0,0.1), 0 8px 32px rgba(0,0,0,0.4)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {/* Top glossy edge highlight */}
                  <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <div className="flex items-center gap-5">
                    <div
                      className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center backdrop-blur-md"
                      style={{
                        background: 'linear-gradient(135deg, rgba(131,212,192,0.2) 0%, rgba(8,145,178,0.15) 100%)',
                        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), 0 4px 16px rgba(131,212,192,0.15)',
                        border: '1px solid rgba(131,212,192,0.25)',
                      }}
                    >
                      <PlayCircle className="w-7 h-7 sm:w-8 sm:h-8 text-[#83d4c0]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#83d4c0] transition-colors uppercase tracking-wide">
                        {resource.title}
                      </h2>
                      <p className="text-slate-400 mt-1 font-medium">{resource.description}</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-slate-500 group-hover:text-[#83d4c0] group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Border Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#83d4c0]/50 to-transparent" />
      </section>

      {/* Minimal Footer - Matches Landing Page Style */}
      <footer className="py-6 px-6 bg-[#050505] border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-2 text-xs text-slate-700">
          <p>&copy; 2026 WhiteBox Academy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/terms" className="hover:text-slate-500 transition-colors">Terms</a>
            <span className="text-slate-800">·</span>
            <a href="/privacy" className="hover:text-slate-500 transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
