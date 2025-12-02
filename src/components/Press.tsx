import React from 'react';
import { Section } from './Section';
import { Container } from './Container';

const pressLogos = [
  { name: 'Diamond Trust Bank', width: '160px', type: 'partner' },
  { name: 'Futuriza', width: '120px', type: 'partner' },
  { name: 'Business Daily Africa', width: '150px', type: 'media' },
  { name: 'The Standard', width: '130px', type: 'media' },
  { name: 'Capital FM', width: '110px', type: 'media' },
  { name: 'Nation Media', width: '120px', type: 'media' },
];

export const Press: React.FC = () => {
  return (
    <Section background="white" className="py-12">
      <Container>
        <div className="text-center mb-12">
          <p className="text-piko-medium-grey font-medium mb-8">Partners & Media Coverage</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {pressLogos.map((logo, index) => (
              <div
                key={index}
                className="opacity-40 hover:opacity-70 transition-opacity duration-300 animate-fade-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  width: logo.width,
                  height: '40px',
                }}
              >
                <div className={`w-full h-full rounded flex items-center justify-center text-xs font-medium px-4 ${
                  logo.type === 'partner'
                    ? 'bg-piko-purple text-white'
                    : 'bg-piko-medium-grey text-white'
                }`}>
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
