// ConversationForm Types
// Typeform-style one-question-at-a-time form module

export type FieldType =
  | 'text'
  | 'email'
  | 'phone'
  | 'textarea'
  | 'number'
  | 'radio'
  | 'checkbox'  // multi-select
  | 'entry'     // splash/intro screen
  | 'confirmation'  // final handoff screen
  | 'contact_info';

export interface FieldOption {
  value: string;
  label: string;
}

export interface Question {
  id: string;
  type: FieldType;
  // Main prompt/heading
  prompt?: string;
  label?: string; // Compatibility
  // Subheader text (below prompt)
  subPrompt?: string;
  subLabel?: string; // Compatibility
  // Muted helper text (below input)
  helper?: string;
  // For entry/confirmation screens
  header?: string;
  body?: string;
  note?: string;
  // Input config
  placeholder?: string;
  required?: boolean;
  options?: FieldOption[];  // for radio/checkbox
  maxLength?: number;  // for textarea
  min?: number;  // for number
  max?: number;  // for number
  // Acknowledgment text shown after radio selection
  acknowledgment?: string;
  // Starter anchors for textarea (hint chips)
  starterAnchors?: string[];
  // Custom CTA button label
  ctaLabel?: string;
  // Custom validation - return error message or null if valid
  validate?: (value: unknown) => string | null;
  // Conditional display - question only shows if this returns true
  showIf?: (values: FormValues) => boolean;
}

export interface ContactInfoValue {
  name: string;
  email: string;
  phone: string;
}

export type FieldValue = string | number | string[] | ContactInfoValue | undefined;

export interface FormValues {
  [questionId: string]: FieldValue;
}

export interface ConversationFormProps {
  questions: Question[];
  onSubmit: (values: FormValues) => Promise<void>;
  onStepChange?: (step: number, totalSteps: number) => void;
  initialValues?: Partial<FormValues>;
  // Skip steps if values are pre-filled
  prefillValues?: Partial<FormValues>;
  // Theme
  theme?: 'dark' | 'light';
  // Show progress indicator (default false for this design)
  showProgress?: boolean;
}

export interface FieldProps {
  question: Question;
  value: FieldValue;
  onChange: (value: FieldValue) => void;
  error?: string;
  theme?: 'dark' | 'light';
  autoFocus?: boolean;
}
