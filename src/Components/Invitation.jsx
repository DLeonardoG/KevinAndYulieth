import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../data/invitations.json';
import SpotifyPlayer from './SpotifyPlayer';


export const Invitation = () => {
  const { id } = useParams(); // Obtiene el id de la URL
  const navigate = useNavigate();
  const [guest, setGuest] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const foundGuest = data.find(guest => guest.num === parseInt(id)); // Busca por "num"
    
    if (foundGuest) {
      setGuest(foundGuest);
      setError('');
    } else {
      setError('Código de invitación inválido');
      setGuest(null);
    }
  }, [id, data]); 

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {guest && (
        <>
          <h1>Invitación para {guest.name}</h1>
          {/* Más detalles del invitado */}
          <SpotifyPlayer/>
        </>
      )}
    </div>
  );
};