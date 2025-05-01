
import React, { useState, useEffect } from 'react';
import { InvoiceData, InvoiceItem, defaultInvoice } from '@/types/invoice';
import { 
  calculateSubtotal, 
  calculateTax, 
  calculateDiscount, 
  calculateTotal,
  createEmptyItem
} from '@/utils/invoice-utils';
import { toast } from '@/hooks/use-toast';

// Import our new components
import InvoiceHeader from './InvoiceHeader';
import AddressSection from './AddressSection';
import LineItems from './LineItems';
import InvoiceSummary from './InvoiceSummary';

interface InvoiceFormProps {
  onInvoiceUpdate: (invoice: InvoiceData) => void;
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({ onInvoiceUpdate }) => {
  const [invoice, setInvoice] = useState<InvoiceData>(defaultInvoice);

  // Calculate totals whenever items or rates change
  useEffect(() => {
    const subtotal = calculateSubtotal(invoice.items);
    const tax = calculateTax(subtotal, invoice.taxRate);
    const discount = calculateDiscount(subtotal, invoice.discountRate);
    const total = calculateTotal(subtotal, tax, discount);

    setInvoice(prev => ({
      ...prev,
      subtotal,
      tax,
      discount,
      total
    }));
  }, [invoice.items, invoice.taxRate, invoice.discountRate]);

  // Pass updated invoice to parent component
  useEffect(() => {
    onInvoiceUpdate(invoice);
  }, [invoice, onInvoiceUpdate]);

  // Handle direct field changes
  const handleFieldChange = (field: keyof InvoiceData, value: string | number) => {
    setInvoice(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle address field changes
  const handleAddressChange = (type: 'billFrom' | 'billTo', field: string, value: string) => {
    setInvoice(prev => ({
      ...prev,
      [type]: { ...prev[type], [field]: value }
    }));
  };

  // Add a new item
  const handleAddItem = () => {
    setInvoice(prev => ({
      ...prev,
      items: [...prev.items, createEmptyItem()]
    }));
  };

  // Remove an item
  const handleRemoveItem = (id: string) => {
    setInvoice(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== id)
    }));
  };

  // Handle item changes
  const handleItemChange = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setInvoice(prev => {
      const updatedItems = prev.items.map(item => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value };
          
          // Auto-calculate amount
          if (field === 'quantity' || field === 'rate') {
            const quantity = field === 'quantity' ? Number(value) : item.quantity;
            const rate = field === 'rate' ? Number(value) : item.rate;
            updatedItem.amount = quantity * rate;
          }
          
          return updatedItem;
        }
        return item;
      });
      
      return { ...prev, items: updatedItems };
    });
  };

  // Add a sample item for demonstration
  const handleAddSampleItem = () => {
    const sampleItem: InvoiceItem = {
      id: createEmptyItem().id,
      description: "Consulting Services",
      quantity: 10,
      rate: 150,
      amount: 1500
    };
    
    setInvoice(prev => ({
      ...prev,
      items: [...prev.items, sampleItem]
    }));
  };

  // Initialize with an empty row if there are no items
  useEffect(() => {
    if (invoice.items.length === 0) {
      handleAddItem();
    }
  }, []);

  return (
    <div className="space-y-6">
      {/* Invoice Header */}
      <InvoiceHeader 
        invoice={invoice} 
        onFieldChange={handleFieldChange} 
      />
      
      {/* Bill From Section */}
      <AddressSection 
        title="Bill From" 
        type="billFrom" 
        addressData={invoice.billFrom}
        onAddressChange={handleAddressChange} 
      />
      
      {/* Bill To Section */}
      <AddressSection 
        title="Bill To" 
        type="billTo" 
        addressData={invoice.billTo}
        onAddressChange={handleAddressChange} 
      />
      
      {/* Line Items */}
      <LineItems 
        items={invoice.items}
        onItemChange={handleItemChange}
        onItemAdd={handleAddItem}
        onSampleItemAdd={handleAddSampleItem}
        onItemRemove={handleRemoveItem}
      />
      
      {/* Invoice Summary */}
      <InvoiceSummary 
        invoice={invoice}
        onFieldChange={handleFieldChange}
      />
    </div>
  );
};

export default InvoiceForm;
