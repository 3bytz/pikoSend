import React, { useState } from 'react';
import { Container } from './Container';
import { Button } from './Button';
import { Apple, Play } from 'lucide-react';
import { AuthModal } from './AuthModal';

export const Hero: React.FC = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);

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
            <Button
              variant="primary"
              size="lg"
              className="flex items-center justify-center gap-2 bg-white text-piko-purple hover:bg-opacity-90"
              onClick={() => setAuthModalOpen(true)}
            >
              Create an Account
            </Button>
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
            <div className="absolute inset-0 bg-gradient-to-br from-piko-teal via-piko-green to-piko-lilac opacity-20 rounded-[40%] blur-3xl"></div>
            <div className="absolute -inset-8 bg-gradient-to-br from-piko-lilac to-transparent opacity-10 rounded-full blur-2xl"></div>
            <img
              src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
              alt="Happy PikoSend user"
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(88, 44, 141, 0.4))',
                mixBlendMode: 'normal'
              }}
            />
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative" style={{ transform: 'rotate(-2deg)' }}>
            <div className="absolute -inset-6 bg-gradient-to-br from-piko-lilac via-piko-purple to-piko-teal rounded-full blur-3xl opacity-40 animate-icon-float"></div>
            <div className="relative bg-white rounded-[36px] p-3 shadow-2xl" style={{ width: '280px', height: '560px', transform: 'rotate(2deg)' }}>
              <div className="w-full h-full bg-gradient-to-br from-piko-purple via-piko-purple to-piko-plum rounded-[28px] flex flex-col overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/20 to-transparent"></div>

                <div className="pt-6 pb-3 px-5 relative z-10">
                  <div className="flex justify-between items-center text-white text-xs mb-8">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-3 border border-white rounded-sm"></div>
                      <div className="w-4 h-3 border border-white rounded-sm"></div>
                    </div>
                  </div>

                  <p className="text-white/70 text-xs mb-2">Total Balance</p>
                  <h2 className="text-white text-4xl font-bold mb-8">$12,450.00</h2>
                </div>

                <div className="flex-1 bg-white rounded-t-[28px] p-5 relative">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-piko-soft-grey rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-piko-teal/20 flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full bg-piko-teal"></div>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-piko-black">Received</p>
                          <p className="text-[10px] text-piko-medium-grey">From John Doe</p>
                        </div>
                      </div>
                      <p className="text-sm font-bold text-piko-teal">+$500</p>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-piko-soft-grey rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-piko-purple/20 flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full bg-piko-purple"></div>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-piko-black">Sent</p>
                          <p className="text-[10px] text-piko-medium-grey">To Sarah Smith</p>
                        </div>
                      </div>
                      <p className="text-sm font-bold text-piko-medium-grey">-$150</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-56 h-8 bg-gradient-to-r from-transparent via-piko-purple/20 to-transparent blur-xl rounded-full"></div>
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
