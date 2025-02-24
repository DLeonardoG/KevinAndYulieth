import { useEffect, useState, useCallback, memo } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const targetDate = new Date('2025-03-28T17:00:00').getTime();

  const updateTime = useCallback(() => {
    const now = Date.now();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTime(prev => ({
        days: prev.days !== days ? days : prev.days,
        hours: prev.hours !== hours ? hours : prev.hours,
        minutes: prev.minutes !== minutes ? minutes : prev.minutes,
        seconds: prev.seconds !== seconds ? seconds : prev.seconds
      }));
    }
  }, [targetDate]);

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(interval);
  }, [updateTime]);

  const TimeUnit = memo(({ value, label }) => (
    <div className="text-center p-1 md:p-3 flex-1">
      <div className="relative h-14 md:h-20 overflow-hidden">
        <motion.div
          key={value}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute w-full"
        >
          <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-rose-600 block">
            {value.toString().padStart(2, '0')}
          </span>
        </motion.div>
      </div>
      <span className="text-xs md:text-sm lg:text-base text-rose-500 uppercase tracking-wide block">
        {label}
      </span>
    </div>
  ));

  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-4 md:p-6 w-full max-w-lg lg:max-w-2xl">
        <h1 className="text-center text-lg md:text-xl lg:text-2xl font-semibold text-rose-700 mb-4 md:mb-6">
          Cuenta regresiva para nuestra boda
        </h1>
        
        <div className="flex justify-between gap-1 md:gap-3">
          <TimeUnit value={time.days} label="Días" />
          <TimeUnit value={time.hours} label="Horas" />
          <TimeUnit value={time.minutes} label="Minutos" />
          <TimeUnit value={time.seconds} label="Segundos" />
        </div>

        <div className="mt-4 md:mt-6 text-center">
          <p className="text-xs md:text-sm lg:text-base text-rose-600">
            28 Marzo 2025 • Querétaro, México
          </p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;