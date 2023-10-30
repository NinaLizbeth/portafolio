import { fontRampart } from "../../../styles/fonts"

 const About = () => {
  return (
    <>
    
<section>

<h2 style={fontRampart.style}  className=" absolute ml-[30%] text-white text-7xl mt-8">Un poquito de mi...</h2>

<article className=" w-full h-full bg-violet-400 flex  flex-col lg:flex-row gap-20 md:p-24 lg:justify-around justify-center items-center py-20">

<div className="w-96 h-96 border-4 rounded-xl shadow-2xl mt-28">
    <div className="flex flex-row p-2 gap-2">
      <div className="rounded-full w-5 h-5 bg-pink-300"></div>
      <div  className="rounded-full w-5 h-5 bg-yellow-200"></div>
      <div  className="rounded-full w-5 h-5 bg-green-300"></div>
    </div>
   
     <hr className="mb-10 border-t-2 border-withe- border-2 w-full mx-auto" /><p className="p-10 text-white text-xl">A los 39 años, mi viaje en la programación se convirtió en una pasión. Amo los desafíos y aprender cada día. mi familia y mi curiosidad me impulsan a soñar en grande y explorar nuevos horizontes. </p></div>
  <div className="w-96 h-96 border-4 rounded-xl shadow-2xl mt-28"><div className="flex flex-row p-2 gap-2">
      <div className="rounded-full w-5 h-5 bg-pink-300"></div>
      <div  className="rounded-full w-5 h-5 bg-yellow-200"></div>
      <div  className="rounded-full w-5 h-5 bg-green-300"></div>
    </div>
    <hr  className="mb-10 border-t-2 border-withe- border-2 w-full mx-auto" /><p className="p-10 text-white text-xl">Comencé como una apasionada estudiante de programación y mi amor por desafíos me llevó a nuevos horizontes. Hoy, construyo mundos digitales a medida.</p></div>
  <div className="w-96 h-96 border-4 rounded-xl shadow-2xl mt-28">
  <div className="flex flex-row p-2 gap-2">
      <div className="rounded-full w-5 h-5 bg-pink-300"></div>
      <div  className="rounded-full w-5 h-5 bg-yellow-200"></div>
      <div  className="rounded-full w-5 h-5 bg-green-300"></div>
    </div>
    <hr  className="mb-10 border-t-2 border-withe- border-2 w-full mx-auto" /><p className="p-10 text-white text-xl ">Además de la programación, soy una apasionada de los libros por lo cual uno de mis grandes sueños es fusionar el código y fantasía para llevar a los lectores a nuevos mundos </p></div>
 
</article>
</section>
    </>
  )
}
export default About
