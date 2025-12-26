'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Home, Key, TrendingUp, ShieldCheck, Mail, Zap } from 'lucide-react';

export const LetterSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -500]);

  const xLeft = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 50, -100]);
  const xRight = useTransform(scrollYProgress, [0, 0.5, 1], [100, -50, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative bg-white py-16 sm:py-24 md:py-32 border-y border-slate-100 overflow-hidden">
      {/* Background Decor - Floating Blobs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 -left-64 w-[800px] h-[800px] bg-[#83d4c0]/5 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/2 -right-64 w-[700px] h-[700px] bg-[#0891b2]/5 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-0 -left-64 w-[600px] h-[600px] bg-[#83d4c0]/5 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Floating Icons - Left Side */}
      <div className="absolute left-0 top-0 bottom-0 w-1/4 pointer-events-none hidden xl:block">
        <motion.div style={{ x: xLeft, y: '15vh', opacity }} className="absolute text-slate-100"><Home size={120} /></motion.div>
        <motion.div style={{ x: xLeft, y: '45vh', opacity }} className="absolute text-slate-100"><TrendingUp size={100} /></motion.div>
      </div>

      {/* Floating Icons - Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/4 pointer-events-none hidden xl:block">
        <motion.div style={{ x: xRight, y: '30vh', opacity }} className="absolute text-slate-100"><Key size={110} /></motion.div>
        <motion.div style={{ x: xRight, y: '60vh', opacity }} className="absolute text-slate-100"><ShieldCheck size={130} /></motion.div>
      </div>

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Letter Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 text-slate-400 font-serif text-lg sm:text-xl md:text-2xl"
        >
          December 24, 2025
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-lg sm:text-xl md:text-2xl leading-[1.6] text-slate-800 space-y-6 sm:space-y-8"
        >
          <p className="font-bold text-slate-900">
            Dear Real Estate Investor,
          </p>

          <p className="text-slate-900">
            <span className="relative inline-block">
              <span className="relative z-10">The inventory crisis is real.</span>
              <span className="absolute inset-0 bg-gradient-to-b from-[#83d4c0]/40 to-transparent -rotate-1 translate-y-1 scale-x-105" />
            </span>
          </p>

          <p>
            Listings are down 45% from pre-pandemic levels. You're competing against 50 other investors on every halfway-decent property. Hedge funds are outbidding you before you can run your numbers.
          </p>

          <p>
            And wholesalers? They're charging $30,000+ in assignment fees for deals with zero margin. If you're doing 4-5 deals a year, that's $150,000 going into someone else's pocket instead of yours.
          </p>

          <p>
            But here's what most investors don't realize...
          </p>

          <p className="font-bold text-slate-900 border-l-2 border-[#0891b2] pl-4 sm:pl-8 py-2">
            While you're fighting in the blood-red ocean against apex predators armed with billions, there's an entire untapped inventory of properties hiding in plain sight.
          </p>

          <p>
            Properties with insane margins that 95% of investors don't know exist. Properties where you might be the ONLY investor reaching out. No bidding wars. No wholesale fees. No competing against institutional capital.
          </p>

          <p className="font-bold text-slate-900 pt-4">
            The Hidden Goldmine 95% of Investors Ignore
          </p>

          <p>
            When someone passes away, their properties often go through probate. And here's what makes these properties absolute goldmines:
          </p>

          <div className="space-y-6">
            <div className="flex gap-6">
              <span className="text-[#83d4c0] font-bold flex-shrink-0">01</span>
              <p>
                <strong className="text-slate-900">The heirs don't want the property.</strong> They inherited a house they can't manage, don't need, and often live hundreds of miles away from. They value speed over top dollar.
              </p>
            </div>
            <div className="flex gap-6">
              <span className="text-[#83d4c0] font-bold flex-shrink-0">02</span>
              <p>
                <strong className="text-slate-900">You're not competing.</strong> While 50 investors fight over one foreclosure, you might be the only person offering a solution to a probate family.
              </p>
            </div>
            <div className="flex gap-6">
              <span className="text-[#83d4c0] font-bold flex-shrink-0">03</span>
              <p>
                <strong className="text-slate-900">It's recession-proof.</strong> Courts file new probate cases every week, year-round. It doesn't matter if rates are 3% or 8%.
              </p>
            </div>
            <div className="flex gap-6">
              <span className="text-[#83d4c0] font-bold flex-shrink-0">04</span>
              <p>
                <strong className="text-slate-900">It's a service, not a scam.</strong> You're helping families solve a real problem. They get a hassle-free sale, you get a deal. True win-win.
              </p>
            </div>
          </div>

          <p className="font-bold text-slate-900 pt-4">
            So why isn't everyone doing this?
          </p>

          <p>
            Because the leads are hard to find, the timing is tricky, and there's a right way and a wrong way to approach families. Most investors who try probate do it completely wrong.
          </p>

          <p>
            <span className="relative inline-block">
              <span className="relative z-10">That's exactly why we built Homeflip.ai.</span>
              <span className="absolute inset-0 bg-gradient-to-b from-[#83d4c0]/40 to-transparent -rotate-1 translate-y-1 scale-x-105" />
            </span>
          </p>

          <p>
            Our team has been working probate for 15 years. This is the same platform we use for our own real estate business, and now we're making it available for the first time.
          </p>

          <p className="font-bold text-slate-900 pt-4">
            This Is Your Moment
          </p>

          <p>
            Right now, while most investors are paralyzed by the inventory crisis, fighting over scraps on the MLS, or paying ridiculous wholesale fees just to get a shot at a deal...
          </p>

          <p className="font-bold text-slate-900">
            You can be building a predictable pipeline of off-market probate properties.
          </p>

          <p>
            We're in private beta, and we're limiting it to less than five investors per county to ensure everyone gets real results.
          </p>

          <p>
            So if you're serious about taking control of your deal flow and building real wealth through real estate...
          </p>

          <p className="font-bold text-slate-900">
            Join the beta before your county fills up.
          </p>

          <div className="mt-8 sm:mt-12 text-center">
            <Link
              href="/waitlist"
              className="btn-gradient inline-block px-8 sm:px-12 py-5 sm:py-7 rounded-2xl sm:rounded-[2rem] font-hero font-[900] text-3xl sm:text-4xl md:text-5xl shadow-2xl shadow-[#83d4c0]/30 hover:scale-105 active:scale-95 transition-all uppercase tracking-tighter"
            >
              Claim Your County
            </Link>
            <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] mt-6 sm:mt-8">
              Private Beta Access • Limited Markets Available
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
