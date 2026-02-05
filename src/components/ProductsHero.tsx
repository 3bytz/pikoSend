import React from "react";
import { Container } from "./Container";
import { AppStoreBadges } from "./AppStoreBadges";
import { Sparkles } from "lucide-react";

export const ProductsHero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16 md:pt-2 ">
      <div className="absolute inset-0 ">
        <div className="absolute inset-0 bg-gradient-to-br from-piko-purple via-piko-violet to-piko-lilac">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-72 h-72 bg-piko-purple/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-piko-violet/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-piko-lilac/40 rounded-full blur-3xl"></div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent"></div>
        </div>

        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
      </div>

      <Container className="relative z-10 py-8 sm:py-12 md:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white text-base font-semibold rounded-full animate-fade-in">
              <Sparkles className="w-5 h-5" />
              <span>All-In-One Financial Platform</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight">
                <span className="block">Banking Made</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-white drop-shadow-2xl">
                  Simple
                </span>
              </h1>

              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-gradient-to-r from-white to-transparent"></div>
                <p className="text-lg text-white/80 italic">
                  For modern Africa
                </p>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-xl font-light">
              Kenya’s most affordable and secure digital payment platform.
            </p>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-xl font-light">
              The only digital platform you need to send, receive, save and make
              everyday payments affordably and safely.
            </p>

            <div className="pt-1 md:pt-6">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-gradient-to-r from-white/50 to-transparent"></div>
                <p className="text-white/80 text-sm font-medium">
                  Also available on mobile
                </p>
                <div className="w-6 h-px bg-gradient-to-r from-transparent to-white/50"></div>
              </div>
              <div className="pt-6 pb-16 md:pb-20 lg:pb-24">
                <AppStoreBadges variant="dark" size="md" />
              </div>
            </div>

            {/* <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                <div className="text-sm text-white/70">Uptime</div>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">500K+</div>
                <div className="text-sm text-white/70">Users</div>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">150+</div>
                <div className="text-sm text-white/70">Countries</div>
              </div>
            </div> */}
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-piko-purple/40 via-piko-violet/30 to-piko-lilac/20 rounded-3xl blur-3xl animate-pulse-slow"></div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-piko-purple via-piko-violet to-piko-lilac rounded-3xl opacity-20 blur-xl"></div>

              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-6 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>

                <div className="relative h-[500px] rounded-2xl overflow-hidden">
                  <img
                    src="/new/AfricanPayment.png"
                    alt="PikoSend Dashboard Interface"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-piko-purple/10 via-transparent to-piko-violet/10"></div>

                  <div className="absolute bottom-6 right-6">
                    <div className="bg-white/20 backdrop-blur-lg rounded-xl px-4 py-2 border border-white/30">
                      <div className="text-white text-sm">
                        24/7 <span className="font-bold">customer support</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-white/70 text-xs mb-1">
                      Support Over Transfers of
                    </div>
                    <div className="text-white text-xl font-bold">2.4K</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-white/70 text-xs mb-1">
                      Success Rate
                    </div>
                    <div className="text-white text-xl font-bold">99.7%</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-white/70 text-xs mb-1">Avg. Time</div>
                    <div className="text-white text-xl font-bold">27s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0,24L80,32C160,40,320,56,480,64C640,72,800,72,960,64C1120,56,1280,40,1360,32L1440,24L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="white"
            fillOpacity="0.05"
          />
          <path
            d="M0,48L80,56C160,64,320,80,480,80C640,80,800,64,960,56C1120,48,1280,48,1360,48L1440,48L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="white"
            fillOpacity="0.1"
          />
          <path
            d="M0,72L80,72C160,72,320,72,480,64C640,56,800,40,960,32C1120,24,1280,24,1360,24L1440,24L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="white"
            fillOpacity="0.15"
          />
          <path
            d="M0,96L80,88C160,80,320,64,480,56C640,48,800,48,960,56C1120,64,1280,80,1360,88L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="white"
            fillOpacity="0.2"
          />
        </svg>
      </div>
    </section>
  );
};
