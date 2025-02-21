import { useState, useRef, useEffect } from 'react';

const SpotifyPlayer = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    
    const setAudioData = () => {
      setDuration(audio.duration);
    };
    
    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };
    
    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    
    return () => {
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
    };
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div className="spotify-player">
      <audio ref={audioRef} src={audioSrc} />
      
      <div className="player-container">
        <div className="controls">
          <button 
            className="play-pause-btn" 
            onClick={togglePlayPause}
            aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
          >
            {isPlaying ? (
              <svg viewBox="0 0 16 16" width="16" height="16">
                <rect x="2" y="2" width="4" height="12" fill="currentColor"/>
                <rect x="10" y="2" width="4" height="12" fill="currentColor"/>
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" width="16" height="16">
                <path d="M4 2L14 8L4 14Z" fill="currentColor"/>
              </svg>
            )}
          </button>

          <div className="time-info">
            <span>{formatTime(currentTime)}</span>
            <div className="progress-bar" ref={progressBarRef}>
              <div 
                className="progress" 
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>
            <span>{formatTime(duration)}</span>
          </div>

          <div className="volume-control">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/>
            </svg>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.01" 
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .spotify-player {
          background: #181818;
          padding: 20px;
          border-radius: 8px;
          max-width: 500px;
          margin: 20px auto;
          box-shadow: 0 8px 24px rgba(0,0,0,0.5);
        }

        .player-container {
          display: flex;
          align-items: center;
        }

        .controls {
          display: flex;
          align-items: center;
          width: 100%;
          gap: 15px;
        }

        .play-pause-btn {
          background: #1DB954;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
          transition: transform 0.2s;
        }

        .play-pause-btn:hover {
          transform: scale(1.05);
        }

        .time-info {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 10px;
          color: #b3b3b3;
          font-size: 14px;
        }

        .progress-bar {
          flex: 1;
          height: 4px;
          background: #535353;
          border-radius: 2px;
          position: relative;
          cursor: pointer;
        }

        .progress {
          height: 100%;
          background: #b3b3b3;
          border-radius: 2px;
          transition: width 0.1s linear;
        }

        .volume-control {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #b3b3b3;
        }

        input[type="range"] {
          width: 80px;
          height: 4px;
          background: #535353;
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

export default SpotifyPlayer;