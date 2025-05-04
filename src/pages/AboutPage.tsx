import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';

const AboutPage = () => {
  // Create structured data for the founder/creator
  const founderData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lasitha Rajapaksha",
    "url": "https://lasitharajapaksha.netlify.app/",
    "jobTitle": "Software Developer",
    "description": "Professional software developer specializing in web applications and invoice generator tools",
    "sameAs": [
      "https://lasitharajapaksha.netlify.app/",
      "https://linkedin.com/in/lasitha-rajapaksha",
      "https://github.com/lasitharajapaksha"
    ]
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Invoice Generator",
    "url": "https://invoicegenerator.com",
    "description": "Free professional invoice generator for small businesses and freelancers",
    "founder": {
      "@type": "Person",
      "name": "Lasitha Rajapaksha",
      "url": "https://lasitharajapaksha.netlify.app/"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About Us | Free Invoice Generator</title>
        <meta name="description" content="Learn about the team behind our free invoice generator tool. Founded by Lasitha Rajapaksha, we're committed to making invoicing simple for everyone." />
        <meta name="keywords" content="invoice generator, free invoice maker, about invoice generator, Lasitha Rajapaksha" />
        <script type="application/ld+json">
          {JSON.stringify(founderData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationData)}
        </script>
      </Helmet>

      <Header />
      
      
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-invoice-light py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-invoice-dark mb-6">About Invoice Generator</h1>
            <p className="text-xl text-gray-700">
              Learn about our mission and the team behind our free invoice generator tool.
            </p>
          </div>
        </section>
        
        {/* Ad Banner */}
        <div className="container mx-auto py-4">
          <AdBanner width="100%" height="90px" adSlot={1} />
        </div>
        
        {/* About Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-invoice-primary">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Invoice Generator was created to solve a common problem faced by freelancers and small businesses: creating professional invoices without expensive software or complicated processes.
              </p>
              <p className="text-gray-700 mb-6">
                Our platform offers a simple, intuitive interface that allows anyone to create beautiful, professional invoices in minutes, completely free of charge.
              </p>
            </div>
            
            {/* Founder Section */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-invoice-primary">Our Founder</h2>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                  Founder Photo
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Lasitha Rajapaksha</h3>
                  <p className="text-gray-600 mb-4">Software Developer & Founder</p>
                  <p className="text-gray-700 mb-4">
                    Lasitha is a passionate software developer specializing in creating intuitive web applications that solve real-world problems. With extensive experience in frontend and backend development, he created Invoice Generator to help small businesses manage their finances more efficiently.
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://lasitharajapaksha.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-invoice-primary hover:underline">Portfolio</a>
                    <a href="https://linkedin.com/in/lasitha-rajapaksha" target="_blank" rel="noopener noreferrer" className="text-invoice-primary hover:underline">LinkedIn</a>
                    <a href="https://github.com/lasitharajapaksha" target="_blank" rel="noopener noreferrer" className="text-invoice-primary hover:underline">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold mb-6 text-invoice-primary">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                We believe that creating professional invoices shouldn't be complicated or expensive. Our mission is to provide freelancers, small businesses, and entrepreneurs with easy-to-use tools that help them get paid faster and look professional.
              </p>
              <p className="text-gray-700">
                By offering our invoice generator completely free, we hope to support the growth of small businesses worldwide.
              </p>
            </div>
          </div>
        </section>
        
        {/* Ad Banner */}
        <div className="container mx-auto py-4">
          <AdBanner width="100%" height="250px" adSlot={2} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
