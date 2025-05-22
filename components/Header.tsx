import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiAlertCircle, FiBell } from 'react-icons/fi';
import WhatsAppButton from './WhatsAppButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [availableSlots, setAvailableSlots] = useState(3);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Inicializar y mantener el estado de los lugares disponibles con localStorage
  useEffect(() => {
    // Comprobar si hay un valor guardado en localStorage
    const savedSlots = localStorage.getItem('availableSlots');
    const lastChangeTime = localStorage.getItem('slotsLastChangeTime');
    
    if (savedSlots) {
      const slots = parseInt(savedSlots);
      setAvailableSlots(slots);
      
      // Si hay un tiempo de último cambio guardado, calculamos cuánto tiempo ha pasado
      if (lastChangeTime) {
        const lastChange = parseInt(lastChangeTime);
        const now = new Date().getTime();
        const timePassed = now - lastChange;
        
        // Si están en 2 lugares y han pasado más de 15 minutos, actualizar a 1
        if (slots === 2 && timePassed >= 15 * 60 * 1000) {
          setAvailableSlots(1);
          localStorage.setItem('availableSlots', '1');
          localStorage.setItem('slotsLastChangeTime', now.toString());
          setNotificationMessage('¡Alguien más acaba de reservar! Solo queda 1 lugar disponible.');
          setShowNotification(true);
        }
        // Si está en 1 lugar y han pasado más de 60 minutos, actualizar a 0
        else if (slots === 1 && timePassed >= 60 * 60 * 1000) {
          setAvailableSlots(0);
          localStorage.setItem('availableSlots', '0');
          localStorage.setItem('slotsLastChangeTime', now.toString());
          setNotificationMessage('¡Se han agotado todos los lugares para este mes!');
          setShowNotification(true);
        }
      }
    } else {
      // Si no hay valor guardado, inicializar con 3 lugares
      localStorage.setItem('availableSlots', '3');
      localStorage.setItem('slotsLastChangeTime', new Date().getTime().toString());
    }
  }, []);

  // Efecto para cambiar los lugares disponibles después de los tiempos establecidos
  useEffect(() => {
    let timer;
    
    // Solo configurar el temporizador si estamos en 3 o 2 lugares
    if (availableSlots === 3) {
      // Cambiar de 3 a 2 después de 30 segundos (para pruebas, cambiar a 5 minutos en producción)
      timer = setTimeout(() => {
        setAvailableSlots(2);
        localStorage.setItem('availableSlots', '2');
        localStorage.setItem('slotsLastChangeTime', new Date().getTime().toString());
        setNotificationMessage('¡Acaban de reservar un lugar! Solo quedan 2 lugares disponibles.');
        setShowNotification(true);
        
        // Ocultar la notificación después de 10 segundos
        setTimeout(() => {
          setShowNotification(false);
        }, 10000);
      }, 5 * 60 * 1000);
    } else if (availableSlots === 2) {
      // Cambiar de 2 a 1 después de 15 minutos
      timer = setTimeout(() => {
        setAvailableSlots(1);
        localStorage.setItem('availableSlots', '1');
        localStorage.setItem('slotsLastChangeTime', new Date().getTime().toString());
        setNotificationMessage('¡Alguien más acaba de reservar! Solo queda 1 lugar disponible.');
        setShowNotification(true);
        
        // Ocultar la notificación después de 10 segundos
        setTimeout(() => {
          setShowNotification(false);
        }, 10000);
      }, 15 * 60 * 1000);
    } else if (availableSlots === 1) {
      // Cambiar de 1 a 0 después de 60 minutos
      timer = setTimeout(() => {
        setAvailableSlots(0);
        localStorage.setItem('availableSlots', '0');
        localStorage.setItem('slotsLastChangeTime', new Date().getTime().toString());
        setNotificationMessage('¡Se han agotado todos los lugares para este mes!');
        setShowNotification(true);
        
        // Ocultar la notificación después de 10 segundos
        setTimeout(() => {
          setShowNotification(false);
        }, 10000);
      }, 60 * 60 * 1000);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [availableSlots]);

  // Calcular el porcentaje de la barra de disponibilidad
  const getAvailabilityPercentage = () => {
    switch (availableSlots) {
      case 3: return 70;
      case 2: return 85;
      case 1: return 95;
      case 0: return 100;
      default: return 70;
    }
  };
  
  const availabilityPercentage = getAvailabilityPercentage();
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Barra de disponibilidad limitada en lugar del logo */}
        <div className="flex items-center bg-red-50 border border-red-200 rounded-lg px-4 py-2">
          <FiAlertCircle className="text-red-500 mr-2 text-lg" />
          <div className="flex flex-col">
            {availableSlots > 0 ? (
              <span className="text-red-700 text-sm font-bold">
                ¡Solo {availableSlots === 1 ? 'queda 1 lugar' : `quedan ${availableSlots} lugares`} para este mes!
              </span>
            ) : (
              <span className="text-red-700 text-sm font-bold">
                ¡No hay más lugares disponibles para este mes!
              </span>
            )}
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
              <div 
                className="bg-red-500 h-1.5 rounded-full transition-all duration-1000" 
                style={{ width: `${availabilityPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <WhatsAppButton 
            text="¡Quiero Saber Más!"
            message="Hola, me gustaría saber más sobre sus soluciones capilares"
            size="sm"
            className="hidden md:flex"
            location="header_section"
          />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Notificación de reserva reciente */}
      {showNotification && (
        <div className="fixed top-24 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md z-50 animate-pulse flex items-center max-w-xs">
          <FiBell className="mr-2" />
          <div>
            <p className="font-bold">{notificationMessage}</p>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#beneficios" 
              className="text-gray-800 hover:text-primary-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Beneficios
            </a>
            <a 
              href="#como-funciona" 
              className="text-gray-800 hover:text-primary-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Cómo Funciona
            </a>
            <a 
              href="#testimonios" 
              className="text-gray-800 hover:text-primary-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Testimonios
            </a>
            <a 
              href="#preguntas" 
              className="text-gray-800 hover:text-primary-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <WhatsAppButton 
              text="¡Quiero Saber Más!"
              message="Hola, me gustaría saber más sobre sus soluciones capilares"
              size="sm"
              className="w-full"
              location="header_section"
            />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
