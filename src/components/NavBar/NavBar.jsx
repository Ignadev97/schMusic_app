import React from "react";
import {useEffect, useState} from 'react'

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  })
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
        <label className="inline-flex items-center me-5 cursor-pointer">
          <input type="checkbox" className="sr-only peer" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-100 dark:text-gray-300"> Modo oscuro</span>
        </label>
    </div>
  );
};

export default NavBar;
NavBar;
