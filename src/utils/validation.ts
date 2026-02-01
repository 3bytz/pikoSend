import { z } from 'zod';


const baseSchema = z.object({
  phone: z.string()
    .min(9, 'Phone number is too short')
    .max(20, 'Phone number is too long')
    .regex(/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number'),
  country: z.string().default('KE'),
  referralCode: z.string().optional(),
});


const personalSchema = baseSchema.extend({
  userType: z.literal('personal'),
  firstName: z.string().min(2, 'First name must be at least 2 characters').max(50, 'First name is too long'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters').max(50, 'Last name is too long'),
  personalEmail: z.string().email('Please enter a valid email').optional(),
});

const businessSchema = baseSchema.extend({
  userType: z.literal('business'),
  businessName: z.string().min(2, 'Business name is required (2-100 characters)').max(100, 'Business name is too long'),
  physicalAddress: z.string().min(5, 'Physical address is required (5-200 characters)').max(200, 'Address is too long'),
  businessEmail: z.string().email('Valid business email is required'),
  contactFirstName: z.string().min(2, 'Contact first name is required').max(50, 'Contact first name is too long'),
  contactLastName: z.string().min(2, 'Contact last name is required').max(50, 'Contact last name is too long'),
  contactPhone: z.string()
    .regex(/^\+?[1-9]\d{1,14}$/, 'Valid contact phone number required')
    .optional(),
  contactEmail: z.string().email('Valid contact email required').optional(),
});

export const waitingListSchema = z.discriminatedUnion('userType', [
  personalSchema,
  businessSchema
]);

export type WaitingListFormInput = z.infer<typeof waitingListSchema>;