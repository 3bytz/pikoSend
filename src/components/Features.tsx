import React, { useState, useRef } from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { Zap, Shield, Smile, Headphones, ArrowRight, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Transactions',
    description: 'Transfer funds within seconds, no matter where you are in Africa. Experience lightning-fast payments with our optimized network.',
    details: [
      'Instant transfers within seconds',
      'Real-time processing 24/7',
      'Optimized African network',
      'No delays or wait times'
    ],
    gradient: 'from-amber-400 to-orange-500',
    accentColor: 'text-amber-600',
    bgColor: 'bg-amber-50',
    stat: '0-30s',
    statLabel: 'Transfer Time'
  },
  {
    icon: Shield,
    title: 'Trusted Security',
    description: 'Advanced encryption protects your transactions. Bank-level security measures and real-time fraud monitoring keep you safe.',
    details: [
      '256-bit SSL encryption',
      'Real-time fraud detection',
      'Two-factor authentication',
      'Regular security audits'
    ],
    gradient: 'from-blue-400 to-cyan-500',
    accentColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    stat: '99.9%',
    statLabel: 'Secure Rate'
  },
  {
    icon: Smile,
    title: 'User-Friendly',
    description: 'Intuitive design makes sending and receiving money simple. No technical expertise needed for anyone to use.',
    details: [
      'Simple 3-step process',
      'Multi-language support',
      'Accessible interface',
      'Mobile-first design'
    ],
    gradient: 'from-emerald-400 to-green-500',
    accentColor: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    stat: '4.9★',
    statLabel: 'App Rating'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our dedicated team is available anytime. Get help with any questions or issues day or night.',
    details: [
      '24/7 live chat support',
      'Multi-channel assistance',
      '2-minute response time',
      'Expert financial advisors'
    ],
    gradient: 'from-purple-400 to-pink-500',
    accentColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    stat: '24/7',
    statLabel: 'Availability'
  },
];

export const Features: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => prev === features.length - 1 ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev === 0 ? features.length - 1 : prev - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <Section background="soft-grey" id="features" className="py-12 md:py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-piko-purple/5 to-piko-violet/5"></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 text-piko-purple text-sm font-semibold rounded-full mb-6">
            <Zap className="w-4 h-4" />
            Key Features
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-piko-black mb-4">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-piko-purple to-piko-violet">
              PikoSend
            </span>
          </h2>
          <p className="text-lg md:text-xl text-piko-medium-grey max-w-2xl mx-auto">
            Experience financial services designed for modern Africa
          </p>
        </div>

        <div className="lg:hidden">
          <div className="relative">
            <div 
              ref={sliderRef}
              className="relative overflow-hidden rounded-3xl"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div 
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  
                  return (
                    <div 
                      key={index}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/40">
                        <div className="relative mb-6">
                          <div className="flex items-center justify-between">
                            <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center shadow-lg`}>
                              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                                <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className="text-2xl font-bold text-piko-black font-poppins">{feature.stat}</div>
                              <div className="text-xs text-piko-medium-grey font-medium mt-1">{feature.statLabel}</div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-poppins font-bold text-piko-black text-xl mb-3">
                            {feature.title}
                          </h3>
                          
                          <p className="text-piko-medium-grey text-sm leading-relaxed mb-5">
                            {feature.description}
                          </p>
                          
                          <div className="space-y-3 mb-6">
                            {feature.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className={`w-5 h-5 rounded-full ${feature.bgColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                  <CheckCircle className={`w-3 h-3 ${feature.accentColor}`} strokeWidth={2.5} />
                                </div>
                                <span className="text-sm text-piko-medium-grey">{detail}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between pt-4 border-t border-piko-soft-grey/30">
                            <button className="group flex items-center gap-2 text-sm font-medium text-piko-purple">
                              <span>Learn more</span>
                              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <div className="text-xs text-piko-medium-grey">
                              Swipe to explore →
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-8">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-6 bg-gradient-to-r from-piko-purple to-piko-violet' 
                      : 'bg-piko-soft-grey'
                  }`}
                />
              ))}
            </div>

            <div className="text-center mt-4 text-sm text-piko-medium-grey">
              {currentSlide + 1} of {features.length}
            </div>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border border-piko-soft-grey/50 hover:border-transparent shadow-xl hover:shadow-3xl transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className={`absolute top-0 right-0 w-20 h-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700`}>
                  <div className={`absolute top-0 right-0 w-10 h-10 bg-gradient-to-br ${feature.gradient} transform rotate-45 translate-x-5 -translate-y-5`}></div>
                </div>

                <div className="relative mb-8 flex items-start justify-between">
                  <div className={`w-20 h-20 rounded-2xl ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <div className="text-4xl font-bold text-piko-black font-poppins">{feature.stat}</div>
                    <div className="text-sm text-piko-medium-grey font-medium uppercase tracking-wider mt-2">{feature.statLabel}</div>
                  </div>
                </div>

                <div className="relative">
                  <h3 className="font-poppins font-bold text-piko-black text-2xl mb-5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-piko-purple group-hover:to-piko-violet transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-piko-medium-grey text-lg leading-relaxed mb-8 font-light">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-4 mb-10">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full ${feature.bgColor} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                          <CheckCircle className={`w-4 h-4 ${feature.accentColor}`} strokeWidth={2.5} />
                        </div>
                        <span className="text-base text-piko-medium-grey font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="group flex items-center gap-3 text-base font-medium text-piko-purple hover:text-piko-violet transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
                
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`}></div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};