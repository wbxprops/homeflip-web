'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
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
const StrategyCallCTA = ({ className = "", source = "" }: { className?: string; source?: string }) => (
  <div className={`relative group ${className}`}>
    {/* Animated background glow */}
    <div className="absolute -inset-1 bg-gradient-to-r from-[#83d4c0] via-[#0891b2] to-[#83d4c0] rounded-[2.2rem] blur-lg opacity-40 group-hover:opacity-100 group-hover:blur-xl transition-all duration-700 group-hover:duration-200 animate-pulse-glow" />

  <Link
    href={`/ppm-pre-strategy-survey${source ? `?cta=${source}` : ''}`}
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
    const notifications = [
      // Ohio
      { name: 'John D.', action: 'just claimed Butler County, OH' },
      { name: 'Sarah W.', action: 'booked a strategy call' },
      { name: 'Mike R.', action: 'joined the waitlist for Clermont County, OH' },
      // Indiana
      { name: 'David K.', action: 'just claimed Marion County, IN' },
      { name: 'Lisa M.', action: 'booked a strategy call' },
      { name: 'Chris P.', action: 'joined the waitlist for Hamilton County, IN' },
      { name: 'Amanda T.', action: 'just claimed Allen County, IN' },
      // Massachusetts
      { name: 'Brian S.', action: 'just claimed Middlesex County, MA' },
      { name: 'Rachel K.', action: 'joined the waitlist for Suffolk County, MA' },
      { name: 'Kevin L.', action: 'booked a strategy call' },
      { name: 'Emily R.', action: 'just claimed Worcester County, MA' },
      // Texas
      { name: 'Marcus J.', action: 'joined the waitlist for Harris County, TX' },
      { name: 'Jennifer H.', action: 'just claimed Dallas County, TX' },
      // Florida
      { name: 'Robert N.', action: 'booked a strategy call' },
      { name: 'Stephanie G.', action: 'just claimed Orange County, FL' },
      // Arizona
      { name: 'Tony M.', action: 'joined the waitlist for Maricopa County, AZ' },
    ];

    let index = 0;
    const cycle = () => {
      setNotif(notifications[index]);
      index = (index + 1) % notifications.length;
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

// Feature Section - fixed background with scrolling card
type FeatureSection3DProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  screenshotSrc: string;
  screenshotAlt?: string;
  cardPosition?: 'left' | 'right';
};

const FeatureSection3D = ({
  eyebrow,
  title,
  subtitle,
  screenshotSrc,
  screenshotAlt = '',
  cardPosition = 'left'
}: FeatureSection3DProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"] // 0 when section enters, 1 when it leaves
  });

  // Card movement: tuned for 85vh section height
  const cardYRaw = useTransform(scrollYProgress, [0.15, 0.7], [-50, 600]);
  // Add spring smoothing for buttery animation
  const cardY = useSpring(cardYRaw, { stiffness: 100, damping: 30 });

  // Card fades out: visible until 50%, gone by 65%
  const cardOpacityRaw = useTransform(scrollYProgress, [0, 0.5, 0.65], [1, 1, 0]);
  const cardOpacity = useSpring(cardOpacityRaw, { stiffness: 100, damping: 30 });

  // Background brightens as card fades (50% -> 100%)
  const bgOpacityRaw = useTransform(scrollYProgress, [0, 0.4, 0.55], [0.5, 0.5, 1]);
  const bgOpacity = useSpring(bgOpacityRaw, { stiffness: 100, damping: 30 });

  return (
    <>
      {/* Desktop: Scroll-controlled card over sticky background */}
      <div
        ref={sectionRef}
        className="hidden md:block relative"
        style={{ height: '85vh' }}
      >
        {/* STICKY BACKGROUND - stays centered in viewport */}
        <div className="sticky top-0 h-screen pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-[min(1100px,90vw)]"
              style={{
                opacity: bgOpacity,
                maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)',
                WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)'
              }}
            >
              <Image
                src={screenshotSrc}
                alt={screenshotAlt}
                width={1200}
                height={540}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* CARD - position controlled by scroll progress */}
        <motion.div
          className="absolute top-0 left-0 right-0 px-6 z-10"
          style={{ y: cardY, opacity: cardOpacity }}
        >
          <div className="max-w-6xl mx-auto">
            <div className={`max-w-xl ${cardPosition === 'right' ? 'ml-auto' : ''}`}>
              <div
                className="rounded-2xl p-8 md:p-10 backdrop-blur-xl border border-white/10"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 100%)',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.7)'
                }}
              >
                {eyebrow && (
                  <p className="text-[#83d4c0] text-xs font-black uppercase tracking-[0.32em] mb-4">
                    {eyebrow}
                  </p>
                )}
                <h3 className="text-white font-hero font-[900] text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter leading-[0.95] mb-5">
                  {title}
                </h3>
                {subtitle && (
                  <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile: Simple stacked layout */}
      <div className="md:hidden py-16 px-6">
        <div className="space-y-8">
          <div
            className="rounded-2xl p-6 backdrop-blur-xl border border-white/10"
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.80) 100%)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.6)'
            }}
          >
            {eyebrow && (
              <p className="text-[#83d4c0] text-xs font-black uppercase tracking-[0.32em] mb-3">
                {eyebrow}
              </p>
            )}
            <h3 className="text-white font-hero font-[900] text-3xl sm:text-4xl uppercase tracking-tighter leading-[0.95] mb-4">
              {title}
            </h3>
            {subtitle && (
              <p className="text-white/80 text-base leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
          <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl opacity-60">
            <Image
              src={screenshotSrc}
              alt={screenshotAlt}
              width={1200}
              height={540}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

// Action-Oriented Feature instance
const ActionOrientedFeature = () => (
  <FeatureSection3D
    eyebrow="Built for Action"
    title="Action-Oriented"
    subtitle="Most CRMs dump data on you and leave you to figure out what to do with it. Homeflip.ai guides you with actions rather than simply presenting data."
    screenshotSrc="/features/homeflip-dashboard.webp"
    screenshotAlt="Homeflip.ai action-based dashboard"
    cardPosition="left"
  />
);

// Timeline Intelligence Feature instance
const TimelineIntelligenceFeature = () => (
  <FeatureSection3D
    eyebrow="Perfect Timing"
    title="Timeline Intelligence"
    subtitle="Know exactly when to act. Your smart timeline shows which leads need attention right now—so you're never too early, never too late, and never miss the moment."
    screenshotSrc="/features/homeflip-tasks.webp"
    screenshotAlt="Homeflip.ai task timeline view"
    cardPosition="right"
  />
);

// Daily Case Flow Feature instance
const DailyCaseFlowFeature = () => (
  <FeatureSection3D
    eyebrow="Always Fresh"
    title="Daily Case Flow"
    subtitle="No more stale email lists or messy CSV files. Fresh probate cases flow directly into your dashboard every day—verified, organized, and ready to work."
    screenshotSrc="/features/homeflip-cases.webp"
    screenshotAlt="Homeflip.ai daily cases calendar view"
    cardPosition="left"
  />
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
    <StrategyCallCTA source="inline" />
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
              HOMEFLIP.AI DELIVERS probate houses on autopilot as low as 26% of the ARV
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/60 text-lg sm:text-xl md:text-2xl font-normal mb-10 max-w-none mx-auto leading-[1.1] md:whitespace-nowrap"
            >
              The Exact Blueprint We've Used to Buy Over 100 Off-Market Houses in the Past 24 Months
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-20"
            >
              <StrategyCallCTA source="hero" />
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* LETTER PART 1 */}
        {/* ============================================ */}
        <section className="pt-20 sm:pt-28 pb-8 sm:pb-12 px-6 border-t border-white/5 relative overflow-hidden">
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

                <p className="border-l-2 border-[#83d4c0] pl-6 sm:pl-8 py-2 text-white font-bold">
                  In fact, over the past 24 months we've bought 97 houses at an average of 38% of ARV…just in our market.
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
                  Since we started in 2005, we have over <span className="text-white font-bold">2,000 deals</span> under our belt (and counting).
                </p>
                <p>
                  Well that's great for us, but what does that mean to you?
                </p>
                <p className="text-white font-medium">
                  It means that we know a secret that other investors don't know...
                </p>
                <p className="text-[#83d4c0] font-bold text-2xl sm:text-3xl">
                  And the secret is probate.
                </p>
                <p>
                  Throughout booms and busts, pandemics and crazy election cycles...
                </p>
                <p className="text-white font-medium">
                  Probate has been our most consistent source of properties. And the most profitable.
                </p>
                <p className="border-l-2 border-amber-500 pl-6 sm:pl-8 py-2 text-white font-bold">
                  But this "silver tsunami" of probate properties won't last forever. So the time to take action is now.
                </p>
                <p>
                  If you are finally ready to build a wildly successful real estate investing business,
                </p>
                <p className="text-white font-medium">
                  There is no better time than now.
                </p>
                <p>
                  So book your strategy call today and find out how you can ride the wave of probate properties,
                </p>
                <p className="text-white font-medium">
                  And finally make your real estate investing dreams a reality.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-8 flex flex-col items-center">
                <StrategyCallCTA source="brief-outline" />
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
                  { icon: AlertTriangle, text: "Warning: Why expensive real estate courses and hours of guru videos won't buy you a single house...and what actually works instead", color: "text-red-500" },
                  { icon: TrendingUp, text: "The wave of silver tsunami probate houses flooding your market right now...and how to position yourself to buy them", color: "text-[#83d4c0]" },
                  { icon: AlertCircle, text: "Why the \"tried and true\" ways of buying properties are no longer working, and how you can adjust for the new economy", color: "text-amber-500" },
                  { icon: Zap, text: "We'll uncover what's actually holding you back from your real estate goals", color: "text-[#83d4c0]" }
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
                <StrategyCallCTA source="agenda-overview" />
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
            title="Gatch"
            location="Milford, OH"
            beforeImage="/before-after/gatch/before-1.jpg"
            afterImage="/before-after/gatch/after-1.jpg"
            purchasePrice="$160,000"
            resoldPrice="$350,000"
            customerPhoto="/before-after/headshots/steph-graem.jpg"
            customerName="Steph & Graem"
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
                  Our Plug-and-Play Platform<br className="hidden md:block" /> Will Have You Buying Probate<br className="hidden md:block" /> Properties in Less Than 30 Days
                </h2>
              </div>

              <div className="space-y-8 max-w-4xl mx-auto">
                {[
                  { icon: Zap, text: "Get immediate access to probate cases and sellers in your market", color: "text-[#83d4c0]" },
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
                <StrategyCallCTA source="plug-and-play" />
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
                <p><span className="text-[#83d4c0]">Homeflip.ai</span> is the most effective way to buy probate properties from 26¢ on the dollar.</p>
                <p>When you combine BRRRR + <span className="text-[#83d4c0]">Homeflip.ai</span>, it's like strapping a jet pack to your real estate business.</p>
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
                  Here's an example of a BRRRR property from one of our customers:
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

              {/* First Step Headline */}
              <h2 className="text-white font-hero font-[900] text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.85] text-center pt-12">
                The First Step to Building a<br />Passive Rental Income with<br />Free Houses Is To...
              </h2>

              {/* CTA Button */}
              <div className="pt-8 flex justify-center">
                <StrategyCallCTA source="brrrr-first-step" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION: The Challenge with Probate */}
        {/* ============================================ */}
        <section className="py-24 sm:py-32 px-6 border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="text-center">
                <p className="text-amber-400 text-sm font-black uppercase tracking-[0.4em] mb-4">
                  The Reality
                </p>
                <h2 className="text-white font-hero font-[900] text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
                  The Challenge<br />
                  <span className="text-amber-500/60 italic">with Probate</span>
                </h2>
                <p className="text-xl sm:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                  Probate is an incredible opportunity. But there's a reason most investors never figure it out.
                </p>
              </div>

              {/* 5 Pain Points */}
              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    title: "Finding the Cases",
                    desc: "Every county has a different court system. No central database. You're hunting through 3,000+ different portals—all with different layouts, login requirements, and update schedules."
                  },
                  {
                    num: "02",
                    title: "Verifying Property",
                    desc: "Most probate filings don't list real estate. You find a case... then spend hours trying to figure out if there's even a house to buy."
                  },
                  {
                    num: "03",
                    title: "Finding the Right Contact",
                    desc: "Who do you call? The heir? The executor? The attorney? And once you figure that out—good luck finding a phone number that works."
                  },
                  {
                    num: "04",
                    title: "Timing the Outreach",
                    desc: "Call too early, you're insensitive. Call too late, they've already sold or listed with an agent. The window is small and you're flying blind."
                  },
                  {
                    num: "05",
                    title: "Keeping Up with Volume",
                    desc: "By the time you manually research one lead, 10 more have been filed. It's a full-time job just to stay current—and you still have deals to close."
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                    className="group"
                  >
                    <div className="flex items-start gap-5 sm:gap-8 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-500/20 hover:bg-white/[0.04] transition-all duration-300">
                      {/* Number */}
                      <div className="shrink-0">
                        <span className="text-amber-500/40 font-hero font-[900] text-4xl sm:text-5xl tracking-tighter group-hover:text-amber-500/60 transition-colors">
                          {item.num}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <h4 className="text-white font-bold text-xl sm:text-2xl tracking-tight">
                          {item.title}
                        </h4>
                        <p className="text-white/50 text-base sm:text-lg leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Transition text */}
              <div className="text-center pt-8">
                <p className="text-2xl sm:text-3xl text-white/80 font-medium leading-relaxed max-w-2xl mx-auto">
                  This is why most investors give up on probate after a few weeks.
                </p>
                <p className="text-5xl sm:text-6xl md:text-7xl font-hero font-[900] text-[#83d4c0] uppercase tracking-tighter mt-6">
                  We didn't.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION: How Homeflip.ai Solves It */}
        {/* ============================================ */}
        <section className="py-24 sm:py-32 px-6 border-t border-white/5 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#83d4c0]/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="text-center">
                <p className="text-[#83d4c0] text-sm font-black uppercase tracking-[0.4em] mb-4">
                  The Solution
                </p>
                <h2 className="text-white font-hero font-[900] text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
                  Introducing<br />
                  <span className="text-[#83d4c0]">Homeflip.ai</span>
                </h2>
                <p className="text-xl sm:text-2xl text-white/60 mx-auto leading-relaxed md:whitespace-nowrap">
                  Built by investors who've done 2,000+ deals over 20 years...not gurus selling courses.
                </p>
              </div>

              {/* Problem → Solution Grid */}
              <div className="space-y-4">
                {[
                  {
                    problem: "Hunting through 3,000+ different court portals",
                    solution: "We monitor court systems across the country automatically—new cases hit your dashboard daily"
                  },
                  {
                    problem: "No way to know if there's even a house to buy",
                    solution: "We match every case to property records so you only see leads with real estate"
                  },
                  {
                    problem: "Can't find who to contact or how to reach them",
                    solution: "We find heirs, executors, and attorneys—plus phone numbers and addresses"
                  },
                  {
                    problem: "Flying blind on timing—too early or too late",
                    solution: "We track case milestones so you know exactly when families are ready to talk"
                  },
                  {
                    problem: "Can't keep up with the volume manually",
                    solution: "Fresh, qualified leads delivered to you every day—no research required"
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ delay: idx * 0.08, duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/5">
                      {/* Problem Side */}
                      <div className="bg-amber-500/[0.03] p-5 sm:p-6 flex items-center gap-4 border-b md:border-b-0 md:border-r border-white/5">
                        <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                          <span className="text-amber-500 text-xs font-black">✕</span>
                        </div>
                        <p className="text-white/50 text-base sm:text-lg leading-snug">
                          {item.problem}
                        </p>
                      </div>

                      {/* Solution Side */}
                      <div className="bg-[#83d4c0]/[0.03] p-5 sm:p-6 flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#83d4c0]/10 flex items-center justify-center shrink-0">
                          <CheckCircle className="w-4 h-4 text-[#83d4c0]" />
                        </div>
                        <p className="text-white text-base sm:text-lg leading-snug font-medium">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-8 flex flex-col items-center">
                <StrategyCallCTA source="introducing-homeflip" />
                <p className="mt-6 text-white/40 text-sm sm:text-base">
                  See how it works for your market →
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION: All-In-One Platform Features */}
        {/* ============================================ */}
        <section className="py-24 sm:py-32 px-6 border-t border-white/5 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-20"
            >
              {/* Section Header */}
              <div className="text-center">
                <p className="text-[#83d4c0] text-sm font-black uppercase tracking-[0.4em] mb-4">
                  The All-In-One Probate Investing Platform
                </p>
                <h2 className="text-white font-hero font-[900] text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.85]">
                  From Lead to Close
                </h2>
              </div>

              {/* Feature 1: Action-Oriented */}
              <ActionOrientedFeature />

              {/* Feature 2: Timeline Intelligence */}
              <TimelineIntelligenceFeature />

              {/* Feature 3: Daily Case Flow */}
              <DailyCaseFlowFeature />

            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION: See the Platform in Action */}
        {/* ============================================ */}
        <section className="py-12 sm:py-16 px-6 bg-black relative overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Section Header */}
              <div className="text-center space-y-4">
                <h2 className="text-white font-hero font-[900] text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter leading-[0.9]">
                  See the Platform in Action
                </h2>
                <p className="text-lg text-white/60 max-w-2xl mx-auto">
                  Select a date below and click "Reveal" to see how it works.
                </p>
              </div>

              {/* Interactive Case Claim Demo */}
              <CaseClaimDemo />

            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION: More Customer Properties */}
        {/* ============================================ */}
        <section className="py-24 sm:py-32 px-6 border-t border-white/5 relative overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* More Properties Headline */}
              <h3 className="text-white font-hero font-[900] text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.9] text-center">
                Here Are Even More Properties<br />From Our Happy Customers...
              </h3>

              {/* Customer Proof with ARV Arrow Layout */}
              <div className="space-y-16 pt-8">
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

              {/* Matt - Firestone */}
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
                <StrategyCallCTA source="more-properties" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 8: Why I'm Doing These Calls */}
        {/* ============================================ */}
        <section className="py-24 sm:py-32 px-6 border-t border-white/5 relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
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
                  Built by Investors<br />
                  <span className="text-white/40 italic">For Investors.</span>
                </h2>
              </div>

              <GlassCard className="!p-0 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0 items-stretch">
                  <div className="relative min-h-[400px] md:min-h-[500px] group overflow-hidden">
                    <Image
                      src="/images/gary-bailey.jpg"
                      alt="Gary Bailey"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                    <div className="absolute bottom-6 left-6 z-20">
                      <h4 className="text-2xl font-hero font-[900] text-white uppercase tracking-tighter">Gary Bailey</h4>
                      <p className="text-[#83d4c0] text-[10px] font-black uppercase tracking-widest">Founder</p>
                    </div>
                  </div>

                  <div className="px-8 sm:px-12 py-6 sm:py-8 space-y-8 bg-white/[0.01] flex flex-col justify-start">
                    <div className="space-y-6">
                      <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-medium">
                        "I built Homeflip.ai because I believe real estate investors don't need to spend thousands of dollars on marketing or coaching to be successful."
                      </p>
                      <p className="text-lg text-white/60 leading-relaxed">
                        During the beta launch of Homeflip.ai, I'm doing these deep-dive calls personally because I want to ensure the right investors are using this to dominate their local markets.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2 text-white/40 text-xs font-black uppercase tracking-widest">
                        <CheckCircle className="w-3.5 h-3.5 text-[#83d4c0]" />
                        20+ Years Experience
                      </div>
                      <div className="flex items-center gap-2 text-white/40 text-xs font-black uppercase tracking-widest">
                        <CheckCircle className="w-3.5 h-3.5 text-[#83d4c0]" />
                        Over 2K Properties Closed
                      </div>
                    </div>

                    <div className="pt-4 flex items-center gap-6">
                      <p className="font-serif italic text-3xl text-white/80 select-none">Gary Bailey</p>
                      <Link
                        href="/ppm-pre-strategy-survey?cta=founder-bio"
                        className="px-4 py-2 rounded-full bg-[#83d4c0] text-[#0a1421] text-sm font-bold hover:bg-[#6bc4b0] transition-colors"
                      >
                        Book a Call with Gary
                      </Link>
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
                    { title: "Implementation Roadmap", desc: "A tailored plan to reach families at the exact moment they're ready to sell." },
                    { title: "Scale Assessment", desc: "Review your current team and systems to ensure you have the resources to reach your real estate investing goals." }
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
                  <p className="text-xl text-white/60 italic">
                    "No obligation. No pressure. Just massive clarity on how to dominate your market."
                  </p>
                </GlassCard>
              </div>

              {/* Final CTA */}
              <div className="pt-12 text-center">
                <StrategyCallCTA source="final-cta" />
                <div className="mt-8 flex flex-col items-center gap-4">
                  <div className="inline-flex items-center gap-3 px-6 py-2 bg-[#83d4c0]/10 border border-[#83d4c0]/20 rounded-full">
                    <Star className="w-4 h-4 text-[#83d4c0]" />
                    <span className="text-[#83d4c0] text-xs font-black uppercase tracking-widest">Founder Pricing Active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/5 relative z-10 bg-black/50 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <Image
                src="/homeflip-logo-dark.png"
                alt="Homeflip.ai"
                width={160}
                height={40}
                className="h-8 w-auto"
              />
              <div className="text-white/30 text-[10px] font-black uppercase tracking-widest text-center md:text-left space-y-1">
                <p>© 2026 WhiteBox Academy, LLC. All rights reserved.</p>
                <p>7800 Cooper Road, Suite 201, Cincinnati, OH 45242</p>
              </div>
            </div>

            <div className="flex gap-8 text-white/40 text-[10px] font-black uppercase tracking-widest">
              <Link href="/privacy" className="hover:text-[#83d4c0] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#83d4c0] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}


