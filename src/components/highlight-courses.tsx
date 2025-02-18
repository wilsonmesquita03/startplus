"use client"
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FeaturedCard } from './webinar-card';

export const CoursesHighlight = () => {
  return (
    <section className="container my-12 lg:my-20 px-8 md:px-16 lg:px-32">
      <p>Highlight courses</p>
      <div className="relative">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            renderBullet: (index, className) =>
              `<span class="${className} custom-bullet">${index + 1}</span>`,
          }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 16 },
          }}
        >
          <SwiperSlide><FeaturedCard /></SwiperSlide>
          <SwiperSlide><FeaturedCard /></SwiperSlide>
          <SwiperSlide><FeaturedCard /></SwiperSlide>
        </Swiper>
        <div className="custom-pagination flex justify-center mt-6"></div>
      </div>
    </section>
  );
};
