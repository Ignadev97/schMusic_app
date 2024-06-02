import React from "react";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import fondoPerfil from "../../assets/fondo_miperfil.png";

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 container mx-auto p-8 bg-red-900">
        <div className="bg-white p-6 rounded-lg shadow-lg px-16 py-10 border">
          <div className="flex items-center">
            <img src={fondoPerfil} alt="Profile" className="w-24 h-24 rounded-full mr-4 shadow-2xl" />
            <div>
              <h1 className="text-2xl font-bold">Nombre de Usuario</h1>
              <p className="text-gray-600">Breve descripción o biografía del usuario.</p>
              <p className="text-gray-600">correo@ejemplo.com</p>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold">Canciones más concurridas</h2>
            <ul className="list-inside mt-2 list-none">
              <li>Canción 1</li>
              <li>Canción 2</li>
              <li>Canción 3</li>
              {/* Agregar más canciones aquí */}
            </ul>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold">Favoritos</h2>
            <ul className="list-none list-inside mt-2">
              <li>Canción Favorita 1</li>
              <li>Canción Favorita 2</li>
              <li>Canción Favorita 3</li>
              <button className="text-blue-500 hover:underline">Ver más...</button>
              {/* Agregar más favoritos aquí */}
            </ul>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold">Configuración</h2>
            <button className="text-blue-500 hover:underline">Cambiar contraseña</button>
            <br />
            <button className="text-blue-500 hover:underline">Configuración de privacidad</button>
            <br />
            <button className="text-blue-500 hover:underline">Cerrar sesión</button>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold">Estadísticas</h2>
            <p className="text-gray-600">Canciones guardadas: 10</p>
            <p className="text-gray-600">Canciones favoritas: 5</p>
            <p className="text-gray-600">Actividad reciente: Hace 2 días</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
