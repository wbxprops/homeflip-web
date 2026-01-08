'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { GuideSection } from '@/components/hub';

export default function GuidePart1Page() {
  const params = useParams();
  const slug = params.slug as string;

  const parts = [
    {
      id: 'the-course-that-changed-everything',
      title: 'The Course That Changed Everything',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            In 2010, I paid $3,600 for a binder.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Not a software program. Not an online course. Just a binder full of printed materials from a guy named Than Merrill, one of the original real estate gurus. I'd been hearing about probate investing for years, but everyone I talked to said the same thing: "I tried it, couldn't figure it out."
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            That's exactly why I wanted to crack it.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            I'd been working pre-foreclosures at the time, and it was brutal. The data was bad. The sellers didn't want to talk to me. Everyone wanted something from them, and they just wanted to bury their heads in the sand. There had to be a better way.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            So I went through that binder cover to cover. And then I started calling.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            The first day I called probate leads from the court records, I got a qualified deal. Day one.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            That property was in Middletown, Ohio. A clean house a lady had inherited from her mom. We wholesaled it for about $6,000. Not a huge payday, but that wasn't the point. What blew my mind was this: I was the first investor she talked to. I was the <em>only</em> investor she talked to. No competition. No bidding war. Just a conversation.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed">
            That deal proved to me this was different.
          </p>
        </>
      ),
    },
    {
      id: 'why-probate-works',
      title: "Why Probate Works When Other Sources Don't",
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Twenty years and over 2,000 deals later, probate is still my number one source. I do 30 to 50 probate deals every single year. It's the one lead source that has consistently produced, week in, week out, year in, year out, regardless of what the market is doing.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Foreclosures dry up. Direct mail gets expensive. Driving for dollars burns you out. But probate? The opportunities never stop. And here's why:
          </p>
          <div
            className="p-5 rounded-xl mb-6"
            style={{ backgroundColor: 'rgba(131,212,192,0.08)', border: '1px solid rgba(131,212,192,0.2)' }}
          >
            <p className="font-semibold" style={{ color: 'rgba(255,255,255,0.9)' }}>
              People die. Properties transfer. That's just how it works.
            </p>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Unlike a pre-foreclosure where the homeowner might hold on for months, hoping for a miracle, probate sellers have no choice. The person who owned the property has passed away. They can't own real estate anymore. The property <em>has</em> to transfer, whether that means selling it, keeping it, or letting it go to foreclosure.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed">
            And most of the time, the family just wants it handled.
          </p>
        </>
      ),
    },
    {
      id: 'demographic-wave',
      title: "The Demographic Wave You Can't Ignore",
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            This isn't just a good opportunity. It's a generational shift.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Baby Boomers own 41% of all housing stock in America, roughly 32 million homes. Over the next decade, more than 9 million of those properties are expected to change hands as that generation ages.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            They're calling it the Silver Tsunami. And it's already happening.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            Right now, there are nearly twice as many properties going through probate as there are foreclosure filings. About 780,000 probate properties annually compared to 400,000 foreclosures. We did the research ourselves and published the data on our website. The numbers don't lie.
          </p>
          <div
            className="p-5 rounded-xl mb-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#83d4c0' }}>
              Quick Stat
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>
              There are nearly twice as many probate opportunities as foreclosures every year in the United States.
            </p>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed">
            If you're looking for a lead source that won't dry up when the market shifts, this is it.
          </p>
        </>
      ),
    },
    {
      id: 'why-sellers-want-to-talk',
      title: 'Why Sellers Actually Want to Talk to You',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Here's the thing most investors don't understand about probate: the psychology is completely different.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            When someone's in pre-foreclosure, they're drowning. They've got creditors calling. They've got bills piling up. Everyone wants something from them. So when you call, you're just another person with your hand out. No wonder they don't pick up.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Probate is the opposite.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            These families have experienced a loss. They're grieving. They're overwhelmed. And suddenly, they're responsible for a property they don't live in, with a mortgage they didn't sign up for, utilities they have to keep paying, and grass that still needs to be cut. On top of their own life and their own bills.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            They need help. Real help.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            I talk to sellers every single week. And I always ask them the same question: "You've got a stack of letters and voicemails from investors. Why did you call <em>us</em> back?"
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            The answer is almost always the same: <strong style={{ color: 'rgba(255,255,255,0.85)' }}>"You actually sounded real. You were local."</strong>
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            That's it. They don't want some national company running a script. They want someone who cares. Someone who understands what they're going through. Someone who will say, "Take anything you want from the house. Leave everything else behind."
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            Because that's their biggest challenge. It's not the price. It's not the paperwork. It's <em>dealing with all the stuff</em>. And if you can help them with that, you become more than an investor. You become a resource.
          </p>
          <div
            className="p-5 rounded-xl"
            style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#83d4c0' }}>
              Key Insight
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>
              In probate, who you're selling to often matters more than what you're getting for the house.
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'real-numbers',
      title: 'The Real Numbers: Pennies on the Dollar',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Let me tell you about a deal I did recently.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Brick house. Not falling down. We bought it for $17,000.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            The property was worth over $200,000. It needed about $125,000 in work, but those are still incredible margins. Here's the backstory: a family had lost their father years earlier. Their mother couldn't take care of herself anymore, so she'd been in a nursing home for a long time. The house just sat there, vacant and deteriorating, but not destroyed. Nobody in the family wanted to deal with it. They'd been maintaining it, cutting the grass, waiting for someone to take it off their hands.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Other investors had offered $10,000. When I met one of the siblings at the property, he said, "People have offered me ten. Can you do better?"
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            I'd just bought an almost identical house around the corner for $90,000 and wholesaled it for $130,000. Same neighborhood, same type of house.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            I said, "If it's not falling down, I can probably pay you more than that." We agreed on $17,000. That's what he wanted. I didn't have to strong-arm anyone.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed">
            Pennies on the dollar. And that deal wasn't a unicorn. We've done dozens of deals just like that one. This is what happens when you're the first one in the door, you build trust, and there's no competition driving up the price.
          </p>
        </>
      ),
    },
    {
      id: 'vs-direct-mail',
      title: 'How Probate Compares to Direct Mail',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            I've done a lot of direct mail over the years. It works, but it's expensive and unpredictable.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            To run a proper direct mail campaign, I send 5,000 pieces at a time. That costs $8,000 to $10,000. From that, I typically get three deals:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'One "lay down" that\'s ready to go immediately',
              'One moderate deal that takes some work',
              'One that comes way later, months down the road',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#83d4c0] mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            You have to answer every call. You need a dedicated phone number. You're hoping the money comes back. With direct mail, you put the capital out first and pray.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            With probate, I put in effort instead of money. I pulled the records myself. I did the outreach myself. And I got out of it exactly what I put into it.
          </p>
          <div
            className="p-5 rounded-xl mb-6"
            style={{ backgroundColor: 'rgba(131,212,192,0.08)', border: '1px solid rgba(131,212,192,0.2)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#83d4c0' }}>
              The Bottom Line
            </p>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              There is no other lead source with a higher conversion rate for a lower upfront cost than probate.
            </p>
          </div>
          <p className="text-sm italic" style={{ color: 'rgba(255,255,255,0.4)' }}>
            (If you want to learn more about direct mail, I have a free training called the D2S Property Magnet in my Skool community. It covers everything: list building, letter strategy, follow-up systems. Completely free.)
          </p>
        </>
      ),
    },
    {
      id: 'how-many-leads',
      title: 'How Many Leads Do You Actually Need?',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Here's where a lot of investors overthink it.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            You don't need thousands of leads. You don't need to work every county in your state. You need to go <em>deep</em>, not broad.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            I'd rather follow up with the same lead for six months than call 500 leads once and never talk to them again. The fortune is in the follow-up, and we'll get into exactly how I do that in Section 3.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            But here's the math:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { leads: '30 leads per month', desc: 'bare minimum' },
              { leads: '50 leads per month', desc: 'solid pipeline' },
              { leads: '100 leads per month', desc: 'removes almost all doubt of success' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-lg"
                style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
              >
                <span className="font-semibold" style={{ color: '#83d4c0' }}>{item.leads}</span>
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>{item.desc}</span>
              </div>
            ))}
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            My team works about 60 to 80 probate leads per month here in greater Cincinnati. From that, we buy 2 to 3 properties every single month. That's our conversion rate, and it's been consistent for 20 years.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            If you're part-time, start with 30 leads. Pull them in consistently. Follow up over months, not days. Track everything. That's all it takes.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed">
            You might have 200 cases you're working at any given time because you're not just calling them once and moving on. You're nurturing those relationships over a six-month window. That's how deals happen.
          </p>
        </>
      ),
    },
    {
      id: 'whats-next',
      title: "What's Next",
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Now you know <em>why</em> probate works. You've seen the numbers. You understand why sellers are willing to talk, why the margins are so strong, and why this opportunity isn't going away anytime soon.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            But knowing the opportunity exists doesn't put leads in your pipeline.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed">
            In the next section, I'll show you exactly how to find probate leads in your area, step by step, county by county. It's not complicated, but it does take some work. And once you see how it's done, you'll understand why most investors never figure this out, and why that's actually good news for you.
          </p>
        </>
      ),
    },
  ];

  return (
    <GuideSection
      sectionNumber="Part I"
      sectionTitle="Why Probate"
      sectionSubtitle="Why Probate is the best lead source for investors looking for consistent deal flow."
      parts={parts}
      nextSection={{
        href: `/hub/${slug}/guide/part-2`,
        label: 'Part II: Finding Probate Leads',
      }}
    />
  );
}
