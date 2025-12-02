import React from 'react';
import { Section } from './Section';
import { Container } from './Container';

const pressLogos = [
  { name: 'TechCrunch', width: '140px' },
  { name: 'Forbes', width: '100px' },
  { name: 'Bloomberg', width: '130px' },
  { name: 'The Wall Street Journal', width: '160px' },
  { name: 'Financial Times', width: '120px' },
  { name: 'Reuters', width: '110px' },
];

export const Press: React.FC = () => {
  return (
    <Section background="white" className="py-12">
      <Container>
        <div className="text-center mb-12">
          <p className="text-piko-medium-grey font-medium mb-8">As Featured In</p>
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
                <div className="w-full h-full bg-piko-medium-grey rounded flex items-center justify-center text-xs text-white font-medium px-4">
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
