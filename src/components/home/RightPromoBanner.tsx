"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import AssetsPng from "../../constants/assetsPng";

const slides = [
  {
    id: 1,
    image: AssetsPng.adExample,
  },
  {
    id: 2,
    image: AssetsPng.adExample,
  },
];

export default function RightPromoBanner() {
  return (
    <div className="w-full lg:w-3/4">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        className="custom-swiper"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative aspect-[16/6] w-full text-white bg-black">
              <Image
                src={slide.image}
                alt="Promo Banner"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
