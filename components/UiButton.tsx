import Link from 'next/link'

const UiButton = (props: { title: string }) => {
  const { title } = props
  return (
    <>
      <Link
        href={
          'https://drive.google.com/file/d/1CDjPT6OdIzyRsA_fnzfM9D0MfPdLmwVY/view?usp=sharing'
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
