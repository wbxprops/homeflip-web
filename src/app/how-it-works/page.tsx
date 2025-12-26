import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { Section } from "@/components/Section";
import { CheckCircle2, Search, Target, Zap, Shield, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorksPage() {
  const deepDiveSteps = [
    {
      title: "Automated Court Monitoring",
      subtitle: "THE FUEL",
      desc: "Our systems sync directly with county court records every 24 hours. When a new probate case is filed with real estate assets, it captures it instantly. No more manual searching or waiting for monthly data dumps.",
      features: ["Real-time data capture", "Multi-county coverage", "Verified property ownership", "Attorney contact info"],
      icon: <Search className="w-8 h-8 text-[#0891b2]" />,
      visualization: (
        <div className="relative w-full space-y-4">
          {[
            { label: "Case #2025-PB-9942", status: "NEW", time: "2m ago", area: "Hamilton County" },
            { label: "Inventory Filed", status: "UPDATE", time: "1h ago", area: "Butler County" },
            { label: "Case #2025-PB-9941", status: "NEW", time: "3h ago", area: "Warren County" },
            { label: "Property Detected", status: "INTEL", time: "4h ago", area: "Hamilton County" }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group/item hover:border-[#0891b2]/30 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${item.status === 'NEW' ? 'bg-[#0891b2] shadow-[0_0_12px_rgba(8,145,178,0.5)]' : item.status === 'UPDATE' ? 'bg-[#83d4c0]' : 'bg-purple-400'}`} />
                <div>
                  <div className="text-sm font-black text-slate-900 uppercase tracking-tight">{item.label}</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.area}</div>
                </div>
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded-md">{item.time}</span>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      title: "Timeline Intelligence Engine",
      subtitle: "THE BRAIN",
      desc: "We don't just give you a name. We track the entire probate lifecycle. Our AI analyzes case status, inventory filings, and delay signals to tell you exactly where the case stands today.",
      features: ["Case stage tracking", "Inventory filing alerts", "Property listing detection", "Motivation scoring"],
      icon: <Target className="w-8 h-8 text-[#83d4c0]" />,
      visualization: (
        <div className="relative w-full p-4">
          {[
            { step: "Case Filed", date: "Jan 12", active: true },
            { step: "Inventory Submitted", date: "Feb 08", active: true },
            { step: "Appraisal Received", date: "Feb 22", active: true, current: true },
            { step: "Order to Sell", date: "Expected Mar 15", active: false }
          ].map((s, idx) => (
            <div key={idx} className="flex gap-6 mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className={`w-6 h-6 rounded-full border-4 ${s.active ? 'bg-[#0891b2] border-[#0891b2]' : 'bg-white border-slate-200'} ${s.current ? 'ring-8 ring-[#0891b2]/10 shadow-[0_0_20px_rgba(8,145,178,0.3)]' : ''}`} />
                {idx < 3 && <div className={`w-0.5 h-16 ${s.active ? 'bg-[#0891b2]' : 'bg-slate-100'}`} />}
              </div>
              <div className="-mt-1">
                <div className={`text-sm font-black uppercase tracking-[0.15em] ${s.active ? 'text-slate-900' : 'text-slate-300'}`}>{s.step}</div>
                <div className={`text-xs font-bold ${s.active ? 'text-[#0891b2]' : 'text-slate-300'}`}>{s.date}</div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Prioritized Deal Dashboard",
      subtitle: "THE VEHICLE",
      desc: "Stop guessing who to call. Your dashboard surfaces the highest-probability deals first based on 'Timeline Intelligence'. You'll know who is ready to sell now, not six months from now.",
      features: ["Smart sorting", "One-click skip tracing", "Lead management", "Daily task lists"],
      icon: <Zap className="w-8 h-8 text-[#0891b2]" />,
      visualization: (
        <div className="relative w-full space-y-4">
          <div className="bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-xl relative overflow-hidden">
             <div className="flex justify-between items-start mb-6">
                <div>
                   <div className="text-[10px] font-black text-[#0891b2] uppercase tracking-[0.2em] mb-1">High Probability</div>
                   <h4 className="text-xl font-black text-slate-900 tracking-tighter">124 Main Street</h4>
                </div>
                <div className="bg-[#83d4c0]/20 text-[#155e75] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                   94 Score
                </div>
             </div>
             <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 bg-slate-50 rounded-xl">
                   <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Equity</div>
                   <div className="text-sm font-black text-slate-900">$240K</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                   <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Status</div>
                   <div className="text-sm font-black text-green-600">Ready</div>
                </div>
             </div>
             <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '94%' }}
                  className="h-full bg-gradient-to-r from-[#83d4c0] to-[#0891b2]"
                />
             </div>
          </div>
          <div className="bg-white/60 p-6 rounded-[2.5rem] border border-slate-100 flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-slate-100" />
             <div className="flex-1 space-y-2">
                <div className="w-24 h-2 bg-slate-200 rounded-full" />
                <div className="w-16 h-2 bg-slate-100 rounded-full" />
             </div>
          </div>
        </div>
      )
    },
    {
      title: "Guided Outreach & Closing",
      subtitle: "THE FINISH LINE",
      desc: "Follow our proven, respectful outreach system. We provide the workflows and follow-up sequences designed specifically for probate heirs. You focus on building rapport and closing.",
      features: ["Probate-specific scripts", "Multi-channel workflows", "Follow-up automation", "CRM integration"],
      icon: <Shield className="w-8 h-8 text-[#83d4c0]" />,
      visualization: (
        <div className="relative w-full space-y-3">
          {[
            { icon: <Mail size={14} />, text: "Send Introduction Letter", status: "completed" },
            { icon: <Phone size={14} />, text: "Follow-up Call (Day 7)", status: "active" },
            { icon: <MapPin size={14} />, text: "Property Site Visit", status: "pending" },
            { icon: <CheckCircle2 size={14} />, text: "Present Cash Offer", status: "pending" }
          ].map((item, idx) => (
            <div key={idx} className={`p-4 rounded-xl border flex items-center justify-between transition-all ${item.status === 'completed' ? 'bg-slate-50 border-slate-100 opacity-60' : item.status === 'active' ? 'bg-white border-[#0891b2] shadow-lg shadow-[#0891b2]/5 scale-[1.02] z-10' : 'bg-white border-slate-100'}`}>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${item.status === 'active' ? 'bg-[#0891b2] text-white' : 'bg-slate-100 text-slate-400'}`}>
                  {item.icon}
                </div>
                <span className={`text-sm font-bold ${item.status === 'active' ? 'text-slate-900' : 'text-slate-500'}`}>{item.text}</span>
              </div>
              {item.status === 'completed' && <CheckCircle2 size={16} className="text-[#83d4c0]" />}
              {item.status === 'active' && <div className="w-2 h-2 rounded-full bg-[#0891b2] animate-pulse" />}
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        {/* Page Hero */}
        <Section className="bg-slate-50/50 !py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-full bg-white text-[#0891b2] text-sm font-bold mb-6 tracking-widest uppercase border border-slate-200 shadow-sm">
              THE METHODOLOGY
            </div>
            <h1 className="text-5xl sm:text-7xl font-black text-slate-900 mb-8 tracking-tight">
              The Science of <br />
              <span className="text-slate-400 italic">Probate Timing.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto">
              Most investors fail at probate because they treat it like a static list. We treat it like a <strong className="text-slate-900">process</strong>. Here is how we help you win.
            </p>
          </div>
        </Section>

        {/* Detailed Steps */}
        <div className="py-20">
          {deepDiveSteps.map((step, i) => (
            <Section key={i} className={i % 2 === 1 ? "bg-slate-50/50" : "bg-transparent"}>
              <div className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-slate-100">
                      {step.icon}
                    </div>
                    <div className="text-[10px] font-black text-[#0891b2] uppercase tracking-[0.3em]">
                      {step.subtitle}
                    </div>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-8 tracking-tight">
                    {step.title}
                  </h2>
                  <p className="text-xl text-slate-500 mb-10 leading-relaxed">
                    {step.desc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                        <div className="w-6 h-6 rounded-full bg-[#0891b2]/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-[#0891b2]" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full aspect-[4/3] bg-slate-50 rounded-[3rem] border border-slate-200 overflow-hidden shadow-2xl relative group p-12 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0891b2]/5 to-[#83d4c0]/5 group-hover:opacity-100 transition-opacity" />
                  {step.visualization}
                </div>
              </div>
            </Section>
          ))}
        </div>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
