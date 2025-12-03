import React from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { Target, Users, Heart, TrendingUp } from 'lucide-react';

export const Mission: React.FC = () => {
  return (
    <Section background="white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-piko-purple/10 rounded-full mb-6">
            <p className="text-piko-purple font-medium text-sm">Our Mission</p>
          </div>

          <h2 className="text-3xl md:text-h2 font-poppins font-bold text-piko-black mb-6">
            Empowering Africa Through Financial Inclusion
          </h2>

          <p className="text-xl text-piko-medium-grey leading-relaxed mb-12">
            Empower the underserved and create gender equality through financial inclusion by making Africa a cashless society.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="p-6 bg-piko-soft-grey rounded-2xl hover:shadow-lg transition-all animate-fade-up">
              <div className="w-12 h-12 bg-piko-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-piko-teal" />
              </div>
              <h4 className="font-poppins font-semibold text-piko-black mb-2">Our Vision</h4>
              <p className="text-sm text-piko-medium-grey">
                A cashless Africa where everyone has access to financial services
              </p>
            </div>

            <div className="p-6 bg-piko-soft-grey rounded-2xl hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-piko-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-piko-green" />
              </div>
              <h4 className="font-poppins font-semibold text-piko-black mb-2">Inclusion</h4>
              <p className="text-sm text-piko-medium-grey">
                Bringing banking services to the underserved communities
              </p>
            </div>

            <div className="p-6 bg-piko-soft-grey rounded-2xl hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-piko-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-piko-purple" />
              </div>
              <h4 className="font-poppins font-semibold text-piko-black mb-2">Equality</h4>
              <p className="text-sm text-piko-medium-grey">
                Creating gender equality through accessible financial tools
              </p>
            </div>

            <div className="p-6 bg-piko-soft-grey rounded-2xl hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 bg-piko-lilac/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-piko-lilac" />
              </div>
              <h4 className="font-poppins font-semibold text-piko-black mb-2">Growth</h4>
              <p className="text-sm text-piko-medium-grey">
                Empowering personal and business growth across Africa
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
