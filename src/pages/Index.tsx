
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

        {/* Ad Banner 1 */}
        <div className="container mx-auto py-4">
          <AdBanner width="100%" height="90px" adSlot={1} />
        </div>
        
        {/* Features Section */}
        <Features />
        
        {/* Ad Banner 2 */}
        <div className="container mx-auto py-4">
          <AdBanner width="100%" height="250px" adSlot={2} />
        </div>
        
        {/* How It Works */}
        <HowItWorks />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* CTA Section */}
        <CallToAction />
        
        {/* Ad Banner 3 */}
        <div className="container mx-auto py-8">
          <AdBanner width="100%" height="90px" adSlot={3} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
