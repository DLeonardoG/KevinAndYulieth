import { useState, useEffect } from 'react';

const RSVPForm = ({ invitacion }) => {
  // Estados
  const [confirmacion, setConfirmacion] = useState({
    opcion: '',
    seleccionados: [],
    mensaje: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Resetear estados al cambiar invitación
  useEffect(() => {
    setConfirmacion({ opcion: '', seleccionados: [], mensaje: '' });
    setError('');
    setSuccess(false);
  }, [invitacion]);

  // Manejar selección de opción
  const manejarOpcion = (opcion) => {
    setConfirmacion(prev => ({
      ...prev,
      opcion,
      seleccionados: opcion === 'confirmar-todos' ? invitacion.members : []
    }));
    setError('');
  };

  // Manejar selección individual
  const manejarSeleccion = (nombre) => {
    setConfirmacion(prev => {
      const nuevos = prev.seleccionados.includes(nombre)
        ? prev.seleccionados.filter(n => n !== nombre)
        : [...prev.seleccionados, nombre];
      
      if (nuevos.length > invitacion.total_members) {
        setError(`Máximo ${invitacion.total_members} personas permitidas`);
        return prev;
      }
      
      setError('');
      return { ...prev, seleccionados: nuevos };
    });
  };

  // Validar formulario
  const validarFormulario = () => {
    if (!confirmacion.opcion) {
      setError('Por favor selecciona una opción de confirmación');
      return false;
    }

    if (confirmacion.opcion === 'confirmar-parcial' && confirmacion.seleccionados.length === 0) {
      setError('Debes seleccionar al menos un invitado');
      return false;
    }

    if (confirmacion.mensaje.length > 200) {
      setError('El mensaje no puede exceder los 200 caracteres');
      return false;
    }

    return true;
  };

  // Enviar confirmación
  const manejarSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new URLSearchParams();
    formData.append('id_web', invitacion.id_web);
    formData.append('family_name', invitacion.family_name);
    formData.append('opcion', confirmacion.opcion);
    formData.append('seleccionados', confirmacion.seleccionados.join(','));
    formData.append('mensaje', confirmacion.mensaje);

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwCzsJM6NWshBPASCOBtCJ2fy8t5Mztboi7egLaFLqgpP4QP7PbrQK4fYe-eEy0zCbqnQ/exec',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: formData
        }
      );
      
      const result = await response.text();
      alert(result);
      
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el formulario');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-crema-claro rounded-lg shadow-xl border border-dorado">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Merriweather&display=swap');
        
        .font-script { font-family: 'Great Vibes', cursive; }
        .font-serif { font-family: 'Merriweather', serif; }
        .bg-crema-claro { background-color: #fffaf3; }
        .border-dorado { border-color: #d4af37; }
        .text-dorado { color: #d4af37; }
        .bg-dorado { background-color: #d4af37; }
        .hover\\:bg-dorado-oscuro:hover { background-color: #b5942e; }
        .border-dorado-claro { border-color: #e5d4a3; }
        .flor-decorativa { font-size: 2.5rem; color: #d4af37; line-height: 1; }
        .espacio-entre-lineas { line-height: 1.8; }
        
        @media (max-width: 640px) {
          .flor-decorativa { font-size: 2rem; }
          .text-lg { font-size: 1rem; }
          .text-xl { font-size: 1.25rem; }
          .text-4xl { font-size: 2.5rem; }
          .max-w-2xl { max-width: 100%; }
          .p-8 { padding: 2rem; }
          .grid-cols-2 { grid-template-columns: 1fr; }
          .w-40 { width: 50%; }
          .mb-8 { margin-bottom: 2rem; }
          .mb-6 { margin-bottom: 1.5rem; }
        }
      `}</style>

      {/* Decoración superior */}
      <div className="text-center mb-8">
        <div className="flor-decorativa mb-4">❀</div>
        <h1 className="text-4xl font-script text-dorado mb-4">Kevin & Yulieth</h1>
        <div className="flor-decorativa mt-4">❀</div>
      </div>

      {/* Mensajes de estado */}
      {success && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
          ✅ Confirmación exitosa! Recibimos tu respuesta correctamente.
        </div>
      )}
      
      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
          ⚠️ {error}
        </div>
      )}

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
          Querido(a) <span className="font-bold text-gray-800">{invitacion.family_name}</span>
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
              {/* Opción 1: Confirmar todos */}
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="opcion"
                  value="confirmar-todos"
                  checked={confirmacion.opcion === 'confirmar-todos'}
                  onChange={() => manejarOpcion('confirmar-todos')}
                  className="form-radio text-dorado"
                  disabled={loading}
                />
                <span className="text-gray-700 font-serif">
                  Sí, confirmo la asistencia de todos ({invitacion.members.join(', ')})
                </span>
              </label>

              {/* Opción 2: Confirmación parcial */}
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="opcion"
                  value="confirmar-parcial"
                  checked={confirmacion.opcion === 'confirmar-parcial'}
                  onChange={() => manejarOpcion('confirmar-parcial')}
                  className="form-radio text-dorado"
                  disabled={loading}
                />
                <span className="text-gray-700 font-serif">
                  Confirmar asistencia para:
                </span>
              </label>

              {confirmacion.opcion === 'confirmar-parcial' && (
                <div className="grid grid-cols-2 gap-3 ml-8">
                  {invitacion.members.map((persona, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => manejarSeleccion(persona)}
                      className={`p-2 rounded-full border transition-colors ${
                        confirmacion.seleccionados.includes(persona)
                          ? 'bg-dorado text-white border-dorado'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-dorado'
                      } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={loading}
                    >
                      {persona}
                    </button>
                  ))}
                  <div className="col-span-2 text-sm text-gray-500 mt-2">
                    Seleccionados: {confirmacion.seleccionados.length} de {invitacion.total_members}
                  </div>
                </div>
              )}

              {/* Opción 3: No asistir */}
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="opcion"
                  value="no-asistiremos"
                  checked={confirmacion.opcion === 'no-asistiremos'}
                  onChange={() => manejarOpcion('no-asistiremos')}
                  className="form-radio text-dorado"
                  disabled={loading}
                />
                <span className="text-gray-700 font-serif">
                  Con dolor en el corazón, no podremos asistir
                </span>
              </label>
            </div>

            {/* Campo de mensaje */}
            <div className="mt-8">
              <label className="block text-gray-700 font-serif mb-3">
                Déjanos un mensaje para los novios (opcional):
              </label>
              <textarea
                value={confirmacion.mensaje}
                onChange={(e) => setConfirmacion(prev => ({
                  ...prev,
                  mensaje: e.target.value.slice(0, 200)
                }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-dorado focus:ring-dorado font-serif"
                rows="3"
                placeholder="Escribe aquí tus buenos deseos..."
                disabled={loading}
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {confirmacion.mensaje.length}/200
              </div>
            </div>
          </div>

          {/* Botón de envío */}
          <button
            type="submit"
            disabled={loading || !confirmacion.opcion || 
              (confirmacion.opcion === 'confirmar-parcial' && 
              confirmacion.seleccionados.length === 0)}
            className="w-full bg-dorado text-white py-3 px-6 rounded-full font-serif 
                      hover:bg-dorado-oscuro transition-colors disabled:opacity-50 
                      disabled:cursor-not-allowed relative"
          >
            {loading ? (
              <>
                <span className="invisible">Enviando...</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                </div>
              </>
            ) : (
              'Enviar Confirmación'
            )}
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

export default RSVPForm;