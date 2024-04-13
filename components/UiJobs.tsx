import UiCards from './UiCards'

const UiJobs = () => {
  return (
    <>
      <div className="my-10">
        <h2 className="text-2xl font-semibold text-center">My Jobs</h2>
        <div className="flex flex-col gap-3 my-5">
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

export default UiJobs
