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
  <div className="flex items-center justify-center min-h-screen bg-gray-100" style={
    {backgroundImage: 'url(/background-login.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'}
  }>
    <div className="absolute inset-0 bg-black/50"></div>
    <div className="relative z-10 w-full max-w-md p-8 space-y-8">

    <form 
      onSubmit={handleSubmit}
      className="w-full max-w-md p-8 bg-transparent rounded-lg shadow-md"
    >
      <h1 className="mb-6 text-2xl font-bold text-center text-white">
        Invitacion
      </h1>
      
      <div className="mb-4">
        <label 
          htmlFor="id" 
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Ingresa tu código de invitación:
        </label>
        <input
          type="text"
          id="id"
          value={idInput}
          onChange={(e) => {
            setIdInput(e.target.value);
            setError('');
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ej: aqde45"
        />
      </div>

      {error && (
        <p className="mb-4 text-sm text-red-500">{error}</p>
      )}

      <button
        type="submit"
        className="w-full px-4 py-2 text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Acceder
      </button>
    </form>
    </div>
  </div>
  );
};