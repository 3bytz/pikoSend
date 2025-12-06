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
<<<<<<< HEAD
  AppScreensTimeline,
=======
  SEO,
>>>>>>> e76889a204835f5893ca7b3d37794348eaaad29c
} from '../components';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="PikoSend - Send Money Anywhere, Anytime"
        description="Send and receive money globally with PikoSend. Fast, secure, and affordable international money transfers with the best exchange rates."
        keywords="money transfer, international payments, send money, receive money, cross-border payments, remittance, digital wallet, global transfers"
      />
      <Navbar />
<<<<<<< HEAD
      <Hero />
      <Mission />
      <ReceiveMoneyHero />
      <Features />    
      <GlobalAccountsHero />
      <TapGo />
      <UserPersonas />
      <PersonalBusiness />
      <SendMoneyHero />
      <BusinessSection />
      <CardsHero />
      <HowItWorks />
      <AppScreensTimeline />
      <Statistics />
      <TrustBadges />
      <MidBanner />
      <Testimonial />
      <Press />
      <Blog />
      <FAQ />
      <Newsletter />
=======
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
>>>>>>> e76889a204835f5893ca7b3d37794348eaaad29c
      <Footer />
    </div>
  );
};
