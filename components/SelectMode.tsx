'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import sun from '@/public/sun-svgrepo-com.svg'
import moon from '@/public/moon-svgrepo-com.svg'

const SelectMode = () => {
  const [mode, setMode] = useState(true) // true para light mode, false para dark mode

  const handleSetMode = () => {
    setMode(!mode)
    document.body.classList.toggle('dark', !mode) // Alternar la clase 'dark' en <body>
  }

  useEffect(() => {
    document.body.classList.toggle('dark', !mode)
  }, [mode])

  return (
    <div
      className="sm:w-10 sm:h-10 w-8 h-8 relative group cursor-pointer"
      onClick={handleSetMode}
    >
      <Image
        src={mode ? sun : moon}
        alt={mode ? 'Sun' : 'Moon'}
        width={150}
        height={150}
        className="flex justify-center"
      />
      <div className="h-1 w-0 element group-hover:w-full transition-all duration-300 ease-out"></div>
    </div>
  )
}

export default SelectMode
