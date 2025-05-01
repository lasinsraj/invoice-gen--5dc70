
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { InvoiceData } from '@/types/invoice';

interface AddressSectionProps {
  title: string;
  type: 'billFrom' | 'billTo';
  addressData: {
    name: string;
    email: string;
    address: string;
    phone: string;
  };
  onAddressChange: (type: 'billFrom' | 'billTo', field: string, value: string) => void;
}

const AddressSection: React.FC<AddressSectionProps> = ({ 
  title, 
  type, 
  addressData, 
  onAddressChange 
}) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-medium mb-4">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor={`${type}Name`}>
              {type === 'billFrom' ? 'Your Name / Business' : 'Client Name / Business'}
            </Label>
            <Input
              id={`${type}Name`}
              value={addressData.name}
              onChange={(e) => onAddressChange(type, 'name', e.target.value)}
              placeholder={type === 'billFrom' ? 'Your Name or Business' : 'Client Name or Business'}
            />
          </div>
          
          <div>
            <Label htmlFor={`${type}Email`}>Email</Label>
            <Input
              id={`${type}Email`}
              type="email"
              value={addressData.email}
              onChange={(e) => onAddressChange(type, 'email', e.target.value)}
              placeholder={type === 'billFrom' ? 'your.email@example.com' : 'client@example.com'}
            />
          </div>
          
          <div>
            <Label htmlFor={`${type}Address`}>Address</Label>
            <Input
              id={`${type}Address`}
              value={addressData.address}
              onChange={(e) => onAddressChange(type, 'address', e.target.value)}
              placeholder={type === 'billFrom' ? 'Your Address' : 'Client Address'}
            />
          </div>
          
          <div>
            <Label htmlFor={`${type}Phone`}>Phone</Label>
            <Input
              id={`${type}Phone`}
              value={addressData.phone}
              onChange={(e) => onAddressChange(type, 'phone', e.target.value)}
              placeholder={type === 'billFrom' ? 'Your Phone' : 'Client Phone'}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddressSection;
