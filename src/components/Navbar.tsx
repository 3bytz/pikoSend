import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container } from "./Container";
import { Button } from "./Button";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";

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
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
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
    } else if (href.startsWith("/")) {
      navigate(href);
    } else {
      window.open(href, "_blank");
    }
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

const navLinks: NavLink[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" }, 
  { label: "For Business", href: "/business" },
  { label: "Blog", href: "/blog" },
  {
    label: "Company",
    dropdown: [
      {
        label: "Testimonials",
        href: "#testimonials",
        description: "What our users say",
      },
      {
        label: "FAQs",
        href: "#faq",
        description: "Get answers to common questions",
      },
    ],
  },
];

  // // Check if current page is active
  // const isActive = (href?: string) => {
  //   if (!href) return false;
  //   if (href.startsWith("#")) return false;
  //   return location.pathname === href;
  // };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-piko-purple to-piko-violet shadow-lg group-hover:scale-105 transition-transform">
              <img
                src="/faviconTr.png"
                alt="PikoSend Logo"
                className="w-full rounded-2xl"
              />
            </div>
            <span
              className={`font-poppins text-xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-piko-purple" : "text-white"
              }`}
            >
              PikoSend
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                ref={link.dropdown ? dropdownRef : null}
                onMouseEnter={() =>
                  link.dropdown && handleMouseEnter(link.label)
                }
                onMouseLeave={link.dropdown ? handleMouseLeave : undefined}
              >
                {link.dropdown ? (
                  <>
                    <button
                      className={`font-medium transition-colors flex items-center gap-1.5 text-base ${
                        isScrolled ? "text-piko-black" : "text-white hover:text-white hover:text-underline"
                      } ${
                        activeDropdown === link.label ? "text-piko-purple" : ""
                      }`}
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.label ? null : link.label
                        )
                      }
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    
                    {/* Active underline for dropdown */}
                    <div className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                      activeDropdown === link.label 
                        ? isScrolled 
                          ? "w-full bg-piko-purple" 
                          : "w-full bg-white" 
                        : "w-0 group-hover:w-full bg-white/70"
                    }`}></div>

                    {activeDropdown === link.label && (
                      <div
                        className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl py-4 px-2 animate-fade-up border border-piko-soft-grey"
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
                            className="block w-full text-left px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-piko-purple/5 hover:to-piko-violet/5 transition-colors"
                          >
                            <div className="font-medium text-piko-black">
                              {item.label}
                            </div>
                            {item.description && (
                              <div className="text-sm text-piko-medium-grey mt-1">
                                {item.description}
                              </div>
                            )}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : link.href?.startsWith("/") ? (
                  <div className="relative">
                    <Link
                      to={link.href}
                      className={`font-medium transition-colors text-base ${
                        isScrolled ? "text-piko-black hover:text-piko-purple" : "text-white hover:text-white/90"
                      } ${
                        location.pathname === link.href ? (isScrolled ? "text-piko-purple" : "text-white") : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                    
                    {/* Active underline */}
                    <div className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                      location.pathname === link.href
                        ? isScrolled
                          ? "w-full bg-piko-purple"
                          : "w-full bg-white"
                        : "w-0 group-hover:w-full"
                    } ${isScrolled ? "bg-piko-purple/70" : "bg-white/70"}`}></div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className={`font-medium transition-colors text-base ${
                      isScrolled ? "text-piko-black hover:text-piko-purple" : "text-white hover:text-white/90"
                    }`}
                    onClick={(e) => {
                      if (link.href?.startsWith("#")) {
                        e.preventDefault();
                        if (location.pathname !== "/") {
                          navigate("/");
                          setTimeout(() => {
                            const element = document.querySelector(
                              link.href as any
                            );
                            if (element) {
                              element.scrollIntoView({ behavior: "smooth" });
                            }
                          }, 100);
                        } else {
                          const element = document.querySelector(link.href);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
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

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* WebApp Button */}
            <a
              href="https://app.pikosend.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                isScrolled
                  ? "bg-gradient-to-r from-piko-purple to-piko-violet text-white hover:shadow-lg"
                  : "bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
              }`}
            >
              <span>Web App</span>
              <ExternalLink size={16} />
            </a>

            {/* Contact Us Button */}
            <Link
              to={"/contact"}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                isScrolled
                  ? "bg-gradient-to-r from-piko-purple to-piko-violet text-white hover:shadow-lg"
                  : "bg-white text-piko-purple hover:bg-white/90 hover:shadow-lg"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled ? "text-piko-black" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-piko-soft-grey bg-white rounded-lg">
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.label} className="flex flex-col gap-2">
                      <div className="font-medium text-piko-black mb-2">
                        {link.label}
                      </div>
                      <div className="flex flex-col gap-2 pl-4">
                        {link.dropdown.map((item) => (
                          <button
                            key={item.href}
                            onClick={() => handleDropdownClick(item.href)}
                            className="text-left py-2 px-3 rounded-lg hover:bg-piko-soft-grey transition-colors text-piko-black"
                          >
                            <div className="font-medium text-piko-black">
                              {item.label}
                            </div>
                            {item.description && (
                              <div className="text-sm text-piko-medium-grey">
                                {item.description}
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                }

                return link.href?.startsWith("/") ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`font-medium transition-colors text-piko-black hover:text-piko-purple ${
                      location.pathname === link.href ? "text-piko-purple" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => {
                      if (link.href?.startsWith("#")) {
                        if (location.pathname !== "/") {
                          navigate("/");
                          setTimeout(() => {
                            const element = document.querySelector(
                              link.href as any
                            );
                            if (element) {
                              element.scrollIntoView({ behavior: "smooth" });
                            }
                          }, 100);
                        } else {
                          const element = document.querySelector(link.href);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
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
              
              <div className="grid grid-cols-2 gap-3 pt-4 mt-2 border-t border-piko-soft-grey">
                <a
                  href="https://app.pikosend.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-piko-purple text-white rounded-xl font-medium hover:bg-piko-violet transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Web App</span>
                  <ExternalLink size={16} />
                </a>
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    navigate("/contact");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};