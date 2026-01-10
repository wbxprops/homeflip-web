import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <Section className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-5xl sm:text-7xl font-black text-slate-900 mb-6 tracking-tight">
              Ready to Get Started?
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10">
              Claim your county and start receiving probate leads before your competition.
            </p>
            <Link
              href="/claim-your-county"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white rounded-full bg-gradient-to-r from-[#5EEADC] to-[#A855F7] hover:opacity-90 transition-opacity shadow-lg"
            >
              Claim Your County
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
