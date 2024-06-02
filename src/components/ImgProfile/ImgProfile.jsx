import React from 'react'
import fondoPerfil from "../../assets/fondo_miperfil.png";

const ImgProfile = () => {
  return (
    <div>
      <img src={fondoPerfil} alt="Profile" className="w-24 h-24 rounded-full mr-4 shadow-2xl" />
    </div>
  )
}

export default ImgProfile