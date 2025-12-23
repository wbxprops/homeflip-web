import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { Section } from "@/components/Section";

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
        "Standard Email Support"
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
        "Custom Lead Scoring"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <Section className="!pb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Simple, Transparent <span className="text-[#5EEADC]">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We&apos;re currently in private beta. Join the waitlist to be notified when we open up new spots and get early-bird pricing.
            </p>
          </div>
        </Section>

        <Section className="!pt-0">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className={`relative p-8 rounded-3xl border-2 transition-all ${
                  plan.popular 
                    ? 'border-[#5EEADC] shadow-2xl shadow-[#5EEADC]/10 scale-105 z-10' 
                    : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#5EEADC] text-gray-900 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6 text-sm">{plan.desc}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-[#5EEADC]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#2DD4BF] text-xs">✓</span>
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#waitlist"
                  className={`block w-full text-center py-4 rounded-full font-bold transition-all ${
                    plan.popular
                      ? 'btn-gradient shadow-lg shadow-[#5EEADC]/25 hover:scale-105'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </Section>

        <Section className="bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6 text-left">
              <div>
                <h4 className="font-bold text-gray-900">Do you offer a free trial?</h4>
                <p className="text-gray-600">Once we launch publicly, we will offer a 7-day free trial on all plans so you can experience the power of Timeline Intelligence.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Can I change my plan later?</h4>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Is there a contract?</h4>
                <p className="text-gray-600">No, all our plans are month-to-month and you can cancel at any time with no penalties.</p>
              </div>
            </div>
          </div>
        </Section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

