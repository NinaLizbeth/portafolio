import Image from "next/image"
import { fontRampart, fontSatisfy } from "../../../styles/fonts"
import { motion } from "framer-motion"


const Skill = () => {
  const  variantes ={
    entrada:{
      y: 0,
      opacity:1
    },
    inicial:{
      y: -100,
      opacity:0
    }
  }



  return (

    <>

      <section
      

      id="sectionId" className="bg-pink-300 h-auto" >
       
        <h3 style={fontRampart.style} className="text-white text-center lg:text-8xl text-5xl p-10">My Skills</h3>
        <motion.div
        
        transition={{duration:1}}
        initial="inicial"
        whileInView="entrada"
        variants={variantes}
                >
        <div className="flex flex-col lg:flex-row lg:justify-around justify-center ">
          <div>
            <h4 style={fontRampart.style} className="lg:text-5xl text-4xl text-white lg:mr-40 text-center">Frontend</h4>
            <ul className="lg:p-0 p-14  lg:mr-36 lg:mt-6">
              <li style={fontRampart.style} className="bg-yellow-200 text-black text-center rounded-3xl text-3xl mb-4 shadow-xl ">Html</li>

              <li style={fontRampart.style} className=" bg-yellow-200  text-black text-center  rounded-3xl text-3xl mb-4 shadow-xl" >Css</li>

              <li style={fontRampart.style} className="bg-yellow-200 text-black text-center  rounded-3xl text-3xl mb-4 shadow-xl">JavaScript</li>
              <li style={fontRampart.style} className="bg-yellow-200  text-black text-center  rounded-3xl text-3xl mb-4 shadow-xl">React</li>
              <li style={fontRampart.style} className="bg-yellow-200  text-black text-center  rounded-3xl text-3xl mb-4  shadow-xl">NextJS</li>
              <li style={fontRampart.style} className="bg-yellow-200 text-black text-center  rounded-3xl text-3xl mb-4 shadow-xl">Boostrap</li>
              <li style={fontRampart.style}className="bg-yellow-200 text-black text-center  rounded-3xl text-3xl mb-4 shadow-xl">Tailwind</li>
            </ul>
          </div>
          <div>
            <h4 style={fontRampart.style} className="lg:text-5xl text-4xl text-white lg:mr-40 text-center">Backend</h4>
            <ul className="lg:p-0 p-14 lg:mr-36 lg:mt-6">
              <li style={fontRampart.style} className="bg-yellow-200 text-black rounded-3xl text-center text-3xl mb-4 shadow-xl ">NodeJS</li>
              <li style={fontRampart.style} className="bg-yellow-200 text-black rounded-3xl text-center text-3xl mb-4 shadow-xl ">Express</li>
              <li style={fontRampart.style} className="bg-yellow-200 text-black rounded-3xl text-center text-3xl mb-4 shadow-xl" >MongoDB</li>

              <h4 style={fontRampart.style} className="lg:text-5xl text-4xl text-white lg:mr-30 text-center mt-20">Otros</h4>
            <ul className="lg:p-0 p-14 lg:mr-0 lg:mt-6">
              <li style={fontRampart.style} className="bg-yellow-200 text-black rounded-3xl text-center text-3xl mb-4 shadow-xl ">Git</li>
              <li style={fontRampart.style} className="bg-yellow-200 text-black rounded-3xl text-center text-3xl mb-4 shadow-xl" >GitHub</li>
              <li style={fontRampart.style} className="bg-yellow-200 text-black rounded-3xl text-center text-3xl mb-4 shadow-xl" >Render</li>
              <li style={fontRampart.style} className="bg-yellow-200 text-black rounded-3xl text-center text-3xl mb-4 shadow-xl" >Firebase</li>
              <li style={fontRampart.style} className="bg-yellow-200 text-black rounded-3xl text-center text-3xl mb-4 shadow-xl" >Vercel</li>
         
              </ul>
              


      

              
            </ul>
          </div>
        </div>
        <Image
        width={500}
        height={500}
        
        className=" hidden md:block   ml-[35%] -mt-72  " src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1698462236/Dise%C3%B1o_sin_t%C3%ADtulo_47_z9qngs.png" alt="" />

</motion.div>
      </section>


    </>
  )
}
export default Skill
