'use client';

import React from 'react';
import { Section } from './Section';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Target, CheckCircle2 } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-10 h-10" />,
      title: "Automated Discovery",
      subtitle: "The Fuel",
      desc: "Our AI monitors county court records 24/7. When a new probate case is filed with real estate assets, it hits your dashboard instantly.",
      color: "#0891b2"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Timeline Intelligence",
      subtitle: "The Brain",
      desc: "We track the entire case lifecycle—inventory, delays, listings. We tell you who is ready to sell now, not just who is on a list.",
      color: "#83d4c0"
    },
    {
      icon: <CheckCircle2 className="w-10 h-10" />,
      title: "Guided Outreach",
      subtitle: "The Vehicle",
      desc: "Follow proven, respectful workflows designed specifically for probate. You focus on building rapport and closing the deal.",
      color: "#0891b2"
    }
  ];

  return (
    <Section id="how-it-works" className="bg-white overflow-hidden">
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 rounded-full bg-slate-50 text-slate-500 text-sm font-bold mb-6 tracking-widest uppercase border border-slate-200"
        >
          THE PROCESS
        </motion.div>
        <h2 className="text-4xl sm:text-6xl font-black text-slate-900 mb-6 tracking-tight">
          From Lead to Close <br />
          <span className="text-slate-400 italic">in Three Simple Steps.</span>
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Animated Connecting Line */}
        <div className="hidden lg:block absolute top-[50px] left-0 right-0 h-px bg-slate-100 z-0">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-[#0891b2] via-[#83d4c0] to-[#0891b2]"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-16 lg:gap-8 relative z-10">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center group"
            >
              <div className="relative mb-10 inline-block">
                <div 
                  className="w-24 h-24 rounded-[2rem] flex items-center justify-center text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[#0891b2]/20"
                  style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)` }}
                >
                  {step.icon}
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-slate-900 text-xs font-black shadow-sm">
                  {i + 1}
                </div>
              </div>
              <div className="text-xs font-black text-[#0891b2] uppercase tracking-[0.2em] mb-2">{step.subtitle}</div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed px-4 text-base">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-24 text-center">
        <Link
          href="/how-it-works"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-slate-900 text-white font-black text-sm uppercase tracking-widest transition-all hover:bg-slate-800 hover:shadow-2xl hover:scale-105 active:scale-95"
        >
          Explore the Timeline <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
};
