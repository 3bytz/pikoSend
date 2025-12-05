import React from 'react';
import { Navbar, ContactHero, ContactForm, Footer, SEO } from '../components';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Contact Us - PikoSend"
        description="Get in touch with PikoSend. Our support team is ready to help you with any questions about international money transfers and payments."
        keywords="contact pikosend, customer support, help center, money transfer support"
      />
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer />
    </div>
  );
};
