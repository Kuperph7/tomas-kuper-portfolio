'use client'

import { createContext, useContext, useState } from 'react'

const defaultValue = {
  language: 'en',
  toggleLanguage: (lang: string) => {}, // Asegúrate de que esto coincide en el defaultValue también.
}

const LanguageContext = createContext(defaultValue)

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = (props: { children: React.ReactNode }) => {
  const { children } = props
  const [language, setLanguage] = useState('en')

  const toggleLanguage = (lang: string) => {
    setLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
