import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "./Container";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { supabase } from "../lib/supabase";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert([{ email, subscribed_at: new Date().toISOString() }]);

      if (error) throw error;

      setSuccess(true);
      setEmail("");
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      if (err.code === "23505") {
        setError("This email is already subscribed");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInternalLink = (href: string) => {
    if (href.startsWith("#")) {
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(href);
    }
  };

  // Updated links to match navbar structure
  const ProductsLinks = [
    { label: "Products", href: "/products" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Web App", href: "https://app.pikosend.com", external: true },
  ];

  const BusinessLinks = [
    { label: "For Business", href: "/business" },
    // { label: "API Integration", href: "/business#api" },
    { label: "Pricing", href: "/pricing" },
    // { label: "Invoicing", href: "/business#invoicing" },
    // { label: "Business Tools", href: "/business#tools" },
  ];

  const CompanyLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      link: "https://web.facebook.com/profile.php?id=61583837009742",
    },
    { icon: Twitter, label: "Twitter", link: "https://x.com/Pikosend" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/pikosend-ke-038902397/",
    },
    {
      icon: Instagram,
      label: "Instagram",
      link: "https://www.instagram.com/pikosend.ke/",
    },
  ];

  const renderLink = (item: { label: string; href: string; external?: boolean }) => {
    if (item.external) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-piko-lilac hover:opacity-100 transition"
        >
          {item.label}
        </a>
      );
    }
    
    if (item.href.startsWith("/")) {
      return (
        <Link
          to={item.href}
          className="hover:text-piko-lilac hover:opacity-100 transition"
        >
          {item.label}
        </Link>
      );
    }
    
    return (
      <button
        onClick={() => handleInternalLink(item.href)}
        className="hover:text-piko-lilac hover:opacity-100 transition text-left"
      >
        {item.label}
      </button>
    );
  };

  return (
    <footer className="bg-piko-plum text-white">
      {/* Newsletter Section */}
      <div className="bg-white py-12 border-b border-piko-soft-grey">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-piko-black font-poppins font-bold mb-3">
                  Affordable payments, built for real life
                </h2>
                <p className="text-base text-piko-medium-grey leading-relaxed max-w-lg">
                  Get the latest updates, tips, and exclusive offers delivered
                  to your inbox.
                </p>
              </div>

              <div className="lg:w-1/2 w-full max-w-md">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {success && (
                    <div className="flex items-center justify-center lg:justify-start gap-2 p-3 bg-piko-purple/10 text-piko-purple rounded-lg">
                      <CheckCircle size={20} />
                      <span className="text-sm font-medium">
                        Successfully subscribed!
                      </span>
                    </div>
                  )}

                  {error && (
                    <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm text-center lg:text-left">
                      {error}
                    </div>
                  )}

                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-6 py-4 pr-36 rounded-full border-2 border-piko-soft-grey focus:border-piko-purple focus:outline-none transition-colors text-base disabled:opacity-50"
                      required
                      disabled={loading}
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-piko-purple text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] flex items-center gap-2 disabled:opacity-50"
                    >
                      {loading ? (
                        "Subscribing..."
                      ) : (
                        <>
                          <Mail size={18} />
                          Subscribe
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-piko-light-grey text-center lg:text-left">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <Container className="pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-6 md:mb-12">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-piko-purple">
                    <img
                      src="/faviconTr.png"
                      alt="PikoSend Logo"
                      className="w-full rounded-2xl shadow-lg"
                      style={{ boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)" }}
                    />
                  </div>
                </div>
                <span className="font-poppins text-xl font-bold">PikoSend</span>
              </Link>
            </div>
            <p className="text-sm opacity-80 leading-relaxed max-w-sm">
              Empowering Africa through financial inclusion. Making payments
              simple, fast, and accessible for everyone.
            </p>

            <div className="space-y-2 pt-2">
              <a
                href="tel:+254706525135"
                className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition"
              >
                <Phone size={14} />
                <span>+254 110 916538</span>
              </a>
              <a
                href="tel:+254706525135"
                className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition"
              >
                <Phone size={14} />

                <span>+254 110 917569</span>
              </a>
              <a
                href="mailto:info@pikosend.com"
                className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition"
              >
                <Mail size={14} />
                <span>info@pikosend.com</span>
              </a>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <MapPin size={14} />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm opacity-80">
              {ProductsLinks.map((item) => (
                <li key={item.href}>
                  {renderLink(item)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Business</h4>
            <ul className="space-y-3 text-sm opacity-80">
              {BusinessLinks.map((item) => (
                <li key={item.href}>
                  {renderLink(item)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm opacity-80">
              {CompanyLinks.map((item) => (
                <li key={item.href}>
                  {renderLink(item)}
                </li>
              ))}
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
              <p>
                &copy; {currentYear} PikoSend. All rights reserved. Powered by
                Futuriza.
              </p>
              <p className="mt-1">Licensed and regulated in Kenya.</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};