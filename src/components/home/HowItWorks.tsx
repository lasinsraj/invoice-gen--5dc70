
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-invoice-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Fill in your details</h3>
            <p className="text-gray-600">Enter your company and client information</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-invoice-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Add invoice items</h3>
            <p className="text-gray-600">List your products or services with prices</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-invoice-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Customize your invoice</h3>
            <p className="text-gray-600">Add taxes, discounts, and payment terms</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-invoice-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="text-xl font-semibold mb-2">Download & send</h3>
            <p className="text-gray-600">Get your invoice as a PDF instantly</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/invoice">Create Your First Invoice</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
