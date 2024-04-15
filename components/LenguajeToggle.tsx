'use client'

import { useLanguage } from '@/context/LanguageContext'

const LanguageSelector = () => {
  const { language, toggleLanguage } = useLanguage() // Utiliza el contexto para obtener y modificar el idioma

  const handleSetLanguage = (lang: string) => {
    if (language !== lang) {
      toggleLanguage(lang) // Aquí debes pasar el nuevo idioma como argumento
    }
  }

  return (
    <div className="sm:w-24 w-16 flex rounded-full shadow-xl overflow-hidden">
      <button
        onClick={() => handleSetLanguage('en')}
        className={`flex-1 text-center py-2 text-sm transition-colors duration-300 ease-in-out ${
          language === 'en'
            ? 'element text-white'
            : 'bg-white text-gray-700 hover:bg-gray-200'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleSetLanguage('es')}
        className={`flex-1 text-center py-2 text-sm transition-colors duration-300 ease-in-out ${
          language === 'es'
            ? 'element text-white'
            : 'bg-white text-gray-700 hover:bg-gray-200'
        }`}
      >
        ES
      </button>
    </div>
  )
}

export default LanguageSelector
