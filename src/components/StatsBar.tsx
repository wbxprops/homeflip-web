'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const StatsBar = () => {
  const stats = [
    { label: "Deal Value Sourced", value: "$2.4M+", icon: "💰" },
    { label: "Investors on Waitlist", value: "500+", icon: "👥" },
    { label: "Leads Processed", value: "10K+", icon: "📊" },
    { label: "Counties Live", value: "5", icon: "📍" },
  ];

  return (
    <section className="py-20 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 bg-white/[0.03] rounded-[2rem] border border-white/5 shadow-2xl transition-all hover:bg-white/[0.05] group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tighter mb-2">{stat.value}</div>
              <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
