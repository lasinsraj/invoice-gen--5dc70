
import React from 'react';
import { InvoiceItem } from '@/types/invoice';
import { formatCurrency } from '@/utils/invoice-utils';

interface PreviewLineItemsProps {
  items: InvoiceItem[];
  currency: string;
}

const PreviewLineItems: React.FC<PreviewLineItemsProps> = ({ items, currency }) => {
  return (
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
          {items.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-4 px-0">{item.description}</td>
              <td className="py-4 px-4 text-right">{item.quantity}</td>
              <td className="py-4 px-4 text-right">{formatCurrency(item.rate, currency)}</td>
              <td className="py-4 px-0 text-right">{formatCurrency(item.amount, currency)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PreviewLineItems;
