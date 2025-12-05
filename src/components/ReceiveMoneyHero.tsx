import React from 'react';
import { Container } from './Container';
import { NotificationCard } from './NotificationCard';
import { ArrowRight, Send } from 'lucide-react';

export const ReceiveMoneyHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3796810/pexels-photo-3796810.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>
      </div>

      <Container className="relative z-10 py-20">
        <div className="absolute top-8 left-4 md:left-8">
          <p className="text-white/80 text-sm md:text-base font-medium">Receive money</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          <div className="flex items-center justify-center lg:justify-start">
            <NotificationCard
              icon={<Send size={20} className="text-white" />}
              title="PikoSend"
              message="You have received a payment of $2,500 from Jacob Talomola"
              time="07:30 AM"
              className="max-w-md"
            />
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              The reliable way to get paid
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
              Get paid on time, every time, with accounts in USD, GBP, or EUR, plus easy invoicing and payment links.
            </p>
            <button className="inline-flex items-center gap-2 text-piko-purple hover:text-piko-violet text-lg font-semibold transition-colors group">
              Learn more
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
