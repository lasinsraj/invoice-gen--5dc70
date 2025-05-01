
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { InvoiceData } from '@/types/invoice';

interface InvoiceSummaryProps {
  invoice: InvoiceData;
  onFieldChange: (field: keyof InvoiceData, value: string | number) => void;
}

const InvoiceSummary: React.FC<InvoiceSummaryProps> = ({ invoice, onFieldChange }) => {
  return (
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
                  onChange={(e) => onFieldChange('notes', e.target.value)}
                  placeholder="Notes - any relevant information not already covered"
                />
              </div>
              
              <div>
                <Label htmlFor="terms">Terms and Conditions</Label>
                <Input
                  id="terms"
                  value={invoice.terms}
                  onChange={(e) => onFieldChange('terms', e.target.value)}
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
                  onChange={(e) => onFieldChange('currency', e.target.value)}
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
                  onChange={(e) => onFieldChange('taxRate', parseFloat(e.target.value) || 0)}
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
                  onChange={(e) => onFieldChange('discountRate', parseFloat(e.target.value) || 0)}
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
  );
};

export default InvoiceSummary;
