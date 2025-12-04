import React from 'react';
import { Section } from './Section';
import { Container } from './Container';

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
  const duplicatedLogos = [...pressLogos, ...pressLogos];

  return (
    <Section background="white" className="py-16 md:py-20 overflow-hidden">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-poppins font-bold text-piko-black mb-4">
            Trusted by Industry Leaders
          </h3>
          <p className="text-piko-medium-grey text-lg max-w-2xl mx-auto">
            Recognized and featured by top financial institutions and leading media outlets worldwide
          </p>
        </div>

    
        <div className="relative flex justify-center items-center mb-12 md:mb-16 flex-col">
        
          <div className="mb-8 md:mb-12">
            <div className="marquee-container overflow-hidden">
              <div className="marquee-track flex animate-marquee">
                {duplicatedLogos.map((logo, index) => (
                  <div
                    key={`top-${index}`}
                    className="flex-shrink-0 mx-4 md:mx-8"
                  >
                    <div className="relative group">
                     
                      <div className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center bg-white rounded-xl shadow-sm border border-piko-soft-grey p-4 transition-all duration-300 group-hover:shadow-lg group-hover:border-piko-teal/20 group-hover:scale-105">
                        <img
                          src={logo.logo}
                          alt={logo.name}
                          className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                      
                      {/* Tooltip on hover */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <div className="bg-piko-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          {logo.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Marquee - Left to Right */}
          <div>
            <div className="marquee-container overflow-hidden">
              <div className="marquee-track flex animate-marquee-reverse gap-4">
                {duplicatedLogos.reverse().map((logo, index) => (
                  <div
                    key={`bottom-${index}`}
                    className="flex-shrink-0 mx-4 md:mx-8"
                  >
                    <div className="relative group">
                      <div className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center bg-white rounded-xl shadow-sm border border-piko-soft-grey p-4 transition-all duration-300 group-hover:shadow-lg group-hover:border-piko-green/20 group-hover:scale-105">
                        
             
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
                        <div className="bg-piko-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          {logo.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>

        {/* Static Logos Section (for mobile/fallback) */}
       <div className="mt-16 md:hidden">
  <div className="grid grid-cols-2 gap-4">
    {pressLogos.map((logo, index) => (
      <div
        key={index}
        className="bg-white rounded-xl border border-piko-soft-grey p-4 flex items-center justify-center h-20"
      >
        <img
          src={logo.logo}
          alt={logo.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    ))}
  </div>
</div>


        {/* Stats Section */}
        <div className="mt-20 pt-8 border-t border-piko-soft-grey">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-piko-purple mb-2">50+</div>
              <p className="text-piko-medium-grey text-sm">Partners Worldwide</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-piko-teal mb-2">100+</div>
              <p className="text-piko-medium-grey text-sm">Media Features</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-piko-green mb-2">24/7</div>
              <p className="text-piko-medium-grey text-sm">Support Available</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-piko-lilac mb-2">99.9%</div>
              <p className="text-piko-medium-grey text-sm">Uptime Reliability</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-piko-medium-grey mb-6">
            Want to partner with us or feature PikoSend?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-piko-teal to-piko-green text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
              Become a Partner
            </button>
            {/* <button className="px-6 py-3 bg-white text-piko-black border border-piko-soft-grey rounded-full font-medium transition-all duration-300 hover:bg-piko-soft-grey hover:border-piko-teal/20">
              Media Inquiry
            </button> */}
          </div>
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