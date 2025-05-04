
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InvoiceForm from '@/components/InvoiceForm';
import InvoicePreview from '@/components/InvoicePreview';
import AdBanner from '@/components/AdBanner';
import { InvoiceData, defaultInvoice } from '@/types/invoice';
import { toast } from 'sonner';

const InvoiceBuilder: React.FC = () => {
  const [invoice, setInvoice] = useState<InvoiceData>(defaultInvoice);
  const [activeTab, setActiveTab] = useState<string>('edit');
  const [selectedTemplate, setSelectedTemplate] = useState<'classic' | 'modern' | 'minimal' | 'professional'>('classic');
  
  // Function to handle invoice updates from the form
  const handleInvoiceUpdate = (updatedInvoice: InvoiceData) => {
    setInvoice(updatedInvoice);
  };
  
  // Print invoice
  const handlePrint = () => {
    // Change to preview tab first
    setActiveTab('preview');
    
    // Set a small timeout to ensure the UI updates before printing
    setTimeout(() => {
      window.print();
    }, 100);
  };
  
  // Download as PDF
  const handleDownload = () => {
    toast.success('Invoice ready for download', {
      description: 'Your invoice has been prepared for download.',
    });
    
    // In a real implementation, this would generate a PDF
    // For now, we'll just trigger the print dialog which can be saved as PDF
    handlePrint();
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Create Invoice | Free Invoice Generator</title>
        <meta name="description" content="Create professional invoices for free with our easy-to-use invoice generator tool." />
      </Helmet>
      
      <div className="no-print">
        <Header />
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="no-print mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Create Your Invoice</h1>
            
            <div className="flex space-x-2">
              <Button onClick={handlePrint} variant="outline">
                Print
              </Button>
              <Button onClick={handleDownload}>Download PDF</Button>
            </div>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full mb-6">
              <TabsTrigger value="edit" className="flex-1">Edit Invoice</TabsTrigger>
              <TabsTrigger value="preview" className="flex-1">Preview</TabsTrigger>
            </TabsList>
            
            <TabsContent value="edit">
              <div className="mb-6">
                <AdBanner width="100%" height="90px" adSlot={1} />
              </div>
              
              <InvoiceForm onInvoiceUpdate={handleInvoiceUpdate} />
              
              <div className="mt-6">
                <AdBanner width="100%" height="250px" adSlot={2} />
              </div>
            </TabsContent>
            
            <TabsContent value="preview">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-xl font-semibold">Invoice Preview</h2>
                <Select 
                  value={selectedTemplate} 
                  onValueChange={(value) => setSelectedTemplate(value as any)}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select a template" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="classic">Classic Template</SelectItem>
                    <SelectItem value="modern">Modern Template</SelectItem>
                    <SelectItem value="minimal">Minimal Template</SelectItem>
                    <SelectItem value="professional">Professional Template</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <InvoicePreview invoice={invoice} template={selectedTemplate} />
            </TabsContent>
          </Tabs>
        </div>
        
        {/* This will only show when printing */}
        <div className="hidden print:block">
          <InvoicePreview invoice={invoice} template={selectedTemplate} />
        </div>
      </main>
      
      <div className="no-print">
        <Footer />
      </div>
    </div>
  );
};

export default InvoiceBuilder;
