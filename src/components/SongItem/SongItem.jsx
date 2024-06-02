import React from "react";

const SongItem = () => {
  return (
    <div className="flex items-center bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        //   src={songCover}
        //   alt={song.title}
        className="w-16 h-16 rounded mr-4"
      />
      <div className="flex-grow">
        <h2 className="text-xl font-bold"> Título de la canción</h2>
        <p className="text-gray-600"> Artista</p>
      </div>
      <button className="text-blue-500 hover:underline">Letra y acordes</button>
    </div>
  );
};

export default SongItem;
