import Image from 'next/image'
import About from './pages/About'
import Skill from './pages/Skill'

export default function Home() {
  return (
    <>
    <div className='flex flex-row w-full min-h-screen'>
      <div className='bg-green-300 flex justify-center items-center w-full lg:w-3/5 h-[60%] lg:h-auto flex-col p-10 pr-52'>
        <h3 className='text-violet-400 font-bold text-xl text-start w-full transform -skew-y-6 mb-14 '>👋 Hola soy Nina </h3>
        <p className=' text-center lg:text-left  text-5xl lg:text-7xl font-bold '>Creando experiencias web únicas que fusionan <span className='text-pink-300 hover:text-transition transform '>creatividad</span> y tecnología. ¡Descubre mi mundo digital!</p>
      </div>
      <div className='hidden sm:block bg-yellow-200 w-2/5 h-auto'></div>
      <img className=' hidden sm:block absolute w-1/4 left-[60%] -translate-x-[50%] top-[50%] -translate-y-[50%] ' src='https://res.cloudinary.com/dt7h6qci4/image/upload/v1698107663/Dise%C3%B1o_sin_t%C3%ADtulo_19_iw6hbd.png'/>
      <img className='hidden sm:block absolute w-44 left-[75%] -translate-x-[50%] top-[57%]  ' src='https://res.cloudinary.com/dt7h6qci4/image/upload/v1698111457/Meories_4_ymhfun.png'/>
    
    </div>

    <About/>
    <Skill/>
     
    
    </>
  )
}
