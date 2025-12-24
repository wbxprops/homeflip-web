'use client';

import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { AlertCircle, XCircle, Clock, Zap } from 'lucide-react';

export const Problem = () => {
  const problems = [
    {
      icon: <XCircle className="w-6 h-6 text-red-500" />,
      title: "Inconsistent Deal Flow",
      desc: "Relying on direct mail or cold calling static lists is a rollercoaster. Some months are great; most are dry."
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: "Wasted Marketing Dollars",
      desc: "Mailing 1,000 heirs at the wrong time is expensive. You're competing with dozens of other 'guru' students."
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-amber-500" />,
      title: "Zero Timeline Visibility",
      desc: "Traditional vendors sell you records. They don't tell you if a case is moving, stalled, or already sold."
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-500" />,
      title: "No System, Just Chaos",
      desc: "Managing leads in spreadsheets and manual court searches takes hours. You're a researcher, not an investor."
    }
  ];

  return (
    <Section className="bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-red-50 text-red-600 text-sm font-bold mb-6 tracking-widest uppercase border border-red-100"
          >
            THE STRUGGLE IS REAL
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-8 leading-tight">
            The Silent Deal-Killer: <br />
            <span className="text-slate-400">Stale Data.</span>
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Most investors aren&apos;t failing because they lack hustle. They&apos;re failing because they&apos;re <span className="text-[#0891b2] italic font-semibold">fighting for scraps</span> from outdated, over-saturated lists.
          </p>
          <div className="space-y-6">
            {problems.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-3xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
              >
                <div className="mt-1 group-hover:scale-110 transition-transform">{p.icon}</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1 tracking-tight">{p.title}</h4>
                  <p className="text-slate-500 text-base leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#83d4c0]/10 to-[#0891b2]/10 rounded-[2.5rem] blur-2xl opacity-50" />
          <div className="relative bg-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-200 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8">
              <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center text-4xl">📉</div>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">The &quot;Guru&quot; Cycle</h3>
            <div className="space-y-10">
              <div className="relative pl-8 border-l-2 border-slate-100">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-red-500" />
                <div className="text-slate-900 font-bold mb-1 uppercase text-sm tracking-widest">Buy Static List</div>
                <p className="text-slate-500 text-base">Join the 100 other investors mailing the same records.</p>
              </div>
              <div className="relative pl-8 border-l-2 border-slate-100">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-orange-500" />
                <div className="text-slate-900 font-bold mb-1 uppercase text-sm tracking-widest">Mass Marketing</div>
                <p className="text-slate-500 text-base">Send 1,000 letters. Get 2 angry calls. 0 deals.</p>
              </div>
              <div className="relative pl-8 border-l-2 border-slate-100">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-amber-500" />
                <div className="text-slate-900 font-bold mb-1 uppercase text-sm tracking-widest">Frustration Sets In</div>
                <p className="text-slate-500 text-base">Conclude that &quot;probate doesn&apos;t work&quot; in your market.</p>
              </div>
              <div className="pt-4">
                <div className="p-4 bg-red-50 rounded-2xl border border-red-100 text-center text-sm font-black text-red-600 tracking-[0.2em] uppercase">
                  REPEATING THIS = BURN OUT
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
