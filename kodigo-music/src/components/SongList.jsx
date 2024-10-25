import React, { useEffect, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import MusicPlayer from './MusicPlayer'; // Importamos el componente del reproductor

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      const storage = getStorage();
      const storageRef = ref(storage, ''); // Ruta raíz en Firebase Storage

      try {
        const result = await listAll(storageRef);
        const urls = await Promise.all(result.items.map(item => getDownloadURL(item)));

        const songData = result.items.map((item, index) => ({
          name: item.name,
          url: urls[index],
        }));

        setSongs(songData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching songs: ", err);
        setError("Failed to load songs. Please try again.");
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {songs.length === 0 ? (
        <p className="text-center">No songs available</p>
      ) : (
        <MusicPlayer songList={songs} /> // Pasamos las canciones al reproductor
      )}
    </div>
  );
};

export default SongList;
