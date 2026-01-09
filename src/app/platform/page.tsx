'use client';

import React, { useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  CheckCircle2, XCircle, Zap, Lock, Clock,
  Brain, Database, Users, MapPin, Shield,
  ArrowRight, Target, TrendingUp, Eye,
  BarChart3, MessageSquare, Sparkles, RefreshCw
} from 'lucide-react';
import Link from 'next/link';

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Section 01: Hero */}
        <HeroSection />

        {/* Section 02: The Automation Trap */}
        <AutomationTrapSection />

        {/* Section 03: Timeline Intelligence */}
        <TimelineIntelligenceSection />

        {/* Section 04: PB Scorecard */}
        <PBScorecardSection />

        {/* Section 05: How It Works */}
        <HowItWorksSection />

        {/* Section 06: More Than a CRM */}
        <MoreThanCRMSection />

        {/* Section 07: County Exclusivity */}
        <CountyExclusivitySection />

        {/* Section 08: Beta Founder Access */}
        <FounderAccessSection />

        {/* Section 09: Product Demo Gallery */}
        <DemoGallerySection />

        {/* Section 10: Proof Without Hype */}
        <ProofSection />

        {/* Section 11: Final CTA */}
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

/* =============================================================================
   SECTION 01: HERO - "Claim Your County"
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

      {/* Floating UI mockups */}
      <motion.div
        initial={{ opacity: 0, x: 100, rotateY: -15 }}
        animate={{ opacity: 0.15, x: 0, rotateY: -15 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute right-[5%] top-[20%] w-[400px] h-[300px] bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hidden xl:block"
        style={{ transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)' }}
      />
      <motion.div
        initial={{ opacity: 0, x: -100, rotateY: 15 }}
        animate={{ opacity: 0.1, x: 0, rotateY: 15 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="absolute left-[5%] bottom-[20%] w-[350px] h-[250px] bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hidden xl:block"
        style={{ transform: 'perspective(1000px) rotateY(15deg) rotateX(-5deg)' }}
      />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-block px-4 py-2 rounded-full bg-white/5 text-[#83d4c0] text-sm font-bold mb-8 tracking-[0.2em] uppercase border border-white/10"
        >
          Probate-Only Intelligence Platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 tracking-tight leading-[1.05]"
        >
          The Intelligence Layer
          <br />
          <span className="bg-gradient-to-r from-[#83d4c0] to-[#0891b2] bg-clip-text text-transparent">
            for Probate Investing
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl sm:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          AI-powered Timeline Intelligence built on 20+ years of real probate deals.
          County access limited to protect your advantage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <Link
            href="/claim-your-county"
            className="btn-gradient inline-block px-12 sm:px-16 py-5 sm:py-6 rounded-2xl font-hero font-[900] text-2xl sm:text-3xl md:text-4xl uppercase tracking-tighter shadow-2xl shadow-[#83d4c0]/20 hover:scale-105 active:scale-95 transition-all animate-pulse-glow"
          >
            Claim Your County
          </Link>
          <p className="text-xs text-white/40 font-bold tracking-[0.2em] uppercase">
            Beta &bull; Founder Pricing &bull; Limited Access
          </p>
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#83d4c0]/30 to-transparent" />
    </section>
  );
}

/* =============================================================================
   SECTION 02: THE AUTOMATION TRAP
   ============================================================================= */

function AutomationTrapSection() {
  return (
    <Section id="automation-trap" className="bg-white overflow-hidden">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 rounded-full bg-slate-50 text-slate-500 text-sm font-bold mb-6 tracking-[0.2em] uppercase border border-slate-200"
        >
          The Problem
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight"
        >
          Automation Scales Activity,
          <br />
          <span className="text-slate-400">Not Judgment</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed"
        >
          Most probate tools help you send more. We help you send better.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Left - Automation (Chaos) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-200 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/5 rounded-full blur-3xl -mr-20 -mt-20" />

          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-500">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-700 tracking-widest uppercase">Automation-First</h3>
            </div>

            <div className="space-y-6">
              <TrapItem
                icon={<MessageSquare className="w-5 h-5" />}
                title="Blast Campaigns"
                description="Same message to everyone. Heirs in grief receive cold, scripted outreach."
                isNegative
              />
              <TrapItem
                icon={<Clock className="w-5 h-5" />}
                title="Speed Over Timing"
                description="Racing to contact first, regardless of where the case actually is."
                isNegative
              />
              <TrapItem
                icon={<Users className="w-5 h-5" />}
                title="Volume Metrics"
                description="Success measured by touches sent, not relationships built."
                isNegative
              />
              <TrapItem
                icon={<Target className="w-5 h-5" />}
                title="Spray and Pray"
                description="Every lead treated the same. No context, no personalization."
                isNegative
              />
            </div>
          </div>
        </motion.div>

        {/* Right - Intelligence (Calm) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#83d4c0]/5 via-transparent to-[#0891b2]/5 opacity-50" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#83d4c0]/5 rounded-full blur-[80px]" />

          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#0891b2] flex items-center justify-center text-white shadow-lg shadow-[#0891b2]/30">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 tracking-widest uppercase">Intelligence-First</h3>
            </div>

            <div className="space-y-6">
              <TrapItem
                icon={<Eye className="w-5 h-5" />}
                title="Contextual Awareness"
                description="Understand where each case stands in the probate lifecycle."
              />
              <TrapItem
                icon={<Clock className="w-5 h-5" />}
                title="Timing Over Speed"
                description="Reach out when sellers are emotionally ready, not just when you find them."
              />
              <TrapItem
                icon={<Target className="w-5 h-5" />}
                title="Guided Actions"
                description="The platform tells you what to do next based on real signals."
              />
              <TrapItem
                icon={<TrendingUp className="w-5 h-5" />}
                title="Relationship ROI"
                description="Success measured by deals closed, not messages sent."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function TrapItem({
  icon,
  title,
  description,
  isNegative = false
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  isNegative?: boolean;
}) {
  return (
    <div className="flex items-start gap-4 group">
      <div className={`mt-0.5 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110 ${
        isNegative
          ? 'bg-red-50 text-red-400 border border-red-100'
          : 'bg-[#0891b2]/10 text-[#0891b2] border border-[#0891b2]/20'
      }`}>
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg mb-1 tracking-tight text-slate-900">{title}</h4>
        <p className="text-base leading-relaxed text-slate-500">{description}</p>
      </div>
    </div>
  );
}

/* =============================================================================
   SECTION 03: TIMELINE INTELLIGENCE
   ============================================================================= */

function TimelineIntelligenceSection() {
  return (
    <Section id="timeline-intelligence" className="bg-slate-50/70 overflow-hidden">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 rounded-full bg-white text-[#0891b2] text-sm font-bold mb-6 tracking-[0.2em] uppercase border border-slate-200"
        >
          Our Core Innovation
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight"
        >
          Introducing
          <br />
          <span className="bg-gradient-to-r from-[#0891b2] to-[#83d4c0] bg-clip-text text-transparent italic">
            Timeline Intelligence
          </span>
          <span className="text-[#0891b2]">&trade;</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed"
        >
          The right action at the right moment. Built from real conversations over two decades,
          aligning your outreach with seller readiness.
        </motion.p>
      </div>

      {/* Timeline Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto"
      >
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-200 shadow-xl">
          {/* Timeline Line */}
          <div className="relative mb-12">
            <div className="h-2 bg-slate-100 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#0891b2] via-[#83d4c0] to-[#0891b2] rounded-full"
              />
            </div>

            {/* Timeline Nodes */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
              {['Filing', 'Discovery', 'Resolution', 'Sale'].map((stage, i) => (
                <motion.div
                  key={stage}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                  className="w-6 h-6 rounded-full bg-[#0891b2] border-4 border-white shadow-lg"
                />
              ))}
            </div>
          </div>

          {/* Stage Labels */}
          <div className="grid grid-cols-4 gap-4 text-center mb-12">
            {[
              { stage: 'Filing', desc: 'Case opens' },
              { stage: 'Discovery', desc: 'Assets identified' },
              { stage: 'Resolution', desc: 'Ready to sell' },
              { stage: 'Sale', desc: 'Deal closes' }
            ].map((item, i) => (
              <motion.div
                key={item.stage}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="text-sm font-black text-slate-900 tracking-tight">{item.stage}</div>
                <div className="text-xs text-slate-400">{item.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Key insight box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-[#0891b2]/5 to-[#83d4c0]/5 rounded-2xl p-6 border border-[#0891b2]/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0891b2] to-[#83d4c0] flex items-center justify-center text-white flex-shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="text-slate-900 font-bold tracking-tight">Each stage demands different action</div>
                <div className="text-slate-500 text-sm">Timeline Intelligence tells you exactly what to do and when to do it.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}

/* =============================================================================
   SECTION 04: PB SCORECARD
   ============================================================================= */

function PBScorecardSection() {
  const pbStages = [
    {
      code: 'PB-01',
      name: 'Early Filing',
      description: 'Case just opened. Family is processing grief. Property decisions are months away.',
      action: 'Nurture & Patience',
      actionDesc: 'Light touch. Introduce yourself. Offer help without pressure.',
      color: '#6366f1', // indigo
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    },
    {
      code: 'PB-02',
      name: 'Mid-Process',
      description: 'Inventory filed. Property identified. Family working through legal requirements.',
      action: 'Remove Barriers',
      actionDesc: 'Answer questions. Provide resources. Position yourself as the solution.',
      color: '#0891b2', // cyan
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200'
    },
    {
      code: 'PB-03',
      name: 'Ready to Sell',
      description: 'Court approval pending or granted. Family actively seeking buyers.',
      action: 'Act Decisively',
      actionDesc: 'Present offer. Move quickly. This is your window.',
      color: '#10b981', // emerald
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    },
    {
      code: 'PB-00',
      name: 'Monitoring',
      description: 'Case stalled, delayed, or status unclear. Could reactivate at any time.',
      action: 'Watch & Wait',
      actionDesc: 'Stay in the system. Don\'t discard. These often convert later.',
      color: '#64748b', // slate
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-200'
    }
  ];

  return (
    <Section id="pb-scorecard" className="bg-white overflow-hidden">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 rounded-full bg-slate-50 text-slate-500 text-sm font-bold mb-6 tracking-[0.2em] uppercase border border-slate-200"
        >
          The Scoring System
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight"
        >
          Different Stages,
          <br />
          <span className="text-slate-400">Different Actions</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed"
        >
          Every case gets a PB score. Every score has a playbook.
        </motion.p>
      </div>

      {/* PB Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pbStages.map((stage, i) => (
          <motion.div
            key={stage.code}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`${stage.bgColor} p-6 rounded-[1.5rem] border ${stage.borderColor} hover:shadow-xl transition-all duration-300 group`}
          >
            {/* PB Code Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-sm font-black mb-4"
              style={{ backgroundColor: stage.color }}
            >
              {stage.code}
            </div>

            {/* Stage Name */}
            <h3 className="text-lg font-black text-slate-900 mb-2 tracking-tight">
              {stage.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">
              {stage.description}
            </p>

            {/* Divider */}
            <div className="h-px bg-slate-200 mb-4" />

            {/* Action */}
            <div className="flex items-center gap-2 mb-2">
              <ArrowRight className="w-4 h-4" style={{ color: stage.color }} />
              <span className="text-sm font-bold" style={{ color: stage.color }}>
                {stage.action}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {stage.actionDesc}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* =============================================================================
   SECTION 05: HOW IT WORKS
   ============================================================================= */

function HowItWorksSection() {
  const steps = [
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Probate Ingestion',
      description: 'Court records flow into the system daily. New filings, status changes, property data.',
      detail: 'We sync with county courts so you don\'t have to.'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Timeline Scoring',
      description: 'AI analyzes each case and assigns a PB score based on lifecycle position.',
      detail: 'Trained on thousands of real probate outcomes.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Guided Actions',
      description: 'The platform tells you exactly what to do next for each case.',
      detail: 'No guessing. Just follow the playbook.'
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: 'Outcome Learning',
      description: 'Results feed back into the system. It learns what works in your market.',
      detail: 'Gets smarter with every deal.'
    }
  ];

  return (
    <section className="px-6 py-32 bg-[#050505] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#0891b2]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#83d4c0]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-white/5 text-[#83d4c0] text-sm font-bold mb-6 tracking-[0.2em] uppercase border border-white/10"
          >
            The System
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight"
          >
            A Closed-Loop
            <br />
            <span className="text-white/40">Intelligence System</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            The platform learns and adapts. Every outcome makes it smarter.
          </motion.p>
        </div>

        {/* Flow Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative group"
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-[#83d4c0]/50 to-transparent"
                  />
                </div>
              )}

              {/* Step card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#83d4c0]/30 transition-all duration-300">
                {/* Number badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#0891b2] text-white text-sm font-bold flex items-center justify-center shadow-lg">
                  {i + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0891b2] to-[#83d4c0] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#0891b2]/20 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-white/50 mb-4 leading-relaxed">
                  {step.description}
                </p>
                <p className="text-xs text-[#83d4c0] font-medium">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================================================================
   SECTION 06: MORE THAN A CRM
   ============================================================================= */

function MoreThanCRMSection() {
  return (
    <Section id="more-than-crm" className="bg-slate-50/70 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-white text-slate-500 text-sm font-bold mb-6 tracking-[0.2em] uppercase border border-slate-200"
          >
            Not Just Software
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            CRMs Store History.
            <br />
            <span className="bg-gradient-to-r from-[#0891b2] to-[#83d4c0] bg-clip-text text-transparent">
              We Drive Decisions.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 mb-8 leading-relaxed"
          >
            A CRM is a database with a UI. It stores what happened.
            Homeflip.ai tells you what to do next.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {[
              { label: 'CRM', text: 'Logs your calls', negative: true },
              { label: 'Homeflip', text: 'Tells you who to call', negative: false },
              { label: 'CRM', text: 'Shows deal stages', negative: true },
              { label: 'Homeflip', text: 'Predicts deal readiness', negative: false },
              { label: 'CRM', text: 'Stores contact info', negative: true },
              { label: 'Homeflip', text: 'Surfaces the right contact at the right time', negative: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className={`text-xs font-bold tracking-wider uppercase px-2 py-1 rounded ${
                  item.negative ? 'bg-slate-200 text-slate-500' : 'bg-[#0891b2] text-white'
                }`}>
                  {item.label}
                </span>
                <span className={`text-base ${item.negative ? 'text-slate-400' : 'text-slate-700 font-medium'}`}>
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right - Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glow background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#83d4c0]/10 to-[#0891b2]/10 rounded-[2.5rem] blur-2xl opacity-50" />

          <div className="relative bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-2xl">
            {/* CRM Layer (bottom) */}
            <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200 mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center text-slate-400">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-600">CRM Layer</div>
                  <div className="text-xs text-slate-400">Data storage & history</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {['Contacts', 'Deals', 'Tasks'].map((item) => (
                  <div key={item} className="bg-white rounded-lg px-3 py-2 text-xs text-slate-500 text-center border border-slate-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center my-2">
              <motion.div
                initial={{ y: 5 }}
                animate={{ y: -5 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
                className="w-8 h-8 rounded-full bg-gradient-to-b from-[#0891b2] to-[#83d4c0] flex items-center justify-center text-white shadow-lg"
              >
                <ArrowRight className="w-4 h-4 rotate-[-90deg]" />
              </motion.div>
            </div>

            {/* Intelligence Layer (top) */}
            <div className="bg-gradient-to-br from-[#0891b2]/10 to-[#83d4c0]/10 rounded-2xl p-6 border border-[#0891b2]/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0891b2] to-[#83d4c0] flex items-center justify-center text-white shadow-lg shadow-[#0891b2]/20">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Intelligence Layer</div>
                  <div className="text-xs text-[#0891b2]">Decisions & predictions</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {['Timeline Scoring', 'Guided Actions', 'Predictions', 'Learning'].map((item) => (
                  <div key={item} className="bg-white rounded-lg px-3 py-2 text-xs text-slate-700 text-center border border-[#0891b2]/10 font-medium">
                    {item}
                  </div>
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
   SECTION 07: COUNTY EXCLUSIVITY
   ============================================================================= */

function CountyExclusivitySection() {
  const countySlots = [
    { name: 'Hamilton, OH', status: 'locked', slots: '5/5' },
    { name: 'Butler, OH', status: 'filling', slots: '3/5' },
    { name: 'Clermont, OH', status: 'filling', slots: '2/5' },
    { name: 'Warren, OH', status: 'open', slots: '1/5' },
    { name: 'Marion, IN', status: 'open', slots: '0/5' },
    { name: 'Your County', status: 'available', slots: '?' },
  ];

  return (
    <Section id="county-exclusivity" className="bg-white overflow-hidden">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 rounded-full bg-slate-50 text-slate-500 text-sm font-bold mb-6 tracking-[0.2em] uppercase border border-slate-200"
        >
          Protected Access
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight"
        >
          Signal Degrades
          <br />
          <span className="text-slate-400">With Competition</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed"
        >
          That's why we cap access at <strong className="text-slate-900">&lt;5 investors per county</strong>.
          Your advantage is protected by design.
        </motion.p>
      </div>

      {/* County Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {countySlots.map((county, i) => (
          <motion.div
            key={county.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`relative p-5 rounded-2xl border ${
              county.status === 'locked'
                ? 'bg-slate-100 border-slate-200'
                : county.status === 'available'
                ? 'bg-gradient-to-br from-[#0891b2]/5 to-[#83d4c0]/5 border-[#0891b2]/20 hover:border-[#0891b2]/40'
                : 'bg-white border-slate-200 hover:border-slate-300'
            } transition-all group`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className={`font-bold tracking-tight ${
                county.status === 'locked' ? 'text-slate-400' : 'text-slate-900'
              }`}>
                {county.name}
              </span>
              {county.status === 'locked' && (
                <Lock className="w-4 h-4 text-slate-400" />
              )}
            </div>

            {/* Progress bar */}
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
              <div
                className={`h-full rounded-full transition-all ${
                  county.status === 'locked'
                    ? 'bg-slate-300 w-full'
                    : county.status === 'filling'
                    ? 'bg-gradient-to-r from-[#0891b2] to-[#83d4c0]'
                    : county.status === 'available'
                    ? 'bg-[#0891b2] w-0'
                    : 'bg-gradient-to-r from-[#0891b2] to-[#83d4c0]'
                }`}
                style={{
                  width: county.status === 'locked' ? '100%'
                    : county.slots === '3/5' ? '60%'
                    : county.slots === '2/5' ? '40%'
                    : county.slots === '1/5' ? '20%'
                    : county.slots === '0/5' ? '0%'
                    : '0%'
                }}
              />
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className={county.status === 'locked' ? 'text-slate-400' : 'text-slate-500'}>
                {county.slots} spots
              </span>
              <span className={`font-bold uppercase tracking-wider ${
                county.status === 'locked' ? 'text-slate-400'
                : county.status === 'available' ? 'text-[#0891b2]'
                : county.status === 'filling' ? 'text-amber-500'
                : 'text-emerald-500'
              }`}>
                {county.status === 'available' ? 'Check Availability' : county.status}
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
          Claim Your County
        </Link>
        <p className="mt-4 text-sm text-slate-400">
          See if your market is still available
        </p>
      </motion.div>
    </Section>
  );
}

/* =============================================================================
   SECTION 08: BETA FOUNDER ACCESS
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
          {/* Background gradient */}
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
                {/* Rotating dashed border */}
                <div className="absolute inset-0 w-40 h-40 border-2 border-dashed border-[#83d4c0]/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />

                {/* Badge */}
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#0891b2] to-[#83d4c0] flex flex-col items-center justify-center text-white shadow-2xl shadow-[#0891b2]/30">
                  <Shield className="w-10 h-10 mb-1" />
                  <span className="text-sm font-black tracking-wider uppercase">Founder</span>
                </div>
              </motion.div>
            </div>

            {/* Right - Benefits */}
            <div>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Join during beta and lock in permanent advantages that future subscribers won't receive.
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
   SECTION 09: PRODUCT DEMO GALLERY
   ============================================================================= */

function DemoGallerySection() {
  const screenshots = [
    { title: 'Probate Inbox', desc: 'New cases flow in daily, scored and prioritized' },
    { title: 'Case Timeline', desc: 'Full lifecycle visibility at a glance' },
    { title: 'Property Research', desc: 'Deep property data, equity estimates' },
    { title: 'Guided Actions', desc: 'What to do next, always clear' },
  ];

  return (
    <section className="px-6 py-32 bg-[#050505] relative overflow-hidden">
      {/* Background effects */}
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
            Built to
            <br />
            <span className="text-white/40">Think</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            Glassmorphic UI. Living timelines. Guided decisions.
          </motion.p>
        </div>

        {/* Screenshot Gallery */}
        <div className="grid md:grid-cols-2 gap-8">
          {screenshots.map((shot, i) => (
            <motion.div
              key={shot.title}
              initial={{ opacity: 0, y: 30, rotateX: 5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group"
            >
              {/* Screenshot placeholder */}
              <div className="relative aspect-[16/10] bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 overflow-hidden mb-4 group-hover:border-[#83d4c0]/30 transition-all">
                {/* Mock UI elements */}
                <div className="absolute inset-4">
                  {/* Header bar */}
                  <div className="h-8 bg-white/5 rounded-lg mb-3 flex items-center px-3 gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                    <div className="w-2 h-2 rounded-full bg-green-400/60" />
                  </div>
                  {/* Content placeholder */}
                  <div className="grid grid-cols-3 gap-2 h-[calc(100%-3rem)]">
                    <div className="col-span-1 bg-white/5 rounded-lg" />
                    <div className="col-span-2 bg-white/5 rounded-lg" />
                  </div>
                </div>

                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#83d4c0]/0 to-[#0891b2]/0 group-hover:from-[#83d4c0]/5 group-hover:to-[#0891b2]/5 transition-all duration-500" />
              </div>

              <h3 className="text-lg font-bold text-white mb-1 tracking-tight">{shot.title}</h3>
              <p className="text-sm text-white/40">{shot.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================================================================
   SECTION 10: PROOF WITHOUT HYPE
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
          This System Existed
          <br />
          <span className="text-slate-400">Before Software</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
        >
          We built it from real deals. Then we turned it into a platform.
        </motion.p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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

      {/* Understatement */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-16 text-slate-400 text-sm"
      >
        Results speak. We just built the platform to share them.
      </motion.p>
    </Section>
  );
}

/* =============================================================================
   SECTION 11: FINAL CTA
   ============================================================================= */

function FinalCTASection() {
  return (
    <section id="final-cta" className="px-6 py-32 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
      {/* Dynamic Background */}
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
