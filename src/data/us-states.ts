// US States with status for Homeflip.ai
// Status: 'available' | 'coming_soon' | 'not_available'

export type StateStatus = 'available' | 'coming_soon' | 'not_available';

export interface USState {
  code: string;
  name: string;
  status: StateStatus;
  statusReason?: string; // Explanation for not_available states
}

export const US_STATES: USState[] = [
  { code: 'AL', name: 'Alabama', status: 'coming_soon' },
  { code: 'AK', name: 'Alaska', status: 'coming_soon' },
  { code: 'AZ', name: 'Arizona', status: 'coming_soon' },
  { code: 'AR', name: 'Arkansas', status: 'coming_soon' },
  { code: 'CA', name: 'California', status: 'not_available', statusReason: 'Probate records require paid access' },
  { code: 'CO', name: 'Colorado', status: 'coming_soon' },
  { code: 'CT', name: 'Connecticut', status: 'coming_soon' },
  { code: 'DE', name: 'Delaware', status: 'coming_soon' },
  { code: 'FL', name: 'Florida', status: 'coming_soon' },
  { code: 'GA', name: 'Georgia', status: 'coming_soon' },
  { code: 'HI', name: 'Hawaii', status: 'coming_soon' },
  { code: 'ID', name: 'Idaho', status: 'coming_soon' },
  { code: 'IL', name: 'Illinois', status: 'coming_soon' },
  { code: 'IN', name: 'Indiana', status: 'coming_soon' },
  { code: 'IA', name: 'Iowa', status: 'coming_soon' },
  { code: 'KS', name: 'Kansas', status: 'coming_soon' },
  { code: 'KY', name: 'Kentucky', status: 'coming_soon' },
  { code: 'LA', name: 'Louisiana', status: 'coming_soon' },
  { code: 'ME', name: 'Maine', status: 'coming_soon' },
  { code: 'MD', name: 'Maryland', status: 'coming_soon' },
  { code: 'MA', name: 'Massachusetts', status: 'coming_soon' },
  { code: 'MI', name: 'Michigan', status: 'coming_soon' },
  { code: 'MN', name: 'Minnesota', status: 'coming_soon' },
  { code: 'MS', name: 'Mississippi', status: 'coming_soon' },
  { code: 'MO', name: 'Missouri', status: 'coming_soon' },
  { code: 'MT', name: 'Montana', status: 'coming_soon' },
  { code: 'NE', name: 'Nebraska', status: 'coming_soon' },
  { code: 'NV', name: 'Nevada', status: 'coming_soon' },
  { code: 'NH', name: 'New Hampshire', status: 'coming_soon' },
  { code: 'NJ', name: 'New Jersey', status: 'coming_soon' },
  { code: 'NM', name: 'New Mexico', status: 'coming_soon' },
  { code: 'NY', name: 'New York', status: 'coming_soon' },
  { code: 'NC', name: 'North Carolina', status: 'coming_soon' },
  { code: 'ND', name: 'North Dakota', status: 'coming_soon' },
  { code: 'OH', name: 'Ohio', status: 'available' },
  { code: 'OK', name: 'Oklahoma', status: 'coming_soon' },
  { code: 'OR', name: 'Oregon', status: 'coming_soon' },
  { code: 'PA', name: 'Pennsylvania', status: 'coming_soon' },
  { code: 'RI', name: 'Rhode Island', status: 'coming_soon' },
  { code: 'SC', name: 'South Carolina', status: 'coming_soon' },
  { code: 'SD', name: 'South Dakota', status: 'coming_soon' },
  { code: 'TN', name: 'Tennessee', status: 'coming_soon' },
  { code: 'TX', name: 'Texas', status: 'coming_soon' },
  { code: 'UT', name: 'Utah', status: 'coming_soon' },
  { code: 'VT', name: 'Vermont', status: 'coming_soon' },
  { code: 'VA', name: 'Virginia', status: 'coming_soon' },
  { code: 'WA', name: 'Washington', status: 'coming_soon' },
  { code: 'WV', name: 'West Virginia', status: 'coming_soon' },
  { code: 'WI', name: 'Wisconsin', status: 'coming_soon' },
  { code: 'WY', name: 'Wyoming', status: 'coming_soon' },
];

// Helper to get state by code
export function getStateByCode(code: string): USState | undefined {
  return US_STATES.find(s => s.code === code);
}

// Helper to get states by status
export function getStatesByStatus(status: StateStatus): USState[] {
  return US_STATES.filter(s => s.status === status);
}
