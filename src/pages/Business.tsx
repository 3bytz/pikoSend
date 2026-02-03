import React from "react";
import {
  Navbar,
  Footer,
  BusinessSection,
  SEO,
  BusinessHero,
  AppStoreBadges,
} from "../components";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import {
  
  TrendingUp,
  Users,
  Wallet,
  CheckCircle2,

  Globe,
  Target,
  Sparkles,
  Phone,
  Wallet2,
  SendHorizonalIcon,
  DownloadIcon,
  UserRoundCheck,
} from "lucide-react";

const businessFeatures = [
  {
    icon: TrendingUp,
    title: "Get Real-Time Reporting & Records",
    description:
      "Track transactions as they happen right from your dashboard. Download reports, monitor cash flow, sales and understand your business performance without guesswork.",
    details: [
      "Real-time revenue tracking",
      "Automated expense categorization",
      "Cash flow forecasting",
      "Custom report generation",
    ],
    stats: "Real-time",
    statsLabel: "Analytics",
    imageUrl: "/new/business_analytics_api_mobile.png",
    gradient: "from-piko-violet to-piko-lilac",
    accentColor: "text-piko-violet",
    bgColor: "bg-piko-violet/10",
  },
  {
    icon: Users,
    title: "Tap & Go QR Payments",
    description:
      "Accept cashless payments instantly using QR codes. Customers scan, confirm, and pay in seconds, reducing queues and eliminating cash handling risks.",
    details: [
      "Multi-user business accounts",
      "Custom permission levels",
      "Role-based access control",
      "Secure team collaboration",
    ],
    stats: "Unlimited",
    statsLabel: "Team Members",
    imageUrl: "/new/business_team_account_bulk.jpeg",
    gradient: "from-piko-purple to-piko-violet",
    accentColor: "text-piko-purple",
    bgColor: "bg-piko-purple/10",
  },
  {
    icon: Wallet,
    title: "Multi-Wallets for Better Money Management",
    description: "Separate your money without opening multiple accounts.",
    details: [
      "Sales",
      "Expenses",
      "Savings",
      "Different branches or business lines",
    ],
    stats: "",
    statsLabel: "Multi Wallets",
    imageUrl: "/new/Business_Bulk_Payments_API_Integration_mobile.png",
    gradient: "from-piko-lilac to-piko-purple",
    accentColor: "text-piko-lilac",
    bgColor: "bg-piko-lilac/10",
  },
];

const solutions = [
  {
    title: "Send money by phone number",
    description:
      "Scale fast with payment solutions that grow with you. No setup fees, no minimum balance requirements.",
    icon: Phone,
    color: "from-piko-purple to-piko-violet",
    features: [
      "No setup fees",
      "Scalable pricing",
      "Quick onboarding",
      "Essential features included",
    ],
  },
  {
    title: "Send to another PikoSend wallet",
    description:
      "Streamline operations with automated payments, invoicing, and comprehensive financial management tools.",
    icon: Wallet2,
    color: "from-piko-violet to-piko-lilac",
    features: [
      "Advanced analytics",
      "Team management",
      "Bulk payments",
      "Dedicated support",
    ],
  },
  {
    title: "Send directly to bank accounts via Pesalink",
    description:
      "Enterprise-grade solutions with custom integrations, dedicated support, and advanced security protocols.",
    icon: SendHorizonalIcon,
    color: "from-piko-lilac to-piko-purple",
    features: [
      "Custom API solutions",
      "Priority 24/7 support",
      "Advanced security",
      "Dedicated account manager",
    ],
  },
];
const GetingStarted = [
  {
    title: "Download PikoSend",
    description: "from the GooglePlay store or Apple store",
    icon: DownloadIcon,
    color: "from-piko-purple to-piko-violet",
  },
  {
    title: "Create your account",
    description: "in minutes",
    icon: UserRoundCheck,
    color: "from-piko-violet to-piko-lilac",
  },
  {
    title: "Start accepting and sending",
    description: "payments instantly",
    icon: SendHorizonalIcon,
    color: "from-piko-lilac to-piko-purple",
  },
];

