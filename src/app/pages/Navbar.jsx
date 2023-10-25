

const Navbar = () => {
  return (
    <>
      <nav className="absolute top-4 right-14 p-4">
        <ul className="flex flex-row gap-6 ml-auto">
          <li className="text-white p-2 rounded-lg  bg-pink-300 shadow-xl  ">Sobre mi</li>
          <li className="text-white p-2 rounded-lg  bg-pink-300 shadow-xl " >Skill</li>
          <li className="text-white p-2 rounded-lg  bg-pink-300 shadow-xl " >Proyectos</li>
          <li className="text-white p-2 rounded-lg  bg-pink-300 shadow-xl ">Descarga mi CV</li>
          <li className="text-white p-2 rounded-lg  bg-pink-300 shadow-xl ">Github</li>
          <li className="text-white p-2 rounded-lg  bg-pink-300 shadow-xl ">Linkdin</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar