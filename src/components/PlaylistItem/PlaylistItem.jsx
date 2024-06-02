import React from 'react'

const PlaylistItem = () => {
  return (
    <div className="flex items-center bg-gray-100 p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex-grow">
      <h2 className="text-xl font-bold"> Título de la Playlist</h2>
    </div>
    <button className="text-white hover:bg-red-900 border border-black rounded p-1 bg-red-700">Ir a playlist</button>
  </div>
  )
}

export default PlaylistItem
