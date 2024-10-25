import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer = ({ songList }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Control de la canción actual
  const [isPlaying, setIsPlaying] = useState(false); // Estado de reproducción
  const [volume, setVolume] = useState(1);   
  const audioRef = useRef(null);

  const currentSong = songList[currentSongIndex]; // Obtener la canción actual

  // Función para reproducir o pausar la canción
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Control de cambio de volumen
  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value;
  };

  // Cambiar a la siguiente canción
  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songList.length);
    setIsPlaying(false);
  };

  // Cambiar a la canción anterior
  const prevSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songList.length - 1 : prevIndex - 1
    );
  };

  // Reiniciar cuando cambie la canción
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load(); // Recargar la nueva pista
      const playSong = async () => {
        try {
          await audioRef.current.play(); // Reproducirla automáticamente
          setIsPlaying(true); // Cambiar estado a play
        } catch (error) {
          console.error("Error al intentar reproducir la canción:", error);
        }
      };
      playSong();
    }
  }, [currentSongIndex]);

  return (
    <>
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">

      <h2 className="text-2xl font-bold text-center mb-4">{currentSong.name}</h2>

      <div className="flex justify-center items-center mb-4">
        <button onClick={prevSong} className="mr-4 bg-gray-600 px-4 py-2 rounded-lg">⏮️</button>
        
        <button onClick={togglePlayPause} className="bg-gray-600 px-4 py-2 rounded-lg">
          {isPlaying ? '⏸️ Pausar' : '▶️ Reproducir'}
        </button>

        <button onClick={nextSong} className="ml-4 bg-gray-600 px-4 py-2 rounded-lg">⏭️</button>
      </div>

      <audio ref={audioRef}>
        <source src={currentSong.url} type="audio/mp3" />
        Su navegador no soporta los elementos de audios
      </audio>

      <div className="mt-4">
        <label htmlFor="volume" className="block text-center mb-2">Volumen: {Math.round(volume * 100)}</label>
        <input id="volume" type="range" min="0" max="1" step="0.01" value={volume} 
        onChange={handleVolumeChange} className="w-full"/>
      </div>
    </div>
    </>
  );
};

export default MusicPlayer;
