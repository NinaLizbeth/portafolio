'use client'

import { useRouter } from "next/navigation"
import { fontRampart } from "../../../../styles/fonts"



const GoButton = () => {
    const router = useRouter()
    const volver = () => {
        router.back()
    }

  return (
 <>
 <button style={fontRampart.style} onClick={volver} className="bg-pink-300 w-40 h-16 text-white rounded-2xl text-3xl hover:scale-125">
    Volver
 </button>
 </>
  )
}

export default GoButton