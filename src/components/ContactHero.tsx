import React from 'react';
import { 
  MessageSquare, 

  Clock, 
  Users, 
  Zap, 
  Shield,
  Sparkles
} from 'lucide-react';
import { Container } from './Container';
// import { AppStoreBadges } from './AppStoreBadges';

export const ContactHero: React.FC = () => {
  const stats = [
    { icon: Clock, value: '24/7', label: 'Support Available' },
    { icon: Users, value: '< 1 min', label: 'Avg Response Time' },
    { icon: Zap, value: '98%', label: 'Satisfaction Rate' },
    { icon: Shield, value: '100%', label: 'Secure & Private' }
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16 md:pt-4">
      
      <div className="absolute inset-0 bg-gradient-to-br from-piko-purple via-piko-violet to-piko-lilac">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-piko-lilac rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-piko-purple rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-white/5 rounded-full blur-2xl opacity-20"></div>
      </div>

     
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      <Container className="relative z-10 py-4 md:py-6 ">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
      
          <div className="text-white space-y-8 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full animate-fade-in">
                <MessageSquare className="w-5 h-5" />
                <span>Get in Touch</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold leading-tight animate-fade-up">
                We’re Here When 
                <span className="block mt-2 md:mt-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-white">
                    You Need Us
                  </span>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
                Have questions or need help with your transactions or account? Our dedicated customer support team is available 24/7 to help you. Feel free to reach out to us through WhatsApp, SMS, phone, email, or social media.
              </p>
            </div>

           
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-4 md:p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white mx-auto mb-3" />
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                );
              })}
            </div>

        
            {/* <div className="pt-4 md:pt-6 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-base text-white/80 mb-4">Get instant support on mobile</p>
              <AppStoreBadges variant="light" size="md" />
            </div> */}
          </div>

          
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-white/10 via-transparent to-white/5 rounded-3xl blur-2xl opacity-50"></div>
            
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-3xl group hover:shadow-4xl transition-all duration-500">
              <div className="aspect-[4/5] md:aspect-[4/3] overflow-hidden">
                <img
                  src="/new/features_expert.jpeg"
                  alt="PikoSend Support Team"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/30">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-white">
                        <div className="text-lg font-bold mb-1">Need support?</div>
                        <div className="text-sm text-white/80">Get Real Help from Real People, 24/7</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                        <span className="text-white text-sm font-medium">Here for you</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-piko-purple to-piko-violet border-2 border-white"></div>
                        ))}
                      </div>
                      <div className="text-white text-sm">
                        <span className="font-bold">15+</span> support agents available
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-6 left-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 border border-white/30">
                    <Sparkles className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">Premium Support</span>
                  </div>
                </div>
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
            fillOpacity="0.05"
          />
          <path
            d="M0,48L80,56C160,64,320,80,480,80C640,80,800,64,960,56C1120,48,1280,48,1360,48L1440,48L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="white"
            fillOpacity="0.1"
          />
          <path
            d="M0,32L80,40C160,48,320,64,480,64C640,64,800,48,960,40C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="white"
            fillOpacity="0.15"
          />
        </svg>
      </div>
    </section>
  );
};