'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { GuideSection } from '@/components/hub';
import { ArrowRight, Users, Zap } from 'lucide-react';

export default function GuidePart2Page() {
  const params = useParams();
  const slug = params.slug as string;

  const parts = [
    {
      id: 'the-hard-truth',
      title: 'The Hard Truth About Probate Data',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Here's something most people don't tell you about probate investing: every single county is different.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Different software. Different processes. Different laws. Different amounts of information available. And those laws? They're constantly changing.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            My team and I work four counties here in greater Cincinnati. All four of them are completely different. Some have a lot of information available online. Some have almost nothing. One requires us to physically walk into the courthouse every week. The amount of detail we can access varies wildly depending on which county we're pulling from.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            This is exactly why there are fewer than five companies in the entire country that sell probate leads. It's that fragmented. Most data companies take one look at the complexity and walk away.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            But here's the thing: this is actually good news for you.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            The difficulty is what keeps competition low. Most investors try probate once, get frustrated by the research, and quit. Meanwhile, the ones who figure it out have a lead source all to themselves.
          </p>
          <div
            className="p-5 rounded-xl"
            style={{ backgroundColor: 'rgba(131,212,192,0.08)', border: '1px solid rgba(131,212,192,0.2)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#83d4c0' }}>
              Key Insight
            </p>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              The complexity of finding probate leads is what makes them so valuable. If it were easy, everyone would do it.
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'why-i-built-homeflip',
      title: 'Why I Built Homeflip.ai',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            I get asked all the time: "Gary, where do you find your probate leads?"
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            The honest answer? I get all of my leads from Homeflip.ai, the platform my team and I built.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            But that's not where I started. For years, I did everything manually. I drove to courthouses. I sweet-talked clerks. I built spreadsheets that got so complicated I couldn't keep track of my own follow-ups. And every time I wanted to expand to a new county, I had to start from scratch, learning a whole new system.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            That's exactly why I built Homeflip.ai. Not because I wanted to sell software, but because I needed to solve my own problem. The manual process was killing me. And I knew that if I could automate the tedious parts, pulling records, skip tracing, managing follow-ups, I could focus on what actually matters: talking to sellers and closing deals.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            So yes, today I use my own platform. But I'm going to teach you the manual process anyway, because understanding how it works will make you better at this, whether you do it yourself or use a tool like ours.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            There are over 3,000 counties in this country. I can't give you a detailed breakdown for each one. What I can give you is a framework. A four-step process that works anywhere, in any county, regardless of what systems they use or how much information they publish.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed">
            This is the exact process my team and I used for years before we had software. It's not complicated, but it does take effort. And once you see how it works, you'll understand why most investors never crack the code.
          </p>
        </>
      ),
    },
    {
      id: 'step-1-public-notices',
      title: 'Step 1: Find Public Notices',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            When a property goes into probate, a case number is generated. And when that case number is generated, the court is legally required to publish a public notice.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            This public notice is how they inform creditors. It basically says: "This person has passed away. Their estate is now in probate. If you have any claims, contact this attorney."
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Every county has to publish these notices somewhere. Some publish them online. Some publish in local newspapers. Some publish quickly. Some take weeks.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            Your job in Step 1 is to find where your county publishes these notices.
          </p>
          <div
            className="p-5 rounded-xl mb-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#83d4c0' }}>
              The Resource
            </p>
            <p className="font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.9)' }}>
              usalegalnotice.com
            </p>
            <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
              This website covers every state and every county in the country. Here's what you do:
            </p>
            <ol className="space-y-2 text-sm">
              {[
                'Go to usalegalnotice.com',
                'Click on your state, then select your county',
                'Search for these terms one at a time: estate, probate, trust, fiduciary',
                'Set a date range (start with the last six months)',
                'Look for notices that mention probate estates',
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
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            What you're looking for is simple: the person's name and the case number format.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            You'll see notices that say something like "Estate of Bob Jones, handled by the probate court of Hamilton County, Case Number PB2025-0042."
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed">
            Write down at least six names and case numbers. This tells you two critical things: who's in probate and how case numbers are formatted in that county. You'll need that case number format for the next step.
          </p>
        </>
      ),
    },
    {
      id: 'step-2-online-records',
      title: 'Step 2: Check Online Records',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Now you need to find out: can I access the actual court records online, or do I have to go to the courthouse?
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Fire up Google and search something like:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              '"[Your County] probate court case access"',
              '"[Your County] online court records"',
              '"[Your County] probate case search"',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#83d4c0] mt-2 flex-shrink-0" />
                <span className="font-mono text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Here's the tricky part. Many counties have a probate court website, but that doesn't mean the records are linked from it. The court website might just have hours and contact information. The actual case search might live on a completely different site.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            If you're having trouble, try using Claude AI. You can ask: "Help me find probate records online for Hamilton County, Ohio. Are they available? What can you tell me?" Claude can search the web and often finds resources that don't show up in a basic Google search.
          </p>
          <p className="font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>
            What you might find:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { label: 'Lots of information', desc: 'Some counties publish everything. The will, phone numbers, dates of birth, death certificates. It\'s all there.' },
              { label: 'Limited information', desc: 'Some counties only show case numbers and party names. Nothing else.' },
              { label: 'Nothing online', desc: 'Some counties don\'t publish records online at all. You\'ll have to physically go to the courthouse.' },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-lg"
                style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
              >
                <p className="font-medium text-sm mb-1" style={{ color: 'rgba(255,255,255,0.85)' }}>{item.label}</p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Here's something most investors don't realize: if records aren't available online, that's actually an advantage. Harder-to-access leads mean less competition. When we pull records from Northern Kentucky, someone on my team has to drive to the courthouse. That extra effort keeps most investors away.
          </p>
          <div
            className="p-5 rounded-xl"
            style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#83d4c0' }}>
              Word of Caution
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>
              These laws change constantly. Florida used to have everything available online. Then they changed the laws. Now nothing is accessible. So even if you find a great online source, check it periodically to make sure it still works.
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'step-3-access-records',
      title: 'Step 3: Access the Records',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            Once you know whether records are online, it's time to start pulling them.
          </p>
          <p className="font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
            If records are available online:
          </p>
          <div className="space-y-4 mb-6">
            <div
              className="p-5 rounded-lg"
              style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
            >
              <p className="font-medium mb-2" style={{ color: '#83d4c0' }}>Option A: Wildcard Search</p>
              <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Some county systems let you do a wildcard search. You can type in part of a case number with an asterisk and pull multiple results.
              </p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                For example, if case numbers in your county look like PB2025-0001, try searching "PB2025*" to see if it pulls all 2025 probate cases. Not every system allows this, but it's worth trying.
              </p>
            </div>
            <div
              className="p-5 rounded-lg"
              style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
            >
              <p className="font-medium mb-2" style={{ color: '#83d4c0' }}>Option B: Brute Force Iteration</p>
              <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                If wildcard searches don't work, you'll have to iterate through case numbers manually.
              </p>
              <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Take one of the case numbers you found in Step 1. Type it into the court system. View the record. Then add one to the case number and search again.
              </p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                So if your first case is PB2025-0001, next you search PB2025-0002, then 0003, then 0004. For each one, you check: Is this an estate case? A small estate? Guardianship? Something else?
              </p>
            </div>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            This is tedious. I won't sugarcoat it. But it works, and it's how we built our first probate lists back in 2010.
          </p>
          <p className="font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
            If records are NOT available online:
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            You'll need to physically go to the courthouse.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed">
            Here's how we do it in Northern Kentucky: We go once a week. We use their terminals to search for all probate cases filed in the last seven days. We fill out a form requesting the records, pay about 25 cents per page, and they send us the documents. It takes time. But again, this extra step is what keeps the competition away.
          </p>
        </>
      ),
    },
    {
      id: 'step-4-verify-ownership',
      title: 'Step 4: Verify Real Estate Ownership',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Finding probate cases is only half the equation. Not every estate involves real estate. Some people die owning nothing but a car and a bank account.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Your final step is to verify whether the deceased person actually owned property.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Go to your county assessor or auditor website. As a real estate investor, you should already know this site by heart. It's where property records live.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            Search the decedent's name. See if any properties come up.
          </p>
          <div
            className="p-5 rounded-xl mb-6"
            style={{ backgroundColor: 'rgba(131,212,192,0.08)', border: '1px solid rgba(131,212,192,0.2)' }}
          >
            <p className="font-semibold" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Important: Pull these records quickly. Once the property transfers out of the estate, it becomes much harder to track. The window of opportunity is while the property is still in the deceased person's name.
            </p>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed">
            If they owned real estate, congratulations. You've got a lead.
          </p>
        </>
      ),
    },
    {
      id: 'finding-the-right-person',
      title: 'Finding the Right Person to Call',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            You've got a probate lead with real estate attached. Now who do you contact?
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Not the attorney.</strong> Attorneys don't make decisions. They execute paperwork.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            The person you want is the personal representative, administrator, or fiduciary. Different states use different terms, but it's the same role. This is typically a family member or close friend who's been appointed to manage the estate.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            Their name will be in the probate records. Sometimes their address and phone number will be there too. Sometimes you'll need to skip trace them.
          </p>
          <p className="font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Skip Tracing Basics
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div
              className="p-4 rounded-lg"
              style={{ backgroundColor: 'rgba(131,212,192,0.08)', border: '1px solid rgba(131,212,192,0.2)' }}
            >
              <p className="font-medium text-sm mb-2" style={{ color: '#83d4c0' }}>Paid Option (Recommended)</p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                We use Skip Genie. It's about 10 to 15 cents per trace. You get phone numbers, addresses, and sometimes email addresses. We've found them to be the most accurate for the price.
              </p>
            </div>
            <div
              className="p-4 rounded-lg"
              style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
            >
              <p className="font-medium text-sm mb-2" style={{ color: 'rgba(255,255,255,0.85)' }}>Free Option (Hustle Mode)</p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                If you're bootstrapping, use freepeoplesearch.com. It works, it just takes more time.
              </p>
            </div>
          </div>
          <div
            className="p-5 rounded-xl mb-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#83d4c0' }}>
              Critical Detail
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>
              Search the fiduciary's address, not the property address. The fiduciary is the person you want to call. They don't live at the deceased person's house. They live somewhere else. Make sure you're skip tracing their information, not the decedent's.
            </p>
          </div>
          {/* CTA: Community */}
          <div
            className="p-5 rounded-xl flex items-center justify-between gap-4"
            style={{ backgroundColor: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)' }}
          >
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 flex-shrink-0" style={{ color: '#a78bfa' }} />
              <div>
                <p className="font-medium text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  Want to dive deeper into skip tracing?
                </p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Join hundreds of investors in our free community. Full skip tracing training included, plus live weekly calls.
                </p>
              </div>
            </div>
            <a
              href="https://skool.com/propertymagnet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition hover:opacity-80"
              style={{ backgroundColor: 'rgba(139,92,246,0.2)', color: '#a78bfa' }}
            >
              Join Free
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </>
      ),
    },
    {
      id: 'fiduciary-deeds',
      title: 'The Secret Source: Fiduciary Deeds',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Here's the secret I mentioned on the landing page. The probate leads hiding in plain sight that most investors never find.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Remember what I said about triggering activities? The thing that causes someone to finally sell isn't your letter or your phone call. It's usually death or money. Something changes in their life, and suddenly they're ready.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Some families go through probate but never sell. The property transfers to the heirs, and they just hold onto it. Maybe they're not ready emotionally. Maybe they're fighting over what to do. Maybe they just don't want to deal with it yet.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            These properties slip through the cracks. Even experienced probate investors miss them. Here's how you find them.
          </p>
          <p className="font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
            The County Recorder
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Your county recorder is where all deeds are recorded. When a property transfers out of an estate, it typically uses a fiduciary deed. That's the document that moves ownership from a deceased person to someone else.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            Go to your county recorder website and search for fiduciary deeds. Now here's the filter: you're looking for properties that transferred to individuals, not companies.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div
              className="p-4 rounded-lg"
              style={{ backgroundColor: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}
            >
              <p className="font-medium text-sm mb-2" style={{ color: 'rgba(239,68,68,0.9)' }}>Skip This</p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                123 Main Street transferred via fiduciary deed from Barbara Jones to <strong>Sunshine Properties LLC</strong>. That's an investor. They already bought it.
              </p>
            </div>
            <div
              className="p-4 rounded-lg"
              style={{ backgroundColor: 'rgba(131,212,192,0.08)', border: '1px solid rgba(131,212,192,0.2)' }}
            >
              <p className="font-medium text-sm mb-2" style={{ color: '#83d4c0' }}>Target This</p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                123 Main Street transferred from Barbara Jones to <strong>Timothy Johnson</strong>. That's likely an heir who inherited the property.
              </p>
            </div>
          </div>
          <p className="font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
            The Next Question: Did they ever sell it?
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            Check the MLS. Check public records. If the property was never listed and never resold, that heir still owns it. They've been sitting on it. And they might be ready now, even if they weren't ready during probate.
          </p>
          <p className="font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
            The Obituary Connection
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            Here's a bonus tip: cross-reference with obituaries. Obituaries list family members. So if Barbara Jones passed away and Tim Johnson is the fiduciary, the obituary will tell you who Tim is. Is he her son? Her brother? Her nephew? This context helps you understand the situation and have a more informed conversation when you reach out.
          </p>
          <div
            className="p-5 rounded-xl"
            style={{ backgroundColor: 'rgba(131,212,192,0.08)', border: '1px solid rgba(131,212,192,0.2)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#83d4c0' }}>
              Your Secret Weapon
            </p>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              Fiduciary deed research lets you find properties that slipped through the cracks, ones that even other probate investors missed. It's extra work, but that's exactly why it works.
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'diy-vs-buying',
      title: 'DIY vs. Buying Leads',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            At this point, you might be thinking: "This sounds like a lot of work. Can't I just buy leads?"
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            You can. There are a handful of companies that sell probate leads. But here's what you need to know.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div
              className="p-5 rounded-lg"
              style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
            >
              <p className="font-medium mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>DIY Pros</p>
              <ul className="space-y-2 text-sm">
                {[
                  'Free (other than your time)',
                  'You control the freshness of the data',
                  'You understand your market intimately',
                  'Less competition because fewer people put in the effort',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <span className="text-green-400">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="p-5 rounded-lg"
              style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
            >
              <p className="font-medium mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>DIY Cons</p>
              <ul className="space-y-2 text-sm">
                {[
                  'Time-intensive',
                  'Tedious, especially at first',
                  'Varies wildly by county',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <span className="text-red-400">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="p-5 rounded-lg"
              style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
            >
              <p className="font-medium mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>Buying Leads Pros</p>
              <ul className="space-y-2 text-sm">
                {[
                  'Faster to get started',
                  'Someone else does the research',
                  'Can scale more quickly',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <span className="text-green-400">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="p-5 rounded-lg"
              style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
            >
              <p className="font-medium mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>Buying Leads Cons</p>
              <ul className="space-y-2 text-sm">
                {[
                  'Costs money',
                  'Leads may be 30 to 60 days old by the time you get them',
                  'Other investors may have the same list',
                  'Quality varies by provider',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <span className="text-red-400">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Here's my take: when I started, I did everything myself. I went to courthouses. We baked cupcakes for the clerks. We built relationships with the secretaries who controlled the records. That hands-on experience taught me more about probate than any course ever could.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            But I also know that time is money. And the tedious parts of this process, the pulling, the formatting, the skip tracing, that's exactly why we built Homeflip.ai. To automate the grunt work so you can focus on what actually matters: calling sellers and closing deals.
          </p>
          {/* CTA: Claim Your County */}
          <div
            className="p-5 rounded-xl flex items-center justify-between gap-4"
            style={{ backgroundColor: 'rgba(131,212,192,0.08)', border: '1px solid rgba(131,212,192,0.2)' }}
          >
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 flex-shrink-0" style={{ color: '#83d4c0' }} />
              <div>
                <p className="font-medium text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  Ready to start getting probate leads in your area?
                </p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Skip the manual work. We'll handle the research, skip tracing, and delivery.
                </p>
              </div>
            </div>
            <Link
              href={`/hub/${slug}/upgrade`}
              className="flex items-center gap-1.5 btn-gradient px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap hover:scale-[1.02] transition-all"
            >
              Claim Your County
              <ArrowRight className="w-4 h-4" />
            </Link>
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
            Now you know how to find probate leads in any county in the country. You've got the four-step process. You know how to identify the right person to contact. And you've got the secret weapon that most investors never discover.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            But finding leads is only half the battle.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed">
            The real skill is knowing when to reach out and what to say. Probate isn't a one-call close. It's a relationship built over weeks and months. The fortune is in the follow-up, and most investors have no idea how to do it right. In the next section, I'll show you exactly how we work probate leads from first contact to closing.
          </p>
        </>
      ),
    },
  ];

  return (
    <GuideSection
      sectionNumber="Part II"
      sectionTitle="Finding Probate Leads"
      sectionSubtitle="How to find probate leads in any county, step by step."
      parts={parts}
      prevSection={{
        href: `/hub/${slug}/guide/part-1`,
        label: 'Part I: Why Probate',
      }}
      nextSection={{
        href: `/hub/${slug}/guide/part-3`,
        label: 'Part III: Working the Leads',
      }}
    />
  );
}
