import React, { useState, useEffect } from 'react';
import { Container } from './Container';
import { Button } from './Button';
import { Send, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Personal', href: '#personal' },
    { label: 'Business', href: '#business' },
    { label: 'About', href: '#about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-piko-purple">
              <Send size={20} className="text-white" />
            </div>
            <span
              className={`font-poppins text-xl font-bold transition-colors ${
                isScrolled ? 'text-piko-purple' : 'text-white'
              }`}
            >
              PikoSend
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-piko-purple ${
                  isScrolled ? 'text-piko-black' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant={isScrolled ? 'secondary' : 'primary'}
              size="sm"
              className={!isScrolled ? 'bg-white text-piko-purple hover:bg-opacity-90' : ''}
            >
              Get Started
            </Button>
          </div>

          <button
            className={`md:hidden ${isScrolled ? 'text-piko-black' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-piko-soft-grey">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors ${
                    isScrolled ? 'text-piko-black' : 'text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="primary" size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};
