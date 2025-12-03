import {
  Navbar,
  Hero,
  Features,
  ProductShowcase,
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
} from './components';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <ProductShowcase />
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
}

export default App;
