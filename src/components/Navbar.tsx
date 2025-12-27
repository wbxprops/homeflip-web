'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

interface NavbarProps {
  minimal?: boolean;
}

export const Navbar = ({ minimal = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { href: '/#probate-investing', label: 'Why Probate' },
    { href: '/#features', label: 'How It Works' },
    { href: '/#faq', label: 'FAQs' },
    { href: '/claim-your-county', label: 'Claim Your County', highlight: true },
  ];

  const closeMenu = () => setIsOpen(false);

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
            <span className="text-2xl font-black text-white tracking-tight">
              Homeflip<span className="text-[#83d4c0]">.ai</span>
            </span>
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
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center group" onClick={closeMenu}>
            <span className="text-2xl font-black text-white tracking-tight">
              Homeflip<span className="text-[#83d4c0]">.ai</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              'highlight' in link && link.highlight ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="btn-gradient px-5 py-2 rounded-lg text-sm font-bold uppercase tracking-tighter shadow-lg shadow-[#83d4c0]/20 hover:scale-105 transition-transform"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-bold text-slate-400 hover:text-[#83d4c0] transition-colors uppercase tracking-tighter"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button - Stylish animated icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <motion.span
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 7 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-full bg-[#83d4c0] rounded-full origin-center"
              />
              <motion.span
                animate={{
                  opacity: isOpen ? 0 : 1,
                  x: isOpen ? -10 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-full bg-[#83d4c0] rounded-full"
              />
              <motion.span
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -7 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-full bg-[#83d4c0] rounded-full origin-center"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed top-[73px] left-4 right-4 z-50 md:hidden"
            >
              <div className="bg-[#111] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
                <div className="p-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="block px-6 py-4 text-lg font-bold text-white hover:bg-white/5 rounded-xl transition-colors uppercase tracking-tighter"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA in mobile menu */}
                <div className="p-4 pt-2 border-t border-white/5">
                  <Link
                    href="/claim-your-county"
                    onClick={closeMenu}
                    className="block w-full btn-gradient py-4 rounded-xl font-hero font-[900] text-xl uppercase tracking-tighter text-center shadow-lg shadow-[#83d4c0]/20"
                  >
                    Claim Your County
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
