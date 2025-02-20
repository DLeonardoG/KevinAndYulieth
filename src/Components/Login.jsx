import React, { useState } from 'react';
import '../styles.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';
import data from '../data/invitations.json';

export const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [idInput, setIdInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = data.find(guest => guest.id === idInput.trim());
    
    if (foundUser) {
      setUser(foundUser);
      navigate('/welcome'); // Cambia esta ruta según tu necesidad
    } else {
      setError('ID inválido. Por favor verifica tu código de invitación');
    }
  };

  return (
<div className="min-h-screen flex items-center justify-center" style={{
  backgroundImage: 'url(/background-login.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}}>
  <div className="absolute inset-0 bg-rose-900/60 backdrop-blur-sm"></div>
  
  <div className="w-full max-w-md p-8 space-y-8 relative z-10">
    <form 
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-lg border border-rose-100/20 p-8 rounded-xl shadow-xl max-w-md w-full transition-all hover:shadow-2xl"
    >
      {/* Encabezado romántico */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <HeartIcon className="h-8 w-8 text-rose-200 animate-pulse" />
          <h1 className="text-4xl font-greatvibes text-rose-100">
            ¡Bienvenidos!
          </h1>
          <HeartIcon className="h-8 w-8 text-rose-200 animate-pulse" />
        </div>
        <p className="text-rose-200 font-light italic">
          Introduce tu código de amor para continuar
        </p>
      </div>

      {/* Campo de entrada */}
      <div className="mb-6">
        <input
          type="text"
          id="id"
          value={idInput}
          onChange={(e) => {
            setIdInput(e.target.value);
            setError('');
          }}
          className="w-full px-4 py-3 bg-white/20 border border-rose-100/30 rounded-lg text-rose-100 placeholder-rose-200/70 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-transparent transition-all"
          placeholder="Ej: AmorEterno2024"
        />
      </div>

      {/* Mensaje de error */}
      {error && (
        <div className="mb-4 p-3 bg-rose-200/20 text-rose-100 rounded-lg text-sm border border-rose-200/30">
          ❤ {error}
        </div>
      )}

      {/* Botón de acceso */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-rose-400 to-rose-600 hover:from-rose-500 hover:to-rose-700 text-white py-3 px-6 rounded-lg font-semibold tracking-wide transition-all transform hover:scale-105 shadow-lg hover:shadow-rose-500/30 flex items-center justify-center space-x-2"
      >
        <ArrowRightIcon className="h-5 w-5 text-white animate-bounce-horizontal" />
        <span>Descubrir la magia</span>
      </button>
    </form>

    {/* Texto decorativo al pie */}
    <p className="text-center text-rose-200/80 italic text-sm font-light">
      "Donde el amor se encuentra con la eternidad"
    </p>
  </div>
</div>
  );
};