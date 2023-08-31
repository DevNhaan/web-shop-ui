import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { GrNext, GrPrevious } from 'react-icons/gr';
function Banner() {
    return (
        <>
            <Swiper
                style={{ position: 'relative' }}
                navigation={{
                    nextEl: '.button-next-slide',
                    prevEl: '.button-prev-slide',
                }}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/banner/banner.png" alt="banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/banner/banner.png" alt="banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/banner/banner.png" alt="banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/banner/banner.png" alt="banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/banner/banner.png" alt="banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/banner/banner.png" alt="banner" />
                </SwiperSlide>

                <div className="button-next-slide">
                    <GrNext />
                </div>
                <div className="button-prev-slide">
                    <GrPrevious />
                </div>
            </Swiper>
        </>
    );
}

export default Banner;
