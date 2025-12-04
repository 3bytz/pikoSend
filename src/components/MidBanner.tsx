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
          <div className="lg:col-span-4 flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative" style={{ transform: 'rotate(-2deg)' }}>
            <div className="absolute -inset-6 bg-gradient-to-br from-piko-lilac via-piko-purple to-piko-teal rounded-full blur-3xl opacity-40 animate-icon-float"></div>
            <div className="relative bg-white rounded-[36px] p-3 shadow-2xl" style={{ width: '310px', height: '660px', transform: 'rotate(2deg)' }}>
              <div className="w-full h-full bg-gradient-to-br from-piko-purple via-piko-purple to-piko-plum rounded-[28px] flex flex-col overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/20 to-transparent"></div>

                <div className="pt-6 pb-3 px-5 relative z-10">
                  <div className="flex justify-between items-center text-white text-xs mb-8">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-3 border border-white rounded-sm"></div>
                      <div className="w-4 h-3 border border-white rounded-sm"></div>
                    </div>
                  </div>

                  <p className="text-white/70 text-xs mb-2">Total Balance</p>
                  <h2 className="text-white text-4xl font-bold mb-8">$12,450.00</h2>
                </div>

                <div className="flex-1 bg-white rounded-t-[28px] p-5 relative">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-piko-soft-grey rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-piko-teal/20 flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full bg-piko-teal"></div>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-piko-black">Received</p>
                          <p className="text-[10px] text-piko-medium-grey">From John Doe</p>
                        </div>
                      </div>
                      <p className="text-sm font-bold text-piko-teal">+$500</p>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-piko-soft-grey rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-piko-purple/20 flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full bg-piko-purple"></div>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-piko-black">Sent</p>
                          <p className="text-[10px] text-piko-medium-grey">To Sarah Smith</p>
                        </div>
                      </div>
                      <p className="text-sm font-bold text-piko-medium-grey">-$150</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-56 h-8 bg-gradient-to-r from-transparent via-piko-purple/20 to-transparent blur-xl rounded-full"></div>
          </div>
        </div>  
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
