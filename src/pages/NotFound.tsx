import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Container } from '../components/Container';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-piko-purple/10 via-white to-piko-violet/10 flex items-center justify-center px-4">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 animate-fade-up">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-piko-purple to-piko-violet mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-piko-black mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-piko-medium-grey mb-8">
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-piko-purple text-white rounded-full font-medium transition-all duration-300 hover:bg-piko-plum hover:shadow-lg"
            >
              <Home size={20} />
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-piko-purple text-piko-purple rounded-full font-medium transition-all duration-300 hover:bg-piko-purple hover:text-white"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>

          <div className="mt-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-piko-medium-grey mb-4">Need help finding something?</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/features"
                className="text-piko-purple hover:text-piko-plum font-medium transition-colors"
              >
                Features
              </Link>
              <span className="text-piko-light-grey">•</span>
              <Link
                to="/products"
                className="text-piko-purple hover:text-piko-plum font-medium transition-colors"
              >
                Products
              </Link>
              <span className="text-piko-light-grey">•</span>
              <Link
                to="/business"
                className="text-piko-purple hover:text-piko-plum font-medium transition-colors"
              >
                For Business
              </Link>
              <span className="text-piko-light-grey">•</span>
              <Link
                to="/contact"
                className="text-piko-purple hover:text-piko-plum font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
