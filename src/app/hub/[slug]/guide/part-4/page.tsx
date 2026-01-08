'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { GuideSection } from '@/components/hub';
import { ArrowRight, Users, Rocket, Sparkles } from 'lucide-react';

export default function GuidePart4Page() {
  const params = useParams();
  const slug = params.slug as string;

  const parts = [
    {
      id: 'not-on-your-own',
      title: "You're Not on Your Own",
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            We've covered a lot.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            The opportunity is massive. Nearly twice as many probate properties as foreclosures, every single year. Demographics that guarantee this won't slow down anytime soon.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            But finding those leads? Every county is different. Every courthouse has its own system. Some are online, some aren't. Some publish what you need, others make you dig for it.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            And once you have leads, you're tracking timelines, managing follow-up cadences, writing letters, making calls, and staying organized across hundreds of cases that might take months to close.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            If you're feeling a little overwhelmed right now, that's completely normal. This <em>is</em> a lot.
          </p>
          <div
            className="p-5 rounded-xl"
            style={{ backgroundColor: 'rgba(131,212,192,0.08)', border: '1px solid rgba(131,212,192,0.2)' }}
          >
            <p className="font-semibold" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Here's the good news: you're not on your own.
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'two-paths',
      title: 'Two Paths Forward',
      content: (
        <>
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
                Maybe you want to learn more before jumping in. Maybe you're not sure if probate is right for you. That's okay.
              </p>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Join our free community on Skool. It's called the D2S Property Magnet, and it's a growing group of real estate investors at every level. You can take free courses covering everything from financing your deals to managing contractors to finding deals from ten different sources. All of our educational materials are completely free.
              </p>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                We also host live coaching calls multiple times per week. Hop on, ask questions, get to know us. No pressure. No commitment.
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
                You've read the guide. You understand the opportunity. You're ready to start working probate in your market. Here's what to do:
              </p>
              <ol className="space-y-2 text-sm mb-4">
                {[
                  'Click the "Claim Your County" button',
                  'Select your state and the counties you want to work',
                  'Schedule an implementation call with my team',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-semibold"
                      style={{ backgroundColor: 'rgba(131,212,192,0.15)', color: '#83d4c0' }}
                    >
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                I want to be clear about that call. This isn't some cleverly disguised sales pitch. It's an opportunity for us to learn more about your business and figure out how we can help you grow. We want to understand your goals, your market, and what you're trying to build.
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
        </>
      ),
    },
    {
      id: 'the-platform',
      title: 'The Platform That Ties It Together',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Now, everything I've taught you in this guide can absolutely be done with spreadsheets and sticky notes. I did it that way myself for years. But managing timelines, tracking follow-ups, scoring leads by stage, and staying organized across months of activity? That gets messy fast.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            That's why my team and I built Homeflip.ai.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            It's not a generic CRM we slapped our logo on. We built it specifically for real estate investors working probate. It manages all the complexity of the probate process in one central location. Lead tracking, timeline intelligence, follow-up management, deal pipeline. Everything we talked about in this guide.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            And it's more than just software. When you join, you also get access to our coaching calls, our training library, and our community of investors. In select markets, we even provide the leads directly.
          </p>
          <div className="grid gap-3 mb-6">
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
              You're not just signing up for a tool. You're joining us early and helping shape where this platform goes.
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'whats-next',
      title: "What's Next",
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            You've learned why probate is the most consistent, lowest-competition lead source in real estate. You've seen how to find leads county by county. You know how to work those leads over time and build the kind of trust that closes deals.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Now it's time to decide what you want to do with it.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            If you want to learn more first, join our free community. Take a course. Hop on a coaching call. Get comfortable.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            If you're ready to go, claim your county and let's talk.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            Either way, you're not doing this alone. I've been doing this for 20 years. My team is here to help. And I built Homeflip.ai specifically so investors like you don't have to figure all of this out from scratch.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            I'll see you inside.
          </p>
          <div className="pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Gary Bailey
            </p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Founder, Homeflip.ai
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href={`/hub/${slug}/upgrade`}
              className="inline-flex items-center justify-center gap-2 btn-gradient px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wide hover:scale-[1.02] transition-all"
            >
              Claim Your County
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://skool.com/propertymagnet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition hover:bg-white/[0.04]"
              style={{ color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              Join Free Community
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </>
      ),
    },
  ];

  return (
    <GuideSection
      sectionNumber="Part IV"
      sectionTitle="Tying It All Together"
      sectionSubtitle="Your next steps and how Homeflip.ai brings it all together."
      parts={parts}
      prevSection={{
        href: `/hub/${slug}/guide/part-3`,
        label: 'Part III: Working the Leads',
      }}
    />
  );
}
