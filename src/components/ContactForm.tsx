import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { contactFormSchema, ContactFormInput } from '../lib/validations';
import { useContactForm } from '../hooks/useContactForm';
import { Container } from './Container';
import { AppStoreBadges } from './AppStoreBadges';

const subjects = [
  'General Inquiry',
  'Technical Support',
  'Partnership',
  'Business Account',
  'Other',
];

export const ContactForm: React.FC = () => {
  const { mutate, isPending } = useContactForm();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
  });

  const message = watch('message', '');
  const messageLength = message?.length || 0;

  const onSubmit = (data: ContactFormInput) => {
    mutate(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Send us a message
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="full_name"
                    type="text"
                    {...register('full_name')}
                    disabled={isPending}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-piko-purple focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="John Doe"
                  />
                  {errors.full_name && (
                    <p className="mt-1.5 text-sm text-red-600">{errors.full_name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    disabled={isPending}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-piko-purple focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    disabled={isPending}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-piko-purple focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="+234 XXX XXX XXXX"
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    {...register('subject')}
                    disabled={isPending}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-piko-purple focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p className="mt-1.5 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register('message')}
                  disabled={isPending}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-piko-purple focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell us how we can help you..."
                />
                <div className="flex items-center justify-between mt-1.5">
                  {errors.message && (
                    <p className="text-sm text-red-600">{errors.message.message}</p>
                  )}
                  <p className={`text-sm ml-auto ${messageLength > 1000 ? 'text-red-600' : 'text-gray-500'}`}>
                    {messageLength}/1000
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full sm:w-auto px-8 py-4 bg-piko-purple text-white font-semibold rounded-xl hover:bg-piko-plum transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isPending ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
                <p className="text-sm text-gray-500">
                  We typically respond within 24 hours
                </p>
              </div>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-piko-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-piko-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:support@pikosend.com" className="text-piko-purple hover:underline">
                support@pikosend.com
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-piko-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-piko-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
              <p className="text-gray-600">Monday - Friday<br />8AM - 6PM WAT</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-piko-violet/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-piko-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
              <p className="text-gray-600">Within 24 hours<br />on business days</p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-piko-purple to-piko-violet rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Prefer to chat with us on the app?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Download our mobile app for instant support and quick assistance
            </p>
            <div className="flex justify-center">
              <AppStoreBadges variant="dark" size="md" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
