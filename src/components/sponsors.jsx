import React from 'react';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import { swiperImages } from '../../constants';

const sponsors = () => {
  return (
    <div className="my-10 ">
      <div className="md:flex md:overflow-hidden">
        <div className="md:w-[40%] lg:w-[30%]">
          <h1 className="text-[#595959] font-[700] text-[1.6rem] text-center sm:text-[1.5rem] md:text-[1.5rem]  mb-5 ">
            More than 100+<br></br>
            companies partner
          </h1>
        </div>
        <div className="w-full md:flex-1 min-w-0 md:mt-3">
          <Swiper
            modules={[Autoplay]}
            speed={3000}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            freeMode={true}
            freeModeMomentum={false}
          >
            {swiperImages.map((swiper) => (
              <SwiperSlide key={swiper.id}>
                <img
                  src={swiper.img}
                  alt="/"
                  className="w-[5rem] lg:w-[6.5rem] sponsor-img"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default sponsors;
