import translate from '@/interface/translate'
import Image from 'next/image'
import profilePic from '@/public/picture.png'

const UiAboutMe = ({ translate, language }: translate) => {
  return (
    <>
      <div className="my-52">
        <h2 className="text-2xl font-semibold text-center">
          {language === 'en'
            ? translate.about.en.title
            : translate.about.es.title}
        </h2>
        <div className="flex gap-3 my-5 justify-between items-center">
          <div className="w-24 h-24 sm:w-52 sm:h-52 lg:w-80 lg:h-80 rounded-full element overflow-hidden">
            <Image src={profilePic} alt="Profile" />
          </div>
          <div className="flex flex-col gap-3 my-5 max-w-xl text-base">
            <p>
              {language === 'en'
                ? translate.about.en.desc1
                : translate.about.es.desc1}
            </p>
            <p>
              {language === 'en'
                ? translate.about.en.desc2
                : translate.about.es.desc2}
            </p>
            <p>
              {language === 'en'
                ? translate.about.en.desc3
                : translate.about.es.desc3}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UiAboutMe
