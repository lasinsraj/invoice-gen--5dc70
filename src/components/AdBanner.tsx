
import React, { useEffect, useRef } from 'react';

interface AdBannerProps {
  width: string;
  height: string;
  adSlot?: 1 | 2 | 3;
}

const AdBanner: React.FC<AdBannerProps> = ({ width, height, adSlot = 1 }) => {
  // Change the ref type from HTMLElement to HTMLModElement which is the correct type for <ins> elements
  const adContainerRef = useRef<HTMLModElement>(null);
  
  useEffect(() => {
    // Only run this on the client side
    if (typeof window !== 'undefined') {
      try {
        // Add the AdSense script if it doesn't exist
        if (!window.adsbygoogle) {
          const script = document.createElement('script');
          script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8390293036422522';
          script.async = true;
          script.crossOrigin = 'anonymous';
          document.head.appendChild(script);
        }
        
        // Push the ad after the component is mounted
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error('Error loading AdSense:', error);
      }
    }
  }, []);
  
  // Map adSlot to the correct ad-slot value
  const getAdSlot = () => {
    switch (adSlot) {
      case 1:
        return '6748655419';
      case 2:
        return '4497896595';
      case 3:
        return '7407130968';
      default:
        return '6748655419';
    }
  };
  
  return (
    <div className="no-print ad-container" style={{ width, height, overflow: 'hidden' }}>
      <ins className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '100%' }}
        data-ad-client="ca-pub-8390293036422522"
        data-ad-slot={getAdSlot()}
        data-ad-format="auto"
        data-full-width-responsive="true"
        ref={adContainerRef as React.LegacyRef<HTMLModElement>}
      />
    </div>
  );
};

export default AdBanner;
