import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { Section } from "@/components/Section";
import { HelpCircle } from "lucide-react";

export default function FAQPage() {
  const faqCategories = [
    {
      name: "Product & Strategy",
      items: [
        {
          q: "What exactly is Homeflip.ai?",
          a: "Homeflip.ai is a lead intelligence platform for real estate investors. We specialize in probate real estate, providing court-synced data, timeline tracking, and AI-powered prioritization to help you find off-market deals consistently."
        },
        {
          q: "How is this different from buying a lead list?",
          a: "Lead lists are static snapshots. Homeflip.ai is a live monitor. We track the entire probate lifecycle—filing, inventory, delays, property listings—so you know the status of a case today, not just the day it was filed."
        },
        {
          q: "Is Homeflip.ai a CRM?",
          a: "We include basic CRM functionality to manage your probate leads, but we are primarily a lead intelligence and discovery platform. We are designed to work alongside your existing tools or as a standalone system."
        }
      ]
    },
    {
      name: "Ethics & Compliance",
      items: [
        {
          q: "Isn't contacting probate families unethical?",
          a: "We advocate for respectful, professional outreach. By the time a case is filed, families are dealing with practical matters. Many heirs are relieved to find a solution for a property they cannot manage. Our systems are built to facilitate helpful conversations."
        },
        {
          q: "Do I need to be a lawyer to use this?",
          a: "No. You are an investor looking to buy property. The legal aspects of probate are handled by attorneys and the court. Your job is to build relationships with heirs and make offers, just like any other real estate deal."
        }
      ]
    },
    {
      name: "Data Coverage",
      items: [
        {
          q: "What counties do you cover?",
          a: "We are currently live in select major counties across the US and are expanding rapidly. Join our waitlist to see if your market is currently supported or next on our list."
        },
        {
          q: "How fresh is the data?",
          a: "Our systems sync with court records daily. While jurisdictions vary, we aim to provide the most current information available, often within 24-48 hours of a court filing or status change."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0118]">
      <Navbar />
      <main className="pt-24">
        <Section className="!pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-full bg-white/5 text-white/40 text-sm font-bold mb-6 tracking-widest uppercase border border-white/10">
              RESOURCES
            </div>
            <h1 className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tight">
              Frequently Asked <br />
              <span className="text-[#22d3ee] italic">Questions.</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about Homeflip.ai and the science of probate real estate investing.
            </p>
          </div>
        </Section>

        <Section className="!pt-0">
          <div className="max-w-5xl mx-auto space-y-24">
            {faqCategories.map((category, i) => (
              <div key={i}>
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-px flex-1 bg-white/5" />
                  <h2 className="text-[10px] font-black text-[#22d3ee] uppercase tracking-[0.4em]">
                    {category.name}
                  </h2>
                  <div className="h-px flex-1 bg-white/5" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {category.items.map((item, j) => (
                    <div key={j} className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-transparent hover:bg-white/[0.05] hover:border-[#22d3ee]/30 hover:shadow-2xl transition-all duration-500">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 shadow-sm flex items-center justify-center text-[#22d3ee] mb-6 group-hover:scale-110 transition-transform">
                        <HelpCircle className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-black text-white mb-4 tracking-tight group-hover:text-[#22d3ee] transition-colors">
                        {item.q}
                      </h3>
                      <p className="text-white/40 leading-relaxed font-medium text-sm">
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
