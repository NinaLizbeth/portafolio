import { fontRampart } from "../../../styles/fonts"
import Contacto from "../pages/Contacto"


const Proyectos = () => {
  return (
    <>
    <section className="w-full  bg-green-300 pb-36 ">
    <h2  style={fontRampart.style} className="text-center  text-white text-8xl p-36">Proyectos...</h2>
      <div className="flex flex-wrap gap-8 px-10 justify-center">
      
    <div className="max-w-lg bg-yellow-200 rounded-3xl shadow-2xl ">
      <img className="w-[90%] ml-5 py-5" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1698799776/Captura_de_pantalla_2023-10-31_214832_ojooqn.png" alt="" />
      <h5 style={fontRampart.style} className="text-4xl font-bold tracking-tight text-black px-2">
     BrightBooks
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 py-3 px-2">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <div className="max-w-lg bg-yellow-200 rounded-3xl shadow-2xl ">
      <img  className="w-[90%] ml-5 py-5" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1698799776/Captura_de_pantalla_2023-10-31_214541_wpkzqm.png" alt="" />
      <h5  style={fontRampart.style} className=" font-bold tracking-tight text-gray-900 px-2 dark:text-black text-4xl">
        Dolce Vita
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 py-3 px-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <div className="max-w-lg bg-yellow-200 rounded-3xl shadow-2xl  ">
      <img  className="w-[90%] ml-5 py-5" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1698799734/qwe_b6hmgq.jpg" alt="" />
      <h5 style={fontRampart.style}  className=" font-bold tracking-tight text-gray-900 text-4xl dark:text-black px-2">
        Traveling Book Store
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 py-3 px-2">
     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <div className="max-w-lg bg-yellow-200 rounded-3xl shadow-2xl">
      <img  className="w-[90%] ml-5 py-5" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1698799733/crud_1_fgldno.jpg" alt="" />
      <h5 style={fontRampart.style}  className=" font-bold text-4xl  text-gray-900 px-2">
        Crud Veterinaria
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 py-3 px-2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <div className="max-w-lg bg-yellow-200 rounded-3xl shadow-2xl ">
      <img  className="w-[90%] ml-5 py-5" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1698799734/readme1_lkdyuj.jpg" alt="" />
      <h5 style={fontRampart.style}  className="text-2xl font-bold text-4xl tracking-tight text-black px-2 ">
        Dashboard-Covid
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 py-3 px-2">
 Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <div className="max-w-lg bg-yellow-200 rounded-3xl shadow-2xl  ">
      <img  className="w-[90%] h-64 ml-5 py-5" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1698802074/Captura_de_pantalla_2023-10-31_222726_rv0atk.png" alt="" />
      <h5 style={fontRampart.style}  className=" font-bold text-4xltracking-tight text-black px-2 text-4xl">
      Paw Patrol video game baby
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 py-3 px-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    </div>
    </section>

    <Contacto/>
    </>
    
  )
}

export default Proyectos