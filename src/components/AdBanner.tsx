
import React from 'react';

interface AdBannerProps {
  width: string;
  height: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ width, height }) => {
  return (
    <div className="no-print ad-container" style={{ width, height }}>
      <div className="text-center">
        <p className="font-medium">Advertisement</p>
        <p className="text-sm">Your Ad Could Be Here</p>
      </div>
    </div>
  );
};

export default AdBanner;
