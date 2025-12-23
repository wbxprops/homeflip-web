'use client';

import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle2, XCircle, Zap } from 'lucide-react';

export const Comparison = () => {
  return (
    <Section id="comparison" className="bg-gray-50/50">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 rounded-full bg-[#5EEADC]/10 text-[#2DD4BF] text-sm font-bold mb-6"
        >
          THE TRANSFORMATION
        </motion.div>
        <h2 className="text-4xl sm:text-6xl font-black text-gray-900 mb-6 tracking-tight">
          Static Lists vs. <br className="md:hidden" />
          <span className="bg-gradient-to-r from-[#5EEADC] to-[#A855F7] bg-clip-text text-transparent">Timeline Intelligence</span>
        </h2>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Stop buying snapshots. Start tracking the lifecycle. Probate is a process, not a record. We help you win by being there at the right moment.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Before - Static Lists */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 -mr-16 -mt-16 rounded-full" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-white">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 tracking-tight uppercase">Static Lists</h3>
            </div>
            
            <div className="space-y-8">
              <ComparisonItem
                title="Filing Date Only"
                description="You get a date and a name. Zero context for where the case actually stands today."
                isNegative
              />
              <ComparisonItem
                title="The 'Red Ocean'"
                description="The same CSV is sold to every 'guru' student. You're call #51 of the day."
                isNegative
              />
              <ComparisonItem
                title="Stale Data"
                description="Lists are often weeks old. By the time you mail, the property is already listed."
                isNegative
              />
              <ComparisonItem
                title="Manual Research"
                description="Spend hours at the courthouse or clunky portals trying to find the property address."
                isNegative
              />
            </div>
          </div>
        </motion.div>

        {/* After - Timeline Intelligence */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 p-8 md:p-12 rounded-[2.5rem] border border-gray-800 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#5EEADC]/10 via-transparent to-[#A855F7]/10 opacity-50" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#5EEADC]/10 rounded-full blur-[100px]" />
          
          <div className="relative">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#5EEADC] flex items-center justify-center text-gray-900 shadow-lg shadow-[#5EEADC]/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight uppercase">Timeline Intelligence</h3>
              </div>
              <div className="px-3 py-1 rounded-full bg-white/10 text-[#5EEADC] text-[10px] font-black tracking-[0.2em] uppercase">
                AI Powered
              </div>
            </div>
            
            <div className="space-y-8">
              <ComparisonItem
                title="Full Case Lifecycle"
                description="Track every stage: filing, inventory, property listing, and resolution automatically."
                isDark
              />
              <ComparisonItem
                title="Status Change Alerts"
                description="Know the moment a case moves closer to a sale—often months before anyone else."
                isDark
              />
              <ComparisonItem
                title="The 'Blue Ocean'"
                description="Reach heirs when they actually need help, not just because they showed up on a list."
                isDark
              />
              <ComparisonItem
                title="Verified Lead Scoring"
                description="Our AI ranks leads by motivation and equity so you only talk to the best deals."
                isDark
              />
            </div>

            <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5EEADC] to-[#A855F7] flex items-center justify-center text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-bold">Predictable Deal Flow</div>
                  <div className="text-gray-400 text-sm">Powered by real-time court syncing.</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

const ComparisonItem = ({ 
  title, 
  description, 
  isNegative = false,
  isDark = false 
}: { 
  title: string; 
  description: string; 
  isNegative?: boolean;
  isDark?: boolean;
}) => (
  <div className="flex items-start gap-4 group">
    <div className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${
      isNegative ? 'bg-red-50 text-red-500' : isDark ? 'bg-[#5EEADC]/20 text-[#5EEADC]' : 'bg-[#5EEADC]/10 text-[#2DD4BF]'
    }`}>
      {isNegative ? <XCircle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
    </div>
    <div>
      <h4 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h4>
      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm leading-relaxed`}>{description}</p>
    </div>
  </div>
);
