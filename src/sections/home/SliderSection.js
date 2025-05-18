'use client'; // Optional, if using with app router
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../../css/home/SliderSection.css"

const SliderSection = () => {
  useEffect(() => {
    // Ensure Swiper is only initialized on the client-side
    if (typeof window !== 'undefined') {
      import('swiper').then(() => {
        // Swiper is already initialized via Swiper React components
      });
    }
  }, []);

  return (
    <section id="slider-section" className="container-fluid">
      <div className="flex flex-wrap">
        <div className="w-full px-0">
          <Swiper
            className="dominion-slider"
            modules={[Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <SwiperSlide key={index}>
                <div
                  className="slider-image-wrapper bg-cover bg-center"
                  style={{
                    '--slider-pc-image': 'url(/asset/images/slider/slider-1.jpg)',
                    '--slider-mob-image': 'url(/asset/images/slider/slider-mob-1.jpg)',
                  }}
                ></div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination mb-5"></div>
            <div className="swiper-button-next custom-nav"></div>
            <div className="swiper-button-prev custom-nav"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;