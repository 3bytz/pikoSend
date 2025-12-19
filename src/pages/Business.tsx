import React from 'react';
import { Navbar, Footer, BusinessSection, SEO, BusinessHero, AppStoreBadges } from '../components';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Building2, TrendingUp, Users, Wallet, CheckCircle2, Zap, Shield, Globe, Target, Sparkles } from 'lucide-react';

const businessFeatures = [

  {
    icon: TrendingUp,
    title: 'Financial Analytics & Expense Tracking',
    description: 'Comprehensive financial insights and automated expense tracking. Monitor revenue, expenses, and cash flow in real-time with smart classification and detailed reporting tools.',
    details: [
      'Real-time revenue tracking',
      'Automated expense categorization',
      'Cash flow forecasting',
      'Custom report generation'
    ],
    stats: 'Real-time',
    statsLabel: 'Analytics',
    imageUrl: '/new/business_analytics_api_mobile.png',
    gradient: 'from-piko-violet to-piko-lilac',
    accentColor: 'text-piko-violet',
    bgColor: 'bg-piko-violet/10'
  },
    {
    icon: Users,
    title: 'Business Accounts & Team Management',
    description: 'Dedicated business accounts with advanced team management features. Add team members with custom permissions, roles, and secure collaborative access to manage company finances efficiently.',
    details: [
      'Multi-user business accounts',
      'Custom permission levels',
      'Role-based access control',
      'Secure team collaboration'
    ],
    stats: 'Unlimited',
    statsLabel: 'Team Members',
    imageUrl: '/new/business_team_account_bulk.jpeg',
    gradient: 'from-piko-purple to-piko-violet',
    accentColor: 'text-piko-purple',
    bgColor: 'bg-piko-purple/10'
  },
  {
    icon: Wallet,
    title: 'Bulk Payments & API Integration',
    description: 'Efficient bulk payment processing combined with seamless API integration. Pay multiple employees or vendors at once and integrate PikoSend into your existing systems with our robust API.',
    details: [
      'One-click bulk payments',
      'Vendor & payroll management',
      'Seamless API integration',
      'Custom workflow automation'
    ],
    stats: '50+',
    statsLabel: 'API Endpoints',
    imageUrl: '/new/Business_Bulk_Payments_API_Integration_mobile.png',
    gradient: 'from-piko-lilac to-piko-purple',
    accentColor: 'text-piko-lilac',
    bgColor: 'bg-piko-lilac/10'
  }
];

const solutions = [
  {
    title: 'For Startups',
    description: 'Scale fast with payment solutions that grow with you. No setup fees, no minimum balance requirements.',
    icon: Zap,
    color: 'from-piko-purple to-piko-violet',
    features: [
      'No setup fees',
      'Scalable pricing',
      'Quick onboarding',
      'Essential features included'
    ]
  },
  {
    title: 'For SMEs',
    description: 'Streamline operations with automated payments, invoicing, and comprehensive financial management tools.',
    icon: Building2,
    color: 'from-piko-violet to-piko-lilac',
    features: [
      'Advanced analytics',
      'Team management',
      'Bulk payments',
      'Dedicated support'
    ]
  },
  {
    title: 'For Enterprise',
    description: 'Enterprise-grade solutions with custom integrations, dedicated support, and advanced security protocols.',
    icon: Shield,
    color: 'from-piko-lilac to-piko-purple',
    features: [
      'Custom API solutions',
      'Priority 24/7 support',
      'Advanced security',
      'Dedicated account manager'
    ]
  },
];

const benefits = [
  'Save time with automated payment workflows',
  'Reduce costs with competitive transaction fees',
  'Improve cash flow with real-time tracking',
  'Increase security with multi-level approval systems',
  'Scale effortlessly as your business grows',
  'Access 24/7 dedicated business support',
];

