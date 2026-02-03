import React, { useState, useEffect } from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface LiveTestimonial {
  id: number;
  name: string;
  avatar: string;
  message: string;
  action: string;
  time: string;
  rating: number;
  image?: string;
}

interface DetailedTestimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

const detailedTestimonials: DetailedTestimonial[] = [
  {
    quote: "PikoSend has transformed how I handle payments for my business. The instant transfers and low fees make it perfect for my daily operations. I can now pay suppliers and receive payments from customers without any hassle.",
    author: "Alex Mwangi",
    role: "Business Owner",
    rating: 5,
  },
  {
    quote: "As a freelancer, receiving payments from clients across Africa used to be a nightmare. With PikoSend, I get paid instantly and the fees are transparent. It's been a game-changer for my work.",
    author: "Grace Wanjiru",
    role: "Freelance Designer",
    rating: 5,
  },
  {
    quote: "The ability to buy airtime and pay bills directly through PikoSend saves me so much time. Everything I need for my daily transactions is in one place. The app is so easy to use!",
    author: "David Ochieng",
    role: "Small Business Owner",
    rating: 5,
  },
];

const liveTestimonials: LiveTestimonial[] = [
  {
    id: 1,
    name: 'Amina K.',
    avatar: '👩🏾‍💼',
    message: 'Just sent money to my family!',
    action: 'sent 500',
    time: '2 seconds ago',
    rating: 5,
    image: '/avatar.png',
  },
  {
    id: 2,
    name: 'John M.',
    avatar: '👨🏽‍💼',
    message: 'The fastest transfer I\'ve ever made',
    action: 'received 1,200',
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
    action: 'sent 3,400',
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
    action: 'sent 850',
    time: '18 seconds ago',
    rating: 5,
    image: '/avatar.png',
  },
];

export const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleLiveTestimonials, setVisibleLiveTestimonials] = useState<LiveTestimonial[]>([]);


  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % detailedTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + detailedTestimonials.length) % detailedTestimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLiveTestimonials((prev) => {
        const nextIndex = (prev.length > 0 ? liveTestimonials.indexOf(prev[0]) + 1 : 0) % liveTestimonials.length;
        const newTestimonial = liveTestimonials[nextIndex];
        const updated = [newTestimonial, ...prev].slice(0, 3);
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const current = detailedTestimonials[currentIndex];

  return (
    <Section background="purple" className="md:mt-18 " id="testimonials">
      <Container>
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="max-w-3xl mx-auto space-y-8 px-4">
              <div className="flex justify-center gap-1.5">
                {[...Array(current.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className="fill-yellow-400 text-yellow-400 md:w-7 md:h-7 animate-fade-up"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              <blockquote key={currentIndex} className="animate-fade-up">
                <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-light">
                  "{current.quote}"
                </p>
              </blockquote>

              <div className="pt-6 animate-fade-up">
                <p className="text-base md:text-lg font-medium text-white">{current.author}</p>
                <p className="text-sm text-white opacity-80">{current.role}</p>
              </div>

              <div className="flex items-center justify-center gap-4 pt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all"
                >
                  <ChevronLeft className="text-white" size={20} />
                </button>

                <div className="flex gap-2">
                  {detailedTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex ? 'bg-white w-6' : 'bg-white bg-opacity-30'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all"
                >
                  <ChevronRight className="text-white" size={20} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-semibold text-white">Live Activity</h3>
              </div>

              <div className="space-y-4">
                {visibleLiveTestimonials.length === 0 ? (
                  liveTestimonials.slice(0, 3).map((testimonial, index) => (
                    <LiveTestimonialCard key={testimonial.id} testimonial={testimonial} delay={index * 0.2} />
                  ))
                ) : (
                  visibleLiveTestimonials.map((testimonial, index) => (
                    <LiveTestimonialCard
                      key={`${testimonial.id}-${index}`}
                      testimonial={testimonial}
                      isNew={index === 0}
                    />
                  ))
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-white/20">
                <div className="flex items-center justify-center gap-3">
                  <div className="text-sm text-white/70">See more on</div>
                  <div className="flex gap-2">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                       className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition">
                      <span className="text-xs font-bold text-white">𝕏</span>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                       className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition">
                      <span className="text-xs font-bold text-white">f</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

interface LiveTestimonialCardProps {
  testimonial: LiveTestimonial;
  delay?: number;
  isNew?: boolean;
}

const LiveTestimonialCard: React.FC<LiveTestimonialCardProps> = ({ testimonial, delay = 0, isNew = false }) => {
  return (
    <div
      className={`bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 transition-all duration-500 ${
        isNew ? 'animate-slide-down scale-100 border-piko-lilac/30' : 'scale-95 opacity-90'
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start gap-3">
        <div className="relative flex-shrink-0">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-piko-lilac/30">
            {testimonial.image ? (
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-piko-purple/20 to-piko-violet/20 text-lg">
                {testimonial.avatar}
              </div>
            )}
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="font-semibold text-white text-sm">{testimonial.name}</div>
              <div className="text-xs text-white/60">{testimonial.time}</div>
            </div>
            <div className="flex gap-0.5">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <p className="text-white/90 text-sm mb-2">{testimonial.message}</p>
          <div className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-piko-lilac/20 to-piko-purple/20 rounded-full">
            <CheckCircle2 className="w-3 h-3 text-piko-lilac" />
            <span className="text-xs font-medium text-piko-lilac">{testimonial.action}</span>
          </div>
        </div>
      </div>
    </div>
  );
};