import React from 'react'
import PlaylistItem from '../../components/PlaylistItem/PlaylistItem'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

const PlaylistPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 container mx-auto p-8 bg-red-900">
        <div className="bg-white p-6 rounded-lg shadow-lg px-16 py-10 border">
          <PlaylistItem />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PlaylistPage
