'use client'
import About from './pages/About'
import Skill from './pages/Skill'
import { fontRampart, fontSatisfy } from '../../styles/fonts'
import Contacto from './pages/Contacto'
import Navbar from './components/Navbar'
import Image from 'next/image'
import { motion } from 'framer-motion'



export default function Home() {



  return (
    <>
      <Navbar/>
    <div className='flex flex-row w-full min-h-screen'>
      <div className='h-screen bg-green-300 flex justify-center items-center w-full lg:w-3/5  flex-col p-10 md:pr-52 '>
  
        <p style={fontSatisfy.style}  className=' text-violet-400 font-bold text-4xl lg:text-5xl lg:text-start w-full   mb-3 lg:ml-0 ml-0  mt-20'>👋 Hola, soy Nina </p>
        <p className=' text-center lg:text-left  text-4xl   lg:text-7xl font-bold mb-7 '>Creo experiencias web únicas que fusionan <motion.span  
        style={fontRampart.style} className='text-pink-300 lg:text-7xl text-5xl font-bold hover:scale-150'
        
        >creatividad</motion.span> y <span style={fontRampart.style}className='text-white lg:text-7xl text-5xl font-bold'>
          tecnología.</span> ¡Descubre mi mundo digital!</p>
      </div>
      <div className='hidden sm:block bg-yellow-200 w-2/5 h-auto '></div>
      <Image
      width={500}
      height={500}
       className='hidden sm:block absolute w-1/4 left-[60%] -translate-x-[50%] top-[50%] -translate-y-[50%] ' alt='principal' src='https://res.cloudinary.com/dt7h6qci4/image/upload/v1698107663/Dise%C3%B1o_sin_t%C3%ADtulo_19_iw6hbd.png'/>
      <Image
      width={500}
      height={500}
       className='hidden sm:block absolute w-44 left-[75%] -translate-x-[50%] top-[57%]  ' alt='westy' src='https://res.cloudinary.com/dt7h6qci4/image/upload/v1698111457/Meories_4_ymhfun.png'/>
       
    
    </div>

    <About/>
    <Skill  />

    <Contacto  />
 
 
    
    </>
  )
}
