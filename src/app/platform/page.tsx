'use client';

import React, { useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  CheckCircle2, Lock, Clock, Bell, FileText,
  Brain, Users, Shield, ArrowRight, ArrowDown,
  Target, TrendingUp, Gauge, Building, Scale,
  Sparkles, Send, BookOpen, Play
} from 'lucide-react';
import Link from 'next/link';

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Section 01: Hero + Authority Block */}
        <HeroSection />
        <AuthorityBlock />

        {/* Section 02: THE AUTOMATION TRAP */}
        <AutomationTrapSection />

        {/* Section 03: TIMELINE INTELLIGENCE™ */}
        <TimelineIntelligenceSection />

        {/* Section 04: PB SCORECARD (PB-01 → PB-03 → PB-00) */}
        <PBScoreSection />

        {/* Section 05: HOW HOMEFLIP.AI WORKS (END-TO-END) */}
        <HowItWorksSection />

        {/* Section 06: MORE THAN A CRM */}
        <MoreThanCRMSection />

        {/* Section 07: LIVE INVENTORY TERMINAL */}
        <CountyTerminalSection />

        {/* Section 08: FOUNDER ACCESS */}
        <FounderAccessSection />

        {/* Section 09: DEMO GALLERY */}
        <DemoGallerySection />

        {/* Section 10: FOUNDER-LED AUTHORITY */}
        <ProofSection />

        {/* Section 11: FINAL CTA */}
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

/* =============================================================================
   SECTION 01: HERO - "The Automated Probate Playbook"
   ============================================================================= */

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-[#050505] overflow-hidden"
    >
      {/* Background gradient blurs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#83d4c0]/20 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#0891b2]/15 rounded-full blur-[140px] pointer-events-none"
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#83d4c0 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-block px-4 py-2 rounded-full bg-white/5 text-[#83d4c0] text-sm font-bold mb-8 tracking-[0.2em] uppercase border border-white/10"
          >
            For Professional Investors
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]"
          >
            The Automated Probate Playbook
            <br />
            <span className="bg-gradient-to-r from-[#83d4c0] to-[#0891b2] bg-clip-text text-transparent">
              Built for Judgment.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed"
          >
            The only system that turns 20 years of probate expertise into a guided
            &quot;Next-Action&quot; dashboard. Stop scaling activity and start scaling results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col items-center lg:items-start gap-4"
          >
            <Link
              href="/claim-your-county"
              className="btn-gradient inline-block px-12 sm:px-16 py-5 sm:py-6 rounded-2xl font-hero font-[900] text-2xl sm:text-3xl md:text-4xl uppercase tracking-tighter shadow-2xl shadow-[#83d4c0]/20 hover:scale-105 active:scale-95 transition-all animate-pulse-glow"
            >
              Claim Your County
            </Link>
            <p className="text-xs text-white/40 font-bold tracking-[0.2em] uppercase">
              Early Access &bull; Founder Pricing &bull; Limited Markets
            </p>
          </motion.div>
        </div>

        {/* Right Side - Case Card Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:flex justify-center lg:justify-end"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 w-[320px] shadow-2xl">
            {/* Case Card Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-black">
                PB-03
              </span>
              <span className="text-white/50 text-xs">Hamilton County, OH</span>
            </div>

            {/* Property Info */}
            <div className="mb-4">
              <div className="text-white font-bold text-lg mb-1">1847 Elm Street</div>
              <div className="text-white/60 text-sm">Cincinnati, OH 45202</div>
            </div>

            {/* Equity Badge */}
            <div className="bg-white/5 rounded-lg p-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">Est. Equity</span>
                <span className="text-emerald-400 font-bold">$127,000</span>
              </div>
            </div>

            {/* Playbook Action */}
            <div className="bg-[#0891b2]/20 rounded-lg p-4 border border-[#0891b2]/30">
              <div className="text-[#83d4c0] text-xs font-bold uppercase tracking-wider mb-2">
                Playbook Action
              </div>
              <div className="text-white font-medium text-sm">
                Send &quot;Inventory Filed&quot; Letter
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#83d4c0]/30 to-transparent" />
    </section>
  );
}

