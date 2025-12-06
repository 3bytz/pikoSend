import React from 'react';
import { Plus, ArrowDownToLine, Snowflake, MoreHorizontal } from 'lucide-react';
import { Container } from './Container';
import { TypingEffect } from './TypingEffect';

export const ContactHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3760093/pexels-photo-3760093.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-800/80 to-gray-900/85 backdrop-blur-sm"></div>
      </div>

      <Container className="relative z-10 py-20">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <div className="mb-16 backdrop-blur-xl bg-black/50 border border-white/20 rounded-3xl p-8 shadow-2xl w-full max-w-md mx-auto animate-scale-in">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
                <span className="text-white/60 text-xs ml-2">2451</span>
              </div>
              <span className="text-white text-sm font-medium">PikoSend</span>
            </div>

            <div className="mb-8">
              <div className="text-white text-5xl font-bold mb-2">$57,168.05</div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <button className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Plus size={24} className="text-white" />
                </div>
                <span className="text-white text-xs">Add Money</span>
              </button>

              <button className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowDownToLine size={24} className="text-white" />
                </div>
                <span className="text-white text-xs">Withdraw</span>
              </button>

              <button className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Snowflake size={24} className="text-white" />
                </div>
                <span className="text-white text-xs">Freeze card</span>
              </button>

              <button className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <MoreHorizontal size={24} className="text-white" />
                </div>
                <span className="text-white text-xs">More</span>
              </button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-up">
              <TypingEffect texts={['Get in touch with us', 'We\'re here to help', 'Let\'s talk', 'Contact our team']} typingSpeed={80} deletingSpeed={40} pauseDuration={2500} />
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
              We're here to help. Send us a message and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
