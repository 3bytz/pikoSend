import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  image: string;
  isEven: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  gradient,
  image,
  isEven,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
        isEven ? '' : 'lg:grid-flow-dense'
      }`}
    >
      <div className={`${isEven ? '' : 'lg:order-2'} ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} mb-6 shadow-lg`}>
          <Icon className="w-8 h-8 text-white" strokeWidth={2} />
        </div>

        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-piko-black mb-4">
          {title}
        </h2>

        <p className="text-lg text-piko-medium-grey mb-8 leading-relaxed">
          {description}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-piko-purple flex-shrink-0" />
              <span className="text-piko-black">{feature}</span>
            </div>
          ))}
        </div>

        <Link
          to="/contact"
          className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${gradient} text-white rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95`}
        >
          Get Started
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
        <div className="relative group">
          <div className={`absolute -inset-4 bg-gradient-to-r ${gradient} rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500`}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
