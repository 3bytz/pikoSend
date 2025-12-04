import React from 'react';
import { Container } from './Container';
import { AccountDetailsCard } from './AccountDetailsCard';
import { ArrowRight } from 'lucide-react';
import { Section } from './Section';

export const GlobalAccountsHero: React.FC = () => {
  return (
    <Section className="relative min-h-screen flex items-center overflow-hidden" id='accounts'>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>
      </div>

      <Container className="relative z-10 py-20">
        <div className="absolute top-8 left-4 md:left-8">
          <p className="text-white/80 text-sm md:text-base font-medium">Global accounts</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Global Accounts
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
              Get USD, GBP and EUR accounts in minutes so you can focus on what matters most—receiving, spending and saving your money.
            </p>
            <button className="inline-flex items-center gap-2 text-piko-teal hover:text-piko-green text-lg font-semibold transition-colors group">
              Learn more
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-end order-1 lg:order-2">
            <AccountDetailsCard />
          </div>
        </div>
      </Container>
    </Section>
  );
};
