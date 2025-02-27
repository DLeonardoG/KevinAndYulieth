import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TimeUnit = React.memo(({ label, value }) => {
  const formattedValue = value.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center">
      {/* Contenedor del número con tamaño fijo para evitar distorsión */}
      <div className="relative h-16 w-16 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={formattedValue}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-3xl sm:text-5xl font-bold text-[#e04355] font-serif"
          >
            {formattedValue}
          </motion.span>
        </AnimatePresence>
      </div>
      {/* Etiqueta diferenciada en tipografía sans-serif y color más suave */}
      <span className="text-xs sm:text-sm text-gray-800 m-0 font-serif">
        {label}
      </span>
    </div>
  );
});

const Countdown = ({ targetDate = '2025-03-28T18:00:00' }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (

    <div className="grid grid-cols-4 gap-4 items-center justify-center p-4 bg-transparent border-[#800000]">
      <TimeUnit label="Días" value={timeLeft.days} />
      <TimeUnit label="Horas" value={timeLeft.hours} />
      <TimeUnit label="Min" value={timeLeft.minutes} />
      <TimeUnit label="Seg" value={timeLeft.seconds} />
    </div>
  );
};

export default Countdown;
