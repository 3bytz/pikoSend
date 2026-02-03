import React from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { Building2, Users, Code, TrendingUp, Shield, Zap } from 'lucide-react';

const businessFeatures = [
  {
    icon: Building2,
    title: 'Business Accounts',
    description: 'Dedicated accounts with enhanced features for businesses of all sizes.',
  },
  {
    icon: Users,
    title: 'Team Management',
    description: 'Add team members, set permissions, and manage roles effortlessly.',
  },
  {
    icon: Code,
    title: 'API Integration',
    description: 'Powerful APIs to integrate payments into your applications.',
  },
  {
    icon: TrendingUp,
    title: 'Advanced Analytics',
    description: 'Detailed insights and reporting for all your business transactions.',
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Enterprise-grade security with fraud detection and prevention.',
  },
  {
    icon: Zap,
    title: 'Bulk Payments',
    description: 'Pay multiple recipients at once with our bulk payment feature.',
  },
];

export const BusinessSection: React.FC = () => {
  return (
    <Section background="white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-piko-purple/20 via-piko-violet/20 to-piko-purple/20 rounded-[40%] blur-3xl"></div>
              <img
                src="/new/business_built for modern business.jpeg"
                alt="Business team using PikoSend"
                className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-piko-purple/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-piko-purple" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-piko-black">$2.5M+</p>
                    <p className="text-xs text-piko-medium-grey">Processed </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-piko-purple/10 rounded-full mb-4">
              <p className="text-piko-purple font-medium text-sm">For Businesses</p>
            </div>
            <h2 className="text-3xl md:text-h2 font-poppins font-bold text-piko-black mb-6">
              Built for Modern Businesses
            </h2>
            <p className="text-piko-medium-grey text-lg mb-8 leading-relaxed">
              Whether you're a startup or an enterprise, PikoSend provides the tools you need to manage global payments efficiently. Scale your business with confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {businessFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-3 animate-fade-up"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-piko-purple/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-piko-purple" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-piko-black mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-piko-medium-grey leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-piko-purple text-white rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
                Get Started for Business
              </button>
              <button className="px-8 py-4 border-2 border-piko-purple text-piko-purple rounded-full font-medium transition-all duration-300 hover:bg-piko-purple hover:text-white">
                View API Documentation
              </button>
            </div> */}
          </div>
        </div>
      </Container>
    </Section>
  );
};
