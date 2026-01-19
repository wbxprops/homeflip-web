'use client';

import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { ConversationForm, Question, FormValues, ContactInfoValue } from './forms';

// ==================== QUESTIONS CONFIG ====================

const SURVEY_QUESTIONS: Question[] = [
  {
    id: 'contact_info',
    type: 'contact_info',
    label: "Let's Get Started",
    subLabel: 'Tell us a bit about yourself.',
    required: true,
  },
  {
    id: 'investor_type',
    type: 'radio',
    label: 'What best describes you?',
    required: true,
    options: [
      { value: 'new_investor', label: "I'm looking for my first property." },
      { value: 'restart', label: "I've done deals before but took a break - ready to get back on track." },
      { value: 'active', label: "I'm actively investing - I've closed at least one deal in the past 12 months." },
      { value: 'not_investor', label: "I'm NOT an investor, I'm looking for a place to live." },
    ],
  },
  {
    id: 'is_full_time',
    type: 'radio',
    label: 'Is real estate investing your full time job?',
    required: true,
    options: [
      { value: 'yes', label: "Yes, I'm a full time real estate investor." },
      { value: 'day_job', label: "I've got a day job, real estate is something I do on the side." },
      { value: 'retired', label: "I'm retired, but real estate is something I do on the side." },
    ],
  },
  {
    id: 'houses_completed_12mo',
    type: 'number',
    label: 'How many houses have you completed in the past 12 months?',
    placeholder: 'Enter a number',
    required: true,
    min: 0,
  },
  {
    id: 'houses_goal_12mo',
    type: 'number',
    label: 'How many houses would you like to complete in the next 12 months?',
    placeholder: 'Enter a number',
    required: true,
    min: 0,
  },
  {
    id: 'goal_achieve',
    type: 'textarea',
    label: 'What is the #1 thing you want to achieve?',
    subLabel: 'Through real estate investing',
    placeholder: 'Tell us your main goal...',
    required: true,
    maxLength: 255,
  },
  {
    id: 'biggest_struggle',
    type: 'textarea',
    label: "What's your #1 biggest struggle?",
    subLabel: 'In achieving your real estate investing goals',
    placeholder: "Tell us what's holding you back...",
    required: true,
    maxLength: 255,
  },
  {
    id: 'probate_interest',
    type: 'checkbox',
    label: 'What has sparked your interest in probate investing?',
    required: true,
    options: [
      { value: 'first_heard', label: "This is the first I've heard of probate investing" },
      { value: 'heard_no_start', label: "I've heard about probate but never knew how to get started" },
      { value: 'tried_no_work', label: "I've tried probate before but couldn't make it work" },
      { value: 'better_source', label: "I'm looking for a better source of off-market deals" },
    ],
  },
];

// ==================== TRACKING PARAMS ====================

const CONTACT_FIELDS = ['name', 'firstName', 'first_name', 'lastName', 'last_name', 'email', 'phone', 'redirect_after'];

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

interface PreStrategySurveyConversationProps {
  onStepChange?: (step: number, total: number) => void;
}

export const PreStrategySurveyConversation = ({ onStepChange }: PreStrategySurveyConversationProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get prefill data from URL params
  const firstName = searchParams.get('firstName') || searchParams.get('first_name') || '';
  const lastName = searchParams.get('lastName') || searchParams.get('last_name') || '';
  const nameFromParams = searchParams.get('name') || (firstName && lastName ? `${firstName} ${lastName}` : firstName);

  const prefillContact = {
    name: nameFromParams,
    email: searchParams.get('email') || '',
    phone: searchParams.get('phone') || '',
  };

  // Capture tracking params on mount
  const trackingParams = getTrackingParams(searchParams);

  const handleSubmit = async (values: FormValues) => {
    const contactInfo = values.contact_info as ContactInfoValue;

    // Save survey response
    await supabase
      .from('prospect_responses')
      .insert([{
        email: contactInfo.email,
        name: contactInfo.name,
        phone: contactInfo.phone,
        source: 'pre_strategy_survey_v1',
        survey_data: {
          investor_type: values.investor_type,
          is_full_time: values.is_full_time,
          houses_completed_12mo: values.houses_completed_12mo,
          houses_goal_12mo: values.houses_goal_12mo,
          goal_achieve: values.goal_achieve,
          biggest_struggle: values.biggest_struggle,
          probate_interest: values.probate_interest,
        },
        ...(Object.keys(trackingParams).length > 0 && { tracking_params: trackingParams }),
      }]);

    // Upsert to prospects table
    await supabase
      .from('prospects')
      .upsert([{
        email: contactInfo.email,
        name: contactInfo.name,
        phone: contactInfo.phone,
        source: 'pre_strategy_survey_v1',
        ...(Object.keys(trackingParams).length > 0 && { tracking_params: trackingParams }),
      }], { onConflict: 'email' });

    // Redirect to Claim Your County
    const params = new URLSearchParams({
      name: contactInfo.name,
      email: contactInfo.email,
      phone: contactInfo.phone,
      redirect_after: 'booking-blueprint',
      ...trackingParams,
    });

    router.push(`/claim-your-county?${params.toString()}`);
  };

  return (
    <ConversationForm
      questions={SURVEY_QUESTIONS}
      onSubmit={handleSubmit}
      onStepChange={onStepChange}
      prefillValues={prefillContact.name ? { contact_info: prefillContact } : undefined}
      theme="dark"
    />
  );
};
