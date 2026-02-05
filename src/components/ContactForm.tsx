import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Phone, Globe } from 'lucide-react';
import { contactFormSchema, ContactFormInput } from '../lib/validations';
import { useContactForm } from '../hooks/useContactForm';
import { Container } from './Container';


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
    resolver: zodResolver(contactFormSchema) as any,
    defaultValues: {
      full_name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
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
    <section className="py-8 md:py-20 bg-gradient-to-br from-gray-50 to-white ">
      <Container>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-1 gap-3 md:gap-12 mb-8 md:mb-16">
      
        

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100">
              <div className="mb-8">
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
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-piko-purple to-piko-violet text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4  md:gap-6 mb-3 md:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-7 h-7 text-piko-purple" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Visit the Office</h3>
              <a href="mailto:info@pikosend.com" className="text-piko-purple hover:underline text-base font-medium">
                Vision Towers, Muthithi Road, Westlands, Kenya
              </a>
              <p className="text-gray-600 text-sm mt-2">General inquiries</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-piko-purple" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Office Hours</h3>
              <p className="text-gray-700 text-base font-medium">Monday - Friday</p>
              <p className="text-gray-600 text-sm">8AM - 6PM EAT</p>
              <p className="text-gray-500 text-xs mt-2">Weekends: Emergency only</p>
            </div>

      
          </div>
          
       
        </div>
      </Container>
    </section>
  );
};