import { useEffect } from 'react';
import { useRouter } from 'next/router';

// El ID de GA de tu propiedad
const GA_TRACKING_ID = 'G-TJ22DG52C6';

// Función para registrar una vista de página
const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Declaramos el tipo gtag para TypeScript
declare global {
  interface Window {
    gtag: (
      command: string,
      target: string,
      config?: Record<string, any> | string
    ) => void;
  }
}

const GoogleAnalytics = () => {
  const router = useRouter();
  
  useEffect(() => {
    // Callback para manejar las rutas cambiadas
    const handleRouteChange = (url: string) => {
      pageview(url);
    };

    // Suscribirse a los eventos de cambio de ruta
    router.events.on('routeChangeComplete', handleRouteChange);
    
    // Registrar la vista de página inicial
    pageview(router.asPath);
    
    // Limpiar el evento al desmontar
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, router.asPath]);

  return null; // Este componente no renderiza nada visible
};

export default GoogleAnalytics;
