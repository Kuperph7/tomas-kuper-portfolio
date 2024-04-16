'use client'

import { useLanguage } from '@/context/LanguageContext'
import LanguageSelector from './LenguajeToggle'
import SelectMode from './SelectMode'

const UiHeader = () => {
  const { language } = useLanguage()

  const translations = {
    en: {
      about: 'About Me',
      jobs: 'My Jobs',
      projects: 'My Projects',
    },
    es: {
      about: 'Acerca de Mí',
      jobs: 'Mis Trabajos',
      projects: 'Mis proyectos',
    },
  }

  return (
    <>
      {/* Sección para el logo */}
      <header className="flex justify-between items-center">
        <div className="text-2xl font-bold text-center sm:text-start">
          KUPER
        </div>
        <nav className="lg:flex hidden">
          <ul className="flex gap-5 items-center font-semibold">
            <li className="relative group">
              <a href="#about" className="block">
                {language === 'en'
                  ? translations.en.about
                  : translations.es.about}
              </a>
              <div className="h-1 w-0 element group-hover:w-full transition-all duration-300 ease-out"></div>
            </li>
            <li className="relative group">
              <a href="#jobs" className="block">
                {language === 'en'
                  ? translations.en.jobs
                  : translations.es.jobs}
              </a>
              <div className="h-1 w-0 element group-hover:w-full transition-all duration-300 ease-out"></div>
            </li>
            {/* <li className="relative group">
              <a href="" className="block text-[#0a3d33]">
                {language === 'en'
                  ? translations.en.projects
                  : translations.es.projects}
              </a>
              <div className="h-1 w-0 element group-hover:w-full transition-all duration-300 ease-out"></div>
            </li> */}
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          <SelectMode />
          <LanguageSelector />
        </div>
      </header>
    </>
  )
}

export default UiHeader
