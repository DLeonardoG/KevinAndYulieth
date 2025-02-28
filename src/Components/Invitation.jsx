import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data/invitations.json";
import MusicPlayer from "./SpotifyPlayer";
import Countdown from "./counter.jsx";
import Description from "./description.jsx";
import song from "../assets/audio/song.mp3";
import photo1 from "../assets/img/photo1.jpg";
import background1 from "/background.svg";
import Carousel from "./Carousel";
import DualCarousel from "./Carousel2";
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
    "/photo6.jpg",
  ];

  return (
    <div className="bg-[#f9e5ec]">
      {guest && (
        <>
          <div
            className="min-h-screen h-auto bg-black"
            style={{
              backgroundImage: `url(${background1})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <MusicPlayer audioSrc={song} backgroundImage={photo1} />
          <Description />
          <WeddingDetails />
          <RSVPForm invitacion={guest} />
          <div className="md:hidden">
          <Carousel slides={slides} />
          </div>
          <div className="hidden md:flex">
          <DualCarousel slides={slides} />
          </div>
          <img
            src="/under.svg"
            alt="Flor decorativa"
            className="mx-auto w-full opacity-80"
          />
          <WeddingFooter />
        </>
      )}
    </div>
  );
};
