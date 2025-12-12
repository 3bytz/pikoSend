import React from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { UserPlus, CheckCircle, Zap } from 'lucide-react';

interface Step {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
  imageUrl: string;
}

const steps: Step[] = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Create Your Account',
    description: 'Sign up in minutes with just your email. No complicated paperwork or long waiting times.',
    imageUrl: '/createAccount.png',
  },
  {
    number: '02',
    icon: CheckCircle,
    title: 'Verify Your Identity',
    description: 'Quick and secure verification process. Upload your ID and get approved within 24 hours.',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Start Sending Money',
    description: 'Add funds and start sending money. Enjoy instant transfers and competitive rates.',
    imageUrl: '/fastTranst.png',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <Section background="white" id='how'>
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-piko-black mb-4">
            Get Started in 3 Easy Steps
          </h2>
          <p className="text-piko-medium-grey text-base md:text-lg max-w-2xl mx-auto">
            Join our network of users who trust PikoSend for their payment needs. Setting up takes just minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-piko-purple via-piko-violet to-piko-purple opacity-20 -translate-y-1/2"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <div
                key={index}
                className="relative bg-white rounded-xl md:rounded-2xl p-6 md:p-8 text-center border border-piko-soft-grey hover:shadow-xl transition-all duration-300 animate-fade-up group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
           
                <div className="relative h-40 md:h-48 rounded-lg md:rounded-xl overflow-hidden mb-6">
                  <img
                    src={step.imageUrl}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                  
                
                  <div
                    className="absolute top-3 md:top-4 right-3 md:right-4 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-white text-xs md:text-sm shadow-lg"
                    style={{ backgroundColor: index % 2 === 0 ? '#582C8D' : '#8B5CF6' }}
                  >
                    {step.number}
                  </div>
                </div>

                <div className="relative -mt-10 md:-mt-12 mb-4 flex justify-center">
                  <div
                    className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto shadow-lg border-4 border-white"
                    style={{ backgroundColor: `${index % 2 === 0 ? '#582C8D' : '#8B5CF6'}20` }}
                  >
                    <Icon
                      className="w-8 h-8 md:w-10 md:h-10"
                      style={{ color: index % 2 === 0 ? '#582C8D' : '#8B5CF6' }}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-poppins font-bold text-piko-black mb-3">
                  {step.title}
                </h3>

                <p className="text-piko-medium-grey text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>

             
                {!isLast && (
                  <div className="md:hidden flex justify-center mt-6">
                    <div className="w-16 h-px bg-gradient-to-r from-piko-purple/30 to-piko-violet/30 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-r-2 border-b-2 border-piko-purple/50 transform rotate-45"></div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <p className="text-sm md:text-base text-piko-light-grey">
            No credit card required. Get started in minutes.
          </p>
        </div>
      </Container>
    </Section>
  );
};