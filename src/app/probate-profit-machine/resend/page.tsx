'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { logos } from '@/config/hub.config';

export default function ResendMagicLinkPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      // Call n8n resend webhook (separate from opt-in, no AC trigger)
      const response = await fetch('https://whitebox-one.onrender.com/webhook/resend/probate-profit-machine', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          hub_slug: 'probate-profit-machine',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to resend magic link');
      }

      setStatus('success');
    } catch (error: unknown) {
      console.error('Resend error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or contact support.');
    }
  };

  const inputStyles = "w-full px-4 py-4 rounded-xl border-2 border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#83d4c0]/50 focus:border-[#83d4c0] transition-all text-lg";

  return (
    <main className="min-h-screen bg-[#050505] dark">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6">
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
      </header>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#83d4c0]/15 via-transparent to-transparent opacity-50" />
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#83d4c0]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[0%] left-[-5%] w-[800px] h-[800px] bg-[#0891b2]/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto w-full"
        >
          {status === 'success' ? (
            /* Success State */
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-[#10b981] to-[#0891b2] rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              <h1 className="font-hero font-[900] text-3xl sm:text-4xl text-white uppercase tracking-tighter leading-[0.95] mb-6">
                Check Your{' '}
                <span className="text-[#83d4c0]">Inbox</span>
              </h1>

              <p className="text-xl text-white/70 mb-10">
                We just sent a fresh magic link to <strong className="text-white">{email}</strong>.
                Click it to access your Probate Profit Machine.
              </p>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#83d4c0] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Don&apos;t see it?</h3>
                    <p className="text-white/60">
                      Check your spam or promotions folder. The email is from{' '}
                      <strong className="text-white/80">gary@homeflip.ai</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Form State */
            <>
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-[#83d4c0]" />
                </div>

                <h1 className="font-hero font-[900] text-3xl sm:text-4xl text-white uppercase tracking-tighter leading-[0.95] mb-4">
                  Resend Your{' '}
                  <span className="text-[#83d4c0]">Magic Link</span>
                </h1>

                <p className="text-lg text-white/70">
                  Lost your access email? No problem. Enter the email you signed up with and we&apos;ll send you a fresh link.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl text-sm">
                    {errorMessage}
                  </div>
                )}

                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className={inputStyles}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full btn-gradient py-4 rounded-xl font-bold text-lg uppercase tracking-wide flex items-center justify-center gap-2 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Magic Link
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-xs text-white/40 text-center">
                  Don&apos;t have access yet?{' '}
                  <a href="/probate-profit-machine" className="text-[#83d4c0] hover:underline">
                    Get your free copy here
                  </a>
                </p>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </main>
  );
}
