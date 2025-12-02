import React from 'react';
import { Send } from 'lucide-react';

interface NotificationCardProps {
  icon?: React.ReactNode;
  title: string;
  message: string;
  time?: string;
  className?: string;
}

export const NotificationCard: React.FC<NotificationCardProps> = ({
  icon,
  title,
  message,
  time,
  className = '',
}) => {
  return (
    <div
      className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 shadow-2xl max-w-sm animate-fade-up ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-piko-purple flex items-center justify-center">
          {icon || <Send size={20} className="text-white" />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <p className="text-white font-medium text-sm">{title}</p>
            {time && (
              <span className="text-white/60 text-xs whitespace-nowrap">{time}</span>
            )}
          </div>
          <p className="text-white/80 text-sm leading-relaxed">{message}</p>
        </div>
      </div>
    </div>
  );
};
