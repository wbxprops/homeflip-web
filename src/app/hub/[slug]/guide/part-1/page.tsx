'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowRight, Clock } from 'lucide-react';

export default function GuidePart1Page() {
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
              Part I
            </span>
            <span className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              <Clock className="w-3.5 h-3.5" />
              5 min read
            </span>
          </div>
          <h1
            className="font-sans font-bold text-3xl md:text-4xl leading-tight mb-4"
            style={{ color: 'rgba(255,255,255,0.95)' }}
          >
            What Is Probate?
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Understanding the probate process and why it creates unique opportunities for real estate investors.
          </p>
        </header>

        {/* Content */}
        <div className="prose-dark space-y-8">
          <section>
            <h2 style={{ color: 'rgba(255,255,255,0.9)' }} className="text-xl font-semibold mb-4">
              The Basics
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
              Probate is the legal process that occurs after someone passes away. It involves validating their will (if one exists), identifying and inventorying assets, paying debts and taxes, and ultimately distributing what remains to heirs or beneficiaries.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed">
              For real estate investors, probate represents a unique moment in time. Families often inherit properties they don't want, can't afford to maintain, or simply need to liquidate quickly. This creates motivated sellers in a way that few other lead sources can match.
            </p>
          </section>

          <section>
            <h2 style={{ color: 'rgba(255,255,255,0.9)' }} className="text-xl font-semibold mb-4">
              Why Probate Properties Are Different
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
              Unlike traditional sellers who have time to prepare their home for market, probate situations often involve:
            </p>
            <ul className="space-y-3 mb-4">
              {[
                'Properties that have been neglected or need significant repairs',
                'Heirs who live out of state and want a quick, clean sale',
                'Multiple family members who need to agree on a sale',
                'Emotional situations where convenience matters more than maximizing price',
                'Time pressure from court deadlines or carrying costs'
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
              The Probate Timeline
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
              The probate process typically takes 6-12 months, though it can vary significantly by state and complexity. Key milestones include:
            </p>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Filing', desc: 'The executor files the will and petition with the probate court' },
                { step: '2', title: 'Appointment', desc: 'Court officially appoints the executor or administrator' },
                { step: '3', title: 'Inventory', desc: 'All assets, including real estate, are identified and valued' },
                { step: '4', title: 'Notice Period', desc: 'Creditors are notified and given time to file claims' },
                { step: '5', title: 'Settlement', desc: 'Debts are paid and remaining assets distributed to heirs' },
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
              Key Players
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
              Understanding who's involved in a probate case helps you know who to contact and how to approach them:
            </p>
            <div className="grid gap-4">
              {[
                { role: 'Executor/Administrator', desc: 'The person appointed to manage the estate. They have legal authority to sell property.' },
                { role: 'Heirs/Beneficiaries', desc: 'Those who will inherit. May need to approve major decisions depending on the will.' },
                { role: 'Probate Attorney', desc: 'Legal counsel guiding the executor through the process. Often a good contact point.' },
              ].map((item) => (
                <div
                  key={item.role}
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
                >
                  <h4 className="font-medium text-sm mb-1" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    {item.role}
                  </h4>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Navigation Footer */}
        <footer className="mt-14 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex justify-end">
            <Link
              href={`/hub/${slug}/guide/part-2`}
              className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition hover:bg-white/[0.04]"
              style={{ color: '#83d4c0' }}
            >
              Part II: Finding Cases
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
