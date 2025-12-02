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
            <h2 className="text-h2 text-piko-black font-poppins">
              Stay Updated on Payments
            </h2>
            <p className="text-body text-piko-medium-grey leading-relaxed">
              Get the latest updates, tips, and exclusive offers delivered to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field flex-1"
                  required
                />
                <Button variant="primary" size="md">
                  <Mail size={20} />
                </Button>
              </div>
              <p className="text-xs text-piko-light-grey">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
              alt="Newsletter"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
