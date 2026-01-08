'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Clock, Download } from 'lucide-react';

export default function GuidePart3Page() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <div className="flex-1 overflow-y-auto">
      <article className="max-w-3xl mx-auto px-6 md:px-10 py-10 md:py-14">
        {/* Document Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-medium uppercase tracking-wider px-2 py-1 rounded"
              style={{ backgroundColor: 'rgba(131,212,192,0.1)', color: '#83d4c0' }}
            >
              Part III
            </span>
            <span className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              <Clock className="w-3.5 h-3.5" />
              8 min read
            </span>
          </div>
          <h1
            className="font-sans font-bold text-3xl md:text-4xl leading-tight mb-4"
            style={{ color: 'rgba(255,255,255,0.95)' }}
          >
            Making Contact
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            How to reach out to probate leads with empathy and professionalism.
          </p>
        </header>

        {/* Content */}
        <div className="prose-dark space-y-8">
          <section>
            <h2 style={{ color: 'rgba(255,255,255,0.9)' }} className="text-xl font-semibold mb-4">
              The Right Mindset
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
              Before we talk tactics, let's talk mindset. These families have lost someone. Your role is to offer a genuine solution to a real problem—not to pressure anyone into a sale.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed">
              The best probate investors approach every conversation with empathy first. You're offering to make their life easier during a difficult time. If they're not interested, thank them and move on. If they are, you've just started a relationship that could lead to a deal.
            </p>
          </section>

          <section>
            <h2 style={{ color: 'rgba(255,255,255,0.9)' }} className="text-xl font-semibold mb-4">
              Who to Contact
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
              In order of authority and effectiveness:
            </p>
            <div className="space-y-4">
              {[
                {
                  role: 'Executor/Administrator',
                  desc: 'Has legal authority to sell. Your primary target.',
                  tip: 'Often listed on the probate filing with their address.'
                },
                {
                  role: 'Probate Attorney',
                  desc: 'Advises the executor. Can be a great referral source.',
                  tip: 'Build long-term relationships. They handle multiple estates.'
                },
                {
                  role: 'Heirs/Beneficiaries',
                  desc: "May influence decisions even if they don't have direct authority.",
                  tip: "Be careful—they may not have decision-making power."
                },
              ].map((item) => (
                <div
                  key={item.role}
                  className="p-5 rounded-lg"
                  style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
                >
                  <h4 className="font-medium text-sm mb-2" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    {item.role}
                  </h4>
                  <p className="text-sm mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {item.desc}
                  </p>
                  <p className="text-xs" style={{ color: 'rgba(131,212,192,0.8)' }}>
                    Tip: {item.tip}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 style={{ color: 'rgba(255,255,255,0.9)' }} className="text-xl font-semibold mb-4">
              Contact Methods
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
              Multi-touch campaigns work best. Don't rely on a single letter or call. Use a combination:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {[
                { method: 'Direct Mail', notes: 'Start here. Handwritten envelopes get opened. Send 3-5 letters over 6 months.' },
                { method: 'Phone Calls', notes: 'Follow up 7-10 days after mail. Keep it brief and helpful.' },
                { method: 'Door Knocking', notes: 'High conversion but time-intensive. Best for high-value properties.' },
                { method: 'Text/Voicemail', notes: 'Use sparingly. Works well for follow-up with warm leads.' },
              ].map((item) => (
                <div
                  key={item.method}
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
                >
                  <h4 className="font-medium text-sm mb-2" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    {item.method}
                  </h4>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {item.notes}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 style={{ color: 'rgba(255,255,255,0.9)' }} className="text-xl font-semibold mb-4">
              What to Say
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
              Keep your message simple and focused on their needs, not yours. A basic framework:
            </p>
            <div
              className="p-5 rounded-lg mb-4"
              style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p className="text-sm italic leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                "I understand you're handling the estate for [decedent's name]. I work with families in similar situations and wanted to see if I might be able to help with the property on [address]. If the family is considering selling, I'd be happy to make a fair, no-obligation offer that could close on your timeline. No pressure either way—I just wanted to reach out in case it's helpful."
              </p>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed">
              Notice what's not in there: no "cash buyer" hype, no urgency tactics, no "we buy houses" language. Just a straightforward, respectful offer to help.
            </p>
          </section>

          <section>
            <h2 style={{ color: 'rgba(255,255,255,0.9)' }} className="text-xl font-semibold mb-4">
              Follow-Up Cadence
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
              Most deals happen on the 3rd-7th touch. Don't give up after one attempt.
            </p>
            <div className="space-y-3">
              {[
                { timing: 'Week 1', action: 'Send initial letter' },
                { timing: 'Week 2', action: 'Follow-up call' },
                { timing: 'Week 4', action: 'Second letter' },
                { timing: 'Week 8', action: 'Third letter with different angle' },
                { timing: 'Week 12', action: 'Final letter or call' },
                { timing: 'Month 6+', action: 'Quarterly check-in if no sale recorded' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-3 rounded-lg"
                  style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                >
                  <span
                    className="text-xs font-medium px-2 py-1 rounded w-20 text-center"
                    style={{ backgroundColor: 'rgba(131,212,192,0.1)', color: '#83d4c0' }}
                  >
                    {item.timing}
                  </span>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {item.action}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 style={{ color: 'rgba(255,255,255,0.9)' }} className="text-xl font-semibold mb-4">
              Common Objections
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
              Be prepared to address these concerns with empathy:
            </p>
            <div className="space-y-4">
              {[
                {
                  objection: '"We're not ready to sell yet"',
                  response: 'Completely understand. Would it be okay if I checked back in a few months? The offer will still be there when you're ready.'
                },
                {
                  objection: '"We're going to list with a realtor"',
                  response: 'That makes sense—you may get a higher price that way. If it doesn't work out or you'd prefer a faster, simpler sale, feel free to reach out.'
                },
                {
                  objection: '"How did you get my information?"',
                  response: 'Probate filings are public record. I review them to connect with families who might need help selling inherited property.'
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
                >
                  <p className="text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    {item.objection}
                  </p>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {item.response}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* PDF Download - Secondary Action */}
        <div
          className="mt-10 p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div>
            <p className="text-sm font-medium mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Prefer offline reading?
            </p>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Download the complete guide as a PDF
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition hover:bg-white/[0.04]"
            style={{ color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>

        {/* Navigation Footer */}
        <footer className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex justify-between items-center">
            <Link
              href={`/hub/${slug}/guide/part-2`}
              className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition hover:bg-white/[0.04]"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              <ArrowLeft className="w-4 h-4" />
              Part II: Finding Cases
            </Link>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              End of guide
            </span>
          </div>
        </footer>
      </article>
    </div>
  );
}
