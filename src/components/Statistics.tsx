import React, { useEffect, useRef, useState } from 'react';
import { Section } from './Section';
import { Container } from './Container';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 500000, suffix: '+', label: 'Active Users' },
  { value: 150, suffix: '+', label: 'Countries Supported' },
  { value: 1000000000, suffix: '+', label: 'Total Transactions' },
  { value: 99, suffix: '%', label: 'Customer Satisfaction' },
];

const formatNumber = (num: number): string => {
  if (num >= 1000000000) {
    return `${(num / 1000000000).toFixed(1)}B`;
  }
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}K`;
  }
  return num.toString();
};

export const Statistics: React.FC = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, index) => {
      let currentCount = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.value) {
          currentCount = stat.value;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(currentCount);
          return newCounts;
        });
      }, interval);
    });
  }, [isVisible]);

  return (
    <Section background="white" className="border-t border-piko-soft-grey">
      <Container>
        <div ref={sectionRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-h2 font-poppins font-bold text-piko-black mb-4">
            Trusted by Thousands Worldwide
          </h2>
          <p className="text-piko-medium-grey text-lg max-w-2xl mx-auto">
            Join our growing community of users who rely on PikoSend for fast, secure, and affordable global payments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative inline-block mb-4">
                <div
                  className="absolute -inset-4 rounded-full blur-2xl opacity-10"
                  style={{ backgroundColor: index % 2 === 0 ? '#582C8D' : '#8B5CF6' }}
                ></div>
                <div className="relative text-4xl md:text-5xl font-bold text-piko-purple">
                  {formatNumber(counts[index])}
                  <span className="text-piko-lilac">{stat.suffix}</span>
                </div>
              </div>
              <p className="text-piko-medium-grey font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
