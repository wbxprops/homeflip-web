'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Phone } from 'lucide-react';

interface NavbarProps {
  minimal?: boolean;
}

// Company phone number
const PHONE_NUMBER = '(513) 986-5440';
const PHONE_TEL = 'tel:+15139865440';

export const Navbar = ({ minimal = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const menuLinks = [
    { href: '/#probate-investing', label: 'Why Probate' },
    { href: '/#features', label: 'How It Works' },
    { href: '/#faq', label: 'FAQs' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Minimal navbar for focused pages (like claim-your-county)
  if (minimal) {
    return (
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 dark"
      >
        <div className="flex items-center justify-center px-6 py-4 max-w-7xl mx-auto relative">
          {/* Back button */}
          <button
            onClick={() => router.back()}
            className="absolute left-6 flex items-center text-slate-400 hover:text-[#83d4c0] transition-colors"
            aria-label="Go back"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Centered logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="/logo-wordmark-dark.png"
              alt="Homeflip.ai"
              className="h-8"
            />
          </Link>
        </div>
      </motion.nav>
    );
  }

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 dark"
      >
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto relative">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center group" onClick={closeMenu}>
            {/* Light icon on mobile (dark background) */}
            <img
              src="/logo-icon-light.svg"
              alt="Homeflip.ai"
              className="h-8 sm:hidden"
            />
            {/* Full wordmark on desktop */}
            <img
              src="/logo-wordmark-dark.png"
              alt="Homeflip.ai"
              className="h-8 hidden sm:block"
            />
          </Link>

          {/* Center: CTA on mobile */}
          <Link
            href="/claim-your-county"
            className="absolute left-1/2 -translate-x-1/2 btn-gradient px-4 py-2 rounded-lg text-sm font-black uppercase tracking-wide shadow-xl shadow-[#83d4c0]/40 hover:scale-105 transition-transform whitespace-nowrap sm:hidden animate-pulse-glow ring-2 ring-white/20"
          >
            Claim Your County
          </Link>

          {/* Right: Phone + CTA (desktop) + MENU */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Phone number - calm, clickable, trust signal */}
            <a
              href={PHONE_TEL}
              className="hidden sm:flex items-center gap-2 text-white/60 hover:text-white/100 transition-colors"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-sm font-normal">{PHONE_NUMBER}</span>
            </a>

            {/* Primary CTA - Claim Your County (desktop only) */}
            <Link
              href="/claim-your-county"
              className="hidden sm:block btn-gradient px-5 py-2 rounded-lg text-sm font-black uppercase tracking-wide shadow-xl shadow-[#83d4c0]/40 hover:scale-105 transition-transform whitespace-nowrap animate-pulse-glow ring-2 ring-white/20"
            >
              Claim Your County
            </Link>

            {/* MENU button - explicit, deliberate */}
            <button
              onClick={toggleMenu}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-medium uppercase tracking-[0.1em] hidden sm:inline">
                {isOpen ? 'Close' : 'Menu'}
              </span>
              {/* Subtle indicator */}
              <div className="w-5 h-4 flex flex-col justify-center gap-1">
                <motion.span
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 3 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="block h-0.5 w-full bg-current rounded-full origin-center"
                />
                <motion.span
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -3 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="block h-0.5 w-full bg-current rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed top-[73px] left-4 right-4 z-50 max-w-xl mx-auto"
            >
              <div className="bg-[#111] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
                {/* Navigation Links */}
                <div className="p-2">
                  {menuLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="block px-6 py-4 text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Phone number in mobile menu */}
                <div className="px-6 py-4 border-t border-white/5 sm:hidden">
                  <a
                    href={PHONE_TEL}
                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5" strokeWidth={1.5} />
                    <span className="text-lg font-normal">{PHONE_NUMBER}</span>
                  </a>
                </div>

                {/* CTA in menu */}
                <div className="p-4 pt-2 border-t border-white/5">
                  <Link
                    href="/claim-your-county"
                    onClick={closeMenu}
                    className="block w-full btn-gradient py-4 rounded-xl font-bold text-lg uppercase tracking-wide text-center shadow-lg shadow-[#83d4c0]/20"
                  >
                    Claim Your County
                  </Link>
                </div>

                {/* Sign In link */}
                <div className="px-4 pb-4 text-center">
                  <a
                    href="https://app.homeflip.ai"
                    className="text-sm text-white/50 hover:text-white/80 transition-colors"
                  >
                    Already a member? Sign In
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
