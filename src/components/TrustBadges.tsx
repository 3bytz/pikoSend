import React from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { Shield, Lock, CheckCircle, Award } from 'lucide-react';

const trustFeatures = [
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: '256-bit SSL encryption protects all your transactions',
    imageUrl: '/bankSec.avif',
  },
  {
    icon: Lock,
    title: 'Regulatory Compliance',
    description: 'Licensed and regulated in multiple jurisdictions',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: CheckCircle,
    title: 'PCI-DSS Certified',
    description: 'Meeting the highest security standards',
    imageUrl: '/pci-dss.jpg',
  },
  {
    icon: Award,
    title: 'Insured Deposits',
    description: 'Your funds are protected up to $250,000',
    imageUrl: '/insuredDeposit.webp',
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
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-piko-black mb-4">
            Your Security is Our Priority
          </h2>
          <p className="text-piko-medium-grey text-base md:text-lg max-w-2xl mx-auto">
            We use industry-leading security measures to keep your money and data safe at all times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl md:rounded-2xl p-5 md:p-6 border border-piko-soft-grey hover:shadow-xl transition-all duration-300 animate-fade-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
            
                <div className="relative h-32 md:h-40 rounded-lg md:rounded-xl overflow-hidden mb-4">
                  <img
                    src={feature.imageUrl}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
                  
                
                  <div className="absolute bottom-4 right-4 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-piko-purple" strokeWidth={1.5} />
                  </div>
                </div>
                
               
                <h3 className="font-poppins font-semibold text-piko-black text-base md:text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-piko-medium-grey text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-piko-purple/5 via-piko-soft-grey to-piko-purple/5 rounded-xl md:rounded-2xl p-6 md:p-8">
          <p className="text-center text-piko-medium-grey font-medium mb-6 md:mb-8">
            Certified and Compliant
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg md:rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-br from-piko-purple/10 to-piko-violet/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-piko-purple" />
                </div>
                <p className="font-poppins font-semibold text-xs md:text-sm text-piko-black mb-1 text-center">
                  {cert.name}
                </p>
                <p className="text-xs text-piko-medium-grey text-center">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};