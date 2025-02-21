import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Fecha de la boda (cambiar por la deseada)
  const targetDate = new Date('2025-03-28T17:00:00').getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <motion.div
      key={`${value}-${label}`}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-center p-4"
    >
      <div className="text-4xl md:text-5xl font-bold text-rose-400 mb-2">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-sm uppercase tracking-widest text-rose-300">
        {label}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <TimeUnit value={timeLeft.days} label="Días" />
          <TimeUnit value={timeLeft.hours} label="Horas" />
          <TimeUnit value={timeLeft.minutes} label="Minutos" />
          <TimeUnit value={timeLeft.seconds} label="Segundos" />
        </div>
        
        <div className="mt-6 text-center text-sm text-rose-300">
          Hasta el día más especial • 28 Marzo 2025
        </div>
      </div>
    </div>
  );
};

export default Countdown;