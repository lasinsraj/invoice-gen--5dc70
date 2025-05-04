
import React from 'react';
import { InvoiceData } from '@/types/invoice';
import PreviewHeader from '@/components/invoice/PreviewHeader';
import PreviewAddress from '@/components/invoice/PreviewAddress';
import PreviewLineItems from '@/components/invoice/PreviewLineItems';
import PreviewNotes from '@/components/invoice/PreviewNotes';
import PreviewSummary from '@/components/invoice/PreviewSummary';
import ClassicTemplate from '@/components/invoice/templates/ClassicTemplate';
import ModernTemplate from '@/components/invoice/templates/ModernTemplate';
import MinimalTemplate from '@/components/invoice/templates/MinimalTemplate';
import ProfessionalTemplate from '@/components/invoice/templates/ProfessionalTemplate';

interface InvoicePreviewProps {
  invoice: InvoiceData;
  template?: 'classic' | 'modern' | 'minimal' | 'professional';
}

const InvoicePreview: React.FC<InvoicePreviewProps> = ({ invoice, template = 'classic' }) => {
  // Render the selected template
  switch (template) {
    case 'modern':
      return <ModernTemplate invoice={invoice} />;
    case 'minimal':
      return <MinimalTemplate invoice={invoice} />;
    case 'professional':
      return <ProfessionalTemplate invoice={invoice} />;
    case 'classic':
    default:
      return <ClassicTemplate invoice={invoice} />;
  }
};

export default InvoicePreview;
