import Image from 'next/image'
import profilePic from '@/public/Logo.png'

const UiCards = (props: { title: string; desc: string }) => {
  return (
    <>
      <article className="bg-[#f4f3f0]/20 flex flex-col items-center justify-center p-5 rounded-xl shadow-xl backdrop-blur-lg">
        <Image
          src={profilePic}
          alt="Profile"
          width={250}
          height={250}
          className="flex justify-center"
        ></Image>
        <div className="text-center py-2 font-semibold text-lg">
          {props.title}
        </div>
        <p>{props.desc}</p>
      </article>
    </>
  )
}

export default UiCards
