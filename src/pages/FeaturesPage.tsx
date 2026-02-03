import React from 'react';
import { Navbar, Footer, SEO, FeaturesHero, AppStoreBadges } from '../components';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Shield, Zap, Globe, Users, CheckCircle, Sparkles, Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: Zap,
    title: 'Low & Transparent Transaction Fees',
    description: 'Our pricing is simple and affordable. No hidden charges. No surprises. You always know what you’re paying before you confirm a transaction.',
    details: [
      'Low transaction fees starting from 0.5%',
      'No set up fees',
      'No hidden charges',
    ],
    stats: '< 3 sec',
    statsLabel: 'Average speed',
    imageUrl: '/new/landing_happy_users.jpeg',
    gradient: 'from-piko-purple to-piko-violet',
    accentColor: 'text-piko-purple',
    bgColor: 'bg-piko-purple/10'
  },
  {
    icon: Globe,
    title: 'Multi-Wallet Control',
    description: 'PikoSend allows you to organise your money the way you want. You can create, name, and manage multiple wallets without extra cost. Easily save for rent, school fees, vacation and many more, all in one platform.',
    details: [
      'Move money across wallets at no cost',
      'Real-time transaction alerts',
      'Spending limits',
      'Free/Unfreeze'
    ],
    stats: '99.8%',
    statsLabel: 'Success rate',
    imageUrl: '/new/3dHero.png',
    gradient: 'from-piko-violet to-piko-lilac',
    accentColor: 'text-piko-violet',
    bgColor: 'bg-piko-violet/10'
  },
  {
    icon: Shield,
    title: 'Strong Data Privacy & Security',
    description: 'With PikoSend, your money and data are fully protected. Every transaction is secured with end-to-end encryption, your PIN keeps access private, and the app locks automatically when not in use  so your money stays exactly where it should.',
    details: [
      'Strict data privacy compliance',
      'No sell or share data policy',
      'Real-time fraud detection',
      'Never share or sell your data'
    ],
    stats: '100%',
    statsLabel: 'Secure',
    imageUrl: '/features/organisedWallets.jpeg',
    gradient: 'from-piko-purple to-piko-lilac',
    accentColor: 'text-piko-lilac',
    bgColor: 'bg-piko-lilac/10'
  },
  {
    icon: Users,
    title: 'Accessible Customer Support',
    description: 'Nothing is more frustrating than not being able to reach for help when you need it.  That’s why at PikoSend, we strongly believe in good and accessible customer support. Our team is always available whether it’s WhatsApp, SMS, phone, email, or social media  so you can get help quickly whenever you need it.',
    details: [
      '24/7 multilingual support',
      'Under 1 minute response time',
    ],
    stats: '24/7',
    statsLabel: 'Support',
    imageUrl: '/new/features_expert.jpeg',
    gradient: 'from-piko-violet to-piko-purple',
    accentColor: 'text-piko-violet',
    bgColor: 'bg-piko-violet/10'
  },
   {
    icon: Users,
    title: 'Send Money Your Way',
    description: 'With PikoSend, sending money is simple, fast, and flexible. Choose the method that works best for you:',
    details: [
      'Send by Phone (to Mpesa)',
      'Send by Wallet',
      'Send to Bank (Pesalink)',
    ],
    stats: '< 40 secs',
    statsLabel: 'Send Money',
    imageUrl: '/features/sendMoneyUrWay.png',
    gradient: 'from-piko-violet to-piko-purple',
    accentColor: 'text-piko-violet',
    bgColor: 'bg-piko-violet/10'
  }
];
export const FeaturesPage: React.FC = () => {
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 });

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Features - PikoSend | Fast, Secure & Reliable Money Transfers"
        description="Discover PikoSend's powerful features: lightning-fast transactions, bank-grade security, 24/7 availability, low fees, and expert support."
        keywords="fast money transfer, secure payments, mobile banking, low fees, 24/7 support, global reach"
      />
      <Navbar />
      <FeaturesHero />

      <Section background="white" className="py-6 md:py-24">
        <Container>
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 text-piko-purple text-base font-semibold rounded-full mb-6">
              <Sparkles className="w-5 h-5" />
              <span>Comprehensive Features</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-piko-black mb-6">
              Your everyday partner for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-piko-purple to-piko-violet">
                seamless payments
              </span>
            </h2>
            <p className="text-xl text-piko-medium-grey max-w-3xl mx-auto">
              Offering practical financial services designed to make everyday transactions easier.
            </p>
          </div>

          <div className="space-y-4 md:space-y-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 md:gap-16`}
                >
                  <div className="lg:w-1/2">
                    <div className={`group relative rounded-3xl overflow-hidden shadow-2xl border border-piko-soft-grey/50 hover:shadow-3xl transition-all duration-500 ${isEven ? 'lg:translate-x-6' : 'lg:-translate-x-6'}`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5`}></div>
                      <img
                        src={feature.imageUrl}
                        alt={feature.title}
                        className="block md:hidden w-full h-[400px] md:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                       <img
                        src={feature.imageUrl}
                        alt={feature.title}
                        className="hidden md:block w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                           
                    </div>
                  </div>

                  <div className="lg:w-1/2 space-y-8">
                    <div className={`inline-flex items-center gap-3 px-5 py-3 ${feature.bgColor} rounded-full ${isEven ? 'lg:ml-auto' : 'lg:mr-auto'} w-fit`}>
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                      </div>
                      <span className={`font-semibold ${feature.accentColor}`}>{feature.stats} • {feature.statsLabel}</span>
                    </div>

                    <div>
                      <h3 className="text-3xl md:text-4xl font-poppins font-bold text-piko-black mb-6 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-lg md:text-xl text-piko-medium-grey leading-relaxed mb-8">
                        {feature.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-4 rounded-2xl bg-white border border-piko-soft-grey hover:border-piko-purple/30 hover:shadow-md transition-all duration-300">
                          <div className={`w-10 h-10 rounded-lg ${feature.bgColor} flex items-center justify-center flex-shrink-0`}>
                            <CheckCircle className={`w-5 h-5 ${feature.accentColor}`} strokeWidth={2} />
                          </div>
                          <div>
                            <p className="font-medium text-piko-black">{detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* <div className="pt-6">
                      <button className={`group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${feature.gradient} text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300`}>
                        <span>Learn more about this feature</span>
                        <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      </button>
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section background="soft-grey" className="py-3 md:py-20">
        <Container>
          <div ref={ctaAnimation.ref} className={`bg-gradient-to-r from-piko-purple to-piko-violet rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden ${ctaAnimation.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <Target className="w-5 h-5" />
                <span className="font-medium">Ready to Transform Your Payments?</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
                Experience the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-white">
                  PikoSend Difference
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-95 font-light">
                Join thousands of businesses and individuals who have simplified their financial lives with PikoSend
              </p>
              
             
              <div className="pt-12 border-t border-white/20">
                <div className="flex justify-center">
                  <AppStoreBadges variant="light" size="lg" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      <Footer />
    </div>
  );
};