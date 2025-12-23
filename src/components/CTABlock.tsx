'use client';

import React from 'react';
import { CTAForm } from './CTAForm';
import { motion } from 'framer-motion';

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
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          {headline}
        </h3>
        <CTAForm className="shadow-2xl shadow-[#22d3ee]/10 rounded-full p-2 bg-white/5 backdrop-blur-xl border border-white/10" />
      </div>
    </motion.div>
  );
};
