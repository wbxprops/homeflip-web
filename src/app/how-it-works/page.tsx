import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { Section } from "@/components/Section";

export default function HowItWorksPage() {
  const deepDiveSteps = [
    {
      title: "Automated Court Monitoring",
      subtitle: "The Fuel",
      desc: "Our systems monitor county court records 24/7. When a new probate case is filed that involves real estate, we capture it instantly. No more manual searching or waiting for monthly data dumps.",
      features: ["Real-time data capture", "Multi-county coverage", "Verified property ownership", "Attorney contact info"]
    },
    {
      title: "AI-Powered Timeline Intelligence",
      subtitle: "The Brain",
      desc: "We don't just give you a name. We track the entire probate lifecycle. Our AI analyzes the timing, case status, and motivation signals to tell you exactly where the case stands.",
      features: ["Case stage tracking", "Inventory filing alerts", "Property listing detection", "Motivation scoring"]
    },
    {
      title: "Prioritized Deal Dashboard",
      subtitle: "The Vehicle",
      desc: "Stop guessing who to call. Your dashboard surfaces the highest-probability deals first based on 'Timeline Intelligence'. You'll know who is ready to sell now, not six months from now.",
      features: ["Smart sorting", "One-click skip tracing", "Lead management", "Daily task lists"]
    },
    {
      title: "Guided Outreach & Closing",
      subtitle: "The Finish Line",
      desc: "Follow our proven, respectful outreach system. We provide the scripts, workflows, and follow-up sequences designed specifically for probate heirs. You focus on building rapport and closing.",
      features: ["Probate-specific scripts", "Multi-channel workflows", "Follow-up automation", "CRM integration"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        {/* Page Hero */}
        <Section className="bg-gray-50 !py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              The Science of <span className="text-[#5EEADC]">Probate Timing</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Most investors fail at probate because they treat it like a static list. We treat it like a timeline. Here is how we help you win.
            </p>
          </div>
        </Section>

        {/* Detailed Steps */}
        <div className="py-12">
          {deepDiveSteps.map((step, i) => (
            <Section key={i} className={i % 2 === 1 ? "bg-gray-50" : "bg-white"}>
              <div className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="inline-block px-4 py-1 rounded-full bg-[#5EEADC]/10 text-[#2DD4BF] font-bold text-sm mb-4">
                    STEP {i + 1}: {step.subtitle}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                    {step.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {step.desc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-700 font-medium">
                        <div className="w-5 h-5 rounded-full bg-[#5EEADC]/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-[#2DD4BF] text-xs">✓</span>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full aspect-video bg-gray-200 rounded-3xl overflow-hidden shadow-2xl relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5EEADC]/20 to-[#A855F7]/20 flex items-center justify-center text-gray-400 font-bold">
                    [Visual Placeholder: {step.title}]
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

