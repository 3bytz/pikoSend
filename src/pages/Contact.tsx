import React from 'react';
import { Navbar, ContactHero, ContactForm, Footer } from '../components';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer />
    </div>
  );
};
