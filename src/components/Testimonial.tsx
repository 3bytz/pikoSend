import React from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { Star } from 'lucide-react';

export const Testimonial: React.FC = () => {
  return (
    <Section background="purple" className="mt-28">
      <Container>
        <div className="max-w-2xl mx-auto text-center animate-fade-up space-y-8">
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={28}
                className="fill-yellow-400 text-yellow-400"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>

          <blockquote>
            <p className="text-2xl md:text-3xl text-white leading-relaxed font-light">
              "PikoSend transformed how we handle international payments. The speed and transparency are unmatched. Highly recommend!"
            </p>
          </blockquote>

          <div className="pt-6">
            <p className="text-lg font-medium text-white">Sarah Johnson</p>
            <p className="text-sm text-white opacity-80">CEO, Global Commerce Inc</p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
