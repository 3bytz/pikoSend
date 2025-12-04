import React, { useEffect, useRef } from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { Smartphone, Shield, Zap, CreditCard, Clock, Users, Check } from 'lucide-react';

interface AppScreen {
  id: number;
  title: string;
  tagline: string;
  description: string;
  features: Array<{ icon: React.ElementType; text: string }>;
  imageSrc: string;
  imageAlt: string;
  alignment: 'left' | 'right';
}

const screens: AppScreen[] = [
  {
    id: 1,
    title: 'Quick & Secure Login',
    tagline: 'Access in Seconds',
    description:
      'Experience seamless authentication with biometric login support. Your security is our priority, with multi-factor authentication and bank-level encryption protecting every login.',
    features: [
      { icon: Shield, text: 'Biometric authentication' },
      { icon: Zap, text: 'Instant access' },
      { icon: Check, text: 'Bank-level security' },
    ],
    imageSrc: '/mockups/financeDashbaord.png',
    imageAlt: 'PikoSend Login Screen',
    alignment: 'left',
  },
  {
    id: 2,
    title: 'Your Financial Dashboard',
    tagline: 'Everything at a Glance',
    description:
      'Stay on top of your finances with a beautiful, intuitive dashboard. View your balance, recent transactions, and quick actions all in one place.',
    features: [
      { icon: Smartphone, text: 'Real-time balance updates' },
      { icon: Clock, text: 'Recent transaction history' },
      { icon: Zap, text: 'Quick send & receive' },
    ],
    imageSrc: '/mockups/financeDashbaord.png',
    imageAlt: 'PikoSend Dashboard',
    alignment: 'right',
  },
  {
    id: 3,
    title: 'Send Money Instantly',
    tagline: 'Fast. Simple. Global.',
    description:
      'Send money to anyone, anywhere in the world. Save favorite recipients, schedule future transfers, and track every transaction in real-time.',
    features: [
      { icon: Users, text: 'Multiple recipients' },
      { icon: Clock, text: 'Schedule transfers' },
      { icon: Check, text: 'Instant notifications' },
    ],
    imageSrc: '/mockups/instant-send.png',
    imageAlt: 'PikoSend Send Money Interface',
    alignment: 'left',
  },
  {
    id: 4,
    title: 'Wallet Management',
    tagline: 'Total Control',
    description:
      'Create virtual cards for online shopping, set spending limits, and freeze cards instantly. Keep your transactions secure with disposable card numbers.',
    features: [
      { icon: CreditCard, text: 'Create virtual cards' },
      { icon: Shield, text: 'Freeze/unfreeze instantly' },
      { icon: Check, text: 'Custom spending limits' },
    ],
    imageSrc: '/mockups/wallets.png',
    imageAlt: 'PikoSend Cards Management',
    alignment: 'right',
  },
];

