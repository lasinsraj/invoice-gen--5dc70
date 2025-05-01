
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InvoiceForm from '@/components/InvoiceForm';
import InvoicePreview from '@/components/InvoicePreview';
import AdBanner from '@/components/AdBanner';
import { InvoiceData, defaultInvoice } from '@/types/invoice';
import { generatePDF } from '@/utils/invoice-utils';

const InvoiceBuilder = () => {
  const [activeTab, setActiveTab] = useState('edit');
  const [invoice, setInvoice] = useState<InvoiceData>(defaultInvoice);
  const { toast } = useToast();

  const handleInvoiceUpdate = (updatedInvoice: InvoiceData) => {
    setInvoice(updatedInvoice);
  };

  const handleDownloadPDF = () => {
    try {
      generatePDF(invoice);
      toast({
        title: "PDF Generated",
        description: "Your invoice has been downloaded successfully!",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem generating your PDF. Please try again.",
      });
    }
  };

  const handlePreview = () => {
    setActiveTab('preview');
    window.scrollTo(0, 0);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-invoice-primary mb-2">Invoice Generator</h1>
          <p className="text-gray-600">Create professional invoices in seconds. Fill in the form and download your PDF.</p>
        </div>
        
        {/* Top Ad Banner */}
        <div className="mb-6">
          <AdBanner width="100%" height="90px" />
        </div>
        
        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="w-full max-w-md grid grid-cols-2">
            <TabsTrigger value="edit">Edit Invoice</TabsTrigger>
            <TabsTrigger value="preview">Preview Invoice</TabsTrigger>
          </TabsList>
          
          <TabsContent value="edit" className="mt-6">
            <div className="flex justify-end mb-4">
              <Button onClick={handlePreview} className="ml-2">
                Preview Invoice
              </Button>
            </div>
            
            <InvoiceForm onInvoiceUpdate={handleInvoiceUpdate} />
            
            {/* Side Ad Banner */}
            <div className="my-6">
              <AdBanner width="100%" height="600px" />
            </div>
          </TabsContent>
          
          <TabsContent value="preview" className="mt-6">
            <div className="flex justify-end mb-4 space-x-2 no-print">
              <Button variant="outline" onClick={() => setActiveTab('edit')}>
                Back to Edit
              </Button>
              <Button onClick={handlePrint}>
                Print
              </Button>
              <Button onClick={handleDownloadPDF}>
                Download PDF
              </Button>
            </div>
            
            <InvoicePreview invoice={invoice} />
            
            {/* Bottom Ad Banner */}
            <div className="my-6 no-print">
              <AdBanner width="100%" height="250px" />
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default InvoiceBuilder;
