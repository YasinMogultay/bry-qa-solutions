export interface LeadRequest {
  fullName: string;
  email: string;
  company: string;
  phone?: string;
  projectType: ProjectType;
  message: string;
  referralSource?: ReferralSource;
}

export type ProjectType =
  | 'MANUAL_QA'
  | 'AUTOMATION'
  | 'PERFORMANCE'
  | 'SECURITY'
  | 'ACCESSIBILITY'
  | 'CONSULTING'
  | 'OTHER';

export type ReferralSource =
  | 'GOOGLE'
  | 'LINKEDIN'
  | 'REFERRAL'
  | 'CONFERENCE'
  | 'OTHER';
