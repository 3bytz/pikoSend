import React, { useState } from "react";
import { Section } from "./Section";
import { Container } from "./Container";
import { CheckCircle2, Users, Briefcase } from "lucide-react";


const personalFeatures = [
  "Send money instantly to a phone number",
  "Pay at shops and service points using QR codes (Tap & Go)",
  "Create multiple wallets to separate spending and savings",
  "Send money directly to bank accounts",
  "Receive money safely from other networks"
];

const businessFeatures = [
  "Team payment management",
  "API integration ready",
  "Dedicated business support",
  "Bulk payment processing",
  "Invoice generation",
];

export const PersonalBusiness: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"personal" | "business">(
    "personal",
  );

  return (
    <Section
      background="white"
      className="border-t border-piko-soft-grey py-6 md:py-14 px-2"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 ">
          <div className="lg:col-span-1 lg:sticky lg:top-24 self-start lg:h-[calc(100vh-100px)] lg:overflow-hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[400px] lg:h-full">
              <img
                src="/new/business_team_account_bulk.jpeg"
                alt="PikoSend Platform"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-piko-plum/90 via-piko-purple/30 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Users className="text-white" size={24} />
                    </div>
                    <div className="text-white">
                      <div className="text-2xl font-bold">500K+</div>
                      <div className="text-sm opacity-90">Active Users</div>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm md:text-base">
                    One platform, endless possibilities for both individuals and
                    businesses across Africa.
                  </p>
                </div>
              </div>

              <div className="absolute top-6 left-6 px-4 py-2 bg-white rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-piko-purple">
                    Trusted Platform
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-piko-black mb-4">
                Designed for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-piko-purple to-piko-violet">
                  Everyday Use
                </span>
              </h2>
              <p className="text-lg text-piko-medium-grey max-w-2xl">
                Whether you are running a business or simply want to manage your
                personal finances better, we provide you with options you need
                for seamless everyday use.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 md:gap-4">
              <button
                onClick={() => setActiveTab("personal")}
                className={`flex-1 md:flex-none flex items-center justify-center gap-3 px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                  activeTab === "personal"
                    ? "border-piko-purple bg-piko-purple text-white shadow-lg"
                    : "border-piko-soft-grey bg-white text-piko-medium-grey hover:border-piko-purple hover:text-piko-purple"
                }`}
              >
                <Users size={20} />
                <span className="font-semibold">Personal Use</span>
              </button>
              <button
                onClick={() => setActiveTab("business")}
                className={`flex-1 md:flex-none flex items-center justify-center gap-3 px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                  activeTab === "business"
                    ? "border-piko-violet bg-piko-violet text-white shadow-lg"
                    : "border-piko-soft-grey bg-white text-piko-medium-grey hover:border-piko-violet hover:text-piko-violet"
                }`}
              >
                <Briefcase size={20} />
                <span className="font-semibold">For Business</span>
              </button>
            </div>

            <div className="space-y-8 md:space-y-12">
              {activeTab === "personal" && (
                <div
                  className={`bg-gradient-to-br from-piko-purple/5 to-transparent rounded-2xl p-6 md:p-8 border-2 transition-all duration-500 border-piko-purple/30 opacity-100`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-piko-purple to-piko-purple/80 flex items-center justify-center">
                      <Users className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-poppins font-bold text-piko-black">
                        What You Can Do With PikoSend
                      </h3>
                      <p className="text-piko-medium-grey">
                        Perfect for your everyday financial needs
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-2">
                    {personalFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-white rounded-xl border border-piko-soft-grey hover:border-piko-purple hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-piko-purple/10 flex items-center justify-center">
                          <CheckCircle2
                            className="w-5 h-5 text-piko-purple"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-piko-black mb-1">
                            {feature.split(" ")[0]}
                          </h4>
                          <p className="text-sm text-piko-medium-grey">
                            {feature}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-piko-soft-grey">
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-piko-purple to-piko-violet flex items-center justify-center text-white font-bold">
                          ✓
                        </div>
                        <div>
                          <div className="text-lg font-bold text-piko-black">
                            Get Started Today
                          </div>
                          <div className="text-sm text-piko-medium-grey">
                            Fast and easy setup
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "business" && (
                <div
                  className={`bg-gradient-to-br from-piko-violet/5 to-transparent rounded-2xl p-6 md:p-8 border-2 transition-all duration-500 border-piko-violet/30 opacity-100`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-piko-violet to-piko-violet/80 flex items-center justify-center">
                      <Briefcase className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-poppins font-bold text-piko-black">
                        Business Solutions
                      </h3>
                      <p className="text-piko-medium-grey">
                        Scale your business with powerful financial tools
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-2">
                    {businessFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-white rounded-xl border border-piko-soft-grey hover:border-piko-violet hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-piko-violet/10 flex items-center justify-center">
                          <CheckCircle2
                            className="w-5 h-5 text-piko-violet"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-piko-black mb-1">
                            {feature.split(" ")[0]}
                          </h4>
                          <p className="text-sm text-piko-medium-grey">
                            {feature}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-piko-soft-grey">
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-piko-violet to-piko-purple flex items-center justify-center text-white font-bold">
                          ⚡
                        </div>
                        <div>
                          <div className="text-lg font-bold text-piko-black">
                            Dedicated Support
                          </div>
                          <div className="text-sm text-piko-medium-grey">
                            24/7 business assistance
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-gradient-to-r from-piko-purple to-piko-violet rounded-2xl p-6 md:p-8 text-white">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      One Platform, Multiple Solutions
                    </h3>
                    <p className="opacity-90">
                      Switch between personal and business modes seamlessly
                    </p>
                  </div>
                  <div className="flex gap-4">
                    
                    <button className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-medium hover:bg-white/30 transition-colors">
                      Get on AppStore
                    </button>
                    <button className="px-6 py-3 bg-white text-piko-purple rounded-full font-medium hover:bg-white/90 transition-colors">
                      Get on Google Play
                    </button>
                    {/* <WaitingListCTA /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
