import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, MessageSquare, Mail, Phone, MapPin, ArrowRight, Globe } from 'lucide-react';
import { contactFormSchema, ContactFormInput } from '../lib/validations';
import { useContactForm } from '../hooks/useContactForm';
import { Container } from './Container';
// import { AppStoreBadges } from './AppStoreBadges';

const subjects = [
  'General Inquiry',
  'Technical Support',
  'Partnership',
  'Business Account',
  'Other',
];

const contactMethods = [
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Get instant support from our team',
    action: 'Start Chat',
    color: 'from-piko-purple to-piko-violet',
    link: '#live-chat'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us an email anytime',
    action: 'Send Email',
    color: 'from-piko-violet to-piko-lilac',
    link: 'mailto:support@pikosend.com'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Call us directly',
    action: 'Call Now',
    color: 'from-piko-lilac to-piko-purple',
    link: 'tel:+254110917569'
  },
  {
    icon: MapPin,
    title: 'Visit Office',
    description: 'Come see us in person',
    action: 'View Location',
    color: 'from-piko-purple to-piko-violet',
    link: '#location'
  }
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
      
            {/* <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-piko-purple/10 to-piko-violet/10 rounded-3xl blur-2xl"></div>
              
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-gray-700 text-sm font-medium">Support Online Now</span>
                  </div>
                  <span className="text-white text-xs bg-green-500 px-3 py-1 rounded-full font-medium">Live</span>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Quick Contact</h3>
                  <p className="text-gray-600">Choose your preferred way to reach us</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <a
                        key={index}
                        href={method.link}
                        className={`group relative overflow-hidden rounded-2xl p-5 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-80 group-hover:opacity-90 transition-opacity`}></div>
                        
                        <div className="relative z-10">
                          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Icon className="w-6 h-6" />
                          </div>
                          <h3 className="font-semibold text-base mb-2">{method.title}</h3>
                          <p className="text-white/80 text-sm mb-3 line-clamp-2">{method.description}</p>
                          <div className="inline-flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            {method.action}
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-3">Emergency Contact</h4>
                    <div className="text-2xl font-bold text-piko-purple mb-2">+254 110 916538</div>
                    <p className="text-sm text-gray-600">Available 24/7 for urgent matters</p>
                  </div>
                </div>
              </div>
            </div> */}

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
              <a href="mailto:support@pikosend.com" className="text-piko-purple hover:underline text-base font-medium">
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
              <p className="text-gray-600 text-sm">8AM - 6PM WAT</p>
              <p className="text-gray-500 text-xs mt-2">Weekends: Emergency only</p>
            </div>

            {/* <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Loader2 className="w-7 h-7 text-piko-purple" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Response Time</h3>
              <p className="text-gray-700 text-base font-medium">Within 24 hours</p>
              <p className="text-gray-600 text-sm">On business days</p>
              <p className="text-green-600 text-xs font-medium mt-2">✔ Priority for urgent matters</p>
            </div> */}
          </div>
          
          {/* <div className="bg-gradient-to-r from-piko-purple to-piko-violet rounded-3xl p-8 md:p-12 text-center text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Prefer instant support?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Download our mobile app for live chat support and real-time assistance right from your phone
              </p>
              <div className="flex justify-center">
                <AppStoreBadges variant="light" size="lg" />
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm opacity-80">Our app also offers faster transaction processing and enhanced security features</p>
              </div>
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  );
};