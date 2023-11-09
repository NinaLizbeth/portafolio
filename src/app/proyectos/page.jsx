


import ProyectNavbar from "../components/navbar/ProyectNavbar"

import { CardProyectos } from "../components/CardProyectos"
import { fontRampart } from "../../../styles/fonts"

import Contacto from "../pages/Contacto"
import GoButton from "../components/svg/GoButton"



const Proyectos = () => {
  return (
    <>
      <ProyectNavbar />
      <section className="w-full  bg-green-300 ">
<h2 style={fontRampart.style} className="text-center  text-white lg:py-40 py-32 lg:text-8xl text-5xl">PROYECTOS...</h2>
<div className=" flex flex-wrap gap-7 justify-center items-center">

<CardProyectos
imagen={"https://res.cloudinary.com/dt7h6qci4/image/upload/v1699568005/Captura_de_pantalla_2023-11-09_191226_rkkxms.png"}
titulo={"BrightBooks"}
parrafo={"¡Descubre una experiencia de compra única! Desarrollé una aplicación web de ecommerce que combina un atractivo catálogo de productos, un carrito de compras eficiente y opciones de pago seguras a través de PayPal. Además, los usuarios pueden crear cuentas, gestionar sus perfiles y explorar nuestros productos favoritos. ¡Conoce más en nuestro sitio"}
link={'https://brightbooksp5.netlify.app/'}
/>
<CardProyectos
imagen={"https://res.cloudinary.com/dt7h6qci4/image/upload/v1698799776/Captura_de_pantalla_2023-10-31_214541_wpkzqm.png"}
titulo={"Dolce Vita"}
parrafo={" ¡Bienvenido a Dolce Vita Ristorante!  Descubre una experiencia culinaria única que combina la autenticidad de la cocina italiana con la comodidad de la tecnología. Explora nuestro menú interactivo, realiza reservas en línea y sumérgete en la cultura culinaria italiana a través de nuestro blog. Nuestra galería de imágenes te transportará a la auténtica atmósfera italiana. ¡Explora ahora este delicioso viaje!"}
link={'https://dolcevitaresto.netlify.app/'}
/>
<CardProyectos
imagen={"https://res.cloudinary.com/dt7h6qci4/image/upload/v1698799734/qwe_b6hmgq.jpg"}
titulo={"Traveling Book Store"}
parrafo={"Bienvenido a Traveling BookStore!  Descubre nuestra librería itinerante que recorre ciudades llevando la magia de la lectura a tu puerta. Explora nuestro catálogo de libros con un sencillo buscador, conoce a nuestros autores y descubre nuestras recomendaciones. Únete a nuestro club de beneficios para recibir ofertas exclusivas. ¡Embárcate en un viaje literario con nosotros "}
link={'https://ninalizbeth.github.io/Maqueta-proyecto1/'}
/>
<CardProyectos
imagen={"https://res.cloudinary.com/dt7h6qci4/image/upload/v1699569115/Captura_de_pantalla_2023-11-09_193140_ruoxf1.png"}
titulo={"Crud Veterinaria"}
parrafo={" Cuida a tus peludos amigos con nosotros!  Registra a tus mascotas de manera sencilla, ingresando su nombre, tipo y raza. Puedes editar o eliminar la información cuando lo necesites. Nuestro buscador te ayuda a verificar si tu mascota ya está registrada o si existe una con las mismas características. Mantén a tus mascotas saludables y seguras con nuestro servicio de registro de mascotas. "}
link={'https://ninalizbeth.github.io/Proyecto-CRUD/'}
/>
<CardProyectos
imagen={"https://res.cloudinary.com/dt7h6qci4/image/upload/v1698799734/readme1_lkdyuj.jpg"}
titulo={"Dashboard-Covid"}
parrafo={"¡Mantente informado sobre la pandemia en todo el mundo!  Este proyecto te ofrece un tablero interactivo que te permite consultar datos actualizados sobre casos y muertes relacionados con la pandemia en diferentes países. Utilizamos una API confiable para presentar la información de manera clara y accesible para todo tipo de público. ¡Infórmate y mantente seguro! "}
link={'https://ninalizbeth.github.io/Proyecto_DASHBOARD/'}
/>
<CardProyectos
imagen={"https://res.cloudinary.com/dt7h6qci4/image/upload/v1698802074/Captura_de_pantalla_2023-10-31_222726_rv0atk.png"}
titulo={"Paw Patrol video game baby"}
parrafo={" ¡Únete a la Patrulla Canina en una emocionante aventura!  En este juego interactivo, los niños podrán deslizarse por la pantalla mientras intentan atrapar a uno de sus personajes favoritos de Paw Patrol. Multiplica la diversión mientras exploras el emocionante mundo de la Patrulla Canina. ¡Diviértete y atrapa a tu héroe peludo! "}
link={'https://ninalizbeth.github.io/Paw-Patrol-Laurita/'}
/>
</div>
<GoButton/>

</section>
<Contacto/>

      </>



      )
}

      export default Proyectos