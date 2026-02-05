import React from 'react';
import { Apple, Play } from 'lucide-react';
import { WaitingListCTA } from './WaitingList/WaitingListCTA';

interface AppStoreBadgesProps {
  variant?: 'default' | 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const AppStoreBadges: React.FC<AppStoreBadgesProps> = ({
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-3',
    lg: 'px-8 py-4 text-lg gap-4',
  };

  const iconSizes = {
    sm: 18,
    md: 24,
    lg: 28,
  };

  const variantClasses = {
    default: 'bg-piko-black text-white hover:bg-piko-black/90',
    dark: 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20',
    light: 'bg-white text-piko-black border border-gray-200 hover:shadow-lg',
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      
      <a
        href="https://apps.apple.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${sizeClasses[size]} ${variantClasses[variant]}`}
      >
        <Apple size={iconSizes[size]} />
        <div className="flex flex-col items-start">
          <span className="text-xs opacity-80">Download on the</span>
          <span className="font-bold">App Store</span>
        </div>
      </a>

      <a
        href="https://play.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${sizeClasses[size]} ${variantClasses[variant]}`}
      >
        <Play size={iconSizes[size]} />
        <div className="flex flex-col items-start">
          <span className="text-xs opacity-80">Get it on</span>
          <span className="font-bold">Google Play</span>
        </div>
      </a>
      <WaitingListCTA />
    </div>
  );
};
