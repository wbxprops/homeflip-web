'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import {
  Question,
  FormValues,
  FieldValue,
  ConversationFormProps,
} from './types';

// Field components
import { TextField } from './fields/TextField';
import { EmailField } from './fields/EmailField';
import { PhoneField } from './fields/PhoneField';
import { NumberField } from './fields/NumberField';
import { TextareaField } from './fields/TextareaField';
import { RadioField } from './fields/RadioField';
import { CheckboxField } from './fields/CheckboxField';
import { ContactInfoField } from './fields/ContactInfoField';
import { EntryScreen } from './fields/EntryScreen';
import { ConfirmationScreen } from './fields/ConfirmationScreen';

// ==================== ANALYTICS (placeholder) ====================

const track = (event: string, data?: Record<string, unknown>) => {
  // Placeholder - logs to console if no analytics provider
  console.log(`[Analytics] ${event}`, data);
};

// ==================== VALIDATION ====================

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(email);
};

const isValidPhone = (phone: string) => {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10;
};

const validateQuestion = (question: Question, value: FieldValue): string | null => {
  // Custom validation first
  if (question.validate) {
    const customError = question.validate(value);
    if (customError) return customError;
  }

  // Entry and confirmation screens don't need validation
  if (question.type === 'entry' || question.type === 'confirmation') {
    return null;
  }

  // Required check
  if (question.required) {
    if (question.type === 'checkbox') {
      const arr = value as string[];
      if (!arr || arr.length === 0) return 'Please select at least one option.';
    } else if (value === undefined || value === null || value === '') {
      return 'This field is required.';
    }
  }

  // Type-specific validation
  if (question.type === 'email' && value) {
    if (!isValidEmail(value as string)) return 'Enter a valid email address.';
  }

  if (question.type === 'phone' && value) {
    if (!isValidPhone(value as string)) return 'Enter a valid phone number.';
  }

  return null;
};

// ==================== MAIN COMPONENT ====================

