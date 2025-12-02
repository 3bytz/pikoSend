import React from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { Zap, Shield, Smile, Headphones } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Transactions',
    description: 'Transfer funds within seconds, no matter where you are in Africa.',
  },
  {
    icon: Shield,
    title: 'Trusted Security',
    description: 'Advanced encryption technology protects your transactions and data.',
  },
  {
    icon: Smile,
    title: 'User-Friendly',
    description: 'Intuitive design makes sending and receiving money simple for everyone.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our dedicated team is available anytime you need assistance.',
  },
];

export const Features: React.FC = () => {
  const iconColors = [
    { bg: 'bg-piko-teal', border: 'border-piko-teal', text: 'text-piko-teal' },
    { bg: 'bg-piko-green', border: 'border-piko-green', text: 'text-piko-green' },
    { bg: 'bg-piko-teal', border: 'border-piko-teal', text: 'text-piko-teal' },
    { bg: 'bg-piko-green', border: 'border-piko-green', text: 'text-piko-green' },
  ];

  return (
    <Section background="soft-grey" id="features">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = iconColors[index];
            return (
              <div
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex justify-center" style={{ marginBottom: '40px' }}>
                  <div className={`flex items-center justify-center w-16 h-16 rounded-full ${colors.bg} bg-opacity-10 border-2 ${colors.border} border-opacity-30 hover:animate-icon-bounce transition-all hover:scale-110`}>
                    <Icon className={`w-8 h-8 ${colors.text}`} strokeWidth={1.5} />
                  </div>
                </div>
                <h4 className="font-poppins text-xl md:text-h4 text-piko-black mb-3">{feature.title}</h4>
                <p className="text-piko-medium-grey text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
