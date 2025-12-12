import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'soft-grey' | 'purple' | 'lilac';
  id?: string;
  style?: React.CSSProperties; 
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  id,
  style = {},
}) => {
  const bgClass = {
    white: 'bg-white',
    'soft-grey': 'bg-piko-soft-grey',
    purple: 'bg-piko-purple',
    lilac: 'bg-piko-lilac bg-opacity-5',
  }[background];

  return (
    <section 
      id={id} 
      className={`${bgClass} section-spacing ${className}`}
      style={style}
    >
      <div className="container-custom">{children}</div>
    </section>
  );
};