'use client';

import React from 'react';
import { Section } from './Section';
import { Target, Trophy, TrendingUp, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyProbate = () => {
  const benefits = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Motivated Sellers",
      desc: "Heirs often inherit properties they can't manage, don't want, or need to liquidate quickly. They value speed and certainty over top dollar."
    },
    {
      icon: <Trophy className="w-10 h-10" />,
      title: "Less Competition",
      desc: "Less than 5% of investors work probate. While 50 people fight over one foreclosure, you might be the only one calling a probate lead."
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Consistent Flow",
      desc: "Courts file new probate cases every week, year-round. No seasonal slowdowns. No market dependency. Predictable lead volume."
    },
    {
      icon: <Handshake className="w-10 h-10" />,
      title: "Win-Win Deals",
      desc: "You're helping families solve a real problem. They get a quick, hassle-free sale. You get a deal. Everyone wins."
    }
  ];

  return (
    <Section id="why-probate" className="bg-gray-900 text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-black">
          Why Probate? <span className="text-[#5EEADC]">It&apos;s Simple Math.</span>
        </h2>
        <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
          While other investors fight over the same leads, you&apos;ll be working a market most people don&apos;t understand.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group"
          >
            <div className="text-[#5EEADC] mb-6 group-hover:scale-110 transition-transform">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
            <p className="text-gray-400">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-2xl text-gray-300 font-medium">
          Probate leads are not records—<span className="text-[#5EEADC] font-bold">they&apos;re evolving situations.</span>
        </p>
      </div>
    </Section>
  );
};
