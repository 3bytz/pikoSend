import React from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { Users, Plane, ShoppingCart, GraduationCap, Briefcase } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Persona {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const personas: Persona[] = [
  {
    icon: Briefcase,
    title: 'Freelancers & Creators',
    description: 'Get paid by clients worldwide. Accept payments in multiple currencies and withdraw to your local bank.',
    features: ['Global payment acceptance', 'Low fees', 'Fast withdrawals', 'Professional invoicing'],
    color: '#582C8D',
  },
  {
    icon: Plane,
    title: 'Travelers',
    description: 'Spend like a local wherever you go. Get the best exchange rates and avoid foreign transaction fees.',
    features: ['Multi-currency wallet', 'Zero FX markup', 'Local account details', 'Travel insurance'],
    color: '#8B5CF6',
  },
  // {
  //   icon: ShoppingCart,
  //   title: 'Online Shoppers',
  //   description: 'Shop without worries. Get virtual cards for secure online purchases.',
  //   features: ['Instant virtual cards', 'Cashback rewards', 'Purchase protection', 'Budget controls'],
  //   color: '#A78BFA',
  // },
  {
    icon: GraduationCap,
    title: 'Students',
    description: 'Manage your finances while studying abroad. Receive money from family and spend wisely.',
    features: ['Student discounts', 'Easy money transfers', 'Budget tracking', 'No hidden fees'],
    color: '#8B5CF6',
  },
  {
    icon: Users,
    title: 'Social Sellers',
    description: 'Sell on social media and get paid instantly. Accept payments from customers anywhere.',
    features: ['Payment links', 'Instant settlements', 'Sales analytics', 'Customer management'],
    color: '#582C8D',
  },
];

export const UserPersonas: React.FC = () => {
  return (
    <Section background="soft-grey" id='forall'>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-h2 font-poppins font-bold text-piko-black mb-4">
            PikoSend for Everyone
          </h2>
          <p className="text-piko-medium-grey text-lg max-w-2xl mx-auto">
            Whether you're a freelancer, traveler, student, or entrepreneur, PikoSend has the perfect solution for you.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {personas.map((persona, index) => {
              const Icon = persona.icon;
              return (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] h-full">
                    <div
                      className="flex items-center justify-center w-16 h-16 rounded-full mb-6"
                      style={{ backgroundColor: `${persona.color}20` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: persona.color }} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-xl font-poppins font-bold text-piko-black mb-3">
                      {persona.title}
                    </h3>

                    <p className="text-piko-medium-grey mb-6 leading-relaxed">
                      {persona.description}
                    </p>

                    <ul className="space-y-2">
                      {persona.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-piko-medium-grey">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: persona.color }}
                          ></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </Section>
  );
};
