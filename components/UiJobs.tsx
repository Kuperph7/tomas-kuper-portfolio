import UiCards from './UiCards'
import travel from '@/public/travel.png'
import airdrop from '@/public/airdrop.svg'
import translate from '@/interface/translate'
import zink from '@/public/zink.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const UiJobs = ({ translate, language }: translate) => {
  return (
    <>
      <div className="my-10 scroll-mt-32" id="jobs">
        <h2 className="text-2xl font-semibold text-center">
          {language === 'en'
            ? translate.jobs.title.en
            : translate.jobs.title.es}
        </h2>

        {/* Swipe */}

        <div className="sm:hidden my-5">
          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
              <UiCards
                title="Zink"
                desc={
                  language === 'en'
                    ? translate.jobs.zink.en.description
                    : translate.jobs.zink.es.description
                }
                img={zink}
                url="https://zink.tips/"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* No swipe */}

        <div className="hidden sm:grid sm:grid-cols-3 gap-3 my-5">
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
            img={zink}
            url="https://zink.tips/"
          />
        </div>
      </div>
    </>
  )
}

export default UiJobs
