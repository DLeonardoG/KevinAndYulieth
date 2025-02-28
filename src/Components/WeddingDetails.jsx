import {React, useEffect} from 'react';

const WeddingDetails = () => {
    return (
      <div className="min-h-screen bg-[#fd8684] py-12 mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center mb-6">
              <h2 className="text-4xl font-script mb-4 text-gray-800 wedding-title">
                Código de vestuario
              </h2>
              <img 
                src="https://invitacionesgrafica.com/wp-content/uploads/2024/09/traje_formal.png"
                alt="Traje formal"
                className="w-full h-auto mb-4 rounded-lg"
              />
              <p className="font-semibold mb-2 font-serif text-xl text-gray-700">Traje de Cóctel</p>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Reservamos el color blanco y vinotinto en mujeres para uso exclusivo de la novia.
                <br />
                Hombres sin restricción.
              </p>
              <a
                href="https://pin.it/2vl7Vvjd0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-rose-400 hover:bg-rose-500 transition-colors"
              >
                Inspírate, click aquí
              </a>
            </div>
          </div>  
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-script text-5xl mb-4 text-gray-800 wedding-title">
                Regalo
              </h2>
              <p className="text-lg mb-4 text-gray-700 italic">
                El mejor regalo es tu presencia y compañía.
              </p>
              <div className="my-4">
              <img className="w-35 h-35 mx-auto text-gray-500" src="/sobre.svg"></img>
              </div>
              <h3 className="text-2xl font-semibold italic text-gray-800">
                Lluvia de sobres
              </h3>
            </div>
                <div className="pt-4 border-t border-gray-100 flex flex-col justify-center items-center">
                  <h3 className="font-semibold mb-2 text-gray-800 text-center">Únete al álbum</h3>
                  <p className="text-sm text-center text-gray-600 mb-4">
                    Acá puedes compartir las fotos de la boda.
                  </p>
                  <a target="_blank" href="https://photos.app.goo.gl/k4oaFbNhYcWuv1bW6" className="inline-flex items-center px-6 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                  
                    <svg 
                      className="w-5 h-5 mr-2" 
                      aria-hidden="true" 
                      viewBox="0 0 576 512"
                    >
                      <path d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z"/>
                    </svg>
                    Comparte aquí
                  </a>
                </div>
                <div className="pt-4 border-t border-gray-100 flex flex-col justify-center items-center">
                  <h3 className="font-semibold mb-2 text-gray-800 text-center">Agrega el evento</h3>
                  <p className="text-sm text-center text-gray-600 mb-4">
                    Agrega el evento a tu calendario.
                  </p>
                  <a 
            title="Add to Calendar"
            className="addeventatc inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white font-medium shadow-md bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all"
            data-id="lz25042241"
            href="https://www.addevent.com/event/lz25042241"
            target="_blank"
        >
            Agrega al calendario
        </a>

                </div>
          </div>
        </div>
  
        <style jsx>{`
          .wedding-title {
            font-family: 'Playfair Display', serif;
            letter-spacing: 0.05em;
            position: relative;
            padding-bottom: 0.5rem;
          }
          
          .wedding-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 2px;
            background-color: #f472b6;
          }
        `}</style>
      </div>
    );
  };
  
  export default WeddingDetails;