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
      color: "#5EEADC"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Timeline Intelligence",
      subtitle: "The Brain",
      desc: "We track the entire case lifecycle—inventory, delays, listings. We tell you who is ready to sell now, not just who is on a list.",
      color: "#A855F7"
    },
    {
      icon: <CheckCircle2 className="w-10 h-10" />,
      title: "Guided Outreach",
      subtitle: "The Vehicle",
      desc: "Follow proven, respectful workflows designed specifically for probate. You focus on building rapport and closing the deal.",
      color: "#5EEADC"
    }
  ];

  return (
    <Section id="how-it-works" className="bg-white overflow-hidden">
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 rounded-full bg-gray-50 text-gray-400 text-sm font-bold mb-6 tracking-widest uppercase"
        >
          THE PROCESS
        </motion.div>
        <h2 className="text-4xl sm:text-6xl font-black text-gray-900 mb-6 tracking-tight">
          From Lead to Close <br />
          <span className="text-gray-400">in Three Simple Steps.</span>
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Animated Connecting Line */}
        <div className="hidden lg:block absolute top-[50px] left-0 right-0 h-1 bg-gray-100 z-0">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-[#5EEADC] via-[#A855F7] to-[#5EEADC]"
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
                  className="w-24 h-24 rounded-3xl flex items-center justify-center text-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)` }}
                >
                  {step.icon}
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gray-900 border-4 border-white flex items-center justify-center text-white text-xs font-black">
                  {i + 1}
                </div>
              </div>
              <div className="text-sm font-black text-[#5EEADC] uppercase tracking-[0.2em] mb-2">{step.subtitle}</div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed px-4">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-24 text-center">
        <Link
          href="/how-it-works"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gray-900 text-white font-bold text-lg transition-all hover:bg-gray-800 hover:shadow-2xl hover:scale-105 active:scale-95"
        >
          Explore the Timeline <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </Section>
  );
};