const benefits = [
  "Reduce costs with some of the lowest transaction fees in the market",
  "Save time with instant payments and faster cash flow",
  "Track finances with multi-wallet management and real-time reporting",
  "Protect your money with end-to-end security and secure PIN access",
  "Access support anytime via WhatsApp, SMS, phone, email, or social media",
  "Access loans easily with the real time financial records",
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
              Everything Your Business Needs to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-piko-purple to-piko-violet">
                Thrive
              </span>
            </h2>
            <p className="text-xl text-piko-medium-grey max-w-3xl mx-auto">
              At PikoSend, we help you accept payments, manage money, and move
              funds easily in your business all while keeping transaction costs
              low, payments fast, and with support that’s easy to reach.
            </p>
          </div>

          <div className="space-y-10 md:space-y-12">
            {businessFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-4 md:gap-16`}
                >
                  <div className="lg:w-1/2">
                    <div
                      className={`group relative rounded-3xl overflow-hidden shadow-2xl border border-piko-soft-grey/50 hover:shadow-3xl transition-all duration-500 ${isEven ? "lg:translate-x-6" : "lg:-translate-x-6"}`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5`}
                      ></div>
                      <img
                        src={feature.imageUrl}
                        alt={feature.title}
                        className="w-full h-[400px] md:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                      <div className="absolute top-6 left-6">
                        <div
                          className={`${feature.bgColor} backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 border border-white/30`}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                          <span
                            className={`text-sm font-medium ${feature.accentColor}`}
                          >
                            Business Feature
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/2 space-y-8">
                    <div
                      className={`inline-flex items-center gap-3 px-5 py-3 ${feature.bgColor} rounded-full ${isEven ? "lg:ml-auto" : "lg:mr-auto"} w-fit`}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}
                      >
                        <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                      </div>
                      <span className={`font-semibold ${feature.accentColor}`}>
                        {feature.stats} • {feature.statsLabel}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-3xl md:text-4xl font-poppins font-bold text-piko-black mb-6 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-lg md:text-xl text-piko-medium-grey leading-relaxed mb-8">
                        {feature.description}
                      </p>
                    </div>
                    {index === businessFeatures.length - 1 && (
                      <div className="mt-2">
                        <div className="bg-gradient-to-r from-piko-purple/90 to-piko-violet/90 rounded-2xl p-6 md:p-4">
                          <p className="text-white/90 mb-6">
                            Create different wallets for:
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="space-y-1 md:space-y-2">
                      {feature.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-piko-soft-grey hover:border-piko-purple/30 hover:shadow-md transition-all duration-300"
                        >
                          <div
                            className={`w-10 h-10 rounded-lg ${feature.bgColor} flex items-center justify-center flex-shrink-0`}
                          >
                            <CheckCircle2
                              className={`w-5 h-5 ${feature.accentColor}`}
                              strokeWidth={2}
                            />
                          </div>
                          <div>
                            <p className="font-medium text-piko-black">
                              {detail}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {index === businessFeatures.length - 1 && (
                      <div className="mt-8">
                        <div className="bg-gradient-to-r from-piko-purple to-piko-violet rounded-2xl p-6 md:p-8">
                          {/* <h3 className="text-xl md:text-2xl font-poppins font-bold text-white mb-4">Ready to get started?</h3> */}
                          <p className="text-white/90 mb-6">
                            Keep business and personal funds apart and stay in
                            control of your finances.
                          </p>
                          {/* <button className="px-6 py-3 bg-white text-piko-purple font-semibold rounded-full hover:bg-piko-purple hover:text-white transition-colors duration-300">
                              Create Business Account
                            </button> */}
                        </div>
                      </div>
                    )}
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
                Whether you're just starting or scaling, we have the perfect
                solution for your business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-8">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center  cursor-pointer"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                    ></div>

                    <div className={`relative mb-8`}>
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                      >
                        <Icon
                          className="w-8 h-8 text-white"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    <h3 className="text-2xl font-poppins font-bold text-piko-black mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-piko-purple group-hover:to-piko-violet transition-all duration-300">
                      {solution.title}
                    </h3>

                    {/* <p className="text-piko-medium-grey leading-relaxed mb-8">
                      {solution.description}
                    </p> */}

                    {/* <div className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${solution.color} opacity-10 flex items-center justify-center`}>
                            <CheckCircle2 className="w-3 h-3 text-piko-purple" strokeWidth={2} />
                          </div>
                          <span className="text-sm text-piko-medium-grey font-medium">{feature}</span>
                        </div>
                      ))}
                    </div> */}

                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`}
                    ></div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8">
              <div className="bg-gradient-to-r from-piko-purple to-piko-violet rounded-2xl p-6 md:p-8">
                <p className="text-white/90 mb-6 text-lg text-piko-medium-grey max-w-2xl mx-auto">
                  Perfect for paying suppliers, staff, or bills.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-piko-purple to-piko-violet rounded-3xl p-8 md:p-12 overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 w-fit">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">
                    Why Businesses Love Us
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
                  Why Businesses Love PikoSend
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Join hundreds of Kenyan businesses who trust PikoSend for
                  their daily business transactions.
                </p>
                <p className="text-lg text-white/90 mb-8">
                  With PikoSend, you can:
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
                  <p className="text-sm text-white/80 mb-4">
                    Manage on the go with our mobile app
                  </p>
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
                          <div className="text-sm font-medium">
                            Business Success Rate
                          </div>
                          <div className="text-3xl font-bold">98%</div>
                        </div>
                        <div className="text-right text-white">
                          <div className="text-sm font-medium">
                            Customer Satisfaction
                          </div>
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
      {/* Getting Started Is Easy */}
      <Section background="soft-grey" className="py-12 md:py-16 lg:py-20">
        <Container>
          <div className="mb-16 md:mb-24">
            <div className="text-center mb-12 md:mb-20">
              <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 text-piko-purple text-sm md:text-base font-semibold rounded-full mb-6 md:mb-8">
                <Globe className="w-4 h-4 md:w-5 md:h-5" />
                <span>Getting Started</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-piko-black mb-4 md:mb-6">
                Getting Started Is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-piko-purple to-piko-violet">
                  Easy
                </span>
              </h2>
              {/* <p className="text-base md:text-lg text-piko-medium-grey max-w-2xl mx-auto px-4">
          Join thousands of businesses already using PikoSend to simplify their payments
        </p> */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-0">
              {GetingStarted.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center cursor-pointer h-full"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                    />

                    <div className="absolute -top-3 -right-3 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-piko-purple to-piko-violet flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg md:text-xl">
                        {index + 1}
                      </span>
                    </div>

                    <div className="relative mb-6 md:mb-8 mt-4">
                      <div
                        className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                      >
                        <Icon
                          className="w-6 h-6 md:w-8 md:h-8 text-white"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-poppins font-bold text-piko-black mb-3 md:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-piko-purple group-hover:to-piko-violet transition-all duration-300">
                      {step.title}
                    </h3>

                    <p className="text-piko-medium-grey leading-relaxed text-sm md:text-base mb-6 md:mb-8 flex-grow">
                      {step.description}
                    </p>

                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1.5 md:h-2 bg-gradient-to-r ${step.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`}
                    />
                  </div>
                );
              })}
            </div>

            <div className="mt-12 md:mt-16 px-4">
              <div className="bg-gradient-to-r from-piko-purple to-piko-violet rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -translate-x-24 translate-y-24" />
                </div>

                <div className="relative z-10">
                  <p className="text-white text-center text-base md:text-lg lg:text-xl font-medium mb-6 max-w-3xl mx-auto leading-relaxed">
                    Our platform is available 24/7, and support is always within
                    reach when you need it.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 pt-8 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                        24/7
                      </div>
                      <div className="text-white/80 text-sm md:text-base">
                        Availability
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                        99.9%
                      </div>
                      <div className="text-white/80 text-sm md:text-base">
                        Uptime
                      </div>
                    </div>
                    <div className="text-center col-span-2 md:col-span-1 mt-4 md:mt-0">
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {" "}
                        under 5 min
                      </div>
                      <div className="text-white/80 text-sm md:text-base">
                        Average Response Time
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <button className="px-6 md:px-8 py-3 md:py-4 bg-white text-piko-purple font-semibold rounded-full hover:bg-gray-50 hover:shadow-lg transition-all duration-300 text-sm md:text-base">
                      Get Started Today
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
};
