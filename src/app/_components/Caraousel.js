import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const Caraousel = () => {
  return (
    <>
    <section className="py-16">
        <div className="container mx-auto flex flex-col gap-16">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-8">
                Explore Popular Platforms
            </h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={2}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                }}
                className="max-w-5xl mx-auto"
            >
                {/* Slide 1 */}
                <SwiperSlide className="text-center">
                <div className="p-4 mb-2 bg-white shadow-md rounded-lg">
                    <Image
                    src="/media/google.png"
                    alt="Google"
                    width={95}
                    height={95}
                    className="mx-auto"
                    />
                    <p className="mt-4 text-lg font-medium text-gray-700">Google</p>
                </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide className="text-center">
                <div className="p-4 mb-2 bg-white shadow-md rounded-lg h-full">
                    <Image
                    src="/media/youtube.png"
                    alt="YouTube"
                    width={125}
                    height={125}
                    className="mx-auto"
                    />
                    <p className="mt-4 text-lg font-medium text-gray-700">YouTube</p>
                </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide className="text-center">
                <div className="p-4 mb-2 bg-white shadow-md rounded-lg h-full">
                    <Image
                    src="/media/reddit.png"
                    alt="Reddit"
                    width={145}
                    height={145}
                    className="mx-auto"
                    />
                    <p className="mt-7 text-lg font-medium text-gray-700">Reddit</p>
                </div>
                </SwiperSlide>

                {/* Slide 4 */}
                <SwiperSlide className="text-center">
                <div className="p-4 mb-2 bg-white shadow-md rounded-lg h-full">
                    <Image
                    src="/media/medium.png"
                    alt="Reddit"
                    width={85}
                    height={85}
                    className="mx-auto"
                    />
                    <p className="mt-7 text-lg font-medium text-gray-700">Medium</p>
                </div>
                </SwiperSlide>
            </Swiper>
        </div>
      </section>
    </>
  )
}

export default Caraousel