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
  image?: string;
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
    image: '/avatar.png',
  },
  {
    id: 2,
    name: 'John M.',
    avatar: '👨🏽‍💼',
    message: 'The fastest transfer I\'ve ever made',
    action: 'received $1,200',
    time: '5 seconds ago',
    rating: 5,
    image: '/avatar.png',
  },
  {
    id: 3,
    name: 'Sarah O.',
    avatar: '👩🏿‍💻',
    message: 'Love the virtual card feature!',
    action: 'created a card',
    time: '8 seconds ago',
    rating: 5,
    image: '/avatar.png',
  },
  {
    id: 4,
    name: 'David A.',
    avatar: '👨🏾‍🔧',
    message: 'Perfect for my business payments',
    action: 'sent $3,400',
    time: '12 seconds ago',
    rating: 5,
    image: '/avatar.png',
  },
  {
    id: 5,
    name: 'Grace N.',
    avatar: '👩🏽‍🎓',
    message: 'Super easy to use, even for beginners',
    action: 'topped up $100',
    time: '15 seconds ago',
    rating: 5,
    image: '/avatar.png',
  },
  {
    id: 6,
    name: 'Peter W.',
    avatar: '👨🏿‍💼',
    message: 'Best rates for international transfers',
    action: 'sent $850',
    time: '18 seconds ago',
    rating: 5,
    image: '/avatar.png',
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
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 text-piko-purple text-sm font-semibold rounded-full mb-6">
              <MessageCircle className="w-4 h-4" />
              Live Activity
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-piko-black mb-6">
              Join Our Network of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-piko-purple to-piko-violet mt-2">
                Happy Users
              </span>
            </h2>

            <p className="text-lg md:text-xl text-piko-medium-grey mb-8 leading-relaxed">
              Real people, real transactions, real results. See what our community is saying right now.
            </p>

            <div className="flex items-center gap-6 md:gap-8 mb-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-piko-black mb-1">4.9/5</div>
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 md:w-5 md:h-5 fill-piko-purple text-piko-purple" />
                  ))}
                </div>
                <div className="text-sm text-piko-medium-grey">Based on 50K+ reviews</div>
              </div>

              <div className="hidden md:block h-16 w-px bg-piko-soft-grey"></div>
              <div className="md:hidden w-12 h-px bg-piko-soft-grey"></div>

              <div>
                <div className="text-3xl md:text-4xl font-bold text-piko-black mb-1">500K+</div>
                <div className="text-sm text-piko-medium-grey">Active users</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white rounded-full border border-piko-soft-grey">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-piko-purple" />
                <span className="text-xs md:text-sm font-medium text-piko-black">Trusted & Secure</span>
              </div>
              <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white rounded-full border border-piko-soft-grey">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-piko-purple" />
                <span className="text-xs md:text-sm font-medium text-piko-black">Instant Transfers</span>
              </div>
              <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white rounded-full border border-piko-soft-grey">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-piko-purple" />
                <span className="text-xs md:text-sm font-medium text-piko-black">24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-piko-purple/20 to-piko-violet/20 rounded-2xl md:rounded-3xl blur-2xl"></div>

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

            <div className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 px-3 md:px-4 py-1 md:py-2 bg-piko-purple text-white text-xs md:text-sm font-medium rounded-full shadow-lg animate-pulse">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
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
      className={`bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border-2 border-piko-soft-grey transition-all duration-500 ${
        isNew ? 'animate-slide-down scale-100' : 'scale-95 opacity-90'
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start gap-3 md:gap-4">
       
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-piko-purple/30">
            {testimonial.image ? (
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-piko-purple/20 to-piko-violet/20 text-2xl">
                {testimonial.avatar}
              </div>
            )}
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2">
            <div className="mb-1 sm:mb-0">
              <div className="font-semibold text-piko-black text-sm md:text-base">{testimonial.name}</div>
              <div className="text-xs text-piko-light-grey">{testimonial.time}</div>
            </div>
            {testimonial.rating && (
              <div className="flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-piko-purple text-piko-purple" />
                ))}
              </div>
            )}
          </div>
          <p className="text-piko-medium-grey text-sm md:text-base mb-2 line-clamp-2">{testimonial.message}</p>
          <div className="inline-flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 rounded-full">
            <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-piko-purple" />
            <span className="text-xs md:text-sm font-medium text-piko-purple">{testimonial.action}</span>
          </div>
        </div>
      </div>
    </div>
  );
};