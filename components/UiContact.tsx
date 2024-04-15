import Image from 'next/image'
import mail from '@/public/mail-svgrepo-com.svg'
import linkedin from '@/public/linkedin.svg'
import github from '@/public/github-svgrepo-com.svg'
import translate from '@/interface/translate'
import Link from 'next/link'

const UiContact = ({ translate, language }: translate) => {
  return (
    <div className="flex flex-col gap-5 sm:my-52 my-20 text-center">
      <div className="text-xl font-bold">
        {language === 'en'
          ? translate.contact.en.title
          : translate.contact.es.title}
      </div>
      <div className="flex justify-center gap-5">
        <Link
          href={'https://www.linkedin.com/in/tomas-kuperman-19a5611b0/'}
          target="_blank"
          className="w-20 h-20 rounded-full contact cursor-pointer flex justify-center items-center cursor-pointer"
        >
          <Image src={mail} alt="Profile" width={40} height={40} />
        </Link>

        <Link
          href={'https://www.linkedin.com/in/tomas-kuperman-19a5611b0/'}
          target="_blank"
          className="w-20 h-20 rounded-full overflow-hidden contact flex justify-center items-center cursor-pointer"
        >
          <Image src={linkedin} alt="Profile" width={40} height={40} />
        </Link>

        <Link
          href={'https://github.com/Kuperph7'}
          target="_blank"
          className="w-20 h-20 rounded-full contact flex justify-center items-center cursor-pointer"
        >
          <Image src={github} alt="Profile" width={40} height={40} />
        </Link>
      </div>
      <div className="text-lg font-semibold">
        {language === 'en'
          ? translate.contact.en.cta
          : translate.contact.es.cta}
      </div>
    </div>
  )
}

export default UiContact
