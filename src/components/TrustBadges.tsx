import React from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { Shield, Lock, CheckCircle, Award } from 'lucide-react';

const trustFeatures = [
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: '256-bit SSL encryption protects all your transactions',
  },
  {
    icon: Lock,
    title: 'Regulatory Compliance',
    description: 'Licensed and regulated in multiple jurisdictions',
  },
  {
    icon: CheckCircle,
    title: 'PCI-DSS Certified',
    description: 'Meeting the highest security standards',
  },
  {
    icon: Award,
    title: 'Insured Deposits',
    description: 'Your funds are protected up to $250,000',
  },
];

const certifications = [
  { name: 'PCI DSS Compliant', description: 'Level 1' },
  { name: 'ISO 27001', description: 'Certified' },
  { name: 'SOC 2 Type II', description: 'Verified' },
  { name: 'GDPR', description: 'Compliant' },
];

export const TrustBadges: React.FC = () => {
  return (
    <Section background="white" className="border-y border-piko-soft-grey">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-h2 font-poppins font-bold text-piko-black mb-4">
            Your Security is Our Priority
          </h2>
          <p className="text-piko-medium-grey text-lg max-w-2xl mx-auto">
            We use industry-leading security measures to keep your money and data safe at all times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-piko-soft-grey hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                    <Icon className="w-8 h-8 text-piko-purple" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-poppins font-semibold text-piko-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-piko-medium-grey leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-piko-purple/5 via-piko-soft-grey to-piko-purple/5 rounded-2xl p-8">
          <p className="text-center text-piko-medium-grey font-medium mb-6">
            Certified and Compliant
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-piko-purple/10 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-piko-purple" />
                </div>
                <p className="font-poppins font-semibold text-sm text-piko-black mb-1">
                  {cert.name}
                </p>
                <p className="text-xs text-piko-medium-grey">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
