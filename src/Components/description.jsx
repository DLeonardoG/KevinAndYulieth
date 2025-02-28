import React from "react";
import Countdown from "./counter";

function Description() {
  return (
    <div className="relative w-full text-[#b40129] shadow-md rounded-lg p-8 overflow-hidden text-center">
      <img
        src="/flowers-left.svg"
        alt="Decoración floral superior"
        className="absolute z-0 top-0 left-0 w-60 md:w-150 h-auto"
      />
      <img
        src="/flowers.svg"
        alt="Decoración floral superior derecha"
        className="absolute top-0 right-0 w-60 z-0 md:w-150 h-auto"
      />

      <h1 className="text-4xl md:text-4xl mt-15 text-vinotinto font-script z-10 mb-4">
        ¡Faltan!
      </h1>

      <div className="flex justify-center mb-5 z-10">
        <Countdown />
      </div>

      <p
        className="text-roseGold z-10 font-serif leading-relaxed text-center px-4 py-2 max-w-[600px] mx-auto tracking-wide"
        style={{ lineHeight: "1.85rem" }}
      >
        Con inmenso amor e ilusión, <br />
        y en compañía de nuestros padres <br />
        tenemos el gusto de invitar a celebrar{" "}
      </p>

      <h2 className="mt-6 z-10 text-5xl md:text-5xl text-roseGold font-script">
        Nuestra Boda
      </h2>

      <div
        className="flex z-10 flex-col items-center mt-6 p-6 max-w-[300px] mx-auto relative"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        <span
          className="text-lg font-medium text-[#c68678] tracking-wider uppercase mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Viernes
        </span>

        <span
          className="text-[4rem] font-bold text-[#c68678] leading-none mb-1"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          28
        </span>

        <span
          className="text-lg font-medium text-[#c68678] tracking-wider uppercase"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Marzo
        </span>
      </div>

      <div
        className="flex flex-col z-10 items-center p-3 mt-6"
        style={{
          fontFamily: "'Playfair Display', serif",
          textAlign: "center",
        }}
      >
        <h4 className="font-semibold z-10 text-[#6c201f] tracking-wide text-3xl font-script">
          Ceremonia
        </h4>
        <h3 className="font-bold font-serif z-10 text-[#ad4658] px-3 text-3xl mb-2">
          Iglesia Adventista Norte
        </h3>

        <p className="text-[#150103] z-10 text-2xl mb-2 font-serif">
          Cra. 20 #6-47
        </p>
        <div className="flex items-center z-10 gap-2 mt-1 text-2xl font-medium">
          <span className="font-serif text-[#000000]">
            <span className="font-serif text-[#a52d2d]">Hora: </span>6:00 p.m.
          </span>
        </div>


        <a
          href="https://www.google.com/maps/place/Iglesia+Adventista+del+s%C3%A9ptimo+d%C3%ADa+-+Norte/@7.1396168,-73.1272981,17z/data=!3m1!4b1!4m6!3m5!1s0x8e6815730bca4eeb:0xa1c501d7f7afe0aa!8m2!3d7.1396168!4d-73.1272981!16s%2Fg%2F11c2j2zd4g?entry=ttu&g_ep=EgoyMDI1MDIyMy4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          className="inline-flex items-center gap-2 text-white bg-[#ad4658] py-3 px-6 rounded-lg mt-3 transition-all duration-300 ease-in-out cursor-pointer border-2 border-[#ad4658] shadow-sm hover:bg-[#ad4658] hover:text-white z-10"
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#ad4658";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#ad4658";
            e.currentTarget.style.color = "white";
          }}
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            height="1.2em"
            width="1.2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          Ubicación
        </a>
      </div>
      <div
        className="flex flex-col z-10 items-center p-3 mt-6"
        style={{
          fontFamily: "'Playfair Display', serif",
          textAlign: "center",
        }}
      >
        <h4 className="font-semibold z-10 text-[#6c201f] tracking-wide text-3xl font-script">
          Recepcion
        </h4>
        <h3 className="font-bold font-serif z-10 text-[#ad4658] px-3 text-3xl mb-2">
          El otro Lugar
        </h3>

        <p className="text-[#150103] z-10 text-2xl mb-2 font-serif">
          Cra. 106 #80-47
        </p>
        <div className="flex items-center z-10 gap-2 mt-1 text-2xl font-medium">
          <span className="font-serif text-[#000000]">
            <span className="font-serif text-[#a52d2d]">Hora: </span>8:00 p.m.
          </span>
        </div>


        <a
          href="https://www.google.com/maps/place/Iglesia+Adventista+del+s%C3%A9ptimo+d%C3%ADa+-+Norte/@7.1396168,-73.1272981,17z/data=!3m1!4b1!4m6!3m5!1s0x8e6815730bca4eeb:0xa1c501d7f7afe0aa!8m2!3d7.1396168!4d-73.1272981!16s%2Fg%2F11c2j2zd4g?entry=ttu&g_ep=EgoyMDI1MDIyMy4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          className="inline-flex items-center gap-2 text-white bg-[#ad4658] py-3 px-6 rounded-lg mt-3 transition-all duration-300 ease-in-out cursor-pointer border-2 border-[#ad4658] shadow-sm hover:bg-[#ad4658] hover:text-white z-10"
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#ad4658";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#ad4658";
            e.currentTarget.style.color = "white";
          }}
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            height="1.2em"
            width="1.2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          Ubicación
        </a>
      </div>
      <img
        src="/flowers.svg"
        alt="Decoración floral inferior"
        className="absolute bottom-0 z-0 left-0 w-60 md:w-150 h-auto rotate-180"
      />
      <img
        src="/flowers-left.svg"
        alt="Decoración floral inferior derecha"
        className="absolute md:w-150 z-0 bottom-0 right-0 w-60 h-auto rotate-180"
      />
    </div>
  );
}
export default Description;
