import React from 'react';
import {
  Navbar,
  DynamicHero,
  Features,
  Mission,
  AppScreenCarousel,
  LiveTestimonials,
  PersonalBusiness,
  HowItWorks,
  Statistics,
  TrustBadges,
  Testimonial,
  Press,
  FAQ,
  Newsletter,
  Footer,
} from '../components';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <DynamicHero />
      <Features />
      <Mission />
      <AppScreenCarousel />
      <LiveTestimonials />
      <PersonalBusiness />
      <HowItWorks />
      <Statistics />
      <TrustBadges />
      <Testimonial />
      <Press />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
};
