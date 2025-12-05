import React from 'react';
import { Navbar, Footer, Newsletter, SEO, FeaturesHero, AppStoreBadges } from '../components';
import { AppScreensTimeline } from '../components/AppScreensTimeline';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Shield, Zap, Globe, Clock, Smartphone, Lock, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Complete transactions in seconds, not minutes. Our optimized infrastructure ensures your money moves at the speed of thought.',
    stats: '< 3 sec',
    statsLabel: 'Average transaction time',
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Your security is our priority. We use military-grade encryption and multi-factor authentication to protect every transaction.',
    stats: '256-bit',
    statsLabel: 'SSL Encryption',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Send and receive money across Africa and beyond. Support for multiple currencies and international transfers.',
    stats: '15+',
    statsLabel: 'Countries supported',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Access your money anytime, anywhere. Our platform never sleeps, so you can transact whenever you need.',
    stats: '99.9%',
    statsLabel: 'Uptime guarantee',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Built for mobile, optimized for speed. Manage your finances on the go with our intuitive mobile app.',
    stats: '4.8★',
    statsLabel: 'App store rating',
  },
  {
    icon: Lock,
    title: 'Privacy Protected',
    description: 'Your data belongs to you. We never sell your information and follow strict privacy regulations.',
    stats: '100%',
    statsLabel: 'Privacy compliant',
  },
  {
    icon: TrendingUp,
    title: 'Low Fees',
    description: 'Keep more of your money. Our transparent pricing means no hidden fees or surprise charges.',
    stats: 'From 0.5%',
    statsLabel: 'Transaction fees',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Get help when you need it. Our dedicated support team is always ready to assist you.',
    stats: '< 1 min',
    statsLabel: 'Response time',
  },
];

export const FeaturesPage: React.FC = () => {
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
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white border-2 border-piko-soft-grey rounded-2xl p-8 transition-all duration-500 hover:border-piko-purple hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-piko-purple/5 to-piko-violet/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-piko-purple/10 to-piko-violet/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-piko-purple" strokeWidth={2} />
                    </div>

                    <h3 className="text-xl font-poppins font-bold text-piko-black mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-piko-medium-grey mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="pt-6 border-t border-piko-soft-grey">
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-piko-purple to-piko-violet">
                        {feature.stats}
                      </div>
                      <div className="text-sm text-piko-light-grey mt-1">
                        {feature.statsLabel}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <AppScreensTimeline />

      <Section background="soft-grey" className="py-20">
        <Container>
          <div className="bg-gradient-to-r from-piko-purple to-piko-violet rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
                Experience the Difference Today
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join thousands of satisfied users who have transformed their financial lives with PikoSend
              </p>
              <button className="px-10 py-4 bg-white text-piko-purple rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-8">
                Get Started Free
              </button>
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
