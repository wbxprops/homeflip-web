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
    <Section id="why-probate" className="bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="relative">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-white/10 text-[#5EEADC] text-sm font-bold mb-6 tracking-widest uppercase"
          >
            THE PROBATE ADVANTAGE
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tight">
            It&apos;s Not Just Real Estate. <br />
            <span className="text-[#5EEADC]">It&apos;s Simple Math.</span>
          </h2>
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
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
              className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#5EEADC]/10 to-transparent -mr-12 -mt-12 rounded-full group-hover:scale-150 transition-transform duration-700" />
              <div className="text-[#5EEADC] mb-8 p-3 bg-white/5 inline-block rounded-2xl group-hover:scale-110 group-hover:bg-[#5EEADC] group-hover:text-gray-900 transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#5EEADC] transition-colors">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-1 rounded-full bg-white/5 border border-white/10">
            <div className="px-8 py-4 rounded-full bg-gray-900 text-2xl text-gray-300 font-medium">
              Probate leads are not records—<span className="text-[#5EEADC] font-black">they&apos;re evolving situations.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
