
import React from 'react';
import { InvoiceData } from '@/types/invoice';
import { formatDate, formatCurrency } from '@/utils/invoice-utils';

interface ProfessionalTemplateProps {
  invoice: InvoiceData;
}

const ProfessionalTemplate: React.FC<ProfessionalTemplateProps> = ({ invoice }) => {
  return (
    <div className="invoice-preview max-w-4xl mx-auto bg-white shadow-lg rounded print-only">
      {/* Header with accent color */}
      <div className="bg-gray-800 text-white p-8 rounded-t">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">INVOICE</h1>
            <p className="text-gray-300 mt-1">{formatDate(invoice.issueDate)}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-semibold">{invoice.invoiceNumber || "#INV-0001"}</p>
            <p className="text-gray-300 mt-1">Due: {formatDate(invoice.dueDate)}</p>
          </div>
        </div>
      </div>
      
      {/* Address section */}
      <div className="p-8 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded shadow-sm">
            <h2 className="text-sm font-semibold uppercase text-gray-500 mb-4 border-b pb-2">From</h2>
            <p className="font-medium text-lg">{invoice.billFrom.name || "Your Business Name"}</p>
            <p className="text-gray-700 whitespace-pre-line mt-2">{invoice.billFrom.address}</p>
            {invoice.billFrom.email && <p className="text-gray-700 mt-2">{invoice.billFrom.email}</p>}
            {invoice.billFrom.phone && <p className="text-gray-700">{invoice.billFrom.phone}</p>}
          </div>
          
          <div className="bg-white p-6 rounded shadow-sm">
            <h2 className="text-sm font-semibold uppercase text-gray-500 mb-4 border-b pb-2">Bill To</h2>
            <p className="font-medium text-lg">{invoice.billTo.name || "Client Name"}</p>
            <p className="text-gray-700 whitespace-pre-line mt-2">{invoice.billTo.address}</p>
            {invoice.billTo.email && <p className="text-gray-700 mt-2">{invoice.billTo.email}</p>}
            {invoice.billTo.phone && <p className="text-gray-700">{invoice.billTo.phone}</p>}
          </div>
        </div>
      </div>
      
      {/* Items Table */}
      <div className="p-8">
        <div className="bg-white rounded shadow-sm overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-4 px-6 text-left font-semibold">Description</th>
                <th className="py-4 px-6 text-right font-semibold">Qty</th>
                <th className="py-4 px-6 text-right font-semibold">Rate</th>
                <th className="py-4 px-6 text-right font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-4 px-6">{item.description}</td>
                  <td className="py-4 px-6 text-right">{item.quantity}</td>
                  <td className="py-4 px-6 text-right">{formatCurrency(item.rate, invoice.currency)}</td>
                  <td className="py-4 px-6 text-right font-medium">{formatCurrency(item.amount, invoice.currency)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Footer */}
      <div className="p-8 pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {(invoice.notes || invoice.terms) && (
              <div className="bg-white p-6 rounded shadow-sm">
                {invoice.notes && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 mb-2 border-b pb-2">Notes</h3>
                    <p className="text-gray-600">{invoice.notes}</p>
                  </div>
                )}
                
                {invoice.terms && (
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2 border-b pb-2">Terms & Conditions</h3>
                    <p className="text-gray-600">{invoice.terms}</p>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div>
            <div className="bg-white p-6 rounded shadow-sm">
              <div className="space-y-2">
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
                
                <div className="flex justify-between pt-4 mt-4 border-t border-gray-200">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-lg font-bold">{formatCurrency(invoice.total, invoice.currency)}</span>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-gray-200 text-center text-gray-500">
                <p>Thank you for your business!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTemplate;
