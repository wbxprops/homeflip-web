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
      icon: <AlertCircle className="w-6 h-6 text-yellow-500" />,
      title: "Zero Timeline Visibility",
      desc: "Traditional vendors sell you records. They don't tell you if a case is moving, stalled, or already sold."
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
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
            className="inline-block px-4 py-1 rounded-full bg-red-50 text-red-600 text-sm font-bold mb-6"
          >
            THE STRUGGLE IS REAL
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8 leading-tight">
            Why Most Investors <br />
            <span className="text-gray-400">Never Scale.</span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
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
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group"
              >
                <div className="mt-1 group-hover:scale-110 transition-transform">{p.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{p.title}</h4>
                  <p className="text-gray-600">{p.desc}</p>
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#5EEADC]/20 to-[#A855F7]/20 rounded-[2.5rem] blur-2xl" />
          <div className="relative bg-gray-900 rounded-[2.5rem] p-8 sm:p-12 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8">
              <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center text-4xl">📉</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">The &quot;Guru&quot; Cycle</h3>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-white/10">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red-500 border-4 border-gray-900" />
                <div className="text-white font-bold mb-1">Buy Static List</div>
                <p className="text-gray-400 text-sm">Join the 100 other investors mailing the same records.</p>
              </div>
              <div className="relative pl-8 border-l-2 border-white/10">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 border-4 border-gray-900" />
                <div className="text-white font-bold mb-1">Mass Marketing</div>
                <p className="text-gray-400 text-sm">Send 1,000 letters. Get 2 angry calls. 0 deals.</p>
              </div>
              <div className="relative pl-8 border-l-2 border-white/10">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-yellow-500 border-4 border-gray-900" />
                <div className="text-white font-bold mb-1">Frustration Sets In</div>
                <p className="text-gray-400 text-sm">Conclude that &quot;probate doesn&apos;t work&quot; in your market.</p>
              </div>
              <div className="pt-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center text-sm font-bold text-gray-300">
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

