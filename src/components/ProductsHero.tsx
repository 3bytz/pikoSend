import React from 'react';
import { Container } from './Container';
import { AppStoreBadges } from './AppStoreBadges';
import { TypingEffect } from './TypingEffect';
import { Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProductsHero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-piko-purple via-piko-violet to-piko-lilac">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-piko-lilac rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-piko-purple rounded-full blur-3xl opacity-30"></div>
      </div>

      <Container className="relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-full animate-fade-in">
              <Zap className="w-4 h-4" />
              Our Products
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight animate-fade-up">
              Everything You Need to
              <span className="block mt-2">
                <TypingEffect
                  texts={['Manage Your Money', 'Send Instantly', 'Receive Globally', 'Grow Your Wealth']}
                  typingSpeed={100}
                  deletingSpeed={50}
                  pauseDuration={2000}
                />
              </span>
            </h1>

            <p className="text-xl text-white/90 leading-relaxed max-w-xl">
              Powerful financial tools designed for modern Africa. Send, receive, and manage money with unmatched speed and security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-piko-purple rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="pt-6">
              <p className="text-sm text-white/70 mb-4">Download our mobile app</p>
              <AppStoreBadges variant="dark" size="md" />
            </div>
          </div>

          <div className="relative block">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4 sm:space-y-6 sm:pt-12">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-3 sm:p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300 animate-fade-in-left">
                  <img
                    src="/mockups/instant-send.png"
                    alt="Instant Transfers"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-3 sm:p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
                  <img
                    src="/mockups/wallets.png"
                    alt="Virtual Cards"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-3 sm:p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300 animate-fade-in-right">
                  <img
                    src="/mockups/financeDashbaord.png"
                    alt="Global Accounts"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-3 sm:p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300 animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
                  <img
                    src="/mockups/9_transaction_history_1.jpg"
                    alt="Mobile Wallet"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};
