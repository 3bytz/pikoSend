export interface ContactFormData {
  full_name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ContactSubmission extends ContactFormData {
  id: string;
  status: 'new' | 'in_progress' | 'resolved';
  created_at: string;
  updated_at: string;
}

export type ContactSubject =
  | 'General Inquiry'
  | 'Technical Support'
  | 'Partnership'
  | 'Business Account'
  | 'Other';
