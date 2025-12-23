import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { Section } from "@/components/Section";
import { CheckCircle2, Rocket, Users, Shield, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <Section className="!pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-full bg-[#5EEADC]/10 text-[#2DD4BF] text-sm font-bold mb-6 tracking-widest uppercase">
              OUR MISSION
            </div>
            <h1 className="text-5xl sm:text-7xl font-black text-gray-900 mb-8 tracking-tight leading-[1.05]">
              Making Probate <br />
              <span className="text-[#5EEADC]">Simple.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We started Homeflip.ai because we saw too many real estate investors struggling with inconsistent deal flow while one of the most reliable markets—probate—remained largely misunderstood.
            </p>
          </div>
        </Section>

        <Section className="bg-gray-900 text-white rounded-[4rem] mx-6 my-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-[#5EEADC] text-xs font-black uppercase tracking-widest mb-8">
                The Problem
              </div>
              <h2 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight leading-tight">
                Data is everywhere. <br />
                <span className="text-gray-500">Timing is not.</span>
              </h2>
              <div className="space-y-8 text-lg text-gray-400 leading-relaxed">
                <p>
                  Most probate lead vendors sell you a CSV of names and dates. They don&apos;t tell you if the property has already been sold, if the case is stalled, or if the heirs are even ready to talk.
                </p>
                <p>
                  Investors end up calling at the wrong time, annoying families, and wasting thousands on marketing that doesn&apos;t convert.
                </p>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="font-bold text-white text-xl">
                    &quot;We decided there had to be a better way—one built on intelligence, not just records.&quot;
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5EEADC]/20 to-[#A855F7]/20 blur-[100px]" />
              <div className="relative bg-white p-12 rounded-[3rem] shadow-2xl">
                <div className="w-16 h-16 rounded-2xl bg-[#5EEADC] flex items-center justify-center text-gray-900 shadow-lg shadow-[#5EEADC]/30 mb-8">
                  <Rocket className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">The Homeflip Approach</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We believe that probate isn&apos;t just about data—it&apos;s about <strong>timing</strong> and <strong>empathy</strong>. By combining court-synced timeline intelligence with guided, respectful workflows, we help investors find win-win deals while providing a valuable service to families in transition.
                </p>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-8">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#5EEADC] to-[#A855F7] flex items-center justify-center text-white font-black shadow-lg">
                    H
                  </div>
                  <div>
                    <div className="font-black text-gray-900 tracking-tight uppercase">The Homeflip Team</div>
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Investors & Engineers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">Our Core Values</h2>
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
              <div key={i} className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:border-[#5EEADC]/30 hover:shadow-2xl transition-all group duration-500">
                <div className="text-[#5EEADC] mb-8 p-4 bg-white rounded-2xl shadow-sm inline-block group-hover:bg-[#5EEADC] group-hover:text-white transition-all">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{value.desc}</p>
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
