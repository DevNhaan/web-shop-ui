import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { Navigation, Autoplay, FreeMode } from 'swiper/modules';
import { GrNext, GrPrevious } from 'react-icons/gr';
import ProductCard from './ProductCard';

function ProductsSlide({ products = [] }) {
    return (
        <>
            {products && (
                <Swiper
                    navigation={{
                        nextEl: '.button-next-slide',
                        prevEl: '.button-prev-slide',
                    }}
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode, Navigation, Autoplay]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        800: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {products?.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
                    <div className="button-next-slide">
                        <GrNext />
                    </div>
                    <div className="button-prev-slide">
                        <GrPrevious />
                    </div>
                </Swiper>
            )}
        </>
    );
}

export default ProductsSlide;
