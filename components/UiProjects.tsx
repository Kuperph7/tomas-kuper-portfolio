import UiCards from './UiCards'

const UiProjects = () => {
  return (
    <>
      <div className="my-10">
        <h2 className="text-2xl font-semibold text-center">My Projects</h2>
        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 my-5">
          <UiCards
            title="Title project"
            desc="Lorem ipsum dolor sit amet consectetur adipiscing elit, porttitor
          gravida eleifend donec justo neque sodales, dictumst facilisis nisl
          placerat blandit hac."
          />
          <UiCards
            title="Title project"
            desc="Lorem ipsum dolor sit amet consectetur adipiscing elit, porttitor
          gravida eleifend donec justo neque sodales, dictumst facilisis nisl
          placerat blandit hac."
          />
          <UiCards
            title="Title project"
            desc="Lorem ipsum dolor sit amet consectetur adipiscing elit, porttitor
          gravida eleifend donec justo neque sodales, dictumst facilisis nisl
          placerat blandit hac."
          />
        </div>
      </div>
    </>
  )
}

export default UiProjects
