import { fontSatisfy } from "../../../styles/fonts"


const Navbar = () => {
  return (
    <>
      <nav className="absolute top-4 lefth-14 p-4 cursor-pointer">
        <ul className="flex flex-row gap-6 ml-auto">
          <a href="#aboutId"><li className="text-white p-2 rounded-lg  bg-pink-300 shadow-xl">Sobre mi</li></a>
          <a href="#sectionId"><li className="text-white p-2 rounded-lg  bg-pink-300 shadow-xl " >Skill</li></a>
          <li className="text-white p-2 rounded-lg  bg-pink-300 shadow-xl " >Proyectos</li>
          <li className="text-white p-2 rounded-lg  bg-pink-300 shadow-xl ">Descarga mi CV</li>
          <a href="#contactoId"><li className="text-white p-2 rounded-lg  bg-pink-300 shadow-xl ">Contacto</li></a>
          
        </ul>

      
      </nav>
      <h2 style={fontSatisfy.style}  className="absolute right-36 mt-5 text-6xl text-pink-400">Nina </h2>
    </>
  )
}

export default Navbar