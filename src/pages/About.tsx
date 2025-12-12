import React from "react";
import {
  Navbar,
  Footer,
  Newsletter,
  AppStoreBadges,
  SEO,
  BusinessHero,
} from "../components";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import {
  Building2,
  TrendingUp,
  Users,
  Wallet,
  BarChart3,
  Lock,
  Clock,
  Headphones,
  CheckCircle2,
  Target,
  Heart,
  Globe,
  Users2,
  Briefcase,
  Shield,
  UserCog,
  ArrowRight,
  Sparkles,
  Award,
  Zap,
  Globe2,
  Smartphone,
  CreditCard,
  ShieldCheck,
  BarChart,
} from "lucide-react";
import { Link } from "react-router-dom";

const HERO_IMAGE = "/HeroImage3.png";
const STORY_IMAGE = "/Africa-mobile-payment.webp";
const MISSION_IMAGE = "/inclusionImage.webp";
const PATTERN_BG =
  "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&w=1600&q=20";
const AFRICA_MAP =
  "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80";
const OFFICE_SPACE =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80";
const HERO_IMAGE2 = "/AfricanPayment.jpeg";

const coreValues = [
  {
    icon: Target,
    title: "Customer-first",
    text: "We design our products around the needs of users across Africa — simple, fast, and friendly.",
    gradient: "from-piko-purple to-piko-violet",
  },
  {
    icon: Shield,
    title: "Security & Trust",
    text: "Built with industry-standard security and multi-layer protections so your money is safe.",
    gradient: "from-piko-violet to-piko-lilac",
  },
  {
    icon: Users2,
    title: "Inclusion",
    text: "We bring payments to the unbanked and underserved, enabling economic participation.",
    gradient: "from-piko-lilac to-piko-purple",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    text: "We help businesses scale with reliable payouts, analytics, and integrations.",
    gradient: "from-piko-purple to-piko-violet",
  },
];

const whyTrust = [
  {
    icon: Clock,
    metric: "24/7",
    label: "Support Available",
    description: "Round-the-clock customer service",
  },
  {
    icon: Users,
    metric: "10,000+",
    label: "Active Customers",
    description: "Growing community across Africa",
  },
  {
    icon: TrendingUp,
    metric: "99.99%",
    label: "Uptime SLA",
    description: "Enterprise-grade reliability",
  },
  {
    icon: Headphones,
    metric: "< 1min",
    label: "Avg Response Time",
    description: "Quick support responses",
  },
];

