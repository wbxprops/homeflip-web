'use client';

import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { AlertCircle, XCircle, Clock, Zap } from 'lucide-react';

export const Problem = () => {
  const problems = [
    {
      icon: <XCircle className="w-6 h-6 text-red-400" />,
      title: "Inconsistent Deal Flow",
      desc: "Relying on direct mail or cold calling static lists is a rollercoaster. Some months are great; most are dry."
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-400" />,
      title: "Wasted Marketing Dollars",
      desc: "Mailing 1,000 heirs at the wrong time is expensive. You're competing with dozens of other 'guru' students."
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-yellow-400" />,
      title: "Zero Timeline Visibility",
      desc: "Traditional vendors sell you records. They don't tell you if a case is moving, stalled, or already sold."
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: "No System, Just Chaos",
      desc: "Managing leads in spreadsheets and manual court searches takes hours. You're a researcher, not an investor."
    }
  ];

  return (
    <Section className="bg-[#0a0118]">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-red-500/10 text-red-400 text-sm font-bold mb-6 tracking-widest uppercase"
          >
            THE STRUGGLE IS REAL
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 leading-tight">
            Why Most Investors <br />
            <span className="text-white/40">Never Scale.</span>
          </h2>
          <p className="text-xl text-white/60 mb-10 leading-relaxed">
            Real estate investing is a numbers game, but if your numbers are based on <strong>stale data</strong> and <strong>bad timing</strong>, you&apos;re playing at a disadvantage.
          </p>
          <div className="space-y-6">
            {problems.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-3xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group"
              >
                <div className="mt-1 group-hover:scale-110 transition-transform">{p.icon}</div>
                <div>
                  <h4 className="font-bold text-white mb-1 tracking-tight">{p.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#22d3ee]/20 to-[#a855f7]/20 rounded-[2.5rem] blur-2xl opacity-50" />
          <div className="relative bg-black/40 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-12 border border-white/10 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8">
              <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center text-4xl">📉</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">The &quot;Guru&quot; Cycle</h3>
            <div className="space-y-10">
              <div className="relative pl-8 border-l border-white/10">
                <div className="absolute -left-[4.5px] top-0 w-2 h-2 rounded-full bg-red-500" />
                <div className="text-white font-bold mb-1 uppercase text-xs tracking-widest">Buy Static List</div>
                <p className="text-white/40 text-sm">Join the 100 other investors mailing the same records.</p>
              </div>
              <div className="relative pl-8 border-l border-white/10">
                <div className="absolute -left-[4.5px] top-0 w-2 h-2 rounded-full bg-orange-500" />
                <div className="text-white font-bold mb-1 uppercase text-xs tracking-widest">Mass Marketing</div>
                <p className="text-white/40 text-sm">Send 1,000 letters. Get 2 angry calls. 0 deals.</p>
              </div>
              <div className="relative pl-8 border-l border-white/10">
                <div className="absolute -left-[4.5px] top-0 w-2 h-2 rounded-full bg-yellow-500" />
                <div className="text-white font-bold mb-1 uppercase text-xs tracking-widest">Frustration Sets In</div>
                <p className="text-white/40 text-sm">Conclude that &quot;probate doesn&apos;t work&quot; in your market.</p>
              </div>
              <div className="pt-4">
                <div className="p-4 bg-[#22d3ee]/5 rounded-2xl border border-[#22d3ee]/20 text-center text-xs font-black text-[#22d3ee] tracking-[0.2em] uppercase">
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
