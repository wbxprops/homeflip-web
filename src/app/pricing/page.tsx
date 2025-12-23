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
    <div className="min-h-screen bg-[#0a0118]">
      <Navbar />
      <main className="pt-24">
        <Section className="!pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-full bg-white/5 text-white/40 text-sm font-bold mb-6 tracking-widest uppercase border border-white/10">
              PRICING PLANS
            </div>
            <h1 className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tight">
              Simple, Transparent <br />
              <span className="text-[#22d3ee] italic">Pricing.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/60 leading-relaxed max-w-2xl mx-auto">
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
                    ? 'border-[#22d3ee] bg-white/[0.08] backdrop-blur-3xl text-white shadow-2xl shadow-[#22d3ee]/10 scale-105 z-10' 
                    : 'border-white/5 bg-black/20 text-white hover:border-white/10 shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#22d3ee] text-black px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-black mb-2 tracking-tight">{plan.name}</h3>
                  <p className="text-sm font-medium text-white/40">{plan.desc}</p>
                </div>
                
                <div className="mb-10">
                  <span className="text-4xl sm:text-5xl font-black tracking-tighter">{plan.price}</span>
                </div>

                <div className="flex-1">
                  <div className={`text-[10px] font-black uppercase tracking-[0.3em] mb-6 ${plan.popular ? 'text-[#22d3ee]' : 'text-white/20'}`}>
                    What&apos;s Included:
                  </div>
                  <ul className="space-y-5 mb-12">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-4">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          plan.popular ? 'bg-[#22d3ee]/20 text-[#22d3ee]' : 'bg-white/10 text-white/40'
                        }`}>
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/waitlist"
                  className={`block w-full text-center py-5 rounded-full font-black text-[10px] uppercase tracking-[0.3em] transition-all ${
                    plan.popular
                      ? 'btn-gradient shadow-xl shadow-[#22d3ee]/20 hover:scale-105 active:scale-95'
                      : 'bg-white text-black hover:bg-white/90 active:scale-95'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </Section>

        {/* Comparison CTA */}
        <Section className="bg-white/[0.02]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-white mb-6 tracking-tight">Need a custom plan?</h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              If you&apos;re an institutional buyer or a high-volume team looking for a custom integration, let&apos;s talk.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-[#22d3ee] font-black uppercase text-[10px] tracking-[0.3em] hover:text-[#2DD4BF] transition-colors"
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
