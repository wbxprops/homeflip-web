'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 dark"
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#83d4c0] to-[#0891b2] flex items-center justify-center text-[#0a1421] font-black shadow-lg shadow-[#83d4c0]/20 group-hover:scale-110 transition-transform">
            H
          </div>
          <span className="text-2xl font-black text-white tracking-tight">
            Homeflip<span className="text-[#83d4c0]">.ai</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          <Link href="/#probate-investing" className="text-sm font-bold text-slate-400 hover:text-[#83d4c0] transition-colors uppercase tracking-tighter">
            Why Probate
          </Link>
          <Link href="/#features" className="text-sm font-bold text-slate-400 hover:text-[#83d4c0] transition-colors uppercase tracking-tighter">
            How It Works
          </Link>
          <Link href="/#faq" className="text-sm font-bold text-slate-400 hover:text-[#83d4c0] transition-colors uppercase tracking-tighter">
            FAQs
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};
