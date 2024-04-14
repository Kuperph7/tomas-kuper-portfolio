import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

const UiCards = (props: {
  title: string
  desc: string
  url?: string
  img: StaticImageData | string
}) => {
  return (
    <>
      <Link href={props.url ? props.url : ''} target="_blank">
        <article className="bg-[#f4f3f0]/20 flex flex-col items-center justify-center p-5 rounded-xl shadow-xl backdrop-blur-lg">
          <div className="w-32 h-32">
            <Image
              src={props.img}
              alt="Profile"
              width={150}
              height={150}
              className="flex justify-center"
            />
          </div>
          <div className="text-center py-2 font-semibold text-lg">
            {props.title}
          </div>
          <p>{props.desc}</p>
        </article>
      </Link>
    </>
  )
}

export default UiCards
