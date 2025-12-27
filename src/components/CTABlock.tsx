'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CTABlockProps {
  headline?: string;
  className?: string;
}

export const CTABlock = ({
  headline = "Ready to claim your county?",
  className = ""
}: CTABlockProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`py-16 px-6 ${className}`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 tracking-tight">
          {headline}
        </h3>
        <Link
          href="/claim-your-county"
          className="btn-gradient inline-block px-10 sm:px-14 py-5 sm:py-6 rounded-2xl font-hero font-[900] text-2xl sm:text-3xl md:text-4xl uppercase tracking-tighter shadow-xl shadow-[#83d4c0]/20 hover:scale-105 active:scale-95 transition-all"
        >
          Claim Your County
        </Link>
      </div>
    </motion.div>
  );
};
