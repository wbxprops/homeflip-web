'use client';

import React from 'react';
import { Section } from './Section';
import { Search, Zap, Home, ClipboardList, Users, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

export const Features = () => {
  const features = [
    { 
      icon: <Search className="w-6 h-6" />, 
      title: "Automated discovery", 
      desc: "Fresh probate leads delivered daily. No courthouse visits, no manual entry." 
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Timeline Intelligence",
      desc: "Know exactly where each case is in the probate process so you reach out at the right moment."
    },
    { 
      icon: <Home className="w-6 h-6" />, 
      title: "Property Intel", 
      desc: "Instant access to valuations, ownership history, and local tax records." 
    },
    { 
      icon: <ClipboardList className="w-6 h-6" />, 
      title: "Guided Workflows", 
      desc: "Step-by-step processes for outreach, follow-up, and closing." 
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      title: "Contact Manager", 
      desc: "Track attorneys, personal reps, and heirs in one dedicated system." 
    },
    { 
      icon: <Bell className="w-6 h-6" />, 
      title: "Real-Time Alerts", 
      desc: "Get notified the moment a case moves to the next stage of the timeline." 
    },
  ];

  return (
    <Section id="features" className="bg-white">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 rounded-full bg-slate-50 text-slate-500 text-sm font-bold mb-6 tracking-widest uppercase border border-slate-200"
        >
          THE TOOLKIT
        </motion.div>
        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-900 mb-6 tracking-tight">
          Everything You Need <br />
          <span className="text-slate-400">to Close More Deals.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:border-[#0891b2]/30 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#0891b2] mb-8 group-hover:bg-[#0891b2] group-hover:text-white transition-all duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{feature.title}</h3>
            <p className="text-slate-500 leading-relaxed text-base">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
