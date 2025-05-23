import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Función para rastrear una vista de página
export const pageview = () => {
  window.fbq?.('track', 'PageView');
};

// Función para rastrear eventos personalizados
export const trackFbEvent = (name: string, options = {}) => {
  window.fbq?.('track', name, options);
};

// Declaración de tipos para TypeScript
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

const FacebookPixel = () => {
  const router = useRouter();
  
  useEffect(() => {
    // Verificar que fbq está disponible
    if (!window.fbq) {
      console.warn('Facebook Pixel not initialized!');
      return;
    }
    
    // Manejar cambios de ruta
    const handleRouteChange = () => {
      pageview();
    };

    // Rastrear la vista inicial
    pageview();
    
    // Suscribirse a cambios de ruta
    router.events.on('routeChangeComplete', handleRouteChange);
    
    // Limpiar al desmontar
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return null;
};

export default FacebookPixel;