/* =============================================================================
   AUTHORITY BLOCK - Immediately below Hero
   ============================================================================= */

function AuthorityBlock() {
  return (
    <div className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-[#0891b2]/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-[#83d4c0]" />
            </div>
            <span className="text-white/80 text-sm">
              Logic trained on <strong className="text-white">$50M+</strong> in transactions
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-[#0891b2]/20 flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#83d4c0]" />
            </div>
            <span className="text-white/80 text-sm">
              Built by <strong className="text-white">investors</strong>, not developers
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* =============================================================================
   SECTION 02: THE AUTOMATION TRAP
   ============================================================================= */

function AutomationTrapSection() {
  return (
    <Section id="automation-trap" className="bg-[#fcfcfc] overflow-hidden py-24 md:py-32">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Side: The Trap */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-red-50 text-red-600 text-sm font-bold tracking-widest uppercase border border-red-100">
            The Automation Trap
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Automation scales activity,
            <br />
            <span className="text-slate-400">not judgment.</span>
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Most probate tools focus on volume. They help you send more mail, make more calls, and blast more texts.
            </p>
            <p className="font-medium text-slate-900">
              In probate, mass outreach is a liability.
            </p>
            <p>
              These families aren&apos;t &quot;records&quot; in a database. They are heirs navigating grief, legal complexity, and property decisions. When you lead with automation, you lead with insensitivity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {[
              { title: 'Probate is emotional', desc: 'Families value empathy over speed.' },
              { title: 'Sellers aren\'t records', desc: 'Every case has a unique human timeline.' },
              { title: 'Mass outreach kills trust', desc: 'One wrong message can burn a deal forever.' },
              { title: 'Timing beats speed', desc: 'Being first matters less than being on time.' },
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                <div className="text-slate-900 font-bold text-sm mb-1">{item.title}</div>
                <div className="text-slate-500 text-xs">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Visual Contrast */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-800 relative overflow-hidden">
            {/* Chaotic Automation Side */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-red-500/5 blur-3xl pointer-events-none" />
            
            <div className="relative space-y-6">
              <div className="flex items-center gap-3 text-red-400 font-mono text-xs tracking-widest uppercase">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Legacy Automation Flow
              </div>
              
              <div className="space-y-3 opacity-40">
                <div className="h-12 bg-white/5 rounded-lg border border-white/10 flex items-center px-4 gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="h-2 w-32 bg-white/20 rounded" />
                </div>
                <div className="h-12 bg-white/5 rounded-lg border border-white/10 flex items-center px-4 gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="h-2 w-48 bg-white/20 rounded" />
                </div>
                <div className="h-12 bg-white/5 rounded-lg border border-white/10 flex items-center px-4 gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="h-2 w-24 bg-white/20 rounded" />
                </div>
              </div>

              <div className="pt-8 flex items-center gap-3 text-emerald-400 font-mono text-xs tracking-widest uppercase">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                Homeflip Intelligence Layer
              </div>
              
              <div className="bg-white/5 rounded-2xl p-6 border border-emerald-500/30 shadow-lg shadow-emerald-500/5">
                <div className="flex items-center justify-between mb-4">
                  <div className="px-3 py-1 rounded bg-emerald-500 text-white text-[10px] font-black tracking-tighter uppercase">
                    Decision: Hold
                  </div>
                  <div className="text-white/40 text-[10px] font-mono">ID: 089-HAM</div>
                </div>
                <div className="text-white font-medium text-sm mb-2">Wait for Inventory Filing</div>
                <div className="text-white/60 text-xs leading-relaxed">
                  &quot;Family is currently in the initial 30-day grieving window. Early outreach will trigger high resistance.&quot;
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtle label */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg border border-slate-100 text-slate-500 text-xs font-bold whitespace-nowrap">
            Intelligence &gt; Automation
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* =============================================================================
   SECTION 03: TIMELINE INTELLIGENCE™
   ============================================================================= */

function TimelineIntelligenceSection() {
  const stages = [
    { id: 'PB-01', label: 'Filing', desc: 'Case opens. Family is processing grief. Decisions are months away.', status: 'Nurture' },
    { id: 'PB-02', label: 'Discovery', desc: 'Assets identified. Inventory filed. Family working legalities.', status: 'Remove Barriers' },
    { id: 'PB-03', label: 'Resolution', desc: 'Court approval pending or granted. Family actively seeking solutions.', status: 'Act Decisively' },
    { id: 'PB-00', label: 'Stalled', desc: 'Case delayed or status unclear. Monitoring for reactivation.', status: 'Monitor' },
  ];

  return (
    <Section id="timeline-intelligence" className="bg-slate-950 py-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent opacity-50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-white/5 text-emerald-400 text-sm font-bold tracking-widest uppercase border border-white/10 mb-8"
          >
            Introducing
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
            Timeline
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Intelligence™</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Built from real conversations over two decades, aligning your outreach with seller readiness.
          </p>
        </div>

        {/* The Timeline Visual */}
        <div className="relative pt-12 pb-24">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-slate-800 via-emerald-500/50 to-slate-800 -translate-y-1/2 hidden md:block" />
          
          <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center group"
              >
                {/* Node */}
                <div className="relative mb-8 md:mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border-2 border-slate-800 flex items-center justify-center mx-auto relative z-10 transition-all duration-500 group-hover:border-emerald-500/50 group-hover:scale-110 shadow-xl">
                    <span className="text-white font-black">{stage.id}</span>
                  </div>
                  {/* Vertical connector for mobile */}
                  {i < stages.length - 1 && (
                    <div className="md:hidden absolute top-16 left-1/2 w-px h-8 bg-slate-800 -translate-x-1/2" />
                  )}
                </div>

                <div className="space-y-4 px-4">
                  <h3 className="text-white font-bold text-lg tracking-tight">{stage.label}</h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
                    {stage.status}
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed max-w-[200px] mx-auto">
                    {stage.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-white/40 font-mono text-xs tracking-[0.3em] uppercase">
            Each stage demands different action
          </p>
        </div>
      </div>
    </Section>
  );
}

/* =============================================================================
   SECTION 04: PB SCORECARD (PB-01 → PB-03 → PB-00)
   ============================================================================= */

function PBScoreSection() {
  const pbStages = [
    { 
      code: 'PB-01', 
      name: 'Early Filing', 
      action: 'Nurture & Patience', 
      guidance: 'Timing unclear, nurture phase. Hold. Seller timing is still developing.',
      color: '#64748b' 
    },
    { 
      code: 'PB-02', 
      name: 'Mid-Process', 
      action: 'Remove Barriers', 
      guidance: 'Decision made, barriers exist. Readiness increasing. Continue light follow-up.',
      color: '#38bdf8' 
    },
    { 
      code: 'PB-03', 
      name: 'Ready to Sell', 
      action: 'Act Decisively', 
      guidance: 'Action window open. Act now. Alignment achieved.',
      color: '#22c55e' 
    },
    { 
      code: 'PB-00', 
      name: 'Monitoring', 
      action: 'Watch & Wait', 
      guidance: 'Not for sale / cold. No action recommended. Monitor case status.',
      color: '#94a3b8' 
    },
  ];

  return (
    <Section id="pb-score" className="bg-[#fcfcfc] overflow-hidden py-24">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 rounded-full bg-slate-50 text-slate-500 text-sm font-bold mb-6 tracking-[0.2em] uppercase border border-slate-200"
        >
          The PB Scorecard
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight"
        >
          Different Stages,
          <br />
          <span className="text-slate-400">Different Actions.</span>
        </motion.h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Timeline Intelligence ensures the right action at the right moment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pbStages.map((stage, i) => (
          <motion.div
            key={stage.code}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col h-full"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform"
              style={{ backgroundColor: stage.color }}
            >
              <span className="text-lg font-black">{stage.code}</span>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-2">{stage.name}</h3>
            <div className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-4">
              Strategy: {stage.action}
            </div>
            
            <div className="mt-auto pt-6 border-t border-slate-50 italic text-slate-500 text-sm leading-relaxed">
              &quot;{stage.guidance}&quot;
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* =============================================================================
   SECTION 05: HOW HOMEFLIP.AI WORKS (END-TO-END)
   ============================================================================= */

function HowItWorksSection() {
  const steps = [
    {
      title: 'Probate Ingestion',
      desc: 'Our engine monitors 3,000+ county portals daily. We don\'t just scrape names; we ingest case numbers, fiduciary roles, and filing types.',
      icon: <Building className="w-6 h-6" />,
      detail: 'Daily Court Sync'
    },
    {
      title: 'Timeline Scoring',
      desc: 'AI analyzes thousands of data points—filing velocity, inventory submission, and equity ratios—to assign a precise PB Score.',
      icon: <Brain className="w-6 h-6" />,
      detail: 'Judgment Engine'
    },
    {
      title: 'Guided Actions',
      desc: 'The platform identifies the exact &quot;Action Window&quot; for each case and provides the corresponding playbook and script.',
      icon: <Target className="w-6 h-6" />,
      detail: 'Playbook Activation'
    },
    {
      title: 'Outcome Learning',
      desc: 'Every closed deal feeds back into the system, refining the algorithm for your specific market over time.',
      icon: <TrendingUp className="w-6 h-6" />,
      detail: 'Market Intelligence'
    }
  ];

  return (
    <Section id="how-it-works" className="bg-white py-32 overflow-hidden">
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 rounded-full bg-slate-50 text-slate-500 text-sm font-bold tracking-widest uppercase border border-slate-200 mb-8"
        >
          The Closed-Loop System
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-8">
          Built to
          <span className="text-slate-400"> Think</span>
        </h2>
        <p className="text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed">
          The platform learns and adapts. Every outcome makes your market intelligence sharper.
        </p>
      </div>

      <div className="relative">
        {/* Connector Line (Desktop) */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -translate-y-1/2 hidden lg:block" />

        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 relative z-10 h-full group hover:border-[#83d4c0]/50 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#0891b2] mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div className="text-[#0891b2] text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">
                Step {i + 1}: {step.detail}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* =============================================================================
   SECTION 06: MORE THAN A CRM
   ============================================================================= */

function MoreThanCRMSection() {
  return (
    <Section id="more-than-crm" className="bg-slate-950 py-32 overflow-hidden relative">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        {/* Left: Content */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-1 rounded-full bg-white/5 text-[#83d4c0] text-sm font-bold tracking-widest uppercase border border-white/10">
            Category Reframing
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1]">
            CRMs Store History.
            <br />
            <span className="text-white/40 italic">We Drive Decisions.</span>
          </h2>
          <div className="space-y-6 text-lg text-white/60 leading-relaxed">
            <p>
              A CRM is a database with a UI. It&apos;s designed to store what happened in the past. It doesn&apos;t care about your ROI or the seller&apos;s readiness.
            </p>
            <p className="text-[#83d4c0] font-medium">
              Homeflip.ai is the intelligence layer that sits above your execution.
            </p>
            <p>
              We don&apos;t just manage your contacts; we provide the judgment required to know which contacts to ignore and which ones to engage with right now.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2 text-white/40 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#83d4c0]" />
              No Manual Data Entry
            </div>
            <div className="flex items-center gap-2 text-white/40 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#83d4c0]" />
              Automated Case Monitoring
            </div>
            <div className="flex items-center gap-2 text-white/40 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#83d4c0]" />
              Strategy-Led Playbooks
            </div>
          </div>
        </div>

        {/* Right: Comparative Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-1 border border-white/10">
            <div className="bg-slate-900 rounded-[2.4rem] overflow-hidden">
              {/* Header */}
              <div className="bg-slate-800/50 p-6 border-b border-white/5 flex items-center justify-between">
                <div className="text-white font-bold tracking-tight">System Architecture</div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20" />
                </div>
              </div>

              {/* Layers */}
              <div className="p-8 space-y-4">
                {/* Intelligence Layer */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-[#0891b2] to-[#83d4c0] p-6 rounded-2xl shadow-lg shadow-[#0891b2]/20 border border-white/20"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-black uppercase text-xs tracking-widest">Intelligence Layer</span>
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {['Scoring', 'Playbooks', 'Learning'].map(tag => (
                      <div key={tag} className="bg-white/20 rounded-md py-1.5 text-center text-[10px] text-white font-bold">
                        {tag}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Connector */}
                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-white/10" />
                </div>

                {/* Execution Layer */}
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 opacity-60">
                  <div className="flex items-center justify-between mb-3 text-white/60">
                    <span className="font-black uppercase text-xs tracking-widest">Execution Layer</span>
                    <Gauge className="w-5 h-5" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {['CRM', 'Mail', 'Calls'].map(tag => (
                      <div key={tag} className="bg-white/10 rounded-md py-1.5 text-center text-[10px] text-white/40 font-bold">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* =============================================================================
   SECTION 07: LIVE INVENTORY TERMINAL
   ============================================================================= */

function CountyTerminalSection() {
  return (
    <Section id="county-terminal" className="bg-white overflow-hidden">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 rounded-full bg-slate-50 text-slate-500 text-sm font-bold mb-6 tracking-[0.2em] uppercase border border-slate-200"
        >
          Limited Access
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight"
        >
          County Inventory
          <br />
          <span className="text-slate-400">Status</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
        >
          Signal degrades with competition. That&apos;s why we cap access at <strong className="text-slate-900">&lt;5 investors per county</strong>.
        </motion.p>
      </div>

      {/* Terminal Style Display */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-12"
      >
        <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
          {/* Terminal Header */}
          <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-slate-400 text-sm font-mono">inventory_status.sh</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm space-y-4">
            <div className="text-slate-500">$ check_availability --county &quot;Butler County, OH&quot;</div>

            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <div className="text-emerald-400 mb-2">STATUS: BUTLER COUNTY, OH</div>
              <div className="text-white mb-2">INVENTORY: <span className="text-amber-400">3 OF 5</span> SLOTS REMAINING</div>
              <div className="text-slate-400 text-xs mt-3 pt-3 border-t border-slate-700">
                <span className="text-amber-400">ALERT:</span> Founder Pricing locks in for the next 2 members only.
              </div>
            </div>

            <div className="text-slate-500">$ _<span className="animate-pulse">|</span></div>
          </div>
        </div>
      </motion.div>

      {/* Sample Counties Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {[
          { name: 'Hamilton, OH', slots: '5/5', status: 'LOCKED' },
          { name: 'Butler, OH', slots: '3/5', status: 'FILLING' },
          { name: 'Warren, OH', slots: '1/5', status: 'OPEN' },
          { name: 'Your County', slots: '?/?', status: 'CHECK' },
        ].map((county, i) => (
          <motion.div
            key={county.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`p-4 rounded-xl border ${
              county.status === 'LOCKED'
                ? 'bg-slate-100 border-slate-200'
                : county.status === 'CHECK'
                ? 'bg-gradient-to-br from-[#0891b2]/5 to-[#83d4c0]/5 border-[#0891b2]/30'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-900 text-sm">{county.name}</span>
              {county.status === 'LOCKED' && <Lock className="w-4 h-4 text-slate-400" />}
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">{county.slots} spots</span>
              <span className={`font-bold ${
                county.status === 'LOCKED' ? 'text-slate-400'
                : county.status === 'FILLING' ? 'text-amber-500'
                : county.status === 'CHECK' ? 'text-[#0891b2]'
                : 'text-emerald-500'
              }`}>
                {county.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link
          href="/claim-your-county"
          className="btn-gradient inline-block px-12 py-5 rounded-2xl font-hero font-[900] text-2xl sm:text-3xl uppercase tracking-tighter shadow-2xl shadow-[#83d4c0]/20 hover:scale-105 active:scale-95 transition-all"
        >
          Check Your County
        </Link>
      </motion.div>
    </Section>
  );
}

/* =============================================================================
   SECTION 08: FOUNDER ACCESS
   ============================================================================= */

function FounderAccessSection() {
  const benefits = [
    'Locked-in founder pricing for life',
    'Direct influence on feature development',
    'Priority support and onboarding',
    'Early access to new markets',
    'Founding member recognition'
  ];

  return (
    <Section id="founder-access" className="bg-slate-50/70 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-white text-[#0891b2] text-sm font-bold mb-6 tracking-[0.2em] uppercase border border-slate-200"
          >
            Limited Opportunity
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Beta Founder
            <br />
            <span className="bg-gradient-to-r from-[#0891b2] to-[#83d4c0] bg-clip-text text-transparent">
              Access
            </span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#83d4c0]/10 to-transparent rounded-full blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Badge */}
            <div className="flex justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 w-40 h-40 border-2 border-dashed border-[#83d4c0]/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#0891b2] to-[#83d4c0] flex flex-col items-center justify-center text-white shadow-2xl shadow-[#0891b2]/30">
                  <Shield className="w-10 h-10 mb-1" />
                  <span className="text-sm font-black tracking-wider uppercase">Founder</span>
                </div>
              </motion.div>
            </div>

            {/* Right - Benefits */}
            <div>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Join during beta and lock in permanent advantages that future subscribers won&apos;t receive.
              </p>

              <div className="space-y-3">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#0891b2]/10 flex items-center justify-center text-[#0891b2] flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* =============================================================================
   SECTION 09: DEMO GALLERY
   ============================================================================= */

function DemoGallerySection() {
  const screenshots = [
    {
      title: 'Probate Inbox',
      desc: 'Cases scored and prioritized by PB-Score',
      mockContent: (
        <>
          <div className="flex items-center gap-2 mb-2">
            <div className="px-2 py-0.5 rounded bg-emerald-500 text-white text-[10px] font-bold">PB-03</div>
            <span className="text-white/60 text-xs">Hamilton County</span>
          </div>
          <div className="text-white text-sm">1847 Elm Street</div>
        </>
      )
    },
    {
      title: 'Guided Playbook',
      desc: 'Next action, always clear',
      mockContent: (
        <>
          <div className="text-[#83d4c0] text-[10px] font-bold uppercase mb-1">Next Action</div>
          <div className="text-white text-sm">Send &quot;Inventory Filed&quot; Letter</div>
          <div className="mt-2 flex items-center gap-2">
            <Send className="w-3 h-3 text-[#83d4c0]" />
            <span className="text-[#83d4c0] text-xs">Execute</span>
          </div>
        </>
      )
    },
    {
      title: 'Property Research',
      desc: 'Deep data, equity estimates',
      mockContent: (
        <>
          <div className="text-white/60 text-xs mb-1">Est. Equity</div>
          <div className="text-emerald-400 text-lg font-bold">$127,000</div>
          <div className="mt-2 text-white/40 text-xs">3 bed • 2 bath • 1,450 sqft</div>
        </>
      )
    },
    {
      title: 'Status Monitoring',
      desc: 'Alerts when cases progress',
      mockContent: (
        <>
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-amber-400" />
            <span className="text-white text-sm">Status Change</span>
          </div>
          <div className="text-white/60 text-xs mt-1">Inventory Filed → Ready to Sell</div>
        </>
      )
    },
  ];

  return (
    <section className="px-6 py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#0891b2]/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#83d4c0]/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-white/5 text-[#83d4c0] text-sm font-bold mb-6 tracking-[0.2em] uppercase border border-white/10"
          >
            The Platform
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Built for
            <br />
            <span className="text-white/40">Action</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {screenshots.map((shot, i) => (
            <motion.div
              key={shot.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[16/10] bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 overflow-hidden mb-4 group-hover:border-[#83d4c0]/30 transition-all">
                <div className="absolute inset-4">
                  <div className="h-6 bg-white/5 rounded-lg mb-3 flex items-center px-3 gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                    <div className="w-2 h-2 rounded-full bg-green-400/60" />
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 h-[calc(100%-2.25rem)]">
                    {shot.mockContent}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{shot.title}</h3>
              <p className="text-sm text-white/40">{shot.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================================================================
   SECTION 10: FOUNDER-LED AUTHORITY
   ============================================================================= */

function ProofSection() {
  const stats = [
    { value: '20+', label: 'Years Experience' },
    { value: '$50M+', label: 'In Transactions' },
    { value: '1,000+', label: 'Probate Deals' },
  ];

  return (
    <Section id="proof" className="bg-white overflow-hidden">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 rounded-full bg-slate-50 text-slate-500 text-sm font-bold mb-6 tracking-[0.2em] uppercase border border-slate-200"
        >
          Track Record
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight"
        >
          Built by an Investor
          <br />
          <span className="text-slate-400">Not a Developer</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
        >
          This system existed as a manual process for 20 years.
          Then we turned it into software.
        </motion.p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-2 tracking-tight">
              {stat.value}
            </div>
            <div className="text-slate-500 font-medium tracking-wide uppercase text-sm">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Authority statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
          <p className="text-lg text-slate-600 leading-relaxed italic">
            &quot;This isn&apos;t software built by developers who read about probate investing.
            It&apos;s a system built by an investor who&apos;s closed over 1,000 probate deals.
            The playbooks aren&apos;t theory—they&apos;re what actually works.&quot;
          </p>
          <div className="mt-4 text-slate-900 font-bold">— Gary Bailey</div>
          <div className="text-slate-400 text-sm">Founder, Homeflip.ai</div>
        </div>
      </motion.div>
    </Section>
  );
}

/* =============================================================================
   SECTION 11: FINAL CTA
   ============================================================================= */

function FinalCTASection() {
  return (
    <section id="final-cta" className="px-6 py-32 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
      <div className="absolute inset-0 bg-gradient-to-br from-[#83d4c0]/5 via-transparent to-[#0891b2]/5 opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#83d4c0]/5 rounded-full blur-[150px] animate-pulse pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-slate-50 text-slate-500 text-sm font-bold mb-8 tracking-widest uppercase border border-slate-200"
          >
            Get Started
          </motion.div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-10 tracking-tight leading-[1.05] text-slate-900">
            Join Early.
            <br />
            <span className="text-slate-400">Claim Your Advantage.</span>
          </h2>
          <p className="mt-10 text-xl sm:text-2xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-16">
            The best time to secure your county is before everyone else realizes the opportunity.
          </p>

          <Link
            href="/claim-your-county"
            className="btn-gradient inline-block px-10 sm:px-16 py-5 sm:py-7 rounded-2xl font-hero font-[900] text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter shadow-2xl shadow-[#83d4c0]/30 hover:scale-105 active:scale-95 transition-all"
          >
            Claim Your County
          </Link>

          <p className="mt-8 text-[10px] text-slate-400 font-black tracking-[0.3em] uppercase">
            Private Beta &bull; Founder Pricing &bull; Limited Markets
          </p>
        </motion.div>
      </div>
    </section>
  );
}
