import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper Styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SeasonCollectionData from '../data/SeasonCollectionData';

function SeasonCollection() {
  return (
    <div className="px-10">
      <p className="py-13 text-4xl">Season Collection</p>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView="auto"
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        pagination={{ clickable: true }}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 1,
        //   },
        //   768: {
        //     slidesPerView: 2,
        //   },
        //   1024: {
        //     slidesPerView: 3,
        //   },
        // }}
      >
        {SeasonCollectionData.map((item, index) => (
          <SwiperSlide key={index} className=" max-w-[313px]  max-h-[423px]">
            <div className="relative hover:scale-110 duration-500 ease-in-out">
              <div>
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="absolute right-0 left-0 bottom-0 flex justify-between py-5 px-7.5">
                <div>
                  <div className="text-2xl">
                    <h2>{item.title}</h2>
                  </div>
                  <div className="text-base">{`${item.noOfItems} items`}</div>
                </div>

                <div className="cursor-pointer">
                  <a href="">
                    <i className="fa-solid fa-arrow-right far"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SeasonCollection;
