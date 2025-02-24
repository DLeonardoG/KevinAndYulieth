import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data/invitations.json";
import MusicPlayer from "./SpotifyPlayer";
import Countdown from "./counter.jsx";
import Description from "./description.jsx";
import song from "../assets/audio/song.mp3";
import photo1 from "../assets/img/photo1.jpg";
import background1 from "../assets/img/background1.svg";

export const Invitation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [guest, setGuest] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const foundGuest = data.find((guest) => guest.num === parseInt(id)); // Busca por "num"

    if (foundGuest) {
      setGuest(foundGuest);
      setError("");
    } else {
      setError("Código de invitación inválido");
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
          <MusicPlayer audioSrc={song} backgroundImage={photo1} />
          <div
            className="bg-black h-screen"
            style={{
              backgroundImage: `url(${background1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <Description />
          <h1>Invitación para {guest.name}</h1>
        </>
      )}
    </div>
  );
};
