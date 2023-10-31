import { fontRampart, fontSatisfy } from "../../../styles/fonts"


const Skill = () => {



  return (

    <>

      <section id="sectionId" className="bg-pink-300 h-auto" >
        <h3 style={fontRampart.style} className="text-white text-center text-8xl p-10">My Skills</h3>
        <div className="flex flex-row justify-around">
          <div>
            <h4 style={fontRampart.style} className="text-5xl text-white ml-32">Frontend</h4>
            <ul className="ml-36 mt-6">
              <li style={fontRampart.style} className="bg-yellow-200 text-black text-center rounded-3xl text-3xl mb-4 shadow-xl ">Html</li>

              <li style={fontRampart.style} className="bg-yellow-200  text-black text-center  rounded-3xl text-3xl mb-4 shadow-xl" >Css</li>

              <li style={fontRampart.style} className="bg-yellow-200 text-black text-center  rounded-3xl text-3xl mb-4 shadow-xl">JavaScript</li>
              <li style={fontRampart.style} className="bg-yellow-200  text-black text-center  rounded-3xl text-3xl mb-4 shadow-xl">React</li>
              <li style={fontRampart.style} className="bg-yellow-200  text-black text-center  rounded-3xl text-3xl mb-4  shadow-xl">NextJS</li>
              <li style={fontRampart.style} className="bg-yellow-200 text-black text-center  rounded-3xl text-3xl mb-4 shadow-xl">Boostrap</li>
              <li style={fontRampart.style}className="bg-yellow-200 text-black text-center  rounded-3xl text-3xl mb-4 shadow-xl">Tailwind</li>
            </ul>
          </div>
          <div>
            <h4 style={fontRampart.style} className="text-5xl text-white mr-40">backend</h4>
            <ul className=" mr-36 mt-6">
              <li style={fontRampart.style} className="bg-yellow-200 text-black rounded-3xl text-center text-3xl mb-4 shadow-xl ">NodeJS</li>
              <li style={fontRampart.style} className="bg-yellow-200 text-black rounded-3xl text-center text-3xl mb-4 shadow-xl" >MongoDB</li>
              
            </ul>
          </div>
        </div>
        <img className="ml-[35%] -mt-72  " src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1698462236/Dise%C3%B1o_sin_t%C3%ADtulo_47_z9qngs.png" alt="" />


      </section>


    </>
  )
}
export default Skill
