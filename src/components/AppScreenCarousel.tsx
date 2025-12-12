import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight, Smartphone, Zap, Shield, CreditCard, Loader } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Section } from './Section';
import { Container } from './Container';

interface AppScreen {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  icon: React.ElementType;
  gradient: string;
}

const screens: AppScreen[] = [
  {
    id: 1,
    title: 'Financial Dashboard',
    subtitle: 'Complete Control',
    description: 'Monitor your balance, track transactions, and manage your finances all in one beautiful dashboard.',
    imageSrc: '/mockups/dashboard.jpg',
    icon: Smartphone,
    gradient: 'from-piko-purple to-piko-violet',
  },
  {
    id: 2,
    title: 'Instant Transfers',
    subtitle: 'Send Money in Seconds',
    description: 'Transfer funds to anyone, anywhere with just a tap. Fast, secure, and effortless.',
    imageSrc: '/mockups/instant-send2.jpg',
    icon: Zap,
    gradient: 'from-piko-violet to-piko-purple',
  },
  {
    id: 3,
    title: 'Wallet Management',
    subtitle: 'Your Digital Wallet',
    description: 'Create virtual cards, set spending limits, and manage multiple wallets with ease.',
    imageSrc: '/mockups/Wallet.jpg',
    icon: CreditCard,
    gradient: 'from-piko-purple to-piko-violet',
  },
  {
    id: 4,
    title: 'Transaction History',
    subtitle: 'Track Every Payment',
    description: 'View detailed transaction history with smart filters and instant search capabilities.',
    imageSrc: '/mockups/9_transaction_history_1.jpg',
    icon: Shield,
    gradient: 'from-piko-violet to-piko-purple',
  },
  {
    id: 5,
    title: 'Easy Top-Up',
    subtitle: 'Multiple Payment Options',
    description: 'Add funds instantly via QR code, bank transfer, or mobile money. Choose what works for you.',
    imageSrc: '/mockups/10_top-up.jpg',
    icon: Smartphone,
    gradient: 'from-piko-purple to-piko-violet',
  },
  {
    id: 6,
    title: 'QR Payments',
    subtitle: 'Scan & Pay',
    description: 'Generate or scan QR codes for instant payments. No typing required.',
    imageSrc: '/mockups/11_top-up_qr_code_1.jpg',
    icon: Zap,
    gradient: 'from-piko-violet to-piko-purple',
  },
];

