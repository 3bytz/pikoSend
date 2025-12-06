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
  Blog,
  FAQ,
  Newsletter,
  Footer,
  SEO,
} from '../components';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="PikoSend - Send Money Anywhere, Anytime"
        description="Send and receive money globally with PikoSend. Fast, secure, and affordable money transfers with the best rates."
        keywords="money transfer, international payments, send money, receive money, cross-border payments, remittance, digital wallet, global transfers"
      />
      <Navbar />
      <main id="main-content">
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
        <Blog />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};
