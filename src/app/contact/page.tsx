'use client';

import React from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { WaitlistForm } from "@/components/WaitlistForm";
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <Section className="!pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-full bg-slate-50 text-[#0891b2] text-sm font-bold mb-6 tracking-widest uppercase border border-slate-200">
              GET IN TOUCH
            </div>
            <h1 className="text-5xl sm:text-7xl font-black text-slate-900 mb-8 tracking-tight">
              Let&apos;s Build Your <br />
              <span className="text-[#0891b2] italic">Pipeline.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Have questions or want to join our private beta? Fill out the form below and our team will get back to you shortly.
            </p>
          </div>
        </Section>

        <Section className="!pt-0">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 sm:p-12 rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/50"
            >
            <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Claim Your County</h2>
              <WaitlistForm />
            </motion.div>
            
            <div className="space-y-12">
              <div className="group">
                <div className="w-12 h-12 rounded-2xl bg-[#0891b2]/10 flex items-center justify-center text-[#0891b2] mb-6 group-hover:bg-[#0891b2] group-hover:text-white transition-all shadow-lg shadow-[#0891b2]/10">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight uppercase">Support & Sales</h3>
                <p className="text-slate-500 mb-6 text-lg leading-relaxed">
                  For support inquiries or enterprise sales, please email our team directly:
                </p>
                <a 
                  href="mailto:hello@homeflip.ai" 
                  className="text-3xl font-black text-[#0891b2] hover:text-slate-900 transition-colors tracking-tight"
                >
                  hello@homeflip.ai
                </a>
              </div>

              <div className="group">
                <div className="w-12 h-12 rounded-2xl bg-[#0891b2]/10 flex items-center justify-center text-[#0891b2] mb-6 group-hover:bg-[#0891b2] group-hover:text-white transition-all shadow-lg shadow-[#0891b2]/10">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight uppercase">Location</h3>
                <p className="text-slate-600 text-lg leading-relaxed font-bold">
                  Based in Sunny Florida.<br />
                  <span className="text-slate-400 font-medium">Serving investors nationwide.</span>
                </p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/20 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0891b2]/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="w-6 h-6 text-[#0891b2]" />
                    <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase italic">Data Partnership</h3>
                  </div>
                  <p className="text-slate-500 text-lg leading-relaxed">
                    Are you a court reporter or data provider? We are always looking to partner with local providers for real-time probate records.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
