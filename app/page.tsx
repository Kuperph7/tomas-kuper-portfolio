'use client'

import UiAboutMe from '@/components/UiAboutMe'
import UiContact from '@/components/UiContact'
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
            'In this work I developed together with my team a robust e-commerce booking system for a tourism agency using Next.JS, StrapiCMS and GraphQl.',
        },
        es: {
          description:
            'En este trabajo desarrollé junto con mi equipo un e-commerce de reservas de excusriones para una agencia de turismo utilizando Next.JS, StrapiCMS y GraphQl',
        },
      },
      airdrop: {
        en: {
          description:
            'In this project I developed the frontend of an innovative blockchain application for secure and efficient transactions using Next.JS, StrapiCMS y GraphQl',
        },
        es: {
          description:
            'En este proyecto desarrollé el frontend del una aplicación de blockchain para transacciones seguras y eficientes utilizando Next.JS, StrapiCMS y GraphQl',
        },
      },
      zink: {
        en: {
          description:
            'In this project I developed together with my team an application to facilitate donations and fund management using Next.JS, StrapiCMS y GraphQl',
        },
        es: {
          description:
            'En este proyecto desarrollé junto con mi equipo una aplicación intuitiva para facilitar donaciones y gestión de fondos utilizando Next.JS, StrapiCMS y GraphQl',
        },
      },
    },
    about: {
      en: {
        title: 'About Me',
        desc1:
          'Hi! 👋 I´m a web developer with more than three years of experience in creating efficient and scalable digital solutions. Specializing primarily in JavaScript and the use of libraries like React and frameworks like Next.JS, my passion for technology and programming has led me to work on challenging and varied projects for clients in the United States, Spain and Thailand.',
        desc2:
          'As a developer, I understand the importance of adaptability and continuous innovation. I am committed to excellence in developing and designing web applications that not only meet expectations, but exceed them, ensuring optimal user experience and great performance.',
        desc3:
          'In addition to my technical skills, I consider myself an eternal learner and a programming geek, always looking for new technologies and methodologies to improve my work and contribute to the technology community.',
      },
      es: {
        title: 'Acerca de Mí',
        desc1:
          '¡Hola! 👋 Soy un desarrollador web con más de tres años de experiencia en la creación de soluciones digitales eficientes y escalables. Especializado principalmente en Javascript y en el uso de bibliotecas como React y frameworks como Next.JS, mi pasión por la tecnología y la programación me ha llevado a trabajar en proyectos desafiantes y variados para clientes en Estados Unidos, España y Tailandia.',
        desc2:
          'Como desarrollador, entiendo la importancia de la adaptabilidad y la innovación continua. Estoy comprometido con la excelencia en el desarrollo y diseño de aplicaciones web que no solo cumplan con las expectativas, sino que las superen, garantizando una experiencia de usuario óptima y un gran rendimiento.',
        desc3:
          'Además de mi habilidad técnica, me considero un eterno aprendiz y un geek de la programación, siempre en busca de nuevas tecnologías y metodologías para mejorar mi trabajo y contribuir a la comunidad tecnológica.',
      },
    },
    contact: {
      en: {
        title: 'You can find me in:',
        cta: 'Contact me and let´s work together!',
      },
      es: {
        title: 'Me podés encontrar en:',
        cta: '¡Contactame y trabajemos juntos!',
      },
    },
  }

  return (
    <main className="">
      <UiHero translate={translations} language={language} />
      <UiJobs translate={translations} language={language} />
      <UiAboutMe translate={translations} language={language} />
      <UiContact translate={translations} language={language} />
    </main>
  )
}
