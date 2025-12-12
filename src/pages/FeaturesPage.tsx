import React from 'react';
import { Navbar, Footer, Newsletter, SEO, FeaturesHero, AppStoreBadges } from '../components';
import { AppScreensTimeline } from '../components/AppScreensTimeline';
import { FeatureCard } from '../components/FeatureCard';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Shield, Zap, Globe, Clock, Smartphone, Lock, TrendingUp, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: Zap,
    title: 'Lightning-Fast Transactions',
    description:
      'Say goodbye to waiting. With PikoSend, payments are completed in seconds, keeping your business running smoothly and customers happy.',
    stats: '< 3 sec',
    statsLabel: 'Average transaction speed',
    imageUrl:
      '/features/fastTransaction.webp',
  },
  {
    icon: Smartphone,
    title: 'Simple QR Code Payments',
    description:
      'No more cash or card hassles. Customers simply scan your QR code and pay instantly—fast, secure, and effortless.',
    stats: '1 Scan',
    statsLabel: 'Instant checkout',
    imageUrl:
      '/features/QrPayment.jpg',
  },
  {
    icon: Globe,
    title: 'Merchant Integration',
    description:
      'PikoSend connects seamlessly to your point-of-sale or business workflow. No complex setup—just plug in and start accepting payments.',
    stats: 'Plug & Play',
    statsLabel: 'POS Integration',
    imageUrl:
      '/features/mercahntSale.webp',
  },
  {
    icon: TrendingUp,
    title: 'Affordable for All',
    description:
      'Whether you are a small vendor or a large business, our transparent pricing keeps costs low so you can earn more.',
    stats: 'From 0.5%',
    statsLabel: 'Transaction fee',
    imageUrl:
      '/features/affordableForAll.webp',
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description:
      'Your transactions and data are protected with industry-leading security, encryption, and fraud-prevention tools.',
    stats: '256-bit',
    statsLabel: 'Encryption',
    imageUrl:
      '/features/bankGradeSec.jpg',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description:
      'PikoSend never sleeps. Transact at any time, day or night, with guaranteed uptime and reliability.',
    stats: '99.9%',
    statsLabel: 'Uptime',
    imageUrl:
      '/features/247support.png',
  },

  {
    icon: Lock,
    title: 'Privacy You Can Trust',
    description:
      'Your data stays private. PikoSend follows strict data protection standards and never sells your information.',
    stats: '100%',
    statsLabel: 'Data ownership',
    imageUrl:
      '/features/privacy.webp',
  },
  {
    icon: Users,
    title: 'Expert Human Support',
    description:
      'Our support team responds fast, understands African businesses, and is always ready to help.',
    stats: '< 1 min',
    statsLabel: 'Response time',
    imageUrl:
      '/features/support.jpg',
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

      <Section background="white" className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-piko-soft-grey rounded-2xl overflow-hidden transition-all duration-300 hover:border-piko-purple hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={feature.imageUrl}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-piko-violet/10 to-piko-purple/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-piko-purple" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-poppins font-bold text-piko-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-piko-medium-grey text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="pt-4 border-t border-piko-soft-grey">
                    <div className="text-2xl font-bold text-piko-black mb-1">
                      {feature.stats}
                    </div>
                    <div className="text-xs text-piko-medium-grey">
                      {feature.statsLabel}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <AppScreensTimeline />

      <Section background="soft-grey" className="py-20">
        <Container>
          <div ref={ctaAnimation.ref} className={`bg-gradient-to-r from-piko-purple to-piko-violet rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden ${ctaAnimation.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
                Experience the Difference Today
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join thousands of satisfied users who have transformed their financial lives with PikoSend
              </p>
              {/* <button className="px-10 py-4 bg-white text-piko-purple rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-8">
                Get Started Free
              </button> */}
              <div className="pt-8 border-t border-white/20">
                <p className="text-sm text-white/80 mb-4">Available on mobile</p>
                <div className="flex justify-center">
                  <AppStoreBadges variant="dark" size="md" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Newsletter />
      <Footer />
    </div>
  );
};