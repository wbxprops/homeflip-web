'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { X, Phone } from 'lucide-react';

export default function ProbateProfitMachinePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);

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
      className={`btn-gradient inline-flex items-center justify-center rounded-2xl font-hero font-[900] uppercase tracking-tighter shadow-xl shadow-[#83d4c0]/20 hover:scale-105 active:scale-95 transition-all ${
        size === 'large'
          ? 'px-10 sm:px-14 py-5 sm:py-6 text-2xl sm:text-3xl md:text-4xl'
          : 'px-8 sm:px-10 py-4 sm:py-5 text-xl sm:text-2xl'
      } ${className}`}
    >
      Get Your Free Guide
    </button>
  );

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
                src="/logo-wordmark.png"
                alt="Homeflip.ai"
                className="h-7"
              />
            </div>

            {/* Header - Compelling without false urgency */}
            <div className="text-center mb-5">
              <h3 className="font-hero text-3xl sm:text-4xl font-[900] text-slate-900 uppercase tracking-tight mb-3 leading-[0.95]">
                Your Free Guide Is Ready
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                This <span className="font-semibold text-[#0891b2]">FREE guide</span> reveals how investors are finding{' '}
                <span className="font-semibold">off-market probate deals</span> that others miss completely.
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
                className="text-[#83d4c0] font-bold text-base md:text-lg uppercase tracking-widest mb-6"
              >
                Attention Investors Who Want Properties At 47% Of The ARV
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-hero text-[9vw] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] font-[800] text-white leading-[0.9] tracking-[-0.02em] mb-8 uppercase"
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
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              // Left nudge: 24px on tablet, 48px on desktop to connect with headline
              className="lg:col-span-2 flex flex-col items-center order-first lg:order-none md:-translate-x-6 lg:-translate-x-12"
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
                  - Mobile: max-w-[22rem] (~10% larger than original sm/24rem)
                  - Tablet: max-w-[26rem] (~15% increase, proportional)
                  - Desktop: max-w-[30rem] (~15% larger than original md/28rem)
                  - Maintains aspect ratio via width constraint
                */}
                <img
                  src="/ebook-cover-probate-profit-machine.png"
                  alt="The Probate Profit Machine"
                  className="relative w-full max-w-[22rem] md:max-w-[26rem] lg:max-w-[30rem] drop-shadow-2xl"
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
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #050505 0%, #0a0a0a 100%)' }}>
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
        </div>
      </section>

      {/* Section 3: Why Probate - Benefits List (Static) */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0c1214 0%, #0d1416 100%)' }}>
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
        </div>
      </section>

      {/* Section 4: Timing Advantage - Silver Wave Intrigue */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0d1416 0%, #0e1518 100%)' }}>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Headline + Blurb */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="font-hero text-4xl sm:text-5xl lg:text-6xl font-[800] text-white uppercase tracking-tight mb-8"
              >
                Timing Is Everything
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed space-y-4"
              >
                <p>
                  Probate opportunities don&apos;t appear all at once. They unfold in stages over weeks and months.
                </p>
                <p>
                  Most investors show up too late, after the best deals have already moved. The advantage goes to those who understand when to act.
                </p>
              </motion.div>
            </div>

            {/* Right: Placeholder Graphic */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-white/[0.02] flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-slate-500 text-sm uppercase tracking-widest mb-2">Placeholder</div>
                  <div className="text-slate-400 text-lg font-medium">Probate Timeline / Silver Wave Visualization</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: The Unasked Question - Ethical/Legal Concerns */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0e1518 0%, #0f161a 100%)' }}>
        <div className="relative max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-hero text-4xl sm:text-5xl lg:text-6xl font-[800] text-white uppercase tracking-tight mb-8"
          >
            Can You Even Contact These Families?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed mb-12 max-w-4xl"
          >
            This is the question most investors never ask out loud. They assume probate leads are off-limits, legally risky, or ethically complicated. The truth is simpler than you think.
          </motion.p>

          {/* Callout Box */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="bg-[#83d4c0]/[0.06] border border-[#83d4c0]/20 rounded-2xl p-8 md:p-10"
          >
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-4">
              Inside this guide, you&apos;ll learn how experienced investors approach probate outreach with confidence and clarity.
            </p>
            <p className="text-lg text-slate-400">
              No guesswork. No gray areas. Just a responsible framework that protects you and respects the families you contact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Final CTA - Probate Profit Machine */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#050505]">
        {/* Restrained hero echo glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#83d4c0]/[0.08] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#0891b2]/[0.06] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text + CTA */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="font-hero text-4xl sm:text-5xl lg:text-6xl font-[800] text-white uppercase tracking-tight mb-6"
              >
                Get the Step-by-Step System
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed mb-8"
              >
                Everything you need to start finding and closing probate deals in your market. Clear steps. No fluff.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
                className="text-slate-400 text-lg mb-6"
              >
                Enter your details below to get instant access.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              >
                <CTAButton />
              </motion.div>
            </div>

            {/* Right: Ebook Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="flex justify-center lg:justify-end order-first lg:order-none"
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-[#83d4c0]/[0.08] to-[#0891b2]/[0.05] blur-[60px] rounded-full pointer-events-none" />
                <img
                  src="/ebook-cover-probate-profit-machine.png"
                  alt="The Probate Profit Machine"
                  className="relative w-full max-w-[20rem] lg:max-w-[24rem] drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Minimal Footer - Landing Page Only */}
      <footer className="py-6 px-6 bg-[#050505] border-t border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>&copy; 2026 WhiteBox Academy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
