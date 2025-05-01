
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { InvoiceItem } from '@/types/invoice';
import { Trash, Plus } from 'lucide-react';
import { createEmptyItem } from '@/utils/invoice-utils';

interface LineItemsProps {
  items: InvoiceItem[];
  onItemChange: (id: string, field: keyof InvoiceItem, value: string | number) => void;
  onItemAdd: () => void;
  onSampleItemAdd: () => void;
  onItemRemove: (id: string) => void;
}

const LineItems: React.FC<LineItemsProps> = ({ 
  items, 
  onItemChange, 
  onItemAdd, 
  onSampleItemAdd, 
  onItemRemove 
}) => {
  return (
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
              {items.map((item) => (
                <tr key={item.id} className="line-item border-b">
                  <td className="py-2 px-2">
                    <Input
                      value={item.description}
                      onChange={(e) => onItemChange(item.id, 'description', e.target.value)}
                      placeholder="Item description"
                    />
                  </td>
                  <td className="py-2 px-2">
                    <Input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => onItemChange(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                      className="text-right"
                    />
                  </td>
                  <td className="py-2 px-2">
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.rate}
                      onChange={(e) => onItemChange(item.id, 'rate', parseFloat(e.target.value) || 0)}
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
                      onClick={() => onItemRemove(item.id)}
                      disabled={items.length <= 1}
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
            onClick={onItemAdd}
            type="button"
            className="flex items-center gap-1"
          >
            <Plus className="h-4 w-4" /> Add Item
          </Button>
          
          <Button 
            variant="outline" 
            onClick={onSampleItemAdd}
            type="button"
            className="flex items-center gap-1"
          >
            Add Sample Item
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LineItems;