const buildingFeatures = [
  {
    icon: Wallet,
    title: "Payments & Payouts",
    description:
      "Fast, transparent and low-cost transfers for businesses and individuals.",
    gradient: "from-piko-purple/20 to-piko-violet/20",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Real-time reporting that helps businesses make smarter decisions.",
    gradient: "from-piko-violet/20 to-piko-lilac/20",
  },
  {
    icon: Lock,
    title: "Compliance & Security",
    description:
      "Comprehensive processes to keep transactions safe and compliant.",
    gradient: "from-piko-lilac/20 to-piko-purple/20",
  },
  {
    icon: Building2,
    title: "Integrations",
    description: "APIs and plugins that integrate with your stack easily.",
    gradient: "from-piko-purple/20 to-piko-violet/20",
  },
];

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Us - PikoSend | Payments for Africa"
        description="PikoSend is building inclusive, secure and scalable payment infrastructure for individuals and businesses across Africa. Learn about our story, mission, team and values."
        keywords="PikoSend, about, fintech, payments, africa, financial inclusion"
      />

      <Navbar />
      <Section
        className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden pt-16 md:pt-20"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(90, 42, 162, 0.9), rgba(124, 58, 237, 0.9)), url('${PATTERN_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-piko-purple/90 via-piko-violet/80 to-piko-lilac/70"></div>

        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-piko-lilac rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-piko-purple rounded-full blur-3xl opacity-20 animate-pulse"></div>

        <Container className="relative z-10 py-8 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-full animate-fade-in">
                <Sparkles className="w-4 h-4" />
                About PikoSend
              </div>
                <h1 className="text-4xl md:text-6xl font-poppins font-bold leading-tight animate-fade-up">
                Payments, built for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-piko-lilac to-white">
                  Africa
                </span>
              </h1>
              {/* for mobile */}
              <div className="block md:hidden relative ">
                <div className="absolute -inset-4 bg-gradient-to-r from-white to-piko-lilac rounded-3xl opacity-10 blur-xl"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
                  <div className="p-2">
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-piko-purple/20 to-piko-violet/20">
                      <img
                        src={HERO_IMAGE}
                        alt="PikoSend team collaborating"
                        className="w-full h-[500px] object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black/80 backdrop-blur-sm rounded-b-2xl flex items-center justify-center">
                        <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-piko-purple to-piko-violet flex items-center justify-center">
                          <Globe2 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-piko-black">
                            Across 15+ African countries
                          </p>
                          <p className="text-sm text-piko-medium-grey">
                            Serving thousands of businesses
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-piko-lilac to-piko-violet rounded-2xl opacity-20 blur-lg"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-white to-piko-purple rounded-full opacity-10 blur-lg"></div>
              </div>

            

              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                We're connecting people and businesses to modern payment rails —
                making transfers, payrolls and merchant collections effortless
                across the continent.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="#"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-piko-purple font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Download For IOS
                  <ArrowRight className="w-5 h-5 text-piko-purple group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="#"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
                >
                  Download For Android
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-white to-piko-lilac rounded-3xl opacity-10 blur-xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
                <div className="p-2">
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-piko-purple/20 to-piko-violet/20">
                    <img
                      src={HERO_IMAGE}
                      alt="PikoSend team collaborating"
                      className="w-full h-[500px] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black/80 backdrop-blur-sm rounded-b-2xl flex items-center justify-center">
                      <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-piko-purple to-piko-violet flex items-center justify-center">
                        <Globe2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-piko-black">
                          Across 15+ African countries
                        </p>
                        <p className="text-sm text-piko-medium-grey">
                          Serving thousands of businesses
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-piko-lilac to-piko-violet rounded-2xl opacity-20 blur-lg"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-white to-piko-purple rounded-full opacity-10 blur-lg"></div>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              fill="white"
              opacity="0.1"
            />
            <path
              d="M0,80L60,75C120,70,240,60,360,55C480,50,600,50,720,53.3C840,56.7,960,63,1080,65C1200,67,1320,63,1380,61.3L1440,60L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
              fill="white"
              opacity="0.2"
            />
            <path
              d="M0,96L80,90.7C160,85,320,75,480,70C640,65,800,65,960,66.7C1120,68,1280,68,1360,68.7L1440,70L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              fill="white"
            />
          </svg>
        </div>
      </Section>

      <Section background="white" className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { value: "15+", label: "African Countries", icon: Globe },
              { value: "50K+", label: "Transactions Daily", icon: Zap },
              { value: "99.9%", label: "Uptime", icon: ShieldCheck },
              { value: "24/7", label: "Support", icon: Headphones },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-piko-soft-grey hover:border-piko-purple/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-piko-purple/10 to-piko-violet/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-piko-purple" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-piko-black">
                      {stat.value}
                    </div>
                    <div className="text-sm text-piko-medium-grey">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="white" className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-piko-purple/5 to-white"></div>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-8xl mx-auto relative z-10">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-piko-purple to-piko-violet rounded-3xl opacity-5 blur-xl"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={STORY_IMAGE}
                    alt="Our story - team collaborating"
                    className="w-full h-[500px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-piko-soft-grey">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-piko-purple to-piko-violet flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-piko-black">
                        Founded in 2025
                      </p>
                      <p className="text-xs text-piko-medium-grey">
                        Building since
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-2 bg-piko-purple/10 rounded-full text-piko-purple font-medium text-sm mb-6">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-piko-black mb-6">
                From humble beginnings to pan-African impact
              </h2>
              <p className="text-lg text-piko-medium-grey leading-relaxed mb-6">
                PikoSend began as a small team of engineers and product builders
                who believed payments in Africa could be simpler and more
                inclusive. We started by solving the pain of cross-border
                transfers and local payouts for small businesses.
              </p>
              <p className="text-lg text-piko-medium-grey leading-relaxed mb-8">
                Today, we've grown into a full-stack payment platform that
                supports merchants, startups and enterprises across the
                continent, partnering with banks and payment providers to remove
                friction and lower costs for our users.
              </p>

              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-piko-purple to-piko-violet flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-piko-black">
                    Our focus remains unchanged:
                  </p>
                  <p className="text-piko-medium-grey">
                    Making payments accessible for everyone
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section
        id="mission"
        className="py-20 md:py-32 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.57), rgba(124, 58, 237, 0.65)), url('${AFRICA_MAP}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-piko-purple/50 to-piko-violet/50 rounded-full text-piko-purple font-medium text-sm mb-4 text-white">
                Our Purpose
              </span>
              <h2 className="text-3xl md:text-5xl font-poppins font-bold text-piko-black mb-6">
                Empowering Africa through{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-piko-purple to-piko-violet">
                  financial inclusion
                </span>
              </h2>
              <p className="text-xl text-piko-medium-grey max-w-3xl mx-auto text-white/90">
                We make payments accessible, affordable and reliable, helping
                individuals and businesses access opportunities and grow with
                confidence.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-piko-soft-grey hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-piko-purple to-piko-violet flex items-center justify-center flex-shrink-0">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-poppins font-bold text-piko-black mb-2">
                        Our Vision
                      </h3>
                      <p className="text-piko-medium-grey">
                        A cashless, connected Africa where people and businesses
                        move money without barriers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl border border-piko-soft-grey hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-piko-violet to-piko-lilac flex items-center justify-center flex-shrink-0">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-poppins font-bold text-piko-black mb-2">
                        Our Mission
                      </h3>
                      <p className="text-piko-medium-grey">
                        To build inclusive financial infrastructure that enables
                        economic growth across Africa.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-piko-purple to-piko-violet rounded-3xl p-8 text-white shadow-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-poppins font-bold mb-2">
                        Our Impact
                      </h3>
                      <p className="text-white/90">
                        Helping thousands of businesses grow and enabling
                        financial access for underserved communities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-piko-purple to-piko-violet rounded-3xl opacity-10 blur-xl"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={MISSION_IMAGE}
                    alt="Mission and vision"
                    className="w-full h-[650px] object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-piko-purple to-piko-violet flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-piko-black">
                            Growing together
                          </p>
                          <p className="text-sm text-piko-medium-grey">
                            Building Africa's financial future
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="white" className="py-20 md:py-32">
        <Container>
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 rounded-full text-piko-purple font-medium text-sm mb-4">
                What Drives Us
              </span>
              <h2 className="text-3xl md:text-5xl font-poppins font-bold text-piko-black mb-6">
                Our core{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-piko-purple to-piko-violet">
                  values
                </span>
              </h2>
              <p className="text-xl text-piko-medium-grey max-w-3xl mx-auto">
                These principles guide every decision we make and every product
                we build.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div
                    key={idx}
                    className="group relative overflow-hidden bg-white rounded-3xl p-8 border border-piko-soft-grey hover:border-transparent transition-all duration-500 hover:shadow-2xl"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>
                    <div className="relative">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-poppins font-bold text-piko-black mb-4">
                        {value.title}
                      </h3>
                      <p className="text-piko-medium-grey leading-relaxed">
                        {value.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section
        background="white"
        className="py-20 md:py-32 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.99)), url('${OFFICE_SPACE}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <div className="max-w-8xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 rounded-full text-piko-purple font-medium text-sm mb-6">
                  Our Platform
                </span>
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-piko-black mb-6">
                  Building the future of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-piko-purple to-piko-violet">
                    African payments
                  </span>
                </h2>
                <p className="text-lg text-piko-medium-grey mb-8 leading-relaxed">
                  PikoSend builds payment infrastructure that helps
                  entrepreneurs, gig workers and small businesses handle money
                  reliably across Africa.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {buildingFeatures.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={idx}
                        className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:border-piko-purple/30 hover:shadow-xl transition-all duration-300"
                      >
                        <div
                          className={`w-12 h-12 rounded-xl ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-6 h-6 text-piko-purple" />
                        </div>
                        <h4 className="font-semibold text-piko-black mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-piko-medium-grey">
                          {feature.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-10">
                  <Link
                    to="/products"
                    className="group inline-flex items-center gap-2 text-piko-purple font-semibold hover:gap-3 transition-all duration-300"
                  >
                    Explore all our products
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-piko-purple to-piko-violet rounded-3xl opacity-10 blur-xl"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={HERO_IMAGE2}
                    alt="PikoSend platform features"
                    className="w-full h-[600px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="white" className="py-20 md:py-32 ">
        <Container>
          <div className="max-w-8xl mx-auto">
            <div className="bg-gradient-to-br from-piko-purple/5 via-white to-piko-violet/20 rounded-4xl p-8 md:p-12 border border-piko-purple/10 rounded-3xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 rounded-full text-piko-purple font-medium text-sm mb-6">
                    Why Choose Us
                  </span>
                  <h2 className="text-3xl md:text-4xl font-poppins font-bold text-piko-black mb-6">
                    Trusted by thousands across Africa
                  </h2>
                  <p className="text-lg text-piko-medium-grey mb-8">
                    Secure infrastructure, predictable pricing and a team that
                    truly cares about your success.
                  </p>

                  <div className="space-y-6 mb-8">
                    {[
                      "Transparent fees with no hidden costs",
                      "Enterprise-grade security & encryption",
                      "Developer-friendly APIs and documentation",
                      "Dedicated onboarding and support",
                      "Compliance with local regulations",
                      "Multi-currency support",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 group">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-piko-purple to-piko-violet flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-piko-black font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-piko-soft-grey">
                    <p className="text-sm text-piko-medium-grey mb-4">
                      Manage payments on the go
                    </p>
                    <AppStoreBadges variant="light" size="lg" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {whyTrust.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="group bg-white rounded-2xl p-6 border border-piko-soft-grey hover:border-piko-purple/30 hover:shadow-xl transition-all duration-300"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-piko-purple/10 to-piko-violet/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-piko-purple" />
                        </div>
                        <div className="text-3xl font-bold text-piko-black mb-2">
                          {item.metric}
                        </div>
                        <div className="font-medium text-piko-black mb-1">
                          {item.label}
                        </div>
                        <div className="text-sm text-piko-medium-grey">
                          {item.description}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="white" className="py-6 md:py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-piko-purple to-piko-violet p-12 md:p-16 text-center rounded-3xl shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&w=1600&q=20')] opacity-10"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
                  Ready to move money faster?
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses already using PikoSend for their
                  payments.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link
                    to="#"
                    className="px-8 py-4 rounded-2xl bg-white text-piko-purple font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                  >
                    Download App
                  </Link>
                  <Link
                    to="/contact"
                    className="px-8 py-4 rounded-2xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors duration-300"
                  >
                    Contact Support
                  </Link>
                </div>
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

export default About;
