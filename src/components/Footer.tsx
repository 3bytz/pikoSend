import React from 'react';
import { Container } from './Container';
import { Send, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-piko-plum text-white">
      <Container className="pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-piko-purple">
               <img
              src="/faviconTr.png"
              alt="Personal use"
              className="w-full rounded-2xl shadow-lg"
              style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)' }}
            />
            </div>
              </div>
              <span className="font-poppins text-xl font-bold">PikoSend</span>
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

            <div className="pt-4">
              <p className="text-xs opacity-60 mb-2">Download our app</p>
              <div className="flex gap-3">
                <div className="px-4 py-2 bg-white bg-opacity-10 rounded-lg text-xs hover:bg-opacity-20 transition cursor-pointer">
                  App Store
                </div>
                <div className="px-4 py-2 bg-white bg-opacity-10 rounded-lg text-xs hover:bg-opacity-20 transition cursor-pointer">
                  Google Play
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Personal</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <a href="#accounts" className="hover:text-piko-lilac hover:opacity-100 transition">
                  Global Accounts
                </a>
              </li>
              <li>
                <a href="#send" className="hover:text-piko-lilac hover:opacity-100 transition">
                  Send Money
                </a>
              </li>
              <li>
                <a href="#cards" className="hover:text-piko-lilac hover:opacity-100 transition">
                  Cards
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-piko-lilac hover:opacity-100 transition">
                  All Features
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Business</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <a href="#business" className="hover:text-piko-lilac hover:opacity-100 transition">
                  Business Accounts
                </a>
              </li>
              <li>
                <a href="#api" className="hover:text-piko-lilac hover:opacity-100 transition">
                  API Integration
                </a>
              </li>
              <li>
                <a href="#invoicing" className="hover:text-piko-lilac hover:opacity-100 transition">
                  Invoicing
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-piko-lilac hover:opacity-100 transition">
                  Developer Tools
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <a href="#about" className="hover:text-piko-lilac hover:opacity-100 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-piko-lilac hover:opacity-100 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-piko-lilac hover:opacity-100 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-piko-lilac hover:opacity-100 transition">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-10 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook', link:"https://web.facebook.com/profile.php?id=61583837009742" },
                { icon: Twitter, label: 'Twitter',link:"https://x.com/Pikosend" },
                { icon: Linkedin, label: 'LinkedIn',link:"https://www.linkedin.com/in/pikosend-ke-038902397/" },
                { icon: Instagram, label: 'Instagram',link:"https://www.instagram.com/pikosend.ke/" },
              ].map(({ icon: Icon, label, link }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white bg-opacity-10 hover:bg-piko-lilac hover:bg-opacity-100 transition-all hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs opacity-70">
              <a href="#privacy" className="hover:text-piko-lilac hover:opacity-100 transition">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-piko-lilac hover:opacity-100 transition">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-piko-lilac hover:opacity-100 transition">
                Cookie Policy
              </a>
              <a href="#legal" className="hover:text-piko-lilac hover:opacity-100 transition">
                Legal
              </a>
            </div>
          </div>

          <div className="text-center mt-6 text-xs opacity-60">
            <p>&copy; {currentYear} PikoSend. All rights reserved. Powered by Futuriza.</p>
            <p className="mt-1">Licensed and regulated in Kenya.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
