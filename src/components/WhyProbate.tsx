'use client';

import React from 'react';
import { Section } from './Section';
import { Target, Trophy, TrendingUp, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyProbate = () => {
  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Hyper-Motivated Sellers",
      desc: "Heirs often inherit properties they can't manage, don't want, or need to liquidate quickly to settle debts. They value speed and certainty over top dollar."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Untapped Market",
      desc: "Less than 5% of investors work probate correctly. While 50 people fight over one foreclosure, you might be the only one offering a solution to a probate lead."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Recession-Proof Flow",
      desc: "Courts file new probate cases every week, year-round. It's a consistent source of off-market deals regardless of interest rates or market shifts."
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "The Service mindset",
      desc: "You're helping families solve a real problem during a difficult transition. They get a hassle-free sale, and you get a deal. It's a true win-win."
    }
  ];

  return (
    <Section id="why-probate" className="bg-white text-slate-900 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="relative">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-slate-50 text-[#0891b2] text-sm font-bold mb-6 tracking-widest uppercase border border-slate-200"
          >
            THE PROBATE ADVANTAGE
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tight text-slate-900">
            It&apos;s Not Just Real Estate. <br />
            <span className="text-[#0891b2]">It&apos;s Simple Math.</span>
          </h2>
          <p className="mt-6 text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            While other investors fight over the same stale lists, you&apos;ll be working a market that rewards systems over hustle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-slate-100 p-8 rounded-[2rem] hover:bg-slate-50 hover:border-slate-200 shadow-xl shadow-slate-200/20 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0891b2]/5 to-transparent -mr-12 -mt-12 rounded-full group-hover:scale-150 transition-transform duration-700" />
              <div className="text-[#0891b2] mb-8 p-3 bg-[#0891b2]/5 inline-block rounded-2xl group-hover:scale-110 group-hover:bg-[#0891b2] group-hover:text-white transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#0891b2] transition-colors tracking-tight">{benefit.title}</h3>
              <p className="text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors text-base">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-1 rounded-full bg-slate-50 border border-slate-200">
            <div className="px-8 py-4 rounded-full bg-white backdrop-blur-xl text-xl text-slate-500 font-medium shadow-sm">
              Probate leads are not records. <span className="text-[#0891b2] font-black italic">They&apos;re evolving situations.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
