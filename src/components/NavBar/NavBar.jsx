import React from "react";

const NavBar = () => {
  return (
    <div className="bg-black flex flex-row justify-evenly text-white items-center">
        <label htmlFor="inputBuscar" className="flex items-center ">
          <p className="font-bold inline p-4">Buscar</p>
          <input type="text" className="rounded text-black p-1 h-8 border border-gray-300 " />
        </label>
        <ul className="flex flex-row gap-10 p-4">
          <li>Favoritos</li>
          <li>Ayuda</li>
        </ul>
    </div>
  );
};

export default NavBar;
NavBar;
