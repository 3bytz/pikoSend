import React from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { CheckCircle2 } from 'lucide-react';

const personalFeatures = [
  'Send and receive money instantly',
  'Multi-currency wallet support',
  'Personal spending insights',
  'Bill payments automation',
];

const businessFeatures = [
  'Team payment management',
  'Advanced reporting tools',
  'API integration ready',
  'Dedicated business support',
];

export const PersonalBusiness: React.FC = () => {
  return (
    <Section background="white" className="border-t border-piko-soft-grey">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up space-y-12">
            <div>
              <h2 className="text-h2 text-piko-black font-poppins mb-2">Personal Use</h2>
              <div className="w-16 h-1 bg-piko-purple rounded-full"></div>
            </div>
            <ul className="space-y-4">
              {personalFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 animate-fade-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-piko-purple flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-body text-piko-medium-grey">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop"
              alt="Personal use"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:grid-cols-2-reverse">
          <div className="order-2 lg:order-1 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop"
              alt="Business use"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          <div className="order-1 lg:order-2 animate-fade-up space-y-12">
            <div>
              <h2 className="text-h2 text-piko-black font-poppins mb-2">For Your Business</h2>
              <div className="w-16 h-1 bg-piko-purple rounded-full"></div>
            </div>
            <ul className="space-y-4">
              {businessFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 animate-fade-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-piko-purple flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-body text-piko-medium-grey">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};
