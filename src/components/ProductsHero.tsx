import React, { useState, useEffect, useRef } from 'react';
import { Container } from './Container';
import { AppStoreBadges } from './AppStoreBadges';
import { TypingEffect } from './TypingEffect';
import { Zap, ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroSlides = [
  {
    id: 1,
    image: '/mockups/instant-send.png',
    title: 'Instant Money Transfers',
    subtitle: 'Send & receive in seconds',
    description: 'Experience lightning-fast transfers across Africa with real-time processing.'
  },
  {
    id: 2,
    image: '/mockups/wallets.png',
    title: 'Virtual Cards',
    subtitle: 'Secure online shopping',
    description: 'Create unlimited virtual cards with instant freeze/unfreeze capability.'
  },
  {
    id: 3,
    image: '/mockups/financeDashbaord.png',
    title: 'Financial Dashboard',
    subtitle: 'Track everything at a glance',
    description: 'Monitor your finances with beautiful, intuitive visualizations.'
  },
  {
    id: 4,
    image: '/mockups/9_transaction_history_1.jpg',
    title: 'Transaction History',
    subtitle: 'Complete financial records',
    description: 'Access detailed transaction history with smart categorization.'
  }
];

export const ProductsHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoSlideRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isPaused) return;

    autoSlideRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const toggleAutoSlide = () => {
    setIsPaused(!isPaused);
  };

  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-[80vh] flex items-center overflow-hidden pt-16 md:pt-20">

      <div className="absolute inset-0 bg-gradient-to-br from-piko-purple via-piko-violet to-piko-lilac">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-piko-lilac rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-piko-purple rounded-full blur-3xl opacity-30"></div>
      </div>

      <Container className="relative z-10 py-8 sm:py-12 md:py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">        
          
          <div className="text-white space-y-6 sm:space-y-8 order-2 lg:order-1 mt-1 lg:mt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-full animate-fade-in">
              <Zap className="w-4 h-4" />
              Our Products
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold leading-tight animate-fade-up">
              Everything You Need to
              <span className="block mt-1 sm:mt-2">
                <TypingEffect
                  texts={['Manage Your Money', 'Send Instantly', 'Receive Securely', 'Grow Your Wealth']}
                  typingSpeed={100}
                  deletingSpeed={50}
                  pauseDuration={2000}
                />
              </span>
            </h1>


            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              Powerful financial tools designed for modern Africa. Send, receive, and manage money with unmatched speed and security.
            </p>
      
            <div className="pt-2 sm:pt-4">
              <p className="text-xs sm:text-sm text-white/70 mb-3 sm:mb-4">Download our mobile app</p>
              <div className="flex justify-start">
                <AppStoreBadges variant="dark" size="md" />
              </div>
            </div>
          </div>

          <div className="hidden md:block relative w-full order-1 lg:order-2">         
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-lg border border-white/20 shadow-xl sm:shadow-2xl">          
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {heroSlides.map((slide) => (
                  <div key={slide.id} className="w-full flex-shrink-0 p-4 sm:p-6 md:p-8">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-xl sm:rounded-2xl overflow-hidden">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-contain bg-gradient-to-br from-piko-purple/20 to-piko-violet/20 p-2 sm:p-4 transition-transform duration-700 hover:scale-105"
                          style={{ objectFit: 'contain' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      <div className="text-white space-y-1 sm:space-y-2">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-poppins font-bold">{slide.title}</h3>
                        <p className="text-piko-lilac font-medium text-sm sm:text-base">{slide.subtitle}</p>
                        <p className="text-white/80 text-xs sm:text-sm md:text-base">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
         
              <button
                onClick={toggleAutoSlide}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
              >
                {isPaused ? <Play className="w-3 h-3 sm:w-4 sm:h-4" /> : <Pause className="w-3 h-3 sm:w-4 sm:h-4" />}
              </button>
            </div>

            <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-6 sm:w-8 bg-white' 
                      : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};