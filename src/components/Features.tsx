'use client';

import React from 'react';
import { Section } from './Section';
import { Search, Home, Users, Bell, Target, CheckCircle2, ShieldCheck, GraduationCap, Video, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Features = () => {
  const steps = [
    {
      icon: <Search className="w-10 h-10" />,
      title: "Automated Discovery",
      subtitle: "The Fuel",
      desc: "Our AI monitors county court records around the clock. When a new probate case is filed with real estate assets, it hits your dashboard in hours, not weeks.",
      color: "#0891b2"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Timeline Intelligence",
      subtitle: "The Brain",
      desc: "We track the entire case lifecycle: inventory, delays, listings. We tell you who is ready to sell now, not just who is on a list.",
      color: "#83d4c0"
    },
    {
      icon: <CheckCircle2 className="w-10 h-10" />,
      title: "Guided Outreach",
      subtitle: "The Vehicle",
      desc: "Follow proven, respectful workflows designed specifically for probate. You focus on building rapport and closing the deal.",
      color: "#0891b2"
    }
  ];

  const additionalFeatures = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Property Research",
      desc: "We research each estate for property ownership so you know exactly which cases have real estate worth pursuing."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Enhanced Contacts",
      desc: "Full data enhancement provides accurate contact info for all parties including fiduciaries, attorneys, and administrators so you can make the most of your time."
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Case Monitoring",
      desc: "Your AI agent monitors all active cases and alerts you when something changes, like a property transfer, MLS listing, or case closure."
    },
  ];

  const communityFeatures = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Course Library",
      desc: "Access our complete library of courses on real estate financing, wholesaling, and investing strategies to sharpen your skills."
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Live Coaching Calls",
      desc: "Join live coaching calls multiple times per week where you can get your specific questions answered by experienced investors."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Investor Community",
      desc: "Connect with other investors, share wins, ask questions, and learn from a community that's all working toward the same goals."
    },
  ];

  return (
    <Section id="features" className="bg-white overflow-hidden">
      {/* Main Section Header */}
      <div className="text-center mb-24">
        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-900 mb-6 tracking-tight">
          Everything You Need <br />
          <span className="text-slate-400">to Close More Deals</span>
        </h2>
      </div>

      {/* THE PROCESS - 3-Step Flow */}
      <div className="mb-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-slate-50 text-slate-500 text-sm font-bold tracking-widest uppercase border border-slate-200">
            THE PROCESS
          </span>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated Connecting Line */}
          <div className="hidden lg:block absolute top-[50px] left-0 right-0 h-px bg-slate-100 z-0">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#0891b2] via-[#83d4c0] to-[#0891b2]"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-16 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center group"
              >
                <div className="relative mb-10 inline-block">
                  <div
                    className="w-24 h-24 rounded-[2rem] flex items-center justify-center text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[#0891b2]/20"
                    style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)` }}
                  >
                    {step.icon}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-slate-900 text-xs font-black shadow-sm">
                    {i + 1}
                  </div>
                </div>
                <div className="text-xs font-black text-[#0891b2] uppercase tracking-[0.2em] mb-2">{step.subtitle}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed px-4 text-base">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* THE PLATFORM - Feature Cards */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-slate-50 text-slate-500 text-sm font-bold tracking-widest uppercase border border-slate-200">
            THE PLATFORM
          </span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:border-[#0891b2]/30 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#0891b2] mb-8 group-hover:bg-[#0891b2] group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* THE COMMUNITY - Coaching & Education */}
      <div className="mt-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-slate-50 text-slate-500 text-sm font-bold tracking-widest uppercase border border-slate-200">
            THE COMMUNITY
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xl text-slate-600 mb-12 max-w-3xl mx-auto"
        >
          No need to pay for expensive coaching programs. World-class education and support is included with every Homeflip.ai subscription.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {communityFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:border-[#0891b2]/30 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#0891b2] mb-8 group-hover:bg-[#0891b2] group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ACCURACY GUARANTEE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 relative"
      >
        <div className="relative bg-gradient-to-br from-[#0891b2]/5 via-white to-[#83d4c0]/5 rounded-[2.5rem] border border-[#0891b2]/20 p-10 md:p-14 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0891b2 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

          <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Seal/Badge */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#0891b2] to-[#83d4c0] flex items-center justify-center shadow-2xl shadow-[#0891b2]/30">
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white flex items-center justify-center">
                    <div className="text-center">
                      <ShieldCheck className="w-12 h-12 md:w-14 md:h-14 text-[#0891b2] mx-auto mb-1" />
                      <div className="text-[10px] md:text-xs font-black text-[#0891b2] uppercase tracking-wider">Guaranteed</div>
                    </div>
                  </div>
                </div>
                {/* Decorative Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#83d4c0]/30 animate-spin" style={{ animationDuration: '20s' }} />
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left flex-1">
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                Accuracy Guarantee
              </h3>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-6">
                We stand behind our data. If any information is inaccurate for any reason,
                <span className="text-[#0891b2] font-bold"> request a credit. No questions asked.</span>
              </p>
              <p className="text-slate-500 text-base">
                Your success depends on accurate data. We're committed to providing the most reliable probate intelligence in the industry.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
