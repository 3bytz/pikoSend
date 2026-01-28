import React from "react";
import { Section } from "./Section";
import { Container } from "./Container";
import { CheckCircle2, MessageCircle, Star } from "lucide-react";

export const LiveTestimonials: React.FC = () => {
  return (
    <Section background="soft-grey" id="testimonials" className="py-6 md:py-10">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 text-piko-purple text-sm font-semibold rounded-full mb-6">
              <MessageCircle className="w-4 h-4" />
              Trusted by Thousands
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-piko-black mb-6">
              Join Our Network of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-piko-purple to-piko-violet mt-2">
                Happy Users
              </span>
            </h2>

            <p className="text-lg md:text-xl text-piko-medium-grey mb-8 leading-relaxed">
              Thousands of satisfied customers across Kenya trust PikoSend for
              their daily transactions, business payments, and personal
              transfers.
            </p>

            <div className="flex items-center gap-6 md:gap-8 mb-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-piko-black mb-1">
                  4.9/5
                </div>
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 md:w-5 md:h-5 fill-piko-purple text-piko-purple"
                    />
                  ))}
                </div>
                <div className="text-sm text-piko-medium-grey">
                  Based on 50K+ reviews
                </div>
              </div>

              <div className="hidden md:block h-16 w-px bg-piko-soft-grey"></div>
              <div className="md:hidden w-12 h-px bg-piko-soft-grey"></div>

              <div>
                <div className="text-3xl md:text-4xl font-bold text-piko-black mb-1">
                  500K+
                </div>
                <div className="text-sm text-piko-medium-grey">
                  Active users
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white rounded-full border border-piko-soft-grey">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-piko-purple" />
                <span className="text-xs md:text-sm font-medium text-piko-black">
                  Trusted & Secure
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white rounded-full border border-piko-soft-grey">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-piko-purple" />
                <span className="text-xs md:text-sm font-medium text-piko-black">
                  Instant Transfers
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white rounded-full border border-piko-soft-grey">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-piko-purple" />
                <span className="text-xs md:text-sm font-medium text-piko-black">
                  24/7 Support
                </span>
              </div>
            </div>
          </div>

          {/* img section */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-piko-purple/20 to-piko-violet/20 rounded-3xl blur-2xl"></div>

            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/new/landing_happy_users_mobile.png"
                alt="Happy users celebrating with PikoSend"
                className="block md:hidden w-full h-96 object-cover object-center"
              />

              {/* Desktop image */}
              <img
                src="/new/landing_happy_users.jpeg"
                alt="Happy users celebrating with PikoSend"
                className="hidden md:block w-full h-96 object-cover object-center"
              />

              {/* Overlay with stats */}
              <div className="absolute inset-0 bg-gradient-to-t from-piko-plum/90 via-piko-purple/40 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">
                        99%
                      </div>
                      <div className="text-sm text-white/80">
                        Satisfaction Rate
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">
                        24/7
                      </div>
                      <div className="text-sm text-white/80">
                        Support Available
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">
                        30s
                      </div>
                      <div className="text-sm text-white/80">
                        Average Transfer Time
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute top-6 right-6 px-4 py-2 bg-white rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-piko-purple">
                    Trusted Choice
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-piko-purple/20 to-piko-violet/20 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-piko-purple/20 to-piko-violet/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
