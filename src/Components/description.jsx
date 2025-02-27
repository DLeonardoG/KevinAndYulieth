import React from "react";
import Countdown from "./counter";

function Description() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center justify-center font-sans">
      <div className="relative w-full max-w-xl text-[#b40129] shadow-md rounded-lg p-8 overflow-hidden text-center">
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


        <h1 className="text-3xl md:text-4xl text-vinotinto font-bold mb-4">
          ¡Faltan!
        </h1>

        <div className="flex justify-center mb-6">
          <Countdown />
        </div>

        <p className="text-roseGold text-base md:text-lg leading-relaxed font-light">
          Con inmenso amor e ilusión,
          <br />
          y en compañía de nuestros padres
          <br />
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
        <div className="flex flex-col items-center mt-6">
          <span className="text-xl md:text-2xl font-semibold text-roseGold">
            Ceremonia
          </span>
          <span className="text-4xl md:text-5xl font-bold text-roseGold">
            Iglesia adventista Norte
          </span>
          <span className="text-xl md:text-2xl font-semibold text-roseGold">
            Cra. 20 #6-47
          </span>
          <span className="text-xl md:text-2xl font-semibold text-roseGold">
            <strong>Hora:</strong> 6:00 PM
          </span>

          <a href="https://www.google.com/maps/place/Iglesia+Adventista+del+s%C3%A9ptimo+d%C3%ADa+-+Norte/@7.1396168,-73.1272981,17z/data=!3m1!4b1!4m6!3m5!1s0x8e6815730bca4eeb:0xa1c501d7f7afe0aa!8m2!3d7.1396168!4d-73.1272981!16s%2Fg%2F11c2j2zd4g?entry=ttu&g_ep=EgoyMDI1MDIyMy4xIKXMDSoASAFQAw%3D%3D" target="_blank">
            Ver Ubicacion aqui
          </a>
        </div>
        <div className="flex flex-col items-center mt-6">
          <span className="text-xl md:text-2xl font-semibold text-roseGold">
            Recepción
          </span>
          <span className="text-4xl md:text-5xl font-bold text-roseGold">
            El otro lugar
          </span>
          <span className="text-xl md:text-2xl font-semibold text-roseGold">
            Cra. 20 #6-47
          </span>
          <span className="text-xl md:text-2xl font-semibold text-roseGold">
            <strong>Hora:</strong> 8:00 PM
          </span>

          <a href="https://www.google.com/maps/place/Iglesia+Adventista+del+s%C3%A9ptimo+d%C3%ADa+-+Norte/@7.1396168,-73.1272981,17z/data=!3m1!4b1!4m6!3m5!1s0x8e6815730bca4eeb:0xa1c501d7f7afe0aa!8m2!3d7.1396168!4d-73.1272981!16s%2Fg%2F11c2j2zd4g?entry=ttu&g_ep=EgoyMDI1MDIyMy4xIKXMDSoASAFQAw%3D%3D" target="_blank">
            Ver Ubicacion aqui
          </a>
        </div>
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
