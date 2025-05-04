
import React from 'react';
import { InvoiceData } from '@/types/invoice';
import { formatDate, formatCurrency } from '@/utils/invoice-utils';

interface ModernTemplateProps {
  invoice: InvoiceData;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ invoice }) => {
  return (
    <div className="invoice-preview max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg p-8 rounded print-only">
      {/* Header with colored accent */}
      <div className="border-l-4 border-blue-500 pl-4 mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-blue-600">INVOICE</h1>
            <p className="text-gray-500">{formatDate(invoice.issueDate)}</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-blue-600">{invoice.invoiceNumber || "#INV-0001"}</p>
            <p className="text-gray-500">Due: {formatDate(invoice.dueDate)}</p>
          </div>
        </div>
      </div>
      
      {/* Address Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-sm font-semibold uppercase text-blue-600 mb-3">From</h2>
          <p className="font-medium">{invoice.billFrom.name || "Your Business Name"}</p>
          <p className="text-gray-700 whitespace-pre-line">{invoice.billFrom.address}</p>
          {invoice.billFrom.email && <p className="text-gray-700">{invoice.billFrom.email}</p>}
          {invoice.billFrom.phone && <p className="text-gray-700">{invoice.billFrom.phone}</p>}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-sm font-semibold uppercase text-blue-600 mb-3">Bill To</h2>
          <p className="font-medium">{invoice.billTo.name || "Client Name"}</p>
          <p className="text-gray-700 whitespace-pre-line">{invoice.billTo.address}</p>
          {invoice.billTo.email && <p className="text-gray-700">{invoice.billTo.email}</p>}
          {invoice.billTo.phone && <p className="text-gray-700">{invoice.billTo.phone}</p>}
        </div>
      </div>
      
      {/* Items Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-4 px-6 text-blue-600 font-semibold text-left">Description</th>
              <th className="py-4 px-6 text-blue-600 font-semibold text-right">Qty</th>
              <th className="py-4 px-6 text-blue-600 font-semibold text-right">Rate</th>
              <th className="py-4 px-6 text-blue-600 font-semibold text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="py-4 px-6">{item.description}</td>
                <td className="py-4 px-6 text-right">{item.quantity}</td>
                <td className="py-4 px-6 text-right">{formatCurrency(item.rate, invoice.currency)}</td>
                <td className="py-4 px-6 text-right">{formatCurrency(item.amount, invoice.currency)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer - Notes and Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {(invoice.notes || invoice.terms) && (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              {invoice.notes && (
                <div className="mb-4">
                  <h3 className="font-semibold text-blue-600 mb-2">Notes</h3>
                  <p className="text-gray-700">{invoice.notes}</p>
                </div>
              )}
              {invoice.terms && (
                <div>
                  <h3 className="font-semibold text-blue-600 mb-2">Terms</h3>
                  <p className="text-gray-700">{invoice.terms}</p>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div>
          <div className="bg-blue-600 text-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between mb-2 text-blue-100">
              <span>Subtotal</span>
              <span>{formatCurrency(invoice.subtotal, invoice.currency)}</span>
            </div>
            
            {invoice.taxRate > 0 && (
              <div className="flex justify-between mb-2 text-blue-100">
                <span>Tax ({invoice.taxRate}%)</span>
                <span>{formatCurrency(invoice.tax, invoice.currency)}</span>
              </div>
            )}
            
            {invoice.discountRate > 0 && (
              <div className="flex justify-between mb-2 text-blue-100">
                <span>Discount ({invoice.discountRate}%)</span>
                <span>-{formatCurrency(invoice.discount, invoice.currency)}</span>
              </div>
            )}
            
            <div className="flex justify-between font-bold mt-4 pt-4 border-t border-blue-400">
              <span>Total</span>
              <span>{formatCurrency(invoice.total, invoice.currency)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;
