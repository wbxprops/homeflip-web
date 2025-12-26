'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Check, X, Target, Trophy, TrendingUp, Handshake } from 'lucide-react';

/* =============================================================================
   LEAD SOURCE TRAPS SECTION
   Educational resource comparing off-market property sources
   Tone: Informative, not dismissive - these are common sources with trade-offs
============================================================================= */

export const LeadSourceTraps = () => {
  return (
    <section className="py-24 px-6 bg-white" id="lead-sources">
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-slate-50 text-slate-500 text-sm font-bold mb-8 tracking-widest uppercase border border-slate-200"
          >
            KNOW YOUR OPTIONS
          </motion.div>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-900 mb-8 tracking-tight">
            How Do Most Investors <br />
            <span className="text-slate-400">Find Deals?</span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto">
            Every lead source has trade-offs. Here's an honest look at the most common ways
            investors find off-market properties, and what you should consider before diving in.
          </p>
        </motion.div>

        {/* =====================================================================
            1. PRE-FORECLOSURES
        ====================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 pb-24 border-b border-slate-200"
          id="pre-foreclosures"
        >
          <p className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-4">
            Lead Source #1
          </p>
          <h3 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-10">
            Pre-Foreclosures & Auctions
          </h3>

          <div className="space-y-6 text-xl sm:text-2xl text-slate-600 leading-relaxed mb-10">
            <p>
              Homeowners behind on payments can be motivated sellers, but the timing is tricky.
              Most are in denial until the last moment, and banks can approve loan modifications
              that kill your deal after weeks of work.
            </p>

            <p>
              Auctions attract institutional buyers with deep pockets, and redemption periods
              can delay closing for months depending on your state.
            </p>
          </div>

          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative bg-white/70 backdrop-blur-xl border border-emerald-200/50 rounded-3xl p-8 shadow-xl shadow-emerald-500/5 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-full blur-2xl -mr-10 -mt-10" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 uppercase tracking-wider">Advantages</h4>
                </div>
                <div className="space-y-4">
                  <ProConItem type="pro" text="Motivated sellers who need to act fast" />
                  <ProConItem type="pro" text="Public records make leads easy to find" />
                  <ProConItem type="pro" text="Potential for significant discounts" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative bg-white/70 backdrop-blur-xl border border-red-200/50 rounded-3xl p-8 shadow-xl shadow-red-500/5 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/20 to-transparent rounded-full blur-2xl -mr-10 -mt-10" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white shadow-lg shadow-red-500/30">
                    <X className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 uppercase tracking-wider">Disadvantages</h4>
                </div>
                <div className="space-y-4">
                  <ProConItem type="con" text="Most homeowners are in denial until the last moment" />
                  <ProConItem type="con" text="Banks can approve loan mods and kill your deal" />
                  <ProConItem type="con" text="Emotional, difficult conversations" />
                  <ProConItem type="con" text="Redemption periods can delay closing for months" />
                  <ProConItem type="con" text="Lists are often outdated" />
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>

        {/* =====================================================================
            2. WHOLESALERS
        ====================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 pb-24 border-b border-slate-200"
          id="wholesalers"
        >
          <p className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-4">
            Lead Source #2
          </p>
          <h3 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-10">
            Buying from Wholesalers
          </h3>

          <div className="space-y-6 text-xl sm:text-2xl text-slate-600 leading-relaxed mb-10">
            <p>
              Wholesalers do the legwork of finding deals and assign them to you for a fee.
              It's convenient, but assignment fees of $10K-$30K can eat into your margins quickly.
            </p>

            <p>
              You also have no direct relationship with the seller, which limits your negotiation leverage.
              And the best deals often go to their VIP buyers first.
            </p>
          </div>

          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative bg-white/70 backdrop-blur-xl border border-emerald-200/50 rounded-3xl p-8 shadow-xl shadow-emerald-500/5 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-full blur-2xl -mr-10 -mt-10" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 uppercase tracking-wider">Advantages</h4>
                </div>
                <div className="space-y-4">
                  <ProConItem type="pro" text="Someone else does the marketing and lead generation" />
                  <ProConItem type="pro" text="Deals are already under contract and ready to close" />
                  <ProConItem type="pro" text="Can scale quickly without building your own pipeline" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative bg-white/70 backdrop-blur-xl border border-red-200/50 rounded-3xl p-8 shadow-xl shadow-red-500/5 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/20 to-transparent rounded-full blur-2xl -mr-10 -mt-10" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white shadow-lg shadow-red-500/30">
                    <X className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 uppercase tracking-wider">Disadvantages</h4>
                </div>
                <div className="space-y-4">
                  <ProConItem type="con" text="Assignment fees of $10K-$30K eat your profit margin" />
                  <ProConItem type="con" text="No direct relationship with the seller" />
                  <ProConItem type="con" text="Best deals go to their VIP buyers first" />
                  <ProConItem type="con" text="ARVs and rehab estimates are often inflated" />
                  <ProConItem type="con" text="Zero control over your deal flow" />
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>

        {/* =====================================================================
            3. DRIVING FOR DOLLARS
        ====================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 pb-24 border-b border-slate-200"
          id="driving-for-dollars"
        >
          <p className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-4">
            Lead Source #3
          </p>
          <h3 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-10">
            Driving for Dollars
          </h3>

          <div className="space-y-6 text-xl sm:text-2xl text-slate-600 leading-relaxed mb-10">
            <p>
              Driving neighborhoods looking for distressed properties is a classic approach.
              It's low-cost to start, but the time investment is significant: hours of driving,
              plus skip tracing fees to find owner contact info.
            </p>

            <p>
              The challenge? A distressed-looking property doesn't always mean a motivated seller.
              Many owners aren't ready to sell, and results can be inconsistent month to month.
            </p>
          </div>

          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative bg-white/70 backdrop-blur-xl border border-emerald-200/50 rounded-3xl p-8 shadow-xl shadow-emerald-500/5 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-full blur-2xl -mr-10 -mt-10" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 uppercase tracking-wider">Advantages</h4>
                </div>
                <div className="space-y-4">
                  <ProConItem type="pro" text="Low startup cost: just gas and your time" />
                  <ProConItem type="pro" text="Builds deep local market knowledge" />
                  <ProConItem type="pro" text="Find properties others might miss" />
                  <ProConItem type="pro" text="Direct contact with property owners" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative bg-white/70 backdrop-blur-xl border border-red-200/50 rounded-3xl p-8 shadow-xl shadow-red-500/5 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/20 to-transparent rounded-full blur-2xl -mr-10 -mt-10" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white shadow-lg shadow-red-500/30">
                    <X className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 uppercase tracking-wider">Disadvantages</h4>
                </div>
                <div className="space-y-4">
                  <ProConItem type="con" text="Extremely time-intensive" />
                  <ProConItem type="con" text="Skip tracing fees add up quickly" />
                  <ProConItem type="con" text="Distressed property ≠ motivated seller" />
                  <ProConItem type="con" text="Inconsistent results month to month" />
                  <ProConItem type="con" text="Hard to scale beyond a side hustle" />
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>

        {/* =====================================================================
            4. MLS PROPERTIES
        ====================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 pb-24 border-b border-slate-200"
          id="mls-properties"
        >
          <p className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-4">
            Lead Source #4
          </p>
          <h3 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-10">
            MLS & Listed Properties
          </h3>

          <div className="space-y-6 text-xl sm:text-2xl text-slate-600 leading-relaxed mb-10">
            <p>
              The MLS gives you access to a large inventory of properties, and working with agents
              can streamline the transaction process. But by definition, these are on-market properties:
              every investor in your area sees the same listings.
            </p>

            <p>
              Bidding wars are common, and sellers typically expect close to asking price.
              Deep discounts are rare in today's market.
            </p>
          </div>

          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative bg-white/70 backdrop-blur-xl border border-emerald-200/50 rounded-3xl p-8 shadow-xl shadow-emerald-500/5 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-full blur-2xl -mr-10 -mt-10" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 uppercase tracking-wider">Advantages</h4>
                </div>
                <div className="space-y-4">
                  <ProConItem type="pro" text="Large inventory of available properties" />
                  <ProConItem type="pro" text="Professional agents streamline the transaction" />
                  <ProConItem type="pro" text="Clear pricing and property disclosures" />
                  <ProConItem type="pro" text="Financing-friendly and easy to get loans" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative bg-white/70 backdrop-blur-xl border border-red-200/50 rounded-3xl p-8 shadow-xl shadow-red-500/5 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/20 to-transparent rounded-full blur-2xl -mr-10 -mt-10" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white shadow-lg shadow-red-500/30">
                    <X className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 uppercase tracking-wider">Disadvantages</h4>
                </div>
                <div className="space-y-4">
                  <ProConItem type="con" text="Every investor sees the same listings" />
                  <ProConItem type="con" text="Bidding wars are common" />
                  <ProConItem type="con" text="Sellers expect close to asking price" />
                  <ProConItem type="con" text="Not truly off-market by definition" />
                  <ProConItem type="con" text="Deep discounts are rare" />
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>

        {/* =====================================================================
            PROBATE - THE ALTERNATIVE
        ====================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
          id="probate-investing"
        >
          <p className="text-sm font-black text-[#0891b2] uppercase tracking-[0.3em] mb-4">
            Another Option to Consider
          </p>
          <h3 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-10">
            Probate Properties
          </h3>

          <div className="space-y-6 text-xl sm:text-2xl text-slate-600 leading-relaxed mb-16">
            <p>
              When someone passes away, their estate often includes real property.
              The heirs (frequently out-of-state adult children) inherit a home they don't want to manage
              and often prefer a quick, simple sale over maximizing price.
            </p>

            <p>
              Most probate properties are owned free and clear, which means no underwater mortgages
              or short sale complications. And because many investors avoid probate (thinking it's too complex),
              there's often less competition.
            </p>
          </div>

          {/* Benefit Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
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
                title: "The Service Mindset",
                desc: "You're helping families solve a real problem during a difficult transition. They get a hassle-free sale, and you get a deal. It's a true win-win."
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-white/70 backdrop-blur-xl border border-[#0891b2]/20 rounded-3xl p-8 shadow-xl shadow-[#0891b2]/5 overflow-hidden group hover:border-[#0891b2]/40 transition-all"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#83d4c0]/20 to-transparent rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative">
                  <div className="text-[#0891b2] mb-6 p-3 bg-[#0891b2]/10 inline-block rounded-2xl group-hover:scale-110 group-hover:bg-[#0891b2] group-hover:text-white transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{benefit.title}</h4>
                  <p className="text-lg text-slate-600 leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-2xl sm:text-3xl font-bold text-[#0891b2] text-center mb-16">
            Consistent deal flow. High equity. Motivated sellers.
          </p>

          {/* Homeflip.ai Difference */}
          <div className="mt-16 p-8 sm:p-12 bg-gradient-to-br from-[#0891b2]/10 to-[#83d4c0]/10 border border-[#0891b2]/30 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#0891b2] flex items-center justify-center text-white">
                <Zap className="w-7 h-7" />
              </div>
              <h4 className="text-2xl sm:text-3xl font-black text-slate-900">The Homeflip.ai Approach</h4>
            </div>

            <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed mb-8">
              We track the entire lifecycle of each probate case so you know which estates
              are ready to sell <strong className="text-slate-900">right now</strong>,
              not just which ones were filed months ago.
            </p>

            <p className="text-2xl sm:text-3xl font-bold text-[#0891b2] mb-10">
              It's not about being first. It's about being on time.
            </p>

            <a
              href="/waitlist"
              className="btn-gradient inline-block px-12 py-6 rounded-2xl font-hero font-[900] text-4xl uppercase tracking-tighter shadow-xl shadow-[#83d4c0]/20 hover:scale-105 active:scale-95 transition-all"
            >
              Claim Your County
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

/* Helper component for pros/cons */
const ProConItem = ({ type, text }: { type: 'pro' | 'con'; text: string }) => (
  <div className="flex items-start gap-4">
    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
      type === 'pro' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-600'
    }`}>
      {type === 'pro' ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
    </div>
    <span className="text-xl text-slate-700 leading-relaxed">{text}</span>
  </div>
);
