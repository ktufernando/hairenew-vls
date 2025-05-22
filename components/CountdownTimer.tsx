import { useState, useEffect } from 'react';
import { FiClock } from 'react-icons/fi';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [expiryDate, setExpiryDate] = useState("");

  useEffect(() => {
    // Función para calcular el próximo domingo a las 23:59 (UTC-3)
    const getNextSundayEndTime = () => {
      const now = new Date();
      
      // Ajustar a UTC-3
      const utcOffset = -3;
      const nowUtcMinus3 = new Date(now.getTime() + (now.getTimezoneOffset() + utcOffset * 60) * 60000);
      
      // Calcular días hasta el próximo domingo
      const daysUntilSunday = 7 - nowUtcMinus3.getDay();
      
      // Si hoy es domingo, verificar si ya pasó las 23:59
      const isSunday = nowUtcMinus3.getDay() === 0;
      const isPastEndTime = nowUtcMinus3.getHours() >= 23 && nowUtcMinus3.getMinutes() >= 59;
      
      let targetDate;
      
      if (isSunday && !isPastEndTime) {
        // Es domingo y antes de las 23:59
        targetDate = new Date(nowUtcMinus3);
      } else {
        // No es domingo o ya pasó las 23:59, ir al próximo domingo
        const daysToAdd = isSunday && isPastEndTime ? 7 : daysUntilSunday;
        targetDate = new Date(nowUtcMinus3);
        targetDate.setDate(targetDate.getDate() + daysToAdd);
      }
      
      // Establecer la hora a las 23:59:59
      targetDate.setHours(23, 59, 59, 0);
      
      return targetDate;
    };

    const nextSunday = getNextSundayEndTime();
    
    // Formatear la fecha para mostrarla
    const options = { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long',
      hour: '2-digit',
      minute: '2-digit'
    };
    setExpiryDate(nextSunday.toLocaleDateString('es-ES', options));

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = nextSunday.getTime() - now.getTime();
      
      if (difference <= 0) {
        // La fecha expiró, recalcular para el próximo domingo
        const newNextSunday = getNextSundayEndTime();
        setExpiryDate(newNextSunday.toLocaleDateString('es-ES', options));
        return calculateTimeLeft();
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    // Actualizar el contador cada segundo
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Inicializar
    setTimeLeft(calculateTimeLeft());
    
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 border border-primary-200">
      <div className="flex items-center space-x-2 mb-2">
        <FiClock className="text-primary-600" />
        <p className="text-sm font-medium text-gray-800">La oferta termina el:</p>
      </div>
      
      <p className="text-xs text-gray-600 mb-2 capitalize">{expiryDate}</p>
      
      <div className="flex justify-center space-x-2">
        <div className="flex flex-col items-center">
          <div className="bg-primary-600 text-white font-bold rounded px-2 py-1 min-w-[40px] text-center">
            {formatNumber(timeLeft.days)}
          </div>
          <span className="text-xs mt-1">Días</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-primary-600 text-white font-bold rounded px-2 py-1 min-w-[40px] text-center">
            {formatNumber(timeLeft.hours)}
          </div>
          <span className="text-xs mt-1">Horas</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-primary-600 text-white font-bold rounded px-2 py-1 min-w-[40px] text-center">
            {formatNumber(timeLeft.minutes)}
          </div>
          <span className="text-xs mt-1">Min</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-primary-600 text-white font-bold rounded px-2 py-1 min-w-[40px] text-center">
            {formatNumber(timeLeft.seconds)}
          </div>
          <span className="text-xs mt-1">Seg</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
