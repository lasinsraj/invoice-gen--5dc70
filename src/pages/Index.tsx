
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  useEffect(() => {
    // This helps with SEO by setting the document title
    document.title = "Free Invoice Generator | Create Professional Invoices Online";
  }, []);

  // Create structured data for rich results
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Free Invoice Generator",
    "url": "https://invoicegenerator.com",
    "description": "Create professional invoices online with our free invoice generator tool. No sign-up required.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "screenshot": "https://invoicegenerator.com/og-image.png",
    "featureList": "Free invoice generation, PDF download, custom templates, no registration required",
    "softwareVersion": "1.0"
  };

  return (
    <>
      <Helmet>
        <title>Free Invoice Generator | Create Professional Invoices Online</title>
        <meta name="description" content="Create professional invoices in seconds with our free invoice generator tool. No sign-up required, download as PDF instantly." />
        <meta name="keywords" content="invoice generator, free invoice generator, invoice generator tool, free invoice maker, invoice maker, create invoice online, create invoice free" />
        <link rel="canonical" href="https://invoicegenerator.com/" />
        
        {/* Structured data for rich results - using JSON stringify to ensure proper formatting */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
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
    </>
  );
};

export default Index;
