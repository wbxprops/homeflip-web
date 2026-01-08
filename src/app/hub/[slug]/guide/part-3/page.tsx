'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { GuideSection } from '@/components/hub';
import { ArrowRight, Users, Zap } from 'lucide-react';

export default function GuidePart3Page() {
  const params = useParams();
  const slug = params.slug as string;

  const parts = [
    {
      id: 'the-long-game',
      title: 'The Long Game',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Here's the secret most investors never figure out: <strong style={{ color: 'rgba(255,255,255,0.85)' }}>it's not about how many times you call them. It's how long you follow up.</strong>
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            The average investor calls a lead once or twice, doesn't get through, and moves on to the next list. Two weeks later, they've forgotten about that lead entirely. Two months later, when that seller is finally ready to talk, that investor is nowhere to be found.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            I follow up for six months.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            That's not six calls. That's six months of consistent, patient outreach. Letters, voicemails, check-ins. Not aggressive. Not pushy. Just present.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            When sellers don't answer, it's usually not because they don't want to sell. It's because they're not ready yet. They're still grieving. Still processing. Still figuring out what to do with all the stuff in the house. Give them time, stay in touch, and when they're finally ready, you'll be the one they call.
          </p>
          <div
            className="p-5 rounded-xl"
            style={{ backgroundColor: 'rgba(131,212,192,0.08)', border: '1px solid rgba(131,212,192,0.2)' }}
          >
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              I'll prove this to you with a story about a property that went from a $230,000 ask to a $130,000 sale. That $100,000 price drop happened because I stayed in the game when everyone else had given up.
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'compliance',
      title: 'A Quick Word on Compliance',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Before we get into the tactics, I have to say this clearly: <strong style={{ color: 'rgba(255,255,255,0.85)' }}>research the laws in your area before you start calling.</strong>
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            The Telemarketing Consumer Protection Act (TCPA) has specific rules about outbound calling. There are state-specific regulations about calling hours. There are do-not-call list requirements. There's been recent legislation around whether calling to buy someone's house counts as solicitation. The rules are different everywhere.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            I am not an attorney. This guide is not legal advice.
          </p>
          <p className="font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Here's what I do to stay safe:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              { rule: 'No cold texting.', detail: 'None. The fines are too steep and the rules are too strict. I only text someone after we\'ve spoken and they\'ve given me permission.' },
              { rule: 'No multi-line dialers or AI dialing.', detail: 'These people haven\'t opted into anything. Aggressive dialing systems can get you in trouble.' },
              { rule: 'No calling on Sundays.', detail: 'As far as I know, it\'s illegal in every state.' },
              { rule: 'No "local presence" number wrapping.', detail: 'If you\'re calling outside your area, don\'t use software that makes it look like you\'re local when you\'re not.' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <span><strong style={{ color: 'rgba(255,255,255,0.85)' }}>{item.rule}</strong> {item.detail}</span>
              </li>
            ))}
          </ul>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed">
            Consult an attorney familiar with telemarketing law in your state. Get this right before you start.
          </p>
        </>
      ),
    },
    {
      id: 'follow-up-cadence',
      title: 'My Three-Phase Follow-Up Cadence',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            I use three distinct cadences depending on where I am in the relationship with a lead. The key principle across all of them: <strong style={{ color: 'rgba(255,255,255,0.85)' }}>always call in pairs.</strong> I never make an isolated single attempt. If I call today, I call again tomorrow. This increases my chances of connecting and shows consistency.
          </p>
          <div className="space-y-6">
            <div
              className="p-5 rounded-xl"
              style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p className="font-semibold mb-3" style={{ color: '#83d4c0' }}>Phase 1: Initial Qualification (Days 1-7)</p>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                This is the first week after I get a new lead. The goal is simple: make contact.
              </p>
              <div className="space-y-2 text-sm">
                {[
                  { day: 'Day 1', action: 'Call and leave voicemail' },
                  { day: 'Day 2', action: 'Call and leave voicemail (different time of day)' },
                  { day: 'Days 3-4', action: 'Skip' },
                  { day: 'Day 5 or 6', action: 'Call and leave voicemail' },
                  { day: 'Day 6 or 7', action: 'Call and leave voicemail' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-20 text-xs font-medium px-2 py-1 rounded text-center" style={{ backgroundColor: 'rgba(131,212,192,0.1)', color: '#83d4c0' }}>{item.day}</span>
                    <span style={{ color: 'rgba(255,255,255,0.6)' }}>{item.action}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm mt-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
                That's four attempts in seven days. I leave a voicemail every single time so they know who I am.
              </p>
            </div>

            <div
              className="p-5 rounded-xl"
              style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p className="font-semibold mb-3" style={{ color: '#83d4c0' }}>Phase 2: Bi-Weekly Nurture (Days 8-60)</p>
              <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
                If I haven't reached them in the first week, the likelihood of connecting drops. But that doesn't mean I stop. It means I shift to a longer rhythm.
              </p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                From day 8 to day 60, I call every two weeks. Still in pairs: call today, call tomorrow, wait two weeks, repeat. This keeps me on their radar without being aggressive.
              </p>
            </div>

            <div
              className="p-5 rounded-xl"
              style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p className="font-semibold mb-3" style={{ color: '#83d4c0' }}>Phase 3: Monthly Check-In (Months 2-6)</p>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                After the first 60 days, I switch to monthly check-ins. Still calling in pairs. Still leaving voicemails.
              </p>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
                During this phase, I'm also monitoring the case online. Has it closed? Has the property transferred? Has it been listed on the MLS? I need to know what's happening so I can adjust my approach.
              </p>
              <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>I follow up until one of three things happens:</p>
              <ol className="space-y-1 text-sm list-decimal list-inside" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <li>The property sells or transfers</li>
                <li>They tell me specifically to stop calling</li>
                <li>Six months have passed with no movement</li>
              </ol>
            </div>
          </div>
          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#83d4c0' }}>Best Times to Call</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                { time: '11 AM - 1 PM', rating: 'Good' },
                { time: '1 PM - 3 PM', rating: 'Almost impossible to reach anyone' },
                { time: '4 PM - 6 PM', rating: 'Best time slot' },
                { time: 'Saturdays', rating: 'Great day to connect' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between">
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>{item.time}</span>
                  <span style={{ color: 'rgba(255,255,255,0.4)' }}>{item.rating}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'letter-system',
      title: 'The Letter System That Builds Trust',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Letters rarely generate direct calls. That's not the point. Here's what they actually do:
          </p>
          <ol className="space-y-4 mb-6">
            {[
              { title: 'Reveal if the property is vacant.', desc: 'When you mail to the decedent\'s address and it comes back marked "vacant, unable to deliver," you just confirmed the property is vacant without driving out there.' },
              { title: 'Increase your call pickup rate.', desc: 'When you call after they\'ve received your letter, they recognize your name. "Oh, that\'s the guy from the letter." You\'re no longer a random cold caller.' },
              { title: 'Build legitimacy.', desc: 'They\'re wondering: Is this person real? Is this a scam? A letter with your name and a handwritten envelope proves you\'re a real person who took the time to reach out.' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold"
                  style={{ backgroundColor: 'rgba(131,212,192,0.15)', color: '#83d4c0' }}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="font-medium mb-1" style={{ color: 'rgba(255,255,255,0.85)' }}>{item.title}</p>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
            My Letter Schedule
          </p>
          <div className="space-y-2 mb-6">
            {[
              { week: 'Week 1', action: 'Letter to decedent\'s house + letter to fiduciary' },
              { week: 'Week 2', action: 'Letter or handwritten thank-you card' },
              { week: 'Week 6', action: 'Letter' },
              { week: 'Week 12', action: 'Letter' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
                <span className="text-xs font-medium px-2 py-1 rounded w-20 text-center" style={{ backgroundColor: 'rgba(131,212,192,0.1)', color: '#83d4c0' }}>{item.week}</span>
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.action}</span>
              </div>
            ))}
          </div>
          <div
            className="p-5 rounded-xl mb-6"
            style={{ backgroundColor: 'rgba(131,212,192,0.08)', border: '1px solid rgba(131,212,192,0.2)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#83d4c0' }}>
              The Vacancy Trick
            </p>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              Mail a letter to the decedent's address. If it comes back marked "vacant, unable to deliver," you've confirmed the property is empty without driving out there.
            </p>
          </div>
          <p className="font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Letter Specifications
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Black and white, nothing fancy',
              'Handwritten envelope, not printed labels',
              'Handwritten return address',
              'Hand stamped',
              'No company name on the envelope, just your name',
              'Use the same phone number you\'re calling from (dedicated line)',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#83d4c0] mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>
            The Thank-You Card Secret
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            One thing I do that most investors don't: custom thank-you cards. I had some printed at gotprint.com. They're blank cards with a watercolor drawing of Cincinnati on the front. Looks really nice. Unique. Something people will actually hang onto.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed">
            After I speak with someone, I send one of these with a handwritten note and my business card. It takes two minutes and it sets me apart from everyone else who just moves on to the next lead.
          </p>
        </>
      ),
    },
    {
      id: 'timeline-intelligence',
      title: 'Timeline Intelligence',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            This is probably the one thing that will set this apart from anything else you're going to hear online about working probate.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            After about 15 years of buying probate properties, I was struggling to make sure I was taking the right actions on each case. Every situation was different. Some sellers were ready to go immediately. Others needed months. Some said no but really meant "not yet."
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            So I looked at hundreds and hundreds of cases I'd worked and put them into common categories. That's how I created what I call <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Timeline Intelligence</strong>, or the PB Scoring System.
          </p>
          <div
            className="p-5 rounded-xl mb-6"
            style={{ backgroundColor: 'rgba(131,212,192,0.08)', border: '1px solid rgba(131,212,192,0.2)' }}
          >
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              The idea is simple: <strong>align your actions with where the seller actually is in their process.</strong> If you treat someone who's ready to sell right now (PB-03) like someone who hasn't decided yet (PB-01), you'll lose the deal. And if you push hard on someone who's still grieving, you'll burn the relationship.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                score: 'Working',
                color: 'rgba(255,255,255,0.4)',
                title: 'No Score Yet',
                desc: 'This is the starting point for every lead. You haven\'t reached them yet. You\'re still in your qualification cadence. You don\'t have any intelligence about their situation.',
                action: 'Keep calling. Follow your Phase 1 and Phase 2 cadences.',
              },
              {
                score: 'PB-01',
                color: '#83d4c0',
                title: 'Too Early / Undecided',
                desc: 'You\'ve reached them, but they don\'t know what they\'re doing yet. They\'re still grieving. They\'re getting calls from a lot of people. They haven\'t decided if they\'re selling, keeping, or listing.',
                action: 'Send a thank-you card. Nurture gently. Whatever timeline they give you, follow up in half that time. If they say "two months," call in one month.',
              },
              {
                score: 'PB-02',
                color: '#fbbf24',
                title: 'Decided to Sell, But Something\'s Blocking',
                desc: 'They know they\'re selling. They\'re not keeping it. But something is preventing them from moving forward. Your job is to uncover that blocker and, if possible, provide resources to help.',
                action: 'Become an additional resource for the family, beyond their probate attorney. Ask what\'s holding them up. Connect them with resources if you can.',
              },
              {
                score: 'PB-03',
                color: '#22c55e',
                title: 'Ready to Sell NOW',
                desc: 'They\'ve decided to sell and they\'re actively ready to move. This is go time.',
                action: 'Act quickly. Don\'t over-nurture. Find out if they\'ve talked to other buyers. If you\'ve been with them since PB-01, your early relationship-building pays off.',
              },
              {
                score: 'PB-00',
                color: 'rgba(239,68,68,0.8)',
                title: 'Not For Sale or Already Sold',
                desc: 'They\'ve said no, or the property has already sold to someone else.',
                action: 'Don\'t mark this as a lost opportunity. Mark it as cold. Keep monitoring. Deals fall through. Check back in 30-60 days.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-bold px-2 py-1 rounded"
                    style={{ backgroundColor: 'rgba(0,0,0,0.3)', color: item.color }}
                  >
                    {item.score}
                  </span>
                  <span className="font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>{item.title}</span>
                </div>
                <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.desc}</p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  <strong style={{ color: item.color }}>Action:</strong> {item.action}
                </p>
              </div>
            ))}
          </div>
          <div
            className="mt-6 p-5 rounded-xl"
            style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#83d4c0' }}>
              Critical Insight
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>
              Many PB-00s become deals later. The buyer's financing falls through. The family member who wanted to keep it changes their mind. Stay in the game.
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'emotional-reality',
      title: 'The Emotional Reality',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Here's something I tell every investor who asks me about probate: <strong style={{ color: 'rgba(255,255,255,0.85)' }}>if you lead with asking about the house, you will lose the seller.</strong>
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            For them, it's not about the house. It's about mom. It's about dad. It's about a family member or loved one they just lost.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            A lot of times, this is the house they grew up in. There are memories in every room. Some sellers have trouble even walking through the front door. That's another reason they don't call you back right away. It's not that they don't want to sell. It's that it's just too hard for them.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            If you treat this like a transaction, you'll get treated like a telemarketer.
          </p>
          <p className="font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
            What "Sounding Real" Actually Means
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            I meet with sellers every week. I've asked hundreds of them the same question: "You've got a stack of letters and voicemails. Why did you call us back?"
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            The answer is almost always the same: <strong style={{ color: 'rgba(255,255,255,0.85)' }}>"You're the only ones that sounded real."</strong>
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'You\'re local, not calling from a call center',
              'You\'re not reading from a script',
              'You\'re patient, not rushing to ask about the house',
              'You make it about them, not about closing a deal',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#83d4c0] mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div
            className="p-5 rounded-xl mb-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="text-sm italic" style={{ color: 'rgba(255,255,255,0.7)' }}>
              "My grandfather used to say: 'Just kiss the girls that are leaning towards you.' You're not trying to convince reluctant sellers. You're aligning with people who want to work with someone like you."
            </p>
          </div>
          <p className="font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>
            The Right Tone
          </p>
          <ul className="space-y-2">
            {[
              { tone: 'Apologetic:', desc: '"I\'m really sorry to bother you..."' },
              { tone: 'Curious:', desc: 'Genuinely interested in their situation' },
              { tone: 'Patient:', desc: 'Not rushing to the point' },
              { tone: 'Empathetic:', desc: 'Like you\'re calling a family member' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#83d4c0] mt-2 flex-shrink-0" />
                <span><strong style={{ color: 'rgba(255,255,255,0.85)' }}>{item.tone}</strong> {item.desc}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Pretend you're calling your grandmother on her birthday to see how she's doing. That's the tone.
          </p>
        </>
      ),
    },
    {
      id: 'scripting-principles',
      title: 'Scripting Principles: Strategy Over Tactics',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            I'm not going to give you a word-for-word script in this guide. Here's why:
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            This ebook will be seen by thousands of investors. I don't want everyone calling probate leads with the exact same canned lines. That would poison the well for everyone.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            More importantly, <strong style={{ color: 'rgba(255,255,255,0.85)' }}>if you don't understand the strategy behind how all of this flows, the script won't matter.</strong> I could give you the greatest script in the world, but if you don't understand Timeline Intelligence and the emotional approach, it won't work.
          </p>
          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
            The tactical side of scripting, exactly what to say, how to handle specific objections, role-playing, is covered in the coaching that comes with Homeflip.ai.
          </p>
          <div
            className="p-5 rounded-xl mb-6"
            style={{ backgroundColor: 'rgba(131,212,192,0.08)', border: '1px solid rgba(131,212,192,0.2)' }}
          >
            <p className="font-semibold mb-2" style={{ color: '#83d4c0' }}>The 70/30 Rule</p>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>
              <strong>70% questions</strong>, get them talking. <strong>30% telling</strong>, only when necessary.
            </p>
            <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Avoid presentations about yourself. "We're the largest volume buyer in the area" means nothing to them. They don't care about your company name, your LLC, or how many houses you've bought.
            </p>
          </div>
          <p className="font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>Opening the Call</p>
          <div
            className="p-4 rounded-lg mb-6 italic"
            style={{ backgroundColor: 'rgba(255,255,255,0.02)', color: 'rgba(255,255,255,0.7)' }}
          >
            "I'm really sorry to bother you. I'm not even sure if you're the right person I should be talking to about this."
          </div>
          <p className="font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>Questions About the Situation (Not the House)</p>
          <ul className="space-y-2 mb-6">
            {[
              '"How\'s everything been going?"',
              '"What\'s been the hardest part of all of this?"',
              '"Is it just you, or do you have somebody else helping you with all the stuff?"',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#83d4c0] mt-2 flex-shrink-0" />
                <span className="italic">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
            That last question is intentionally vague. "All the stuff" could mean the physical belongings in the house. Or the paperwork. Or the emotional weight. Let them interpret it.
          </p>
          <p className="font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>Transitioning to the House</p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            When you're ready to talk about the property, don't ask "Does it need a lot of work?" Instead, ask this:
          </p>
          <div
            className="p-4 rounded-lg mb-4 italic"
            style={{ backgroundColor: 'rgba(131,212,192,0.08)', color: 'rgba(255,255,255,0.9)' }}
          >
            "What's the best thing about the house?"
          </div>
          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Nobody asks this question. And here's what happens: they immediately tell you what's wrong with it. You'll learn more from this one question than from a checklist of property questions.
          </p>
          <p className="font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>Closing Every Call</p>
          <div
            className="p-4 rounded-lg mb-6 italic"
            style={{ backgroundColor: 'rgba(255,255,255,0.02)', color: 'rgba(255,255,255,0.7)' }}
          >
            "When would be an appropriate time to follow up with you?"
          </div>
          <p className="font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>Getting Text Permission</p>
          <div
            className="p-4 rounded-lg italic"
            style={{ backgroundColor: 'rgba(255,255,255,0.02)', color: 'rgba(255,255,255,0.7)' }}
          >
            "If it's alright with you, I'm going to text you my information so you have it when we hang up."
          </div>
          <p className="text-sm mt-3 mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Now you can text. They've given permission.
          </p>
          {/* CTA: Community for Scripts */}
          <div
            className="p-5 rounded-xl flex items-center justify-between gap-4"
            style={{ backgroundColor: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)' }}
          >
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 flex-shrink-0" style={{ color: '#a78bfa' }} />
              <div>
                <p className="font-medium text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  Want word-for-word scripts and live role-play practice?
                </p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Join our free community. We host live coaching calls multiple times per week.
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
      id: 'common-responses',
      title: 'Handling Common Responses',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Before I give you responses to common objections, understand this: <strong style={{ color: 'rgba(255,255,255,0.85)' }}>your tonality is just as important as the words you choose.</strong>
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            If you come in aggressive, heavy-handed, or sounding like you're the tenth person you've called that day, you're going to get pushback. When your tonality is right, apologetic, curious, warm, you'll hear fewer objections in the first place.
          </p>
          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
            When someone asks you a challenging question, think of it like a tennis match. They're hitting a ball at you. Don't volley it back. Catch it. Redirect. Then roll it back gently.
          </p>
          <div className="space-y-4">
            {[
              {
                objection: '"How did you get my number?"',
                response: '"I\'m a local real estate investor. I specialize in working with families who are going through the probate process. I got your information from the court filings."',
                note: 'Catch. Position yourself. Then answer.',
              },
              {
                objection: '"We\'re not interested."',
                response: '"I\'m really sorry to bother you. If anything changes, please keep me posted."',
                note: 'Keep your tone soft. Mark them as PB-00 (cold, not lost). Follow up in 30-60 days if the property hasn\'t transferred.',
              },
              {
                objection: '"We\'re already working with somebody."',
                response: '"Awesome. I\'m sure you\'ve had a lot of interest in the house. Have you gotten any serious offers yet?"',
                note: 'If they say yes and it\'s sold, great. "If anything changes, please keep my number." If it\'s not actually under contract, you\'ve just learned valuable information.',
              },
              {
                objection: '"Stop calling me."',
                response: '"Absolutely. I\'m very sorry to bother you. You won\'t hear from me again."',
                note: 'Then mark them as Do Not Call immediately. Do not call. Do not text. Under any circumstance.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p className="font-medium mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>{item.objection}</p>
                <p className="text-sm italic mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.response}</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.note}</p>
              </div>
            ))}
          </div>
          <div
            className="mt-6 p-5 rounded-xl"
            style={{ backgroundColor: 'rgba(131,212,192,0.08)', border: '1px solid rgba(131,212,192,0.2)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#83d4c0' }}>
              The Golden Rule
            </p>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              You can't say the wrong thing to the right person. You can't say the right thing to the wrong person. Don't try to turn around someone who's hostile. There are enough opportunities out there.
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'common-mistakes',
      title: 'Common Mistakes to Avoid',
      content: (
        <>
          <div className="space-y-6">
            {[
              {
                mistake: 'Mistake 1: Not Sounding Real',
                desc: 'Hiring offshore callers. Using canned scripts. Sounding like every other investor who calls. Not being local. Sellers can tell.',
              },
              {
                mistake: 'Mistake 2: Not Following Up Long Enough',
                desc: 'Calling once or twice and moving on. Getting distracted by new leads. Following up for days instead of months. Remember: six months, not six calls.',
              },
              {
                mistake: 'Mistake 3: Making It About the House',
                desc: 'Leading with property questions. Ignoring the emotional context. Treating it like a transaction instead of a relationship.',
              },
              {
                mistake: 'Mistake 4: Dismissing the Emotional Side',
                desc: 'Not understanding why they\'re not calling back. Pushing too hard too soon. Missing the fact that they\'re grieving, not ignoring you.',
              },
              {
                mistake: 'Mistake 5: Mismatching Your Approach',
                desc: 'Treating PB-03s (ready now) like PB-01s (still deciding) and moving too slowly. Treating PB-01s like PB-03s and pushing too hard. Timeline Intelligence exists to prevent this. Use it.',
              },
            ].map((item, i) => (
              <div key={i}>
                <p className="font-semibold mb-2" style={{ color: 'rgba(239,68,68,0.9)' }}>{item.mistake}</p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      id: 'the-100k-story',
      title: 'The $100,000 Follow-Up Story',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            If we only worked with sellers who were ready to go right away, we wouldn't have a business. Let me tell you about a deal that proves why the long game matters.
          </p>
          <div
            className="p-5 rounded-xl mb-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#83d4c0' }}>The Setup (September/October)</p>
            <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
              It was a rural property on the east side of Cincinnati. Beautiful piece of land. House was worth around $280,000 to $300,000, but it needed about $90,000 in work.
            </p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              The family had lost their sister suddenly. The property had been sitting. They showed me the house and said they wanted $260,000 minimum, but would accept $230,000. The math didn't work. I passed, but I didn't walk away.
            </p>
          </div>
          <div
            className="p-5 rounded-xl mb-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#83d4c0' }}>The Follow-Up (6 Months)</p>
            <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
              I marked the property as cold, not lost. The reason I noted was "asking too much." And I kept in touch.
            </p>
            <p className="text-sm mb-3 italic" style={{ color: 'rgba(255,255,255,0.5)' }}>
              "Hey, just wanted to let you know I'm still interested. If there's anything I can do to help, let me know."
            </p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              They never answered. They never called back. But I didn't stop.
            </p>
          </div>
          <div
            className="p-5 rounded-xl mb-6"
            style={{ backgroundColor: 'rgba(131,212,192,0.08)', border: '1px solid rgba(131,212,192,0.2)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#83d4c0' }}>The Payoff (March)</p>
            <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Then one day, I got a call. Not from the person who showed me the house. From her sister.
            </p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Turns out, they had accepted an offer from another investor months ago. I had no idea. But that deal fell through at the last minute. The buyer couldn't perform. And now the family was back to square one, exhausted from the whole process. They just wanted it handled.
            </p>
          </div>
          <div
            className="p-5 rounded-xl mb-6"
            style={{ backgroundColor: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#a78bfa' }}>The Result</p>
            <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
              We got the property for <strong style={{ color: 'rgba(255,255,255,0.95)' }}>$130,000</strong>. Down from a $230,000 ask. That's a $100,000 price drop, not because I negotiated hard, but because I was still there when everyone else had given up.
            </p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              I sold it to one of my top clients for $145,000. He did an incredible rehab on the place and ended up selling it for $348,000.
            </p>
          </div>
          <div
            className="p-5 rounded-xl"
            style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#83d4c0' }}>
              The Lesson
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>
              The person who showed me the house didn't call back. But they remembered me. When their Plan A fell through, I was the one they reached out to.
            </p>
          </div>
          <div className="mt-6">
            <p className="font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>Bonus: Letters Get Kept for Years</p>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
              We've had situations where people held onto our letters for two or three years and then finally called. Not months. Years.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed">
              That's why the handwritten envelope matters. That's why the personal touch matters. That's why you put your name on it instead of some company logo. A generic postcard gets tossed. A letter that looks like it came from a real person gets kept.
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'tracking-everything',
      title: 'Tracking Everything',
      content: (
        <>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            All of this, the cadences, the letters, the PB scores, the follow-ups, only works if you're tracking it. Otherwise, it falls apart.
          </p>
          <p className="font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
            What You Need to Track for Every Lead
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div
              className="p-5 rounded-lg"
              style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
            >
              <p className="font-medium text-sm mb-3" style={{ color: '#83d4c0' }}>For the Contact</p>
              <ul className="space-y-1 text-sm">
                {[
                  'Call dates and outcomes',
                  'Voicemails left (date and content)',
                  'Letters sent (Week 1, 2, 6, 12)',
                  'Current PB score',
                  'When PB score changed and why',
                  'Next follow-up date',
                  'Conversation notes',
                  'Do Not Call flag',
                  'Text permission granted',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    <span className="text-[#83d4c0]">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="p-5 rounded-lg"
              style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
            >
              <p className="font-medium text-sm mb-3" style={{ color: '#83d4c0' }}>For the Property</p>
              <ul className="space-y-1 text-sm">
                {[
                  'Case status (open, closed, transferred)',
                  'Property status (available, listed, sold)',
                  'Last checked date',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    <span className="text-[#83d4c0]">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Track Objections Too
          </p>
          <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Record the objections you hear. Patterns reveal problems:
          </p>
          <ul className="space-y-2 mb-6 text-sm">
            {[
              'Getting lots of pushback? Check your tonality.',
              'Hearing "already working with someone" often? You might be reaching out too late.',
              '"Not interested" all the time? Your opening might need work.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#83d4c0] mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Track Lost Reasons
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th className="text-left py-2 pr-4" style={{ color: 'rgba(255,255,255,0.6)' }}>Outcome</th>
                  <th className="text-left py-2" style={{ color: 'rgba(255,255,255,0.6)' }}>What It Tells You</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { outcome: 'Sold to another investor', tells: 'Were you too slow? Offer too low?' },
                  { outcome: 'Listed on MLS', tells: 'Did you miss the PB-03 window?' },
                  { outcome: 'Family kept it', tells: 'True PB-00, move on' },
                  { outcome: 'Still sitting (no transfer)', tells: 'Follow-up opportunity' },
                  { outcome: 'Deal fell through', tells: 'Call them back!' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td className="py-2 pr-4" style={{ color: 'rgba(255,255,255,0.7)' }}>{row.outcome}</td>
                    <td className="py-2" style={{ color: 'rgba(255,255,255,0.5)' }}>{row.tells}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            Tracking all of this manually, call dates, letter schedules, PB scores, case status, objections, outcomes, across 50 or 100+ leads, in a spreadsheet, gets overwhelming fast.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-6">
            This is exactly why I built Homeflip.ai from the ground up around Timeline Intelligence. It's not a rebranded generic CRM. It's purpose-built for probate investors who want to work leads the right way.
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
                  Ready to let Homeflip.ai handle the tracking for you?
                </p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Timeline Intelligence, follow-up management, and lead delivery, all in one place.
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
            Now you know how to work the leads. You understand the cadences. The letter system. Timeline Intelligence. The emotional approach. How to handle objections. Why the long game matters.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed mb-4">
            But there's still one piece missing: <strong style={{ color: 'rgba(255,255,255,0.85)' }}>putting it all together.</strong>
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="leading-relaxed">
            In Section 4, I'll show you how all of these systems connect. We'll talk about what it actually takes to run this as a business, where Homeflip.ai fits in, and what your next step should be whether you're just exploring or ready to go all in.
          </p>
        </>
      ),
    },
  ];

  return (
    <GuideSection
      sectionNumber="Part III"
      sectionTitle="Working the Leads"
      sectionSubtitle="The follow-up system, timeline intelligence, and the emotional approach that closes deals."
      parts={parts}
      prevSection={{
        href: `/hub/${slug}/guide/part-2`,
        label: 'Part II: Finding Probate Leads',
      }}
      nextSection={{
        href: `/hub/${slug}/guide/part-4`,
        label: 'Part IV: Tying It All Together',
      }}
    />
  );
}
