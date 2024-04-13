import UiButton from './UiButton'
import Image from 'next/image'
import profilePic from '@/public/Logo.png'

const UiHero = () => {
  return (
    <>
      <div className="my-10 sm:mt-40 sm:mb-52 relative">
        <div className="">I´m</div>
        {/* Sección para el título */}
        <div className="absolute right-0 top-0 w-24 h-24 sm:w-64 sm:h-64 rounded-full bg-[#0a3d33]">
          <Image src={profilePic} alt="Profile" />
        </div>
        <h1 className="text-4xl font-semibold text-start sm:text-7xl max-w-5">
          Tomas Kuperman
        </h1>
        <p className="text-start text-base sm:text-2xl">
          web developer passionate about technology
        </p>
        <div className="mt-4">
          <UiButton />
        </div>
      </div>
    </>
  )
}

export default UiHero
