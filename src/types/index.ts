// Export all TypeScript types and interfaces from this file
export interface SpiritualResponse {
  responses: string[];
  otherResponse?: string;
  followUp: 'yes' | 'no' | 'maybe' | '';
  followUpMethod: string[];
  otherFollowUpMethod?: string;
}

export interface UserProfile {
  name: string;
  school: string;
  form: string;
  phone: string;
  email: string;
  initial: string;
}

export interface FormData {
  currentSection: number;
  spiritualResponse: SpiritualResponse;
  // Add other section data as needed
}