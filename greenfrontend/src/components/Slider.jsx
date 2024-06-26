import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper CSS dosyasını projeye dahil edin

const Slider = ({ images }) => {
    return (
        <Swiper
            spaceBetween={5}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                    <a href={image.href}>
                        <div className="overflow-hidden">
                            <img
                                alt="Image"
                                src={image.src}
                                className="is-scalable swiper-slide-img"
                                style={{ objectFit: 'cover', width: '100%', height: '100%', top: 0, left: 0 }}
                            />
                        </div>
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
