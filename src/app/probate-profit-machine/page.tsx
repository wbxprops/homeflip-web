'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { X, Phone, Search, TrendingUp, Landmark, Target, Compass } from 'lucide-react';

export default function ProbateProfitMachinePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);

  // Ref for Silver Tsunami section scroll tracking
  const silverTsunamiRef = useRef<HTMLElement>(null);
  const { scrollYProgress: tsunamiProgress } = useScroll({
    target: silverTsunamiRef,
    offset: ["start end", "end start"] // track from when section enters to when it exits
  });

  // Check if mobile for reduced parallax (SSR-safe)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reduced transforms for mobile (100px vs 400px), full effect on desktop
  const mobileOffset = isMobile ? 100 : 400;
  const mobileYOffset = isMobile ? 80 : 300;

  // Transform values for newspaper (enters from bottom-left, exits to right)
  const newspaperX = useTransform(tsunamiProgress, [0, 0.45, 0.55, 1], [-mobileOffset, 0, 0, mobileOffset]);
  const newspaperY = useTransform(tsunamiProgress, [0, 0.45, 0.55, 1], [mobileYOffset, 0, 0, 0]);
  const newspaperOpacity = useTransform(tsunamiProgress, [0, 0.35, 0.65, 1], [0, 1, 1, 0]);

  // Transform values for chart (enters from right, exits to bottom-left)
  const chartX = useTransform(tsunamiProgress, [0, 0.45, 0.55, 1], [mobileOffset, 0, 0, -mobileOffset]);
  const chartY = useTransform(tsunamiProgress, [0, 0.45, 0.55, 1], [0, 0, 0, mobileYOffset]);
  const chartOpacity = useTransform(tsunamiProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

  // Hide header on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide header after scrolling down 20px
      if (currentScrollY > 20) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Format phone number as (XXX) XXX-XXXX
  // Strips leading "1" country code if autofill adds it
  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    // Strip leading "1" country code if present (from autofill)
    const digits = numbers.startsWith('1') ? numbers.slice(1) : numbers;
    const limited = digits.slice(0, 10);
    if (limited.length === 0) return '';
    if (limited.length <= 3) return `(${limited}`;
    if (limited.length <= 6) return `(${limited.slice(0, 3)}) ${limited.slice(3)}`;
    return `(${limited.slice(0, 3)}) ${limited.slice(3, 6)}-${limited.slice(6)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      await supabase
        .from('prospect_responses')
        .insert([{
          email: formData.email,
          name: formData.firstName,
          phone: formData.phone,
          source: 'probate_profit_machine',
        }]);

      await supabase
        .from('prospects')
        .insert([{
          name: formData.firstName,
          email: formData.email,
          phone: formData.phone,
          source: 'probate_profit_machine',
        }]);

      setStatus('success');
      window.location.href = '/probate-profit-machine/thank-you';
    } catch (error: unknown) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const inputStyles = "w-full px-4 py-4 rounded-xl border-2 border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#83d4c0]/50 focus:border-[#83d4c0] transition-all text-lg";

  // CTA Button Component - Matches main site btn-gradient
  const CTAButton = ({ className = '', size = 'large' }: { className?: string; size?: 'large' | 'medium' }) => (
    <button
      onClick={openModal}
      className={`btn-gradient inline-flex items-center justify-center rounded-2xl font-hero font-[900] uppercase tracking-tighter shadow-xl shadow-[#83d4c0]/20 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto ${
        size === 'large'
          ? 'px-8 sm:px-16 py-6 sm:py-7 text-2xl sm:text-4xl md:text-5xl'
          : 'px-6 sm:px-12 py-5 sm:py-6 text-2xl sm:text-4xl'
      } ${className}`}
    >
      Download Your Free Guide
    </button>
  );

  // Card carousel with scroll-snap - iOS picker style
  const InfiniteCardScroller = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const hasInitialized = useRef(false);
    const [focusedIndex, setFocusedIndex] = useState(1);

    // Pre-card + main cards (no numbering)
    const preCard = {
      title: 'Probate Profit Machine',
      desc: 'A step-by-step system for finding and closing probate deals.',
      isPreCard: true
    };

    const cards = [
      { title: 'Proven Call Scripts', desc: 'Say exactly what works. Skip the 20 years of |trial| and error.', highlight: 'trial' },
      { title: 'Follow-Up Cadence', desc: 'Stay top of mind without being |pushy|. Tailored to your style.', highlight: 'pushy' },
      { title: 'Timeline Intelligence', desc: 'Know when an estate is ready to sell — |before| other investors notice.', highlight: 'before' },
      { title: 'How to Source Probate Leads', desc: 'Find |hidden| deals in your market that others overlook.', highlight: 'hidden' },
      { title: 'Online Community', desc: 'Get answers fast from investors who are |actually| closing deals.', highlight: 'actually' },
      { title: 'Live Coaching Calls', desc: 'Real guidance. Real deals. |Weekly| sessions for long-term success.', highlight: 'weekly' },
      { title: 'The Complete Playbook', desc: 'Every strategy. Every template. Learn at your |own| pace.', highlight: 'own' },
    ];

    // All cards including pre-card (index 0 = pre-card, 1+ = main cards)
    const allCards = [preCard, ...cards.map(c => ({ ...c, isPreCard: false }))];

    // Detect which card is centered
    useEffect(() => {
      const container = scrollRef.current;
      if (!container) return;

      const handleScroll = () => {
        const containerRect = container.getBoundingClientRect();
        const centerY = containerRect.top + containerRect.height / 2;
        const cardElements = container.querySelectorAll('[data-card-index]');

        let closestIndex = 0;
        let closestDistance = Infinity;

        cardElements.forEach((card) => {
          const index = parseInt(card.getAttribute('data-card-index') || '0');
          const cardRect = card.getBoundingClientRect();
          const cardCenterY = cardRect.top + cardRect.height / 2;
          const distance = Math.abs(centerY - cardCenterY);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        setFocusedIndex(closestIndex);
      };

      // Scroll to show first main card (index 1) centered on load - only once
      if (!hasInitialized.current) {
        hasInitialized.current = true;
        setTimeout(() => {
          const firstMainCard = container.querySelector('[data-card-index="1"]') as HTMLElement;
          if (firstMainCard) {
            // Use scrollTop on container instead of scrollIntoView to avoid page scroll
            const cardTop = firstMainCard.offsetTop;
            const cardHeight = firstMainCard.offsetHeight;
            const containerHeight = container.offsetHeight;
            container.scrollTop = cardTop - (containerHeight / 2) + (cardHeight / 2);
          }
          handleScroll();
        }, 100);
      }

      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate visual state based on distance from focused card
    const getCardState = (index: number, isPreCard: boolean) => {
      const distance = Math.abs(index - focusedIndex);

      // Pre-card is always slightly dimmer
      if (isPreCard) {
        return { scale: 0.96, brightness: 0.7, borderWidth: 1, borderOpacity: 0.15, dotOpacity: 0.2, dotSize: 6, dotAnimate: false };
      }

      if (distance === 0) {
        // Featured card - full signal
        return { scale: 1.02, brightness: 1, borderWidth: 2, borderOpacity: 0.8, dotOpacity: 1, dotSize: 8, dotAnimate: true };
      } else if (distance === 1) {
        // Adjacent cards - partial signal
        return { scale: 0.98, brightness: 0.85, borderWidth: 1, borderOpacity: 0.3, dotOpacity: 0.5, dotSize: 7, dotAnimate: false };
      } else {
        // Distant cards - low signal
        return { scale: 0.96, brightness: 0.75, borderWidth: 1, borderOpacity: 0.2, dotOpacity: 0.2, dotSize: 6, dotAnimate: false };
      }
    };

    return (
      <div className="relative overflow-hidden h-[400px] sm:h-[480px]">
        {/* Top fade gradient */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />
        {/* Bottom fade gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent z-10 pointer-events-none" />

        {/* Scroll container with CSS snap */}
        <div
          ref={scrollRef}
          className="h-full overflow-y-auto scrollbar-hide px-2"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollSnapType: 'y proximity',
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: 'smooth'
          }}
        >
          {/* Top spacer - adjusted to center featured card with "Probate Profit" headline */}
          <div className="h-[5px]" />

          {allCards.map((card, index) => {
            const state = getCardState(index, card.isPreCard);
            const isFocused = index === focusedIndex;

            return (
              <div
                key={index}
                data-card-index={index}
                className="h-[140px] flex items-center justify-center"
                style={{ scrollSnapAlign: 'center' }}
              >
                <div
                  className="w-full transition-all duration-300 ease-out"
                  style={{
                    transform: `scale(${state.scale})`,
                    filter: `brightness(${state.brightness})`,
                  }}
                >
                  <div
                    className={`relative bg-[#0a0f14] rounded-2xl transition-all duration-500 ${isFocused && !card.isPreCard ? 'p-7' : 'p-6'}`}
                    style={{
                      border: `${state.borderWidth}px solid rgba(131, 212, 192, ${state.borderOpacity})`,
                      boxShadow: 'inset 0 1px 0 rgba(131,212,192,0.03)',
                    }}
                  >
                    {/* Top glow - centered, 60% width */}
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] transition-all duration-500 pointer-events-none"
                      style={{
                        background: isFocused && !card.isPreCard ? 'radial-gradient(ellipse at center, rgba(131,212,192,0.6) 0%, transparent 70%)' : 'transparent',
                        boxShadow: isFocused && !card.isPreCard ? '0 -15px 40px 10px rgba(131,212,192,0.2)' : 'none',
                      }}
                    />
                    {/* Bottom glow - centered, 60% width */}
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] transition-all duration-500 pointer-events-none"
                      style={{
                        background: isFocused && !card.isPreCard ? 'radial-gradient(ellipse at center, rgba(131,212,192,0.6) 0%, transparent 70%)' : 'transparent',
                        boxShadow: isFocused && !card.isPreCard ? '0 15px 40px 10px rgba(131,212,192,0.2)' : 'none',
                      }}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#83d4c0]/[0.02] to-transparent pointer-events-none" />
                    <div className="relative">
                      <h3 className={`font-bold mb-2 transition-all duration-300 flex items-center gap-2.5 ${card.isPreCard ? 'text-lg italic text-slate-300' : 'text-xl text-white'}`}>
                        {/* Signal dot - indicates focus/relevance */}
                        {!card.isPreCard && (
                          <span
                            className={`rounded-full flex-shrink-0 transition-all duration-500 ${state.dotAnimate ? 'animate-dot-breathe' : ''}`}
                            style={{
                              width: `${state.dotSize}px`,
                              height: `${state.dotSize}px`,
                              backgroundColor: `rgba(131, 212, 192, ${state.dotOpacity})`,
                            }}
                          />
                        )}
                        {card.title}
                      </h3>
                      <p className={`text-base transition-all duration-300 ${isFocused ? 'text-slate-300 leading-relaxed' : 'text-slate-500'}`}>
                        {isFocused && !card.isPreCard && card.desc ? (
                          // Render with highlighted word in teal
                          card.desc.split('|').map((part: string, i: number) =>
                            i % 2 === 1 ? <span key={i} className="text-[#83d4c0] font-medium">{part}</span> : part
                          )
                        ) : (
                          // Remove highlight markers for non-focused cards
                          card.desc?.replace(/\|/g, '')
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Bottom spacer */}
          <div className="h-[140px]" />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white selection:bg-[#83d4c0]/20">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-white rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-2xl overflow-hidden"
          >
            <button onClick={closeModal} className="absolute top-2 right-3 text-white/70 hover:text-white transition-colors z-10">
              <X className="w-5 h-5" />
            </button>

            {/* Animated Progress Bar - Full width at top */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-slate-800 overflow-hidden">
              {/* Animated fill */}
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '90%' }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-[#83d4c0] to-[#0891b2] relative"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </motion.div>
              {/* "Almost There!" text inside bar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-sm uppercase tracking-wide drop-shadow-md">
                  Almost There!
                </span>
              </div>
            </div>

            {/* Logo - with top padding for progress bar */}
            <div className="flex justify-center mt-8 mb-4">
              <img
                src="/logo-wordmark-light.png"
                alt="Homeflip.ai"
                className="h-7"
              />
            </div>

            {/* Header - Compelling without false urgency */}
            <div className="text-center mb-5">
              <h3 className="font-hero text-[2.375rem] sm:text-[3rem] font-[900] text-slate-900 uppercase tracking-tighter mb-4 leading-[0.9]">
                Your Probate <span className="text-[#83d4c0]">Profit</span> Machine Is Ready
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed font-semibold">
                This brand new, FREE guide gives you a repeatable system for finding off-market probate deals in your market.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">
                  {errorMessage}
                </div>
              )}

              <input
                type="text"
                required
                placeholder="First Name *"
                className={inputStyles}
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />

              <input
                type="email"
                required
                placeholder="Email Address *"
                className={inputStyles}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <input
                type="tel"
                required
                placeholder="Phone Number *"
                className={inputStyles}
                value={formData.phone}
                onChange={handlePhoneChange}
              />

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full btn-gradient py-5 rounded-2xl font-hero font-[900] text-3xl sm:text-4xl uppercase tracking-tight shadow-lg shadow-[#83d4c0]/20 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Submit'}
              </button>

              <p className="text-xs text-slate-400 text-center leading-relaxed">
                By clicking submit you consent for us to contact you by mail, phone, text or email.
                You also consent to our{' '}
                <a href="/privacy" className="underline hover:text-[#83d4c0]">Privacy Policy</a> and{' '}
                <a href="/terms" className="underline hover:text-[#83d4c0]">Terms of Service</a>.
              </p>
            </form>
          </motion.div>
        </div>
      )}

      {/* Custom Transparent Header - Disappears on Scroll */}
      <motion.header
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: headerVisible ? 1 : 0, y: headerVisible ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 py-4 px-6 pointer-events-auto"
        style={{ pointerEvents: headerVisible ? 'auto' : 'none' }}
      >
        <div className="w-full flex items-center justify-center relative">
          {/* Centered Logo - No link to reduce leakage */}
          <div className="flex items-center">
            <img
              src="/logo-wordmark-dark.png"
              alt="Homeflip.ai"
              className="h-8"
            />
          </div>

          {/* Phone Number - Far Right */}
          <a
            href="tel:5139865440"
            className="absolute right-0 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium hidden sm:inline">(513) 986-5440</span>
          </a>
        </div>
      </motion.header>

      {/* Hero Section - Dark with Glows */}
      <section className="relative pt-24 pb-24 px-6 overflow-hidden bg-[#050505] dark">
        {/* Background Decor */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#83d4c0]/15 via-transparent to-transparent opacity-50" />
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#83d4c0]/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[0%] left-[-5%] w-[800px] h-[800px] bg-[#0891b2]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[#83d4c0]/15 to-[#0891b2]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#83d4c0 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Column - 3/5 */}
            <div className="lg:col-span-3">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="hidden sm:block text-[#83d4c0] font-bold text-base md:text-lg uppercase tracking-widest mb-6"
              >
                Attention Investors Who Want Properties At 47% Of The ARV
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-hero text-[11vw] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] font-[800] text-white leading-[0.85] sm:leading-[0.9] tracking-[-0.02em] mb-8 uppercase"
              >
                How Thousands Of Investors Are Using <span className="text-[#83d4c0]">Timeline Intelligence</span> To Uncover Hidden Probate Opportunities
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl sm:text-2xl md:text-3xl text-white font-medium uppercase tracking-wide max-w-2xl leading-tight mb-10"
              >
                Buy Your Next Deal In 30 Days Or Less
              </motion.p>

              {/* Desktop CTA - hidden on mobile (mobile CTA is under ebook) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="hidden lg:block"
              >
                <CTAButton />
              </motion.div>
            </div>

            {/* Right Column - 2/5 - eBook Image */}
            {/* order-first on mobile puts ebook at top; lg:order-none restores desktop order */}
            {/* lg:mt-16 pushes ebook below eyebrow line on desktop */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              // Left nudge: 24px on tablet, 48px on desktop to connect with headline
              className="lg:col-span-2 flex flex-col items-center order-first lg:order-none md:-translate-x-6 lg:-translate-x-12 lg:mt-16"
            >
              {/* Glow container - positions ambient glow behind ebook */}
              <div className="relative">
                {/*
                  Soft ambient teal/blue glow:
                  - Large blur radius (80-100px) for diffuse, premium look
                  - Low opacity teal-to-cyan gradient
                  - Extends beyond image bounds (-inset-8)
                  - No harsh edges
                */}
                <div
                  className="absolute -inset-8 md:-inset-10 lg:-inset-12 bg-gradient-to-br from-[#83d4c0]/20 to-[#0891b2]/15 blur-[60px] md:blur-[80px] lg:blur-[100px] rounded-full pointer-events-none"
                  aria-hidden="true"
                />
                {/*
                  Ebook mockup sizing:
                  - Mobile: max-w-[22rem]
                  - Tablet: max-w-[25rem]
                  - Desktop: max-w-[28rem]
                */}
                <img
                  src="/ebook-cover-probate-profit-machine.png"
                  alt="The Probate Profit Machine"
                  className="relative w-full max-w-[22rem] md:max-w-[25rem] lg:max-w-[28rem] drop-shadow-2xl rotate-[8deg] md:rotate-0 transition-transform"
                />
              </div>

              {/* Mobile CTA - directly under ebook, hidden on desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-8 lg:hidden"
              >
                <CTAButton size="medium" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#83d4c0]/50 to-transparent" />
      </section>

      {/* Section 1: Why Now - Demographic Inevitability */}
      <section className="py-16 sm:py-24 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #050505 0%, #0a0a0a 100%)' }}>
        {/* Subtle glow continuation from hero */}
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-[#83d4c0]/[0.06] rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-hero text-4xl sm:text-5xl lg:text-6xl font-[800] text-white uppercase tracking-tight mb-10 text-center"
          >
            A Generational Transfer of Wealth Is Underway
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 text-xl md:text-2xl text-slate-300 font-medium leading-relaxed mb-24 max-w-5xl mx-auto"
          >
            <p>
              Baby boomers own more residential real estate than any generation in history.
              As this generation ages, a massive wave of property is quietly entering probate
              courts across the country.
            </p>
            <p>
              This isn&apos;t a market trend that comes and goes. It&apos;s a demographic certainty
              that will reshape real estate supply for the next two decades.
            </p>
            <p className="text-slate-400">
              The investors who understand this shift are positioning themselves now.
            </p>
          </motion.div>

          {/* Info Boxes */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { number: '41%', label: 'Of U.S. Housing Stock', sublabel: 'Owned by Baby Boomers — the largest generational share in history' },
              { number: '~32M', label: 'Boomer-Owned Residences', sublabel: 'Approximately 32 million homes held by owners approaching transition' },
              { number: '9M+', label: 'Homes Expected to Transition', sublabel: 'Up to 9 million properties changing hands over the next decade' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center"
              >
                <div className="text-6xl sm:text-7xl font-bold text-[#83d4c0] mb-4 tracking-tight">
                  {item.number}
                </div>
                <div className="text-white font-bold text-xl sm:text-2xl uppercase tracking-wide mb-3">{item.label}</div>
                <div className="text-slate-300 text-lg sm:text-xl font-medium leading-relaxed">{item.sublabel}</div>
              </motion.div>
            ))}
          </div>

          {/* Section CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <CTAButton size="medium" />
          </motion.div>
        </div>
      </section>

      {/* Section 3: Why Probate - Benefits List (Static) */}
      <section className="py-16 sm:py-24 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0c1214 0%, #0d1416 100%)' }}>
        {/* Subtle glow continuity */}
        <div className="absolute top-0 left-[20%] w-[500px] h-[300px] bg-[#0f2a2a]/[0.05] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-hero text-4xl sm:text-5xl lg:text-6xl font-[800] text-white uppercase tracking-tight mb-14"
          >
            Why Probate Outperforms Other Lead Sources
          </motion.h2>

          <ul className="space-y-8 max-w-5xl">
            {[
              { title: 'Motivated decision-makers.', desc: 'Heirs and executors want resolution, not top dollar.' },
              { title: 'Clear authority to sell.', desc: 'Court-appointed representatives have legal power to transact.' },
              { title: 'As-is transactions.', desc: 'Properties sell in current condition without repair negotiations.' },
              { title: 'Pre-market access.', desc: 'Connect before listings hit MLS or reach other investors.' },
              { title: 'Less competition.', desc: 'Most investors chase the same tired lists and skip probate entirely.' },
              { title: 'Predictable pipeline.', desc: 'New cases file every week regardless of market conditions.' },
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.08, ease: 'easeOut' }}
                className="flex items-start gap-4"
              >
                <div className="w-7 h-7 rounded-full bg-[#83d4c0]/20 flex items-center justify-center flex-shrink-0 mt-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0891b2]" />
                </div>
                <div className="text-xl md:text-2xl leading-relaxed">
                  <span className="text-white font-bold">{item.title}</span>
                  <span className="text-slate-400 font-medium"> {item.desc}</span>
                </div>
              </motion.li>
            ))}
          </ul>

          {/* Section CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <CTAButton size="medium" />
          </motion.div>
        </div>

        {/* Gradient fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#050505] pointer-events-none" />
      </section>

      {/* Section: What's Inside Your Probate Profit Machine */}
      <section className="py-16 sm:py-24 px-6 relative overflow-hidden bg-[#050505]">
        {/* Top gradient blend from previous section */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none" />
        {/* Gradient bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#83d4c0]/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column: Static/Anchored - Headline + CTA */}
            <div className="lg:sticky lg:top-32">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="font-hero text-4xl sm:text-5xl lg:text-8xl font-[800] text-white uppercase tracking-tight leading-[0.9] mb-6 text-center"
              >
                Here's What's Inside Your Probate{' '}
                <span className="text-[#83d4c0] animate-text-glow-pulse">Profit</span>{' '}
                Machine
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                className="text-lg sm:text-xl text-slate-400 text-center mb-8"
              >
                A step-by-step system for finding and closing probate deals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                className="text-center"
              >
                <CTAButton size="medium" />
              </motion.div>
            </div>

            {/* Right Column: Infinite Scrolling Card Carousel */}
            <InfiniteCardScroller />
          </div>
        </div>
      </section>

      {/* Section 5: The Silver Tsunami */}
      <section ref={silverTsunamiRef} className="py-16 sm:py-24 px-6 relative overflow-hidden bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-hero text-4xl sm:text-5xl lg:text-7xl font-[800] text-white uppercase tracking-tight mb-4 text-center"
          >
            Be Prepared for the{' '}
            <span className="text-silver-shimmer">
              Silver Tsunami
            </span>
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-medium leading-relaxed max-w-5xl mx-auto text-center mb-6"
          >
            Over the next 10 years, the number of properties moving through probate will skyrocket as millions of baby boomers transition away from homeownership.
          </motion.p>

          {/* Two images with scroll-linked parallax */}
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 min-h-[300px] sm:min-h-[400px]">
            {/* Newspaper - scroll-linked from bottom left */}
            <motion.div
              style={{
                x: newspaperX,
                y: newspaperY,
                opacity: newspaperOpacity
              }}
              className="relative z-10 lg:-rotate-3"
            >
              <img
                src="/silver-tsunami-headline-02.png"
                alt="News headline about aging boomers and housing market impact"
                className="w-full max-w-[90vw] sm:max-w-md lg:max-w-xl rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              />
            </motion.div>

            {/* Chart - scroll-linked from right */}
            <motion.div
              style={{
                x: chartX,
                y: chartY,
                opacity: chartOpacity
              }}
              className="relative z-0 lg:rotate-2"
            >
              <img
                src="/boomer-household-retention-chart.jpg"
                alt="Chart showing cumulative change in boomer homeowner households"
                className="w-full max-w-[85vw] sm:max-w-sm lg:max-w-md rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              />
            </motion.div>
          </div>

          {/* Section CTA - z-20 keeps it above the parallax images (z-10, z-0) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative z-20 mt-12 text-center"
          >
            <CTAButton size="medium" />
          </motion.div>
        </div>
      </section>

      {/* Section: What You'll Learn - Dark Glassmorphic Cards */}
      <section className="py-16 sm:py-24 px-6 relative overflow-hidden bg-[#050505]">
        {/* Ambient glow orbs for depth */}
        <div className="absolute top-[5%] left-[10%] w-[500px] h-[500px] bg-[#83d4c0]/[0.06] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-[#0891b2]/[0.08] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#83d4c0]/[0.03] to-[#0891b2]/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-hero text-3xl sm:text-4xl lg:text-6xl font-[800] text-white uppercase tracking-tight mb-1 text-center leading-[0.95]"
          >
            Keep Reading. It Gets Better.
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="font-hero text-3xl sm:text-4xl lg:text-6xl font-[800] text-white uppercase tracking-tight mb-10 sm:mb-14 text-center leading-[0.95]"
          >
            The Probate <span className="text-[#83d4c0]">Profit</span> Machine Also Covers:
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                icon: Search,
                title: 'The Cold Hard Truth About Buying Probate Properties',
                desc: "20 years of hard-won lessons distilled into actionable strategies most investors will never discover on their own."
              },
              {
                icon: TrendingUp,
                title: '7 Tips to Build a Property Portfolio in Only 24 Months',
                desc: 'A proven framework that anyone can implement to generate equity through consistent deal flow.'
              },
              {
                icon: Landmark,
                title: 'Why Calling on Probate Attorneys Is a Bad Idea',
                desc: "Most investors think calling probate attorneys leads to deals. We'll show you why that rarely works and what to do instead."
              },
              {
                icon: Target,
                title: 'How to Find Secret Probate Leads in Your Area',
                desc: "Most probate leads are hidden in plain sight. We'll show you where to look and how to find them."
              },
              {
                icon: Compass,
                title: 'Positioning for the Generational Wealth Transfer',
                desc: "Learn how to prepare for what could be the largest real estate shift in your lifetime."
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08, ease: 'easeOut' }}
                className="relative group w-full max-w-[340px]"
              >
                {/* Outer glow on hover */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#83d4c0]/30 via-[#0891b2]/20 to-[#83d4c0]/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none" />

                {/* Card container */}
                <div
                  className="relative rounded-2xl p-8 text-center backdrop-blur-xl transition-all duration-300 group-hover:translate-y-[-2px]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, rgba(131,212,192,0.04) 100%)',
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -1px 1px rgba(0,0,0,0.1), 0 8px 32px rgba(0,0,0,0.4)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {/* Top glossy edge highlight */}
                  <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                  {/* Inner gradient overlay for depth */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.05] via-transparent to-black/[0.1] pointer-events-none" />

                  {/* Hover glow overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#83d4c0]/[0.08] to-[#0891b2]/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative">
                    {/* Icon container with glass effect */}
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 backdrop-blur-md"
                      style={{
                        background: 'linear-gradient(135deg, rgba(131,212,192,0.2) 0%, rgba(8,145,178,0.15) 100%)',
                        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), 0 4px 16px rgba(131,212,192,0.15)',
                        border: '1px solid rgba(131,212,192,0.25)',
                      }}
                    >
                      <card.icon className="w-7 h-7 text-[#83d4c0]" />
                    </div>
                    <h3 className="text-white font-bold text-lg sm:text-xl mb-3 leading-tight uppercase tracking-wide">
                      {card.title}
                    </h3>
                    <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA - Probate Profit Machine */}
      <section className="py-20 sm:py-32 px-6 relative overflow-hidden bg-[#050505]">
        {/* Animated background glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#83d4c0]/[0.06] rounded-full blur-[150px] pointer-events-none animate-pulse-glow"
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Full-width subheading at top */}
          <motion.p
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-xl sm:text-2xl lg:text-3xl text-slate-400 font-medium leading-tight mb-14 text-center"
          >
            Download the Probate Profit Machine and learn exactly how to find, contact, and convert probate opportunities in your market.
          </motion.p>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content (3/5 width) */}
            <div className="text-center lg:text-left lg:col-span-3">
              <motion.h2
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-hero text-6xl sm:text-7xl lg:text-8xl font-[800] text-white uppercase tracking-tight mb-4 leading-[0.95]"
              >
                Everything You Need to Start Buying Probate Properties
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                className="text-xl sm:text-2xl text-[#83d4c0] font-semibold mb-10 uppercase tracking-wide"
              >
                Unlock deals from 47¢ on the dollar
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
                className="flex flex-col items-center lg:items-start mb-6"
              >
                <CTAButton size="medium" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
                className="text-xs sm:text-sm text-slate-500 uppercase tracking-widest text-center lg:text-left"
              >
                🔒 100% Privacy. No Games. No Spam.
              </motion.p>
            </div>

            {/* Right Column - Ebook Image (2/5 width) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="flex justify-center lg:justify-end order-first lg:order-none lg:col-span-2"
            >
              <div className="relative">
                {/* Subtle glow behind ebook */}
                <div
                  className="absolute inset-0 bg-[#83d4c0]/15 blur-[80px] scale-125 rounded-full"
                  aria-hidden="true"
                />
                <img
                  src="/ebook-cover-probate-profit-machine.png"
                  alt="The Probate Profit Machine"
                  className="relative w-full max-w-[20rem] sm:max-w-[24rem] lg:max-w-[28rem] drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Minimal Footer - Landing Page Only */}
      <footer className="py-6 px-6 bg-[#050505] border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-2 text-xs text-slate-700">
          <p>&copy; 2026 WhiteBox Academy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/terms" className="hover:text-slate-500 transition-colors">Terms</a>
            <span className="text-slate-800">·</span>
            <a href="/privacy" className="hover:text-slate-500 transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
