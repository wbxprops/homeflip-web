import React from 'react';
import { Section } from './Section';

export const Objections = () => {
  const items = [
    {
      q: "Isn't contacting probate families... unethical?",
      a: "We get it—this is the #1 concern. Here's the reality: by the time a probate case is filed, families are dealing with practical matters, including property. Many heirs are relieved to hear from someone who can help. You're offering a solution, not creating a problem. The key is respectful, professional outreach—and that's exactly what our system is designed for."
    },
    {
      q: "Heirs want full market value—they won't sell at a discount.",
      a: "Some do, and that's fine—they're not your customer. But many heirs prioritize speed, certainty, and simplicity over maximizing price. No repairs, no staging, no showings, no waiting months for a buyer. A “discount” is actually a fair trade for the convenience and certainty you provide."
    },
    {
      q: "I don't understand probate law.",
      a: "You don't need to. The attorneys and courts handle the legal process. Your job is to find motivated sellers and make offers—same as any other deal. Title companies know how to close probate sales. And Homeflip.ai guides you through every step so you never feel lost."
    },
    {
      q: "Are there enough probate leads in my market?",
      a: "2.5 million people die in the US each year—many owned real estate. Even small counties see dozens of new probate cases monthly. And with Homeflip.ai, you can easily expand to multiple counties. There's more opportunity than you think."
    }
  ];

  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-black text-gray-900">
          &ldquo;But wait...&rdquo;
        </h2>
        <p className="mt-6 text-xl text-gray-600">
          Let&apos;s address the questions you&apos;re probably thinking.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              &ldquo;{item.q}&rdquo;
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

