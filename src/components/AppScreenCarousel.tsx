import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight, Smartphone, Zap, Shield, CreditCard } from 'lucide-react';
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
    imageSrc: '/mockups/financeDashbaord.png',
    icon: Smartphone,
    gradient: 'from-piko-teal to-piko-green',
  },
  {
    id: 2,
    title: 'Instant Transfers',
    subtitle: 'Send Money in Seconds',
    description: 'Transfer funds to anyone, anywhere with just a tap. Fast, secure, and effortless.',
    imageSrc: '/mockups/instant-send.png',
    icon: Zap,
    gradient: 'from-piko-green to-piko-teal',
  },
  {
    id: 3,
    title: 'Wallet Management',
    subtitle: 'Your Digital Wallet',
    description: 'Create virtual cards, set spending limits, and manage multiple wallets with ease.',
    imageSrc: '/mockups/wallets.png',
    icon: CreditCard,
    gradient: 'from-piko-teal to-piko-green',
  },
  {
    id: 4,
    title: 'Transaction History',
    subtitle: 'Track Every Payment',
    description: 'View detailed transaction history with smart filters and instant search capabilities.',
    imageSrc: '/mockups/9_transaction_history_1.jpg',
    icon: Shield,
    gradient: 'from-piko-green to-piko-teal',
  },
  {
    id: 5,
    title: 'Easy Top-Up',
    subtitle: 'Multiple Payment Options',
    description: 'Add funds instantly via QR code, bank transfer, or mobile money. Choose what works for you.',
    imageSrc: '/mockups/10_top-up.jpg',
    icon: Smartphone,
    gradient: 'from-piko-teal to-piko-green',
  },
  {
    id: 6,
    title: 'QR Payments',
    subtitle: 'Scan & Pay',
    description: 'Generate or scan QR codes for instant payments. No typing required.',
    imageSrc: '/mockups/11_top-up_qr_code_1.jpg',
    icon: Zap,
    gradient: 'from-piko-green to-piko-teal',
  },
];

export const AppScreenCarousel: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section background="white" id="app-screens">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-piko-teal/10 to-piko-green/10 text-piko-teal text-sm font-semibold rounded-full mb-6">
            <Smartphone className="w-4 h-4" />
            App Experience
          </div>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-piko-black mb-4">
            Experience PikoSend
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-piko-teal to-piko-green mt-2">
              In Action
            </span>
          </h2>
          <p className="text-xl text-piko-medium-grey max-w-3xl mx-auto">
            See how our powerful features come together in a beautiful, intuitive interface
          </p>
        </div>

        <div className="relative">
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
              modifier: 2,
              slideShadows: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            className="app-carousel pb-16"
          >
            {screens.map((screen) => {
              const Icon = screen.icon;
              return (
                <SwiperSlide key={screen.id} className="carousel-slide">
                  <div className="max-w-sm mx-auto">
                    <div className="relative group">
                      <div className={`absolute -inset-4 bg-gradient-to-r ${screen.gradient} rounded-3xl opacity-0 blur-2xl group-hover:opacity-30 transition-all duration-500`}></div>

                      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
                        <img
                          src={screen.imageSrc}
                          alt={screen.title}
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className={`px-6 py-3 bg-gradient-to-r ${screen.gradient} text-white rounded-full shadow-xl font-semibold whitespace-nowrap`}>
                          Tap to explore
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-piko-teal hover:bg-piko-teal hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-piko-teal hover:bg-piko-teal hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-piko-teal/5 to-piko-green/5 rounded-3xl p-8 md:p-12 border-2 border-piko-teal/20">
            <div className="flex items-start gap-6">
              <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${screens[activeIndex].gradient} flex items-center justify-center shadow-lg`}>
                {React.createElement(screens[activeIndex].icon, {
                  className: 'w-8 h-8 text-white',
                  strokeWidth: 2,
                })}
              </div>
              <div>
                <div className="text-sm text-piko-teal font-semibold mb-2">
                  {screens[activeIndex].subtitle}
                </div>
                <h3 className="text-2xl md:text-3xl font-poppins font-bold text-piko-black mb-3">
                  {screens[activeIndex].title}
                </h3>
                <p className="text-lg text-piko-medium-grey leading-relaxed">
                  {screens[activeIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="group px-10 py-4 bg-gradient-to-r from-piko-teal to-piko-green text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95">
            <span className="flex items-center justify-center gap-2">
              Download the App
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
          </button>
        </div>
      </Container>

      <style>{`
        .carousel-slide {
          width: 300px;
          padding: 40px 0;
        }

        @media (min-width: 640px) {
          .carousel-slide {
            width: 350px;
          }
        }

        @media (min-width: 768px) {
          .carousel-slide {
            width: 400px;
          }
        }

        .app-carousel .swiper-pagination-bullet {
          background: #14B8A6;
          opacity: 0.3;
          width: 12px;
          height: 12px;
        }

        .app-carousel .swiper-pagination-bullet-active {
          opacity: 1;
          width: 32px;
          border-radius: 6px;
        }

        .app-carousel .swiper-slide-shadow-left,
        .app-carousel .swiper-slide-shadow-right {
          background-image: none;
        }
      `}</style>
    </Section>
  );
};
