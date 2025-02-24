import React from "react";
import Countdown from "./counter"; 
import Flowers from "../assets/img/flowers.png";

function Description() {
  return (
    <div className="bg-[#feeff4] flex flex-col items-center justify-center">
      {/* Contenedor principal */}
      <div className="relative w-full max-w-xl bg-[#feeff4] shadow-md rounded-lg p-8 overflow-hidden text-center">
        
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

        {/* Título de 'Faltan!' */}
        <h1 className="text-2xl md:text-3xl font-bold text-[#c08e70] mb-2">
          ¡Faltan!
        </h1>

        {/* Contador */}
        <div className="flex justify-center mb-4">
          <Countdown />
        </div>

        {/* Texto de invitación */}
        <p className="text-[#c08e70] text-base md:text-lg leading-relaxed">
          Con inmenso amor e ilusión,<br />
          y en compañía de nuestros padres<br />
          tenemos el gusto de invitar a celebrar
        </p>

        {/* Título principal */}
        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-[#c08e70]">
          Nuestra Boda
        </h2>

        {/* Fecha */}
        <div className="flex flex-col items-center mt-6">
          <span className="text-xl md:text-2xl font-semibold text-[#c08e70]">
            Viernes
          </span>
          <span className="text-4xl md:text-5xl font-bold text-[#c08e70]">
            28
          </span>
          <span className="text-xl md:text-2xl font-semibold text-[#c08e70]">
            Marzo
          </span>
        </div>

        {/* Decoraciones florales inferiores (opcional) */}
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
