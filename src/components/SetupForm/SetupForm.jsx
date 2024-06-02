import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const SetupForm = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 container mx-auto p-8 bg-red-900">
        <div className="bg-white p-6 rounded-lg shadow-lg px-auto py-10 border">
        <form className="bg-white" >
      <h2 className="text-2xl font-bold mb-4">Configuración</h2>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Nombre de Usuario:</label>
        <input
          type="text"
          id="username"
          className="w-1/5 p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          className="w-1/4 p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="theme" className="block text-gray-700 font-bold mb-2">Tema:</label>
        <select
          id="theme"
          className="w-1/5 p-2 border border-gray-300 rounded"
          required
        >
          <option value="light">Claro</option>
          <option value="dark">Oscuro</option>
          <option value="system">Sistema</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="fontSize" className="block text-gray-700 font-bold mb-2">Tamaño de Fuente:</label>
        <select
          id="fontSize"
          className="w-1/5 p-2 border border-gray-300 rounded"
          required
        >
          <option value="small">Pequeño</option>
          <option value="medium">Medio</option>
          <option value="large">Grande</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="sortOrder" className="block text-gray-700 font-bold mb-2">Ordenar Canciones Por:</label>
        <select
          id="sortOrder"
          className="w-1/5 p-2 border border-gray-300 rounded"
          required
        >
          <option value="title">Título</option>
          <option value="dateAdded">Fecha de Adición</option>
          <option value="artist">Artista</option>
        </select>
      </div>
      <button
        type="submit"
        className="my-4 w-1/4 bg-red-700 border border-gray-300 text-white font-bold py-2 px-4 rounded hover:bg-red-900"
      >
        Guardar Configuración
      </button>
    </form>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SetupForm;
