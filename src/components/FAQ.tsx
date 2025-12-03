import React, { useState } from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How long does it take to send money internationally?',
    answer: 'Most international transfers are completed within minutes. However, depending on the destination country and payment method, it can take up to 24 hours.',
  },
  {
    question: 'What fees does PikoSend charge?',
    answer: 'We believe in transparent pricing. Our fees vary depending on the destination and payment method, but we always show you the exact cost upfront. No hidden charges, ever.',
  },
  {
    question: 'Is my money safe with PikoSend?',
    answer: 'Absolutely. We use bank-level encryption and security measures. Your funds are protected by our financial partners and regulated by authorities in multiple jurisdictions.',
  },
  {
    question: 'Which countries can I send money to?',
    answer: 'PikoSend supports transfers to over 150 countries worldwide. You can send money to bank accounts, mobile wallets, or other PikoSend users in most major countries.',
  },
  {
    question: 'Do I need to verify my identity?',
    answer: 'Yes, for security and regulatory compliance, we require identity verification. The process is quick and can be completed in minutes by uploading a valid ID document.',
  },
  {
    question: 'Can I use PikoSend for business payments?',
    answer: 'Yes! We offer dedicated business accounts with features like team management, API integration, bulk payments, and detailed reporting tools perfect for businesses of all sizes.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section background="soft-grey">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-h2 font-poppins font-bold text-piko-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-piko-medium-grey text-lg max-w-2xl mx-auto">
            Have questions? We've got answers. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-piko-soft-grey transition-colors"
                >
                  <span className="font-poppins font-semibold text-piko-black pr-8">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isOpen ? 'bg-piko-purple text-white' : 'bg-piko-soft-grey text-piko-purple'
                    }`}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 animate-fade-up">
                    <p className="text-piko-medium-grey leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-piko-medium-grey mb-4">Still have questions?</p>
          <button className="px-6 py-3 text-piko-purple font-medium hover:text-piko-plum transition-colors">
            Contact Support →
          </button>
        </div>
      </Container>
    </Section>
  );
};
