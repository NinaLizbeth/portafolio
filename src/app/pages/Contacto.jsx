'use client'

import {  useState } from "react";
import { fontRampart, fontSatisfy } from "../../../styles/fonts";
import Swal from "sweetalert2";
import Image from "next/image";
import { motion } from "framer-motion";




const Contacto = () => {
const initialStateForm = {
      name: "",
      email: "",
      subject: "",
      message: "",
}

const [form, setForm] = useState(initialStateForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.status === 200) {
        // Envío de correo electrónico exitoso
setForm(initialStateForm)

Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Su mensaje va en camino',
  showConfirmButton: false,
  timer: 1500
})
        console.log("Correo electrónico enviado con éxito");
      } else {
        // Maneja errores
        console.error("Error al enviar el correo electrónico");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section   id="contactoId" className="bg-slate-800 w-full h-full relative z-20">
        <h2 style={fontRampart.style} className="text-white pt-10 lg:text-7xl text-5xl text-center">
          Hablemos...
        </h2>

        <div className="flex flex-row ">
          <Image
          width={500}
          height={500}
           className="hidden sm:block w-[32%] h-[40%] mt-24" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1699571408/flecha_1_uak5rg.png" alt="" />

          <div className="w-full lg:w-1/2 mx-auto p-8">
            <form className="lg:py-36" onSubmit={handleSubmit}>
              <div className="mb-3 ronde">
                <label style={fontSatisfy.style} htmlFor="name" className="block text-yellow-200 text-2xl ">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-2xl focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label style={fontSatisfy.style} htmlFor="email" className="block text-yellow-200 text-2xl">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-2xl focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label style={fontSatisfy.style} htmlFor="subject" className="block text-yellow-200 text-2xl">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-2xl  focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label style={fontSatisfy.style} htmlFor="message" className="block text-yellow-200 text-2xl">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-2xl focus:outline-none h-40"
                />
              </div>
            
              <motion.div
              drag
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }}
               className=" flex justify-center items-center mt-4">
                <button style={fontRampart.style} type="submit" className=" w-28 h-14 lg:ml-3 text-2xl bg-pink-300 text-white flex justify-center items-center px-4 py-2 rounded-xl  hover:scale-125">
                  Enviar
                </button>
                </motion.div>
              
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;











