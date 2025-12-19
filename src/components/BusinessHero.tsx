import React from 'react';
import { Container } from './Container';
import { AppStoreBadges } from './AppStoreBadges';
import { Building2, TrendingUp, Users } from 'lucide-react';

export const BusinessHero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-4 md:pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/ForBiz.png)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-piko-violet/90 via-piko-purple/90 to-piko-lilac/85 backdrop-blur-sm"></div>
      </div>

      <Container className="relative z-10 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-full animate-fade-in">
              <Building2 className="w-4 h-4" />
              For Business
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight animate-fade-up">
              Power Your Business with
              <span className="block mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-white">
                  Smart Payments
                </span>
              </span>
            </h1>

            <p className="text-xl text-white/90 leading-relaxed max-w-xl">
              Everything your business needs to accept payments, pay bills, and manage finances in one powerful platform.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-2 md:pt-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-white/70">Businesses</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm text-white/70">Uptime</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                <Building2 className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-white/70">Support</div>
              </div>
            </div>
          </div>

          <div className="relative block mt-1 md:mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl blur-2xl animate-float"></div>
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-4 sm:p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-scale-in">
              <img
                src="/new/3dHero.png"
                alt="Business Dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-12 pt-3 md:pt-8 border-t border-white/20">
          <p className="text-sm text-white/70 mb-4">Manage your business on the go</p>
          <AppStoreBadges variant="dark" size="md" />
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