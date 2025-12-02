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
  return (
    <Section background="soft-grey">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-piko-lilac bg-opacity-20 border-2 border-piko-lilac border-opacity-30">
                    <Icon className="w-8 h-8 text-piko-purple" strokeWidth={1.5} />
                  </div>
                </div>
                <h4 className="font-poppins text-h4 text-piko-black mb-3">{feature.title}</h4>
                <p className="text-piko-medium-grey text-body leading-relaxed">
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
