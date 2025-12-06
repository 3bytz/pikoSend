import React, { useState, useEffect } from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { CheckCircle2, MessageCircle, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  message: string;
  action: string;
  time: string;
  rating?: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Amina K.',
    avatar: '👩🏾‍💼',
    message: 'Just sent money to my family in Lagos!',
    action: 'sent $500',
    time: '2 seconds ago',
    rating: 5,
  },
  {
    id: 2,
    name: 'John M.',
    avatar: '👨🏽‍💼',
    message: 'The fastest transfer I\'ve ever made',
    action: 'received $1,200',
    time: '5 seconds ago',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sarah O.',
    avatar: '👩🏿‍💻',
    message: 'Love the virtual card feature!',
    action: 'created a card',
    time: '8 seconds ago',
    rating: 5,
  },
  {
    id: 4,
    name: 'David A.',
    avatar: '👨🏾‍🔧',
    message: 'Perfect for my business payments',
    action: 'sent $3,400',
    time: '12 seconds ago',
    rating: 5,
  },
  {
    id: 5,
    name: 'Grace N.',
    avatar: '👩🏽‍🎓',
    message: 'Super easy to use, even for beginners',
    action: 'topped up $100',
    time: '15 seconds ago',
    rating: 5,
  },
  {
    id: 6,
    name: 'Peter W.',
    avatar: '👨🏿‍💼',
    message: 'Best rates for international transfers',
    action: 'sent $850',
    time: '18 seconds ago',
    rating: 5,
  },
];

export const LiveTestimonials: React.FC = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % testimonials.length;
        setVisibleTestimonials((prev) => {
          const newTestimonial = testimonials[nextIndex];
          const updated = [newTestimonial, ...prev].slice(0, 3);
          return updated;
        });
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section background="soft-grey" id="testimonials">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 text-piko-purple text-sm font-semibold rounded-full mb-6">
              <MessageCircle className="w-4 h-4" />
              Live Activity
            </div>

            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-piko-black mb-6">
              Join Thousands of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-piko-purple to-piko-violet mt-2">
                Happy Users
              </span>
            </h2>

            <p className="text-xl text-piko-medium-grey mb-8 leading-relaxed">
              Real people, real transactions, real results. See what our community is saying right now.
            </p>

            <div className="flex items-center gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-piko-black mb-1">4.9/5</div>
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-piko-purple text-piko-purple" />
                  ))}
                </div>
                <div className="text-sm text-piko-medium-grey">Based on 50K+ reviews</div>
              </div>

              <div className="h-16 w-px bg-piko-soft-grey"></div>

              <div>
                <div className="text-4xl font-bold text-piko-black mb-1">500K+</div>
                <div className="text-sm text-piko-medium-grey">Active users</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-piko-soft-grey">
                <CheckCircle2 className="w-5 h-5 text-piko-purple" />
                <span className="text-sm font-medium text-piko-black">Trusted & Secure</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-piko-soft-grey">
                <CheckCircle2 className="w-5 h-5 text-piko-purple" />
                <span className="text-sm font-medium text-piko-black">Instant Transfers</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-piko-soft-grey">
                <CheckCircle2 className="w-5 h-5 text-piko-purple" />
                <span className="text-sm font-medium text-piko-black">24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-piko-purple/20 to-piko-violet/20 rounded-3xl blur-2xl"></div>

            <div className="relative space-y-4">
              {visibleTestimonials.length === 0 ? (
                testimonials.slice(0, 3).map((testimonial, index) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} delay={index * 0.2} />
                ))
              ) : (
                visibleTestimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={`${testimonial.id}-${index}`}
                    testimonial={testimonial}
                    isNew={index === 0}
                  />
                ))
              )}
            </div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-piko-purple text-white text-sm font-medium rounded-full shadow-lg animate-pulse">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Live updates
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  delay?: number;
  isNew?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, delay = 0, isNew = false }) => {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-lg border-2 border-piko-soft-grey transition-all duration-500 ${
        isNew ? 'animate-slide-down scale-100' : 'scale-95 opacity-90'
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="text-4xl flex-shrink-0">{testimonial.avatar}</div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="font-semibold text-piko-black">{testimonial.name}</div>
              <div className="text-xs text-piko-light-grey">{testimonial.time}</div>
            </div>
            {testimonial.rating && (
              <div className="flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-piko-purple text-piko-purple" />
                ))}
              </div>
            )}
          </div>
          <p className="text-piko-medium-grey mb-2">{testimonial.message}</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-piko-purple" />
            <span className="text-sm font-medium text-piko-purple">{testimonial.action}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const style = document.createElement('style');
style.textContent = `
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-slide-down {
    animation: slide-down 0.5s ease-out forwards;
  }
`;
document.head.appendChild(style);
