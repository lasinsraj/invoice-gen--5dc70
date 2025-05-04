
import React from 'react';
import { InvoiceData } from '@/types/invoice';
import { formatDate, formatCurrency } from '@/utils/invoice-utils';

interface MinimalTemplateProps {
  invoice: InvoiceData;
}

const MinimalTemplate: React.FC<MinimalTemplateProps> = ({ invoice }) => {
  return (
    <div className="invoice-preview max-w-4xl mx-auto bg-white shadow-lg p-8 rounded print-only font-light">
      {/* Simple header */}
      <div className="flex justify-between items-start mb-10 border-b pb-6">
        <div>
          <h1 className="text-2xl font-normal tracking-wider">INVOICE</h1>
          <p className="text-gray-500 mt-1">{formatDate(invoice.issueDate)}</p>
        </div>
        <div className="text-right">
          <p className="text-lg">{invoice.invoiceNumber || "#INV-0001"}</p>
          <p className="text-gray-500 mt-1">Due: {formatDate(invoice.dueDate)}</p>
        </div>
      </div>
      
      {/* Address section - clean and minimal */}
      <div className="flex flex-col md:flex-row justify-between mb-12">
        <div>
          <h2 className="text-sm uppercase text-gray-400 mb-2">From</h2>
          <p className="font-medium">{invoice.billFrom.name || "Your Business Name"}</p>
          <p className="text-gray-600 whitespace-pre-line">{invoice.billFrom.address}</p>
          {invoice.billFrom.email && <p className="text-gray-600">{invoice.billFrom.email}</p>}
          {invoice.billFrom.phone && <p className="text-gray-600">{invoice.billFrom.phone}</p>}
        </div>
        
        <div className="mt-6 md:mt-0">
          <h2 className="text-sm uppercase text-gray-400 mb-2">Bill To</h2>
          <p className="font-medium">{invoice.billTo.name || "Client Name"}</p>
          <p className="text-gray-600 whitespace-pre-line">{invoice.billTo.address}</p>
          {invoice.billTo.email && <p className="text-gray-600">{invoice.billTo.email}</p>}
          {invoice.billTo.phone && <p className="text-gray-600">{invoice.billTo.phone}</p>}
        </div>
      </div>
      
      {/* Minimalist items table */}
      <div className="mb-12">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2 font-normal text-gray-400 text-left">Description</th>
              <th className="py-2 font-normal text-gray-400 text-right">Qty</th>
              <th className="py-2 font-normal text-gray-400 text-right">Rate</th>
              <th className="py-2 font-normal text-gray-400 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item) => (
              <tr key={item.id} className="border-t border-gray-100">
                <td className="py-4">{item.description}</td>
                <td className="py-4 text-right">{item.quantity}</td>
                <td className="py-4 text-right">{formatCurrency(item.rate, invoice.currency)}</td>
                <td className="py-4 text-right">{formatCurrency(item.amount, invoice.currency)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer section */}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2 mb-6 md:mb-0">
          {invoice.notes && (
            <div className="mb-4">
              <h3 className="text-sm uppercase text-gray-400 mb-2">Notes</h3>
              <p className="text-gray-600">{invoice.notes}</p>
            </div>
          )}
          
          {invoice.terms && (
            <div>
              <h3 className="text-sm uppercase text-gray-400 mb-2">Terms</h3>
              <p className="text-gray-600">{invoice.terms}</p>
            </div>
          )}
        </div>
        
        <div className="md:w-1/3">
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>{formatCurrency(invoice.subtotal, invoice.currency)}</span>
            </div>
            
            {invoice.taxRate > 0 && (
              <div className="flex justify-between text-gray-600">
                <span>Tax ({invoice.taxRate}%)</span>
                <span>{formatCurrency(invoice.tax, invoice.currency)}</span>
              </div>
            )}
            
            {invoice.discountRate > 0 && (
              <div className="flex justify-between text-gray-600">
                <span>Discount ({invoice.discountRate}%)</span>
                <span>-{formatCurrency(invoice.discount, invoice.currency)}</span>
              </div>
            )}
            
            <div className="flex justify-between pt-2 border-t font-medium">
              <span>Total</span>
              <span>{formatCurrency(invoice.total, invoice.currency)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalTemplate;
