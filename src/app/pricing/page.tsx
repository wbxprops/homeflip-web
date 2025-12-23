import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { Section } from "@/components/Section";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      desc: "For individual investors starting in probate.",
      price: "Coming Soon",
      features: [
        "Up to 2 Counties",
        "Basic Timeline Tracking",
        "Lead Management CRM",
        "Standard Email Support",
        "Daily Court Sync"
      ],
      cta: "Join the Waitlist",
      popular: false
    },
    {
      name: "Pro",
      desc: "For active investors scaling their deal flow.",
      price: "Coming Soon",
      features: [
        "Up to 10 Counties",
        "Full Timeline Intelligence",
        "AI Prioritization Engine",
        "One-Click Skip Tracing",
        "Priority Support",
        "Direct Mail Integration"
      ],
      cta: "Join the Waitlist",
      popular: true
    },
    {
      name: "Enterprise",
      desc: "For teams and institutional buyers.",
      price: "Coming Soon",
      features: [
        "Unlimited Counties",
        "Custom API Access",
        "Team Collaboration Tools",
        "Dedicated Account Manager",
        "Custom Lead Scoring",
        "White-Glove Onboarding"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <Section className="!pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-full bg-gray-50 text-gray-400 text-sm font-bold mb-6 tracking-widest uppercase">
              PRICING PLANS
            </div>
            <h1 className="text-5xl sm:text-7xl font-black text-gray-900 mb-8 tracking-tight">
              Simple, Transparent <br />
              <span className="text-[#5EEADC]">Pricing.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We&apos;re currently in private beta. Join the waitlist to be notified when we open up new spots and lock in early-bird pricing.
            </p>
          </div>
        </Section>

        <Section className="!pt-0">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className={`relative p-10 rounded-[3rem] border transition-all duration-500 flex flex-col ${
                  plan.popular 
                    ? 'border-[#5EEADC] bg-gray-900 text-white shadow-2xl shadow-[#5EEADC]/20 scale-105 z-10' 
                    : 'border-gray-100 bg-white text-gray-900 hover:border-gray-300 shadow-xl shadow-gray-200/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#5EEADC] text-gray-900 px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className={`text-2xl font-black mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                  <p className={`text-sm font-medium ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>{plan.desc}</p>
                </div>
                
                <div className="mb-10">
                  <span className={`text-4xl sm:text-5xl font-black ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                </div>

                <div className="flex-1">
                  <div className={`text-xs font-black uppercase tracking-widest mb-6 ${plan.popular ? 'text-[#5EEADC]' : 'text-gray-400'}`}>
                    What&apos;s Included:
                  </div>
                  <ul className="space-y-5 mb-12">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-4">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          plan.popular ? 'bg-[#5EEADC]/20 text-[#5EEADC]' : 'bg-[#5EEADC]/10 text-[#2DD4BF]'
                        }`}>
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className={`text-sm font-bold ${plan.popular ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/waitlist"
                  className={`block w-full text-center py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all ${
                    plan.popular
                      ? 'btn-gradient shadow-xl shadow-[#5EEADC]/30 hover:scale-105 active:scale-95'
                      : 'bg-gray-900 text-white hover:bg-gray-800 active:scale-95'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </Section>

        {/* Comparison CTA */}
        <Section className="bg-gray-50/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">Need a custom plan?</h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              If you&apos;re an institutional buyer or a high-volume team looking for a custom integration, let&apos;s talk.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-[#5EEADC] font-black uppercase tracking-widest hover:text-[#2DD4BF] transition-colors"
            >
              Contact Sales <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
