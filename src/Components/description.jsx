import React from "react";
import Countdown from "./counter";

function Description() {
  return (
    <div className="min-h-screen bg-[#feeff4] flex flex-col items-center justify-center font-sans">
      {/* Contenedor principal */}
      <div className="relative w-full max-w-xl text-[#b40129] shadow-md rounded-lg p-8 overflow-hidden text-center">
        {/* Flores superiores */}
        <img
          src="/flowers-left.svg"
          alt="Decoración floral superior"
          className="absolute top-0 left-0 w-32 h-auto"
        />
        <img
          src="/flowers.svg"
          alt="Decoración floral superior derecha"
          className="absolute top-0 right-0 w-32 h-auto"
        />

        {/* Título 'Faltan!' */}
        <h1 className="text-3xl md:text-4xl text-vinotinto font-bold mb-4">
          ¡Faltan!
        </h1>

        {/* Contador */}
        <div className="flex justify-center mb-6">
          <Countdown />
        </div>

        {/* Texto de invitación */}
        <p className="text-roseGold text-base md:text-lg leading-relaxed font-light">
          Con inmenso amor e ilusión,<br />
          y en compañía de nuestros padres<br />
          tenemos el gusto de invitar a celebrar
        </p>

        {/* Título principal con fuente cursiva */}
        <h2 className="mt-6 text-4xl md:text-5xl text-roseGold font-script">
          Nuestra Boda
        </h2>

        {/* Fecha */}
        <div className="flex flex-col items-center mt-6">
          <span className="text-xl md:text-2xl font-semibold text-roseGold">
            Viernes
          </span>
          <span className="text-4xl md:text-5xl font-bold text-roseGold">
            28
          </span>
          <span className="text-xl md:text-2xl font-semibold text-roseGold">
            Marzo
          </span>
        </div>

        {/* Flores inferiores */}
        <img
          src="/flowers.svg"
          alt="Decoración floral inferior"
          className="absolute bottom-0 left-0 w-32 h-auto rotate-180"
        />
        <img
          src="/flowers-left.svg"
          alt="Decoración floral inferior derecha"
          className="absolute bottom-0 right-0 w-32 h-auto rotate-180"
        />
      </div>
    </div>
  );
}

export default Description;
