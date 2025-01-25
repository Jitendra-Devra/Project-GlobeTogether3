import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules'; // Explicitly import Autoplay

const BackgroundSlider = ({ images, duration = 3000 }) => {
    return (
        <div className="h-screen w-full">
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: duration,
                disableOnInteraction: false
             }}
                loop={true}
                slidesPerView={1}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="main-header relative w-full h-[600px] bg-cover bg-center z-0"
                            style={{
                                backgroundImage: `url(${image})`,
                            }}
                        ></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BackgroundSlider;
