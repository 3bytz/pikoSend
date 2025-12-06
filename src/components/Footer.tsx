import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from './Container';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleInternalLink = (href: string) => {
    if (href.startsWith('#')) {
      if (window.location.pathname !== '/') {
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
    } else {
      navigate(href);
    }
  };

  // Match exactly what's in the navbar
  const ProductsLinks = [
    { label: 'Send Money', href: '/products#send-money' },
    { label: 'Global Accounts', href: '/products#accounts' },
    { label: 'Cards', href: '/products#cards' },
    { label: 'All Products', href: '/products' },
  ];

  const BusinessLinks = [
    { label: 'Business Accounts', href: '/business' },
    { label: 'API Integration', href: '/business#api' },
    { label: 'Invoicing', href: '/business#invoicing' },
    { label: 'Business Tools', href: '/business#tools' },
  ];

  const CompanyLinks = [
    { label: 'About Us', href: '#mission' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'News & Blog', href: '#blog' },
    { label: 'FAQs', href: '#faq' },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', link: "https://web.facebook.com/profile.php?id=61583837009742" },
    { icon: Twitter, label: 'Twitter', link: "https://x.com/Pikosend" },
    { icon: Linkedin, label: 'LinkedIn', link: "https://www.linkedin.com/in/pikosend-ke-038902397/" },
    { icon: Instagram, label: 'Instagram', link: "https://www.instagram.com/pikosend.ke/" },
  ];

  return (
    <footer className="bg-piko-plum text-white">
      <Container className="pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-piko-purple">
                    <img
                      src="/faviconTr.png"
                      alt="PikoSend Logo"
                      className="w-full rounded-2xl shadow-lg"
                      style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)' }}
                    />
                  </div>
                </div>
                <span className="font-poppins text-xl font-bold">PikoSend</span>
              </Link>
            </div>
            <p className="text-sm opacity-80 leading-relaxed max-w-sm">
              Empowering Africa through financial inclusion. Making payments simple, fast, and accessible for everyone.
            </p>

            <div className="space-y-2 pt-2">
              <a href="tel:+254706525135" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition">
                <Phone size={14} />
                <span>+254 (706) 525 135</span>
              </a>
              <a href="mailto:info@pikosend.co.ke" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition">
                <Mail size={14} />
                <span>info@pikosend.co.ke</span>
              </a>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <MapPin size={14} />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Products</h4>
            <ul className="space-y-3 text-sm opacity-80">
              {ProductsLinks.map((item) => (
                <li key={item.href}>
                  {item.href.startsWith('/') ? (
                    <Link
                      to={item.href}
                      className="hover:text-piko-lilac hover:opacity-100 transition"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleInternalLink(item.href)}
                      className="hover:text-piko-lilac hover:opacity-100 transition text-left"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Business</h4>
            <ul className="space-y-3 text-sm opacity-80">
              {BusinessLinks.map((item) => (
                <li key={item.href}>
                  {item.href.startsWith('/') ? (
                    <Link
                      to={item.href}
                      className="hover:text-piko-lilac hover:opacity-100 transition"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleInternalLink(item.href)}
                      className="hover:text-piko-lilac hover:opacity-100 transition text-left"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm opacity-80">
              {CompanyLinks.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleInternalLink(item.href)}
                    className="hover:text-piko-lilac hover:opacity-100 transition text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="hover:text-piko-lilac hover:opacity-100 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-10 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, link }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white bg-opacity-10 hover:bg-piko-lilac hover:bg-opacity-100 transition-all hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <div className="text-center text-xs opacity-60">
              <p>&copy; {currentYear} PikoSend. All rights reserved. Powered by Futuriza.</p>
              <p className="mt-1">Licensed and regulated in Kenya.</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};