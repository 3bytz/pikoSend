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
  AppScreensTimeline,
} from '../components';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
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
      <Footer />
    </div>
  );
};
