import React from 'react';
import { Container } from './Container';
import { NotificationCard } from './NotificationCard';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Section } from './Section';

export const SendMoneyHero: React.FC = () => {
  return (
    <Section className="relative min-h-screen flex items-center overflow-hidden" id='send'>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-900/80"></div>
      </div>

      <Container className="relative z-10 py-20">
        <div className="absolute top-8 left-4 md:left-8">
          <p className="text-white/80 text-sm md:text-base font-medium">Send money</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          <div className="flex items-center justify-center lg:justify-start">
            <NotificationCard
              icon={<CheckCircle size={20} className="text-piko-green" />}
              title="PikoSend"
              message="Your payment of $4,000 was successful and receipt sent to your email"
              time="9:42 PM"
              className="max-w-md"
            />
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Fast money transfers
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
              Sending money is now easier and more affordable with reasonable upfront transaction fees and flexible transfer options. Get started today and send your first transfer in minutes.
            </p>
            <button className="inline-flex items-center gap-2 text-piko-teal hover:text-piko-green text-lg font-semibold transition-colors group">
              Learn more
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
