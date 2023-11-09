import Image from "next/image"
import Link from "next/link"
import { FontKalam, fontRampart } from "../../../styles/fonts"


export const CardProyectos = ( {imagen, titulo, parrafo, link}) => {
  return (
    
    <div className=" lg:max-w-lg bg-violet-200 rounded-3xl shadow-2xl ">
    <Image
    width={500}
    height={500}
    className="w-[90%] h-72 lg:ml-5 ml-4 py-5" src={imagen} alt="" />
    <h5 style={fontRampart.style} className="lg:text-4xl text-5xl  text-black px-2">
  {titulo}
    </h5>
    <p style={FontKalam.style} className="font-normal text-black py-3 px-2">
   {parrafo}
    </p>

<div className="flex justify-end mb-5">
  <Link
href={link} className="text-violet-600 focus:ring-4 focus:outline-none  font-medium cursor-pointer hover:scale-110 font-mooli w-1/2 h-auto flex items-center justify-center">Ver más &rarr;</Link>
    </div>
    </div>
    

  )
}
