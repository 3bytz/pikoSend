import React from 'react';
import { Navbar, Footer, Newsletter } from '../components';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Zap, Globe, CreditCard, Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Section background="white" className="pt-32 pb-20">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 text-piko-purple text-sm font-semibold rounded-full mb-6">
              <Zap className="w-4 h-4" />
              Our Products
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-piko-black mb-6">
              Everything You Need to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-piko-purple to-piko-violet mt-2">
                Manage Your Money
              </span>
            </h1>
            <p className="text-xl text-piko-medium-grey leading-relaxed">
              Powerful financial tools designed for modern Africa. Send, receive, and manage money with unmatched speed and security.
            </p>
          </div>

          <div className="space-y-32">
            {products.map((product, index) => {
              const Icon = product.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  <div className={`${isEven ? '' : 'lg:order-2'}`}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-piko-black mb-4">
                      {product.title}
                    </h2>

                    <p className="text-lg text-piko-medium-grey mb-8 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-piko-purple flex-shrink-0" />
                          <span className="text-piko-black">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${product.gradient} text-white rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95`}
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative group">
                      <div className={`absolute -inset-4 bg-gradient-to-r ${product.gradient} rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section background="soft-grey" className="py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-piko-black mb-6">
              Ready to Transform Your Financial Life?
            </h2>
            <p className="text-lg text-piko-medium-grey mb-8">
              Join thousands of users who trust PikoSend for their daily transactions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </Container>
      </Section>

      <Newsletter />
      <Footer />
    </div>
  );
};
