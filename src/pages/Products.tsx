import React from 'react';
import { Navbar, Footer, Newsletter, SEO, ProductsHero, AppStoreBadges } from '../components';
import { ProductCard } from '../components/ProductCard';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { ArrowRight, CreditCard, Globe, Smartphone, Zap, Shield, BarChart3, Users, Award, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FEATURE_IMAGES = {
  security: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
  support: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&w=800&q=80',
  analytics: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  team: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
};
const products = [
  {
    icon: Zap,
    title: 'Instant Transfers',
    description: 'Send money to anyone, anywhere within seconds. Real-time processing with support and minimal fees.',
    features: ['Real-time processing', 'Low fees', 'Instant notifications', '24/7 availability', 'Bank-grade security'],
    gradient: 'from-piko-purple to-piko-violet',
    image: '/mockups/instantTransfer.jpg',
    tag: 'Most Popular'
  },
  {
    icon: Globe,
    title: 'Qr Code Payment',
    description: 'Just open the app, scan the merchant QR code, enter the amount, and voilà! Payment done. Perfect for businesses and freelancers.',
    features: ['Competitive rates', 'Easy conversion', 'Batch payments'],
    gradient: 'from-piko-violet to-piko-lilac',
    image: '/mockups/sendbyQR.jpg',
    tag: 'Business'
  },
  {
    icon: CreditCard,
    title: 'Wallet Management',
    description: 'Perfect for secure online shopping with spending controls and real-time alerts.',
    features: ['Instant creation', 'Freeze/unfreeze', 'Spending limits', 'Transaction alerts', 'Expiry control'],
    gradient: 'from-piko-lilac to-piko-purple',
    image: '/mockups/Wallet.jpg',
    tag: 'Secure'
  },
  {
    icon: Smartphone,
    title: 'Mobile ATM',
    description: 'Add cash to your wallet using a nearby cash agent. Withdraw cash from your wallet via agent.',
    features: ['Easy top-ups', 'Bill payments', 'Transaction history', 'Budget tracking', 'QR payments', 'Savings goals'],
    gradient: 'from-piko-purple to-piko-violet',
    image: '/mockups/ATM.jpg',
    tag: 'All-in-One'
  },
];

const features = [
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: '256-bit encryption, 2FA, and biometric authentication keep your money safe',
    image: FEATURE_IMAGES.security,
    color: 'purple',
    stats: '99.9% Uptime'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer service across all channels for instant help',
    image: FEATURE_IMAGES.support,
    color: 'violet',
    stats: '< 2 min Response'
  },
  {
    icon: BarChart3,
    title: 'Real Analytics',
    description: 'Advanced insights into your spending, earnings, and financial growth',
    image: FEATURE_IMAGES.analytics,
    color: 'lilac',
    stats: 'Live Dashboards'
  },
  {
    icon: Users,
    title: 'Team Management',
    description: 'Collaborate with team members and control access with granular permissions',
    image: FEATURE_IMAGES.team,
    color: 'purple',
    stats: 'Multi-user Access'
  },
];

export const Products: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Products - PikoSend | Instant Transfers, Virtual Cards & More"
        description="Explore PikoSend's suite of financial products designed for modern Africa."
      />
      <Navbar />
      <ProductsHero />

  
     <Section background="white" className="py-16 md:py-24">
  <Container>
    <div className="text-center max-w-4xl mx-auto mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 rounded-full mb-6 animate-fade-in">
        <Award className="w-4 h-4 text-piko-purple" />
        <span className="text-piko-purple font-medium text-sm">Why Choose PikoSend</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-poppins font-bold text-piko-black mb-6 animate-fade-up">
        Built for modern
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-piko-purple to-piko-violet">
          African finance
        </span>
      </h2>
      <p className="text-lg text-piko-medium-grey max-w-2xl mx-auto animate-fade-up" style={{animationDelay: '0.1s'}}>
        We combine cutting-edge technology with deep local understanding to deliver exceptional value.
      </p>
    </div>

   
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
      {features.map((feature, idx) => {
        const Icon = feature.icon;
        const gradientClass = {
          'purple': 'from-piko-purple to-piko-violet',
          'violet': 'from-piko-violet to-piko-lilac',
          'lilac': 'from-piko-lilac to-piko-purple'
        }[feature.color];
        
        return (
          <div 
            key={idx}
            className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 hover:border-piko-purple/20 hover:shadow-2xl transition-all duration-500 animate-fade-up"
            style={{animationDelay: `${0.2 + idx * 0.1}s`}}
          >
       
            <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
            
           
            <div className="relative h-48 md:h-56 overflow-hidden">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              
           
              <div className="absolute top-4 left-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="text-xs font-semibold text-piko-black">{feature.stats}</span>
              </div>
            </div>
            
          
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-poppins font-bold text-piko-black mb-3 group-hover:text-piko-purple transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-base text-piko-medium-grey mb-6 leading-relaxed">
                {feature.description}
              </p>
              
             
              <div className="space-y-3">
                {[
                  feature.color === 'purple' ? ['🔐 End-to-end encryption', '🛡️ Fraud protection'] :
                  feature.color === 'violet' ? ['💬 Live chat support', '📞 Phone & email'] :
                  feature.color === 'lilac' ? ['📊 Real-time reports', '📈 Growth insights'] :
                  ['👥 Role-based access', '🔑 Permission controls']
                ].map((items, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${gradientClass} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <div className="text-xs text-white">✓</div>
                    </div>
                    <div className="space-y-2">
                      {items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-sm text-piko-black font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
          
      
            </div>
            
           
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          </div>
        );
      })}
    </div>

    {/* Stats Banner */}
    <div className="bg-gradient-to-r from-piko-purple/5 via-white to-piko-violet/5 rounded-3xl p-8 mb-16 border border-piko-purple/10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { value: '1M+', label: 'Transactions', icon: '💸' },
          { value: '50K+', label: 'Users', icon: '👥' },
          { value: '99.9%', label: 'Uptime', icon: '⚡' },
          { value: '24/7', label: 'Support', icon: '🛡️' },
        ].map((stat, idx) => (
          <div key={idx} className="text-center p-4">
            <div className="text-3xl md:text-4xl font-bold text-piko-black mb-2">{stat.value}</div>
            <div className="flex items-center justify-center gap-2 text-piko-medium-grey">
              <span>{stat.icon}</span>
              <span>{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="space-y-16 md:space-y-24">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          {...product}
          isEven={index % 2 === 0}
        />
      ))}
    </div>
  </Container>
</Section>

      <Newsletter />
      <Footer />
    </div>
  );
};