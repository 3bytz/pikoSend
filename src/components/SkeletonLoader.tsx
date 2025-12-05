import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'text',
  width,
  height,
  animation = 'pulse',
}) => {
  const baseClasses = 'bg-gray-200';
  const animationClass = animation === 'pulse' ? 'animate-pulse' : 'animate-shimmer';

  const variantClasses = {
    text: 'rounded h-4',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  const style: React.CSSProperties = {
    width: width || undefined,
    height: height || undefined,
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${animationClass} ${className}`}
      style={style}
      role="status"
      aria-label="Loading..."
    />
  );
};

interface CardSkeletonProps {
  count?: number;
}

export const CardSkeleton: React.FC<CardSkeletonProps> = ({ count = 3 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm p-6">
          <Skeleton variant="rectangular" height={192} className="mb-4" />
          <Skeleton width="60%" className="mb-2" />
          <Skeleton width="40%" className="mb-4" />
          <Skeleton width="100%" height={60} className="mb-4" />
          <Skeleton width="30%" />
        </div>
      ))}
    </div>
  );
};

interface ListSkeletonProps {
  rows?: number;
}

export const ListSkeleton: React.FC<ListSkeletonProps> = ({ rows = 5 }) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg">
          <Skeleton variant="circular" width={48} height={48} />
          <div className="flex-1 space-y-2">
            <Skeleton width="70%" />
            <Skeleton width="40%" />
          </div>
        </div>
      ))}
    </div>
  );
};

export const FormSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton width="30%" className="mb-2" />
        <Skeleton variant="rectangular" height={48} />
      </div>
      <div>
        <Skeleton width="30%" className="mb-2" />
        <Skeleton variant="rectangular" height={48} />
      </div>
      <div>
        <Skeleton width="30%" className="mb-2" />
        <Skeleton variant="rectangular" height={120} />
      </div>
      <Skeleton variant="rectangular" height={48} width={150} />
    </div>
  );
};
