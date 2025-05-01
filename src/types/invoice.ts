
export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface InvoiceData {
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  billFrom: {
    name: string;
    email: string;
    address: string;
    phone: string;
  };
  billTo: {
    name: string;
    email: string;
    address: string;
    phone: string;
  };
  items: InvoiceItem[];
  notes: string;
  terms: string;
  taxRate: number;
  discountRate: number;
  currency: string;
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
}

export const defaultInvoice: InvoiceData = {
  invoiceNumber: "",
  issueDate: new Date().toISOString().split('T')[0],
  dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  billFrom: {
    name: "",
    email: "",
    address: "",
    phone: ""
  },
  billTo: {
    name: "",
    email: "",
    address: "",
    phone: ""
  },
  items: [],
  notes: "",
  terms: "Payment is due within 30 days",
  taxRate: 0,
  discountRate: 0,
  currency: "USD",
  subtotal: 0,
  tax: 0,
  discount: 0,
  total: 0
};
