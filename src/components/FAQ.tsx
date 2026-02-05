import React, { useEffect, useState } from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { Plus, Minus, HelpCircle, MessageCircle, Mail, Shield, ChevronLeft, ChevronRight, QrCode, Send, Wallet, Download, Headphones, User, Wifi, Zap } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

interface FAQItem {
  question: string;
  answer: string;
  icon?: React.ElementType;
  category?: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Why are PikoSend’s transaction fees so low?',
    answer: 'PikoSend is built to be an affordable payment solution. Our technology is optimised to reduce operational costs, and we pass those savings directly to our users. We believe digital payments should help you keep more of your money not take it away.',
    icon: MessageCircle,
    category: 'Transfers'
  },
  {
    question: 'Are there any hidden charges?',
    answer: 'No. PikoSend uses clear and transparent pricing. You always see the cost before completing a transaction, so there are no surprises.',
    icon: HelpCircle,
    category: 'Pricing'
  },
  {
    question: 'Is my money and data safe on PikoSend?',
    answer: 'Yes. All transactions and user data are protected with end-to-end encryption and secured by your personal PIN known only by you. Your information is private and cannot be accessed without your permission.',
    icon: Shield,
    category: 'Security'
  },
  {
    question: 'What happens if my phone is lost or stolen?',
    answer: 'Your account remains secure. The app automatically locks when inactive, and access requires your PIN. Without your PIN, no one can access your funds or transaction history.',
    icon: Shield,
    category: 'Security'
  },
  {
    question: 'How fast are transactions on PikoSend?',
    answer: 'Most transactions are completed in under 30 seconds. The app is designed to be quick and simple, even for first-time users or bulk payments.',
    icon: Zap,
    category: 'Transfers'
  },
  {
    question: 'Does PikoSend use a lot of internet data?',
    answer: 'No. PikoSend is optimised to use very little data, even for frequent users. This helps you save on data costs while transacting daily.',
    icon: Wifi,
    category: 'App Features'
  },
  {
    question: 'Can I send money to people who are not on PikoSend?',
    answer: 'Yes. You can send money to users in other networks or directly to supported bank accounts. The recipient does not need to have the PikoSend app.',
    icon: Send,
    category: 'Transfers'
  },
  {
    question: 'How does the multi-wallet feature help me?',
    answer: 'Multi-wallets allow you to separate your money by purpose such as spending, savings, rent, school fees, or business income. This helps you stay organised and in control of your finances.',
    icon: Wallet,
    category: 'App Features'
  },
  {
    question: 'How do QR code payments work?',
    answer: 'Simply scan a QR code, confirm the amount, and complete the payment. It’s fast, secure, and removes the need to carry cash or wait in line.',
    icon: QrCode,
    category: 'Payments'
  },
  {
    question: 'What is a Human ATM?',
    answer: 'A Human ATM is a trusted local merchant who helps users deposit or withdraw cash from their PikoSend wallet. This service is coming soon and will launch after regulatory approvals are complete.',
    icon: User,
    category: 'Services'
  },
  {
    question: 'What if I need help or support?',
    answer: 'Our customer support team is easy to reach. You can contact us via WhatsApp, SMS, phone call, email, or social media anytime of the day.',
    icon: Headphones,
    category: 'Support'
  },
  {
    question: 'How do I get started with PikoSend?',
    answer: 'Download the app, sign up in minutes, and start sending, paying, and managing your money right away.',
    icon: Download,
    category: 'Getting Started'
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

    const getSlidesPerView = () => {
  if (window.innerWidth < 640) return 1;      
  if (window.innerWidth < 1024) return 2;    
  return 3;                                   
};
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

 const nextSlide = () => {
  setCurrentSlide((prev) =>
    prev + 1 < Math.ceil(faqs.length / slidesPerView) ? prev + 1 : prev
  );
};

 const prevSlide = () => {
  setCurrentSlide((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
};


  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true
  });
useEffect(() => {
  const handleResize = () => {
    setSlidesPerView(getSlidesPerView());
    setCurrentSlide(0); 
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
  return (
    <Section 
      background="lilac" 
      id='faq'
      className="relative overflow-hidden py-6"
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
        <div className="text-center mb-6 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6">
            <HelpCircle className="w-4 h-4" />
            Need Help?
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-white mb-4">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Have questions? We've got answers. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentSlide === 0 
                ? 'bg-white/10 text-white/30 cursor-not-allowed' 
                : 'bg-white/20 text-white hover:bg-white/30 hover:scale-105'
            }`}
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex items-center gap-2">
            {Array.from({ length: Math.ceil(faqs.length / slidesPerView) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx * slidesPerView)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide >= idx * slidesPerView && currentSlide < (idx + 1) * slidesPerView
                    ? 'bg-white w-8'
                    : 'bg-white/30'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide >= faqs.length - slidesPerView}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentSlide >= faqs.length - slidesPerView
                ? 'bg-white/10 text-white/30 cursor-not-allowed' 
                : 'bg-white/20 text-white hover:bg-white/30 hover:scale-105'
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>

     
        <div className="relative" {...swipeHandlers}>
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(faqs.length / slidesPerView) }).map((_, slideIndex) => (
                <div 
                  key={slideIndex} 
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 px-4"
                >
                  {faqs.slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView).map((faq, index) => {
                    const actualIndex = slideIndex * slidesPerView + index;
                    const isOpen = openIndex === actualIndex;
                    const Icon = faq.icon || HelpCircle;
                    
                    return (
                      <div
                        key={actualIndex}
                        className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden animate-fade-up border border-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-xl min-h-[200px] flex flex-col"
                        style={{ animationDelay: `${actualIndex * 0.05}s` }}
                      >
                        <button
                          onClick={() => toggleFAQ(actualIndex)}
                          className="w-full flex flex-col items-start justify-between p-5 md:p-6 text-left hover:bg-white/5 transition-all duration-300 group flex-1"
                        >
                          <div className="flex items-start gap-4 md:gap-6 w-full">
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
                          
                          <div className="w-full mt-4 flex items-center justify-between">
                            <span className="text-white/60 text-xs">
                              Click to {isOpen ? 'close' : 'expand'}
                            </span>
                            <div
                              className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                                isOpen 
                                  ? 'bg-white text-piko-purple shadow-lg scale-110' 
                                  : 'bg-white/20 text-white group-hover:bg-white/30'
                              }`}
                            >
                              {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                            </div>
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-5 md:px-6 pb-5 md:pb-6 animate-fade-up">
                            <div className="border-t border-white/30 pt-4">
                              <p className="text-white/90 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                              
                              {actualIndex === 0 && (
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
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:block text-center mt-12 md:mt-16">
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
            
          </div>
        </div>
      </Container>

      <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-piko-purple/20 rounded-full blur-3xl opacity-40"></div>
    </Section>
  );
};