"use client"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FeaturedCard } from '../webinar-card';

export const CoursesHighlight = () => {
  return (
    <section className="container my-12 lg:my-20 px-8 md:px-16 lg:px-32">
      <p>Highlight courses</p>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <FeaturedCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCard />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}