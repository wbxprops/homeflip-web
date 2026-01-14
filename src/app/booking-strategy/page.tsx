'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Script from 'next/script';
import { Phone } from 'lucide-react';
import { logos } from '@/config/hub.config';

function BookingStrategyContent() {
  const searchParams = useSearchParams();
  const [headerVisible, setHeaderVisible] = useState(true);

  // Hide header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setHeaderVisible(window.scrollY <= 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get pre-filled data from URL params
  const fullName = searchParams.get('name') || '';
  const email = searchParams.get('email') || '';
  const phoneRaw = searchParams.get('phone') || '';

  // Clean phone to just digits
  const phone = phoneRaw.replace(/\D/g, '').replace(/^1/, '');

  // Split full name into first and last name
  const nameParts = fullName.trim().split(/\s+/);
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  // Build Calendly URL with prefilled params
  const calendlyBaseUrl = 'https://calendly.com/wb-props/homeflip-strategy';
  const calendlyParams = new URLSearchParams({
    hide_event_type_details: '1',
    hide_gdpr_banner: '1',
    primary_color: '5EEADC',
    ...(firstName && { first_name: firstName }),
    ...(lastName && { last_name: lastName }),
    ...(email && { email }),
    ...(phone && { phone_number: phone }),
  });
  const calendlyUrl = `${calendlyBaseUrl}?${calendlyParams.toString()}`;

  return (
    <>
      {/* Custom Transparent Header - Disappears on Scroll */}
      <motion.header
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: headerVisible ? 1 : 0, y: headerVisible ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 py-4 px-6"
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

      {/* Hero Section - Dark */}
      <section className="relative pt-28 pb-12 px-6 overflow-hidden bg-[#050505]">
        {/* Background Decor */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#83d4c0]/10 via-transparent to-transparent opacity-50" />
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#83d4c0]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[0%] left-[-5%] w-[600px] h-[600px] bg-[#0891b2]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="font-hero font-[900] text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tighter leading-[0.9] mb-6">
              Book Your{' '}
              <span className="text-[#83d4c0]">
                Strategy Session
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
              A 30-minute Zoom call with our team to dive deep into your investing goals, review your markets, and build a custom strategy for your business.
            </p>
          </motion.div>

          {/* Calendly Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div
              className="calendly-inline-widget"
              data-url={calendlyUrl}
              style={{ minWidth: '320px', height: '1150px' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Minimal Footer */}
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

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}

export default function BookingStrategyPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Suspense fallback={
        <section className="pt-28 pb-12 px-6 bg-[#050505]">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-16 bg-white/10 rounded w-80 mx-auto mb-6 animate-pulse" />
            <div className="h-6 bg-white/5 rounded max-w-2xl mx-auto animate-pulse" />
          </div>
        </section>
      }>
        <BookingStrategyContent />
      </Suspense>
    </main>
  );
}
