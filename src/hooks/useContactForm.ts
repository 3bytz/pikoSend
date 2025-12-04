import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { contactApi } from '../services/contactApi';
import type { ContactFormData } from '../types/contact';

export const useContactForm = () => {
  return useMutation({
    mutationFn: (data: ContactFormData) => contactApi.submitContactForm(data),
    onSuccess: () => {
      toast.success('Thank you! Your message has been sent successfully. We\'ll respond within 24 hours.', {
        duration: 5000,
        icon: '✅',
      });
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to send message. Please try again.', {
        duration: 5000,
        icon: '❌',
      });
    },
  });
};
