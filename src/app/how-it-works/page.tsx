import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { Section } from "@/components/Section";
import { CheckCircle2, Search, Target, Zap, Clock, Shield } from "lucide-react";

export default function HowItWorksPage() {
  const deepDiveSteps = [
    {
      title: "Automated Court Monitoring",
      subtitle: "THE FUEL",
      desc: "Our systems sync directly with county court records every 24 hours. When a new probate case is filed with real estate assets, we capture it instantly. No more manual searching or waiting for monthly data dumps.",
      features: ["Real-time data capture", "Multi-county coverage", "Verified property ownership", "Attorney contact info"],
      icon: <Search className="w-8 h-8 text-[#5EEADC]" />
    },
    {
      title: "Timeline Intelligence Engine",
      subtitle: "THE BRAIN",
      desc: "We don't just give you a name. We track the entire probate lifecycle. Our AI analyzes case status, inventory filings, and delay signals to tell you exactly where the case stands today.",
      features: ["Case stage tracking", "Inventory filing alerts", "Property listing detection", "Motivation scoring"],
      icon: <Target className="w-8 h-8 text-[#A855F7]" />
    },
    {
      title: "Prioritized Deal Dashboard",
      subtitle: "THE VEHICLE",
      desc: "Stop guessing who to call. Your dashboard surfaces the highest-probability deals first based on 'Timeline Intelligence'. You'll know who is ready to sell now, not six months from now.",
      features: ["Smart sorting", "One-click skip tracing", "Lead management", "Daily task lists"],
      icon: <Zap className="w-8 h-8 text-[#5EEADC]" />
    },
    {
      title: "Guided Outreach & Closing",
      subtitle: "THE FINISH LINE",
      desc: "Follow our proven, respectful outreach system. We provide the workflows and follow-up sequences designed specifically for probate heirs. You focus on building rapport and closing.",
      features: ["Probate-specific scripts", "Multi-channel workflows", "Follow-up automation", "CRM integration"],
      icon: <Shield className="w-8 h-8 text-[#A855F7]" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        {/* Page Hero */}
        <Section className="bg-gray-50/50 !py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-full bg-[#5EEADC]/10 text-[#2DD4BF] text-sm font-bold mb-6 tracking-widest uppercase">
              THE METHODOLOGY
            </div>
            <h1 className="text-5xl sm:text-7xl font-black text-gray-900 mb-8 tracking-tight">
              The Science of <br />
              <span className="text-gray-400">Probate Timing.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Most investors fail at probate because they treat it like a static list. We treat it like a <strong>process</strong>. Here is how we help you win.
            </p>
          </div>
        </Section>

        {/* Detailed Steps */}
        <div className="py-20">
          {deepDiveSteps.map((step, i) => (
            <Section key={i} className={i % 2 === 1 ? "bg-gray-50/50" : "bg-white"}>
              <div className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-gray-100">
                      {step.icon}
                    </div>
                    <div className="text-sm font-black text-[#5EEADC] uppercase tracking-[0.2em]">
                      {step.subtitle}
                    </div>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8 tracking-tight">
                    {step.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                    {step.desc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-gray-700 font-bold text-sm">
                        <div className="w-6 h-6 rounded-full bg-[#5EEADC]/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-[#2DD4BF]" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full aspect-[4/3] bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5EEADC]/20 to-[#A855F7]/20 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/20 font-black text-6xl rotate-12 tracking-tighter opacity-10 uppercase">
                      Visualization
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#5EEADC] animate-pulse" />
                      <div className="space-y-2">
                        <div className="w-32 h-2 bg-white/40 rounded-full" />
                        <div className="w-20 h-2 bg-white/20 rounded-full" />
                      </div>
                    </div>
                  </div>
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
