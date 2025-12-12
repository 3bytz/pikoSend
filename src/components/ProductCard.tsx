import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LucideIcon,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Zap,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  image: string;
  isEven: boolean;
  tag?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  gradient,
  image,
  isEven,
  tag = "Most Popular",
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-4xl ${
        isVisible ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${isEven ? "0.1s" : "0.2s"}` }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5`}
      ></div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 ${
              gradient.includes("from-piko-purple")
                ? "bg-piko-purple"
                : "bg-piko-violet"
            } rounded-full opacity-20`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div
        className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center p-6 md:p-10 ${
          isEven ? "" : ""
        }`}
      >
        <div
          className={`space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isEven && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 rounded-full">
              <Sparkles className="w-4 h-4 text-piko-purple" />
              <span className="text-sm font-semibold text-piko-purple">
                {tag}
              </span>
            </div>
          )}

          <div className="flex items-center gap-4">
            <div className={`relative group`}>
              <div
                className={`absolute -inset-2 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}
              ></div>
              <div
                className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-piko-black">
              {title}
            </h2>
          </div>

          <p className="text-lg text-piko-medium-grey leading-relaxed max-w-xl">
            {description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 hover:border-piko-purple/30 transition-all duration-300 group"
              >
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm md:text-base font-medium text-piko-black">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              to="/contact"
              className={`group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${gradient} text-white rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 overflow-hidden`}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>

        <div className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
          <div className="relative group">
            {/* <div
              className={`absolute -inset-6 bg-gradient-to-r ${gradient} rounded-4xl opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700`}
            ></div> */}

            <div
              className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-2 md:p-4 shadow-2xl border-8 border-gray-900 overflow-hidden transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl
     max-w-[260px] md:max-w-[300px] lg:max-w-[330px] xl:max-w-[360px] mx-auto"
            >
              {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
              </div> */}

              <div className="relative aspect-[9/19.5] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 max-w-[260px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[380px] mx-auto">
                <img
                  src={image}
                  alt={title}
                  className={`w-full h-full object-contain p-2 md:p-4 transition-all duration-700 ${
                    isHovered ? "scale-105" : "scale-100"
                  }`}
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>

              {/* <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-800 rounded-full"></div> */}
            </div>

            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-piko-purple to-piko-violet text-white px-4 py-2 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-semibold">Try Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-piko-purple/20 to-transparent hidden lg:block ${
          isEven ? "" : "lg:hidden"
        }`}
      ></div>
    </div>
  );
};
