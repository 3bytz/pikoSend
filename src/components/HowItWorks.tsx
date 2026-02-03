import React from "react";
import { Section } from "./Section";
import { Container } from "./Container";
import { UserPlus, CheckCircle, Zap, ArrowRight } from "lucide-react";

interface Step {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: UserPlus,
    title: "Download the App",
    description:
      "Download the PikoSend app from the App Store or Google Play and install it on your phone.",
  },
  {
    number: "02",
    icon: CheckCircle,
    title: "Sign Up Securely",
    description:
      "Create your account in minutes and set your secure PIN to protect your money.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Start Sending & Paying",
    description:
      "Send, pay, and manage money instantly at low cost.",
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <Section background="white" id="how" className="py-16 md:py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-piko-black mb-4">
                Get Started in
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-piko-purple to-piko-violet">
                  3 Easy Steps
                </span>
              </h2>
              <p className="text-lg text-piko-medium-grey max-w-xl">
                Join our network of users who trust PikoSend for their payment
                needs. Setting up takes just minutes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-piko-purple/5 to-piko-violet/5 rounded-2xl p-6 md:p-8 border border-piko-soft-grey relative overflow-hidden">
             
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-piko-purple/10 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-piko-violet/10 to-transparent rounded-full blur-xl"></div>

              <div className="relative space-y-8">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isLast = index === steps.length - 1;

                  return (
                    <div key={index} className="relative">
                      <div className="flex items-start gap-4 md:gap-6 group">
                        <div className="relative flex-shrink-0">
                          <div
                            className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ${
                              index === 0
                                ? "bg-gradient-to-br from-piko-purple to-piko-purple/80"
                                : index === 1
                                ? "bg-gradient-to-br from-piko-violet to-piko-violet/80"
                                : "bg-gradient-to-br from-piko-purple to-piko-violet"
                            }`}
                          >
                            {step.number}
                          </div>
                          <div
                            className={`absolute -inset-2 rounded-full ${
                              index === 0
                                ? "bg-piko-purple/20"
                                : index === 1
                                ? "bg-piko-violet/20"
                                : "bg-gradient-to-br from-piko-purple/20 to-piko-violet/20"
                            } blur-md group-hover:blur-lg transition-all duration-300`}
                          ></div>
                        </div>

                    
                        <div className="flex-1 pt-1">
                          <div className="flex items-center gap-3 mb-2">
                            {/* <div
                              className={`p-2 rounded-lg ${
                                index === 0
                                  ? "bg-piko-purple/10 text-piko-purple"
                                  : index === 1
                                  ? "bg-piko-violet/10 text-piko-violet"
                                  : "bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 text-piko-purple"
                              }`}
                            >
                              <Icon size={20} strokeWidth={1.5} />
                            </div> */}
                            <h3 className="text-xl font-poppins font-bold text-piko-black">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-piko-medium-grey leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {!isLast && (
                        <div className="hidden md:block absolute left-7 top-14 bottom-0 w-px">
                          <div className="relative h-full">
                            <div className="absolute inset-0 bg-gradient-to-b from-piko-purple/30 via-piko-violet/30 to-piko-purple/30"></div>

                         
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                              <div className="w-4 h-4 rotate-45 border-r-2 border-b-2 border-piko-purple"></div>
                            </div>

                           
                            <div className="absolute top-0 left-1/2 -translate-x-1/2">
                              <div className="w-1 h-1 bg-gradient-to-b from-piko-purple to-piko-violet rounded-full animate-ping opacity-75"></div>
                            </div>
                          </div>
                        </div>
                      )}

                   
                      {!isLast && (
                        <div className="md:hidden flex justify-center my-4">
                          <div className="relative w-48 h-px">
                            <div className="absolute inset-0 bg-gradient-to-r from-piko-purple/30 via-piko-violet/30 to-piko-purple/30"></div>

                          
                            <div className="absolute right-0 top-1/2 -translate-y-1/2">
                              <ArrowRight className="w-5 h-5 text-piko-purple" />
                            </div>
                            
                            <div className="absolute left-0 top-1/2 -translate-y-1/2">
                              <div className="w-2 h-2 bg-gradient-to-r from-piko-purple to-piko-violet rounded-full animate-ping opacity-75"></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 pt-6 border-t border-piko-soft-grey">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-piko-purple to-piko-violet flex items-center justify-center text-white">
                      ✓
                    </div>
                    <div>
                      <div className="text-lg font-bold text-piko-black">
                        No credit card required
                      </div>
                      <div className="text-sm text-piko-medium-grey">
                        Get started in minutes
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-piko-purple/20 to-piko-violet/20 rounded-3xl blur-2xl"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="/new/landing_happy_users.jpeg"
                  alt="PikoSend app interface showing easy steps"
                  className="w-full h-[400px] md:h-[500px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

              
                <div className="absolute inset-0 bg-gradient-to-t from-piko-plum/80 via-piko-purple/40 to-transparent">
               
                  <div className="absolute top-8 left-8 right-8">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">
                          98%
                        </div>
                        <div className="text-sm text-white/80">
                          Success Rate
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">
                          24/7
                        </div>
                        <div className="text-sm text-white/80">Support</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">
                          &lt; 3min
                        </div>
                        <div className="text-sm text-white/80">Setup Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-piko-purple/20 to-piko-violet/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-piko-violet/20 to-piko-purple/20 rounded-full blur-xl"></div>
            </div>

          
            <div className="mt-6 md:mt-1 text-center mt-2 md:mt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-piko-purple/10 to-piko-violet/10 text-piko-purple text-sm font-semibold rounded-full">
                <Zap size={16} />
                <span>Trusted by 500K+ users across Africa</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
