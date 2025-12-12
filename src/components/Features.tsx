import React from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { Zap, Shield, Smile, Headphones } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Transactions',
    description: 'Transfer funds within seconds, no matter where you are in Africa.',
    imageUrl: '/fastTranst.png',
  },
  {
    icon: Shield,
    title: 'Trusted Security',
    description: 'Advanced encryption technology protects your transactions and data.',
    imageUrl: '/security.jpg',
  },
  {
    icon: Smile,
    title: 'User-Friendly',
    description: 'Intuitive design makes sending and receiving money simple for everyone.',
    imageUrl: '/userFriendly.jpg',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our dedicated team is available anytime you need assistance.',
    imageUrl: '/support.webp',
  },
];

export const Features: React.FC = () => {
  const iconColors = [
    { bg: 'bg-piko-purple', border: 'border-piko-purple', text: 'text-piko-purple' },
    { bg: 'bg-piko-violet', border: 'border-piko-violet', text: 'text-piko-violet' },
    { bg: 'bg-piko-purple', border: 'border-piko-purple', text: 'text-piko-purple' },
    { bg: 'bg-piko-violet', border: 'border-piko-violet', text: 'text-piko-violet' },
  ];

  return (
    <Section background="soft-grey" id="features">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = iconColors[index];
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={feature.imageUrl}
                    alt={feature.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20"></div>
                </div>
                
            
                <div className="p-6">
                  <div className="flex justify-center -mt-12 mb-4">
                    <div className={`relative flex items-center justify-center w-20 h-20 rounded-full ${colors.bg} bg-opacity-10 border-4 ${colors.border} border-opacity-30 hover:animate-icon-bounce transition-all duration-300 group-hover:scale-110`}>
                      <Icon className={`w-10 h-10 ${colors.text}`} strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <h4 className="font-poppins text-xl text-center text-piko-black mb-3">{feature.title}</h4>
                  <p className="text-piko-medium-grey text-sm md:text-base leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};