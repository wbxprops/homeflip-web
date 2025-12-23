import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { Section } from "@/components/Section";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <Section className="!pb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Our Mission: Making Probate <span className="text-[#5EEADC]">Simple</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We started Homeflip.ai because we saw too many real estate investors struggling with inconsistent deal flow while one of the most reliable markets—probate—remained largely untouched and misunderstood.
            </p>
          </div>
        </Section>

        <Section className="bg-gray-50">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">The Problem We&apos;re Solving</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Most probate lead vendors sell you a CSV of names and dates. They don&apos;t tell you if the property has already been sold, if the case is stalled, or if the heirs are even ready to talk.
                </p>
                <p>
                  Investors end up calling at the wrong time, annoying families, and wasting thousands on marketing that doesn&apos;t convert.
                </p>
                <p className="font-bold text-gray-900">
                  We decided there had to be a better way.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
              <div className="text-4xl mb-6">💡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Homeflip Approach</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe that probate isn&apos;t just about data—it&apos;s about <strong>timing</strong> and <strong>empathy</strong>. By combining court-synced timeline intelligence with guided, respectful workflows, we help investors find win-win deals while providing a valuable service to families in transition.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5EEADC] to-[#A855F7]" />
                <div>
                  <div className="font-bold text-gray-900">The Homeflip Team</div>
                  <div className="text-sm text-gray-500">Investors & Engineers</div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Simplicity First",
                desc: "Real estate is complex enough. Our tools are designed to be intuitive and get out of your way so you can focus on deals.",
                icon: "✨"
              },
              {
                title: "Respect the Process",
                desc: "We prioritize ethical outreach. Our systems are built to help families, not exploit them.",
                icon: "🤝"
              },
              {
                title: "Data Integrity",
                desc: "We don't settle for 'good enough' data. We sync directly with court records to ensure you have the most accurate information.",
                icon: "🛡️"
              }
            ].map((value, i) => (
              <div key={i} className="p-8 rounded-3xl border border-gray-100 hover:border-[#5EEADC]/30 transition-all">
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
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

