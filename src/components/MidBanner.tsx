import React from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const MidBanner: React.FC = () => {
  return (
    <Section background="soft-grey" className="mt-20">
      <Container>
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-piko-purple to-transparent opacity-30"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-12">
            <div className="animate-slide-up flex justify-center lg:justify-start">
              <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=500&h=600&fit=crop"
                alt="Join the future"
                className="w-full max-w-sm rounded-2xl shadow-lg"
              />
            </div>

            <div className="animate-fade-up space-y-8">
              <div>
                <h2 className="text-h2 text-piko-black font-poppins mb-4">
                  Join the Future of Payments
                </h2>
                <p className="text-body text-piko-medium-grey leading-relaxed">
                  Experience seamless global payments with industry-leading security and transparency. Start sending money today and join thousands of users worldwide.
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  'Fast verification process',
                  'Competitive exchange rates',
                  'Dedicated support team',
                  '24/7 account access',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-piko-medium-grey">
                    <div className="w-1.5 h-1.5 bg-piko-purple rounded-full flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>

              <Button variant="primary" size="lg" className="flex items-center gap-2">
                Get Started Now
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