export const ConversationForm = ({
  questions,
  onSubmit,
  onStepChange,
  initialValues = {},
  prefillValues = {},
  theme = 'dark',
  showProgress = false,
}: ConversationFormProps) => {
  const isDark = theme === 'dark';

  const [currentStep, setCurrentStep] = useState(0);
  const [values, setValues] = useState<FormValues>(() => ({
    ...initialValues,
    ...prefillValues,
  }));
  const [errors, setErrors] = useState<{ [questionId: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'submitting'>('idle');

  const currentQuestion = questions[currentStep];
  const isLastStep = currentStep === questions.length - 1;
  const isFirstStep = currentStep === 0;

  // Track step views
  useEffect(() => {
    track('strategy_call_setup_step_view', { stepId: currentQuestion?.id, step: currentStep });
    onStepChange?.(currentStep + 1, questions.length);
  }, [currentStep, currentQuestion?.id, questions.length, onStepChange]);

  // Update value for current question
  const setValue = useCallback((value: FieldValue) => {
    setValues(prev => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
    // Clear error when user starts typing/selecting
    setErrors(prev => ({
      ...prev,
      [currentQuestion.id]: '',
    }));
  }, [currentQuestion?.id]);

  // Validate and advance to next step
  const goNext = useCallback(async () => {
    const error = validateQuestion(currentQuestion, values[currentQuestion.id]);
    if (error) {
      setErrors(prev => ({ ...prev, [currentQuestion.id]: error }));
      return;
    }

    // Track step completion
    track('strategy_call_setup_step_complete', { stepId: currentQuestion.id, step: currentStep });

    if (isLastStep) {
      // Submit form
      setStatus('submitting');
      try {
        track('strategy_call_setup_complete', { ...values });
        await onSubmit(values);
      } catch (err) {
        console.error('Submit error:', err);
        setStatus('idle');
        setErrors(prev => ({ ...prev, [currentQuestion.id]: 'Something didn\'t save. Please try again.' }));
      }
    } else {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentQuestion, values, isLastStep, onSubmit, currentStep]);

  // Go back to previous step
  const goBack = useCallback(() => {
    if (!isFirstStep) {
      setCurrentStep(prev => prev - 1);
    }
  }, [isFirstStep]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Enter to advance (except for textarea which needs Cmd/Ctrl+Enter)
      if (currentQuestion.type === 'textarea') {
        if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
          e.preventDefault();
          goNext();
        }
      } else if (e.key === 'Enter' && currentQuestion.type !== 'checkbox') {
        e.preventDefault();
        goNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, currentQuestion?.type]);

  // Render the appropriate field component
  const renderField = () => {
    if (currentQuestion.type === 'entry') {
      return <EntryScreen question={currentQuestion} theme={theme} />;
    }

    if (currentQuestion.type === 'confirmation') {
      return <ConfirmationScreen question={currentQuestion} theme={theme} />;
    }

    const fieldProps = {
      question: currentQuestion,
      value: values[currentQuestion.id],
      onChange: setValue,
      error: errors[currentQuestion.id],
      theme,
      autoFocus: true,
    };

    switch (currentQuestion.type) {
      case 'text':
        return <TextField {...fieldProps} />;
      case 'email':
        return <EmailField {...fieldProps} />;
      case 'phone':
        return <PhoneField {...fieldProps} />;
      case 'number':
        return <NumberField {...fieldProps} />;
      case 'textarea':
        return <TextareaField {...fieldProps} />;
      case 'radio':
        return <RadioField {...fieldProps} />;
      case 'checkbox':
        return <CheckboxField {...fieldProps} />;
      case 'contact_info':
        return <ContactInfoField {...fieldProps} />;
      default:
        return <TextField {...fieldProps} />;
    }
  };

  // Get CTA label
  const getCtaLabel = () => {
    if (currentQuestion.ctaLabel) return currentQuestion.ctaLabel;
    if (isLastStep) return 'Continue to Scheduling';
    if (currentQuestion.type === 'entry') return 'Begin Setup';
    return 'Continue';
  };

  // Should show CTA button (always yes for this design, per spec)
  const shouldShowCta = true;

  return (
    <div className="space-y-8">
      {/* Optional progress bar */}
      {showProgress && (
        <div className={`h-1 rounded-full ${isDark ? 'bg-white/10' : 'bg-slate-200'}`}>
          <motion.div
            className={`h-1 rounded-full ${isDark ? 'bg-gradient-to-r from-[#83d4c0] to-[#0891b2]' : 'bg-gradient-to-r from-[#0891b2] to-[#7c3aed]'}`}
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Back button - subtle, top area */}
          {!isFirstStep && (
            <button
              type="button"
              onClick={goBack}
              className={`flex items-center gap-2 text-sm transition-colors ${
                isDark ? 'text-white/40 hover:text-white/70' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          )}

          {/* Question prompt */}
          {(currentQuestion.prompt || currentQuestion.label) && (
            <div className="space-y-2">
              <h2 className={`text-2xl sm:text-3xl font-medium leading-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {currentQuestion.prompt || currentQuestion.label}
              </h2>
              {(currentQuestion.subPrompt || currentQuestion.subLabel) && (
                <p className={`text-base ${isDark ? 'text-white/50' : 'text-slate-500'}`}>
                  {currentQuestion.subPrompt || currentQuestion.subLabel}
                </p>
              )}
            </div>
          )}

          {/* Field */}
          {renderField()}

          {/* Helper text */}
          {currentQuestion.helper && currentQuestion.type !== 'entry' && currentQuestion.type !== 'confirmation' && (
            <p className={`text-sm ${isDark ? 'text-white/40' : 'text-slate-400'}`}>
              {currentQuestion.helper}
            </p>
          )}

          {/* Error display */}
          {errors[currentQuestion.id] && (
            <p className={`text-sm ${isDark ? 'text-red-400' : 'text-red-600'}`}>
              {errors[currentQuestion.id]}
            </p>
          )}

          {/* CTA Button */}
          {shouldShowCta && (
            <button
              type="button"
              onClick={goNext}
              disabled={status === 'submitting'}
              className={`w-full py-4 px-6 rounded-xl font-medium text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
                isDark
                  ? 'bg-[#83d4c0] text-black hover:bg-[#6bc4af] active:scale-[0.98]'
                  : 'bg-[#0891b2] text-white hover:bg-[#0782a1] active:scale-[0.98]'
              }`}
            >
              {status === 'submitting' ? 'Saving...' : (
                <>
                  {getCtaLabel()}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
