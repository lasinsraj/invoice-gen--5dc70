
import React from 'react';
import { formatDate } from '@/utils/invoice-utils';

interface PreviewHeaderProps {
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
}

const PreviewHeader: React.FC<PreviewHeaderProps> = ({ 
  invoiceNumber, 
  issueDate, 
  dueDate 
}) => {
  return (
    <div className="flex justify-between items-start mb-12">
      <div>
        <h1 className="text-3xl font-bold text-invoice-primary">INVOICE</h1>
        <p className="text-gray-500 mt-1">{formatDate(issueDate)}</p>
      </div>
      <div className="text-right">
        <p className="font-bold">{invoiceNumber || "#INV-0001"}</p>
        <p className="text-gray-500 mt-1">Due: {formatDate(dueDate)}</p>
      </div>
    </div>
  );
};

export default PreviewHeader;
