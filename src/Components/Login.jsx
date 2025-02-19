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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md max-w-md w-full"
      >
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Acceso de Invitados
        </h1>
        
        <div className="mb-4">
          <label 
            htmlFor="id" 
            className="block text-sm font-medium text-gray-700 mb-2"
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
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Acceder
        </button>
      </form>
    </div>
  );
};