export const AppScreensTimeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    itemRefs.current.forEach(ref => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <Section background="soft-grey" id='experience'>
      <Container>
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-h2 font-poppins font-bold text-piko-black mb-4">
            Experience the PikoSend App
          </h2>
          <p className="text-piko-medium-grey text-lg max-w-2xl mx-auto">
            Manage your money on the go with our powerful mobile app. Send, receive, and track your finances with ease.
          </p>
        </div>

        <div className="relative" ref={timelineRef}>
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-piko-teal/30 via-piko-green/30 to-piko-lilac/30 transform -translate-x-1/2 z-0"></div>

          <div className="space-y-10 md:space-y-32">
            {screens.map((screen, index) => {
              const isLeft = screen.alignment === 'left';

              return (
                <div
                  key={screen.id}
                  ref={el => (itemRefs.current[index] = el)}
                  className="timeline-item opacity-0 translate-y-8 transition-all duration-700 ease-out"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative">
                    {/* Timeline Node */}
                    <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-piko-teal to-piko-green flex items-center justify-center shadow-lg border-4 border-white">
                          <div className="w-4 h-4 rounded-full bg-white animate-pulse"></div>
                        </div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-piko-teal to-piko-green opacity-30 animate-ping"></div>
                      </div>
                    </div>

                    {/* Mobile Node */}
                    <div className="lg:hidden flex items-center justify-center mb-3 md:mb-8">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-piko-teal to-piko-green flex items-center justify-center shadow-lg border-4 border-white">
                          <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
                        </div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-piko-teal to-piko-green opacity-30 animate-ping"></div>
                      </div>
                    </div>

                    {/* CONTENT GRID */}
                    <div
                      className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                        isLeft ? '' : 'lg:grid-flow-dense'
                      }`}
                    >
                      {/* IMAGE */}
                      <div
                        className={`relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full mx-auto ${
                          isLeft ? 'lg:order-1' : 'lg:order-2'
                        }`}
                      >
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/20 bg-white">
                          <img
                            src={screen.imageSrc}
                            alt={screen.imageAlt}
                            className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* TEXT */}
                      <div className={`${isLeft ? 'lg:order-2 lg:pl-12' : 'lg:order-1 lg:pr-12'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-piko-teal/10 to-piko-green/10 text-piko-teal text-sm font-medium rounded-full mb-4 border border-piko-teal/20">
                          <div className="w-1.5 h-1.5 rounded-full bg-piko-teal animate-pulse"></div>
                          {screen.tagline}
                        </div>

                        <h3 className="text-2xl md:text-3xl font-poppins font-bold text-piko-black mb-4">
                          {screen.title}
                        </h3>

                        <p className="text-piko-medium-grey text-base md:text-lg leading-relaxed mb-8">
                          {screen.description}
                        </p>

                        <div className="space-y-4">
                          {screen.features.map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                              <div key={idx} className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-piko-teal/10 to-piko-green/10 flex items-center justify-center">
                                  <Icon className="w-5 h-5 text-piko-teal" />
                                </div>
                                <span className="text-piko-black font-medium">{feature.text}</span>
                              </div>
                            );
                          })}
                        </div>

                        <div className="mt-8 pt-6 border-t border-piko-soft-grey">
                          <span className="text-piko-light-grey text-sm font-medium">
                            Screen {screen.id}/{screens.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA (UNCHANGED) */}
        <div className="text-center mt-3 md:mt-4 pt-3 border-t border-piko-soft-grey">
<div className="text-center mt-3 md:mt-4 pt-12 border-t border-piko-soft-grey">
          <div className="mb-8">
            <h3 className="text-2xl font-poppins font-bold text-piko-black mb-3">
              Ready to get started?
            </h3>
            <p className="text-piko-medium-grey max-w-xl mx-auto">
              Download the PikoSend app today and experience the future of digital payments.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-12 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-piko-teal to-piko-green text-white rounded-full font-medium text-lg transition-all duration-300 hover:shadow-xl hover:shadow-piko-teal/25 hover:scale-105 active:scale-95">
              <span className="flex items-center justify-center gap-2">
                Download the App
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
{/*             
            <button className="px-8 py-4 bg-white text-piko-black border border-piko-soft-grey rounded-full font-medium text-lg transition-all duration-300 hover:bg-piko-soft-grey hover:border-piko-teal/20 hover:shadow-lg">
              View Demo
            </button> */}
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-12 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-piko-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-piko-black font-medium">App Store</p>
                <p className="text-xs text-piko-light-grey">Download for iOS</p>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-8 bg-piko-soft-grey"></div>
            <div className="sm:hidden w-32 h-px bg-piko-soft-grey"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-piko-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-1.674 2.8997C16.2477 6.5889 14.3905 5.5714 12.0005 5.5714c-2.3917 0-4.2486 1.018-5.527 2.7713L4.7995 5.4467a.4162.4162 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592c-1.7875 2.1-1.757 5.2766.0916 7.3462l-1.9197 3.3248a.416.416 0 00.1521.5676.416.416 0 00.5676-.1521l1.6897-2.9266c1.2933 1.08 2.9709 1.6849 4.7789 1.6849 1.8079 0 3.4855-.6049 4.7788-1.6849l1.6897 2.9266a.4162.4162 0 00.5676.1521.4157.4157 0 00.1521-.5676l-1.9197-3.3248c1.8486-2.0696 1.8791-5.2462.0916-7.3462"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-piko-black font-medium">Play Store</p>
                <p className="text-xs text-piko-light-grey">Download for Android</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </Container>

      <style>{`
        .timeline-item.is-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </Section>
  );
};
