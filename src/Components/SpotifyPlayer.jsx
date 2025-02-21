import { useState, useRef, useEffect } from 'react';

const MusicPlayer = ({
  audioSrc,
  artwork,
  title,
  artist,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [repeatMode, setRepeatMode] = useState('none');
  const [isShuffled, setIsShuffled] = useState(false);
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    
    const updateMetaData = () => {
      setDuration(audio.duration);
      if (isPlaying) audio.play();
    };
    
    const updateTime = () => setCurrentTime(audio.currentTime);
    
    const handleEnd = () => {
      if (repeatMode === 'track') {
        audio.currentTime = 0;
        audio.play();
      } else if (onNext && hasNext) onNext();
    };

    audio.addEventListener('loadedmetadata', updateMetaData);
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', handleEnd);

    return () => {
      audio.removeEventListener('loadedmetadata', updateMetaData);
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('ended', handleEnd);
    };
  }, [repeatMode, hasNext, isPlaying, onNext]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
  };

  const handleSeek = (e) => {
    const rect = progressBarRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pos * duration;
  };

  const toggleRepeat = () => {
    const modes = ['none', 'track', 'playlist'];
    setRepeatMode(modes[(modes.indexOf(repeatMode) + 1) % 3]);
    audioRef.current.loop = repeatMode === 'track';
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} src={audioSrc} />
      
      <div className="player-content">
        <div className="artwork-container">
          <img 
            src={artwork} 
            alt="Album Artwork" 
            className={`artwork ${isPlaying ? 'rotating' : ''}`}
          />
        </div>

        <div className="track-info">
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>
        </div>

        <div className="progress-container" ref={progressBarRef} onClick={handleSeek}>
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
          <button 
            className={`control-btn shuffle ${isShuffled ? 'active' : ''}`}
            onClick={() => setIsShuffled(!isShuffled)}
          >
            <ShuffleIcon />
          </button>

          <div className="main-controls">
            <button 
              className="control-btn" 
              onClick={onPrevious}
              disabled={!hasPrevious}
            >
              <PreviousIcon />
            </button>
            
            <button 
              className="play-pause-btn" 
              onClick={togglePlayPause}
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
            
            <button 
              className="control-btn" 
              onClick={onNext}
              disabled={!hasNext}
            >
              <NextIcon />
            </button>
          </div>

          <button 
            className={`control-btn repeat ${repeatMode !== 'none' ? 'active' : ''}`}
            onClick={toggleRepeat}
          >
            <RepeatIcon mode={repeatMode} />
          </button>
        </div>

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

      <style jsx>{`
        .music-player {
          background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
          border-radius: 20px;
          padding: 30px;
          max-width: 450px;
          margin: 2rem auto;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          color: #fff;
        }

        .player-content {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .artwork-container {
          position: relative;
          width: 200px;
          height: 200px;
          margin: 0 auto;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }

        .artwork {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .rotating {
          animation: rotation 20s infinite linear;
        }

        @keyframes rotation {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .track-info {
          text-align: center;
        }

        .title {
          font-size: 1.5rem;
          margin: 0;
          letter-spacing: 0.5px;
        }

        .artist {
          color: #b3b3b3;
          margin: 5px 0 0;
          font-size: 1rem;
        }

        .progress-container {
          height: 4px;
          background: #404040;
          border-radius: 2px;
          cursor: pointer;
          position: relative;
        }

        .progress-bar {
          height: 100%;
          background: #1db954;
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
          gap: 15px;
        }

        .main-controls {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .control-btn {
          background: none;
          border: none;
          color: #b3b3b3;
          padding: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .control-btn:hover:not(:disabled) {
          color: #fff;
          transform: scale(1.1);
        }

        .control-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .control-btn.active {
          color: #1db954;
        }

        .play-pause-btn {
          background: #1db954;
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
          background: #1ed760;
        }

        .volume-control {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 15px;
        }

        input[type="range"] {
          width: 100px;
          height: 4px;
          background: #404040;
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
      `}</style>
    </div>
  );
};

// Iconos SVG como componentes
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M8 5v14l11-7z"/>
  </svg>
);

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
  </svg>
);

const PreviousIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
  </svg>
);

const NextIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
  </svg>
);

const ShuffleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>
  </svg>
);

const RepeatIcon = ({ mode }) => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    {mode === 'track' ? (
      <path fill="currentColor" d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
    ) : (
      <path fill="currentColor" d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
    )}
    {mode !== 'none' && <circle cx="19" cy="19" r="3" fill="#1db954"/>}
  </svg>
);

const VolumeIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
  </svg>
);

export default MusicPlayer;