import React from 'react';
import {
  Navbar,
  Hero,
  Features,
  Mission,
  ReceiveMoneyHero,
  GlobalAccountsHero,
  CardsHero,
  SendMoneyHero,
  AppScreensTimeline,
  TapGo,
  UserPersonas,
  PersonalBusiness,
  BusinessSection,
  HowItWorks,
  Statistics,
  TrustBadges,
  MidBanner,
  Testimonial,
  Press,
  Blog,
  FAQ,
  Newsletter,
  Footer,
} from '../components';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Mission />
      <ReceiveMoneyHero />
      <GlobalAccountsHero />
      <CardsHero />
      <SendMoneyHero />
      <AppScreensTimeline />
      <TapGo />
      <UserPersonas />
      <PersonalBusiness />
      <BusinessSection />
      <HowItWorks />
      <Statistics />
      <TrustBadges />
      <MidBanner />
      <Testimonial />
      <Press />
      <Blog />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
};
