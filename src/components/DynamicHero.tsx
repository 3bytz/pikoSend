import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Shield,
  AppleIcon,
  BotIcon,
} from "lucide-react";
import { Container } from "./Container";
import { Link } from "react-router-dom";
import { useIsMobile } from "../lib/useIsMobile";
import { WaitingListCTA } from "./WaitingList/WaitingListCTA";

// const typingPhrases = [
//   "Send Money Instantly",
//   "Receive Payments Securely",
//   "Manage Multiple Wallets",
//   "Pay Your Bills Easily",
//   "Grow Your Business",
//   "Track Your Spending",
// ];

const stats = [
  { value: "500K+", label: "Active Users", icon: Users },
  { value: "$2B+", label: "Transacted", icon: TrendingUp },
  { value: "99.9%", label: "Uptime", icon: Shield },
];

export const DynamicHero: React.FC = () => {
  // const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  // const [displayedText, setDisplayedText] = useState("");
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [typingSpeed, setTypingSpeed] = useState(200);
  const isMobile = useIsMobile();

  // useEffect(() => {
  //   const currentPhrase = typingPhrases[currentPhraseIndex];

  //   const handleTyping = () => {
  //     if (!isDeleting) {
  //       if (displayedText.length < currentPhrase.length) {
  //         setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
  //         setTypingSpeed(100);
  //       } else {
  //         setTimeout(() => setIsDeleting(true), 2000);
  //       }
  //     } else {
  //       if (displayedText.length > 0) {
  //         setDisplayedText(displayedText.slice(0, -1));
  //         setTypingSpeed(50);
  //       } else {
  //         setIsDeleting(false);
  //         setCurrentPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
  //       }
  //     }
  //   };

  //   const timer = setTimeout(handleTyping, typingSpeed);
  //   return () => clearTimeout(timer);
  // }, [displayedText, isDeleting, currentPhraseIndex, typingSpeed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-piko-purple via-piko-violet to-piko-purple">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-piko-violet/30 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-piko-purple/30 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <Container>
        <div className="relative z-10 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">
                  Kenya’s Fastest Growing Digital Payment Platform
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 leading-tight">
                <span className="block mb-2">PikoSend,</span>
              </h1>

              <h1 className="text-xl md:text-3xl lg:text-4xl font-poppins font-bold mb-6 leading-tight">
                <span className="block mb-2">
                  Powering every transaction.
                </span>
              </h1>

              <div className="block lg:hidden relative my-8">
                <div className="relative z-10">
                  <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl">
                    <img
                      src="/new/hero_designed.png"
                      alt="PikoSend App"
                      className="w-full h-auto rounded-xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed max-w-2xl">
            Switch to PikoSend today and save money with Kenya’s most affordable, secure digital payment platform for everyday use.
Enjoy lower transaction rates, multiple payment options and 24/7 customer support that’s accessible and very responsive.

              </p>
            

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="#"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-piko-purple rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-2xl"
                >
                  <AppleIcon className="w-5 h-5" />
                  Get for IOS
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20">
                  <BotIcon className="w-5 h-5" />
                  Get for Android
                </button>
                 <WaitingListCTA />
              </div>
              

              <div className="flex flex-wrap items-center gap-6">
                {["No hidden fees", "Bank-level security", "24/7 support"].map(
                  (feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  )
                )}
              </div>
              {/* powered by */}
              <div className="mt-8 flex flex-col items-start sm:items-start w-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <span className="text-white text-sm md:text-lg font-semibold tracking-wide">
                    POWERED BY
                  </span>
                  <div
                    className="
      bg-white/30
      sm:h-8 sm:w-[2px]
      h-[2px] w-full
    "
                  ></div>
                  <div className="flex items-center gap-6">
                    <img
                      src="/partners/telecharger.png"
                      alt="Futurizac Logo"
                      className="h-8 md:h-10 w-auto opacity-90 brightness-110 mix-blend-screen"
                    />

                    <img
                      src="/partners/telecharger-1.png"
                      alt="DTB Bank Logo"
                      className="h-8 md:h-10 w-auto opacity-90 brightness-110 mix-blend-screen"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* image */}
            {isMobile ? null : (
              <div className="relative mt-12 lg:mt-0">
                <div className="relative z-10">
                  <div className="absolute -inset-4 lg:-inset-8 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-4 lg:p-8 border border-white/20 shadow-2xl">
                    {isMobile ? null : (
                      <img
                        src="/new/hero_designed.png"
                        alt="PikoSend App"
                        className="w-full h-auto rounded-xl lg:rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center text-white animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-white/80" />
                  <div className="text-3xl md:text-4xl font-bold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
