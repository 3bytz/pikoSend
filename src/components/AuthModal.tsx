import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'signin' | 'signup';
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'signup' }) => {
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const { signUp, signIn } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { error } = mode === 'signup'
        ? await signUp(email, password)
        : await signIn(email, password);

      if (error) {
        setError(error.message);
      } else {
        setSuccess(true);
        setTimeout(() => {
          onClose();
          setEmail('');
          setPassword('');
          setSuccess(false);
        }, 2000);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-up">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-piko-soft-grey hover:bg-piko-medium-grey/20 flex items-center justify-center transition-colors"
        >
          <X size={20} className="text-piko-medium-grey" />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-poppins font-bold text-piko-black mb-2">
              {mode === 'signup' ? 'Create Your Account' : 'Welcome Back'}
            </h2>
            <p className="text-piko-medium-grey">
              {mode === 'signup'
                ? 'Join thousands using PikoSend for global payments'
                : 'Sign in to continue to your account'}
            </p>
          </div>

          {success ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-piko-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-3xl">✓</div>
              </div>
              <p className="text-piko-purple font-medium">
                {mode === 'signup' ? 'Account created successfully!' : 'Signed in successfully!'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-piko-black mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-piko-soft-grey rounded-xl focus:border-piko-purple focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-piko-black mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full px-4 py-3 border-2 border-piko-soft-grey rounded-xl focus:border-piko-purple focus:outline-none transition-colors"
                  placeholder="••••••••"
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-piko-purple text-white rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Please wait...' : mode === 'signup' ? 'Create Account' : 'Sign In'}
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => {
                    setMode(mode === 'signup' ? 'signin' : 'signup');
                    setError(null);
                  }}
                  className="text-piko-purple text-sm hover:underline"
                >
                  {mode === 'signup'
                    ? 'Already have an account? Sign in'
                    : "Don't have an account? Sign up"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
