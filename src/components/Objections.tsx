'use client';

import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const Objections = () => {
  const items = [
    {
      q: "Isn't contacting probate families unethical?",
      a: "We advocate for respectful, professional outreach. By the time a case is filed, families are dealing with practical matters. Many heirs are relieved to find a solution for a property they cannot manage. Our systems are built to facilitate helpful, not high-pressure, conversations."
    },
    {
      q: "Heirs want full market value—they won't sell at a discount.",
      a: "Some do, and that's fine—they're not your customer. But many heirs prioritize speed, certainty, and simplicity over maximizing price. No repairs, no staging, no showings. A “discount” is actually a fair trade for the convenience you provide."
    },
    {
      q: "I don't understand probate law.",
      a: "You don't need to. The legal aspects are handled by attorneys and the court. Your job is to build relationships and make offers, just like any other deal. Homeflip.ai guides you through the process so you never feel lost."
    },
    {
      q: "Are there enough probate leads in my market?",
      a: "Over 2.5 million people die in the US each year—many owned real estate. Even small counties see dozens of new cases monthly. With our multi-county monitoring, you'll have more opportunity than you can handle."
    }
  ];

  return (
    <Section className="bg-white">
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-gray-50 text-gray-400 text-sm font-bold mb-6 tracking-widest uppercase"
          >
            FAQ
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-black text-gray-900 mb-8 tracking-tight">
            Common <br />
            <span className="text-gray-400">Questions.</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to know about the system and the strategy.
          </p>
        </div>

        <div className="lg:col-span-2 space-y-6">
          {items.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:bg-white hover:border-[#5EEADC]/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-[#5EEADC]" />
                {item.q}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
