import React from 'react';
import Hero from '../Home/Hero';
import Services from '../Home/Services';
import Projects from '../Home/Projects';
import Technologies from '../Home/Technologies';
import ContactCTA from '../Home/ContactCTA';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Technologies />
      <ContactCTA />
    </>
  );
};

export default HomePage;