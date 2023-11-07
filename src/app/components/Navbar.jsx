'use client'

import Link from "next/link"
import { FontKalam, fontRampart, fontSatisfy } from "../../../styles/fonts"
import Hamburger from "./Hamburger"
import { useState } from "react"
import CloseSvg from "./CloseSvg"
import DownLoadSvg from "./DownLoadSvg"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const pathName = usePathname()

  
  const [openBurger, setOpenBurger] = useState(false);

  const onToggleBurgerMenu = () => {
    setOpenBurger(!openBurger);
  }

  return (
    <>
    <nav className="lg:hidden  absolute mt-3  w-full p-2 cursor-pointer">
    <button onClick={onToggleBurgerMenu} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-16 h-16 hover:scale-125 justify-center text-sm text-gray-500 rounded-lg md:hidden " aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only  ">Abrir menu principal</span>
              <Hamburger/>
            </button>
            {openBurger && (
    <div className="bg-yellow-200 w-full h-auto rounded-2xl   ">
            <ul className="flex flex-col justify-center items-center gap-5  content-center">
              <Link href="#aboutId" onClick={onToggleBurgerMenu} className="text-3xl mt-8" style={fontRampart.style} >Sobre mi</Link>
              <hr className="w-full" />
              <Link href="#sectionId" onClick={onToggleBurgerMenu} className="text-3xl" style={fontRampart.style} >skill</Link>
              <hr className="w-full" />
              <Link href="/proyectos" onClick={onToggleBurgerMenu} className="text-3xl"style={fontRampart.style}  >Proyectos</Link>
              <hr className="w-full" />
              <a href="#contactoId" onClick={onToggleBurgerMenu} className="text-3xl" style={fontRampart.style}  >Contacto</a>
              <hr className="w-full" />
              <a href="" onClick={onToggleBurgerMenu} className="text-3xl" style={fontRampart.style} >Descarga mi cv</a>
              <hr className="w-full" />
              <Link href="" onClick={onToggleBurgerMenu} className="text-3xl hover:scale-125 font-bold cursor-pointer text-violet-600"><CloseSvg className="w-14 "/></Link>
            </ul>
          </div>
           )}
      </nav>
      <nav className="hidden sm:block absolute top-4 lefth-14 p-4 cursor-pointer">
        
        <ul className="flex flex-row gap-6 ml-auto">
          <a href="#aboutId"><li className="text-white p-2 rounded-lg  bg-pink-300 shadow-xl hover:scale-125">Sobre mi</li></a>
          <a href="#sectionId"><li className="text-white p-2 rounded-lg  bg-pink-300 shadow-xl hover:scale-125 " >Skill</li></a>
          <Link href="/proyectos"><li className="text-white p-2 rounded-lg  bg-pink-300 shadow-xl hover:scale-125" >Proyectos</li></Link>
          <a href="#contactoId"><li className="text-white p-2 rounded-lg  bg-pink-300 shadow-2xl  hover:scale-125">Contacto</li></a>
          <li className="text-white p-2 rounded-lg  bg-pink-300 shadow-xl cursor-auto">Descarga mi CV</li>
        </ul>
        <a href="/pdf/cv.pdf" download ><DownLoadSvg className="w-32 ml-[94%] hover:scale-110 -my-[22%]"/></a>

      
      </nav>
     
      <Link href="/"><h2 style={fontSatisfy.style}  className="absolute lg:right-36 right-14 mt-7 lg:mt-5 text-5xl lg:text-6xl text-pink-400  hover:scale-125">Nina </h2></Link>
    </>
  )
}

export default Navbar