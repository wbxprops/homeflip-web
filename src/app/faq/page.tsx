import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { Section } from "@/components/Section";

export default function FAQPage() {
  const faqCategories = [
    {
      name: "The Basics",
      items: [
        {
          q: "What exactly is Homeflip.ai?",
          a: "Homeflip.ai is a lead intelligence platform for real estate investors. We specialize in probate real estate, providing court-synced data, timeline tracking, and AI-powered prioritization to help you find off-market deals consistently."
        },
        {
          q: "Is Homeflip.ai a CRM?",
          a: "We include basic CRM functionality to manage your probate leads, but we are primarily a lead intelligence and discovery platform. We are designed to work alongside your existing tools or as a standalone system for your probate marketing."
        },
        {
          q: "How is this different from buying a lead list?",
          a: "Lead lists are static snapshots in time. Homeflip.ai is a live monitor. We track the entire probate lifecycle—filing, inventory, delays, property listings—so you know the status of a case today, not just the day it was filed."
        }
      ]
    },
    {
      name: "Ethical & Legal",
      items: [
        {
          q: "Isn't contacting probate families unethical?",
          a: "We advocate for respectful, professional outreach. By the time a case is filed, families are dealing with practical matters. Many heirs are relieved to find a solution for a property they cannot manage. Our systems are built to facilitate helpful, not high-pressure, conversations."
        },
        {
          q: "Do I need to be a lawyer to use this?",
          a: "No. You are an investor looking to buy property. The legal aspects of probate are handled by attorneys and the court. Your job is to build relationships with heirs and make offers, just like any other real estate deal."
        }
      ]
    },
    {
      name: "Data & Coverage",
      items: [
        {
          q: "What counties do you cover?",
          a: "We are currently live in select major counties across the US and are expanding rapidly. Join our waitlist to see if your market is currently supported or next on our list."
        },
        {
          q: "How fresh is the data?",
          a: "Our systems sync with court records daily. While some jurisdictions have different reporting speeds, we aim to provide the most current information available, often within 24-48 hours of a court filing or status change."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <Section className="!pb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Frequently Asked <span className="text-[#5EEADC]">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to know about Homeflip.ai and probate real estate investing.
            </p>
          </div>
        </Section>

        <Section className="!pt-0">
          <div className="max-w-4xl mx-auto space-y-16">
            {faqCategories.map((category, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">
                  {category.name}
                </h2>
                <div className="space-y-8">
                  {category.items.map((item, j) => (
                    <div key={j} className="group">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5EEADC] transition-colors">
                        {item.q}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
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

