const UiButton = (props: { title: string }) => {
  const { title } = props
  return (
    <>
      <button className="rounded-full text-white text-base py-2 sm:py-3 px-5 sm:px-8 font-semibold button">
        {title}
      </button>
    </>
  )
}

export default UiButton
