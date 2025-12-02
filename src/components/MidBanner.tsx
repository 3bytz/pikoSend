import React from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const MidBanner: React.FC = () => {
  return (
    <Section background="soft-grey" className="mt-20 relative">
      <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{ marginTop: '-1px' }}>
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,16C1120,11,1280,21,1360,26.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            fill="#F5F7FA"
          />
        </svg>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-slide-up flex justify-center lg:justify-start">
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500&h=667&fit=crop"
              alt="Join the future"
              className="w-full max-w-md rounded-2xl shadow-lg"
              style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)', aspectRatio: '3/4' }}
            />
          </div>

          <div className="animate-fade-up space-y-8">
            <div>
              <h2 className="text-3xl md:text-h2 text-piko-black font-poppins mb-4">
                Join the Future of Payments
              </h2>
              <p className="text-base text-piko-medium-grey leading-relaxed">
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

            <Button variant="primary" size="lg" className="flex items-center gap-2 hover:translate-y-[-8px]">
              Get Started Now
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
