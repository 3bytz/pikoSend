import React, { useState, useEffect } from 'react';
import { Container } from './Container';
import { Button } from './Button';
import { Send, Menu, X, ChevronDown } from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavLink {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    {
      label: 'Personal',
      dropdown: [
        { label: 'Global Accounts', href: '#accounts', description: 'Receive money from anywhere' },
        { label: 'Send Money', href: '#send', description: 'Transfer funds globally' },
        { label: 'Cards', href: '#cards', description: 'Virtual and physical cards' },
      ],
    },
    {
      label: 'Business',
      dropdown: [
        { label: 'Business Accounts', href: '#business', description: 'Manage team payments' },
        { label: 'API Integration', href: '#api', description: 'Build with PikoSend' },
        { label: 'Invoicing', href: '#invoicing', description: 'Professional invoices' },
      ],
    },
    {
      label: 'Products',
      dropdown: [
        { label: 'Mobile App', href: '#app', description: 'iOS and Android' },
        { label: 'Web Platform', href: '#web', description: 'Manage from anywhere' },
        { label: 'Developer Tools', href: '#tools', description: 'APIs and SDKs' },
      ],
    },
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
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <>
                    <button
                      className={`font-medium transition-colors hover:text-piko-purple flex items-center gap-1 ${
                        isScrolled ? 'text-piko-black' : 'text-white'
                      }`}
                    >
                      {link.label}
                      <ChevronDown size={16} className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl py-4 px-2 animate-fade-up">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-3 rounded-lg hover:bg-piko-soft-grey transition-colors"
                          >
                            <div className="font-medium text-piko-black">{item.label}</div>
                            {item.description && (
                              <div className="text-sm text-piko-medium-grey mt-1">{item.description}</div>
                            )}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className={`font-medium transition-colors hover:text-piko-purple ${
                      isScrolled ? 'text-piko-black' : 'text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className={`font-medium transition-colors ${isScrolled ? 'text-piko-black hover:text-piko-purple' : 'text-white hover:text-piko-lilac'}`}>
              Login
            </button>
            <Button
              variant="primary"
              size="sm"
              className={!isScrolled ? 'bg-white text-piko-purple hover:bg-opacity-90' : ''}
            >
              Create Account
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
