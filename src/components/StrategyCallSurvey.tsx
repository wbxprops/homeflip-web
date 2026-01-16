'use client';

import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { ConversationForm, Question, FormValues } from './forms';

// ==================== QUESTIONS CONFIG (from SPEC) ====================

const SURVEY_QUESTIONS: Question[] = [
  // Step 0 — Entry / Context setter
  {
    id: 'entry',
    type: 'entry',
    header: 'Strategy Call Setup',
    body: "A few quick questions to help us focus the conversation on what matters most to you.",
    note: 'Takes about 2–3 minutes.',
    ctaLabel: 'Begin Setup',
  },

  // Step 1 — Name
  {
    id: 'name',
    type: 'text',
    prompt: "Let's start simple. What should we call you?",
    placeholder: 'Your name',
    helper: "This is how we'll address you on the call.",
    required: true,
    ctaLabel: 'Continue ↵',
  },

  // Step 2 — Phone
  {
    id: 'phone',
    type: 'phone',
    prompt: "What's the best number to reach you for the call?",
    placeholder: '(555) 555-5555',
    helper: "We'll call you at this number. Also used for reminders.",
    required: true,
    ctaLabel: 'Save & Continue',
  },

  // Step 3 — Email
  {
    id: 'email',
    type: 'email',
    prompt: "We'll send the call details here.",
    placeholder: 'you@email.com',
    helper: 'This should match where you received the HVCO access.',
    required: true,
    ctaLabel: 'Confirm Email',
  },

  // Step 4 — Experience context
  {
    id: 'experience_level',
    type: 'radio',
    prompt: "What best describes your current situation?",
    required: true,
    options: [
      { value: 'first_property', label: "I'm looking for my first investment property." },
      { value: 'getting_back', label: "I've done deals before, took a break, and I'm getting back on track." },
      { value: 'active', label: "I'm actively investing and have closed a deal in the last 12 months." },
      { value: 'not_investor', label: "I'm not an investor — I'm looking for a place to live." },
    ],
    acknowledgment: 'Got it — this helps us tailor the call.',
    ctaLabel: 'Continue',
  },

  // Step 5 — Time & focus
  {
    id: 'focus_level',
    type: 'radio',
    prompt: 'Is real estate your primary focus right now?',
    required: true,
    options: [
      { value: 'full_time', label: 'Yes — this is my full-time focus.' },
      { value: 'side_hustle', label: 'No — I have a day job and invest on the side.' },
      { value: 'retired', label: "I'm retired, and invest part-time." },
    ],
    acknowledgment: "Understood. We'll keep the discussion realistic for your schedule.",
    ctaLabel: 'Continue',
  },

  // Step 6 — Goal (free text)
  {
    id: 'primary_goal',
    type: 'textarea',
    prompt: 'What do you want this next phase of investing to do for you?',
    subPrompt: 'This helps us steer the strategy discussion.',
    placeholder: 'Tell us in your own words…',
    maxLength: 255,
    required: false,
    starterAnchors: [
      'Replacing W-2 income',
      'Finding consistent off-market deals',
      'Scaling what\'s already working',
      'Building a repeatable system',
      'Something else',
    ],
    ctaLabel: 'Lock This In',
  },

  // Step 7 — Confirmation / Handoff
  {
    id: 'confirmation',
    type: 'confirmation',
    header: "You're all set.",
    body: "We'll review this before the call so we can focus on what matters most to you.",
    subPrompt: 'Next step: pick a time that works for you.',
    ctaLabel: 'Continue to Scheduling',
  },
];

// ==================== TRACKING PARAMS ====================

const CONTACT_FIELDS = ['name', 'firstName', 'first_name', 'lastName', 'last_name', 'email', 'phone', 'token'];

const getTrackingParams = (searchParams: URLSearchParams): Record<string, string> => {
  const tracking: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    if (!CONTACT_FIELDS.includes(key)) {
      tracking[key] = value;
    }
  });
  return tracking;
};

// ==================== COMPONENT ====================

export const StrategyCallSurvey = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get prefill data from URL params (from ActiveCampaign links)
  const firstName = searchParams.get('firstName') || searchParams.get('first_name') || '';
  const lastName = searchParams.get('lastName') || searchParams.get('last_name') || '';
  const nameFromParams = searchParams.get('name') || (firstName && lastName ? `${firstName} ${lastName}` : firstName);
  const token = searchParams.get('token') || '';

  const prefillValues: Record<string, string> = {};
  if (nameFromParams) prefillValues.name = nameFromParams;
  if (searchParams.get('email')) prefillValues.email = searchParams.get('email')!;
  if (searchParams.get('phone')) prefillValues.phone = searchParams.get('phone')!;

  // Capture tracking params
  const trackingParams = getTrackingParams(searchParams);

  const handleSubmit = async (values: FormValues) => {
    // Save to Supabase
    try {
      // Save survey response
      await supabase
        .from('prospect_responses')
        .insert([{
          email: values.email as string,
          name: values.name as string,
          phone: values.phone as string,
          source: 'strategy_call_setup',
          survey_data: {
            experience_level: values.experience_level,
            focus_level: values.focus_level,
            primary_goal: values.primary_goal,
          },
          ...(token && { token }),
          ...(Object.keys(trackingParams).length > 0 && { tracking_params: trackingParams }),
        }]);

      // Upsert to prospects table
      await supabase
        .from('prospects')
        .upsert([{
          email: values.email as string,
          name: values.name as string,
          phone: values.phone as string,
          source: 'strategy_call_setup',
          ...(Object.keys(trackingParams).length > 0 && { tracking_params: trackingParams }),
        }], { onConflict: 'email' });
    } catch (err) {
      console.error('Supabase error:', err);
      // Don't block the redirect on DB errors
    }

    // Redirect to scheduling with contact info
    const params = new URLSearchParams({
      name: values.name as string,
      email: values.email as string,
      phone: values.phone as string,
      ...trackingParams,
    });

    router.push(`/booking-blueprint?${params.toString()}`);
  };

  return (
    <ConversationForm
      questions={SURVEY_QUESTIONS}
      onSubmit={handleSubmit}
      prefillValues={prefillValues}
      theme="dark"
      showProgress={false}
    />
  );
};
