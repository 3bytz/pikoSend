import React, { useState } from "react";
import { LucideIcon, CheckCircle2, Sparkles, Zap } from "lucide-react";
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
        className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center p-3 md:p-6 ${
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
          
          {features.length > 0 && (
            <>
              <p className={`text-sm md:text-base font-bold text-piko-black ${isEven ? 'lg:text-left' : 'lg:text-left'}`}>
                Best For:{" "}
              </p>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 py-4 ${isEven ? 'lg:justify-items-start' : 'lg:justify-items-start'}`}>
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
            </>
          )}
        </div>

        <div className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl max-w-[260px] md:max-w-[300px] lg:max-w-[330px] xl:max-w-[360px] mx-auto">
              <div className="relative aspect-[9/19.5] overflow-hidden rounded-3xl">
                <img
                  src={image}
                  alt={title}
                  className={`w-full h-full object-contain transition-all duration-700 ${
                    isHovered ? "scale-105" : "scale-100"
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>
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