import React, { useState } from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { Button } from './Button';
import { Mail } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <Section background="white" className="border-t border-piko-soft-grey">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up space-y-6">
            <h2 className="text-3xl md:text-h2 text-piko-black font-poppins">
              Stay Updated on Payments
            </h2>
            <p className="text-base text-piko-medium-grey leading-relaxed">
              Get the latest updates, tips, and exclusive offers delivered to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 pr-32 rounded-full border-2 border-piko-soft-grey focus:border-piko-purple focus:outline-none transition-colors text-base"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-piko-purple text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] flex items-center gap-2"
                >
                  <Mail size={18} />
                </button>
              </div>
              <p className="text-xs text-piko-light-grey">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop"
              alt="Happy couple"
              className="w-full rounded-2xl shadow-lg"
              style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)' }}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