export const Business: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Business Solutions - PikoSend | Payment Infrastructure for Companies"
        description="Power your business with PikoSend's payment platform. Business accounts, bulk payments, team management, API integration, and advanced analytics."
        keywords="business payments, bulk transfers, payment API, business accounts, payroll, vendor payments, expense tracking"
      />
      <Navbar />
      <BusinessHero />

      <Section background="white" className="py-6 md:py-2">
        <Container>
          <div className="text-center mb-4 md:mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 text-piko-purple text-base font-semibold rounded-full mb-6">
              <Target className="w-5 h-5" />
              <span>Business Features</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-piko-black mb-6">
              Everything Your Business Needs to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-piko-purple to-piko-violet">
                Thrive
              </span>
            </h2>
            <p className="text-xl text-piko-medium-grey max-w-3xl mx-auto">
              Powerful tools designed specifically for businesses to manage payments, finances, and teams efficiently
            </p>
          </div>

          <div className="space-y-10 md:space-y-12">
            {businessFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-4 md:gap-16`}
                >
                  <div className="lg:w-1/2">
                    <div className={`group relative rounded-3xl overflow-hidden shadow-2xl border border-piko-soft-grey/50 hover:shadow-3xl transition-all duration-500 ${isEven ? 'lg:translate-x-6' : 'lg:-translate-x-6'}`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5`}></div>
                      <img
                        src={feature.imageUrl}
                        alt={feature.title}
                        className="w-full h-[400px] md:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      
                      <div className="absolute top-6 left-6">
                        <div className={`${feature.bgColor} backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 border border-white/30`}>
                          <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                          <span className={`text-sm font-medium ${feature.accentColor}`}>Business Feature</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/2 space-y-8">
                    <div className={`inline-flex items-center gap-3 px-5 py-3 ${feature.bgColor} rounded-full ${isEven ? 'lg:ml-auto' : 'lg:mr-auto'} w-fit`}>
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                      </div>
                      <span className={`font-semibold ${feature.accentColor}`}>{feature.stats} • {feature.statsLabel}</span>
                    </div>

                    <div>
                      <h3 className="text-3xl md:text-4xl font-poppins font-bold text-piko-black mb-6 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-lg md:text-xl text-piko-medium-grey leading-relaxed mb-8">
                        {feature.description}
                      </p>
                    </div>

                    <div className="space-y-1 md:space-y-4">
                      {feature.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-piko-soft-grey hover:border-piko-purple/30 hover:shadow-md transition-all duration-300">
                          <div className={`w-10 h-10 rounded-lg ${feature.bgColor} flex items-center justify-center flex-shrink-0`}>
                            <CheckCircle2 className={`w-5 h-5 ${feature.accentColor}`} strokeWidth={2} />
                          </div>
                          <div>
                            <p className="font-medium text-piko-black">{detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section background="soft-grey" className="py-10">
        <Container>
          <div className="mb-20">
            <div className="text-center mb-4 md:mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 text-piko-purple text-base font-semibold rounded-full mb-6">
                <Globe className="w-5 h-5" />
                <span>Tailored Solutions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-piko-black mb-4">
                Solutions for Every Business Size
              </h2>
              <p className="text-lg text-piko-medium-grey max-w-2xl mx-auto">
                Whether you're just starting or scaling, we have the perfect solution for your business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-8">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                    
                    <div className={`relative mb-8`}>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="text-2xl font-poppins font-bold text-piko-black mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-piko-purple group-hover:to-piko-violet transition-all duration-300">
                      {solution.title}
                    </h3>
                    
                    <p className="text-piko-medium-grey leading-relaxed mb-8">
                      {solution.description}
                    </p>

                    <div className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${solution.color} opacity-10 flex items-center justify-center`}>
                            <CheckCircle2 className="w-3 h-3 text-piko-purple" strokeWidth={2} />
                          </div>
                          <span className="text-sm text-piko-medium-grey font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`}></div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-r from-piko-purple to-piko-violet rounded-3xl p-8 md:p-12 overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 w-fit">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Why Businesses Choose Us</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
                  Why Businesses Choose PikoSend
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Join hundreds of businesses that trust PikoSend for their payment infrastructure
                </p>
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-white/20">
                  <p className="text-sm text-white/80 mb-4">Manage on the go with our mobile app</p>
                  <AppStoreBadges variant="light" size="md" />
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-white/5 to-transparent rounded-3xl blur-2xl"></div>
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/new/business_team_account_bulk.jpeg"
                    alt="Business team using PikoSend"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-white">
                          <div className="text-sm font-medium">Business Success Rate</div>
                          <div className="text-3xl font-bold">98%</div>
                        </div>
                        <div className="text-right text-white">
                          <div className="text-sm font-medium">Customer Satisfaction</div>
                          <div className="text-3xl font-bold">4.9★</div>
                        </div>
                      </div>
                      <div className="w-full bg-white/30 rounded-full h-2">
                        <div className="bg-gradient-to-r from-white to-amber-200 h-2 rounded-full w-11/12"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <BusinessSection />
      
      <Footer />
    </div>
  );
};
