import { supabase } from '../lib/supabase';
import type { ContactFormData, ContactSubmission } from '../types/contact';

export const contactApi = {
  async submitContactForm(data: ContactFormData): Promise<ContactSubmission> {
    const { data: submission, error } = await supabase
      .from('contact_submissions')
      .insert([data])
      .select()
      .single();

    if (error) {
      throw new Error(error.message || 'Failed to submit contact form');
    }

    if (!submission) {
      throw new Error('No data returned from submission');
    }

    return submission;
  },

  async getAllSubmissions(): Promise<ContactSubmission[]> {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(error.message || 'Failed to fetch submissions');
    }

    return data || [];
  },

  async updateSubmissionStatus(
    id: string,
    status: 'new' | 'in_progress' | 'resolved'
  ): Promise<ContactSubmission> {
    const { data, error } = await supabase
      .from('contact_submissions')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw new Error(error.message || 'Failed to update submission status');
    }

    if (!data) {
      throw new Error('No data returned from update');
    }

    return data;
  },
};
