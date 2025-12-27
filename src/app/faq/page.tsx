'use client';

import React from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { Section } from "@/components/Section";
import { motion } from 'framer-motion';

export default function FAQPage() {
  const faqCategories = [
    {
      name: "Pricing & Value",
      items: [
        {
          q: "How much does Homeflip.ai cost?",
          a: `We believe in transparent pricing with no long-term contracts.

Our pricing model includes a $95 licensing fee per county per month, which secures your position in that market (we limit licenses based on county population and case flow).

Leads are sold in packages of 30, 50, or 100, ranging from $4-$7 per lead depending on package size.

There's also a one-time setup fee to configure your AI agent for your county and your particular real estate business.

While there are no long-term contracts, if there's a waitlist for your county and you don't continue your subscription, you risk losing your license until another spot opens up.`
        },
        {
          q: "What's included beyond just the leads?",
          a: `Your subscription includes far more than just leads.

Every license includes full access to our CRM, built from the ground up specifically for probate investing. This isn't a white-labeled generic platform with a new logo slapped on it. We built this system ourselves because nothing else on the market did what we needed it to do.

You also get our proven follow-up framework that ensures you're taking the right actions at the right times, based on historical probate case data in your market.

Finally, every subscription includes live coaching and education. We're not successful unless you're successful, so we hold small group coaching calls multiple times per week to help you get the highest return on your investment.`
        },
        {
          q: "Are these verified to have real estate?",
          a: "While some probate lead providers charge extra to verify real estate, all of our cases automatically include property ownership verification. If for any reason the property is not in the estate, we'll credit you for that case."
        },
        {
          q: "Is there a contract or can I cancel anytime?",
          a: `There are no long-term contracts. You can pause or cancel your subscription at any time. We want you to stay because the platform delivers value, not because you're locked in.

That said, many investors choose to pre-pay their licensing fees to secure their position in their market and avoid getting put on a waitlist.

The flexibility works both ways: if you're in a cycle of your business where you don't need leads, you can pause your subscription and resume when you're ready to buy more.`
        }
      ]
    },
    {
      name: "Getting Started",
      items: [
        {
          q: "I'm new to real estate investing. Is this right for me?",
          a: `Honestly? Being new might be your biggest advantage.

Most "experienced" investors are stuck chasing the same overcrowded strategies: fighting for MLS deals, competing with hedge funds, or burning cash on PPC ads. They've built habits that are hard to break.

You get to start fresh with a strategy that has far less competition and sellers who actually want to hear from you. Probate heirs aren't listing on the MLS and fielding 50 offers. They're looking for someone who can solve their problem quickly and professionally.

Here's a risk-free way to get started: for just $95/month, you get full access to our CRM and coaching. Learn the ropes, build your skills, and when you're ready to start buying probate leads, simply add them to your subscription. And while our CRM is built for probate, it works for any lead source, so you can use it to manage your entire pipeline from day one.`
        },
        {
          q: "I don't understand probate law. Do I need to?",
          a: "You don't need to. The legal aspects are handled by attorneys and the court. Your job is to build relationships and make offers, just like any other deal. Homeflip.ai guides you through the process so you never feel lost."
        },
        {
          q: "Don't probate deals take forever to close?",
          a: `This is one of the biggest misconceptions about probate. The reason most investors think probate takes forever is because they only find out about properties after they've been sitting in probate for months. By then, the best deals are already gone, and only the problematic properties remain.

The secret is that the really good properties sell quickly. If you get access to leads faster than other investors, you get first pick of the best opportunities before anyone else even knows they exist.`
        }
      ]
    },
    {
      name: "Ethics & Approach",
      items: [
        {
          q: "Isn't contacting probate families unethical?",
          a: "We advocate for respectful, professional outreach. By the time a case is filed, families are dealing with practical matters. Many heirs are relieved to find a solution for a property they cannot manage. Our systems are built to facilitate helpful conversations, not aggressive sales tactics."
        },
        {
          q: "Heirs want full market value. They won't sell at a discount.",
          a: "Some do, and that's fine. They're not your customer. But many heirs prioritize speed, certainty, and simplicity over maximizing price. No repairs, no staging, no showings. A 'discount' is actually a fair trade for the convenience you provide."
        }
      ]
    },
    {
      name: "Lead Quality & Volume",
      items: [
        {
          q: "Are there enough probate leads in my market?",
          a: `Over 2.5 million people die in the US each year, and many owned real estate. Even small counties see dozens of new cases monthly.

Here's the thing: we use sliding scale pricing based on your market size. If you're in a rural area, we'll put together a lead package that makes sense for your volume so you're not overpaying. If you're in a major metro, you'll have more opportunity than you can handle.

Either way, you're making the most of your investment.`
        },
        {
          q: "How do I know the leads are accurate?",
          a: `Our AI agent pulls data directly from county court records and then verifies property ownership through our comprehensive national database of property owners.

If you ever receive inaccurate information, just request a credit. No questions asked. We stand behind our data with an accuracy guarantee.`
        },
        {
          q: "How fresh are the leads?",
          a: `Your AI agent monitors court records around the clock. When a new case is filed or the status changes, your dashboard is updated in hours, not weeks.

Because some counties release their data on different schedules, we always strive to provide you with the most current data available. Your AI agent also has the ability to research older cases to find hidden opportunities that other investors may have missed.`
        }
      ]
    },
    {
      name: "Competition & Exclusivity",
      items: [
        {
          q: "How many other investors are getting the same leads?",
          a: `Let's be honest: probate case information is public record, so we can't guarantee you're the only investor who knows about a case.

What we can guarantee is that within our platform, we strictly limit the number of licenses per county based on population and case volume. You won't be competing against dozens of other Homeflip.ai subscribers in your market.

The real advantage? While other investors are manually digging through courthouse records or waiting on stale lists, your AI agent is already tracking case updates and telling you exactly when to reach out.`
        },
        {
          q: "What makes this different from other probate lead services?",
          a: `Most services sell you a static list of filings and call it a day. You get names and dates, but no insight into where the case actually stands or when the family is ready to sell.

We built something completely different. Your AI agent monitors court records around the clock, tracking the entire lifecycle of each case. When a property moves to the next stage, you know about it in hours, not weeks. You're not guessing when to reach out. You're reaching out at exactly the right moment.

And leads are just the beginning. You also get a CRM built specifically for probate, a proven follow-up framework based on 15 years of historical case data, and live coaching calls multiple times per week. This isn't a list service. It's a complete system designed to help you reach your real estate investing goals.`
        }
      ]
    },
    {
      name: "Platform & Support",
      items: [
        {
          q: "What if I need help getting started?",
          a: `Whether you're a brand new investor looking to close your first deal, an experienced investor ready to scale, or someone who's finally ready to take their business to the next level, our coaching and education program is unmatched in the industry.

Your subscription includes access to our entire course library covering real estate financing, wholesaling, and investing strategies. But courses are just the start.

You also get live coaching calls where you can ask questions specific to your business and get answers from investors who've been doing this for 15 years. This isn't generic advice. It's real guidance tailored to your situation.`
        },
        {
          q: "Is my county available?",
          a: `Because we're currently in private beta, odds are your county is still available. Not exactly a problem most investors have, right?

This is the advantage of being an early mover. You're locking in your market before the competition even knows this opportunity exists.

Join the waitlist and we'll let you know your county's availability. As this program grows, these spots will fill up. Get in while the getting is good.`
        },
        {
          q: "Can I use this for any real estate investing strategy?",
          a: `Absolutely. Whether you're wholesaling, flipping, buying rentals, or using creative financing, probate leads work for any strategy.

Here's the truth every successful investor knows: you make your money when you buy. Every winning strategy starts with acquiring the property right. Probate properties give you the opportunity to do exactly that, making them one of the keys to building a successful real estate investing business.`
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <Section className="!pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1 rounded-full bg-slate-50 text-slate-500 text-sm font-bold mb-6 tracking-widest uppercase border border-slate-200"
            >
              FAQ
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-7xl font-black text-slate-900 mb-8 tracking-tight"
            >
              Common{' '}
              <span className="text-slate-400 italic">Questions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto"
            >
              Everything you need to know about the platform and the strategy.
            </motion.p>
          </div>
        </Section>

        <Section className="!pt-0">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-slate-200" />
                  <h2 className="text-xs font-black text-[#0891b2] uppercase tracking-[0.3em]">
                    {category.name}
                  </h2>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                {/* FAQ Items - All Expanded */}
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="border border-slate-200 rounded-2xl overflow-hidden"
                    >
                      <div className="px-6 py-5 bg-slate-50 border-b border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900">{item.q}</h3>
                      </div>
                      <div className="px-6 py-5 text-slate-600 leading-relaxed whitespace-pre-line">
                        {item.a}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
