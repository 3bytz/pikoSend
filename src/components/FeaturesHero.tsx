import React from "react";
import { Container } from "./Container";
import { AppStoreBadges } from "./AppStoreBadges";
import { Zap, Shield, Clock } from "lucide-react";

export const FeaturesHero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos-3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1920)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-piko-purple/90 via-piko-violet/85 to-piko-lilac/90 backdrop-blur-sm"></div>
      </div>

      <Container className="relative z-10 py-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-4 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-full animate-fade-in">
              <Zap className="w-4 h-4" />
              Platform Features
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight animate-fade-up">
              Built for Speed,
              <span className="block mt-2">
                Designed for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-white">
                  Africa
                </span>
              </span>
            </h1>

            <p className="text-xl text-white/90 leading-relaxed max-w-xl">
              PikoSend streamlines how businesses accept and process payments.
              From instant transactions to effortless QR payments, every feature
              is designed to simplify your workflow, reduce waiting times, and
              deliver a smoother experience for both you and your customers.
            </p>

            <div className="grid grid-cols-3 pt-4 place-items-start">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-3">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold">{"<3s"}</div>
                <div className="text-sm text-white/70">Fast Transfers</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-3">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold">256-bit</div>
                <div className="text-sm text-white/70">Encryption</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-3">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-white/70">Available</div>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-sm text-white/70 mb-4">
                Get the app and start now
              </p>
              <AppStoreBadges variant="dark" size="md" />
            </div>
          </div>

          <div className="relative block mt-1 md:mt-8 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-4 sm:p-8 shadow-2xl animate-scale-in">
                <img
                  src="/new/3dHero.png"
                  alt="Features Dashboard"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            
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