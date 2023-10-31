import { fontRampart, fontSatisfy } from "../../../styles/fonts"



const Contacto = () => {
  return (
    <>
      <section id="contactoId" className="bg-slate-800 w-full h-full  ">

        <h2 style={fontRampart.style} className="text-white pt-10 text-7xl text-center">Hablemos...</h2>

        <div className=" flex flex-row">
          <img className="w-[40%] h-auto mt-14" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1698696354/Meories_13_wnpyy5.png" alt="" />

          <div className="w-1/2 mx-auto p-8">

            <form className="py-36" >

              <div className="mb-3">
                <label style={fontSatisfy.style} htmlFor="name" className="block text-yellow-200 text-2xl ">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"

                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label style={fontSatisfy.style} htmlFor="email" className="block text-yellow-200 text-2xl">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"

                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label style={fontSatisfy.style} htmlFor="subject" className="block text-yellow-200 text-2xl">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"

                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label style={fontSatisfy.style} htmlFor="message" className="block text-yellow-200 text-2xl">Mensaje</label>
                <textarea
                  id="message"
                  name="message"

                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300 h-40"
                  required
                />
              </div>
              <div className="mt-4">
                <button type="submit" className="bg-violet-300 text-white px-4 py-2 rounded-e-3xl hover:bg-yellow-300">
                  Enviar
                </button>
              </div>
            </form>
          </div>

        </div>



      </section>

    </>
  )
}

export default Contacto