import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const AddFormPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 container mx-auto p-8 bg-red-900">
        <div className="bg-white p-6 rounded-lg shadow-lg px-16 py-10 border">
          <form className="mx-auto">
            <h2 className="text-2xl font-bold mb-4">Añadir una Canción</h2>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-bold mb-2"
              >
                Título:
              </label>
              <input
                type="text"
                id="title"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="artist"
                className="block text-gray-700 font-bold mb-2"
              >
                Artista:
              </label>
              <input
                type="text"
                id="artist"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lyrics"
                className="block text-gray-700 font-bold mb-2"
              >
                Letra:
              </label>
              <textarea
                id="lyrics"
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-700 border border-gray-300 text-white font-bold py-2 px-4 rounded hover:bg-red-900"
            >
              Añadir Canción
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddFormPage;
