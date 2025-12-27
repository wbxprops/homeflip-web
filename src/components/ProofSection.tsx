'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Placeholder deal data - replace with real deals later
const deals = [
  {
    id: 1,
    location: 'Hamilton County, OH',
    purchasePrice: 45000,
    soldPrice: 127000,
    profit: 82000,
    arvPercent: 35,
    daysToClose: 28,
    propertyType: 'Single Family',
    bedsBaths: '3 bed / 2 bath',
    sqft: 1450,
  },
  {
    id: 2,
    location: 'Butler County, OH',
    purchasePrice: 62000,
    soldPrice: 189000,
    profit: 127000,
    arvPercent: 33,
    daysToClose: 42,
    propertyType: 'Single Family',
    bedsBaths: '4 bed / 2.5 bath',
    sqft: 2100,
  },
  {
    id: 3,
    location: 'Clermont County, OH',
    purchasePrice: 38000,
    soldPrice: 98000,
    profit: 60000,
    arvPercent: 39,
    daysToClose: 21,
    propertyType: 'Single Family',
    bedsBaths: '2 bed / 1 bath',
    sqft: 1100,
  },
];

const formatCurrency = (num: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(num);

export const ProofSection = () => {
  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-white/5 text-slate-400 text-sm font-bold mb-8 tracking-widest uppercase border border-white/10"
          >
            REAL RESULTS
          </motion.div>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
            Deals We've Closed <br />
            <span className="text-slate-500">Using Probate Intelligence.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            These are actual properties sourced through our probate lead system.
            The numbers speak for themselves.
          </p>
        </motion.div>

        {/* Aggregate Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-black text-white mb-1">47</div>
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Deals Closed</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-black text-[#83d4c0] mb-1">36%</div>
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Avg. ARV</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-black text-white mb-1">$2.1M</div>
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Total Profit</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-black text-white mb-1">31</div>
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Avg. Days to Close</div>
          </div>
        </motion.div>

        {/* Deal Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:border-[#83d4c0]/30 transition-all duration-500"
            >
              {/* Property Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-slate-600 text-sm font-bold">Property Photo</div>
                </div>
                {/* ARV Badge */}
                <div className="absolute top-4 left-4 bg-[#83d4c0] text-[#0a1421] px-3 py-1 rounded-full text-xs font-black">
                  {deal.arvPercent}% ARV
                </div>
                {/* Profit Badge */}
                <div className="absolute top-4 right-4 bg-white/90 text-slate-900 px-3 py-1 rounded-full text-xs font-black">
                  +{formatCurrency(deal.profit)}
                </div>
              </div>

              {/* Deal Info */}
              <div className="p-6">
                <div className="text-[10px] font-black text-[#83d4c0] uppercase tracking-widest mb-2">
                  {deal.location}
                </div>
                <div className="text-sm text-slate-400 mb-4">
                  {deal.propertyType} · {deal.bedsBaths} · {deal.sqft.toLocaleString()} sqft
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500 uppercase tracking-wider">Purchased</span>
                    <span className="text-lg font-black text-white">{formatCurrency(deal.purchasePrice)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500 uppercase tracking-wider">Sold For</span>
                    <span className="text-lg font-black text-[#83d4c0]">{formatCurrency(deal.soldPrice)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-white/5">
                    <span className="text-xs text-slate-500 uppercase tracking-wider">Days to Close</span>
                    <span className="text-sm font-bold text-slate-400">{deal.daysToClose} days</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 text-lg mb-6">
            Ready to find deals like these in your market?
          </p>
          <a
            href="/claim-your-county"
            className="btn-gradient inline-block px-10 py-5 rounded-full text-lg font-black uppercase tracking-widest"
          >
            Claim Your County
          </a>
        </motion.div>
      </div>
    </section>
  );
};
