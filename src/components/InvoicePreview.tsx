
import React from 'react';
import { InvoiceData } from '@/types/invoice';
import PreviewHeader from '@/components/invoice/PreviewHeader';
import PreviewAddress from '@/components/invoice/PreviewAddress';
import PreviewLineItems from '@/components/invoice/PreviewLineItems';
import PreviewNotes from '@/components/invoice/PreviewNotes';
import PreviewSummary from '@/components/invoice/PreviewSummary';

interface InvoicePreviewProps {
  invoice: InvoiceData;
}

const InvoicePreview: React.FC<InvoicePreviewProps> = ({ invoice }) => {
  return (
    <div className="invoice-preview max-w-4xl mx-auto bg-white shadow-lg p-8 rounded print-only">
      <PreviewHeader
        invoiceNumber={invoice.invoiceNumber}
        issueDate={invoice.issueDate}
        dueDate={invoice.dueDate}
      />
      
      <div className="flex flex-col md:flex-row justify-between mb-12">
        <PreviewAddress
          title="From"
          addressData={invoice.billFrom}
        />
        
        <PreviewAddress
          title="Bill To"
          addressData={invoice.billTo}
        />
      </div>
      
      <PreviewLineItems
        items={invoice.items}
        currency={invoice.currency}
      />
      
      <div className="flex flex-col md:flex-row justify-between">
        <PreviewNotes
          notes={invoice.notes}
          terms={invoice.terms}
        />
        
        <PreviewSummary
          subtotal={invoice.subtotal}
          taxRate={invoice.taxRate}
          tax={invoice.tax}
          discountRate={invoice.discountRate}
          discount={invoice.discount}
          total={invoice.total}
          currency={invoice.currency}
        />
      </div>
    </div>
  );
};

export default InvoicePreview;
