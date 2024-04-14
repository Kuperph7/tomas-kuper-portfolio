import UiCards from './UiCards'
import profilePic from '@/public/Logo.png'
import travel from '@/public/travel.png'
import airdrop from '@/public/airdrop.svg'
import translate from '@/interface/translate'

const UiJobs = ({ translate, language }: translate) => {
  return (
    <>
      <div className="my-10">
        <h2 className="text-2xl font-semibold text-center">
          {language === 'en'
            ? translate.jobs.title.en
            : translate.jobs.title.es}
        </h2>
        <div className="flex flex-col gap-3 my-5 sm:grid sm:grid-cols-3 ">
          <UiCards
            title="Travel Explorer"
            desc={
              language === 'en'
                ? translate.jobs.travel.en.description
                : translate.jobs.travel.es.description
            }
            img={travel}
            url="https://travelexplorer.store/"
          />
          <UiCards
            title="Airdrop Hunters"
            desc={
              language === 'en'
                ? translate.jobs.airdrop.en.description
                : translate.jobs.airdrop.es.description
            }
            img={airdrop}
            url="https://airdrophunters.me/"
          />
          <UiCards
            title="Zink"
            desc={
              language === 'en'
                ? translate.jobs.zink.en.description
                : translate.jobs.zink.es.description
            }
            img={profilePic}
          />
        </div>
      </div>
    </>
  )
}

export default UiJobs
