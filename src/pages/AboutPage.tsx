
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const AboutPage = () => {
  // Create structured data for the founder/creator
  const founderData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lasitha Rajapaksha",
    "url": "https://lasitharajapaksha.netlify.app/",
    "jobTitle": "Software Developer",
    "description": "Professional software developer specializing in web applications and invoice generator tools",
    "image": "https://lasitharajapaksha.netlify.app/profile.jpg",
    "sameAs": [
      "https://lasitharajapaksha.netlify.app/",
      "https://linkedin.com/in/lasitha-rajapaksha",
      "https://github.com/lasitharajapaksha"
    ],
    "knowsAbout": ["Web Development", "Invoice Generation", "React", "JavaScript", "TypeScript", "UI/UX Design"]
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
      "url": "https://lasitharajapaksha.netlify.app/",
      "sameAs": [
        "https://lasitharajapaksha.netlify.app/",
        "https://linkedin.com/in/lasitha-rajapaksha",
        "https://github.com/lasitharajapaksha"
      ]
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
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-invoice-primary">Our Story</h2>
                <p className="text-gray-700 mb-6">
                  Invoice Generator was created to solve a common problem faced by freelancers and small businesses: creating professional invoices without expensive software or complicated processes.
                </p>
                <p className="text-gray-700 mb-6">
                  Our platform offers a simple, intuitive interface that allows anyone to create beautiful, professional invoices in minutes, completely free of charge.
                </p>
              </CardContent>
            </Card>
            
            {/* Founder Section - Enhanced with more details */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-invoice-primary">Our Founder</h2>
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="w-full md:w-1/3">
                    <div className="rounded-lg bg-gray-100 aspect-square flex items-center justify-center text-gray-500 overflow-hidden">
                      <img 
                        src="https://lasitharajapaksha.netlify.app/profile.jpg" 
                        alt="Lasitha Rajapaksha" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/300?text=Lasitha+Rajapaksha";
                        }}
                      />
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <a 
                        href="https://lasitharajapaksha.netlify.app/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block text-invoice-primary hover:underline font-medium"
                      >
                        Portfolio Website
                      </a>
                      
                      <a 
                        href="https://linkedin.com/in/lasitha-rajapaksha" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-invoice-primary hover:underline font-medium" 
                      >
                        LinkedIn Profile
                      </a>
                      
                      <a 
                        href="https://github.com/lasitharajapaksha" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-invoice-primary hover:underline font-medium"
                      >
                        GitHub Profile
                      </a>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-bold mb-2">Lasitha Rajapaksha</h3>
                    <p className="text-gray-600 mb-4">Software Developer & Founder</p>
                    
                    <p className="text-gray-700 mb-4">
                      Lasitha is a passionate software developer specializing in creating intuitive web applications that solve real-world problems. With extensive experience in frontend and backend development, he created Invoice Generator to help small businesses manage their finances more efficiently.
                    </p>
                    
                    <h4 className="font-semibold text-xl mt-6 mb-3">Professional Background</h4>
                    <p className="text-gray-700 mb-4">
                      With over 8 years of experience in web development, Lasitha has worked with various technologies and frameworks to build user-friendly applications. His expertise in React, TypeScript, and UI/UX design has been instrumental in creating the Invoice Generator platform.
                    </p>
                    
                    <h4 className="font-semibold text-xl mt-6 mb-3">Vision for Invoice Generator</h4>
                    <p className="text-gray-700">
                      "I created Invoice Generator because I believe that professional tools should be accessible to everyone, regardless of their budget or technical expertise. My goal is to continue expanding this platform with features that make financial management easier for small businesses and freelancers around the world."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-invoice-primary">Our Mission</h2>
                <p className="text-gray-700 mb-6">
                  We believe that creating professional invoices shouldn't be complicated or expensive. Our mission is to provide freelancers, small businesses, and entrepreneurs with easy-to-use tools that help them get paid faster and look professional.
                </p>
                <p className="text-gray-700">
                  By offering our invoice generator completely free, we hope to support the growth of small businesses worldwide.
                </p>
                
                <Separator className="my-8" />
                
                <h3 className="text-2xl font-bold mb-4">Core Values</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Accessibility - Making professional tools available to everyone</li>
                  <li>Simplicity - Creating intuitive interfaces that require no training</li>
                  <li>Quality - Delivering professional-looking documents every time</li>
                  <li>Privacy - Respecting user data and maintaining high security standards</li>
                </ul>
              </CardContent>
            </Card>
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
