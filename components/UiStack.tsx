import translate from '@/interface/translate'
import Image from 'next/image'
import nextLogo from '@/public/next-js.svg'
import reactLogo from '@/public/react.svg'
import typeLogo from '@/public/typescript.svg'
import javaScriptLogo from '@/public/javascript.svg'
import nodeLogo from '@/public/node.svg'
import graphQlLogo from '@/public/graphql.svg'

const UiStack = ({ translate, language }: translate) => {
  return (
    <>
      <div className="sm:my-52 mt-20 scroll-mt-32" id="about">
        <h2 className="text-2xl font-semibold text-center">
          {language === 'en'
            ? translate.stack.en.title
            : translate.stack.es.title}
        </h2>
        <div className="mt-20 grid sm:grid-cols-3 grid-cols-2 gap-y-20 justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex flex-col justify-center items-center gap-2 w-32 h-32 rounded-full overflow-hidden contact">
              <Image src={nextLogo} alt="Profile" width={80} height={80} />
            </div>
            <p className="text-base font-semibold">Next.JS</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex flex-col justify-center items-center gap-2 w-32 h-32 rounded-full overflow-hidden contact">
              <Image src={reactLogo} alt="Profile" width={80} height={80} />
            </div>
            <p className="text-base font-semibold">React</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex flex-col justify-center items-center gap-2 w-32 h-32 rounded-full overflow-hidden contact">
              <Image src={typeLogo} alt="Profile" width={80} height={80} />
            </div>
            <p className="text-base font-semibold">TypeScript</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex flex-col justify-center items-center gap-2 w-32 h-32 rounded-full overflow-hidden contact">
              <Image
                src={javaScriptLogo}
                alt="Profile"
                width={80}
                height={80}
              />
            </div>
            <p className="text-base font-semibold">JavaScript</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex flex-col justify-center items-center gap-2 w-32 h-32 rounded-full overflow-hidden contact">
              <Image src={nodeLogo} alt="Profile" width={80} height={80} />
            </div>
            <p className="text-base font-semibold">Node.JS</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex flex-col justify-center items-center gap-2 w-32 h-32 rounded-full overflow-hidden contact">
              <Image src={graphQlLogo} alt="Profile" width={80} height={80} />
            </div>
            <p className="text-base font-semibold">GraphQl</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UiStack
