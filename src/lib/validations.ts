import { z } from 'zod';

export const contactFormSchema = z.object({
  full_name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters')
    .trim(),
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required')
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .optional()
    .transform(val => val?.trim() || undefined),
  subject: z
    .string()
    .min(1, 'Please select a subject')
    .max(200, 'Subject must not exceed 200 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must not exceed 1000 characters')
    .trim(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
