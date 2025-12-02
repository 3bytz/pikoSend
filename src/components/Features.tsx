import React from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { Send, Shield, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: Send,
    title: 'Instant Transfers',
    description: 'Send money anywhere in seconds with our lightning-fast payment network.',
  },
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: 'Your money is protected with military-grade encryption and compliance.',
  },
  {
    icon: Zap,
    title: 'Zero Hidden Fees',
    description: 'Transparent pricing with no surprise charges or complex conditions.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Support for 150+ countries with real-time exchange rates.',
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
                  <div className={`flex items-center justify-center w-16 h-16 rounded-full ${colors.bg} bg-opacity-10 border-2 ${colors.border} border-opacity-30`}>
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
