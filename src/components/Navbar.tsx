import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
    setDropdownTimeout(timeout);
  };

  const handleDropdownClick = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (href.startsWith('/')) {
      navigate(href);
    } else {
      window.location.href = href;
    }
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const navLinks: NavLink[] = [
    { label: 'Products', href: '/products' },
    { label: 'Features', href: '/features' },
    { label: 'For Business', href: '/business' },
    {
      label: 'Company',
      dropdown: [
        { label: 'About Us', href: '#mission', description: 'Our goals and values' },
        { label: 'Testimonials', href: '#testimonials', description: 'What our users say' },
        { label: 'News & Blog', href: '#blog', description: 'Latest updates' },
        { label: 'FAQs', href: '#faq', description: 'Get answers to common questions' },
      ],
    },
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
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-piko-purple">
              <img
                src="/faviconTr.png"
                alt="Personal use"
                className="w-full rounded-2xl shadow-lg"
                style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)' }}
              />
            </div>
            <span
              className={`font-poppins text-xl font-bold transition-colors ${
                isScrolled ? 'text-piko-purple' : 'text-white'
              }`}
            >
              PikoSend
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                ref={link.dropdown ? dropdownRef : null}
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
                onMouseLeave={link.dropdown ? handleMouseLeave : undefined}
              >
                {link.dropdown ? (
                  <>
                    <button
                      className={`font-medium transition-colors hover:text-piko-purple flex items-center gap-1 ${
                        isScrolled ? 'text-piko-black' : 'text-white'
                      } ${activeDropdown === link.label ? 'text-piko-purple' : ''}`}
                      onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                    >
                      {link.label}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    {activeDropdown === link.label && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl py-4 px-2 animate-fade-up"
                        onMouseEnter={() => handleMouseEnter(link.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {link.dropdown.map((item) => (
                       <a
  key={item.href}
  href={item.href}
  onClick={(e) => {
    e.preventDefault();
    handleDropdownClick(item.href);
  }}
  className="block w-full text-left px-4 py-3 rounded-lg hover:bg-piko-soft-grey transition-colors"
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
                ) : link.href?.startsWith('/') ? (
                  <Link
                    to={link.href}
                    className={`font-medium transition-colors hover:text-piko-purple ${
                      isScrolled ? 'text-piko-black' : 'text-white'
                    } ${location.pathname === link.href ? 'text-piko-purple' : ''}`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className={`font-medium transition-colors hover:text-piko-purple ${
                      isScrolled ? 'text-piko-black' : 'text-white'
                    }`}
                    onClick={(e) => {
                      if (link.href?.startsWith('#')) {
                        e.preventDefault();
                        if (location.pathname !== '/') {
                          navigate('/');
                          setTimeout(() => {
                            const element = document.querySelector(link.href as any);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }, 100);
                        } else {
                          const element = document.querySelector(link.href);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }
                    }}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* <button className={`font-medium transition-colors ${isScrolled ? 'text-piko-black hover:text-piko-purple' : 'text-white hover:text-piko-lilac'}`}>
              Login
            </button> */}
            <Link
            to={'/contact'}
              // variant="primary"
              // size="sm"
              target='_blank'
              className={!isScrolled ? 'bg-white py-3 px-4 rounded-lg border-0 text-piko-purple hover:bg-opacity-90' : 'bg-piko-purple py-3 px-4 rounded-md text-white hover:bg-opacity-90'}
            >
              Contact Us
            </Link>
          </div>

          <button
            className={`md:hidden ${isScrolled ? 'text-piko-black' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-piko-soft-grey bg-white rounded-lg">
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.label} className="flex flex-col gap-2">
                      <div className="font-medium text-piko-black mb-2">{link.label}</div>
                      <div className="flex flex-col gap-2 pl-4">
                        {link.dropdown.map((item) => (
                          <button
                            key={item.href}
                            onClick={() => handleDropdownClick(item.href)}
                            className="text-left py-2 px-3 rounded-lg hover:bg-piko-soft-grey transition-colors"
                          >
                            <div className="font-medium text-piko-black">{item.label}</div>
                            {item.description && (
                              <div className="text-sm text-piko-medium-grey">{item.description}</div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                }
                
                return link.href?.startsWith('/') ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`font-medium transition-colors text-piko-black hover:text-piko-purple ${
                      location.pathname === link.href ? 'text-piko-purple' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => {
                      if (link.href?.startsWith('#')) {
                        if (location.pathname !== '/') {
                          navigate('/');
                          setTimeout(() => {
                            const element = document.querySelector(link.href as any);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }, 100);
                        } else {
                          const element = document.querySelector(link.href);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }
                      setIsMobileMenuOpen(false);
                    }}
                    className="font-medium transition-colors text-piko-black hover:text-piko-purple text-left"
                  >
                    {link.label}
                  </button>
                );
              })}
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