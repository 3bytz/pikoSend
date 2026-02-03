import React from 'react';
import {
  Navbar,
  DynamicHero,
  Features,

  AppScreenCarousel,
  LiveTestimonials,
  PersonalBusiness,
  HowItWorks,
  TrustBadges,
  Testimonial,
  Press,
  FAQ,
  Footer,
  SEO,
} from '../components';
import { FloatingWaitingListCTA } from '../components/WaitingList/WaitingListCTA';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="PikoSend - Send Money Anywhere, Anytime"
        description="Send and receive money with PikoSend. Fast, secure, and affordable money transfers with the best rates."
        keywords="money transfer, international payments, send money, receive money, cross-border payments, remittance, digital wallet"
      />
      <Navbar />
      <main id="main-content">
        <DynamicHero />
        <AppScreenCarousel />
        <Features />
        <LiveTestimonials />
        <PersonalBusiness />
        <HowItWorks />
        {/* <Statistics /> */}
        <TrustBadges />
        <Testimonial />
        <Press />
        <FAQ />
      </main>
      <Footer />
      <FloatingWaitingListCTA />
    </div>
  );
};
