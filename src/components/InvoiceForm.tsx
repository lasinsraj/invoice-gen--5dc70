
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Trash, Plus } from 'lucide-react';
import { InvoiceData, InvoiceItem, defaultInvoice } from '@/types/invoice';
import { 
  calculateSubtotal, 
  calculateTax, 
  calculateDiscount, 
  calculateTotal,
  createEmptyItem
} from '@/utils/invoice-utils';
import { toast } from '@/hooks/use-toast';

interface InvoiceFormProps {
  onInvoiceUpdate: (invoice: InvoiceData) => void;
}

type AllowedFields = keyof InvoiceData | 'billFrom' | 'billTo';

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

  // Add a new item
  const addItem = () => {
    setInvoice(prev => ({
      ...prev,
      items: [...prev.items, createEmptyItem()]
    }));
  };

  // Remove an item
  const removeItem = (id: string) => {
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

  // Handle general form changes
  const handleChange = (section: AllowedFields, field: string, value: string | number) => {
    if (section === 'billFrom' || section === 'billTo') {
      setInvoice(prev => ({
        ...prev,
        [section]: { ...prev[section], [field]: value }
      }));
    } else {
      setInvoice(prev => ({
        ...prev,
        [field as keyof InvoiceData]: value
      }));
    }
  };

  // Generate random invoice number
  const generateInvoiceNumber = () => {
    const prefix = 'INV';
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const date = new Date().toISOString().slice(2, 10).replace(/-/g, '');
    
    const invoiceNumber = `${prefix}-${date}-${randomNum}`;
    
    setInvoice(prev => ({
      ...prev,
      invoiceNumber
    }));
    
    toast({
      title: "Invoice Number Generated",
      description: `New invoice number: ${invoiceNumber}`,
    });
  };

  // Add a sample item for demonstration
  const addSampleItem = () => {
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
      addItem();
    }
  }, []);

  return (
    <div className="space-y-6">
      {/* Invoice Header */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="invoiceNumber">Invoice Number</Label>
              <div className="flex gap-2">
                <Input
                  id="invoiceNumber"
                  value={invoice.invoiceNumber}
                  onChange={(e) => handleChange('invoiceNumber' as keyof InvoiceData, 'invoiceNumber', e.target.value)}
                  placeholder="INV-0001"
                  className="flex-1"
                />
                <Button variant="outline" onClick={generateInvoiceNumber} type="button">
                  Generate
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="issueDate">Issue Date</Label>
                <Input
                  id="issueDate"
                  type="date"
                  value={invoice.issueDate}
                  onChange={(e) => handleChange('issueDate' as keyof InvoiceData, 'issueDate', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="dueDate">Due Date</Label>
                <Input
                  id="dueDate"
                  type="date"
                  value={invoice.dueDate}
                  onChange={(e) => handleChange('dueDate' as keyof InvoiceData, 'dueDate', e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Bill From Section */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Bill From</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fromName">Your Name / Business</Label>
              <Input
                id="fromName"
                value={invoice.billFrom.name}
                onChange={(e) => handleChange('billFrom', 'name', e.target.value)}
                placeholder="Your Name or Business"
              />
            </div>
            
            <div>
              <Label htmlFor="fromEmail">Email</Label>
              <Input
                id="fromEmail"
                type="email"
                value={invoice.billFrom.email}
                onChange={(e) => handleChange('billFrom', 'email', e.target.value)}
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <Label htmlFor="fromAddress">Address</Label>
              <Input
                id="fromAddress"
                value={invoice.billFrom.address}
                onChange={(e) => handleChange('billFrom', 'address', e.target.value)}
                placeholder="Your Address"
              />
            </div>
            
            <div>
              <Label htmlFor="fromPhone">Phone</Label>
              <Input
                id="fromPhone"
                value={invoice.billFrom.phone}
                onChange={(e) => handleChange('billFrom', 'phone', e.target.value)}
                placeholder="Your Phone"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Bill To Section */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Bill To</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="toName">Client Name / Business</Label>
              <Input
                id="toName"
                value={invoice.billTo.name}
                onChange={(e) => handleChange('billTo', 'name', e.target.value)}
                placeholder="Client Name or Business"
              />
            </div>
            
            <div>
              <Label htmlFor="toEmail">Email</Label>
              <Input
                id="toEmail"
                type="email"
                value={invoice.billTo.email}
                onChange={(e) => handleChange('billTo', 'email', e.target.value)}
                placeholder="client@example.com"
              />
            </div>
            
            <div>
              <Label htmlFor="toAddress">Address</Label>
              <Input
                id="toAddress"
                value={invoice.billTo.address}
                onChange={(e) => handleChange('billTo', 'address', e.target.value)}
                placeholder="Client Address"
              />
            </div>
            
            <div>
              <Label htmlFor="toPhone">Phone</Label>
              <Input
                id="toPhone"
                value={invoice.billTo.phone}
                onChange={(e) => handleChange('billTo', 'phone', e.target.value)}
                placeholder="Client Phone"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Line Items */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Items</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 w-full">Description</th>
                  <th className="text-right py-2 px-2">Quantity</th>
                  <th className="text-right py-2 px-2">Rate</th>
                  <th className="text-right py-2 px-2">Amount</th>
                  <th className="py-2 px-2 w-10"></th>
                </tr>
              </thead>
              <tbody>
                {invoice.items.map((item) => (
                  <tr key={item.id} className="line-item border-b">
                    <td className="py-2 px-2">
                      <Input
                        value={item.description}
                        onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                        placeholder="Item description"
                      />
                    </td>
                    <td className="py-2 px-2">
                      <Input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleItemChange(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                        className="text-right"
                      />
                    </td>
                    <td className="py-2 px-2">
                      <Input
                        type="number"
                        min="0"
                        step="0.01"
                        value={item.rate}
                        onChange={(e) => handleItemChange(item.id, 'rate', parseFloat(e.target.value) || 0)}
                        className="text-right"
                      />
                    </td>
                    <td className="py-2 px-2">
                      <Input
                        readOnly
                        value={item.amount.toFixed(2)}
                        className="text-right bg-gray-50"
                      />
                    </td>
                    <td className="py-2 px-2">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => removeItem(item.id)}
                        disabled={invoice.items.length <= 1}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              onClick={addItem}
              type="button"
              className="flex items-center gap-1"
            >
              <Plus className="h-4 w-4" /> Add Item
            </Button>
            
            <Button 
              variant="outline" 
              onClick={addSampleItem}
              type="button"
              className="flex items-center gap-1"
            >
              Add Sample Item
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Summary Section */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="notes">Notes</Label>
                  <Input
                    id="notes"
                    value={invoice.notes}
                    onChange={(e) => handleChange('notes' as keyof InvoiceData, 'notes', e.target.value)}
                    placeholder="Notes - any relevant information not already covered"
                  />
                </div>
                
                <div>
                  <Label htmlFor="terms">Terms and Conditions</Label>
                  <Input
                    id="terms"
                    value={invoice.terms}
                    onChange={(e) => handleChange('terms' as keyof InvoiceData, 'terms', e.target.value)}
                    placeholder="Terms and conditions"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label>Currency</Label>
                  <select
                    value={invoice.currency}
                    onChange={(e) => handleChange('currency' as keyof InvoiceData, 'currency', e.target.value)}
                    className="border rounded p-2"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="INR">INR (₹)</option>
                    <option value="JPY">JPY (¥)</option>
                    <option value="CAD">CAD ($)</option>
                  </select>
                </div>
                
                <div className="flex justify-between items-center">
                  <Label htmlFor="taxRate">Tax Rate (%)</Label>
                  <Input
                    id="taxRate"
                    type="number"
                    min="0"
                    max="100"
                    value={invoice.taxRate}
                    onChange={(e) => handleChange('taxRate' as keyof InvoiceData, 'taxRate', parseFloat(e.target.value) || 0)}
                    className="w-24 text-right"
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <Label htmlFor="discountRate">Discount (%)</Label>
                  <Input
                    id="discountRate"
                    type="number"
                    min="0"
                    max="100"
                    value={invoice.discountRate}
                    onChange={(e) => handleChange('discountRate' as keyof InvoiceData, 'discountRate', parseFloat(e.target.value) || 0)}
                    className="w-24 text-right"
                  />
                </div>
                
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Subtotal:</span>
                    <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: invoice.currency }).format(invoice.subtotal)}</span>
                  </div>
                  
                  {invoice.taxRate > 0 && (
                    <div className="flex justify-between">
                      <span>Tax ({invoice.taxRate}%):</span>
                      <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: invoice.currency }).format(invoice.tax)}</span>
                    </div>
                  )}
                  
                  {invoice.discountRate > 0 && (
                    <div className="flex justify-between">
                      <span>Discount ({invoice.discountRate}%):</span>
                      <span>-{new Intl.NumberFormat('en-US', { style: 'currency', currency: invoice.currency }).format(invoice.discount)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold text-lg">
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: invoice.currency }).format(invoice.total)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvoiceForm;
