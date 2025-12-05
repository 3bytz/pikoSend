import React from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { UserPlus, CheckCircle, Zap } from 'lucide-react';

interface Step {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Create Your Account',
    description: 'Sign up in minutes with just your email. No complicated paperwork or long waiting times.',
  },
  {
    number: '02',
    icon: CheckCircle,
    title: 'Verify Your Identity',
    description: 'Quick and secure verification process. Upload your ID and get approved within 24 hours.',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Start Sending Money',
    description: 'Add funds and start sending money globally. Enjoy instant transfers and competitive rates.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <Section background="white" id='how'>
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-h2 font-poppins font-bold text-piko-black mb-4">
            Get Started in 3 Easy Steps
          </h2>
          <p className="text-piko-medium-grey text-lg max-w-2xl mx-auto">
            Join thousands of users who trust PikoSend for their global payment needs. Setting up takes just minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-piko-purple via-piko-violet to-piko-purple opacity-20"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative inline-block mb-6">
                  <div
                    className="absolute -inset-4 rounded-full blur-xl opacity-20"
                    style={{ backgroundColor: index % 2 === 0 ? '#582C8D' : '#8B5CF6' }}
                  ></div>

                  <div
                    className="relative flex items-center justify-center w-20 h-20 rounded-full mx-auto"
                    style={{ backgroundColor: `${index % 2 === 0 ? '#582C8D' : '#8B5CF6'}20` }}
                  >
                    <Icon
                      className="w-10 h-10"
                      style={{ color: index % 2 === 0 ? '#582C8D' : '#8B5CF6' }}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div
                    className="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm"
                    style={{ backgroundColor: index % 2 === 0 ? '#582C8D' : '#8B5CF6' }}
                  >
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-poppins font-bold text-piko-black mb-3">
                  {step.title}
                </h3>

                <p className="text-piko-medium-grey leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          {/* <button className="px-8 py-4 bg-piko-purple text-white rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:translate-y-[-6px] hover:scale-105">
            Create Your Free Account
          </button> */}
          <p className="text-sm text-piko-light-grey mt-4">
            No credit card required. Get started in minutes.
          </p>
        </div>
      </Container>
    </Section>
  );
};
