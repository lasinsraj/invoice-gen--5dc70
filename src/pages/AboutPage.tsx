
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-invoice-light py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-invoice-dark mb-6">About Invoice Generator</h1>
            <p className="text-xl text-gray-700">
              Simple, free, and professional invoices for freelancers, small businesses, and everyone in between.
            </p>
          </div>
        </section>
        
        {/* Ad Banner */}
        <div className="container mx-auto py-4">
          <AdBanner width="100%" height="90px" />
        </div>
        
        {/* Our Story */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                Invoice Generator was created with a simple mission: to provide freelancers, small businesses, and entrepreneurs with a straightforward way to create professional invoices without the complexity or cost of full accounting software.
              </p>
              <p className="text-gray-700 mb-4">
                We believe that invoicing should be simple and accessible to everyone, regardless of their technical skills or budget. That's why we've built a free tool that requires no account creation or complicated setup.
              </p>
              <p className="text-gray-700">
                Whether you're a freelance designer sending your first invoice or a small business owner who needs a quick solution for billing clients, our invoice generator is designed to help you get paid faster with minimal hassle.
              </p>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="bg-gray-50 py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-10 text-center">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-invoice-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Fill Out the Form</h3>
                <p className="text-gray-600">Enter your business details, client information, and invoice items.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-invoice-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Preview Your Invoice</h3>
                <p className="text-gray-600">See exactly how your invoice will look before downloading.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-invoice-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Download & Send</h3>
                <p className="text-gray-600">Download as a PDF and send it to your client via email.</p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Button asChild size="lg">
                <Link to="/invoice">Create Invoice Now</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Ad Banner */}
        <div className="container mx-auto py-4">
          <AdBanner width="100%" height="250px" />
        </div>
        
        {/* Features */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-10 text-center">Features & Benefits</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-invoice-primary">Completely Free</h3>
                <p className="text-gray-600">No hidden fees, subscriptions, or usage limits. Create as many invoices as you need.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-invoice-primary">No Account Required</h3>
                <p className="text-gray-600">Get started immediately without any signup, login, or personal information.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-invoice-primary">Professional Design</h3>
                <p className="text-gray-600">Clean, professional invoice templates that make your business look its best.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-invoice-primary">PDF Download</h3>
                <p className="text-gray-600">Instantly download your invoice as a PDF to send to clients or keep for your records.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-invoice-primary">Tax & Discount Calculation</h3>
                <p className="text-gray-600">Automatically calculate tax and discount amounts based on your specified rates.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-invoice-primary">Multiple Currencies</h3>
                <p className="text-gray-600">Support for multiple currencies to accommodate international clients.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-invoice-primary text-white py-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Creating Professional Invoices Today</h2>
            <p className="text-xl mb-8">No signup required. It's completely free and takes less than a minute!</p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-invoice-primary hover:bg-gray-100">
              <Link to="/invoice">Create Your First Invoice</Link>
            </Button>
          </div>
        </section>
        
        {/* Ad Banner */}
        <div className="container mx-auto py-4">
          <AdBanner width="100%" height="90px" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
