import React, { useState } from 'react';
import { Container } from './Container';
import { Button } from './Button';
import { Apple, Play } from 'lucide-react';
import { AuthModal } from './AuthModal';

export const Hero: React.FC = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
const partners = [
  "/partners/telecharger.png",
  "/partners/telecharger-1.png",
 "/partners/telecharger.png",
  "/partners/telecharger-1.png",
];
  return (
    <>
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} initialMode="signup" />
    <section className="relative min-h-screen overflow-hidden pt-20 md:pt-32 pb-12 md:pb-20" style={{
      background: 'radial-gradient(circle at top right, #9A6AFD 0%, #582C8D 40%, #3E1C6D 100%)',
    }}>
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-piko-lilac rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-20 left-0 w-48 h-48 md:w-72 md:h-72 bg-piko-lilac rounded-full blur-3xl opacity-10 -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-piko-plum rounded-full blur-3xl opacity-30 -z-10"></div>

      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-80px)]">
        <div className="lg:col-span-6 animate-fade-up space-y-6">
          <div>
            <h1 className="text-white text-4xl md:text-h1 leading-tight font-poppins font-bold">
              PikoSend
              <br />
              more than just a payment solution
            </h1>
            <p className="text-white text-lg mt-6 leading-relaxed max-w-md opacity-90">
              Experience seamless transactions and enhanced security - empowering your personal and business growth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="flex items-center gap-3">
              <div className="hidden sm:block w-16 h-16 bg-white rounded-xl p-1.5 shadow-lg">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect width="100" height="100" fill="white"/>
                  <g fill="#582C8D">
                    <rect x="5" y="5" width="10" height="10"/>
                    <rect x="20" y="5" width="10" height="10"/>
                    <rect x="35" y="5" width="10" height="10"/>
                    <rect x="65" y="5" width="10" height="10"/>
                    <rect x="80" y="5" width="10" height="10"/>
                    <rect x="5" y="20" width="10" height="10"/>
                    <rect x="35" y="20" width="10" height="10"/>
                    <rect x="50" y="20" width="10" height="10"/>
                    <rect x="65" y="20" width="10" height="10"/>
                    <rect x="80" y="20" width="10" height="10"/>
                    <rect x="5" y="35" width="10" height="10"/>
                    <rect x="20" y="35" width="10" height="10"/>
                    <rect x="35" y="35" width="10" height="10"/>
                    <rect x="50" y="35" width="10" height="10"/>
                    <rect x="65" y="35" width="10" height="10"/>
                    <rect x="80" y="35" width="10" height="10"/>
                    <rect x="5" y="50" width="10" height="10"/>
                    <rect x="35" y="50" width="10" height="10"/>
                    <rect x="80" y="50" width="10" height="10"/>
                    <rect x="5" y="65" width="10" height="10"/>
                    <rect x="20" y="65" width="10" height="10"/>
                    <rect x="35" y="65" width="10" height="10"/>
                    <rect x="65" y="65" width="10" height="10"/>
                    <rect x="80" y="65" width="10" height="10"/>
                    <rect x="5" y="80" width="10" height="10"/>
                    <rect x="20" y="80" width="10" height="10"/>
                    <rect x="35" y="80" width="10" height="10"/>
                    <rect x="50" y="80" width="10" height="10"/>
                    <rect x="65" y="80" width="10" height="10"/>
                    <rect x="80" y="80" width="10" height="10"/>
                  </g>
                </svg>
              </div>
              <div className="text-white text-sm">
                <p className="font-medium">Scan to download</p>
                <div className="flex gap-2 mt-1">
                  <Apple size={16} />
                  <Play size={16} />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white border-opacity-20">
            <p className="text-white text-sm opacity-70 mb-4">Trusted by leading companies</p>
        <div className="flex items-center gap-6 flex-wrap">
          {partners.map((src, index) => (
          <div
            key={index}
            className="h-12 w-32 bg-white bg-opacity-10 rounded flex items-center justify-center animate-fade-up"
            style={{ animationDelay: `${index * 0.1}s` }}
            >
        <img
        src={src}
        alt="Partner Logo"
        className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  ))}
</div>

          </div>
        </div>
        {/*  */}

        <div className="lg:col-span-6 flex justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="relative w-[100%] h-[400px] md:h-[500px] lg:h-[780px]">
            <div className="absolute inset-0 bg-gradient-to-br from-piko-teal via-piko-green to-piko-lilac opacity-20 rounded-[40%] blur-3xl"></div>
            <div className="absolute -inset-8 bg-gradient-to-br from-piko-lilac to-transparent opacity-10 rounded-full blur-2xl"></div>
            <img
              src="/pikoSendHero.png"
              alt="Happy PikoSend user"
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(88, 44, 141, 0.4))',
                mixBlendMode: 'normal'
              }}
            />
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
    </>
  );
};
