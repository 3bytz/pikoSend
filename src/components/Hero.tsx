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
            <div className="absolute -inset-2 bg-gradient-to-br from-piko-lilac to-piko-purple opacity-20 blur-xl rounded-3xl"></div>
            <img
              src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
              alt="Professional"
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(88, 44, 141, 0.3))' }}
            />
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative" style={{ transform: 'rotate(-2deg)' }}>
            <div className="absolute -inset-4 bg-gradient-to-br from-piko-lilac to-piko-purple rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-white rounded-3xl p-3 shadow-2xl" style={{ width: '280px', height: '560px', transform: 'rotate(2deg)' }}>
              <div className="w-full h-full bg-gradient-to-br from-piko-purple to-piko-lilac rounded-2xl flex flex-col items-center justify-center overflow-hidden">
                <div className="text-center text-white space-y-4 px-6">
                  <div className="text-4xl font-bold">$2,450</div>
                  <p className="text-sm opacity-80">Available Balance</p>
                  <div className="flex gap-2 justify-center mt-8">
                    <div className="w-3 h-3 rounded-full bg-white opacity-60"></div>
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                    <div className="w-3 h-3 rounded-full bg-white opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-4 bg-piko-purple opacity-10 blur-xl rounded-full"></div>
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
