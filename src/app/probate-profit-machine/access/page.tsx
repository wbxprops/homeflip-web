'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { logos } from '@/config/hub.config';
import { Phone, Search, TrendingUp, Landmark, Target, Compass } from 'lucide-react';

// Animated House Loader - ported from CRM LoadingLogo
function HouseLoader({ size = 80 }: { size?: number }) {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCycle(c => c + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: size, height: size }}>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes accentLoop {
            0% { transform: translateY(20px); opacity: 0; }
            25% { transform: translateY(0); opacity: 1; }
            75% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(-20px); opacity: 0; }
          }
        `
      }} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 368.59 385.12"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
      >
        <path
          d="M177.4,50.28L41.48,166.23v171.16h129.72v-99.38l42.89-36.18s25.21,23.19,63.55,20.27c35.12-2.68,49.77-31.27,49.77-31.27v146.56-166.18L191.37,50.42c-3.97-3.53-9.93-3.58-13.97-.14Z"
          style={{
            fill: 'none',
            stroke: '#f5f7fa',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '40px',
          }}
        />
        <path
          key={cycle}
          d="M257.47,78.86c0-4.67,4.28-8.45,9.56-8.45h71.05c5.28,0,9.56,3.78,9.56,8.45v62.78c0,4.67-4.28,8.45-9.56,8.45"
          style={{
            fill: '#83d4c0',
            transformOrigin: '300px 100px',
            animation: 'accentLoop 2s ease-in-out forwards',
          }}
        />
      </svg>
    </div>
  );
}

// Loading Overlay
function LoadingOverlay({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#050505]"
    >
      <HouseLoader size={100} />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-2xl sm:text-3xl font-hero font-bold text-white uppercase tracking-wide"
      >
        {message}
      </motion.p>
    </motion.div>
  );
}

function ProbateProfitMachineAccessPageContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Assembling Your Machine...');
  const [error, setError] = useState<string | null>(null);
  const [headerVisible, setHeaderVisible] = useState(true);

  // Ref for Silver Tsunami section scroll tracking
  const silverTsunamiRef = useRef<HTMLElement>(null);
  const { scrollYProgress: tsunamiProgress } = useScroll({
    target: silverTsunamiRef,
    offset: ["start end", "end start"]
  });

  // Check if mobile for reduced parallax
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mobileOffset = isMobile ? 100 : 400;
  const mobileYOffset = isMobile ? 80 : 300;

  const newspaperX = useTransform(tsunamiProgress, [0, 0.45, 0.55, 1], [-mobileOffset, 0, 0, mobileOffset]);
  const newspaperY = useTransform(tsunamiProgress, [0, 0.45, 0.55, 1], [mobileYOffset, 0, 0, 0]);
  const newspaperOpacity = useTransform(tsunamiProgress, [0, 0.35, 0.65, 1], [0, 1, 1, 0]);

  const chartX = useTransform(tsunamiProgress, [0, 0.45, 0.55, 1], [mobileOffset, 0, 0, -mobileOffset]);
  const chartY = useTransform(tsunamiProgress, [0, 0.45, 0.55, 1], [0, 0, 0, mobileYOffset]);
  const chartOpacity = useTransform(tsunamiProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

  // Hide header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setHeaderVisible(window.scrollY <= 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle CTA click - generate token and redirect
  const handleAccessClick = async () => {
    if (!email) {
      setError('No email found. Please use the link from your email.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://whitebox-one.onrender.com/webhook/token-generate-instant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate access');
      }

      const data = await response.json();

      if (data.success && data.hub_url) {
        setLoadingMessage('Redirecting to Your Hub...');
        // Short delay to show the redirect message
        await new Promise(resolve => setTimeout(resolve, 500));
        window.location.href = data.hub_url;
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (err) {
      console.error('Access error:', err);
      setError('Something went wrong. Please try again or contact support.');
      setIsLoading(false);
    }
  };

  // CTA Button Component - triggers loading and redirect
  const CTAButton = ({ className = '', size = 'large' }: { className?: string; size?: 'large' | 'medium' }) => (
    <button
      onClick={handleAccessClick}
      disabled={isLoading || !email}
      className={`btn-gradient inline-flex items-center justify-center rounded-2xl font-hero font-[900] uppercase tracking-tighter shadow-xl shadow-[#83d4c0]/20 hover:scale-105 active:scale-95 transition-all whitespace-nowrap w-[calc(100%+1rem)] -mx-2 sm:w-auto sm:mx-0 px-4 sm:px-16 py-5 sm:py-7 text-[6.5vw] sm:text-4xl md:text-5xl disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      Access Your Machine
    </button>
  );

  // Card carousel with scroll-snap
  const InfiniteCardScroller = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const hasInitialized = useRef(false);
    const [focusedIndex, setFocusedIndex] = useState(1);

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

    const allCards = [preCard, ...cards.map(c => ({ ...c, isPreCard: false }))];

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

      if (!hasInitialized.current) {
        hasInitialized.current = true;
        setTimeout(() => {
          const firstMainCard = container.querySelector('[data-card-index="1"]') as HTMLElement;
          if (firstMainCard) {
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

    const getCardState = (index: number, isPreCard: boolean) => {
      const distance = Math.abs(index - focusedIndex);

      if (isPreCard) {
        return { scale: 0.96, brightness: 0.7, borderWidth: 1, borderOpacity: 0.15, dotOpacity: 0.2, dotSize: 6, dotAnimate: false };
      }

      if (distance === 0) {
        return { scale: 1.02, brightness: 1, borderWidth: 2, borderOpacity: 0.8, dotOpacity: 1, dotSize: 8, dotAnimate: true };
      } else if (distance === 1) {
        return { scale: 0.98, brightness: 0.85, borderWidth: 1, borderOpacity: 0.3, dotOpacity: 0.5, dotSize: 7, dotAnimate: false };
      } else {
        return { scale: 0.96, brightness: 0.75, borderWidth: 1, borderOpacity: 0.2, dotOpacity: 0.2, dotSize: 6, dotAnimate: false };
      }
    };

    return (
      <div className="relative overflow-hidden h-[400px] sm:h-[480px]">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent z-10 pointer-events-none" />

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
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] transition-all duration-500 pointer-events-none"
                      style={{
                        background: isFocused && !card.isPreCard ? 'radial-gradient(ellipse at center, rgba(131,212,192,0.6) 0%, transparent 70%)' : 'transparent',
                        boxShadow: isFocused && !card.isPreCard ? '0 -15px 40px 10px rgba(131,212,192,0.2)' : 'none',
                      }}
                    />
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
                        {!card.isPreCard && (
                          <span
                            className={`hidden sm:block rounded-full flex-shrink-0 transition-all duration-500 ${state.dotAnimate ? 'animate-dot-breathe' : ''}`}
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
                          card.desc.split('|').map((part: string, i: number) =>
                            i % 2 === 1 ? <span key={i} className="text-[#83d4c0] font-medium">{part}</span> : part
                          )
                        ) : (
                          card.desc?.replace(/\|/g, '')
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="h-[140px]" />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white selection:bg-[#83d4c0]/20">
      {/* Loading Overlay */}
      {isLoading && <LoadingOverlay message={loadingMessage} />}

      {/* Error Toast */}
      {error && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] bg-red-500 text-white px-6 py-3 rounded-xl shadow-xl">
          {error}
          <button onClick={() => setError(null)} className="ml-4 font-bold">×</button>
        </div>
      )}

      {/* No Email Warning */}
      {!email && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] bg-amber-500 text-white px-6 py-3 rounded-xl shadow-xl text-center">
          <p className="font-bold">Missing email parameter</p>
          <p className="text-sm">Please use the link from your email to access this page.</p>
        </div>
      )}

      {/* Custom Transparent Header */}
      <motion.header
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: headerVisible ? 1 : 0, y: headerVisible ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 py-4 px-6 pointer-events-auto"
        style={{ pointerEvents: headerVisible ? 'auto' : 'none' }}
      >
        <div className="w-full flex items-center justify-center relative">
          <div className="flex items-center">
            <img
              src={logos.logo.onDark}
              alt="Homeflip.ai"
              className="h-8"
            />
          </div>
          <a
            href="tel:5139865440"
            className="absolute right-0 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium hidden sm:inline">(513) 986-5440</span>
          </a>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-24 px-6 overflow-hidden bg-[#050505] dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#83d4c0]/15 via-transparent to-transparent opacity-50" />
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#83d4c0]/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[0%] left-[-5%] w-[800px] h-[800px] bg-[#0891b2]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[#83d4c0]/15 to-[#0891b2]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#83d4c0 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="hidden sm:block text-[#83d4c0] font-bold text-base md:text-lg uppercase tracking-widest mb-6"
              >
                Your Guide Is Ready
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-hero text-[13vw] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] font-[800] text-white leading-[0.85] sm:leading-[0.9] tracking-[-0.02em] mb-8 uppercase text-center sm:text-left"
              >
                How Thousands Of Investors Are Using <span className="text-[#83d4c0]">Timeline Intelligence</span> To Uncover Hidden Probate Opportunities
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl sm:text-2xl md:text-3xl text-white font-medium uppercase tracking-wide max-w-2xl leading-tight mb-4 sm:mb-10 text-center sm:text-left"
              >
                Buy Your Next Deal In 30 Days Or Less
              </motion.p>

              {/* Mobile CTA - appears right after headline, before book */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="lg:hidden mb-8 flex flex-col items-center"
              >
                <CTAButton size="medium" />
                <p className="mt-3 text-xs text-slate-500 uppercase tracking-widest">
                  Instant Access – No Form Required
                </p>
              </motion.div>

              {/* Desktop CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="hidden lg:block"
              >
                <CTAButton />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2 flex flex-col items-center md:-translate-x-6 lg:-translate-x-12 lg:mt-16"
            >
              <div className="relative">
                <div
                  className="absolute -inset-8 md:-inset-10 lg:-inset-12 bg-gradient-to-br from-[#83d4c0]/20 to-[#0891b2]/15 blur-[60px] md:blur-[80px] lg:blur-[100px] rounded-full pointer-events-none"
                  aria-hidden="true"
                />
                <img
                  src="/ebook-cover-probate-profit-machine.png"
                  alt="The Probate Profit Machine"
                  className="relative w-full max-w-[22rem] md:max-w-[25rem] lg:max-w-[28rem] drop-shadow-2xl rotate-[3deg] md:rotate-0 transition-transform"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#83d4c0]/50 to-transparent" />
      </section>

      {/* Section 1: Why Now */}
      <section className="py-16 sm:py-24 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #050505 0%, #0a0a0a 100%)' }}>
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-[#83d4c0]/[0.06] rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-hero text-5xl sm:text-5xl lg:text-6xl font-[800] text-white uppercase tracking-tight mb-10 text-center"
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

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <CTAButton size="large" />
          </motion.div>
        </div>
      </section>

      {/* Section 3: Why Probate */}
      <section className="py-16 sm:py-24 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0c1214 0%, #0d1416 100%)' }}>
        <div className="absolute top-0 left-[20%] w-[500px] h-[300px] bg-[#0f2a2a]/[0.05] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-hero text-5xl sm:text-5xl lg:text-6xl font-[800] text-white uppercase tracking-tight mb-14"
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

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#050505] pointer-events-none" />
      </section>

      {/* Section: What's Inside */}
      <section className="py-16 sm:py-24 px-6 relative overflow-hidden bg-[#050505]">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#83d4c0]/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="font-hero text-5xl sm:text-5xl lg:text-8xl font-[800] text-white uppercase tracking-tight leading-[0.9] mb-6 text-center"
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
                className="hidden sm:block text-lg sm:text-xl text-slate-400 text-center mb-8"
              >
                A step-by-step system for finding and closing probate deals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                className="text-center hidden lg:block"
              >
                <CTAButton size="medium" />
              </motion.div>
            </div>

            <InfiniteCardScroller />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="text-center mt-8 lg:hidden"
          >
            <CTAButton size="medium" />
          </motion.div>
        </div>
      </section>

      {/* Section: Silver Tsunami */}
      <section ref={silverTsunamiRef} className="py-16 sm:py-24 px-6 relative overflow-hidden bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-hero text-5xl sm:text-5xl lg:text-7xl font-[800] text-white uppercase tracking-tight mb-4 text-center"
          >
            Be Prepared for the{' '}
            <span className="text-silver-shimmer">
              Silver Tsunami
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-medium leading-relaxed max-w-5xl mx-auto text-center mb-6"
          >
            Over the next 10 years, the number of properties moving through probate will skyrocket as millions of baby boomers transition away from homeownership.
          </motion.p>

          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 min-h-[300px] sm:min-h-[400px]">
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

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative z-20 mt-12 text-center hidden lg:block"
          >
            <CTAButton size="medium" />
          </motion.div>
        </div>
      </section>

      {/* Section: What You'll Learn */}
      <section className="py-16 sm:py-24 px-6 relative overflow-hidden bg-[#050505]">
        <div className="absolute top-[5%] left-[10%] w-[500px] h-[500px] bg-[#83d4c0]/[0.06] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-[#0891b2]/[0.08] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#83d4c0]/[0.03] to-[#0891b2]/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-hero text-5xl sm:text-5xl lg:text-6xl font-[800] text-white uppercase tracking-tight mb-1 text-center leading-[0.95]"
          >
            Keep Reading. It Gets Better.
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="font-hero text-5xl sm:text-5xl lg:text-6xl font-[800] text-white uppercase tracking-tight mb-10 sm:mb-14 text-center leading-[0.95]"
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
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#83d4c0]/30 via-[#0891b2]/20 to-[#83d4c0]/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none" />

                <div
                  className="relative rounded-2xl p-8 text-center backdrop-blur-xl transition-all duration-300 group-hover:translate-y-[-2px]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, rgba(131,212,192,0.04) 100%)',
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -1px 1px rgba(0,0,0,0.1), 0 8px 32px rgba(0,0,0,0.4)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.05] via-transparent to-black/[0.1] pointer-events-none" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#83d4c0]/[0.08] to-[#0891b2]/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative">
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

      {/* Final CTA Section */}
      <section className="py-20 sm:py-32 px-6 relative overflow-hidden bg-[#050505]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#83d4c0]/[0.06] rounded-full blur-[150px] pointer-events-none animate-pulse-glow"
        />

        <div className="relative max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-xl sm:text-2xl lg:text-3xl text-slate-400 font-medium leading-tight mb-14 text-center"
          >
            Access the Probate Profit Machine and learn exactly how to find, contact, and convert probate opportunities in your market.
          </motion.p>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
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
                Instant Access - No Form Required
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="flex justify-center lg:justify-end order-first lg:order-none lg:col-span-2"
            >
              <div className="relative">
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

      {/* Footer */}
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

// Wrap in Suspense for useSearchParams
export default function ProbateProfitMachineAccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <HouseLoader size={100} />
      </div>
    }>
      <ProbateProfitMachineAccessPageContent />
    </Suspense>
  );
}
