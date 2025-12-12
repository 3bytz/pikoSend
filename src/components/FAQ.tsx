import React, { useState } from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { Plus, Minus, HelpCircle, MessageCircle, Mail, Shield } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  icon?: React.ElementType;
  category?: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How long does it take to send money internationally?',
    answer: 'Most international transfers are completed within minutes. However, depending on the destination country and payment method, it can take up to 24 hours.',
    icon: MessageCircle,
    category: 'Transfers'
  },
  {
    question: 'What fees does PikoSend charge?',
    answer: 'We believe in transparent pricing. Our fees vary depending on the destination and payment method, but we always show you the exact cost upfront. No hidden charges, ever.',
    icon: HelpCircle,
    category: 'Pricing'
  },
  {
    question: 'Is my money safe with PikoSend?',
    answer: 'Absolutely. We use bank-level encryption and security measures. Your funds are protected by our financial partners and regulated by authorities in multiple jurisdictions.',
    icon: Shield,
    category: 'Security'
  },
  {
    question: 'Which countries can I send money to?',
    answer: 'PikoSend supports transfers to over 150 countries worldwide. You can send money to bank accounts, mobile wallets, or other PikoSend users in most major countries.',
    icon: MessageCircle,
    category: 'Coverage'
  },
  {
    question: 'Do I need to verify my identity?',
    answer: 'Yes, for security and regulatory compliance, we require identity verification. The process is quick and can be completed in minutes by uploading a valid ID document.',
    icon: Shield,
    category: 'Verification'
  },
  {
    question: 'Can I use PikoSend for business payments?',
    answer: 'Yes! We offer dedicated business accounts with features like team management, API integration, bulk payments, and detailed reporting tools perfect for businesses of all sizes.',
    icon: HelpCircle,
    category: 'Business'
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section 
      background="lilac" 
      id='faq'
      className="relative overflow-hidden"
    >
     
      <div className="absolute inset-0 z-0">
        <img
          src="/OfficeMockup.png"
          alt="Background - African professionals using technology"
          className="w-full h-full object-cover"
        />
      
        <div className="absolute inset-0 bg-gradient-to-br from-piko-purple/90 via-piko-violet/85 to-piko-lilac/90"></div>
        
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6">
            <HelpCircle className="w-4 h-4" />
            Need Help?
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Have questions? We've got answers. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const Icon = faq.icon || HelpCircle;
            
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden animate-fade-up border border-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 md:gap-6 flex-1">
                    <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? 'bg-white text-piko-purple scale-110' 
                        : 'bg-white/20 text-white group-hover:bg-white/30'
                    }`}>
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    
                    <div className="flex-1 text-left">
                      {faq.category && (
                        <span className="inline-block px-2.5 py-1 bg-white/10 text-white/80 text-xs font-medium rounded-full mb-2">
                          {faq.category}
                        </span>
                      )}
                      <h3 className="font-poppins font-semibold text-white text-base md:text-lg pr-4">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  
                  <div
                    className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? 'bg-white text-piko-purple shadow-lg scale-110' 
                        : 'bg-white/20 text-white group-hover:bg-white/30'
                    }`}
                  >
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 animate-fade-up">
                    <div className="pl-14 md:pl-20 border-l-2 border-white/30 ml-4">
                      <p className="text-white/90 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                      
                      {index === 0 && (
                        <div className="mt-4 flex items-center gap-2 text-white/70 text-sm">
                          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                          Real-time tracking available for all transfers
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 md:gap-6 p-6 md:p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="flex-1">
              <h4 className="font-poppins font-bold text-white text-xl md:text-2xl mb-2">
                Still have questions?
              </h4>
              <p className="text-white/80 text-sm md:text-base mb-4 md:mb-0">
                Our support team is available 24/7 to help you
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 bg-white text-piko-purple rounded-full font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Live Chat
              </button>
              <button className="px-6 py-3 bg-piko-purple text-white rounded-full font-medium hover:bg-piko-violet transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                Email Support
              </button>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-white/70 text-xs md:text-sm">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{"< 1min"}</div>
              <div className="text-white/70 text-xs md:text-sm">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-white/70 text-xs md:text-sm">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-white/70 text-xs md:text-sm">Languages</div>
            </div>
          </div>
        </div>
      </Container>

  
      <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-piko-purple/20 rounded-full blur-3xl opacity-40"></div>
    </Section>
  );
};