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
    <section ref={containerRef} className="relative bg-white py-32 border-y border-slate-100 overflow-hidden">
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
        <motion.div style={{ x: xLeft, y: '75vh', opacity }} className="absolute text-slate-100"><Mail size={140} /></motion.div>
      </div>

      {/* Floating Icons - Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/4 pointer-events-none hidden xl:block">
        <motion.div style={{ x: xRight, y: '30vh', opacity }} className="absolute text-slate-100"><Key size={110} /></motion.div>
        <motion.div style={{ x: xRight, y: '60vh', opacity }} className="absolute text-slate-100"><ShieldCheck size={130} /></motion.div>
        <motion.div style={{ x: xRight, y: '90vh', opacity }} className="absolute text-slate-100"><Zap size={90} /></motion.div>
      </div>

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Letter Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-slate-400 font-serif text-2xl"
        >
          December 24, 2025
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-2xl leading-[1.6] text-slate-800 space-y-8"
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
            Listings are down 45% from pre-pandemic levels, and you're fighting tooth and nail for the scraps that do hit the market.
          </p>

          <p>
            You're competing against 50 other investors on every halfway-decent property.
          </p>

          <p>
            Hedge funds with billions in capital are outbidding you before you even get a chance to run your numbers.
          </p>

          <p>
            And wholesalers? They're charging $30,000+ in assignment fees for deals with zero margin.
          </p>

          <p>
            If you're an active investor doing 4-5 deals a year, that's $150,000 going into someone else's pocket instead of yours.
          </p>

          <p>
            Do the math on that over 5 years. Over 10 years.
          </p>

          <p>
            But here's what most investors don't realize...
          </p>

          <p className="font-bold text-slate-900 border-l-2 border-[#0891b2] pl-8 py-2">
            While you're fighting in the blood-red ocean against apex predators armed with billions, there's an entire untapped inventory of properties hiding in plain sight.
          </p>

          <p>
            Properties with insane margins that 95% of investors don't know exist.
          </p>

          <p>
            Properties where you might be the ONLY investor reaching out.
          </p>

          <p>
            No bidding wars. No wholesale fees. No competing against institutional capital.
          </p>

          <p>
            I'm talking about a proven, consistent source of off-market deals that's been working for smart investors for decades...
          </p>

          <p>
            But here's the problem: most investors who try to work this source do it completely wrong.
          </p>

          <p>
            They buy a list from one of those real estate CRMs advertised all over Facebook. Start making cold calls or blasting text messages that go straight to spam.
          </p>

          <p>
            Sound familiar?
          </p>

          <p className="font-bold text-slate-900">
            What if I told you there's a better way?
          </p>

          <p>
            A way to access fresh properties the moment they become available...
          </p>

          <p>
            To know EXACTLY when each seller is ready to have a conversation (not just when they show up on a list)...
          </p>

          <p>
            And to follow the exact system we've used for 15 years to buy tens of millions in properties ourselves, and that we're now releasing to investors for the first time?
          </p>

          <p>
            <span className="relative inline-block">
              <span className="relative z-10">That's exactly what we've built.</span>
              <span className="absolute inset-0 bg-gradient-to-b from-[#83d4c0]/40 to-transparent -rotate-1 translate-y-1 scale-x-105" />
            </span>
          </p>

          <p>
            But before I tell you how it works, you need to understand something critical about the source itself...
          </p>

          <p className="font-bold text-slate-900 pt-8">
            The Hidden Goldmine 95% of Investors Ignore
          </p>

          <p>
            When someone passes away, many properties go through something called probate.
          </p>

          <p>
            Probate is the legal process that kicks in when there's no clear will, the paperwork is a mess, or the court needs to sort out the estate.
          </p>

          <p>
            And here's what makes probate properties absolute goldmines for investors who know how to work them:
          </p>

          <div className="space-y-8">
            <div className="flex gap-6">
              <span className="text-[#83d4c0] font-bold flex-shrink-0">01</span>
              <p>
                <strong className="text-slate-900">The heirs don't want the property.</strong> They inherited a house they can't manage, don't need, and often live hundreds of miles away from. They value speed and certainty over top dollar.
              </p>
            </div>
            <div className="flex gap-6">
              <span className="text-[#83d4c0] font-bold flex-shrink-0">02</span>
              <p>
                <strong className="text-slate-900">You're not competing.</strong> While 50 investors are fighting over one foreclosure listing, you might be the only person offering a solution to a probate family. Less than 5% of investors work this niche correctly.
              </p>
            </div>
            <div className="flex gap-6">
              <span className="text-[#83d4c0] font-bold flex-shrink-0">03</span>
              <p>
                <strong className="text-slate-900">It's recession-proof.</strong> Courts file new probate cases every single week, year-round. It doesn't matter if interest rates are at 3% or 8%. People keep passing away, and their properties keep entering probate.
              </p>
            </div>
            <div className="flex gap-6">
              <span className="text-[#83d4c0] font-bold flex-shrink-0">04</span>
              <p>
                <strong className="text-slate-900">It's a service, not a scam.</strong> You're helping families solve a real problem during a difficult transition. They get a hassle-free sale, you get a deal. True win-win.
              </p>
            </div>
          </div>

          <p>
            The numbers don't lie: over 2.5 million people die in the US each year, and many owned real estate.
          </p>

          <p>
            Even in small counties, dozens of new probate cases are filed monthly.
          </p>

          <p className="font-bold text-slate-900">
            So why isn't everyone doing this?
          </p>

          <p>
            Because there's a right way and a wrong way.
          </p>

          <p>
            And most investors, even the ones who've heard about probate, are doing it the wrong way.
          </p>

          <div className="py-12 flex flex-col sm:flex-row items-center justify-center gap-8 border-y border-slate-50">
            <span className="font-hero font-[900] text-2xl sm:text-3xl text-slate-400 uppercase tracking-tighter italic">Ready to get started?</span>
            <Link 
              href="/waitlist"
              className="btn-gradient inline-block px-10 py-5 rounded-2xl font-hero font-[900] text-3xl uppercase tracking-tighter shadow-xl shadow-[#83d4c0]/20 hover:scale-105 active:scale-95 transition-all"
            >
              Claim Your County
            </Link>
          </div>

          <p className="font-bold text-slate-900 pt-8">
            Why Most Probate Strategies Fail (And How We Fixed It)
          </p>

          <p>
            Here's how the "gurus" tell you to do probate:
          </p>

          <div className="pl-8 space-y-4 font-bold text-slate-900">
            <div className="flex gap-4">
              <span>💀</span>
              <p>Buy a stale list of probate leads</p>
            </div>
            <div className="flex gap-4">
              <span>💀</span>
              <p>Cold call or blast texts to everyone on it</p>
            </div>
            <div className="flex gap-4">
              <span>💀</span>
              <p>Wait for the phone to ring (it won't)</p>
            </div>
          </div>

          <p className="font-bold text-slate-900 mt-12">
            Here's what they don't tell you:
          </p>

          <p>
            That list they sold you? It's the same list they sold to 100 other investors in your market.
          </p>

          <p>
            By the time you mail your letter, the heir has already gotten 47 other letters from investors who went through the same "guru" course.
          </p>

          <p>
            You're not calling them first. You're calling them 51st.
          </p>

          <p>
            Oh, and the do-not-call list? Good luck with that.
          </p>

          <p>
            And worse, you have no idea where the case actually stands. Did they just file yesterday? Did they already list the property with an agent two months ago? Is the case stalled indefinitely?
          </p>

          <p className="font-bold text-slate-900 italic underline decoration-[#0891b2]/30 underline-offset-8">
            You're flying blind.
          </p>

          <p>
            That's why we built something different.
          </p>

          <p className="font-bold text-slate-900 pt-8">
            Timeline Intelligence: The Unfair Advantage
          </p>

          <p>
            Most vendors sell you snapshots. A filing date and a name.
          </p>

          <p>
            We track the entire lifecycle of each probate case in real-time.
          </p>

          <p>
            Our AI monitors county court records 24/7. The moment a new case is filed with real estate assets, it hits your dashboard.
          </p>

          <p>
            But here's where it gets interesting...
          </p>

          <p>
            We don't just tell you a case was filed. We track EVERYTHING that happens next:
          </p>

          <div className="pl-8 space-y-4 font-bold text-slate-900">
            <div className="flex gap-4">
              <span>⚡</span>
              <p>When the inventory is submitted</p>
            </div>
            <div className="flex gap-4">
              <span>⚡</span>
              <p>When property addresses are revealed</p>
            </div>
            <div className="flex gap-4">
              <span>⚡</span>
              <p>When the case moves toward resolution</p>
            </div>
            <div className="flex gap-4">
              <span>⚡</span>
              <p>When it stalls out</p>
            </div>
            <div className="flex gap-4">
              <span>⚡</span>
              <p>When the property gets listed</p>
            </div>
          </div>

          <p>
            Your AI agent analyzes thousands of past cases in your county, predicting which properties will sell and when. Once it's set up, it's working for you around the clock.
          </p>

          <p className="font-bold text-slate-900 text-center py-4">
            We tell you exactly when to reach out.
          </p>

          <p>
            Not just "hey, someone filed a case." But "this case just moved to the next stage. NOW is the time to make contact."
          </p>

          <p>
            While other investors are mailing static lists at random times, you're reaching out at the exact moment when families are actively dealing with the property.
          </p>

          <p>
            That's the difference between being call #51... and being the ONLY call that matters.
          </p>

          <div className="py-12 flex flex-col sm:flex-row items-center justify-center gap-8 border-y border-slate-50">
            <span className="font-hero font-[900] text-2xl sm:text-3xl text-slate-400 uppercase tracking-tighter italic">Ready to get started?</span>
            <Link 
              href="/waitlist"
              className="btn-gradient inline-block px-10 py-5 rounded-2xl font-hero font-[900] text-3xl uppercase tracking-tighter shadow-xl shadow-[#83d4c0]/20 hover:scale-105 active:scale-95 transition-all"
            >
              Claim Your County
            </Link>
          </div>

          <p className="font-bold text-slate-900 pt-8">
            But Data Alone Isn't Enough
          </p>

          <p>
            Look, we could just give you the leads and send you on your way.
          </p>

          <p>
            But that would be like handing you a fighter jet without teaching you how to fly it.
          </p>

          <p>
            The leads are incredible. But knowing HOW to work them? That's where the real money is made.
          </p>

          <p>
            That's why we don't just give you probate leads.
          </p>

          <p className="font-bold text-slate-900">
            We give you the complete system:
          </p>

          <div className="space-y-4">
            <p><span className="text-[#83d4c0] font-bold">✓</span> <strong className="text-slate-900">Fresh leads delivered daily</strong> — No courthouse visits, no manual searching</p>
            <p><span className="text-[#83d4c0] font-bold">✓</span> <strong className="text-slate-900">Timeline tracking</strong> — Know exactly where each case stands and when to reach out</p>
            <p><span className="text-[#83d4c0] font-bold">✓</span> <strong className="text-slate-900">Proven outreach workflows</strong> — Step-by-step guidance designed specifically for probate</p>
            <p><span className="text-[#83d4c0] font-bold">✓</span> <strong className="text-slate-900">Coaching and support</strong> — Learn from investors who've closed hundreds of probate deals</p>
            <p><span className="text-[#83d4c0] font-bold">✓</span> <strong className="text-slate-900">All-in-one platform</strong> — Manage contacts, track follow-ups, never lose a lead</p>
          </div>

          <p>
            This is more than a CRM. More than just data.
          </p>

          <p className="font-bold text-slate-900 italic">
            This is a complete probate system designed to help you close deals.
          </p>

          <p className="font-bold text-slate-900 pt-8">
            What This Means For Your Business
          </p>

          <p>
            Imagine waking up to fresh probate leads in your dashboard every single morning.
          </p>

          <p>
            Leads that other investors in your market don't have access to.
          </p>

          <p>
            Leads with timeline intelligence that tells you EXACTLY when to reach out.
          </p>

          <p>
            And a proven system that shows you exactly what to say, how to follow up, and how to close the deal.
          </p>

          <p>
            No more fighting over the same stale lists as everyone else.
          </p>

          <p>
            No more paying $30,000 wholesale fees.
          </p>

          <p>
            No more wondering where your next deal is coming from.
          </p>

          <p>
            Just a consistent, predictable pipeline of off-market properties.
          </p>

          <p className="font-bold text-slate-900">
            That's what real financial freedom looks like.
          </p>

          <p>
            The ability to control your own deal flow. To build generational wealth on YOUR terms. To finally get off the hamster wheel of chasing deals and start building a real business.
          </p>

          <p className="font-bold text-slate-900 pt-8">
            This Is Your Moment
          </p>

          <p>
            Right now, while most investors are paralyzed by the inventory crisis...
          </p>

          <p>
            While others are fighting over scraps on the MLS...
          </p>

          <p>
            While the rest are paying ridiculous wholesale fees just to get a shot at a deal...
          </p>

          <p className="font-bold text-slate-900">
            You can be building a predictable pipeline of off-market probate properties.
          </p>

          <p>
            But here's the thing: we're in private beta, and we're limiting it to less than five investors per county.
          </p>

          <p>
            We keep it this tight to ensure everyone gets real results.
          </p>

          <p>
            So if you're serious about taking control of your deal flow...
          </p>

          <p>
            If you're ready to stop competing and start dominating...
          </p>

          <p>
            If you want to build real wealth through real estate...
          </p>

          <p className="font-bold text-slate-900 mb-12">
            Join the beta before your county fills up.
          </p>

          <div className="mt-16 text-center">
            <Link 
              href="/waitlist"
              className="btn-gradient inline-block px-14 py-8 rounded-[2rem] font-hero font-[900] text-6xl shadow-2xl shadow-[#83d4c0]/30 hover:scale-105 active:scale-95 transition-all uppercase tracking-tighter"
            >
              Claim Your County
            </Link>
            <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] mt-8">
              Private Beta Access • Limited Markets Available
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
