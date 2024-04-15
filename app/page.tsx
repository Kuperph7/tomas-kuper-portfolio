'use client'

import UiHero from '@/components/UiHero'
import UiJobs from '@/components/UiJobs'
import { useLanguage } from '@/context/LanguageContext'

export default function Home() {
  const { language } = useLanguage()

  const translations = {
    hero: {
      en: {
        pronoun: 'I´m',
        title: '',
        description: 'Web developer passionate about technology',
        button: 'Contact Me',
      },
      es: {
        pronoun: 'Soy',
        title: '',
        description: 'Desarrollador web apasionado por la tecnología',
        button: 'Contactame',
      },
    },
    jobs: {
      title: {
        en: 'My Works',
        es: 'Mis trabajos',
      },
      travel: {
        en: {
          description:
            'In travel i work in bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
        },
        es: {
          description:
            'En travel trabajé como bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
        },
      },
      airdrop: {
        en: {
          description: 'Web developer passionate about technology',
        },
        es: {
          description: 'Web developer passionate about technology',
        },
      },
      zink: {
        en: {
          description: 'Web developer passionate about technology',
        },
        es: {
          description: 'Web developer passionate about technology',
        },
      },
    },
  }

  return (
    <main className="">
      <UiHero translate={translations} language={language} />
      <UiJobs translate={translations} language={language} />
    </main>
  )
}
