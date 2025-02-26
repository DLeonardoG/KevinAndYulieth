import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data/invitations.json";
import MusicPlayer from "./SpotifyPlayer";
import Countdown from "./counter.jsx";
import Description from "./description.jsx";
import song from "../assets/audio/song.mp3";
import photo1 from "../assets/img/photo1.jpg";
import background1 from "../assets/img/background1.svg";
import Carousel from "./Carousel";
import Timeline from "./Timeline";
import WeddingDetails from "./WeddingDetails";
import RSVPForm from "./RSVPForm";
import WeddingFooter from "./WeddingFooter";

export const Invitation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [guest, setGuest] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const foundGuest = data.find((guest) => guest.id_web === id);

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

  const slides = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
  ];

  return (
    <div className="bg-[#f9e5ec]">
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
          <div className="max-w-7xl mx-auto px-4 py-8">
            <Timeline />
            <WeddingDetails />
            <RSVPForm
              nombreInvitado={guest.family_name}
              numPersonas={guest.total_members}
              personasInvitadas={guest.members}
            />
            <Carousel slides={slides} />
          </div>
          <WeddingFooter />
        </>
      )}
    </div>
  );
};
