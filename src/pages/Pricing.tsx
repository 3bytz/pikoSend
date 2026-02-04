import React, { useState } from "react";
import { Navbar, Footer, SEO } from "../components";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import {
  CreditCard,
  Users,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  TrendingUp,
  Calculator,
  Percent,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import { WaitingListCTA } from "../components/WaitingList/WaitingListCTA";

const individualTransferData = [
  {
    min: 1,
    max: 10,
    pikoToPiko: 0,
    mobileMoney: "Not allowed",
    dtbAccount: "Not allowed",
    pesalink: 0,
  },
  {
    min: 11,
    max: 100,
    pikoToPiko: 0,
    mobileMoney: 0,
    dtbAccount: 15,
    pesalink: 20,
  },
  {
    min: 101,
    max: 500,
    pikoToPiko: 4,
    mobileMoney: 11,
    dtbAccount: 20,
    pesalink: 20,
  },
  {
    min: 501,
    max: 1000,
    pikoToPiko: 7,
    mobileMoney: 13,
    dtbAccount: 20,
    pesalink: 60,
  },
  {
    min: 1001,
    max: 1500,
    pikoToPiko: 11,
    mobileMoney: 18,
    dtbAccount: 25,
    pesalink: 60,
  },
  {
    min: 1501,
    max: 2500,
    pikoToPiko: 15,
    mobileMoney: 25,
    dtbAccount: 25,
    pesalink: 60,
  },
  {
    min: 2501,
    max: 3500,
    pikoToPiko: 20,
    mobileMoney: 35,
    dtbAccount: 30,
    pesalink: 60,
  },
  {
    min: 3501,
    max: 5000,
    pikoToPiko: 25,
    mobileMoney: 40,
    dtbAccount: 30,
    pesalink: 70,
  },
  {
    min: 5001,
    max: 7500,
    pikoToPiko: 35,
    mobileMoney: 45,
    dtbAccount: 40,
    pesalink: 80,
  },
  {
    min: 7501,
    max: 20000,
    pikoToPiko: 40,
    mobileMoney: 55,
    dtbAccount: 45,
    pesalink: 100,
  },
  {
    min: 20001,
    max: 50000,
    pikoToPiko: 50,
    mobileMoney: 70,
    dtbAccount: 50,
    pesalink: 100,
  },
  {
    min: 50001,
    max: 100000,
    pikoToPiko: 60,
    mobileMoney: 75,
    dtbAccount: 60,
    pesalink: 120,
  },
  {
    min: 100001,
    max: 250000,
    pikoToPiko: 60,
    mobileMoney: 80,
    dtbAccount: 60,
    pesalink: 120,
  },
  {
    min: 250001,
    max: 999999,
    pikoToPiko: 60,
    mobileMoney: "Not allowed",
    dtbAccount: 60,
    pesalink: 120,
  },
];

const individualCashData = [
  { min: 0, max: 50, deposit: "Free", withdraw: "Not Applicable" },
  { min: 51, max: 100, deposit: "Free", withdraw: 5 },
  { min: 101, max: 500, deposit: "Free", withdraw: 5 },
  { min: 501, max: 1000, deposit: "Free", withdraw: 10 },
  { min: 1001, max: 1500, deposit: "Free", withdraw: 15 },
  { min: 1501, max: 2500, deposit: "Free", withdraw: 15 },
  { min: 2501, max: 3500, deposit: "Free", withdraw: 25 },
  { min: 3501, max: 5000, deposit: "Free", withdraw: 30 },
  { min: 5001, max: 7500, deposit: "Free", withdraw: 45 },
  { min: 7501, max: 20000, deposit: "Free", withdraw: 60 },
  { min: 20001, max: 50000, deposit: "Free", withdraw: 60 },
  { min: 50001, max: 100000, deposit: "Free", withdraw: 60 },
];

const businessTransferData = [
  {
    min: 1,
    max: 10,
    pikoSend: 0,
    receive: 0,
    mobileMoney: "Not allowed",
    dtbAccount: "Not allowed",
    pesalink: 0,
  },
  {
    min: 11,
    max: 100,
    pikoSend: 0,
    receive: 0,
    mobileMoney: 15,
    dtbAccount: 0,
    pesalink: 20,
  },
  {
    min: 101,
    max: 500,
    pikoSend: 4,
    receive: 0.5,
    mobileMoney: 20,
    dtbAccount: 11,
    pesalink: 20,
  },
  {
    min: 501,
    max: 1000,
    pikoSend: 7,
    receive: 1,
    mobileMoney: 20,
    dtbAccount: 13,
    pesalink: 60,
  },
  {
    min: 1001,
    max: 1500,
    pikoSend: 11,
    receive: 2,
    mobileMoney: 25,
    dtbAccount: 18,
    pesalink: 60,
  },
  {
    min: 1501,
    max: 2500,
    pikoSend: 15,
    receive: 3,
    mobileMoney: 25,
    dtbAccount: 25,
    pesalink: 60,
  },
  {
    min: 2501,
    max: 3500,
    pikoSend: 20,
    receive: 5,
    mobileMoney: 30,
    dtbAccount: 35,
    pesalink: 60,
  },
  {
    min: 3501,
    max: 5000,
    pikoSend: 25,
    receive: 6,
    mobileMoney: 30,
    dtbAccount: 40,
    pesalink: 70,
  },
  {
    min: 5001,
    max: 7500,
    pikoSend: 35,
    receive: 10,
    mobileMoney: 40,
    dtbAccount: 45,
    pesalink: 80,
  },
  {
    min: 7501,
    max: 20000,
    pikoSend: 40,
    receive: 15,
    mobileMoney: 45,
    dtbAccount: 55,
    pesalink: 100,
  },
  {
    min: 20001,
    max: 50000,
    pikoSend: 50,
    receive: 20,
    mobileMoney: 50,
    dtbAccount: 70,
    pesalink: 100,
  },
  {
    min: 50001,
    max: 100000,
    pikoSend: 60,
    receive: 30,
    mobileMoney: 60,
    dtbAccount: 75,
    pesalink: 120,
  },
  {
    min: 100001,
    max: 250000,
    pikoSend: 60,
    receive: 50,
    mobileMoney: 60,
    dtbAccount: 80,
    pesalink: 120,
  },
  {
    min: 250001,
    max: 999999,
    pikoSend: 60,
    receive: 60,
    mobileMoney: 60,
    dtbAccount: "Not allowed",
    pesalink: 120,
  },
];

const businessCashData = [
  { min: 0, max: 50, deposit: "Free", withdraw: "Not Applicable" },
  { min: 51, max: 100, deposit: "Free", withdraw: 5 },
  { min: 101, max: 500, deposit: "Free", withdraw: 5 },
  { min: 501, max: 1000, deposit: "Free", withdraw: 10 },
  { min: 1001, max: 1500, deposit: "Free", withdraw: 15 },
  { min: 1501, max: 2500, deposit: "Free", withdraw: 15 },
  { min: 2501, max: 3500, deposit: "Free", withdraw: 25 },
  { min: 3501, max: 5000, deposit: "Free", withdraw: 30 },
  { min: 5001, max: 7500, deposit: "Free", withdraw: 45 },
  { min: 7501, max: 20000, deposit: "Free", withdraw: 60 },
  { min: 20001, max: 50000, deposit: "Free", withdraw: 60 },
  { min: 50001, max: 100000, deposit: "Free", withdraw: 60 },
];

const pricingFeatures = [
  {
    icon: Shield,
    title: "No Hidden Fees",
    description:
      "Transparent pricing with no surprises. Know exactly what you'll pay upfront.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Zap,
    title: "Lowest Rates",
    description:
      "Enjoy some of the most competitive rates in the market for money transfers.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    icon: Clock,
    title: "Instant Processing",
    description:
      "Payments are processed instantly with real-time updates and notifications.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: TrendingUp,
    title: "Volume Discounts",
    description:
      "Higher transaction volumes qualify for discounted rates. Contact us for enterprise pricing.",
    color: "text-piko-purple",
    bgColor: "bg-piko-purple/10",
  },
];

export const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"individual" | "business">(
    "individual",
  );

  const formatValue = (value: string | number) => {
    if (value === "Free")
      return <span className="text-emerald-600 font-semibold">Free</span>;
    if (value === "Not Applicable")
      return <span className="text-piko-medium-grey">N/A</span>;
    if (value === "Not allowed")
      return <span className="text-red-500 font-medium">Not Allowed</span>;
    if (value === 0)
      return <span className="text-emerald-600 font-semibold">KES 0</span>;
    return <span className="text-piko-black font-medium">KES {value}</span>;
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Pricing - PikoSend | Transparent & Affordable Rates"
        description="View PikoSend's transparent pricing for individuals and businesses. Low fees, no hidden charges, and competitive rates for all your payment needs."
        keywords="PikoSend pricing, money transfer fees, transaction costs, business pricing, individual rates"
      />

      <Navbar />

      {/* Hero Section */}
      <Section
        className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden pt-20"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(90, 42, 162, 0.95), rgba(124, 58, 237, 0.95))`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-piko-purple/90 via-piko-violet/80 to-piko-lilac/70"></div>
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-piko-lilac rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-piko-purple rounded-full blur-3xl opacity-20 animate-pulse"></div>

        <Container className="relative z-10 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-full animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Transparent Pricing
            </div>

            <h1 className="text-4xl md:text-6xl font-poppins font-bold leading-tight animate-fade-up">
              Fair & Affordable
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-piko-lilac to-white">
                Pricing for Everyone
              </span>
            </h1>

            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Simple, transparent pricing with no hidden fees. Choose the plan
              that works best for you.
            </p>

            {/* Pricing Toggle */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-2xl p-1.5 border border-white/20 mt-8">
              <button
                onClick={() => setActiveTab("individual")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "individual"
                    ? "bg-white text-piko-purple shadow-lg"
                    : "text-white hover:text-white/90"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Users size={20} />
                  <span>Individuals</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab("business")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "business"
                    ? "bg-white text-piko-purple shadow-lg"
                    : "text-white hover:text-white/90"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Building2 size={20} />
                  <span>Businesses</span>
                </div>
              </button>
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

      {/* Monthly Fee Banner */}
      <Section className="py-8 md:py-12 bg-gradient-to-r from-piko-purple/5 to-piko-violet/5">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-piko-soft-grey p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-2xl ${
                      activeTab === "individual"
                        ? "bg-piko-purple/10"
                        : "bg-piko-violet/10"
                    } flex items-center justify-center`}
                  >
                    <CreditCard
                      className={`w-8 h-8 ${
                        activeTab === "individual"
                          ? "text-piko-purple"
                          : "text-piko-violet"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-poppins font-bold text-piko-black">
                      Monthly Subscription Fee
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-3xl font-bold text-piko-purple">
                        {activeTab === "individual" ? "KES 20" : "KES 30"}
                      </span>
                      <span className="text-piko-medium-grey">per month</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="text-piko-medium-grey">
                    Billed monthly, cancel anytime
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      {/* <Section className="py-8 md:py-12">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-white rounded-2xl p-6 border border-piko-soft-grey hover:border-piko-purple/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h4 className="font-semibold text-piko-black text-lg mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-piko-medium-grey text-sm">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section> */}

      {/* Pricing Tables */}
      <Section className="py-8 md:py-12">
        <Container>
          <div className="max-w-8xl mx-auto space-y-12">
            {/* Transfer Fees Table */}
            <div className="bg-white rounded-3xl shadow-xl border border-piko-soft-grey overflow-hidden">
              <div
                className={`p-6 md:p-8 ${
                  activeTab === "individual"
                    ? "bg-gradient-to-r from-piko-purple/10 to-piko-purple/5"
                    : "bg-gradient-to-r from-piko-violet/10 to-piko-violet/5"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-poppins font-bold text-piko-black">
                      Transfer Fees
                    </h2>
                    <p className="text-piko-medium-grey mt-2">
                      Charges for sending money to different destinations
                    </p>
                  </div>
                  <div
                    className={`px-4 py-2 rounded-full ${
                      activeTab === "individual"
                        ? "bg-piko-purple/20"
                        : "bg-piko-violet/20"
                    }`}
                  >
                    <span
                      className={`font-semibold ${
                        activeTab === "individual"
                          ? "text-piko-purple"
                          : "text-piko-violet"
                      }`}
                    >
                      All amounts in KES
                    </span>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-piko-soft-grey">
                    <tr>
                      <th className="text-left p-4 font-semibold text-piko-black">
                        Min
                      </th>
                      <th className="text-left p-4 font-semibold text-piko-black">
                        Max
                      </th>
                      {activeTab === "individual" ? (
                        <>
                          <th className="text-left p-4 font-semibold text-piko-black">
                            PikoSend → PikoSend
                          </th>
                          <th className="text-left p-4 font-semibold text-piko-black">
                            Transfer to Other Mobile Money
                          </th>
                          <th className="text-left p-4 font-semibold text-piko-black">
                            Transfer to DTB Account
                          </th>
                          <th className="text-left p-4 font-semibold text-piko-black">
                            Transfer via Pesalink
                          </th>
                        </>
                      ) : (
                        <>
                          <th className="text-left p-4 font-semibold text-piko-black">
                            PikoSend → PikoSend (Send)
                          </th>
                          <th className="text-left p-4 font-semibold text-piko-black">
                            PikoSend → PikoSend (Receive)
                          </th>
                          <th className="text-left p-4 font-semibold text-piko-black">
                            Transfer to Other Mobile Money
                          </th>
                          <th className="text-left p-4 font-semibold text-piko-black">
                            Transfer to DTB Account
                          </th>
                          <th className="text-left p-4 font-semibold text-piko-black">
                            Transfer via Pesalink
                          </th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-piko-soft-grey">
                    {(activeTab === "individual"
                      ? individualTransferData
                      : businessTransferData
                    ).map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-piko-soft-grey/50 transition-colors"
                      >
                        <td className="p-4 font-medium text-piko-black">
                          {row.min}
                        </td>
                        <td className="p-4 font-medium text-piko-black">
                          {row.max}
                        </td>
                        {activeTab === "individual" ? (
                          <>
                            <td className="p-4">
                              {formatValue((row as any).pikoToPiko)}
                            </td>
                            <td className="p-4">
                              {formatValue(row.mobileMoney)}
                            </td>
                            <td className="p-4">
                              {formatValue(row.dtbAccount)}
                            </td>
                            <td className="p-4">{formatValue(row.pesalink)}</td>
                          </>
                        ) : (
                          <>
                            <td className="p-4">
                              {formatValue((row as any).pikoSend)}
                            </td>
                            <td className="p-4">
                              {formatValue((row as any).receive)}
                            </td>

                            <td className="p-4">
                              {formatValue(row.dtbAccount)}
                            </td>
                            <td className="p-4">
                              {formatValue(row.mobileMoney)}
                            </td>
                            <td className="p-4">{formatValue(row.pesalink)}</td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cash Deposits & Withdrawals Table */}
            <div className="bg-white rounded-3xl shadow-xl border border-piko-soft-grey overflow-hidden">
              <div
                className={`p-6 md:p-8 ${
                  activeTab === "individual"
                    ? "bg-gradient-to-r from-piko-purple/10 to-piko-purple/5"
                    : "bg-gradient-to-r from-piko-violet/10 to-piko-violet/5"
                }`}
              >
                <h2 className="text-2xl md:text-3xl font-poppins font-bold text-piko-black">
                  Cash Deposits & Withdrawals
                </h2>
                <p className="text-piko-medium-grey mt-2">
                  Fees for cash transactions at agent locations
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-piko-soft-grey">
                    <tr>
                      <th className="text-left p-4 font-semibold text-piko-black">
                        Min
                      </th>
                      <th className="text-left p-4 font-semibold text-piko-black">
                        Max
                      </th>
                      <th className="text-left p-4 font-semibold text-piko-black">
                        Deposit Fee
                      </th>
                      <th className="text-left p-4 font-semibold text-piko-black">
                        Withdrawal Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-piko-soft-grey">
                    {(activeTab === "individual"
                      ? individualCashData
                      : businessCashData
                    ).map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-piko-soft-grey/50 transition-colors"
                      >
                        <td className="p-4 text-piko-medium-grey">{row.min}</td>
                        <td className="p-4 text-piko-medium-grey">{row.max}</td>
                        <td className="p-4">{formatValue(row.deposit)}</td>
                        <td className="p-4">{formatValue(row.withdraw)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="max-w-8xl mx-auto">
            <div className="bg-gradient-to-r from-piko-purple to-piko-violet rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl font-poppins font-bold">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-white/90">
                  Join thousands of users who trust PikoSend for their everyday
                  payments.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                  {/* <Link
                    to="https://app.pikosend.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white text-piko-purple rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2"
                  >
                    <span>Get Started for Free</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link> */}
                  {/* <Link
                    to="/contact"
                    className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold hover:bg-white/30 transition-colors duration-300"
                  >
                    Contact Sales
                  </Link> */}
                  <WaitingListCTA />
                </div>
                <div className="pt-6 border-t border-white/20">
                  <div className="flex items-center justify-center gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>No setup fees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Cancel anytime</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>24/7 support</span>
                    </div>
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

export default Pricing;
