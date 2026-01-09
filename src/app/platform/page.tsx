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

        {/* Section 02: The 15-Minute Workflow */}
        <WorkflowSection />

        {/* Section 03: The Architecture */}
        <ArchitectureSection />

        {/* Section 04: PB-Score Algorithm */}
        <PBScoreSection />

        {/* Section 05: Data Pipeline */}
        <DataPipelineSection />

        {/* Section 06: Community Bridge */}
        <CommunityBridgeSection />

        {/* Section 07: Live Inventory Terminal */}
        <CountyTerminalSection />

        {/* Section 08: Founder Access */}
        <FounderAccessSection />

        {/* Section 09: Demo Gallery */}
        <DemoGallerySection />

        {/* Section 10: Founder-Led Authority */}
        <ProofSection />

        {/* Section 11: Final CTA */}
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
          For Part-Time Investors
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
            for the Professional Investor
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed"
        >
          The only system that turns 20 years of probate expertise into a guided
          &quot;Next-Action&quot; dashboard. Built for investors who need consistent deals
          without the full-time grind.
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
            Beta &bull; Founder Pricing &bull; Limited Access
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
              <div className="text-white font-medium">
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
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-[#0891b2]/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-[#83d4c0]" />
            </div>
            <span className="text-white/80 text-sm">
              Built by <strong className="text-white">Gary</strong> for the Property Magnet community
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
   SECTION 02: THE 15-MINUTE WORKFLOW
   ============================================================================= */

function WorkflowSection() {
  const steps = [
    {
      time: '1',
      unit: 'Minute',
      title: 'The Intake',
      description: 'While you\'re at your day job, our system is at the courthouse. It filters the noise, identifies property equity, and scores every case.',
      visual: (
        <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#0891b2] flex items-center justify-center">
              <Bell className="w-4 h-4 text-white" />
            </div>
            <span className="text-white/60 text-xs">Just Now</span>
          </div>
          <div className="text-white text-sm font-medium mb-1">New PB-03 Case</div>
          <div className="text-white/50 text-xs">Hamilton County, OH</div>
        </div>
      ),
      color: '#6366f1'
    },
    {
      time: '2',
      unit: 'Minutes',
      title: 'The Decision',
      description: 'Don\'t guess what to say. The platform tells you exactly where the family is in the process. Open the Playbook, grab the script, and act.',
      visual: (
        <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
          <div className="text-[#83d4c0] text-xs font-bold uppercase tracking-wider mb-2">
            Guided Script
          </div>
          <div className="text-white text-sm leading-relaxed">
            &quot;Hi, my name is [Name]. I help families navigate property decisions during probate...&quot;
          </div>
        </div>
      ),
      color: '#0891b2'
    },
    {
      time: '12',
      unit: 'Minutes',
      title: 'The Execution',
      description: 'Send your outreach using integrated workflows. Then, close your laptop. The system monitors for status changes and alerts you when it\'s time to follow up.',
      visual: (
        <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="text-emerald-400 font-bold">Outreach Complete</div>
              <div className="text-white/50 text-xs">Monitoring for updates...</div>
            </div>
          </div>
        </div>
      ),
      color: '#10b981'
    }
  ];

  return (
    <Section id="workflow" className="bg-white overflow-hidden">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 rounded-full bg-slate-50 text-slate-500 text-sm font-bold mb-6 tracking-[0.2em] uppercase border border-slate-200"
        >
          The Part-Timer&apos;s Path
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight"
        >
          Your Tuesday Night
          <br />
          <span className="text-slate-400">Workflow</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed"
        >
          Most investors think probate requires hours of research.
          Here&apos;s what <strong className="text-slate-900">15 minutes</strong> actually looks like.
        </motion.p>
      </div>

      {/* 3-Column Workflow */}
      <div className="grid lg:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative"
          >
            {/* Connector arrow (desktop) */}
            {i < steps.length - 1 && (
              <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-8 h-8 text-slate-200" />
              </div>
            )}

            <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 h-full">
              {/* Time badge */}
              <div className="flex items-baseline gap-1 mb-6">
                <span
                  className="text-5xl font-black"
                  style={{ color: step.color }}
                >
                  {step.time}
                </span>
                <span className="text-slate-400 font-bold uppercase text-sm tracking-wider">
                  {step.unit}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 mb-6 leading-relaxed">
                {step.description}
              </p>

              {/* Visual */}
              {step.visual}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Total time */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#0891b2]/10 to-[#83d4c0]/10 rounded-full px-8 py-4 border border-[#0891b2]/20">
          <Clock className="w-6 h-6 text-[#0891b2]" />
          <span className="text-slate-900 font-bold text-lg">
            Total: <span className="text-[#0891b2]">15 minutes</span> per session
          </span>
        </div>
      </motion.div>
    </Section>
  );
}

/* =============================================================================
   SECTION 03: THE ARCHITECTURE
   ============================================================================= */

function ArchitectureSection() {
  const pipelineSteps = [
    { label: 'County Courts', sublabel: '3,000+ portals', icon: <Building className="w-6 h-6" /> },
    { label: 'Ingestion Engine', sublabel: 'Real-time sync', icon: <ArrowDown className="w-6 h-6" /> },
    { label: 'Data Normalization', sublabel: 'Structured output', icon: <FileText className="w-6 h-6" /> },
    { label: 'PB-Score Algorithm', sublabel: 'Weighted scoring', icon: <Brain className="w-6 h-6" /> },
    { label: 'Your Dashboard', sublabel: 'Prioritized actions', icon: <Target className="w-6 h-6" /> },
  ];

  return (
    <Section id="architecture" className="bg-slate-50/70 overflow-hidden">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 rounded-full bg-white text-[#0891b2] text-sm font-bold mb-6 tracking-[0.2em] uppercase border border-slate-200"
        >
          Under The Hood
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight"
        >
          The Architecture
          <br />
          <span className="text-slate-400">of Timing</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed"
        >
          Most &quot;AI&quot; in real estate is just a skin on a database.
          Here&apos;s how our actual intelligence layer functions.
        </motion.p>
      </div>

      {/* Pipeline Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-200 shadow-xl">
          <div className="space-y-4">
            {pipelineSteps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    i === pipelineSteps.length - 1
                      ? 'bg-gradient-to-br from-[#0891b2] to-[#83d4c0] text-white shadow-lg shadow-[#0891b2]/20'
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    {step.icon}
                  </div>

                  {/* Label */}
                  <div className="flex-1">
                    <div className="font-bold text-slate-900">{step.label}</div>
                    <div className="text-sm text-slate-400">{step.sublabel}</div>
                  </div>

                  {/* Step number */}
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-sm font-bold">
                    {i + 1}
                  </div>
                </div>

                {/* Connector */}
                {i < pipelineSteps.length - 1 && (
                  <div className="ml-7 my-2 w-px h-6 bg-gradient-to-b from-slate-200 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

/* =============================================================================
   SECTION 04: PB-SCORE ALGORITHM
   ============================================================================= */

function PBScoreSection() {
  const variables = [
    {
      name: 'Lifecycle Stage',
      description: 'Filing vs. Inventory vs. Resolution',
      icon: <Scale className="w-6 h-6" />,
      color: '#6366f1'
    },
    {
      name: 'Asset Verification',
      description: 'Cross-referenced property data',
      icon: <Building className="w-6 h-6" />,
      color: '#0891b2'
    },
    {
      name: 'Case Velocity',
      description: 'How fast is this specific court moving?',
      icon: <Gauge className="w-6 h-6" />,
      color: '#f59e0b'
    },
    {
      name: 'Equity Ratio',
      description: 'Estimated debt vs. market value',
      icon: <TrendingUp className="w-6 h-6" />,
      color: '#10b981'
    }
  ];

  const pbStages = [
    { code: 'PB-01', name: 'Early Filing', action: 'Nurture & Patience', color: '#6366f1' },
    { code: 'PB-02', name: 'Mid-Process', action: 'Remove Barriers', color: '#0891b2' },
    { code: 'PB-03', name: 'Ready to Sell', action: 'Act Decisively', color: '#10b981' },
    { code: 'PB-00', name: 'Monitoring', action: 'Watch & Wait', color: '#64748b' },
  ];

  return (
    <Section id="pb-score" className="bg-white overflow-hidden">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 rounded-full bg-slate-50 text-slate-500 text-sm font-bold mb-6 tracking-[0.2em] uppercase border border-slate-200"
        >
          The Algorithm
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight"
        >
          The PB-Score
          <br />
          <span className="text-slate-400">Algorithm</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed"
        >
          A PB-Score isn&apos;t random. It&apos;s a weighted calculation based on <strong className="text-slate-900">4 key variables</strong>.
        </motion.p>
      </div>

      {/* 4 Variables Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {variables.map((variable, i) => (
          <motion.div
            key={variable.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center"
          >
            <div
              className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center text-white"
              style={{ backgroundColor: variable.color }}
            >
              {variable.icon}
            </div>
            <h3 className="font-bold text-slate-900 mb-1">{variable.name}</h3>
            <p className="text-sm text-slate-500">{variable.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Arrow down */}
      <div className="flex justify-center mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center"
        >
          <ArrowDown className="w-6 h-6 text-slate-400" />
        </motion.div>
      </div>

      {/* PB Stages */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Output: Your PB Score</h3>
        <p className="text-slate-500">Each score tells you exactly what to do</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {pbStages.map((stage, i) => (
          <motion.div
            key={stage.code}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-xl p-4 border border-slate-200 text-center hover:shadow-lg transition-all"
          >
            <div
              className="inline-block px-3 py-1 rounded-full text-white text-sm font-black mb-3"
              style={{ backgroundColor: stage.color }}
            >
              {stage.code}
            </div>
            <div className="text-slate-900 font-bold text-sm mb-1">{stage.name}</div>
            <div className="text-slate-400 text-xs">{stage.action}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* =============================================================================
   SECTION 05: DATA PIPELINE
   ============================================================================= */

function DataPipelineSection() {
  const features = [
    {
      title: 'Court-Sync Engine',
      description: 'We don\'t just scrape names. We ingest case numbers, fiduciary roles, and filing types from county court systems daily.',
      highlight: 'Real-time data, not stale lists'
    },
    {
      title: 'LLM Document Processing',
      description: 'Our system reads actual court PDFs—inventory lists, petitions, orders—to extract property addresses often hidden in case notes.',
      highlight: 'AI that reads legal documents'
    },
    {
      title: 'Your 2-Week Head Start',
      description: 'We find the property before it\'s even recorded in the tax assessor\'s office. That\'s the window other investors miss.',
      highlight: 'First-mover advantage'
    }
  ];

  return (
    <section className="px-6 py-32 bg-[#050505] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#0891b2]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#83d4c0]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-white/5 text-[#83d4c0] text-sm font-bold mb-6 tracking-[0.2em] uppercase border border-white/10"
          >
            The Data Edge
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight"
          >
            The Data
            <br />
            <span className="text-white/40">Pipeline</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#83d4c0]/30 transition-all"
            >
              <div className="text-[#83d4c0] text-sm font-bold uppercase tracking-wider mb-4">
                {feature.highlight}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================================================================
   SECTION 06: COMMUNITY BRIDGE
   ============================================================================= */

function CommunityBridgeSection() {
  return (
    <Section id="community" className="bg-slate-50/70 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-white text-[#0891b2] text-sm font-bold mb-6 tracking-[0.2em] uppercase border border-slate-200"
          >
            The Business Model
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            The Strategy is Free.
            <br />
            <span className="bg-gradient-to-r from-[#0891b2] to-[#83d4c0] bg-clip-text text-transparent">
              The Execution is Automated.
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4 text-lg text-slate-600 leading-relaxed"
          >
            <p>
              I give away my 20 years of probate training for free in our community. Why?
              Because the strategy only works if you have the <strong className="text-slate-900">data</strong> and
              the <strong className="text-slate-900">discipline</strong> to execute it.
            </p>
            <p>
              Homeflip.ai is the engine that executes the Property Magnet strategy. It takes
              the guesswork out of Timeline Intelligence, so you can focus on building
              relationships and closing deals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <a
              href="https://skool.com/propertymagnet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-xl border border-slate-200 hover:border-[#0891b2]/30 hover:shadow-lg transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0891b2] flex items-center justify-center text-white">
                <Play className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-slate-900 font-bold">Join the Free Community</div>
                <div className="text-slate-500 text-sm">skool.com/propertymagnet</div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#0891b2] group-hover:translate-x-1 transition-all" />
            </a>
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#83d4c0]/10 to-[#0891b2]/10 rounded-[2.5rem] blur-2xl opacity-50" />

          <div className="relative bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-2xl">
            {/* Free Training */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Free Training</div>
                  <div className="text-xs text-emerald-600 font-medium">Property Magnet Community</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {['Video Courses', 'Live Coaching', 'Scripts & Templates', 'Community Q&A'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Plus sign */}
            <div className="flex justify-center my-4">
              <div className="w-8 h-8 rounded-full bg-[#0891b2] text-white flex items-center justify-center font-bold">
                +
              </div>
            </div>

            {/* Homeflip Platform */}
            <div className="bg-gradient-to-br from-[#0891b2]/10 to-[#83d4c0]/10 rounded-2xl p-6 border border-[#0891b2]/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0891b2] to-[#83d4c0] flex items-center justify-center text-white shadow-lg">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Homeflip.ai Platform</div>
                  <div className="text-xs text-[#0891b2] font-medium">Execution Engine</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {['Court Data Sync', 'PB-Score Algorithm', 'Guided Playbooks', 'Status Monitoring'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0891b2]" />
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
          <div className="mt-4 text-slate-900 font-bold">— Gary</div>
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