export const AppScreenCarousel: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = screens.map((screen) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = screen.imageSrc;
          img.onload = () => {
            setImagesLoaded(prev => ({ ...prev, [screen.id]: true }));
            resolve(true);
          };
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        setIsLoading(false); // Continue even if some images fail
      }
    };

    loadImages();
  }, []);

  const handleImageLoad = (id: number) => {
    setImagesLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <Section background="white" id="app-screens">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 text-piko-purple text-sm font-semibold rounded-full mb-4 md:mb-6">
            <Smartphone className="w-4 h-4" />
            App Experience
          </div>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-piko-black mb-4">
            Experience PikoSend
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-piko-purple to-piko-violet mt-2">
              In Action
            </span>
          </h2>
          <p className="text-lg md:text-xl text-piko-medium-grey max-w-3xl mx-auto px-4">
            See how our powerful features come together in a beautiful, intuitive interface
          </p>
        </div>

        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="flex flex-col items-center gap-4">
              <Loader className="w-8 h-8 text-piko-purple animate-spin" />
              <p className="text-piko-medium-grey">Loading app screens...</p>
            </div>
          </div>
        )}

        <div className={`relative ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              renderBullet: (index, className) => {
                return `<span class="${className} !transition-all duration-300"></span>`;
              },
            }}
            loop={true}
            speed={800}
            touchRatio={0.5}
            resistance={true}
            resistanceRatio={0.5}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            breakpoints={{
              320: {
                spaceBetween: 16,
                coverflowEffect: {
                  stretch: 0,
                  depth: 50,
                  modifier: 1.5,
                },
              },
              768: {
                spaceBetween: 32,
                coverflowEffect: {
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                },
              },
              1024: {
                spaceBetween: 48,
                coverflowEffect: {
                  stretch: 0,
                  depth: 150,
                  modifier: 3,
                },
              },
            }}
            className="app-carousel !pb-20"
          >
            {screens.map((screen) => {
              const Icon = screen.icon;
              return (
                <SwiperSlide key={screen.id} className="!w-[280px] md:!w-[320px] lg:!w-[360px] xl:!w-[380px] !transition-all !duration-500">
                  <div className="relative group cursor-grab active:cursor-grabbing">
                    {/* Gradient glow background */}
                    <div 
                      className={`absolute -inset-4 bg-gradient-to-r ${screen.gradient} rounded-3xl opacity-0 blur-xl group-hover:opacity-20 transition-all duration-500 ease-out ${
                        activeIndex === screen.id - 1 ? 'opacity-10' : ''
                      }`}
                    />

                    {/* Main card */}
                    <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                      {/* Loading skeleton */}
                      {!imagesLoaded[screen.id] && (
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse rounded-3xl flex items-center justify-center">
                          <Loader className="w-8 h-8 text-gray-400 animate-spin" />
                        </div>
                      )}

                      {/* Image container with proper aspect ratio */}
                      <div className="relative aspect-[9/19.5] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                        <img
                          src={screen.imageSrc}
                          alt={screen.title}
                          className={`w-full h-full object-contain transition-all duration-700 group-hover:scale-105 ${
                            imagesLoaded[screen.id] ? 'opacity-100' : 'opacity-0'
                          }`}
                          loading="lazy"
                          onLoad={() => handleImageLoad(screen.id)}
                          style={{
                            objectPosition: 'top center',
                          }}
                        />
                        
                        {/* Device frame overlay */}
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
                          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/5 to-transparent"></div>
                        </div>
                      </div>

                      {/* Screen indicator */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                        <p className="text-xs text-white font-medium">{screen.id}/{screens.length}</p>
                      </div>
                    </div>

                    {/* Floating label */}
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <div className={`px-5 py-2.5 bg-gradient-to-r ${screen.gradient} text-white rounded-full shadow-xl font-semibold whitespace-nowrap text-sm backdrop-blur-sm`}>
                        {screen.subtitle}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Navigation buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-2xl flex items-center justify-center text-piko-purple hover:bg-piko-purple hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-2xl flex items-center justify-center text-piko-purple hover:bg-piko-purple hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Progress indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
            <div className="flex items-center gap-2">
              {screens.map((_, index) => (
                <button
                  key={index}
                  onClick={() => swiperRef.current?.slideTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'w-8 bg-gradient-to-r from-piko-purple to-piko-violet' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Feature description panel */}
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-piko-purple/5 to-piko-violet/5 rounded-3xl p-6 md:p-10 lg:p-12 border-2 border-piko-purple/10 hover:border-piko-purple/20 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              <div className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${screens[activeIndex].gradient} flex items-center justify-center shadow-lg transition-all duration-500`}>
                {React.createElement(screens[activeIndex].icon, {
                  className: 'w-7 h-7 md:w-8 md:h-8 text-white',
                  strokeWidth: 2,
                })}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-piko-purple font-semibold">
                    {screens[activeIndex].subtitle}
                  </span>
                  <span className="text-xs text-piko-medium-grey font-medium">
                    • {activeIndex + 1} of {screens.length}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-poppins font-bold text-piko-black mb-3">
                  {screens[activeIndex].title}
                </h3>
                <p className="text-base md:text-lg text-piko-medium-grey leading-relaxed">
                  {screens[activeIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12 text-center">
          <button className="group relative px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-piko-purple to-piko-violet text-white rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Download the App
              <svg
                className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-piko-violet to-piko-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
          <p className="mt-4 text-sm text-piko-medium-grey">
            Available on iOS and Android
          </p>
        </div>
      </Container>

      <style>{`
        .carousel-slide {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease;
        }

        .swiper-slide-active {
          z-index: 2;
        }

        .swiper-slide-next,
        .swiper-slide-prev {
          opacity: 0.7;
          transform: scale(0.9);
        }

        .app-carousel .swiper-pagination {
          bottom: 8px !important;
        }

        .app-carousel .swiper-pagination-bullet {
          background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
          opacity: 0.3;
          width: 8px;
          height: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .app-carousel .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          height: 8px;
          border-radius: 4px;
        }

        .app-carousel .swiper-slide-shadow-left,
        .app-carousel .swiper-slide-shadow-right {
          background-image: linear-gradient(to right, rgba(0,0,0,0.1), transparent) !important;
        }

        /* Smooth transitions */
        .app-carousel .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Responsive image container */
        @media (max-width: 640px) {
          .app-carousel .swiper-slide {
            width: 280px !important;
          }
        }
      `}</style>
    </Section>
  );
};