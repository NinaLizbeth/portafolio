'use client'
import About from './pages/About'
import Skill from './pages/Skill'
import { fontRampart, fontSatisfy } from '../../styles/fonts'
import Contacto from './pages/Contacto'
import Navbar from './components/navbar/Navbar'
import Image from 'next/image'
import { motion } from 'framer-motion';






export default function Home() {

  
return (
    <>
      <Navbar />

      <div className='flex flex-row w-full min-h-screen'>

        <div className='h-screen bg-green-300 flex justify-center items-center w-full lg:w-3/5  flex-col   p-16 lg:pr-52 '>

        
<article >
          <p style={fontSatisfy.style} className=' text-violet-400 md:animate-bounce md:text-start w-full   mb-3 lg:ml-0   mt-20 md:mt-40 text-3xl md:text-4xl ' >👋 Hola, soy Nina </p>
        
          <motion.p
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 50, damping: 10 }}
          className=' text-center md:text-left  md:text-7xl font-bold mb-7 text-slate-700  '>
  
            Creo experiencias web únicas que fusionan {" "}
            <span
            style={fontRampart.style}
              className='text-pink-300 md:text-7xl text-4xl font-bold '>
              creatividad{ " "}
            </span>

            y {" "}

            <span
              style={fontRampart.style} className='text-white md:text-7xl text-4xl font-bold'>
              tecnología.
            </span>

            ¡Descubre mi mundo <br/> 
            digital!</motion.p>
   
            </article>


        </div>


        <div className='hidden  md:block  bg-yellow-200 w-2/5 h-auto '></div>

      
        <Image
          width={500}
          height={500}
          style={{ zIndex: 1 }}
          className='hidden md:block absolute w-1/4 left-[60%] transform -translate-x-[50%] top-[50%] -translate-y-[50%] ' alt='principal' src='https://res.cloudinary.com/dt7h6qci4/image/upload/v1698107663/Dise%C3%B1o_sin_t%C3%ADtulo_19_iw6hbd.png' />




        <Image
          width={500}
          height={500}
          style={{ zIndex: 1 }}
          className='hidden md:block absolute w-44 left-[75%] transform -translate-x-[50%] top-[57%]  ' alt='westy' src='https://res.cloudinary.com/dt7h6qci4/image/upload/v1698111457/Meories_4_ymhfun.png' />


      </div>

      <About />
      <Skill />

      <Contacto />



    </>
  )
}