
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Ad Banner */}
        <div className="container mx-auto py-4">
          <AdBanner width="100%" height="90px" />
        </div>
        
        {/* Features Section */}
        <Features />
        
        {/* Ad Banner */}
        <div className="container mx-auto py-4">
          <AdBanner width="100%" height="250px" />
        </div>
        
        {/* How It Works */}
        <HowItWorks />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* CTA Section */}
        <CallToAction />
        
        {/* Ad Banner */}
        <div className="container mx-auto py-8">
          <AdBanner width="100%" height="90px" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
