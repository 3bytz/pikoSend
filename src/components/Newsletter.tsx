import React, { useState } from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { Button } from './Button';
import { Mail, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email, subscribed_at: new Date().toISOString() }]);

      if (error) throw error;

      setSuccess(true);
      setEmail('');
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      if (err.code === '23505') {
        setError('This email is already subscribed');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
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
              {success && (
                <div className="flex items-center gap-2 p-3 bg-piko-purple/10 text-piko-purple rounded-lg">
                  <CheckCircle size={20} />
                  <span className="text-sm font-medium">Successfully subscribed!</span>
                </div>
              )}
              {error && (
                <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                  {error}
                </div>
              )}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 pr-32 rounded-full border-2 border-piko-soft-grey focus:border-piko-purple focus:outline-none transition-colors text-base disabled:opacity-50"
                  required
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-piko-purple text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] flex items-center gap-2 disabled:opacity-50"
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
              src="/heroImageUpdated.png"
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
