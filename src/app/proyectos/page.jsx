
import Link from "next/link"
import {  FontKalam, fontRampart } from "../../../styles/fonts"
import GoButton from "../components/GoButton"
import Contacto from "../pages/Contacto"



const Proyectos = () => {
  return (
    <>
    <section className="w-full  bg-green-300 ">
   
    
      <h2  style={fontRampart.style} className="text-center  text-white py-20 text-8xl ">Proyectos...</h2>
      <div className="flex flex-wrap gap-8  justify-center rounded-xl mx-20 h-full  ">
    <div className="max-w-lg bg-yellow-200 rounded-3xl shadow-2xl ">
      <img className="w-[90%] ml-5 py-5" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1698799776/Captura_de_pantalla_2023-10-31_214832_ojooqn.png" alt="" />
      <h5 style={fontRampart.style} className="text-4xl   text-black px-2">
     BrightBooks
      </h5>
      <p style={FontKalam.style} className="font-normal text-black py-3 px-2">
      ¡Descubre una experiencia de compra única! Desarrollé una aplicación web de ecommerce que combina un atractivo catálogo de productos, un carrito de compras eficiente y opciones de pago seguras a través de PayPal. Además, los usuarios pueden crear cuentas, gestionar sus perfiles y explorar nuestros productos favoritos. ¡Conoce más en nuestro sitio
      </p>

<div className="flex justify-end mb-5">
    <Link href={'https://brightbooksp5.netlify.app/'} className="text-violet-600 focus:ring-4 focus:outline-none  font-medium cursor-pointer hover:scale-110 font-mooli w-1/2 h-auto flex items-center justify-center">Ver más &rarr;</Link>
      </div>

      

    </div>
    <div className="max-w-lg bg-yellow-200 rounded-3xl shadow-2xl ">
      <img  className="w-[90%] ml-5 py-5" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1698799776/Captura_de_pantalla_2023-10-31_214541_wpkzqm.png" alt="" />
      <h5  style={fontRampart.style} className=" font-bold tracking-tight text-gray-900 px-2 dark:text-black text-4xl">
        Dolce Vita
      </h5>
      <p style={FontKalam.style} className="font-normal text-black py-3 px-2">
      ¡Bienvenido a Dolce Vita Ristorante!  Descubre una experiencia culinaria única que combina la autenticidad de la cocina italiana con la comodidad de la tecnología. Explora nuestro menú interactivo, realiza reservas en línea y sumérgete en la cultura culinaria italiana a través de nuestro blog. Nuestra galería de imágenes te transportará a la auténtica atmósfera italiana. ¡Explora ahora este delicioso viaje!
      </p>
      <div className="flex justify-end mb-5">
    <Link href={'https://dolcevitaresto.netlify.app/'} className="text-violet-600 focus:ring-4 focus:outline-none  font-medium cursor-pointer hover:scale-110 font-mooli w-1/2 h-auto flex items-center justify-center">Ver más &rarr;</Link>
      </div>
    </div>
    <div className="max-w-lg bg-yellow-200 rounded-3xl shadow-2xl  ">
      <img  className="w-[90%] ml-5 py-5" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1698799734/qwe_b6hmgq.jpg" alt="" />
      <h5 style={fontRampart.style}  className=" font-bold  text-4xl text-black px-2">
        Traveling Book Store
      </h5>
      <p style={FontKalam.style} className="font-normal text-black py-3 px-2">
      Bienvenido a Traveling BookStore!  Descubre nuestra librería itinerante que recorre ciudades llevando la magia de la lectura a tu puerta. Explora nuestro catálogo de libros con un sencillo buscador, conoce a nuestros autores y descubre nuestras recomendaciones. Únete a nuestro club de beneficios para recibir ofertas exclusivas. ¡Embárcate en un viaje literario con nosotros
      </p>
      <div className="flex justify-end mb-5">
    <Link href={'https://ninalizbeth.github.io/Maqueta-proyecto1/'} className="text-violet-600 focus:ring-4 focus:outline-none  font-medium cursor-pointer hover:scale-110 font-mooli w-1/2 h-auto flex items-center justify-center">Ver más &rarr;</Link>
      </div>
    </div>
    <div className="max-w-lg bg-yellow-200 rounded-3xl shadow-2xl">
      <img  className="w-[90%] ml-5 py-5" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1698799733/crud_1_fgldno.jpg" alt="" />
      <h5 style={fontRampart.style}  className=" font-bold text-4xl  text-gray-900 px-2">
        Crud Veterinaria
      </h5>
      <p style={FontKalam.style} className="font-normal text-black py-3 px-2">
      Cuida a tus peludos amigos con nosotros!  Registra a tus mascotas de manera sencilla, ingresando su nombre, tipo y raza. Puedes editar o eliminar la información cuando lo necesites. Nuestro buscador te ayuda a verificar si tu mascota ya está registrada o si existe una con las mismas características. Mantén a tus mascotas saludables y seguras con nuestro servicio de registro de mascotas.
      </p>
      <div className="flex justify-end mb-5">
    <Link href={'https://ninalizbeth.github.io/Proyecto-CRUD/'} className="text-violet-600 focus:ring-4 focus:outline-none  font-medium cursor-pointer hover:scale-110 font-mooli w-1/2 h-auto flex items-center justify-center">Ver más &rarr;</Link>
      </div>
    </div>
    <div className="max-w-lg bg-yellow-200 rounded-3xl shadow-2xl ">
      <img  className="w-[90%] ml-5 py-5" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1698799734/readme1_lkdyuj.jpg" alt="" />
      <h5 style={fontRampart.style}  className="text-2xl font-bold text-4xl tracking-tight text-black px-2 ">
        Dashboard-Covid
      </h5>
      <p style={FontKalam.style} className="font-normal text-black py-3 px-2">
      ¡Mantente informado sobre la pandemia en todo el mundo!  Este proyecto te ofrece un tablero interactivo que te permite consultar datos actualizados sobre casos y muertes relacionados con la pandemia en diferentes países. Utilizamos una API confiable para presentar la información de manera clara y accesible para todo tipo de público. ¡Infórmate y mantente seguro!
      </p>
      <div className="flex justify-end mb-5">
    <Link href={'https://ninalizbeth.github.io/Proyecto_DASHBOARD/'} className="text-violet-600 focus:ring-4 focus:outline-none  font-medium cursor-pointer hover:scale-110 font-mooli w-1/2 h-auto flex items-center justify-center">Ver más &rarr;</Link>
      </div>
    </div>
    <div style={FontKalam.style} className="max-w-lg bg-yellow-200 rounded-3xl shadow-2xl  ">
      <img  className="w-[90%] h-64 ml-5 py-5" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1698802074/Captura_de_pantalla_2023-10-31_222726_rv0atk.png" alt="" />
      <h5 style={fontRampart.style}  className=" font-bold text-4xltracking-tight text-black px-2 text-4xl">
      Paw Patrol video game baby
      </h5>
      <p  className="font-normal text-black py-3 px-2">
      ¡Únete a la Patrulla Canina en una emocionante aventura!  En este juego interactivo, los niños podrán deslizarse por la pantalla mientras intentan atrapar a uno de sus personajes favoritos de Paw Patrol. Multiplica la diversión mientras exploras el emocionante mundo de la Patrulla Canina. ¡Diviértete y atrapa a tu héroe peludo!
      </p>
      <div className="flex justify-end mb-5">
    <Link href={'https://ninalizbeth.github.io/Paw-Patrol-Laurita/'} className="text-violet-600 focus:ring-4 focus:outline-none  font-medium cursor-pointer hover:scale-110 font-mooli w-1/2 h-auto flex items-center justify-center">Ver más &rarr;</Link>
      </div>
    </div>
    </div>
    <div className="flex flex-col items-center justify-center py-10">
  <GoButton className="mt-8" />
</div>
    </section>

    <Contacto />
    </>
    
  )
}

export default Proyectos