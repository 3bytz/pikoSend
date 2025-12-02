import React from 'react';
import { Container } from './Container';
import { TransactionCard } from './TransactionCard';
import { ArrowRight } from 'lucide-react';

export const CardsHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>
      </div>

      <Container className="relative z-10 py-20">
        <div className="absolute top-8 left-4 md:left-8">
          <p className="text-white/80 text-sm md:text-base font-medium">Cards</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Cards for every occasion
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
              Work, shop, travel – you decide. Our virtual and physical cards give you the power with transparent pricing and global acceptance. Whether it's Google, Canva, Zoom, AWS, Amazon, eBay etc. We've got you.
            </p>
            <button className="inline-flex items-center gap-2 text-piko-teal hover:text-piko-green text-lg font-semibold transition-colors group">
              Learn more
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-end relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-52 rounded-3xl bg-gradient-to-br from-piko-purple via-piko-plum to-piko-purple shadow-2xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-6 left-6 text-white/90 text-sm font-medium">debit</div>
              <div className="absolute top-6 right-6">
                <div className="w-12 h-8 rounded bg-gradient-to-br from-yellow-400 to-orange-500 opacity-80"></div>
              </div>
              <div className="absolute bottom-6 left-6 text-white font-semibold text-lg tracking-wider">
                ADEMOLA DAVIES
              </div>
              <div className="text-center">
                <svg className="w-16 h-16 text-white/20" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="35" cy="50" r="25" opacity="0.8" />
                  <circle cx="65" cy="50" r="25" opacity="0.8" />
                </svg>
              </div>
            </div>

            <TransactionCard className="relative z-10 mt-32 lg:mt-0 lg:ml-8" />
          </div>
        </div>
      </Container>
    </section>
  );
};
