import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SongItem from '../../components/SongItem/SongItem'
import Footer from '../../components/Footer/Footer'

const FavoritesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 container mx-auto p-8 bg-red-900">
        <div className="bg-white p-6 rounded-lg shadow-lg px-16 py-10 border">
          <SongItem />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default FavoritesPage
