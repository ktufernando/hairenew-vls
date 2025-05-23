import { useState } from 'react';

const PixelTest = () => {
  const [tested, setTested] = useState(false);
  
  const testPixel = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'TestEvent');
      setTested(true);
      console.log('Facebook Pixel test event sent!');
      alert('Facebook Pixel test event sent!');
    } else {
      console.error('Facebook Pixel not found!');
      alert('Error: Facebook Pixel not found!');
    }
  };
  
  // Solo visible en modo desarrollo
  if (process.env.NODE_ENV !== 'development') return null;
  
  return (
    <div className="fixed bottom-20 right-4 z-50">
      <button
        onClick={testPixel}
        className="bg-red-600 text-white px-4 py-2 rounded shadow"
      >
        {tested ? 'Test enviado' : 'Test FB Pixel'}
      </button>
    </div>
  );
};

export default PixelTest;
