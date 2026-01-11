'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { logos } from '@/config/hub.config';
import { Phone } from 'lucide-react';

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
      <HouseLoader size={64} />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-5 text-lg sm:text-xl text-slate-300 font-medium tracking-wide"
      >
        {message}
      </motion.p>
    </motion.div>
  );
}

export default function ProbateProfitMachineGetAccessPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Assembling Your Machine...');
  const [error, setError] = useState<string | null>(null);
  const [headerVisible, setHeaderVisible] = useState(true);

  // Hide header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setHeaderVisible(window.scrollY <= 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Format phone number as (XXX) XXX-XXXX
  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
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
    setIsLoading(true);
    setError(null);

    try {
      // Call token-generate-instant which creates token and returns hub URL
      const response = await fetch('https://whitebox-one.onrender.com/webhook/token-generate-instant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          phone: formData.phone,
          hub_slug: 'probate-profit-machine',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate access');
      }

      const data = await response.json();

      if (data.success && data.hub_url) {
        setLoadingMessage('Redirecting to Your Resource Hub...');
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

  const inputStyles = "w-full px-4 py-4 rounded-xl border-2 border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#83d4c0]/50 focus:border-[#83d4c0] transition-all text-lg";

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#83d4c0]/20">
      {/* Loading Overlay */}
      {isLoading && <LoadingOverlay message={loadingMessage} />}

      {/* Error Toast */}
      {error && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] bg-red-500 text-white px-6 py-3 rounded-xl shadow-xl">
          {error}
          <button onClick={() => setError(null)} className="ml-4 font-bold">×</button>
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

      {/* Main Content */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#83d4c0]/10 via-transparent to-transparent opacity-50" />
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#83d4c0]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[0%] left-[-5%] w-[600px] h-[600px] bg-[#0891b2]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#83d4c0 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative max-w-lg w-full">
          {/* Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-8 sm:p-10 backdrop-blur-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, rgba(131,212,192,0.04) 100%)',
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -1px 1px rgba(0,0,0,0.1), 0 20px 60px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {/* Top glossy edge */}
            <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Inner gradient overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.03] via-transparent to-black/[0.05] pointer-events-none" />

            <div className="relative">
              {/* Ebook Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex justify-center mb-6"
              >
                <div className="relative">
                  <div
                    className="absolute -inset-4 bg-gradient-to-br from-[#83d4c0]/20 to-[#0891b2]/15 blur-[40px] rounded-full pointer-events-none"
                    aria-hidden="true"
                  />
                  <img
                    src="/ebook-cover-probate-profit-machine.png"
                    alt="The Probate Profit Machine"
                    className="relative w-full max-w-[180px] drop-shadow-2xl"
                  />
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center mb-6"
              >
                <h1 className="font-hero text-3xl sm:text-4xl font-[800] text-white uppercase tracking-tight mb-3 leading-[0.95]">
                  Get Instant Access
                </h1>
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                  Enter your info below and we&apos;ll take you straight to your <span className="text-[#83d4c0] font-semibold">Probate Profit Machine</span> Resource Hub.
                </p>
              </motion.div>

              {/* Form */}
              <motion.form
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
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
                  disabled={isLoading}
                  className="w-full btn-gradient py-5 rounded-2xl font-hero font-[900] text-2xl sm:text-3xl uppercase tracking-tight shadow-lg shadow-[#83d4c0]/20 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Please Wait...' : 'Get My Free Access'}
                </button>

                <p className="text-xs text-slate-500 text-center leading-relaxed pt-2">
                  By clicking submit you consent for us to contact you by mail, phone, text or email.
                  You also consent to our{' '}
                  <a href="/privacy" className="underline hover:text-[#83d4c0]">Privacy Policy</a> and{' '}
                  <a href="/terms" className="underline hover:text-[#83d4c0]">Terms of Service</a>.
                </p>
              </motion.form>
            </div>
          </motion.div>

          {/* Trust Badge */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center text-xs text-slate-600 uppercase tracking-widest mt-6"
          >
            🔒 100% Privacy. No Games. No Spam.
          </motion.p>
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
    </div>
  );
}
