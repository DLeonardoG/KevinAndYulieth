import { useState } from 'react';

const InvitacionBoda = ({ nombreInvitado, numPersonas, personasInvitadas }) => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const [seleccionados, setSeleccionados] = useState([]);
  const [mensaje, setMensaje] = useState('');

  const manejarSeleccion = (nombre) => {
    if (seleccionados.includes(nombre)) {
      setSeleccionados(seleccionados.filter(n => n !== nombre));
    } else {
      setSeleccionados([...seleccionados, nombre]);
    }
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    // Lógica de envío con:
    // - opcionSeleccionada
    // - seleccionados (si aplica)
    // - mensaje
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-crema-claro rounded-lg shadow-xl border border-dorado">
      {/* Estilos incrustados */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Merriweather&display=swap');

        .font-script {
          font-family: 'Great Vibes', cursive;
        }

        .font-serif {
          font-family: 'Merriweather', serif;
        }

        .bg-crema-claro {
          background-color: #fffaf3;
        }

        .border-dorado {
          border-color: #d4af37;
        }

        .text-dorado {
          color: #d4af37;
        }

        .bg-dorado {
          background-color: #d4af37;
        }

        .hover\\:bg-dorado-oscuro:hover {
          background-color: #b5942e;
        }

        .border-dorado-claro {
          border-color: #e5d4a3;
        }

        .flor-decorativa {
          font-size: 2.5rem;
          color: #d4af37;
          line-height: 1;
        }

        .espacio-entre-lineas {
          line-height: 1.8;
        }

        @media (max-width: 640px) {
          .flor-decorativa {
            font-size: 2rem; /* Reduce el tamaño en pantallas pequeñas */
          }

          .text-lg {
            font-size: 1rem; /* Ajusta el tamaño del texto */
          }

          .text-xl {
            font-size: 1.25rem; /* Ajusta el tamaño del texto */
          }

          .text-4xl {
            font-size: 2.5rem; /* Ajusta el tamaño del título */
          }

          .max-w-2xl {
            max-width: 100%; /* Se adapta al ancho de la pantalla */
          }

          .p-8 {
            padding: 2rem; /* Reduce el padding en pantallas pequeñas */
          }

          .grid-cols-2 {
            grid-template-columns: 1fr; /* Hace que los botones sean de una sola columna en pantallas pequeñas */
          }

          .w-40 {
            width: 50%; /* Ajusta el tamaño de la flor decorativa */
          }

          .mb-8 {
            margin-bottom: 2rem; /* Espaciado reducido */
          }

          .mb-6 {
            margin
            -bottom: 1.5rem; /* Espaciado reducido */
          }
        }
      `}</style>

      {/* Decoración superior */}
      <div className="text-center mb-8">
        <div className="flor-decorativa mb-4">❀</div>
        <h1 className="text-4xl font-script text-dorado mb-4">Kevin & Yulieth</h1>
        <div className="flor-decorativa mt-4">❀</div>
      </div>

      {/* Texto de invitación */}
      <div className="text-center mb-12 espacio-entre-lineas">
        <p className="text-lg font-serif text-gray-700 mb-6">
          Ese amor tan puro y limpio que menciona la Biblia, Dios nos lo dio como regalo, 
          permitiendo que la historia que empezó como una amistad en el 2019, se transformara 
          en el 2021 en un noviazgo; fue así como con el pasar del tiempo ese amor fue creciendo 
          tanto, tanto, tanto, que en el 2024 tomamos la decisión de amarnos, cuidarnos, 
          protegernos, respetarnos y luchar por la felicidad del otro toda la vida.
        </p>
        
        <p className="text-xl font-script text-dorado mb-6">
          Querido(a) <span className="font-bold text-gray-800">{nombreInvitado}</span>
        </p>
        
        <p className="text-lg font-serif text-gray-700 mb-8">
          Por eso queremos que tú hagas parte de nuestro gran día, queremos que te goces 
          y disfrutes de nuestro sueño hecho realidad, el de formar un hogar con la 
          bendición de nuestro Padre Celestial.
        </p>
      </div>

      {/* Formulario RSVP */}
      <div className="bg-white p-8 rounded-lg shadow-inner border border-dorado-claro">
        <h2 className="text-2xl font-script text-dorado text-center mb-6">
          Confirma tu asistencia
        </h2>

        <form onSubmit={manejarSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="opcion"
                  value="confirmar-todos"
                  onChange={() => setOpcionSeleccionada('confirmar-todos')}
                  className="form-radio text-dorado"
                />
                <span className="text-gray-700 font-serif">
                  Sí, confirmo la asistencia de todos ({personasInvitadas.join(', ')})
                </span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="opcion"
                  value="confirmar-parcial"
                  onChange={() => setOpcionSeleccionada('confirmar-parcial')}
                  className="form-radio text-dorado"
                />
                <span className="text-gray-700 font-serif">
                  Confirmar asistencia para:
                </span>
              </label>

              {opcionSeleccionada === 'confirmar-parcial' && (
                <div className="grid grid-cols-2 gap-3 ml-8">
                  {personasInvitadas.map((persona, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => manejarSeleccion(persona)}
                      className={`p-2 rounded-full border ${seleccionados.includes(persona) ? 'bg-dorado text-white border-dorado' : 'bg-white text-gray-700 border-gray-300 hover:border-dorado'}`}
                    >
                      {persona}
                    </button>
                  ))}
                </div>
              )}

              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="opcion"
                  value="no-asistiremos"
                  onChange={() => setOpcionSeleccionada('no-asistiremos')}
                  className="form-radio text-dorado"
                />
                <span className="text-gray-700 font-serif">
                  Con dolor en el corazón, no podremos asistir
                </span>
              </label>
            </div>

            <div className="mt-8">
              <label className="block text-gray-700 font-serif mb-3">
                Déjanos un mensaje para los novios (opcional):
              </label>
              <textarea
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-dorado focus:ring-dorado font-serif"
                rows="3"
                placeholder="Escribe aquí tus buenos deseos..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={!opcionSeleccionada || (opcionSeleccionada === 'confirmar-parcial' && seleccionados.length === 0)}
            className="w-full bg-dorado text-white py-3 px-6 rounded-full font-serif hover:bg-dorado-oscuro transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Enviar Confirmación
          </button>
        </form>
      </div>

      {/* Decoración inferior */}
      <div className="mt-12 text-center">
        <img 
          src="/flor_tatacoa.png" 
          alt="Flor decorativa" 
          className="mx-auto w-40 opacity-90"
        />
        <p className="font-script text-dorado text-xl mt-4">¡Esperamos compartir este momento contigo!</p>
      </div>
    </div>
  );
};

export default InvitacionBoda;
