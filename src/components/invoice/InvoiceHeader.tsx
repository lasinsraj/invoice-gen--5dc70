
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { InvoiceData } from '@/types/invoice';
import { toast } from '@/hooks/use-toast';

interface InvoiceHeaderProps {
  invoice: InvoiceData;
  onFieldChange: (field: keyof InvoiceData, value: string) => void;
}

const InvoiceHeader: React.FC<InvoiceHeaderProps> = ({ invoice, onFieldChange }) => {
  const generateInvoiceNumber = () => {
    const prefix = 'INV';
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const date = new Date().toISOString().slice(2, 10).replace(/-/g, '');
    
    const invoiceNumber = `${prefix}-${date}-${randomNum}`;
    
    onFieldChange('invoiceNumber', invoiceNumber);
    
    toast({
      title: "Invoice Number Generated",
      description: `New invoice number: ${invoiceNumber}`,
    });
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="invoiceNumber">Invoice Number</Label>
            <div className="flex gap-2">
              <Input
                id="invoiceNumber"
                value={invoice.invoiceNumber}
                onChange={(e) => onFieldChange('invoiceNumber', e.target.value)}
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
                onChange={(e) => onFieldChange('issueDate', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="dueDate">Due Date</Label>
              <Input
                id="dueDate"
                type="date"
                value={invoice.dueDate}
                onChange={(e) => onFieldChange('dueDate', e.target.value)}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvoiceHeader;
