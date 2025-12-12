import React from 'react';
import { Navbar, Footer, Newsletter, BusinessSection, SEO, BusinessHero, AppStoreBadges } from '../components';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Building2, TrendingUp, Users, Wallet, BarChart3, Lock, Clock, Headphones, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const businessFeatures = [
  {
    icon: Building2,
    title: 'Business Accounts',
    description: 'Dedicated business accounts with advanced features for managing company finances efficiently.',
    imageUrl: '/business/businessAccount.webp',
  },
  {
    icon: TrendingUp,
    title: 'Financial Analytics',
    description: 'Powerful insights and reporting tools to track revenue, expenses, and cash flow in real-time.',
    imageUrl: '/business/financialAnalytics.png',
  },
  {
    icon: Users,
    title: 'Team Management',
    description: 'Add team members with custom permissions and roles for secure collaborative access.',
    imageUrl: '/business/teamManagement.jpg',
  },
  {
    icon: Wallet,
    title: 'Bulk Payments',
    description: 'Pay multiple employees, suppliers, or vendors at once with our efficient bulk transfer system.',
    imageUrl: '/business/transfer.webp',
  },
  {
    icon: BarChart3,
    title: 'Expense Tracking',
    description: 'Monitor and categorize business expenses automatically with smart classification.',
    imageUrl: '/business/expenseTracking.jpeg',
  },
  {
    icon: Lock,
    title: 'API Integration',
    description: 'Seamlessly integrate PikoSend into your existing systems with our robust API.',
    imageUrl: '/business/apiIntegration.webp',
  },
];

const solutions = [
  {
    title: 'For Startups',
    description: 'Scale fast with payment solutions that grow with you. No setup fees, no minimum balance.',
    icon: TrendingUp,
    color: 'from-piko-violet to-piko-purple',
    imageUrl: '/business/startUps.jpg',
  },
  {
    title: 'For SMEs',
    description: 'Streamline operations with automated payments, invoicing, and financial management tools.',
    icon: Building2,
    color: 'from-piko-purple to-piko-lilac',
    imageUrl: '/business/sme.webp',
  },
  {
    title: 'For Enterprise',
    description: 'Enterprise-grade solutions with dedicated support, custom integrations, and advanced security.',
    icon: Users,
    color: 'from-piko-violet to-piko-lilac',
    imageUrl: '/business/boardRoom.jpg',
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

      <Section background="white" className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {businessFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border-2 border-piko-soft-grey rounded-2xl overflow-hidden transition-all duration-300 hover:border-piko-purple hover:shadow-xl"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={feature.imageUrl}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-piko-violet/10 to-piko-purple/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-piko-purple" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-poppins font-bold text-piko-black mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-piko-medium-grey leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-piko-black mb-4">
                Solutions for Every Business Size
              </h2>
              <p className="text-lg text-piko-medium-grey max-w-2xl mx-auto">
                Whether you're just starting or scaling, we have the perfect solution for your business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div
                    key={index}
                    className={`relative bg-gradient-to-br ${solution.color} rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={solution.imageUrl}
                        alt={solution.title}
                        className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                      />
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative p-8 text-white -mt-16">
                      <Icon className="w-12 h-12 mb-6 relative z-10" strokeWidth={2} />
                      <h3 className="text-2xl font-poppins font-bold mb-3 relative z-10">
                        {solution.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed relative z-10">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-piko-soft-grey rounded-3xl p-3 md:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-piko-black mb-6">
                  Why Businesses Choose PikoSend
                </h2>
                <p className="text-lg text-piko-medium-grey mb-8">
                  Join hundreds of businesses that trust PikoSend for their payment infrastructure
                </p>
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-piko-purple flex-shrink-0 mt-0.5" />
                      <span className="text-piko-black font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-gray-300">
                  <p className="text-sm text-piko-medium-grey mb-4">Manage on the go with our mobile app</p>
                  <AppStoreBadges variant="light" size="md" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <Clock className="w-10 h-10 text-piko-purple mx-auto mb-4" />
                  <div className="text-3xl font-bold text-piko-black mb-2">24/7</div>
                  <div className="text-sm text-piko-medium-grey">Support Available</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <Users className="w-10 h-10 text-piko-violet mx-auto mb-4" />
                  <div className="text-3xl font-bold text-piko-black mb-2">500+</div>
                  <div className="text-sm text-piko-medium-grey">Businesses</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <TrendingUp className="w-10 h-10 text-piko-lilac mx-auto mb-4" />
                  <div className="text-3xl font-bold text-piko-black mb-2">99.9%</div>
                  <div className="text-sm text-piko-medium-grey">Uptime SLA</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <Headphones className="w-10 h-10 text-piko-purple mx-auto mb-4" />
                  <div className="text-3xl font-bold text-piko-black mb-2">{'< 1min'}</div>
                  <div className="text-sm text-piko-medium-grey">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <BusinessSection />
      <Newsletter />
      <Footer />
    </div>
  );
};
