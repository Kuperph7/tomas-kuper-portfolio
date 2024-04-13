import UiButton from './UiButton'

const UiHeader = () => {
  return (
    <>
      {/* Sección para el logo */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-center sm:text-start">
          KUPER
        </div>
        <ul className="flex gap-5 items-center font-semibold">
          <li>
            <a href="">About Me</a>
          </li>
          <li>
            <a href="">My projects</a>
          </li>
          <li>
            <a href="">My Jobs</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default UiHeader
