import {
  Navbar,
  Hero,
  Features,
  ProductShowcase,
  UserPersonas,
  PersonalBusiness,
  HowItWorks,
  Statistics,
  MidBanner,
  Testimonial,
  Press,
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
      <HowItWorks />
      <Statistics />
      <MidBanner />
      <Testimonial />
      <Press />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
