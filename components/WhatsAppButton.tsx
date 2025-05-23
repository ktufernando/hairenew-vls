import { FaWhatsapp } from 'react-icons/fa';
import { trackEvent } from './GoogleAnalytics';
import { trackFbEvent } from './FacebookPixel';

interface WhatsAppButtonProps {
  text: string;
  message?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'outline';
  location?: string; // Para identificar dónde está el botón
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  text, 
  message = "Quiero reservar mi lugar", 
  className = "", 
  size = "md",
  variant = "primary",
  location = "general"
}) => {
  const phoneNumber = "541168275264"; // Tu número de teléfono
  
  const handleClick = () => {
    // Rastrear el evento en Google Analytics
    trackEvent(
      'whatsapp_click', 
      'CTA', 
      `WhatsApp CTA - ${location} - ${text}`
    );
    
    // Rastrear el evento en Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact', { 
        content_category: 'WhatsApp',
        content_name: `${location} - ${text}`
      });
    }
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg"
  };
  
  const variantClasses = {
    primary: "bg-[#25D366] hover:bg-[#128C7E] text-white border-transparent",
    outline: "bg-white hover:bg-gray-50 text-[#25D366] border-[#25D366]"
  };
  
  return (
    <button
      onClick={handleClick}
      className={`
        flex items-center justify-center rounded-full font-bold 
        transition-all transform hover:scale-105 shadow-md hover:shadow-lg
        border-2 ${sizeClasses[size]} ${variantClasses[variant]} ${className}
        inline-flex mx-auto
      `}
    >
      <FaWhatsapp className="mr-2 text-lg" />
      {text}
    </button>
  );
};

export default WhatsAppButton;
