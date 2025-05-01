
import React from 'react';

interface AddressData {
  name: string;
  email: string;
  address: string;
  phone: string;
}

interface PreviewAddressProps {
  title: string;
  addressData: AddressData;
}

const PreviewAddress: React.FC<PreviewAddressProps> = ({ title, addressData }) => {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase text-gray-500 mb-2">{title}</h2>
      <p className="font-medium">{addressData.name || (title === "From" ? "Your Business Name" : "Client Name")}</p>
      <p className="text-gray-700 whitespace-pre-line">{addressData.address}</p>
      {addressData.email && <p className="text-gray-700">{addressData.email}</p>}
      {addressData.phone && <p className="text-gray-700">{addressData.phone}</p>}
    </div>
  );
};

export default PreviewAddress;
