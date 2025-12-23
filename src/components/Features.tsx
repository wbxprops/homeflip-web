'use client';

import React from 'react';
import { Section } from './Section';
import { Search, Zap, Home, ClipboardList, Users, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

export const Features = () => {
  const features = [
    { 
      icon: <Search className="w-8 h-8" />, 
      title: "Automated Lead Discovery", 
      desc: "Fresh probate leads delivered to your dashboard daily. No manual searching, no courthouse visits, no clunky public records." 
    },
    { 
      icon: <Zap className="w-8 h-8" />, 
      title: "AI-Powered Prioritization", 
      desc: "Smart scoring tells you which leads to work first based on property value, equity, timing, and motivation signals." 
    },
    { 
      icon: <Home className="w-8 h-8" />, 
      title: "Property Intelligence", 
      desc: "Instant access to valuation estimates, ownership history, tax records, and property characteristics." 
    },
    { 
      icon: <ClipboardList className="w-8 h-8" />, 
      title: "Guided Workflows", 
      desc: "Step-by-step processes for outreach, follow-up, offer presentation, and closing. Nothing falls through the cracks." 
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      title: "Contact Management", 
      desc: "Track attorneys, personal representatives, fiduciaries, and heirs. All your relationships in one place." 
    },
    { 
      icon: <Bell className="w-8 h-8" />, 
      title: "Real-Time Notifications", 
      desc: "Get instant alerts when new cases match your criteria or when it's time to follow up on a lead." 
    },
  ];

  return (
    <Section id="features" className="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-black text-gray-900">
          Everything You Need to Close More Deals
        </h2>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          A complete toolkit for probate real estate investing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-white hover:bg-gradient-to-br hover:from-[#5EEADC]/5 hover:to-[#A855F7]/5 p-8 rounded-3xl border border-gray-200 hover:border-[#5EEADC]/30 hover:shadow-xl transition-all duration-300"
          >
            <div className="text-[#5EEADC] mb-6 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
