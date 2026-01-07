'use client';

import React from 'react';
import { ExternalLink, Video, Presentation, BookOpen, GraduationCap } from 'lucide-react';

export default function HubCommunityPage() {
  const features = [
    {
      icon: Video,
      title: 'Live Weekly Calls',
      description: 'Open Q&A and real deal discussions.',
    },
    {
      icon: Presentation,
      title: 'Live Weekly Trainings',
      description: 'Hands-on training sessions covering probate and acquisition strategy.',
    },
    {
      icon: BookOpen,
      title: 'D2S Property Magnet',
      description: 'End-to-end off-market property acquisition system.',
      meta: 'Self-guided · Included',
    },
    {
      icon: GraduationCap,
      title: 'Real Estate Empires',
      description: 'Foundational real estate investing course for newer investors.',
      meta: 'Self-guided · Included',
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-6 md:p-10 pt-10 md:pt-14 max-w-4xl mx-auto">

        {/* Page Header */}
        <header className="mb-8">
          <h1
            className="font-sans font-semibold text-2xl mb-2"
            style={{ color: 'rgba(255,255,255,0.95)' }}
          >
            Community Workspace
          </h1>
          <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
            A private investor community used by Homeflip.ai members for training, discussion, and deal support.
          </p>
        </header>

        {/* Primary Card - 2 Column Layout */}
        <div
          className="rounded-xl p-6 md:p-8 mb-8"
          style={{
            backgroundColor: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)'
          }}
        >
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

            {/* LEFT COLUMN — About the Community */}
            <div className="flex-1">
              <h2
                className="text-xs font-medium uppercase tracking-wider mb-5"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                About the Community
              </h2>

              <div className="space-y-4 text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <p>
                  The Homeflip.ai community is where investors go between deals—to ask questions, get feedback, and stay sharp on probate strategy.
                </p>
                <p>
                  It's hosted on Skool, a private community platform, and includes live weekly calls, structured training programs, and direct access to other active investors working probate in their own markets.
                </p>
                <p>
                  Whether you're working your first probate lead or refining a proven system, this is where the real conversations happen.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN — Status & Action */}
            <div className="lg:w-[280px] flex-shrink-0">
              <h2
                className="text-xs font-medium uppercase tracking-wider mb-5"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                Community Access
              </h2>

              {/* Status */}
              <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
                You haven't joined yet.
              </p>

              {/* Primary CTA */}
              <a
                href="https://www.skool.com/propertymagnet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 btn-gradient px-5 py-3 rounded-lg font-semibold text-sm hover:scale-[1.01] transition-all"
              >
                Join the Community on Skool
                <ExternalLink className="w-4 h-4" />
              </a>

              <p className="text-xs mt-3 text-center" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Opens the Homeflip.ai investor community on Skool in a new tab.
              </p>
            </div>

          </div>
        </div>

        {/* Secondary Section — Included Features */}
        <section>
          <div className="mb-5">
            <h2
              className="text-xs font-medium uppercase tracking-wider mb-1"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Included with Community Access
            </h2>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
              All of the following is included inside the Homeflip.ai community.
            </p>
          </div>

          {/* Feature Tiles */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-5 rounded-xl"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(131,212,192,0.1)' }}
                >
                  <feature.icon className="w-5 h-5" style={{ color: '#83d4c0' }} strokeWidth={1.5} />
                </div>
                <h3 className="font-medium text-[15px] mb-1" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {feature.description}
                </p>
                {feature.meta && (
                  <p className="text-xs mt-2" style={{ color: 'rgba(131,212,192,0.7)' }}>
                    {feature.meta}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
