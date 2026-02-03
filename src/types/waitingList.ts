export type UserType = 'personal' | 'business';

export interface WaitingListFormData {
   userType: UserType;
  phone: string;
  country: string;
  firstName?: string;
  lastName?: string;
  personalEmail?: string;
  businessName?: string;
  physicalAddress?: string;
  businessEmail?: string;
  contactFirstName?: string;
  contactLastName?: string;
  contactPhone?: string;
  contactEmail?: string;
  referralCode?: string;
  source: 'landing_page' | 'referral' | 'social_media' | 'other';
}

export interface WaitingListResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    position?: number;
  };
}