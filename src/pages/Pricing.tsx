import React, { useState, useEffect } from "react";
import { Navbar, Footer, SEO, AppStoreBadges } from "../components";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import {
  CreditCard,
  Users,
  Building2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface TransferFee {
  min: number;
  max: number;
  pikosend?: number;
  pikosendSend?: number;
  pikosendReceive?: number;
  otherMobileMoney: number | null;
  dtbAccount: number | null;
  pesalink: number;
}

interface CashTransaction {
  min: number;
  max: number;
  deposit: number;
  withdraw: number | null;
}

interface CustomerType {
  monthlyFee: number;
  transfers: TransferFee[];
  cashDepositsWithdrawals: CashTransaction[];
}

interface PricingData {
  currency: string;
  customerTypes: {
    organisations: CustomerType;
    individual: CustomerType;
  };
}

export const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"individual" | "business">(
    "individual",
  );
  const [pricingData, setPricingData] = useState<PricingData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://static.dev.futurizac.io/service-prices",
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: PricingData = await response.json();
        setPricingData(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching pricing data:", err);
        setError("Failed to load pricing data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPricingData();
  }, []);

  const formatValue = (value: string | number | null) => {
    if (value === null)
      return <span className="text-red-500 font-medium">Not Allowed</span>;
    if (value === "Free" || value === 0)
      return <span className="text-emerald-600 font-semibold">KES 0</span>;
    if (typeof value === "number")
      return <span className="text-piko-black font-medium">KES {value}</span>;
    if (value === "Not Applicable")
      return <span className="text-piko-medium-grey">N/A</span>;

    return <span className="text-piko-black font-medium">{value}</span>;
  };

  const getCurrentCustomerType = () => {
    if (!pricingData) return null;
    return activeTab === "individual"
      ? pricingData.customerTypes.individual
      : pricingData.customerTypes.organisations;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-piko-purple border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-piko-medium-grey">Loading pricing data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="text-red-500 text-2xl">⚠️</div>
          </div>
          <h3 className="text-xl font-semibold text-piko-black mb-2">
            Unable to load pricing
          </h3>
          <p className="text-piko-medium-grey">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-piko-purple text-white rounded-full hover:bg-piko-violet transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!pricingData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-piko-medium-grey">No pricing data available</p>
        </div>
      </div>
    );
  }

  const customerType = getCurrentCustomerType();
  if (!customerType) return null;

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
                        {pricingData.currency} {customerType.monthlyFee}
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
                      All amounts in {pricingData.currency}
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
                    {customerType.transfers.map((row, idx) => (
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
                              {formatValue(row.pikosend as any)}
                            </td>
                            <td className="p-4">
                              {formatValue(row.otherMobileMoney)}
                            </td>
                            <td className="p-4">
                              {formatValue(row.dtbAccount)}
                            </td>
                            <td className="p-4">{formatValue(row.pesalink)}</td>
                          </>
                        ) : (
                          <>
                            <td className="p-4">
                              {formatValue(row.pikosendSend as any)}
                            </td>
                            <td className="p-4">
                              {formatValue(row.pikosendReceive as any)}
                            </td>
                            <td className="p-4">
                              {formatValue(row.otherMobileMoney)}
                            </td>
                            <td className="p-4">
                              {formatValue(row.dtbAccount)}
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
                    {customerType.cashDepositsWithdrawals.map((row, idx) => (
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
                  <div className="pt-6 pb-16 md:pb-20 lg:pb-24">
                    <p className="text-sm text-white/70 mb-4">
                      Get the app and start now
                    </p>
                    <AppStoreBadges variant="dark" size="md" />
                  </div>
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
