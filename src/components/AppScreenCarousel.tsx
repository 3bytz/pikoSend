import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  // EffectCoverflow,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import {
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Zap,
  Shield,
  CreditCard,
  Loader,
} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Section } from "./Section";
import { Container } from "./Container";

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
    title: "Financial Dashboard",
    subtitle: "Complete Control",
    description:
      "Monitor your balance, track transactions, and manage your finances all in one beautiful dashboard.",
    imageSrc: "/mockups/dashboard.jpg",
    icon: Smartphone,
    gradient: "from-piko-purple to-piko-violet",
  },
  {
    id: 2,
    title: "Instant Transfers",
    subtitle: "Send Money in Seconds",
    description:
      "Transfer funds to anyone, anywhere with just a tap. Fast, secure, and effortless.",
    imageSrc: "/mockups/instant-send2.jpg",
    icon: Zap,
    gradient: "from-piko-violet to-piko-purple",
  },
  {
    id: 3,
    title: "Wallet Management",
    subtitle: "Your Digital Wallet",
    description:
      "Set spending limits, and manage multiple wallets with ease.",
    imageSrc: "/mockups/Wallet.jpg",
    icon: CreditCard,
    gradient: "from-piko-purple to-piko-violet",
  },
  {
    id: 4,
    title: "Transaction History",
    subtitle: "Track Every Payment",
    description:
      "View detailed transaction history with smart filters and instant search capabilities.",
    imageSrc: "/mockups/9_transaction_history_1.jpg",
    icon: Shield,
    gradient: "from-piko-violet to-piko-purple",
  },
  {
    id: 5,
    title: "Easy Top-Up",
    subtitle: "Multiple Payment Options",
    description:
      "Add funds instantly via QR code, bank transfer, or mobile money. Choose what works for you.",
    imageSrc: "/mockups/10_top-up.jpg",
    icon: Smartphone,
    gradient: "from-piko-purple to-piko-violet",
  },
  {
    id: 6,
    title: "QR Payments",
    subtitle: "Scan & Pay",
    description:
      "Generate or scan QR codes for instant payments. No typing required.",
    imageSrc: "/mockups/11_top-up_qr_code_1.jpg",
    icon: Zap,
    gradient: "from-piko-violet to-piko-purple",
  },
];

export const AppScreenCarousel: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);
const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = screens.map((screen) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = screen.imageSrc;
          img.onload = () => {
            setImagesLoaded((prev) => ({ ...prev, [screen.id]: true }));
            resolve(true);
          };
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);
  console.log(imagesLoaded, activeIndex);
  // const handleImageLoad = (id: number) => {
  //   setImagesLoaded((prev) => ({ ...prev, [id]: true }));
  // };

  return (
    <Section background="white" id="app-screens" className="py-4 md:py-8 ">
      <Container className="w-[99%] px-0">
        <div className="text-center mb-6 md:mb-12">
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
            See how our powerful features come together in a beautiful,
            intuitive interface
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

        <div
          className={`relative ${
            isLoading
              ? "opacity-0"
              : "opacity-100 transition-opacity duration-500"
          }`}
        >
          <div className="-mx-4 md:-mx-0">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              grabCursor
              loop
              speed={700}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              slidesPerView={1}
              centeredSlides={false}
              spaceBetween={16}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                },
                640: {
                  slidesPerView: 1.2,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 2.1,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 28,
                },
              }}
              className="app-carousel !pb-14"
            >
              {screens.map((screen) => {
                const Icon = screen.icon;

                return (
                  <SwiperSlide key={screen.id}>
                    <div className="relative">
                      {/* Card */}
                      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                        <div className="relative bg-gray-50 flex items-center justify-center">
                          <img
                            src={screen.imageSrc}
                            alt={screen.title}
                            loading="lazy"
                            className="
      w-auto
      max-h-[420px]
      md:max-h-[460px]
      lg:max-h-[500px]
      object-contain
      mx-auto
    "
                          />
                        </div>

                        {/* Content */}
                        <div className="p-5">
                          <div className="flex items-center gap-3 mb-3">
                            <div
                              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${screen.gradient} flex items-center justify-center`}
                            >
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="text-sm text-piko-purple font-semibold">
                                {screen.subtitle}
                              </p>
                              <h4 className="font-poppins font-bold text-piko-black">
                                {screen.title}
                              </h4>
                            </div>
                          </div>

                          <p className="text-sm text-piko-medium-grey leading-relaxed">
                            {screen.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

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

      
      `}</style>
    </Section>
  );
};
