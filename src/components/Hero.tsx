import React from 'react';
import { Container } from './Container';
import { Button } from './Button';
import { Apple, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden pt-20 md:pt-32 pb-12 md:pb-20">
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-piko-lilac rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-20 left-0 w-48 h-48 md:w-72 md:h-72 bg-piko-lilac rounded-full blur-3xl opacity-10 -z-10"></div>

      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-80px)]">
        <div className="lg:col-span-5 animate-fade-up space-y-6">
          <div>
            <h1 className="text-white text-4xl md:text-h1 leading-tight font-poppins font-bold">
              PikoSend
              <br />
              more than just a payment solution
            </h1>
            <p className="text-white text-lg mt-6 leading-relaxed max-w-md opacity-90">
              Send money globally, manage finances locally, and grow your business with confidence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="md" className="flex items-center justify-center gap-2">
              <Apple size={20} />
              App Store
            </Button>
            <Button variant="primary" size="md" className="flex items-center justify-center gap-2">
              <Play size={20} />
              Google Play
            </Button>
          </div>

          <div className="pt-8 border-t border-white border-opacity-20">
            <p className="text-white text-sm opacity-70 mb-4">Trusted by leading companies</p>
            <div className="flex items-center gap-6 flex-wrap">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-8 w-24 bg-white bg-opacity-10 rounded animate-fade-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 flex justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="relative w-64 h-96">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop"
              alt="Professional"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-piko-lilac to-piko-purple rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-white rounded-3xl p-3 shadow-2xl" style={{ width: '280px', height: '560px' }}>
              <div className="w-full h-full bg-gradient-to-br from-piko-purple to-piko-lilac rounded-2xl flex flex-col items-center justify-center">
                <div className="text-center text-white space-y-4 px-6">
                  <div className="text-4xl font-bold">$2,450</div>
                  <p className="text-sm opacity-80">Available Balance</p>
                  <div className="flex gap-2 justify-center">
                    <div className="w-3 h-3 rounded-full bg-white opacity-60"></div>
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                    <div className="w-3 h-3 rounded-full bg-white opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-piko-lilac to-transparent opacity-30"></div>
    </section>
  );
};
