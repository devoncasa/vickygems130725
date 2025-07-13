
import React, { useEffect } from 'react';

interface JsonLdProps {
  data: object;
}

const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.head.removeChild(script);
    };
  }, [data]); // Rerun effect if data changes

  return null; // This component doesn't render anything
};

export default JsonLd;
