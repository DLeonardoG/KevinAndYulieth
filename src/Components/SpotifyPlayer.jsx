import { useState, useRef, useEffect } from "react";

const MusicPlayer = ({ audioSrc, backgroundImage }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const updateMetaData = () => setDuration(audio.duration);
    const updateTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("loadedmetadata", updateMetaData);
    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("loadedmetadata", updateMetaData);
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
  };

  const handleSeek = (e) => {
    const rect = progressBarRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pos * duration;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} src={audioSrc} loop />
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="overlay" />
      <div className="player-content">
        <div className="artwork-window">
          <div
            className="artwork-overlay"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        </div>
        <div className="player-ui">
          <div
            className="progress-container"
            ref={progressBarRef}
            onClick={handleSeek}
          >
            <div
              className="progress-bar"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
            <div className="time-display">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="controls">
            <button className="play-pause-btn" onClick={togglePlayPause}>
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
            <div className="volume-control">
              <VolumeIcon />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => {
                  const newVolume = parseFloat(e.target.value);
                  setVolume(newVolume);
                  audioRef.current.volume = newVolume;
                }}
              />
            </div>
          </div>
        </div>
        <div className="phrase text-white text- flex flex-col gap-3 bg-black">
          <cite>
          "El que ama tiene paciencia en todo, y siempre es amable.
El que ama no es envidioso, ni se cree más que nadie. No es orgulloso. 
No es grosero ni egoísta. 
No se enoja por cualquier cosa. 
No se pasa la vida recordando lo malo que otros le han hecho. 
No aplaude a los malvados, sino a los que hablan con la verdad. 
El que ama es capaz de aguantarlo todo, de creerlo todo, de esperarlo todo, de soportarlo todo. 
Sólo el amor vive para siempre."
          </cite>
          <strong className="text-end">1 Corintios 13: 4-8</strong>
        </div>
      </div>
      <style jsx>{`
        .music-player {
          position: relative;
          min-height: 100vh;
          padding: 2rem 1rem;
          overflow: hidden;
          background: #000;
        }
        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          z-index: 1;
          filter: blur(5px);
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 2;
        }
        .artwork-window {
          position: relative;
          width: 250px;
          height: 250px;
          margin: 0 auto 2rem;
          border-radius: 10%;
          overflow: hidden;
          z-index: 3;
          box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
          border: 3px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }
        .artwork-overlay {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background-size: cover;
          background-position: center;
          transform: rotate(0deg);
          z-index: 1;
        }
        .player-ui {
          position: relative;
          z-index: 4;
          background: transparent;
          border-radius: 20px;
          padding: 1rem;
          margin: 0 auto;
          max-width: 400px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .phrase {
          position: relative;
          z-index: 4;
          background: transparent;
          border-radius: 20px;
          padding: 1rem;
          margin: 0 auto;
          margin-top: 1rem;
          max-width: 400px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .progress-container {
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          cursor: pointer;
          position: relative;
          margin: 1rem 0;
        }
        .progress-bar {
          height: 100%;
          background: white;
          border-radius: 2px;
          transition: width 0.1s linear;
        }
        .time-display {
          display: flex;
          justify-content: space-between;
          margin-top: 8px;
          font-size: 0.9rem;
          color: #b3b3b3;
        }
        .controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.5rem;
        }
        .play-pause-btn {
          background: transparent;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .play-pause-btn:hover {
          transform: scale(1.05);
          background: transparent;
        }
        .volume-control {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        input[type="range"] {
          width: 100px;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          -webkit-appearance: none;
          border-radius: 2px;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 12px;
          height: 12px;
          background: #fff;
          border-radius: 50%;
          cursor: pointer;
        }
        @media (max-width: 480px) {
          .music-player {
            padding: 1rem;
          }
          .artwork-window {
            width: 200px;
            height: 200px;
            margin-bottom: 1.5rem;
          }
          .player-ui {
            padding: 1rem;
            border-radius: 15px;
          }
        }
      `}</style>
    </div>
  );
};

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const VolumeIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path
      fill="white"
      d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
    />
  </svg>
);

export default MusicPlayer;
