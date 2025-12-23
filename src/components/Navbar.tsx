'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0118]/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#22d3ee] to-[#a855f7] flex items-center justify-center text-black font-black shadow-lg shadow-[#22d3ee]/20 group-hover:scale-110 transition-transform">
            H
          </div>
          <span className="text-2xl font-black text-white tracking-tight">
            Homeflip<span className="text-[#22d3ee]">.ai</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          <Link href="/#why-probate" className="text-sm font-bold text-white/60 hover:text-white transition-colors uppercase tracking-widest">
            Why Probate
          </Link>
          <Link href="/how-it-works" className="text-sm font-bold text-white/60 hover:text-white transition-colors uppercase tracking-widest">
            How It Works
          </Link>
          <Link href="/pricing" className="text-sm font-bold text-white/60 hover:text-white transition-colors uppercase tracking-widest">
            Pricing
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/waitlist"
            className="btn-gradient px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-[#22d3ee]/20 hover:scale-105 active:scale-95 transition-all uppercase tracking-widest"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};
