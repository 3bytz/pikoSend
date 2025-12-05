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
    <Section background="purple" className="md:mt-28" id="testimonials">
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
