import React, { useState } from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialData {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

const testimonials: TestimonialData[] = [
  {
    quote: "PikoSend transformed how we handle international payments. The speed and transparency are unmatched. Highly recommend!",
    author: "Sarah Johnson",
    role: "CEO, Global Commerce Inc",
    rating: 5,
  },
  {
    quote: "As a freelancer working with clients globally, PikoSend has been a game-changer. Getting paid is now instant and hassle-free.",
    author: "Michael Chen",
    role: "Freelance Designer",
    rating: 5,
  },
  {
    quote: "The multi-currency accounts saved me thousands in fees. Perfect for my e-commerce business dealing with international suppliers.",
    author: "Amara Okafor",
    role: "E-commerce Entrepreneur",
    rating: 5,
  },
];

export const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <Section background="purple" className="mt-28" id="about">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-8 px-4">
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
              {testimonials.map((_, index) => (
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
      </Container>
    </Section>
  );
};
