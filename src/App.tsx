import {
  Hero,
  Features,
  PersonalBusiness,
  MidBanner,
  Testimonial,
  Newsletter,
  Footer,
} from './components';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <PersonalBusiness />
      <MidBanner />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
