'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock, Users, Rocket, Sparkles } from 'lucide-react';

export default function GuidePart4Page() {
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
              Part IV
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
            Tying It All Together
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Your next steps and how Homeflip.ai brings it all together.
          </p>
        </header>

        {/* Content */}
        <div className="prose-dark space-y-8">
          <section>
            <h2 style={{ color: 'rgba(255,255,255,0.9)' }} className="text-xl font-semibold mb-4">
              You're Not on Your Own
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
              We've covered a lot. The opportunity is massive. Nearly twice as many probate properties as foreclosures, every single year. Demographics that guarantee this won't slow down anytime soon.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
              But finding those leads? Every county is different. Every courthouse has its own system. Some are online, some aren't. Some publish what you need, others make you dig for it.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed">
              And once you have leads, you're tracking timelines, managing follow-up cadences, writing letters, making calls, and staying organized across hundreds of cases that might take months to close.
            </p>
          </section>

          <section>
            <h2 style={{ color: 'rgba(255,255,255,0.9)' }} className="text-xl font-semibold mb-4">
              Two Paths Forward
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
              Depending on where you are in your investing journey, here's what I'd suggest:
            </p>

            <div className="space-y-4">
              {/* Path 1: Still Exploring */}
              <div
                className="p-6 rounded-xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(131,212,192,0.1)' }}
                  >
                    <Users className="w-5 h-5" style={{ color: '#83d4c0' }} />
                  </div>
                  <h3 className="font-semibold" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    If You're Still Exploring
                  </h3>
                </div>
                <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Join our free community on Skool. It's called the D2S Property Magnet, and it's a growing group of real estate investors at every level. Free courses, live coaching calls multiple times per week. No pressure. No commitment.
                </p>
                <a
                  href="https://skool.com/propertymagnet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium transition hover:opacity-80"
                  style={{ color: '#83d4c0' }}
                >
                  Join Free Community
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Path 2: Ready to Take Action */}
              <div
                className="p-6 rounded-xl"
                style={{ backgroundColor: 'rgba(131,212,192,0.05)', border: '1px solid rgba(131,212,192,0.15)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(131,212,192,0.15)' }}
                  >
                    <Rocket className="w-5 h-5" style={{ color: '#83d4c0' }} />
                  </div>
                  <h3 className="font-semibold" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    If You're Ready to Take Action
                  </h3>
                </div>
                <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  You've read the guide. You understand the opportunity. You're ready to start working probate in your market. Click below, select your counties, and schedule an implementation call with my team.
                </p>
                <Link
                  href={`/hub/${slug}/upgrade`}
                  className="inline-flex items-center gap-2 btn-gradient px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wide hover:scale-[1.02] transition-all"
                >
                  Claim Your County
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ color: 'rgba(255,255,255,0.9)' }} className="text-xl font-semibold mb-4">
              The Platform That Ties It Together
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
              Everything I've taught you in this guide can absolutely be done with spreadsheets and sticky notes. I did it that way myself for years. But managing timelines, tracking follow-ups, scoring leads by stage, and staying organized across months of activity? That gets messy fast.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
              That's why my team and I built Homeflip.ai. It's not a generic CRM we slapped our logo on. We built it specifically for real estate investors working probate.
            </p>

            <div className="grid gap-3 mt-6">
              {[
                'Lead tracking and timeline intelligence',
                'Follow-up management and deal pipeline',
                'Access to coaching calls and training library',
                'Community of investors working probate',
                'Direct leads in select markets',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg"
                  style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                >
                  <Sparkles className="w-4 h-4 flex-shrink-0" style={{ color: '#83d4c0' }} />
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div
              className="p-6 rounded-xl text-center"
              style={{ backgroundColor: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)' }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#a78bfa' }}>
                Founding Member Opportunity
              </p>
              <p className="text-sm mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Homeflip.ai is currently in BETA. Get in on the ground floor as a founding member.
              </p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                You're not just signing up for a tool. You're helping shape where this platform goes.
              </p>
            </div>
          </section>

          <section>
            <h2 style={{ color: 'rgba(255,255,255,0.9)' }} className="text-xl font-semibold mb-4">
              What's Next
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
              You've learned why probate is the most consistent, lowest-competition lead source in real estate. You've seen how to find leads county by county. You know how to work those leads over time and build the kind of trust that closes deals.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
              Now it's time to decide what you want to do with it. Either way, you're not doing this alone.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed">
              I'll see you inside.
            </p>
            <p className="mt-4 font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Gary Bailey
              <br />
              <span className="text-sm font-normal" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Founder, Homeflip.ai
              </span>
            </p>
          </section>
        </div>

        {/* Navigation Footer */}
        <footer className="mt-14 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex justify-between items-center">
            <Link
              href={`/hub/${slug}/guide/part-3`}
              className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition hover:bg-white/[0.04]"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              <ArrowLeft className="w-4 h-4" />
              Part III: Working the Leads
            </Link>
            <Link
              href={`/hub/${slug}/upgrade`}
              className="flex items-center gap-2 btn-gradient px-5 py-3 rounded-lg text-sm font-bold uppercase tracking-wide hover:scale-[1.02] transition-all"
            >
              Claim Your County
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
