'use client';

import React, { useState } from 'react';
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

// Proof section with side-by-side before/after images and centered customer headshot
const StunningTransformation = ({
  title,
  location,
  beforeImage,
  afterImage,
  purchasePrice,
  resoldPrice,
  customerPhoto,
  customerName
}: {
  title: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  purchasePrice: string;
  resoldPrice: string;
  customerPhoto?: string;
  customerName?: string;
}) => {
  // Calculate % of ARV
  const purchaseNum = parseFloat(purchasePrice.replace(/[$,]/g, ''));
  const resoldNum = parseFloat(resoldPrice.replace(/[$,]/g, ''));
  const percentOfARV = Math.round((purchaseNum / resoldNum) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-5xl mx-auto px-6 py-16 sm:py-20"
    >
      {/* Customer Name & Location Header */}
      <div className="mb-6">
        <h3 className="text-white font-hero font-[900] text-2xl sm:text-3xl uppercase tracking-tighter leading-none">
          {customerName || title}
          <span className="text-white/40 font-medium text-lg sm:text-xl normal-case tracking-normal ml-2">
            ({location})
          </span>
        </h3>
      </div>

      {/* Side-by-side Before/After Images */}
      <div className="relative">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {/* Before Image */}
          <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={beforeImage}
              alt={`${title} before`}
              fill
              className="object-cover"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent" />
            {/* Purchased Price Badge - Upper Left */}
            <div className="absolute top-3 left-3 sm:top-5 sm:left-5">
              <p className="text-white/80 text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] mb-0.5">Purchased</p>
              <p className="text-white font-hero font-[900] text-2xl sm:text-3xl md:text-4xl tracking-tighter drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">{purchasePrice}</p>
            </div>
          </div>

          {/* After Image */}
          <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={afterImage}
              alt={`${title} after`}
              fill
              className="object-cover"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-tl from-black/40 via-transparent to-transparent" />
            {/* Resold Price Badge - Lower Right */}
            <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 text-right">
              <p className="text-amber-400 text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] mb-0.5">Resold</p>
              <p className="text-amber-400 font-hero font-[900] text-2xl sm:text-3xl md:text-4xl tracking-tighter drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">{resoldPrice}!</p>
            </div>
          </div>
        </div>

        {/* Centered Circular Customer Headshot (B&W) */}
        {customerPhoto && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-[#050505] shadow-2xl ring-2 ring-[#83d4c0]/60">
              <Image
                src={customerPhoto}
                alt={customerName || "Customer"}
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>
        )}
      </div>

      {/* Percent of ARV Meter - Animated Scale */}
      <div className="mt-12 space-y-3">
        {/* Scale Container */}
        <div className="relative">
          {/* Track */}
          <div className="h-2 bg-white/5 rounded-full relative overflow-visible">
            {/* Tick marks */}
            <div className="absolute inset-0 flex justify-between">
              {[0, 25, 50, 75, 100].map((tick) => (
                <div key={tick} className="w-px h-full bg-white/10" />
              ))}
            </div>

            {/* Filled portion with gradient */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${percentOfARV}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 2,
                delay: 0.4,
                type: "spring",
                stiffness: 30,
                damping: 15
              }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#22c55e] to-[#4ade80] rounded-full"
            />

            {/* Animated Pointer/Needle */}
            <motion.div
              initial={{ left: "0%" }}
              whileInView={{ left: `${percentOfARV}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 2,
                delay: 0.4,
                type: "spring",
                stiffness: 30,
                damping: 15
              }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
            >
              {/* Pointer head */}
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white shadow-lg shadow-white/20" />
            </motion.div>
          </div>

          {/* Scale Labels - directly under the track */}
          <div className="flex justify-between mt-2 text-[10px] sm:text-xs font-medium text-white/30 tracking-wide">
            <span>0%</span>
            <span>25%</span>
            <span>50%</span>
            <span>75%</span>
            <span>100%</span>
          </div>

          {/* Vertical line and ARV callout - positioned based on percentage */}
          <motion.div
            initial={{ left: "0%" }}
            whileInView={{ left: `${percentOfARV}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              delay: 0.4,
              type: "spring",
              stiffness: 30,
              damping: 15
            }}
            className="absolute top-3 -translate-x-1/2"
            style={{ left: `${percentOfARV}%` }}
          >
            {/* Vertical line extending from dot down to callout */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.8, duration: 0.4, ease: "easeOut" }}
              className="w-px h-14 sm:h-16 bg-gradient-to-b from-white/40 to-white/10 origin-top mx-auto"
            />

            {/* Modern percentage callout */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2.2, duration: 0.5, ease: "easeOut" }}
              className="flex justify-center"
            >
              <div className="bg-white/10 backdrop-blur-md text-white font-medium text-sm sm:text-base px-4 py-2 rounded-full border border-white/20 whitespace-nowrap">
                <span className="text-[#4ade80] font-bold">{percentOfARV}%</span> of ARV
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

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
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* LETTER PART 1 */}
        {/* ============================================ */}
        <section className="py-20 sm:py-28 px-6 border-t border-white/5 relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Date */}
              <p className="text-white/40 font-serif text-lg sm:text-xl italic">
                January 2026
              </p>

              {/* Letter Content */}
              <div className="font-serif text-lg sm:text-xl md:text-2xl leading-[1.8] text-white/80 space-y-6">
                <p className="font-bold text-white">
                  Dear Real Estate Investor,
                </p>

                <p>
                  <span className="relative inline-block">
                    <span className="relative z-10 text-white">The market is on fire across the country.</span>
                    <span className="absolute inset-0 bg-gradient-to-b from-[#83d4c0]/30 to-transparent -rotate-1 translate-y-1 scale-x-105" />
                  </span>
                </p>

                <p>
                  But the experts say it's about to come to a screeching halt.
                </p>

                <p>
                  If you're a real estate investor that's bad, right? <span className="text-white font-bold">Wrong.</span>
                </p>

                <p>
                  Sky high housing prices might be good when you're selling a house…but not when you're buying.
                </p>

                <p className="text-white font-bold">
                  And everyone knows, you make your money when you buy the house.
                </p>

                <p>
                  <span className="relative inline-block">
                    <span className="relative z-10 text-white">There is an untapped inventory of properties right in front of you.</span>
                    <span className="absolute inset-0 bg-gradient-to-b from-[#83d4c0]/30 to-transparent -rotate-1 translate-y-1 scale-x-105" />
                  </span>
                </p>

                <p>
                  Houses with insane margins…that other investors don't know about.
                </p>

                <p>
                  My team and I have been buying these off-market properties for ourselves and our customers for over 15 years.
                </p>

                <p>
                  It's been an amazing ride.
                </p>

                <p className="border-l-2 border-[#83d4c0] pl-6 sm:pl-8 py-2 text-white font-bold">
                  In fact, over the past 24 months we've bought 97 houses at an average of 47% of ARV…just in our market.
                </p>

                <p className="text-white font-bold text-2xl sm:text-3xl pt-4">
                  Houses just like these:
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* PROOF SECTION: 2 Transformation Galleries */}
        {/* ============================================ */}
        <StunningTransformation
          title="Richey Rd"
          location="Williamsburg, OH"
          beforeImage="/before-after/richey/before-1.jpg"
          afterImage="/before-after/richey/after-1.jpg"
          purchasePrice="$148,000"
          resoldPrice="$348,000"
          customerPhoto="/before-after/headshots/joey-sabrina.jpg"
          customerName="Joey & Sabrina"
        />

        <StunningTransformation
          title="Kemper Ln"
          location="Cincinnati, OH"
          beforeImage="/before-after/kemper/before-1.jpg"
          afterImage="/before-after/kemper/after-1.jpg"
          purchasePrice="$183,000"
          resoldPrice="$692,000"
          customerPhoto="/before-after/headshots/kevin.jpg"
          customerName="Kevin S"
        />

        {/* ============================================ */}
        {/* LETTER PART 2 */}
        {/* ============================================ */}
        <section className="py-20 sm:py-28 px-6 border-t border-white/5 relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="font-serif text-lg sm:text-xl md:text-2xl leading-[1.8] text-white/80 space-y-6">
                <p>
                  These are just some of the over <span className="text-white font-bold">2,000 properties</span> we have purchased for ourselves and our customers.
                </p>
                <p>
                  We started out in 2008 when the economy was in the tank.
                </p>
                <p>
                  Everyone said we were crazy.
                </p>
                <p>
                  But here's the thing about building something during tough times.
                </p>
                <p className="text-white font-medium">
                  It makes you stronger.
                </p>
                <p>
                  And when the economy came roaring back we were years ahead of our competitors.
                </p>
                <p className="text-white font-medium">
                  And we dominated our market.
                </p>
                <p>
                  Today we are seeing the same economic signs that we saw back then…but now the opportunity is 10x bigger.
                </p>
                <p>
                  And we want to help serious investors like yourself tap into this hidden inventory of houses.
                </p>
                <p>
                  Because the reality is, it's almost impossible to find a good deal on the market.
                </p>
                <p>
                  Inventory is down 45% and competition is sky high.
                </p>
                <p>
                  Investors all over the country are feeling the squeeze and they don't know what to do.
                </p>
                <p>
                  They are competing in the blood-red ocean against apex predators armed with billions.
                </p>
                <p>
                  Most investors are either sitting it out, or quitting altogether.
                </p>
                <p className="text-white font-medium">
                  But it doesn't have to be like this.
                </p>
                <p className="text-white font-medium">
                  There is a better way.
                </p>
                <p>
                  I'd like to share with you the fastest, simplest and most certain way for you to buy as many houses as you want…
                </p>
                <p className="text-[#83d4c0] font-bold text-2xl sm:text-3xl">
                  From 18¢ on the dollar!
                </p>
                <p>
                  And FINALLY create generational wealth through real estate.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-8 flex flex-col items-center">
                <StrategyCallCTA />
                <p className="mt-6 text-amber-400 font-bold text-sm sm:text-base uppercase tracking-wide">
                  Hurry, Spots Are Filling Up for {new Date().toLocaleString('default', { month: 'long' })}!
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 2: Strategy Call Agenda Overview */}
        {/* ============================================ */}
        <section className="py-24 sm:py-32 px-6 border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#83d4c0]/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="text-center max-w-6xl mx-auto">
                <h2 className="text-white font-hero font-[900] text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.85]">
                  Here's a Brief Outline of<br className="hidden md:block" /> What We'll Cover in Your Free,<br className="hidden md:block" /> 30-Minute Strategy Call
                </h2>
              </div>

              <div className="space-y-8 max-w-4xl mx-auto">
                {[
                  { icon: AlertTriangle, text: "Warning: You could be at serious risk of destroying your entire business because you are paying too much for your houses", color: "text-red-500" },
                  { icon: TrendingUp, text: "Proven strategies that you can implement today that will double your flip margins and rental cashflows", color: "text-[#83d4c0]" },
                  { icon: AlertCircle, text: "Why the \"tried and true\" ways of buying properties are no longer working, and how you can adjust for the new economy", color: "text-amber-500" },
                  { icon: Zap, text: "3 simple tips to double your property pipeline in the next 6 months - without looking at 100 houses a week", color: "text-[#83d4c0]" },
                  { icon: Star, text: "The top 3 overlooked sources of off-market properties we used to buy 97 houses in the last 24 months (#2 alone could make you millions)", color: "text-amber-400" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -40, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: idx * 0.15, duration: 0.5, ease: "easeOut" }}
                    className="flex items-start gap-5"
                  >
                    <item.icon className={`w-7 h-7 ${item.color} shrink-0 mt-1`} />
                    <p className="text-xl sm:text-2xl text-white font-bold leading-snug">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-8 flex justify-center">
                <StrategyCallCTA />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION: You Make Your Money When You Buy */}
        {/* ============================================ */}
        <section className="py-24 sm:py-32 px-6 border-t border-white/5 relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Headline */}
              <h2 className="text-white font-hero font-[900] text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.85] text-center">
                You Make Your Money<br />When You Buy the House
              </h2>

              {/* First half of content */}
              <div className="text-xl sm:text-2xl text-white font-bold leading-relaxed space-y-6">
                <p>Any successful real estate investor will tell you that the money is made when you buy the house.</p>
                <p>But here is where many investors get it wrong…</p>
                <p>They think that buying houses directly from sellers requires $10,000's a month in marketing, or a team of people out looking at houses all day.</p>
                <p>You got into this business to create generational wealth through real estate, not start a marketing company.</p>
                <p>I get it.</p>
                <p>So you do what most investors do to buy off-market houses:</p>
                <p>You rely on wholesalers or agents to find deals because you don't know a better way.</p>
                <p>I did the exact same thing.</p>
                <p>I convinced myself that paying $30,000 or $40,000 to a wholesaler was just the "cost of doing business" as long the numbers still worked.</p>
                <p>But these are the little lies we tell ourselves. Stop and do the math on that.</p>
                <p>If you are an active investor you are probably doing 4-5 deals a year. Let's say the wholesalers are charging you $20,000 on average for each house.</p>
                <p className="text-[#83d4c0]">That's $100,000 a year in costs that could be money in your pocket.</p>
                <p className="text-[#83d4c0]">Now multiply that over a 5 or 10 year period.</p>
              </div>

              {/* Puke GIF */}
              <div className="flex justify-center py-4">
                <Image
                  src="/images/office-puke.gif"
                  alt="Reaction"
                  width={400}
                  height={225}
                  className="rounded-xl"
                  unoptimized
                />
              </div>

              {/* Second half of content */}
              <div className="text-xl sm:text-2xl text-white font-bold leading-relaxed space-y-6">
                <p>That is why I developed <span className="text-[#83d4c0]">Homeflip.ai</span>.</p>
                <p>It enables investors just like you to buy properties directly from sellers.</p>
                <p>It puts money in your pocket.</p>
                <p>And the best part is, you don't have to spend $10,000's a month on marketing…</p>
                <p>Or hire a team of people to look at 5 houses a day.</p>
                <p>Even if you are a one-person-army, you can start buying your own off-market properties without working 80 hours a week.</p>
                <p>For a limited time, I'm offering a free, 30 minute strategy session to find out more about your business.</p>
                <p className="text-white/60">This isn't a sales call.</p>
                <p>It's an opportunity to try out <span className="text-[#83d4c0]">Homeflip.ai</span> and see how it can work for your existing business and drastically increase the amount of houses you can buy.</p>
                <p>But spots are limited, so book your free strategy session now.</p>
              </div>

              {/* CTA Button */}
              <div className="pt-4 flex justify-center">
                <StrategyCallCTA />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* PROOF SECTION 2: Customer Deals */}
        {/* ============================================ */}
        <section className="py-24 sm:py-32 px-6 border-t border-white/5 relative overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-white font-hero font-[900] text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.85]">
                What Type of Deals<br />Are We Talking About?
              </h2>
              <p className="mt-6 text-white/60 text-xl sm:text-2xl font-medium">
                Here are actual houses our customers have purchased using our system
              </p>
            </motion.div>
          </div>

          <StunningTransformation
            title="Blue Rock"
            location="Cincinnati, OH"
            beforeImage="/before-after/blue-rock/blue-rock-ext-before.jpg"
            afterImage="/before-after/blue-rock/blue-rock-ext-after.jpg"
            purchasePrice="$180,000"
            resoldPrice="$480,000"
            customerPhoto="/before-after/headshots/matt.jpg"
            customerName="Matt O."
          />

          <StunningTransformation
            title="Firestone"
            location="Fairfield, OH"
            beforeImage="/before-after/firestone/Firestone-before-ext.jpg"
            afterImage="/before-after/firestone/Firestone-After-ext.jpg"
            purchasePrice="$175,000"
            resoldPrice="$360,000"
            customerPhoto="/before-after/headshots/matt.jpg"
            customerName="Matt O."
          />
        </section>

        {/* ============================================ */}
        {/* SECTION: Plug-and-Play Platform */}
        {/* ============================================ */}
        <section className="py-24 sm:py-32 px-6 border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#83d4c0]/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="text-center max-w-6xl mx-auto">
                <h2 className="text-white font-hero font-[900] text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.85]">
                  Our Plug-and-Play Platform<br className="hidden md:block" /> Will Have You Buying Off-Market<br className="hidden md:block" /> Properties in Less Than 30 Days
                </h2>
              </div>

              <div className="space-y-8 max-w-4xl mx-auto">
                {[
                  { icon: Zap, text: "Get immediate access to properties directly from sellers", color: "text-[#83d4c0]" },
                  { icon: Shield, text: "Avoid competition and bidding wars that needlessly drive the prices up", color: "text-amber-400" },
                  { icon: TrendingUp, text: "Double your margins on your flips without paying wholesale fees or commissions", color: "text-[#83d4c0]" },
                  { icon: Lock, text: "Stop depending on other people to bring you houses - control your own pipeline", color: "text-amber-400" },
                  { icon: Star, text: "Keep the best properties for yourself and wholesale the rest!", color: "text-[#83d4c0]" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -40, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: idx * 0.15, duration: 0.5, ease: "easeOut" }}
                    className="flex items-start gap-5"
                  >
                    <item.icon className={`w-7 h-7 ${item.color} shrink-0 mt-1`} />
                    <p className="text-xl sm:text-2xl text-white font-bold leading-snug">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-8 flex justify-center">
                <StrategyCallCTA />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION: BRRRR Strategy */}
        {/* ============================================ */}
        <section className="py-24 sm:py-32 px-6 border-t border-white/5 relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Headline */}
              <h2 className="text-white font-hero font-[900] text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.85] text-center">
                Use Homeflip.ai + BRRRR<br />Strategy and Build a Rental<br />Empire in Half the Time
              </h2>

              {/* Intro text */}
              <div className="text-xl sm:text-2xl text-white font-bold leading-relaxed space-y-6">
                <p>The BRRRR method is the most effective way to build a rental portfolio and create true generational wealth.</p>
                <p><span className="text-[#83d4c0]">Homeflip.ai</span> is the most effective way to buy off-market properties from 18¢ on the dollar.</p>
                <p>When you combine the BRRRR + <span className="text-[#83d4c0]">Homeflip.ai</span> is like strapping a jet pack to your real estate business.</p>
                <p>How does it work?</p>
                <p>The BRRRR method stands for:</p>
              </div>

              {/* BRRRR Timeline */}
              <div className="relative">
                {/* Timeline spine with glow */}
                <div className="absolute left-[18px] sm:left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-[#78ffdc]/0 via-[#78ffdc]/35 to-[#78ffdc]/0" />
                <div className="absolute left-[14px] sm:left-[18px] top-0 bottom-0 w-2 bg-gradient-to-b from-[#78ffdc]/0 via-[#78ffdc]/10 to-[#78ffdc]/0 blur-sm" />

                <div className="space-y-6">
                  {[
                    { icon: Home, step: "01", label: "BUY", title: "Acquire Below Market", description: "Find distressed, off-market probate properties at deep discounts using Homeflip.ai.", opacity: "opacity-100" },
                    { icon: Building, step: "02", label: "RENOVATE", title: "Force Appreciation", description: "Make targeted improvements that maximize ARV without over-renovating.", opacity: "opacity-90" },
                    { icon: Users, step: "03", label: "RENT", title: "Stabilize Cash Flow", description: "Place a quality tenant to cover debt service and operating expenses.", opacity: "opacity-[0.85]" },
                    { icon: DollarSign, step: "04", label: "REFINANCE", title: "Recover Capital", description: "Cash-out refinance at 70–80% LTV based on the new appraised value.", opacity: "opacity-75" },
                    { icon: ArrowRight, step: "05", label: "REPEAT", title: "Scale Intelligently", description: "Redeploy recovered capital into the next acquisition and compound growth.", opacity: "opacity-[0.65]" }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className={`flex items-start gap-4 sm:gap-6 ${item.opacity}`}
                    >
                      {/* Node */}
                      <div className="relative shrink-0">
                        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#83d4c0] flex items-center justify-center shadow-[0_0_0_5px_rgba(120,255,220,0.12),0_0_14px_rgba(120,255,220,0.28)]">
                          <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white opacity-85" />
                        </div>
                      </div>

                      {/* Content Block */}
                      <div className="flex-1 bg-white/[0.045] backdrop-blur-[18px] border border-white/[0.08] rounded-[14px] px-5 py-4 sm:px-6 sm:py-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-white/50 text-xs sm:text-sm tracking-[0.2em]">{item.step}</span>
                          <p className="text-white/85 text-xs sm:text-sm font-semibold tracking-[0.04em] uppercase">
                            {item.label}
                          </p>
                        </div>
                        <h4 className="text-white text-lg sm:text-xl font-medium mb-2">
                          {item.title}
                        </h4>
                        <p className="text-white/70 text-base sm:text-lg whitespace-nowrap">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Explanation text */}
              <div className="text-xl sm:text-2xl text-white font-bold leading-relaxed space-y-6">
                <p>The beauty of the BRRRR method is that when you refinance the property into a 20 or 30 year mortgage, you do a <span className="text-[#83d4c0]">"cash out" refinance</span>.</p>
                <p>This means that you get all of the cash you have invested in the property back when you refinance...</p>
              </div>

              {/* Free House headline */}
              <h3 className="text-white font-hero font-[900] text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter leading-[0.9] text-center">
                Congrats, You Now Have a Free House
              </h3>

              {/* Cash out refi GIF */}
              <div className="flex justify-center py-4">
                <Image
                  src="/images/cash-out-refi.gif"
                  alt="Cash out refinance"
                  width={500}
                  height={280}
                  className="rounded-xl"
                  unoptimized
                />
              </div>

              {/* BRRRR Example */}
              <div className="pt-6 space-y-4">
                <p className="text-xl sm:text-2xl text-white/70 leading-relaxed text-center">
                  Here's an example of a single family BRRRR property that one of our customers purchased using <span className="text-[#83d4c0] font-semibold">Homeflip.ai</span>:
                </p>

                {/* Before/After Images - Photos have text baked in */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  {/* Purchase Image */}
                  <div className="rounded-md overflow-hidden shadow-2xl">
                    <Image
                      src="/before-after/hawk/purchase.jpg"
                      alt="Property at purchase"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Refinance Image */}
                  <div className="rounded-md overflow-hidden shadow-2xl">
                    <Image
                      src="/before-after/hawk/cashout.jpg"
                      alt="Property after refinance"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Details Grid - Glassmorphic Boxes */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  {/* Purchase Details */}
                  <div className="bg-white/[0.045] backdrop-blur-[18px] border border-white/[0.08] rounded-[14px] p-5 sm:p-6 space-y-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                    <h4 className="text-white text-lg sm:text-xl font-medium">Purchase</h4>
                    <div className="space-y-3 text-sm sm:text-base">
                      <div className="flex justify-between">
                        <span className="text-white/50">Purchase Price:</span>
                        <span className="text-white font-bold">$94,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/50">Out of Pocket:</span>
                        <span className="text-white font-bold">$25,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/50">Hard Money Loan:</span>
                        <span className="text-white font-bold">$110,000</span>
                      </div>
                      <p className="text-white/40 text-xs italic pt-2 border-t border-white/10">Includes $40,000 in repair funds</p>
                    </div>
                  </div>

                  {/* Refinance Details */}
                  <div className="bg-white/[0.045] backdrop-blur-[18px] border border-white/[0.08] rounded-[14px] p-5 sm:p-6 space-y-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                    <h4 className="text-white text-lg sm:text-xl font-medium">Refinance</h4>
                    <div className="space-y-3 text-sm sm:text-base">
                      <div className="flex justify-between">
                        <span className="text-white/50">Cash Out Refi:</span>
                        <span className="text-[#83d4c0] font-bold">$45,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/50">30 Yr Fixed Loan:</span>
                        <span className="text-white font-bold">$160,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/50">Payment (P.I.T.I.):</span>
                        <span className="text-white font-bold">$1,216</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/50">Gross Rent:</span>
                        <span className="text-white font-bold">$1,915</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-white/10">
                        <span className="text-white/70 font-medium">Gross Cashflow:</span>
                        <span className="text-[#83d4c0] font-bold text-lg">$699/mo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-8 flex justify-center">
                <StrategyCallCTA />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION: First Step + More Customer Properties */}
        {/* ============================================ */}
        <section className="py-24 sm:py-32 px-6 border-t border-white/5 relative overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* First Step Headline */}
              <h2 className="text-white font-hero font-[900] text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.85] text-center">
                The First Step to Building a<br />Passive Rental Income with<br />Free Houses Is To...
              </h2>

              {/* CTA Button */}
              <div className="flex justify-center">
                <StrategyCallCTA />
              </div>

              {/* More Properties Headline */}
              <h3 className="text-white font-hero font-[900] text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter leading-[0.9] text-center pt-12">
                Here Are Even More Properties<br />From Our Happy Customers...
              </h3>

              {/* Customer Proof with ARV Arrow Layout */}
              <div className="space-y-16 pt-8">
                {/* Steph & Graem - Gatch */}
                <div className="space-y-4">
                  <p className="text-white font-bold text-xl">Steph & Graem <span className="text-white/50 font-normal text-base">(Milford)</span></p>
                  <div className="flex items-center gap-4">
                    <div className="relative flex-1 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                      <Image
                        src="/before-after/gatch/before-1.jpg"
                        alt="Property before"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <p className="text-amber-500 text-[10px] sm:text-xs font-black uppercase tracking-[0.15em]">Purchased</p>
                        <p className="text-amber-500 font-hero font-[900] text-xl sm:text-2xl tracking-tighter">$160,000</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center px-2 sm:px-4">
                      <span className="text-amber-500 font-bold text-lg sm:text-2xl italic">46%</span>
                      <ArrowRight className="w-8 h-8 sm:w-12 sm:h-12 text-amber-500" />
                      <span className="text-amber-500 font-bold text-xs sm:text-sm italic">of ARV</span>
                    </div>
                    <div className="relative flex-1 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                      <Image
                        src="/before-after/gatch/after-1.jpg"
                        alt="Property after"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tl from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-3 right-3 text-right">
                        <p className="text-amber-500 text-[10px] sm:text-xs font-black uppercase tracking-[0.15em]">Resold</p>
                        <p className="text-amber-500 font-hero font-[900] text-xl sm:text-2xl tracking-tighter">$350,000</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Frank - Northside */}
                <div className="space-y-4">
                  <p className="text-white font-bold text-lg">Frank (Northside)</p>
                  <div className="flex items-center gap-4">
                    <div className="relative flex-1 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                      <Image
                        src="/before-after/chambers/before-1.jpg"
                        alt="Property before"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <p className="text-amber-500 text-[10px] sm:text-xs font-black uppercase tracking-[0.15em]">Purchased</p>
                        <p className="text-amber-500 font-hero font-[900] text-xl sm:text-2xl tracking-tighter">$63,350</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center px-2 sm:px-4">
                      <span className="text-amber-500 font-bold text-lg sm:text-2xl italic">26%</span>
                      <ArrowRight className="w-8 h-8 sm:w-12 sm:h-12 text-amber-500" />
                      <span className="text-amber-500 font-bold text-xs sm:text-sm italic">of ARV</span>
                    </div>
                    <div className="relative flex-1 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                      <Image
                        src="/before-after/chambers/after-1.jpg"
                        alt="Property after"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tl from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-3 right-3 text-right">
                        <p className="text-amber-500 text-[10px] sm:text-xs font-black uppercase tracking-[0.15em]">Resold</p>
                        <p className="text-amber-500 font-hero font-[900] text-xl sm:text-2xl tracking-tighter">$244,000</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Kassie - Kay - Full StunningTransformation style */}
              <StunningTransformation
                title="Kay Dr"
                location="Milford, OH"
                beforeImage="/before-after/kay/before-1.jpg"
                afterImage="/before-after/kay/after-1.jpg"
                purchasePrice="$160,000"
                resoldPrice="$370,000"
                customerPhoto="/before-after/headshots/kassie-v2.jpg"
                customerName="Kassie"
              />

              {/* CTA Button */}
              <div className="pt-8 flex justify-center">
                <StrategyCallCTA />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 6: Automating The Data Grind / Call Agenda #4 */}
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
        {/* SECTION 7: The AI Advantage / Call Agenda #5 */}
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
                  Agenda Item #5
              </p>
                <h2 className="text-white font-hero font-[900] text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
                  The <span className="text-[#83d4c0] italic">Scale Roadmap</span>
              </h2>
                <p className="text-xl sm:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed mt-8">
                  The final part of our call is building your <strong className="text-white">Execution Roadmap</strong>. We'll show you how the AI handles the heavy lifting so you can focus on closing.
                </p>
                </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { icon: Search, title: "Daily Court Sync", desc: "How we monitor 3,000+ portals 24/7. New deals hit your dashboard in hours—not weeks." },
                  { icon: TrendingUp, title: "Timeline Intel™", desc: "How we predict who is ready to sell now—not just who is on a list." },
                  { icon: Zap, title: "PB Scoring", desc: "How AI assigns scores based on filing velocity so you focus on high-potential deals." },
                  { icon: Shield, title: "Guided Outreach", desc: "The exact, respectful workflows designed specifically for probate families." }
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
        {/* SECTION 8: Why I'm Doing These Calls */}
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
                    <div className="absolute inset-0 bg-[#83d4c0]/5 z-0" />
                    <div className="absolute inset-0 flex items-center justify-center text-white/5 font-hero font-[900] text-6xl uppercase tracking-tighter rotate-12 z-0">Gary Bailey</div>
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
                        After 15 years and over $50M in transactions, I realized that the best deals aren't found by working harder—they're found by having better systems. I'm doing these deep-dive calls personally because I want to ensure the right investors are using this to dominate their local markets.
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
                  The Full Agenda
                </p>
                <h2 className="text-white font-hero font-[900] text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
                  Your Discovery <br />
                  <span className="text-[#83d4c0] italic">Game Plan</span>
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
                        <h4 className="text-2xl font-black text-white group-hover:text-[#83d4c0] transition-colors uppercase tracking-tight mb-2">
                          {idx + 1}. {item.title}
                        </h4>
                        <p className="text-white/50 leading-relaxed text-lg">{item.desc}</p>
                  </div>
                    </motion.div>
                  ))}
                </div>

                <GlassCard className="border-[#83d4c0]/20 !p-12 text-center">
                  <div className="mb-10 inline-block p-4 rounded-full bg-[#83d4c0]/10 border border-[#83d4c0]/20">
                    <Calendar className="w-10 h-10 text-[#83d4c0]" />
                  </div>
                  <h3 className="text-4xl font-hero font-[900] text-white uppercase tracking-tighter mb-6 leading-tight">
                    Lock In Your <br />County Deep-Dive
                  </h3>
                  <p className="text-xl text-white/60 mb-10 italic">
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


