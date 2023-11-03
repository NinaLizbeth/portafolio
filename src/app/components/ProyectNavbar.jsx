'use client'

import Link from "next/link"
import { FontKalam, fontSatisfy } from "../../../styles/fonts"
import Hamburger from "../components/Hamburger"
import { useState } from "react"

const ProyectNavbar = () => {
  const [openBurger, setOpenBurger] = useState(false);

  const onToggleBurgerMenu = () => {
    setOpenBurger(!openBurger);
  }

  return (
    <>
    <nav className="lg:hidden  absolute mt-3  w-full p-2 cursor-pointer">
    <button onClick={onToggleBurgerMenu} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-16 h-16 justify-center text-sm text-gray-500 rounded-lg md:hidden " aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Abrir menu principal</span>
              <Hamburger/>
            </button>
            {openBurger && (
    <div className="bg-yellow-200  w-full h-screen z-50  ">
            <ul className="flex flex-col justify-center items-center gap-5 mt-5">
              <Link href="/" onClick={onToggleBurgerMenu} className="text-3xl" style={FontKalam.style} >Sobre mi</Link>
              <hr className="w-full" />
              <Link href="/" onClick={onToggleBurgerMenu} className="text-3xl" style={FontKalam.style} >skill</Link>
              <hr className="w-full" />
              <Link href="" onClick={onToggleBurgerMenu} className="text-3xl"style={FontKalam.style}  >Proyectos</Link>
              <hr className="w-full" />
              <a href="#footerId" onClick={onToggleBurgerMenu} className="text-3xl" style={FontKalam.style} >Descarga mi cv</a>
              <hr className="w-full" />
              <a href="#footerId" onClick={onToggleBurgerMenu} className="text-3xl" style={FontKalam.style}  >Contacto</a>
              <hr className="w-full" />
              <Link href="" onClick={onToggleBurgerMenu} className="text-3xl font-bold cursor-pointer text-violet-600">Cerrar</Link>
            </ul>
          </div>
           )}
      </nav>
      <nav className="hidden sm:block absolute top-4 lefth-14 p-4 cursor-pointer">
        
        <ul className="flex flex-row gap-6 ml-auto">
          <a href="#aboutId"><li className="text-white p-2 rounded-lg  bg-pink-300 shadow-xl hover:scale-125">Sobre mi</li></a>
          <a href="#sectionId"><li className="text-white p-2 rounded-lg  bg-pink-300 shadow-xl hover:scale-125 " >Skill</li></a>
          <Link href="/proyectos"><li className="text-white p-2 rounded-lg  bg-pink-300 shadow-xl hover:scale-125" >Proyectos</li></Link>
          <li className="text-white p-2 rounded-lg  bg-pink-300 shadow-xl hover:scale-125">Descarga mi CV</li>
          <a href="#contactoId"><li className="text-white p-2 rounded-lg  bg-pink-300 shadow-2xl  hover:scale-125">Contacto</li></a>
          
        </ul>

      
      </nav>
     
      <Link href="/"><h2 style={fontSatisfy.style}  className="absolute lg:right-36 right-14 mt-7 lg:mt-5 text-5xl lg:text-6xl text-pink-400  hover:scale-125">Nina </h2></Link>
    </>
  )
}

export default ProyectNavbar