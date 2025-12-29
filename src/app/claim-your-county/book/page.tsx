'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Script from 'next/script';

function BookCallContent() {
  const searchParams = useSearchParams();

  // Get pre-filled data from URL params
  const fullName = searchParams.get('name') || '';
  const email = searchParams.get('email') || '';
  const phoneRaw = searchParams.get('phone') || '';

  // Clean phone to just digits (e.g., "5132900789")
  const phone = phoneRaw.replace(/\D/g, '').replace(/^1/, ''); // Strip non-digits and leading 1

  // Split full name into first and last name
  const nameParts = fullName.trim().split(/\s+/);
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  // Build Calendly URL with prefilled params
  const calendlyBaseUrl = 'https://calendly.com/wb-props/homeflip-roadmap';
  const calendlyParams = new URLSearchParams({
    hide_event_type_details: '1',
    hide_gdpr_banner: '1',
    ...(firstName && { first_name: firstName }),
    ...(lastName && { last_name: lastName }),
    ...(email && { email }),
    ...(phone && { phone_number: phone }),
  });
  const calendlyUrl = `${calendlyBaseUrl}?${calendlyParams.toString()}`;

  return (
    <>
      {/* Success + Booking Section */}
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="font-hero font-[900] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 uppercase tracking-tighter leading-[0.9] mb-6">
              Book Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0891b2] to-[#7c3aed]">
                FREE 15-Minute Roadmap Session
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl lg:max-w-3xl mx-auto">
              We&apos;ll review your county&apos;s availability, discuss your goals, and explore how Homeflip.ai could possibly fit into your current investing strategy.
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

      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}

export default function BookCallPage() {
  return (
    <main className="min-h-screen bg-white">
      <Suspense fallback={
        <section className="pt-28 pb-12 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-16 bg-slate-200 rounded w-80 mx-auto mb-6 animate-pulse" />
            <div className="h-6 bg-slate-100 rounded max-w-2xl mx-auto animate-pulse" />
          </div>
        </section>
      }>
        <BookCallContent />
      </Suspense>
    </main>
  );
}
