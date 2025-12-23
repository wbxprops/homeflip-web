import React from 'react';
import { Section } from './Section';
import Link from 'next/link';

export const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "We Find the Leads",
      desc: "Our AI monitors court records daily, identifying new probate cases with real estate. Fresh leads hit your dashboard automatically—no manual work required.",
      gradient: "from-[#5EEADC] to-[#2DD4BF]",
      shadow: "shadow-[#5EEADC]/30"
    },
    {
      number: 2,
      title: "We Prioritize for You",
      desc: "Not all leads are equal. Smart scoring analyzes property value, equity, and motivation signals to surface your best opportunities first.",
      gradient: "from-[#A855F7] to-[#7C3AED]",
      shadow: "shadow-[#A855F7]/30"
    },
    {
      number: 3,
      title: "You Close Deals",
      desc: "Follow guided workflows to reach out, build rapport, and close. We give you the system—you build the relationships and make deals happen.",
      gradient: "from-[#5EEADC] to-[#A855F7]",
      shadow: "shadow-[#5EEADC]/30"
    }
  ];

  return (
    <Section id="how-it-works">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-black text-gray-900">
          How It Works
        </h2>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          From lead to close in three simple steps.
        </p>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-24 left-[20%] right-[20%] h-1 bg-gradient-to-r from-[#5EEADC] via-[#A855F7] to-[#5EEADC] rounded-full" />

        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              <div className={`w-24 h-24 bg-gradient-to-br ${step.gradient} rounded-3xl flex items-center justify-center text-4xl font-black text-white mx-auto shadow-2xl ${step.shadow}`}>
                {step.number}
              </div>
              <h3 className="mt-8 text-2xl font-bold text-gray-900">{step.title}</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/#waitlist"
          className="inline-block btn-gradient px-10 py-5 rounded-full font-bold text-lg transition-all hover:shadow-xl hover:shadow-[#5EEADC]/30 hover:scale-105"
        >
          Start Finding Deals
        </Link>
      </div>
    </Section>
  );
};

