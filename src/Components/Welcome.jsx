import React from 'react';
import { useUser } from '../UserContext';

export const Welcome = () => {
  const { user } = useUser();
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          ¡Bienvenid@ {user.name}!
        </h1>
        <p className="text-gray-600 text-center">
          Tienes {user.numberOfGuests} invitación(es) registrada(s)
        </p>
        <div className="mt-6">
          <h3 className="font-medium mb-2">Invitados:</h3>
          <ul className="list-disc pl-5">
            {user.guests.map((guest, index) => (
              <li key={index} className="text-gray-700">{guest}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};