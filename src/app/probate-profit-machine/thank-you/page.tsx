'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle, Mail, Phone, ArrowRight, Play, Clock,
  TrendingUp, DollarSign, Building, Lock, Star, Users,
  AlertCircle, Zap, Shield, ChevronRight, Search, Calendar,
  Home, Database, AlertTriangle, FileSearch, HelpCircle
} from 'lucide-react';
import { logos } from '@/config/hub.config';
import Image from 'next/image';
import Link from 'next/link';
import { CaseClaimDemo } from '@/components/CaseClaimDemo';

// Strategy Call CTA component with enhanced "pop"
const StrategyCallCTA = ({ className = "" }: { className?: string }) => (
  <div className={`relative group ${className}`}>
    {/* Animated background glow */}
    <div className="absolute -inset-1 bg-gradient-to-r from-[#83d4c0] via-[#0891b2] to-[#83d4c0] rounded-[2.2rem] blur-lg opacity-40 group-hover:opacity-100 group-hover:blur-xl transition-all duration-700 group-hover:duration-200 animate-pulse-glow" />
    
  <Link
    href="/ppm-pre-strategy-survey"
      className="relative flex items-center justify-center gap-3 btn-gradient px-8 sm:px-12 py-5 sm:py-7 rounded-[2rem] font-hero font-[900] text-2xl sm:text-3xl md:text-5xl shadow-2xl transition-all hover:scale-[1.03] active:scale-[0.98] uppercase tracking-tighter"
  >
    Book Your Strategy Call
      <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-2 transition-transform" />
  </Link>
    
    {/* Floating highlight */}
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full pointer-events-none" />
  </div>
);

