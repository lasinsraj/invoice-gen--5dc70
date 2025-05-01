
import React from 'react';
import { InvoiceData } from '@/types/invoice';
import { formatCurrency, formatDate } from '@/utils/invoice-utils';

interface InvoicePreviewProps {
  invoice: InvoiceData;
}

const InvoicePreview: React.FC<InvoicePreviewProps> = ({ invoice }) => {
  return (
    <div className="invoice-preview max-w-4xl mx-auto bg-white shadow-lg p-8 rounded print-only">
      <div className="flex justify-between items-start mb-12">
        <div>
          <h1 className="text-3xl font-bold text-invoice-primary">INVOICE</h1>
          <p className="text-gray-500 mt-1">{formatDate(invoice.issueDate)}</p>
        </div>
        <div className="text-right">
          <p className="font-bold">{invoice.invoiceNumber || "#INV-0001"}</p>
          <p className="text-gray-500 mt-1">Due: {formatDate(invoice.dueDate)}</p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between mb-12">
        <div>
          <h2 className="text-sm font-semibold uppercase text-gray-500 mb-2">From</h2>
          <p className="font-medium">{invoice.billFrom.name || "Your Business Name"}</p>
          <p className="text-gray-700 whitespace-pre-line">{invoice.billFrom.address}</p>
          {invoice.billFrom.email && <p className="text-gray-700">{invoice.billFrom.email}</p>}
          {invoice.billFrom.phone && <p className="text-gray-700">{invoice.billFrom.phone}</p>}
        </div>
        
        <div className="mt-8 md:mt-0">
          <h2 className="text-sm font-semibold uppercase text-gray-500 mb-2">Bill To</h2>
          <p className="font-medium">{invoice.billTo.name || "Client Name"}</p>
          <p className="text-gray-700 whitespace-pre-line">{invoice.billTo.address}</p>
          {invoice.billTo.email && <p className="text-gray-700">{invoice.billTo.email}</p>}
          {invoice.billTo.phone && <p className="text-gray-700">{invoice.billTo.phone}</p>}
        </div>
      </div>
      
      <div className="mb-12">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-t">
              <th className="py-3 px-0 text-gray-500 text-left">Description</th>
              <th className="py-3 px-4 text-gray-500 text-right">Qty</th>
              <th className="py-3 px-4 text-gray-500 text-right">Rate</th>
              <th className="py-3 px-0 text-gray-500 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-4 px-0">{item.description}</td>
                <td className="py-4 px-4 text-right">{item.quantity}</td>
                <td className="py-4 px-4 text-right">{formatCurrency(item.rate, invoice.currency)}</td>
                <td className="py-4 px-0 text-right">{formatCurrency(item.amount, invoice.currency)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-10 md:mb-0 md:w-1/2">
          {invoice.notes && (
            <div className="mb-4">
              <h3 className="font-semibold text-gray-500 mb-1">Notes</h3>
              <p className="text-gray-700">{invoice.notes}</p>
            </div>
          )}
          
          {invoice.terms && (
            <div>
              <h3 className="font-semibold text-gray-500 mb-1">Terms</h3>
              <p className="text-gray-700">{invoice.terms}</p>
            </div>
          )}
        </div>
        
        <div className="md:w-1/3">
          <div className="bg-gray-50 p-4 rounded">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>{formatCurrency(invoice.subtotal, invoice.currency)}</span>
            </div>
            
            {invoice.taxRate > 0 && (
              <div className="flex justify-between mb-2">
                <span>Tax ({invoice.taxRate}%)</span>
                <span>{formatCurrency(invoice.tax, invoice.currency)}</span>
              </div>
            )}
            
            {invoice.discountRate > 0 && (
              <div className="flex justify-between mb-2">
                <span>Discount ({invoice.discountRate}%)</span>
                <span>-{formatCurrency(invoice.discount, invoice.currency)}</span>
              </div>
            )}
            
            <div className="flex justify-between font-bold mt-3 pt-3 border-t border-gray-300">
              <span>Total</span>
              <span className="text-invoice-primary">{formatCurrency(invoice.total, invoice.currency)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePreview;
