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
    description: 'Experience seamless authentication with biometric login support. Your security is our priority, with multi-factor authentication and bank-level encryption protecting every login.',
    features: [
      { icon: Shield, text: 'Biometric authentication' },
      { icon: Zap, text: 'Instant access' },
      { icon: Check, text: 'Bank-level security' },
    ],
    imageSrc: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop',
    imageAlt: 'PikoSend Login Screen',
    alignment: 'left',
  },
  {
    id: 2,
    title: 'Your Financial Dashboard',
    tagline: 'Everything at a Glance',
    description: 'Stay on top of your finances with a beautiful, intuitive dashboard. View your balance, recent transactions, and quick actions all in one place.',
    features: [
      { icon: Smartphone, text: 'Real-time balance updates' },
      { icon: Clock, text: 'Recent transaction history' },
      { icon: Zap, text: 'Quick send & receive' },
    ],
    imageSrc: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop',
    imageAlt: 'PikoSend Dashboard',
    alignment: 'right',
  },
  {
    id: 3,
    title: 'Send Money Instantly',
    tagline: 'Fast. Simple. Global.',
    description: 'Send money to anyone, anywhere in the world. Save favorite recipients, schedule future transfers, and track every transaction in real-time.',
    features: [
      { icon: Users, text: 'Multiple recipients' },
      { icon: Clock, text: 'Schedule transfers' },
      { icon: Check, text: 'Instant notifications' },
    ],
    imageSrc: 'https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop',
    imageAlt: 'PikoSend Send Money Interface',
    alignment: 'left',
  },
  {
    id: 4,
    title: 'Virtual Card Management',
    tagline: 'Total Control',
    description: 'Create virtual cards for online shopping, set spending limits, and freeze cards instantly. Keep your transactions secure with disposable card numbers.',
    features: [
      { icon: CreditCard, text: 'Create virtual cards' },
      { icon: Shield, text: 'Freeze/unfreeze instantly' },
      { icon: Check, text: 'Custom spending limits' },
    ],
    imageSrc: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop',
    imageAlt: 'PikoSend Cards Management',
    alignment: 'right',
  },
];

export const AppScreensTimeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Section background="soft-grey">
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
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-piko-teal via-piko-green to-piko-purple transform -translate-x-1/2 opacity-30"></div>

          <div className="space-y-20 md:space-y-32">
            {screens.map((screen, index) => {
              const isLeft = screen.alignment === 'left';
              return (
                <div
                  key={screen.id}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className="timeline-item opacity-0 transition-all duration-700 ease-out"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                      isLeft ? '' : 'lg:direction-rtl'
                    }`}
                  >
                    <div
                      className={`relative ${
                        isLeft ? 'lg:pr-12' : 'lg:pl-12 lg:text-right'
                      }`}
                      style={!isLeft ? { direction: 'ltr' } : {}}
                    >
                      <div className="relative inline-block lg:hidden mb-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-piko-teal to-piko-green flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
                        </div>
                      </div>

                      <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 z-10"
                        style={isLeft ? { right: '-28px' } : { left: '-28px' }}>
                        <div className="relative">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-piko-teal to-piko-green flex items-center justify-center shadow-lg">
                            <div className="w-4 h-4 rounded-full bg-white animate-pulse"></div>
                          </div>
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-piko-teal to-piko-green opacity-30 animate-ping"></div>
                        </div>
                      </div>

                      <div className="inline-block px-4 py-1 bg-gradient-to-r from-piko-teal to-piko-green text-white text-sm font-medium rounded-full mb-4">
                        {screen.tagline}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-poppins font-bold text-piko-black mb-4">
                        {screen.title}
                      </h3>

                      <p className="text-piko-medium-grey text-base md:text-lg leading-relaxed mb-6">
                        {screen.description}
                      </p>

                      <div className={`space-y-3 ${isLeft ? '' : 'lg:flex lg:flex-col lg:items-end'}`}>
                        {screen.features.map((feature, idx) => {
                          const Icon = feature.icon;
                          return (
                            <div
                              key={idx}
                              className={`flex items-center gap-3 ${isLeft ? '' : 'lg:flex-row-reverse'}`}
                            >
                              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-piko-teal/10 flex items-center justify-center">
                                <Icon className="w-4 h-4 text-piko-teal" strokeWidth={2} />
                              </div>
                              <span className="text-piko-medium-grey font-medium">
                                {feature.text}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div
                      className={`relative ${
                        isLeft ? 'lg:pl-12' : 'lg:pr-12'
                      }`}
                      style={!isLeft ? { direction: 'ltr' } : {}}
                    >
                      <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-br from-piko-teal/20 to-piko-purple/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

                        <div className="relative bg-white rounded-3xl p-6 shadow-xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200" style={{ aspectRatio: '9/19' }}>
                            <img
                              src={screen.imageSrc}
                              alt={screen.imageAlt}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-piko-black/40 via-transparent to-transparent"></div>

                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-piko-black rounded-full"></div>
                          </div>

                          <div className="absolute top-2 left-2 right-2 bottom-2 rounded-2xl border-2 border-white/20 pointer-events-none"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16 md:mt-20">
          <button className="px-8 py-4 bg-gradient-to-r from-piko-teal to-piko-green text-white rounded-full font-medium text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:from-piko-teal/90 hover:to-piko-green/90">
            Download the App
          </button>
          <p className="text-sm text-piko-light-grey mt-4">
            Available on iOS and Android
          </p>
        </div>
      </Container>

      <style>{`
        .timeline-item.is-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .timeline-item {
          transform: translateY(30px);
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </Section>
  );
};
