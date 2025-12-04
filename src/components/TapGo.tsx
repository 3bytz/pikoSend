import React from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { Smartphone, Zap, CheckCircle } from 'lucide-react';

export const TapGo: React.FC = () => {
  return (
    <Section background="white" className=''>
      <Container className='px-0'>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-piko-purple via-piko-plum to-piko-purple p-12 md:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-piko-lilac rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-piko-teal rounded-full blur-3xl opacity-10"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-6">
                <Smartphone className="w-8 h-8 text-white" />
                <Zap className="w-8 h-8 text-piko-teal" />
              </div>

              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
                Send Money. Tap. Go.
              </h2>

              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join the future of payments today. Experience the simplest way to send and receive money across Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <CheckCircle className="w-6 h-6 text-piko-teal flex-shrink-0" />
                <p className="text-white text-sm">No hidden fees</p>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <CheckCircle className="w-6 h-6 text-piko-teal flex-shrink-0" />
                <p className="text-white text-sm">Instant transfers</p>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <CheckCircle className="w-6 h-6 text-piko-teal flex-shrink-0" />
                <p className="text-white text-sm">Bank-level security</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-10 py-4 bg-white text-piko-purple rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                Get Started Now
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-xl p-1.5 shadow-lg">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect width="100" height="100" fill="white"/>
                    <g fill="#582C8D">
                      <rect x="10" y="10" width="15" height="15"/>
                      <rect x="30" y="10" width="15" height="15"/>
                      <rect x="50" y="10" width="15" height="15"/>
                      <rect x="75" y="10" width="15" height="15"/>
                      <rect x="10" y="30" width="15" height="15"/>
                      <rect x="50" y="30" width="15" height="15"/>
                      <rect x="75" y="30" width="15" height="15"/>
                      <rect x="10" y="50" width="15" height="15"/>
                      <rect x="30" y="50" width="15" height="15"/>
                      <rect x="75" y="50" width="15" height="15"/>
                      <rect x="10" y="75" width="15" height="15"/>
                      <rect x="30" y="75" width="15" height="15"/>
                      <rect x="50" y="75" width="15" height="15"/>
                      <rect x="75" y="75" width="15" height="15"/>
                    </g>
                  </svg>
                </div>
                <p className="text-white text-sm">
                  Scan to<br />download app
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
