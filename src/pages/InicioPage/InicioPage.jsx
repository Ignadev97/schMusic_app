import React from 'react'
import LoginDiv from '../../components/LoginDiv/LoginDiv.jsx'

const InicioPage = () => {
  return (
    <div className="bg-img-fondo flex flex-row justify-end items-center min-h-screen">
      <h1 className='text-4xl font-bold mr-24 text-white bg-black p-2 rounded-lg'> schMusic </h1>
      <LoginDiv />
    </div>
  )
}

export default InicioPage
