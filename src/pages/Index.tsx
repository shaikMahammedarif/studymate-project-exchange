
import React from 'react';
import Hero from '../components/Hero';
import ProjectShowcase from '../components/ProjectShowcase';
import HowItWorks from '../components/HowItWorks';
import ContributorCTA from '../components/ContributorCTA';
import TrustIndicators from '../components/TrustIndicators';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProjectShowcase />
      <HowItWorks />
      <ContributorCTA />
      <TrustIndicators />
      <Footer />
    </div>
  );
};

export default Index;
