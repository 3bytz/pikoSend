import React from "react";
import { Section } from "./Section";
import { Container } from "./Container";
import { Shield, Lock, CheckCircle, Award, Zap } from "lucide-react";

const trustFeatures = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description:
      "256-bit SSL encryption protects all your transactions and personal data",
    gradient: "from-blue-500 to-purple-600",
    accentColor: "text-blue-600",
    bgColor: "bg-blue-50",
    stat: "99.9%",
    statLabel: "Uptime",
    additionalInfo: "Real-time fraud detection",
    iconBg: "bg-blue-100",
  },
  {
    icon: Lock,
    title: "Regulatory Compliance",
    description: "Licensed and regulated in multiple jurisdictions worldwide",
    gradient: "from-emerald-500 to-cyan-600",
    accentColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    stat: "150+",
    statLabel: "Countries",
    additionalInfo: "Global coverage",
    iconBg: "bg-emerald-100",
  },
  {
    icon: CheckCircle,
    title: "Certified",
    description:
      "Meeting the highest international security standards for payment processing",
    gradient: "from-amber-500 to-orange-600",
    accentColor: "text-amber-600",
    bgColor: "bg-amber-50",
    stat: "Level 1",
    statLabel: "Certification",
    additionalInfo: "Highest security tier",
    iconBg: "bg-amber-100",
  },
  {
    icon: Award,
    title: "Insured Deposits",
    description:
      "Your funds are protected with comprehensive insurance coverage",
    gradient: "from-violet-500 to-pink-600",
    accentColor: "text-violet-600",
    bgColor: "bg-violet-50",
    stat: "$250K",
    statLabel: "Protection",
    additionalInfo: "Per account holder",
    iconBg: "bg-violet-100",
  },
];

export const TrustBadges: React.FC = () => {
  return (
    <Section
      background="white"
      className="border-y border-piko-soft-grey py-4 md:py-8 my-0"
    >
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 text-piko-purple text-sm font-semibold rounded-full mb-6">
            <Shield className="w-4 h-4" />
            Trust & Security
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-piko-black mb-4">
            Your Security is Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-piko-purple to-piko-violet">
              Priority
            </span>
          </h2>
          <p className="text-piko-medium-grey text-lg md:text-xl max-w-2xl mx-auto">
            We use industry-leading security measures to keep your money and
            data safe at all times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 md:p-7 border border-piko-soft-grey hover:border-transparent shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 animate-bounce"></div>
                  <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 opacity-40 animate-pulse"></div>
                </div>

                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 md:w-18 md:h-18 rounded-2xl ${feature.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                  >
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <Icon
                        className="w-6 h-6 md:w-7 md:h-7 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  <div
                    className={`absolute -inset-2 rounded-2xl border-2 ${feature.accentColor} border-opacity-0 group-hover:border-opacity-30 transition-all duration-700 group-hover:animate-pulse`}
                  ></div>
                </div>

                <div className="relative">
                  <h3 className="font-poppins font-bold text-piko-black text-xl md:text-2xl mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-piko-purple group-hover:to-piko-violet transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-piko-medium-grey text-sm md:text-base leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white to-gray-50 rounded-full border border-piko-soft-grey shadow-sm mb-4">
                    <Zap className="w-3 h-3 text-amber-500" />
                    <div>
                      <span
                        className={`font-bold ${feature.accentColor} text-lg`}
                      >
                        {feature.stat}
                      </span>
                      <span className="text-piko-medium-grey text-sm ml-1">
                        {feature.statLabel}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-piko-medium-grey">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{feature.additionalInfo}</span>
                  </div>
                </div>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
