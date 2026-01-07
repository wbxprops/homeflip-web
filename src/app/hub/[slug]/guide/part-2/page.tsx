'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react';

export default function GuidePart2Page() {
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
              Part II
            </span>
            <span className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              <Clock className="w-3.5 h-3.5" />
              7 min read
            </span>
          </div>
          <h1
            className="font-sans font-bold text-3xl md:text-4xl leading-tight mb-4"
            style={{ color: 'rgba(255,255,255,0.95)' }}
          >
            Finding Probate Cases
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            How to identify and source probate leads in your target market.
          </p>
        </header>

        {/* Content */}
        <div className="prose-dark space-y-8">
          <section>
            <h2 style={{ color: 'rgba(255,255,255,0.9)' }} className="text-xl font-semibold mb-4">
              Where Probate Cases Are Filed
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
              Probate cases are public record. They're filed at the county level in most states, typically at the Probate Court, Surrogate's Court, or as part of the general civil court system depending on your jurisdiction.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed">
              Every probate filing includes key information: the deceased's name, the executor or administrator, the attorney of record, and—most importantly for investors—an inventory of assets that often includes real property.
            </p>
          </section>

          <section>
            <h2 style={{ color: 'rgba(255,255,255,0.9)' }} className="text-xl font-semibold mb-4">
              Manual vs. Automated Sourcing
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div
                className="p-5 rounded-lg"
                style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
              >
                <h4 className="font-medium text-sm mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Manual Research
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  <li>• Visit courthouse in person</li>
                  <li>• Search online court portals</li>
                  <li>• Cross-reference with property records</li>
                  <li>• Time-intensive but free</li>
                </ul>
              </div>
              <div
                className="p-5 rounded-lg"
                style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
              >
                <h4 className="font-medium text-sm mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Automated Tools
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  <li>• Lead services aggregate data</li>
                  <li>• Property matching included</li>
                  <li>• Contact info appended</li>
                  <li>• Costs money but saves time</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ color: 'rgba(255,255,255,0.9)' }} className="text-xl font-semibold mb-4">
              What to Look For in a Case
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
              Not every probate case is a good lead. Focus your attention on cases that show these characteristics:
            </p>
            <ul className="space-y-3 mb-4">
              {[
                'Real property listed in the estate inventory',
                'Out-of-state executor (suggests they may want a quick sale)',
                'Multiple heirs (more complex = more motivation to simplify)',
                'Property in your target price range and area',
                'Cases filed 30-90 days ago (past initial grief, ready to act)'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#83d4c0] mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 style={{ color: 'rgba(255,255,255,0.9)' }} className="text-xl font-semibold mb-4">
              Matching Cases to Properties
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
              The probate filing often lists the decedent's address, but that's not always where the investment opportunity is. You'll want to:
            </p>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Search Property Records', desc: 'Look up all properties owned by the decedent in county tax records' },
                { step: '2', title: 'Verify Ownership', desc: 'Confirm the property is still in the estate (not already transferred)' },
                { step: '3', title: 'Assess Condition', desc: 'Drive by or use satellite imagery to gauge property condition' },
                { step: '4', title: 'Run Comps', desc: 'Understand the potential value before reaching out' },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-4 rounded-lg"
                  style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-semibold"
                    style={{ backgroundColor: 'rgba(131,212,192,0.1)', color: '#83d4c0' }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1" style={{ color: 'rgba(255,255,255,0.85)' }}>
                      {item.title}
                    </h4>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 style={{ color: 'rgba(255,255,255,0.9)' }} className="text-xl font-semibold mb-4">
              Building Your Pipeline
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
              Consistency matters more than volume. A steady flow of 20-30 new leads per week will outperform sporadic bursts of 100+ leads. Focus on:
            </p>
            <ul className="space-y-3">
              {[
                'Setting a weekly research schedule and sticking to it',
                'Tracking every lead in a CRM or spreadsheet',
                'Following up multiple times over 6-12 months',
                'Building relationships with probate attorneys for referrals'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#83d4c0] mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Navigation Footer */}
        <footer className="mt-14 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex justify-between">
            <Link
              href={`/hub/${slug}/guide/part-1`}
              className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition hover:bg-white/[0.04]"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              <ArrowLeft className="w-4 h-4" />
              Part I: What Is Probate?
            </Link>
            <Link
              href={`/hub/${slug}/guide/part-3`}
              className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition hover:bg-white/[0.04]"
              style={{ color: '#83d4c0' }}
            >
              Part III: Making Contact
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
