import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { Section } from "@/components/Section";
import { Rocket, Users, Shield, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <Section className="!pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-full bg-slate-50 text-[#0891b2] text-sm font-bold mb-6 tracking-widest uppercase border border-slate-200">
              OUR MISSION
            </div>
            <h1 className="text-5xl sm:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.05]">
              Making Probate <br />
              <span className="text-[#0891b2] italic">Simple.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto">
              We started Homeflip.ai because we saw too many real estate investors struggling with inconsistent deal flow while one of the most reliable markets—probate—remained largely untouched and misunderstood.
            </p>
          </div>
        </Section>

        <Section className="bg-slate-50/50 text-slate-900 rounded-[4rem] mx-6 my-12 border border-slate-100 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0891b2]/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-[#0891b2] text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-slate-100 shadow-sm">
                The Problem
              </div>
              <h2 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight leading-tight text-slate-900">
                Data is everywhere. <br />
                <span className="text-slate-300 italic">Timing is not.</span>
              </h2>
              <div className="space-y-8 text-lg text-slate-500 leading-relaxed">
                <p>
                  Most probate lead vendors sell you a CSV of names and dates. They don&apos;t tell you if the property has already been sold, if the case is stalled, or if the heirs are even ready to talk.
                </p>
                <p>
                  Investors end up calling at the wrong time, annoying families, and wasting thousands on marketing that doesn&apos;t convert.
                </p>
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <p className="font-bold text-slate-900 text-xl tracking-tight leading-relaxed">
                    &quot;We decided there had to be a better way—one built on intelligence, not just records.&quot;
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0891b2]/20 to-[#83d4c0]/20 blur-[100px] opacity-10" />
              <div className="relative bg-white p-12 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
                <div className="w-16 h-16 rounded-2xl bg-[#0891b2] flex items-center justify-center text-white shadow-lg shadow-[#0891b2]/30 mb-8 transition-transform hover:scale-110">
                  <Rocket className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">The Homeflip Approach</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                  We believe that probate isn&apos;t just about data—it&apos;s about <strong className="text-slate-900">timing</strong> and <strong className="text-slate-900">empathy</strong>. By combining court-synced timeline intelligence with guided, respectful workflows, we help investors find win-win deals while providing a valuable service to families in transition.
                </p>
                <div className="flex items-center gap-4 border-t border-slate-100 pt-8">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0891b2] to-[#83d4c0] flex items-center justify-center text-white font-black shadow-lg">
                    H
                  </div>
                  <div>
                    <div className="font-black text-slate-900 tracking-tight uppercase text-sm">The Homeflip Team</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Investors & Engineers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Simplicity First",
                desc: "Real estate is complex enough. Our tools are designed to be intuitive and get out of your way so you can focus on what matters: closing deals.",
                icon: <Zap className="w-10 h-10" />
              },
              {
                title: "Respect the Process",
                desc: "We prioritize ethical outreach. Our systems are built to help families solve a real problem, not just exploit a record.",
                icon: <Users className="w-10 h-10" />
              },
              {
                title: "Data Integrity",
                desc: "We don't settle for 'good enough' data. We sync directly with court records to ensure you have the most accurate, real-time information.",
                icon: <Shield className="w-10 h-10" />
              }
            ].map((value, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-[#0891b2]/30 transition-all group duration-500 shadow-xl shadow-slate-200/20">
                <div className="text-[#0891b2] mb-8 p-4 bg-white rounded-2xl shadow-sm inline-block group-hover:bg-[#0891b2] group-hover:text-white transition-all">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed text-lg">{value.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
