import React, { useEffect, useRef, useState } from 'react';
import { Container } from './Container';
import { CreditCard, Send, Globe, TrendingUp, Wallet } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Product {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  image: string;
  color: string;
}

const products: Product[] = [
  {
    id: 'receive',
    icon: Wallet,
    title: 'Receive Money',
    description: 'Get paid from anywhere in the world. Accept payments in multiple currencies with zero hassle.',
    features: ['Multiple currencies', 'Instant notifications', 'Low fees', 'Secure transfers'],
    image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: '#14B8A6',
  },
  {
    id: 'accounts',
    icon: Globe,
    title: 'Global Accounts',
    description: 'Open local accounts in multiple countries. Get account details instantly and receive money like a local.',
    features: ['US, UK, EU accounts', 'Local details', 'Fast setup', 'No monthly fees'],
    image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: '#10B981',
  },
  {
    id: 'cards',
    icon: CreditCard,
    title: 'Virtual & Physical Cards',
    description: 'Spend your money anywhere with our cards. Get instant virtual cards or order physical cards delivered to you.',
    features: ['Instant virtual cards', 'Physical cards', 'Spending controls', 'Worldwide acceptance'],
    image: 'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: '#14B8A6',
  },
  {
    id: 'send',
    icon: Send,
    title: 'Send Money',
    description: 'Transfer money globally in seconds. Send to bank accounts, mobile wallets, or other PikoSend users.',
    features: ['Fast transfers', 'Competitive rates', 'Track payments', '150+ countries'],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: '#10B981',
  },
  {
    id: 'earn',
    icon: TrendingUp,
    title: 'Earn Rewards',
    description: 'Get rewarded for using PikoSend. Earn points on every transaction and redeem for cashback or perks.',
    features: ['Cashback rewards', 'Referral bonuses', 'Transaction points', 'Exclusive perks'],
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
    color: '#14B8A6',
  },
];

export const ProductShowcase: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !navRef.current || !contentRef.current) return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: contentRef.current,
      pinSpacing: false,
      onUpdate: (self) => {
        const progress = self.progress;
        const index = Math.min(
          Math.floor(progress * products.length),
          products.length - 1
        );
        setActiveProduct(index);
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white">
      <Container className="py-20">
        <h2 className="text-3xl md:text-h2 font-poppins font-bold text-piko-black mb-12 text-center md:text-left">
          Everything you need
        </h2>

        <div className="md:hidden space-y-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg p-6 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: `${product.color}20` }}>
                    <Icon className="w-6 h-6" style={{ color: product.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-poppins text-xl font-semibold text-piko-black">{product.title}</h3>
                </div>
                <p className="text-piko-medium-grey mb-4">{product.description}</p>
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-xl mb-4" />
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-piko-medium-grey">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: product.color }}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="hidden md:flex gap-12" style={{ minHeight: `${products.length * 100}vh` }}>
          <div ref={navRef} className="w-1/3 pt-12 pb-20">
            <nav className="space-y-6">
            {products.map((product, index) => {
              const Icon = product.icon;
              const isActive = activeProduct === index;
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(index)}
                  className={`flex items-start gap-4 text-left w-full p-4 rounded-xl transition-all duration-300 ${
                    isActive ? 'bg-piko-soft-grey' : 'hover:bg-piko-soft-grey hover:bg-opacity-50'
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0 transition-all duration-300 ${
                      isActive ? 'bg-opacity-20' : 'bg-opacity-10'
                    }`}
                    style={{ backgroundColor: isActive ? product.color : '#F5F7FA' }}
                  >
                    <Icon
                      className={`w-6 h-6 transition-colors ${isActive ? '' : 'text-piko-medium-grey'}`}
                      style={{ color: isActive ? product.color : undefined }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-poppins text-lg font-semibold mb-1 transition-colors ${
                        isActive ? 'text-piko-black' : 'text-piko-medium-grey'
                      }`}
                    >
                      {product.title}
                    </h3>
                    {isActive && (
                      <p className="text-sm text-piko-medium-grey leading-relaxed animate-fade-up">
                        {product.description}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </nav>
          </div>

          <div ref={contentRef} className="w-2/3 h-screen flex items-center justify-center sticky top-0">
          <div className="w-full max-w-lg">
            <div
              className="relative bg-white rounded-3xl shadow-2xl p-8 transition-all duration-500"
              style={{
                boxShadow: `0 20px 60px ${products[activeProduct].color}33`,
              }}
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-30" style={{ backgroundColor: products[activeProduct].color }}></div>

              <div className="relative z-10">
                <img
                  src={products[activeProduct].image}
                  alt={products[activeProduct].title}
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />

                <h3 className="text-2xl font-poppins font-bold text-piko-black mb-4">
                  {products[activeProduct].title}
                </h3>

                <p className="text-piko-medium-grey mb-6 leading-relaxed">
                  {products[activeProduct].description}
                </p>

                <ul className="space-y-3">
                  {products[activeProduct].features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: products[activeProduct].color }}
                      ></div>
                      <span className="text-piko-medium-grey">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
