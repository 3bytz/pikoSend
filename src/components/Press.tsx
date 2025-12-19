import React from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const pressLogos = [
  {
    name: 'Diamond Trust Bank',
    type: 'partner',
    logo: '/partners/telecharger.png'
  },
  {
    name: 'Futuriza',
    type: 'partner',
   logo: '/partners/telecharger-1.png'
  },

];

export const Press: React.FC = () => {
  const duplicatedLogos = [...pressLogos, ...pressLogos, ...pressLogos];
  const reversedLogos = [...duplicatedLogos].reverse();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: marqueeRef, isVisible: marqueeVisible } = useScrollAnimation();

  return (
    <Section background="white" className="py-8 md:py-8 overflow-hidden">
      <Container>
        <div
          ref={headerRef}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-xl md:text-2xl font-poppins font-bold text-piko-black mb-4">
            Trusted by Industry Leaders
          </h3>
          <p className="text-piko-medium-grey text-lg max-w-2xl mx-auto">
            Powered by Futuriza.  Partner of Diamond trust bank.
          </p>
        </div>

        <div
          ref={marqueeRef}
          className={`relative flex justify-center items-center mb-6 md:mb-16 flex-col transition-all duration-700 ${
            marqueeVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >


          <div>
            <div className="marquee-container overflow-hidden">
              <div className="marquee-track flex animate-marquee-reverse gap-4">
                {reversedLogos.map((logo, index) => (
                  <div
                    key={`bottom-${index}`}
                    className="flex-shrink-0 mx-4 md:mx-8"
                  >
                    <div className="relative group">
                      <div className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center bg-white rounded-xl shadow-sm border border-piko-soft-grey p-4 transition-all duration-300 group-hover:shadow-lg group-hover:border-piko-violet/20 group-hover:scale-105">


                        <img
                          src={logo.logo}
                          alt={logo.name}
                          className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>

                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <div className=" text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          {logo.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
    
      </Container>

      <style >{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }

        .marquee-track {
          width: fit-content;
        }

        /* Pause animation on hover */
        .marquee-track:hover {
          animation-play-state: paused;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }

          .animate-marquee-reverse {
            animation: marquee-reverse 30s linear infinite;
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .absolute.left-0 {
            background: linear-gradient(to right, #1a1a1a, transparent);
          }
          .absolute.right-0 {
            background: linear-gradient(to left, #1a1a1a, transparent);
          }
        }
      `}</style>
    </Section>
  );
};