// High-end Social Proof Notification
const SocialNotification = () => {
  const [visible, setVisible] = React.useState(false);
  const [notif, setNotif] = React.useState({ name: 'Someone', action: 'claimed a county' });

  React.useEffect(() => {
    const names = ['John D.', 'Sarah W.', 'Mike R.', 'David K.', 'Alex M.', 'Jennifer S.'];
    const actions = ['just claimed Butler County', 'just claimed Clermont County', 'booked a strategy call', 'just claimed Hamilton County', 'just claimed Marion County'];
    
    const cycle = () => {
      setNotif({ 
        name: names[Math.floor(Math.random() * names.length)], 
        action: actions[Math.floor(Math.random() * actions.length)] 
      });
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
    };

    const timer = setInterval(cycle, 12000);
    setTimeout(cycle, 2000); // First one after 2s
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed bottom-6 left-6 z-[60] hidden md:flex items-center gap-4 bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl"
        >
          <div className="w-10 h-10 rounded-full bg-[#83d4c0]/20 flex items-center justify-center">
            <Zap className="w-5 h-5 text-[#83d4c0]" />
          </div>
          <div>
            <p className="text-white font-bold text-sm">{notif.name}</p>
            <p className="text-white/50 text-xs uppercase tracking-widest font-black">{notif.action}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// High-end glass card component
const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative group ${className}`}>
    {/* Border glow */}
    <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-white/20 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div 
      className="relative h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 sm:p-10 shadow-2xl transition-all duration-300 group-hover:translate-y-[-4px] group-hover:bg-white/[0.05]"
      style={{
        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.3)'
      }}
    >
      {children}
    </div>
  </div>
);

// Floating background orbs for depth
const BackgroundOrbs = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <motion.div
      animate={{
        x: [0, 100, -50, 0],
        y: [0, -100, 50, 0],
        scale: [1, 1.2, 0.9, 1],
        opacity: [0.1, 0.15, 0.1, 0.1]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-[#83d4c0] rounded-full blur-[120px]"
    />
    <motion.div
      animate={{
        x: [0, -150, 100, 0],
        y: [0, 100, -150, 0],
        scale: [1, 1.3, 0.8, 1],
        opacity: [0.1, 0.12, 0.1, 0.1]
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[#0891b2] rounded-full blur-[100px]"
    />
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.02, 0.04, 0.02]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white rounded-full blur-[140px]"
    />
  </div>
);

// Inline CTA with text
const InlineCTA = () => (
  <div className="py-12 sm:py-16 flex flex-col items-center justify-center gap-8">
    <span className="font-hero font-[900] text-2xl sm:text-3xl md:text-4xl text-white/30 uppercase tracking-tighter italic text-center leading-none">
      Stop Chasing. Start Closing.
    </span>
    <StrategyCallCTA />
  </div>
);

// Advanced Before/After Slider with "Lens" interaction
const BeforeAfterSlider = ({
  beforeSrc,
  afterSrc,
  label
}: {
  beforeSrc: string;
  afterSrc: string;
  label: string;
}) => {
  const [sliderPos, setSliderPos] = React.useState(50);
  const [isDragging, setIsDragging] = React.useState(false);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging && e.type !== 'touchmove') return;
    
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    setSliderPos(Math.max(0, Math.min(100, position)));
  };

  return (
    <div className="relative group select-none">
      <div 
        className="aspect-[4/3] relative overflow-hidden rounded-[1.5rem] cursor-ew-resize border border-white/10"
        onMouseMove={handleMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={handleMove}
      >
        {/* After Image (Full width) */}
        <Image
          src={afterSrc}
          alt={`${label} after`}
          fill
          className="object-cover"
        />
        
        {/* Before Image (Clipped) */}
        <div 
          className="absolute inset-0 z-10 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="absolute inset-0 w-[200%] h-full">
            <Image
              src={beforeSrc}
              alt={`${label} before`}
              fill
              className="object-cover"
            />
        </div>
      </div>

        {/* Divider Line */}
        <div 
          className="absolute inset-y-0 z-20 w-1 bg-white/50 backdrop-blur-sm pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl">
            <ChevronRight className="w-4 h-4 text-black rotate-180 -ml-1" />
            <ChevronRight className="w-4 h-4 text-black -mr-1" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 z-30 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[10px] font-black text-white uppercase tracking-widest border border-white/10">Before</div>
        <div className="absolute top-4 right-4 z-30 px-3 py-1 rounded-lg bg-[#83d4c0]/80 backdrop-blur-md text-[10px] font-black text-black uppercase tracking-widest border border-white/10">After</div>
      </div>
      <p className="mt-3 text-center text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">{label}</p>
    </div>
  );
};

export default function ThankYouVSLPage() {
  const [liveViewers, setLiveViewers] = React.useState(142);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLiveViewers(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#050505] text-white dark overflow-hidden selection:bg-[#83d4c0]/30">
      <BackgroundOrbs />
      <SocialNotification />

      {/* Header - Absolute (Scrolls with page) */}
      <header className="absolute top-0 left-0 right-0 z-50 py-8 px-12 bg-transparent">
        <div className="w-full flex items-center justify-center relative">
          {/* Left: Logo */}
          <div className="absolute left-0 flex items-center">
            <img
              src={logos.logo.onDark}
              alt="Homeflip.ai"
              className="h-9"
            />
          </div>

          {/* Center: Status Message */}
          <div className="hidden lg:flex items-center gap-3 py-1.5 px-6 bg-white/[0.01] border border-white/5 rounded-full backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-[#83d4c0]/50 animate-pulse" />
            <p className="text-white/40 font-medium text-[10px] uppercase tracking-[0.2em] whitespace-nowrap">
              Your <span className="text-white/60">Probate Profit Machine</span> will Arrive in Your Inbox in 10-15 Minutes
            </p>
          </div>
          
          {/* Right: Phone */}
          <a
            href="tel:5139865440"
            className="absolute right-0 flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium hidden sm:inline">(513) 986-5440</span>
          </a>
        </div>
      </header>

      {/* Content Container */}
      <div className="relative z-10">

        {/* ============================================ */}
        {/* SECTION 1: Hero + Video */}
        {/* ============================================ */}
        <section className="relative flex flex-col items-center justify-center px-6 pt-24 pb-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Eyebrow Copy */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#83d4c0] text-xl sm:text-2xl md:text-3xl font-medium uppercase tracking-tight mb-6 max-w-4xl mx-auto leading-tight"
            >
              Attention real estate investors who want a <br /> never ending supply of off-market deals
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-hero font-[900] text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white uppercase tracking-tighter leading-[0.8] mb-10 max-w-6xl mx-auto"
            >
              HOMEFLIP.AI DELIVERS probate houses on autopilot as low as 19% of the ARV
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/60 text-lg sm:text-xl md:text-2xl font-normal mb-10 max-w-none mx-auto leading-[1.1] md:whitespace-nowrap"
            >
              The Exact Blueprint We've Used to Buy Over 100 Off-Market Houses in the Past 24 Months
            </motion.p>

            {/* Premium Video Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative group max-w-4xl mx-auto"
            >
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#83d4c0]/20 to-[#0891b2]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
                {/* Custom Video Overlay Header */}
                <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-20 bg-gradient-to-b from-black/60 to-transparent">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-black text-white/80 uppercase tracking-widest">Live Workshop</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-white/60">
                    <Users className="w-3.5 h-3.5 text-[#83d4c0]" />
                    <span>{liveViewers} WATCHING</span>
                  </div>
                </div>

                <div className="aspect-video relative flex items-center justify-center group/play cursor-pointer">
                  {/* Video Background Image (if we had one) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]" />
                  
                  {/* Play Button - Premium Look */}
                  <div className="relative z-10 w-28 h-28 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center transition-all duration-500 group-hover/play:scale-110 group-hover/play:bg-white/20">
                    <div className="absolute inset-0 rounded-full animate-ping bg-[#83d4c0]/20" />
                    <Play className="w-12 h-12 text-white fill-white ml-2 transition-transform group-hover/play:scale-110" />
                  </div>

                  {/* Video Label */}
                  <div className="absolute bottom-10 left-0 right-0 text-center z-20">
                    <p className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">How Probate Leads Can Transform Your Business</p>
                    <p className="text-white/40 text-sm uppercase tracking-[0.2em] font-black italic">Click to Play Workshop</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-20"
            >
              <StrategyCallCTA />
              <div className="mt-8 flex items-center justify-center gap-6 text-white/40 text-xs font-black uppercase tracking-[0.2em]">
                <span className="flex items-center gap-2"><Lock className="w-3 h-3" /> Secure SSL</span>
                <span className="flex items-center gap-2"><Star className="w-3 h-3 text-[#83d4c0]" /> 5.0 Rating</span>
                <span className="flex items-center gap-2"><Users className="w-3 h-3" /> 500+ Active</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 2: Your Market Deep Dive */}
        {/* ============================================ */}
        <section className="py-24 sm:py-32 px-6 border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#83d4c0]/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="text-center mb-16">
                <p className="text-[#83d4c0] text-sm font-black uppercase tracking-[0.4em] mb-4">
                  Step 1: The Analysis
                </p>
                <h2 className="text-white font-hero font-[900] text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
                  Map Your <br />
                  <span className="text-white/40 italic">County Assets</span>
              </h2>
                <p className="text-xl sm:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed mt-8">
                  On our call, we don't talk theory. We pull the <strong className="text-white">live data for your specific county</strong> to see exactly how many probate houses are sitting unclaimed right now.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 mb-12">
                {[
                  { value: "41%", label: "Market Share", sub: "Potential dominance" },
                  { value: "Live", label: "Data Pull", sub: "For your zip codes" },
                  { value: "9M+", label: "Transitions", sub: "The Silver Tsunami" }
                ].map((stat, idx) => (
                  <GlassCard key={idx} className="!p-8 text-center group">
                    <div className="text-[#83d4c0] font-hero font-[900] text-5xl md:text-6xl mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
                    <div className="text-white font-bold text-sm uppercase tracking-widest mb-1">{stat.label}</div>
                    <div className="text-white/30 text-[10px] font-black uppercase tracking-widest">{stat.sub}</div>
                  </GlassCard>
                ))}
              </div>

              <GlassCard>
                <div className="text-xl sm:text-2xl leading-[1.7] text-white/80 space-y-8">
                  <p>
                    Most investors are guessing. They send mailers to "probate lists" that are 6 months old and already saturated.
                  </p>
                  <p className="font-bold text-white text-2xl sm:text-3xl italic leading-tight pt-4 border-l-2 border-[#83d4c0] pl-8">
                    "We'll show you how to find the deals the rest of the market doesn't even know exist yet."
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 3: The Domination Gap */}
        {/* ============================================ */}
        <section className="py-24 sm:py-32 px-6 border-t border-white/5 relative overflow-hidden bg-white/[0.01]">
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="text-center mb-16">
                <p className="text-red-400/80 text-sm font-black uppercase tracking-[0.4em] mb-4">
                The Problem
              </p>
                <h2 className="text-white font-hero font-[900] text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
                  The Barrier <br />
                  <span className="text-red-500/40 italic">To Scale</span>
              </h2>
                <p className="text-xl sm:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed mt-8">
                  On the strategy call, we'll identify why your current lead sources are failing you and how to bypass the <strong className="text-white">"Middleman Tax"</strong> forever.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <GlassCard className="border-red-500/10 hover:border-red-500/30 transition-colors">
                  <div className="flex gap-6 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                      <AlertCircle className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight leading-none pt-2">The Competition Trap</h3>
                  </div>
                  <p className="text-white/60 text-lg leading-relaxed">
                    Fighting for scraps with hedge funds on the MLS? We'll show you how to move to the "Off-Market" ocean where the margins are 3x higher.
                  </p>
                </GlassCard>

                <GlassCard className="border-red-500/10 hover:border-red-500/30 transition-colors">
                  <div className="flex gap-6 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                      <DollarSign className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight leading-none pt-2">The Wholesaler Tax</h3>
                  </div>
                  <p className="text-white/60 text-lg leading-relaxed">
                    Stop paying $20k+ assignment fees. We'll show you how to become the primary source and keep the full equity for your own portfolio.
                  </p>
                </GlassCard>
              </div>

              <div className="max-w-3xl mx-auto text-center mt-16 space-y-12">
                <p className="text-2xl sm:text-4xl text-white/80 font-medium leading-relaxed italic">
                  It's time to stop chasing leads and start <span className="text-[#83d4c0] font-black uppercase tracking-tighter">owning your market</span>.
                </p>
                <div className="pt-8">
                  <StrategyCallCTA />
            </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 4: What We Reveal on Your Call */}
        {/* ============================================ */}
        <section className="py-24 sm:py-32 px-6 border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#83d4c0]/5 rounded-full blur-[140px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="text-center">
                <p className="text-[#83d4c0] text-sm font-black uppercase tracking-[0.4em] mb-4">
                  The Goldmine
                </p>
                <h2 className="text-white font-hero font-[900] text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
                  The Probate <br />
                  <span className="text-[#83d4c0] italic">Unfair Advantage</span>
              </h2>
                <p className="text-xl sm:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed mt-8">
                  On our deep-dive call, we'll show you exactly how to capitalize on these <strong className="text-white">six fundamental advantages</strong> in your local market.
                </p>
                </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Home, title: "Unwanted Property", desc: "How to identify heirs who value speed over top dollar." },
                  { icon: Zap, title: "Zero Competition", desc: "Why less than 5% of investors work probate and how you can be #1." },
                  { icon: TrendingUp, title: "Recession Proof", desc: "Why probate stays consistent regardless of interest rates or market shifts." },
                  { icon: Shield, title: "Clear Authority", desc: "How to talk to court-appointed representatives who have the power to sell." },
                  { icon: Clock, title: "As-Is Deals", desc: "How to source properties where the estate just wants the problem gone." },
                  { icon: Star, title: "Service First", desc: "How to position yourself as the problem-solver for families in transition." }
                ].map((item, idx) => (
                  <GlassCard key={idx} className="!p-8 group/card">
                <div className="flex gap-6">
                      <div className="w-12 h-12 rounded-xl bg-[#83d4c0]/10 flex items-center justify-center shrink-0 border border-[#83d4c0]/20 group-hover/card:bg-[#83d4c0]/20 transition-colors">
                        <item.icon className="w-6 h-6 text-[#83d4c0]" />
                  </div>
                  <div>
                        <h4 className="text-xl font-bold text-white uppercase tracking-tight mb-2">{item.title}</h4>
                        <p className="text-white/50 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
                  </GlassCard>
                ))}
                </div>

              <div className="text-center">
                <p className="text-2xl sm:text-4xl text-white font-hero font-[900] uppercase tracking-tighter italic">
                  Consistent deals. High equity. <br />
                  <span className="text-[#83d4c0]">Learn the system on our call.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 5: Proof It Works */}
        {/* ============================================ */}
        <section className="py-24 sm:py-32 px-6 border-t border-white/5 relative overflow-hidden bg-white/[0.01]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="text-center">
                <p className="text-[#83d4c0] text-sm font-black uppercase tracking-[0.4em] mb-4">
                  The Proof
                </p>
                <h2 className="text-white font-hero font-[900] text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
                  Real Deals. <br />
                  <span className="text-white/40 italic">Real Profit.</span>
              </h2>
                <p className="text-xl sm:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                  Over the past 24 months, we've bought <strong className="text-white">97 houses</strong> at an average of <strong className="text-[#83d4c0]">47% of ARV</strong>.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
            {/* Case Study 1 */}
                <GlassCard>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#83d4c0]/10 flex items-center justify-center border border-[#83d4c0]/20">
                      <Building className="w-7 h-7 text-[#83d4c0]" />
                </div>
                <div>
                      <h3 className="font-bold text-white text-2xl tracking-tight">Richey Rd, Hamilton OH</h3>
                      <p className="text-[#83d4c0] text-xs font-black uppercase tracking-widest">Probate BRRRR • 47% ARV</p>
                </div>
              </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <BeforeAfterSlider
                  beforeSrc="/before-after/richey/before-1.jpg"
                  afterSrc="/before-after/richey/after-1.jpg"
                      label="Living"
                />
                <BeforeAfterSlider
                  beforeSrc="/before-after/richey/before-2.jpg"
                  afterSrc="/before-after/richey/after-2.jpg"
                  label="Kitchen"
                />
              </div>

                  <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                    <div className="text-white/40 text-xs font-black uppercase tracking-widest">Status</div>
                    <div className="text-[#10b981] font-hero font-[900] text-2xl uppercase tracking-tighter">Completed</div>
                  </div>
                </GlassCard>

            {/* Case Study 2 */}
                <GlassCard>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#83d4c0]/10 flex items-center justify-center border border-[#83d4c0]/20">
                      <Building className="w-7 h-7 text-[#83d4c0]" />
                </div>
                <div>
                      <h3 className="font-bold text-white text-2xl tracking-tight">Kemper Ln, Batavia OH</h3>
                      <p className="text-[#83d4c0] text-xs font-black uppercase tracking-widest">Probate BRRRR • 43% ARV</p>
                </div>
              </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <BeforeAfterSlider
                  beforeSrc="/before-after/kemper/before-1.jpg"
                  afterSrc="/before-after/kemper/after-1.jpg"
                      label="Exterior"
                />
                <BeforeAfterSlider
                  beforeSrc="/before-after/kemper/before-2.jpg"
                  afterSrc="/before-after/kemper/after-2.jpg"
                  label="Kitchen"
                />
              </div>

                  <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                    <div className="text-white/40 text-xs font-black uppercase tracking-widest">Status</div>
                    <div className="text-[#10b981] font-hero font-[900] text-2xl uppercase tracking-tighter">Completed</div>
                  </div>
                </GlassCard>
              </div>

              {/* Deal Numbers Card */}
              <div className="max-w-4xl mx-auto">
                <GlassCard className="border-[#83d4c0]/20 !p-12 relative overflow-hidden group">
                  {/* Subtle background deal sheet pattern */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none font-mono text-[10px] leading-none overflow-hidden select-none p-4">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div key={i} className="whitespace-nowrap mb-1">
                        PROPERTY_DEED_MATCH_ID_{i}_ARV_ESTIMATE_VERIFIED_DEAL_SCORE_98_EQUITY_MAX
                      </div>
                    ))}
                  </div>

                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-12">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-[#83d4c0]/10 flex items-center justify-center border border-[#83d4c0]/20">
                          <Zap className="w-8 h-8 text-[#83d4c0]" />
                  </div>
                        <div>
                          <h3 className="text-4xl font-hero font-[900] text-white uppercase tracking-tighter">The Deal Math</h3>
                          <p className="text-[#83d4c0] text-xs font-black uppercase tracking-[0.2em]">Sample Probate BRRRR Analysis</p>
                  </div>
                  </div>
                      <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full">
                        <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Calculated Live</span>
                      </div>
                </div>

                    <div className="grid md:grid-cols-2 gap-12 items-end">
                      <div className="space-y-6">
                        {[
                          { label: "Purchase Price", val: "$94,500", color: "text-white" },
                          { label: "Renovation Budget", val: "$40,000", color: "text-white" },
                          { label: "Carrying Costs", val: "$4,500", color: "text-white/60" },
                          { label: "New Appraised Value", val: "$245,000", color: "text-[#83d4c0]" }
                        ].map((row, i) => (
                          <div key={i} className="flex justify-between items-center pb-4 border-b border-white/5 group-hover:border-white/10 transition-colors">
                            <span className="text-white/50 font-bold uppercase tracking-tight text-sm">{row.label}</span>
                            <span className={`${row.color} font-black text-xl`}>{row.val}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-8 bg-[#83d4c0]/5 rounded-[2rem] border border-[#83d4c0]/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4">
                          <TrendingUp className="w-12 h-12 text-[#83d4c0]/20" />
                  </div>
                        <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2 italic">Monthly Passive Income</p>
                        <div className="text-[#10b981] font-hero font-[900] text-6xl sm:text-7xl tracking-tighter leading-none mb-4 animate-pulse">$699<span className="text-2xl text-[#10b981]/50">/mo</span></div>
                        <div className="flex items-center gap-2 text-[#10b981] font-black text-xs uppercase tracking-widest bg-[#10b981]/10 px-3 py-1.5 rounded-full inline-block">
                          Infinite ROI After Refi
                  </div>
                  </div>
                  </div>
                  </div>
                </GlassCard>
                </div>

              <div className="text-center mt-12">
                <p className="text-2xl text-white/60 mb-10 italic">"If you aren't buying houses with numbers like these, you're doing it wrong."</p>
                <StrategyCallCTA />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 6: The Missing Piece */}
        {/* ============================================ */}
        <section className="py-24 sm:py-32 px-6 border-t border-white/5 relative overflow-hidden bg-white/[0.01]">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="text-center">
                <p className="text-amber-400 text-sm font-black uppercase tracking-[0.4em] mb-4">
                  The Friction
                </p>
                <h2 className="text-white font-hero font-[900] text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
                  The Manual <br />
                  <span className="text-amber-500/40 italic">Data Grind</span>
              </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <GlassCard className="border-amber-500/10">
                  <div className="space-y-8">
                    {[
                      { icon: Database, text: "Buried in 3,000+ different county court portals." },
                      { icon: FileSearch, text: "Zero visibility on which cases actually have property." },
                      { icon: HelpCircle, text: "Impossible to know when heirs are ready to talk." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 group/item">
                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20 group-hover/item:bg-amber-500/20 transition-colors">
                          <item.icon className="w-5 h-5 text-amber-500" />
              </div>
                        <span className="text-white/70 text-lg leading-tight pt-1">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                <div className="flex flex-col justify-center space-y-8">
                  <p className="text-2xl text-white/80 leading-relaxed">
                    Most investors give up after a few weeks of manually searching court websites. They think it requires a <strong className="text-white">massive team</strong> or <strong className="text-white">$10k/mo in marketing</strong>.
                  </p>
                  <p className="text-3xl font-hero font-[900] text-[#83d4c0] uppercase tracking-tighter italic">
                    They're wrong.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 7: Introducing HomeFlip.ai */}
        {/* ============================================ */}
        <section className="py-24 sm:py-32 px-6 border-t border-white/5 relative overflow-hidden bg-white/[0.02]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0891b2]/5 rounded-full blur-[140px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="text-center">
                <p className="text-[#83d4c0] text-sm font-black uppercase tracking-[0.4em] mb-4">
                  The Evolution
              </p>
                <h2 className="text-white font-hero font-[900] text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
                  The <span className="text-[#83d4c0] italic">AI Advantage</span>
              </h2>
                </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { icon: Search, title: "Daily Court Sync", desc: "Our AI monitors 3,000+ county portals 24/7. New deals hit your dashboard in hours—not weeks." },
                  { icon: TrendingUp, title: "Timeline Intel™", desc: "Track every lifecycle stage. We tell you who is ready to sell now—not just who is on a list." },
                  { icon: Zap, title: "PB Scoring", desc: "AI assigns scores based on filing velocity and equity ratios so you focus on the highest-potential deals." },
                  { icon: Shield, title: "Guided Outreach", desc: "Proven, respectful workflows designed specifically for probate. Know exactly what to say." }
                ].map((feature, idx) => (
                  <GlassCard key={idx}>
                    <div className="w-12 h-12 rounded-xl bg-[#83d4c0]/10 flex items-center justify-center text-[#83d4c0] mb-6">
                      <feature.icon className="w-6 h-6" />
                  </div>
                    <h4 className="text-2xl font-bold text-white uppercase tracking-tight mb-4">{feature.title}</h4>
                    <p className="text-white/50 leading-relaxed text-lg">{feature.desc}</p>
                  </GlassCard>
                ))}
                </div>

{/* Interactive Case Claim Demo */}
              <CaseClaimDemo />

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {["Fresh Daily Leads", "Timeline Tracking", "Property Research", "Enhanced Contacts", "Live Coaching", "Private Community"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white/70 font-bold">
                    <CheckCircle className="w-5 h-5 text-[#83d4c0]" />
                    <span>{item}</span>
                  </div>
                ))}
                </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 8: Why We're Different */}
        {/* ============================================ */}
        <section className="py-24 sm:py-32 px-6 border-t border-white/5 relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="text-center">
                <p className="text-[#83d4c0] text-sm font-black uppercase tracking-[0.4em] mb-4">
                  The Founder
                </p>
                <h2 className="text-white font-hero font-[900] text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
                  Built By <br />
                  <span className="text-white/40 italic">Investors.</span>
              </h2>
              </div>

              <GlassCard className="!p-0 overflow-hidden">
                <div className="grid md:grid-cols-5 gap-0 items-stretch">
                  <div className="md:col-span-2 relative min-h-[300px] group overflow-hidden">
                    {/* Background glow behind image */}
                    <div className="absolute inset-0 bg-[#83d4c0]/5 z-0" />
                    <div className="absolute inset-0 flex items-center justify-center text-white/5 font-hero font-[900] text-6xl uppercase tracking-tighter rotate-12 z-0">Gary Bailey</div>
                    
                    {/* Image placeholder with premium treatment */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    <div className="absolute bottom-6 left-6 z-20">
                      <h4 className="text-2xl font-hero font-[900] text-white uppercase tracking-tighter">Gary Bailey</h4>
                      <p className="text-[#83d4c0] text-[10px] font-black uppercase tracking-widest">Founder • 1,000+ Probate Deals</p>
                </div>
              </div>

                  <div className="md:col-span-3 p-8 sm:p-12 space-y-8 bg-white/[0.01]">
                    <div className="space-y-6">
                      <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-medium">
                        "I didn't build HomeFlip.ai because I'm a developer. I built it because I was tired of the manual grind in my own real estate business."
                      </p>
                      <p className="text-lg text-white/60 leading-relaxed">
                        After 15 years and over $50M in transactions, I realized that the best deals aren't found by working harder—they're found by having better systems. We're opening up our private platform to a few investors who are ready to scale judgment, not just activity.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2 text-white/40 text-xs font-black uppercase tracking-widest">
                        <CheckCircle className="w-3.5 h-3.5 text-[#83d4c0]" />
                        20+ Years Experience
                      </div>
                      <div className="flex items-center gap-2 text-white/40 text-xs font-black uppercase tracking-widest">
                        <CheckCircle className="w-3.5 h-3.5 text-[#83d4c0]" />
                        97 Houses in 24 Months
                      </div>
              </div>

                    <div className="pt-4">
                      {/* Signature effect placeholder */}
                      <p className="font-serif italic text-3xl text-white/80 select-none">Gary Bailey</p>
              </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 9: Your Strategy Call Agenda */}
        {/* ============================================ */}
        <section className="py-24 sm:py-32 px-6 border-t border-white/5 relative overflow-hidden bg-white/[0.01]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="text-center">
                <p className="text-[#83d4c0] text-sm font-black uppercase tracking-[0.4em] mb-4">
                  The Game Plan
                </p>
                <h2 className="text-white font-hero font-[900] text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
                  Your Discovery <br />
                  <span className="text-[#83d4c0] italic">Agenda</span>
              </h2>
                <p className="text-xl sm:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed mt-8">
                  This isn't a sales pitch. It's a high-level deep dive into your market to see if you have the infrastructure to handle the probate volume we provide.
                </p>
                </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative space-y-0 pl-12 border-l border-white/10 py-4">
                  {[
                    { title: "County Audit", desc: "We pull the live case volume for your specific county and zip codes to reveal hidden inventory." },
                    { title: "Market Heat Mapping", desc: "Identify the exact neighborhoods where probate activity is peaking and equity is highest." },
                    { title: "Competitor Analysis", desc: "See exactly who else is working your market and where the gaps in their strategy are." },
                    { title: "Implementation Roadmap", desc: "A tailored plan to reach families at the exact moment they're ready to sell." },
                    { title: "Scale Assessment", desc: "Review your current team and systems to ensure you can actually close the deals we find." }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative pb-12 last:pb-0"
                    >
                      {/* Connection Dot */}
                      <div className="absolute -left-[53px] top-0 w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center z-10 group cursor-default">
                        <div className="w-2 h-2 rounded-full bg-[#83d4c0] group-hover:scale-150 transition-transform" />
                </div>

                      <div className="group cursor-default">
                        <h4 className="text-xl font-black text-white group-hover:text-[#83d4c0] transition-colors uppercase tracking-tight mb-2">
                          {idx + 1}. {item.title}
                        </h4>
                        <p className="text-white/50 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                    </motion.div>
                  ))}
                </div>

                <GlassCard className="border-[#83d4c0]/20 !p-12 text-center">
                  <div className="mb-10 inline-block p-4 rounded-full bg-[#83d4c0]/10 border border-[#83d4c0]/20">
                    <Calendar className="w-10 h-10 text-[#83d4c0]" />
                  </div>
                  <h3 className="text-3xl font-hero font-[900] text-white uppercase tracking-tighter mb-6 leading-tight">
                    Lock In Your <br />County Deep-Dive
                  </h3>
                  <p className="text-lg text-white/60 mb-10 italic">
                    "No obligation. No pressure. Just massive clarity on how to dominate your market."
                  </p>
                  <StrategyCallCTA />
                  <div className="mt-8 flex items-center justify-center gap-4 text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
                    <span className="flex items-center gap-2"><Users className="w-3 h-3" /> Only 3 spots left</span>
                    <span>•</span>
                    <span>Free 30-Min Discovery</span>
                </div>
                </GlassCard>
                  </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 10: Final CTA */}
        {/* ============================================ */}
        <section className="py-24 sm:py-48 px-6 border-t border-white/5 relative overflow-hidden bg-white/[0.01]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h2 className="text-white font-hero font-[900] text-5xl sm:text-7xl md:text-9xl uppercase tracking-tighter leading-[0.8] mb-8">
                Ready to <br /><span className="text-[#83d4c0] animate-pulse">Dominate Your Market?</span>
              </h2>

              <p className="text-2xl sm:text-3xl text-white/60 max-w-2xl mx-auto leading-relaxed font-medium">
                We're currently in a controlled roll-out. Secure your <strong className="text-white">County Discovery Call</strong> before your competition claims your territory.
              </p>

              {/* High-Tech Scarcity System */}
              <div className="max-w-2xl mx-auto">
                <GlassCard className="border-amber-500/20 bg-amber-500/[0.02] !p-12">
                  <div className="flex flex-col gap-10">
                    <div className="flex items-center justify-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-amber-500 blur-md opacity-20 animate-ping" />
                        <Lock className="w-6 h-6 text-amber-500 relative" />
                      </div>
                      <span className="text-amber-500 font-black uppercase tracking-[0.3em] text-sm">System Access Monitor</span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-6">
                      <div className="relative group/item">
                        <div className="absolute -inset-2 bg-red-500/10 rounded-xl blur-lg opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        <div className="relative space-y-3">
                          <div className="px-3 py-1.5 bg-red-500/20 border border-red-500/30 rounded-lg text-[10px] font-black text-red-500 uppercase tracking-widest">Locked</div>
                          <div className="text-white font-bold text-sm">Hamilton, OH</div>
                          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                            <div className="w-full h-full bg-red-500/50" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative group/item">
                        <div className="absolute -inset-2 bg-amber-500/10 rounded-xl blur-lg opacity-100" />
                        <div className="relative space-y-3">
                          <div className="px-3 py-1.5 bg-amber-500/20 border border-amber-500/30 rounded-lg text-[10px] font-black text-amber-500 uppercase tracking-widest animate-pulse">Filling Fast</div>
                          <div className="text-white font-bold text-sm">Butler, OH</div>
                          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: "60%" }}
                              animate={{ width: "85%" }}
                              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                              className="h-full bg-amber-500/50" 
                            />
                </div>
                  </div>
                  </div>
                      
                      <div className="relative group/item">
                        <div className="absolute -inset-2 bg-[#10b981]/10 rounded-xl blur-lg opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        <div className="relative space-y-3">
                          <div className="px-3 py-1.5 bg-[#10b981]/20 border border-[#10b981]/30 rounded-lg text-[10px] font-black text-[#10b981] uppercase tracking-widest">Available</div>
                          <div className="text-white/40 font-bold text-sm italic">Your Market?</div>
                          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                            <div className="w-[10%] h-full bg-[#10b981]/50" />
                          </div>
                  </div>
                </div>
              </div>

                    <div className="pt-6 border-t border-white/5">
                      <p className="text-white/40 text-xs font-medium leading-relaxed max-w-sm mx-auto">
                        We strictly limit beta access to <strong className="text-white">less than 5 investors per market</strong> to ensure individual success.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div className="pt-12">
                <StrategyCallCTA />
                <div className="mt-10 flex flex-col items-center gap-6">
                  <div className="inline-flex items-center gap-3 px-8 py-3 bg-[#83d4c0]/10 border border-[#83d4c0]/20 rounded-full shadow-2xl">
                  <Star className="w-4 h-4 text-[#83d4c0]" />
                    <span className="text-[#83d4c0] text-sm font-black uppercase tracking-widest">Founder Pricing Active</span>
                  </div>
                  <div className="flex items-center gap-8 text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
                    <span>Invite-Only Access</span>
                    <span>•</span>
                    <span>Q1 2026 Batch</span>
                  </div>
                </div>
              </div>

              {/* Final Footer Social Proof */}
              <div className="max-w-md mx-auto pt-32 opacity-30 hover:opacity-100 transition-all duration-700">
                <div className="p-8 border border-white/5 rounded-3xl bg-white/[0.01] backdrop-blur-sm">
                  <div className="flex flex-col items-center gap-6 text-center">
                    <Mail className="w-8 h-8 text-[#83d4c0]/50" />
                    <div className="space-y-2">
                      <h4 className="text-white font-bold tracking-tight">Your guide is in the works</h4>
                      <p className="text-white/50 text-sm leading-relaxed">
                        Gary just sent your access link to <strong className="text-white/80">your inbox</strong>. We recommend watching the workshop above before diving in.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-white/5 relative z-10 bg-black/50 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-3">
              <span className="text-white font-hero font-[900] text-2xl uppercase tracking-tighter">
                HomeFlip<span className="text-[#83d4c0]">.ai</span>
              </span>
              <div className="text-white/30 text-[10px] font-black uppercase tracking-widest text-center md:text-left space-y-1">
                <p>© 2026 WhiteBox Academy, LLC. All rights reserved.</p>
                <p>7800 Cooper Road, Suite 201, Cincinnati, OH 45242</p>
              </div>
            </div>
            
            <div className="flex gap-8 text-white/40 text-[10px] font-black uppercase tracking-widest">
              <Link href="#" className="hover:text-[#83d4c0] transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#83d4c0] transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-[#83d4c0] transition-colors">Support</Link>
            </div>
            
            <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 border border-white/10">
              <Shield className="w-4 h-4 text-[#83d4c0]" />
              <div className="flex flex-col">
                <span className="text-white text-[10px] font-black uppercase tracking-widest">Secure Portal</span>
                <span className="text-white/30 text-[8px] font-black uppercase tracking-[0.2em]">256-Bit SSL Secured</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}


