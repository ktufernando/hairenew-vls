import { useEffect } from 'react';
import { useRouter } from 'next/router';

// El ID del Pixel de Facebook
const FB_PIXEL_ID = '3013768352124504';

// Función para rastrear una vista de página
export const pageview = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// Función para rastrear eventos personalizados
export const trackFbEvent = (name: string, options = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', name, options);
  }
};

// Declaración de tipos para TypeScript
declare global {
  interface Window {
    fbq: any;
  }
}

const FacebookPixel = () => {
  const router = useRouter();
  
  useEffect(() => {
    // Manejar cambios de ruta
    const handleRouteChange = () => {
      pageview();
    };

    // Suscribirse a eventos de cambio de ruta
    router.events.on('routeChangeComplete', handleRouteChange);
    
    // Registrar la primera vista de página
    pageview();
    
    // Limpiar al desmontar
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return null;
};

export default FacebookPixel;
