import React from 'react';
import { Navbar, Footer, Newsletter, SEO, ProductsHero, AppStoreBadges } from '../components';
import { ProductCard } from '../components/ProductCard';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Zap, Globe, CreditCard, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const products = [
  {
    icon: Zap,
    title: 'Instant Transfers',
    description: 'Send money to anyone, anywhere in Africa within seconds. No delays, no hassle.',
    features: ['Real-time processing', 'Multi-currency support', 'Low transaction fees', 'Instant notifications'],
    gradient: 'from-piko-purple to-piko-violet',
    image: '/mockups/instant-send.png',
  },
  {
    icon: Globe,
    title: 'Global Accounts',
    description: 'Open virtual accounts in multiple currencies. Receive payments from anywhere in the world.',
    features: ['Multiple currencies', 'Virtual account numbers', 'Global reach', 'Competitive rates'],
    gradient: 'from-piko-violet to-piko-purple',
    image: '/mockups/financeDashbaord.png',
  },
  {
    icon: CreditCard,
    title: 'Virtual Cards',
    description: 'Create unlimited virtual cards for secure online shopping. Control your spending with ease.',
    features: ['Instant card creation', 'Freeze/unfreeze cards', 'Spending limits', 'Transaction alerts'],
    gradient: 'from-piko-purple to-piko-violet',
    image: '/mockups/wallets.png',
  },
  {
    icon: Smartphone,
    title: 'Mobile Wallet',
    description: 'Your complete financial hub in your pocket. Track, manage, and grow your money effortlessly.',
    features: ['Easy top-ups', 'Bill payments', 'Transaction history', 'Budget tracking'],
    gradient: 'from-piko-violet to-piko-purple',
    image: '/mockups/9_transaction_history_1.jpg',
  },
];

export const Products: React.FC = () => {
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 });

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Products - PikoSend | Instant Transfers, Virtual Cards & More"
        description="Explore PikoSend's suite of financial products: instant transfers, global accounts, virtual cards, and mobile wallet. Everything you need to manage money."
        keywords="instant transfers, virtual cards, global accounts, mobile wallet, digital payments, online banking"
      />
      <Navbar />
      <ProductsHero />

      <Section background="white" className="py-20">
        <Container>
          <div className="space-y-32">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                icon={product.icon}
                title={product.title}
                description={product.description}
                features={product.features}
                gradient={product.gradient}
                image={product.image}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section background="soft-grey" className="py-20">
        <Container>
          <div ref={ctaAnimation.ref} className={`text-center max-w-3xl mx-auto ${ctaAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-piko-black mb-6">
              Ready to Transform Your Financial Life?
            </h2>
            <p className="text-lg text-piko-medium-grey mb-8">
              Join thousands of users who trust PikoSend for their daily transactions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-piko-purple to-piko-violet text-white rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Open Account Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-piko-black border-2 border-piko-purple rounded-full font-semibold transition-all duration-300 hover:bg-piko-purple hover:text-white"
              >
                Learn More
              </Link>
            </div>
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-piko-medium-grey mb-4">Download the app and get started</p>
              <div className="flex justify-center">
                <AppStoreBadges variant="light" size="md" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Newsletter />
      <Footer />
    </div>
  );
};
