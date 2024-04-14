'use client'

import UiButton from './UiButton'
import Image from 'next/image'
import profilePic from '@/public/Logo.png'
import translate from '@/interface/translate'

const UiHero = ({ translate, language }: translate) => {
  return (
    <>
      <div className="my-10 sm:mt-40 sm:mb-52 relative">
        <div className="">
          {language === 'en'
            ? translate.hero.en.pronoun
            : translate.hero.es.pronoun}
        </div>
        {/* Sección para el título */}
        <div className="absolute right-0 top-0 w-24 h-24 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full element">
          <Image src={profilePic} alt="Profile" />
        </div>
        <h1 className="text-4xl font-semibold text-start sm:text-7xl max-w-5">
          Tomas Kuperman
        </h1>
        <p className="text-start text-base sm:text-2xl ">
          {language === 'en'
            ? translate.hero.en.description
            : translate.hero.es.description}
        </p>
        <div className="mt-4">
          <UiButton
            title={
              language === 'en'
                ? translate.hero.en.button
                : translate.hero.es.button
            }
          />
        </div>
      </div>
    </>
  )
}

export default UiHero
