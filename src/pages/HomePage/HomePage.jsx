import React from 'react'
import NavBar from '../../components/NavBar/NavBar.jsx'
import Footer from '../../components/Footer/Footer.jsx'

const HomePage = () => {
  return (
    <div className='min-h-screen'>
      <NavBar />  
      <div className="min-h-screen grid grid-cols-3 grid-rows-3 gap-2">
        <div className="border-4 border-black bg-img-miperfil p-4 rounded shadow row-span-2">Mi perfil</div>
        <div className="border-4 border-black bg-img-cancionero p-4 rounded shadow row-span-3">Cancionero</div>
        <div className="border-4 border-black bg-img-playlist p-4 rounded shadow row-span-2">Mis Playlist</div>
        <div className="border-4 border-black bg-img-añadir p-4 rounded shadow">Añadir canción</div>
        <div className="border-4 border-black bg-img-ajustes p-4 rounded shadow">Ajustes</div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
