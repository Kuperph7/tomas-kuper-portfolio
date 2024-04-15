import Link from 'next/link'

const UiButton = (props: { title: string }) => {
  const { title } = props
  return (
    <>
      <Link
        href={
          'https://drive.google.com/file/d/1inn4BNuCMLM3gsgAqkP7ybbvb7NMAkAn/view?usp=sharing'
        }
        className="rounded-full text-white text-base py-2 sm:py-3 px-5 sm:px-8 font-semibold button"
        target="_blank"
      >
        {title}
      </Link>
    </>
  )
}

export default UiButton
