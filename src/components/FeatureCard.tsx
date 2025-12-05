import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: string;
  statsLabel: string;
  delay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  stats,
  statsLabel,
  delay = 0,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`group relative bg-white border-2 border-piko-soft-grey rounded-2xl p-8 transition-all duration-500 hover:border-piko-purple hover:shadow-2xl hover:-translate-y-2 ${
        isVisible ? 'animate-scale-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-piko-purple/5 to-piko-violet/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-piko-purple/10 to-piko-violet/10 mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-piko-purple" strokeWidth={2} />
        </div>

        <h3 className="text-xl font-poppins font-bold text-piko-black mb-3">
          {title}
        </h3>

        <p className="text-piko-medium-grey mb-6 leading-relaxed">
          {description}
        </p>

        <div className="pt-6 border-t border-piko-soft-grey">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-piko-purple to-piko-violet">
            {stats}
          </div>
          <div className="text-sm text-piko-light-grey mt-1">
            {statsLabel}
          </div>
        </div>
      </div>
    </div>
  );
};
