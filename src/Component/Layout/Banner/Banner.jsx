import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { styled } from 'styled-components';

const Description = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: var(--white-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 1;
    user-select: none;
    & .title {
        font-family: 'Satisfy', cursive;
        font-size: 3rem;
        animation: fadeUp ease-in-out 0.6s;
    }
    & .heading {
        letter-spacing: 2px;
        font-size: 10rem;
        font-weight: 900;
        text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;
        text-transform: uppercase;

        animation: fadeUp ease-in-out 0.7s;
    }
    & .description {
        font-size: 1.4rem;
        color: var(--white-color);
        max-width: 50%;
        animation: fadeUp ease-in-out 0.8s;
    }
    & .button {
        color: var(--white-color);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        font-size: 2rem;
        background-color: transparent;
        border: 2px solid var(--white-color);
        border-radius: 6px;
        margin-top: 30px;
        text-transform: uppercase;
        animation: fadeUp ease-in-out 0.9s;
    }
`;
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
                    <img
                        src="https://res.cloudinary.com/devshopcloud/image/upload/v1694239312/devshop/banner/banner_ecguac.png"
                        alt="banner"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://res.cloudinary.com/devshopcloud/image/upload/v1694239312/devshop/banner/banner_ecguac.png"
                        alt="banner"
                    />
                </SwiperSlide>
                <div className="button-next-slide">
                    <GrNext />
                </div>
                <div className="button-prev-slide">
                    <GrPrevious />
                </div>
                <Description>
                    <span className="title">Spring - Summer 2023</span>
                    <h1 className="heading">best of collection</h1>
                    <span className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat, qui aliquid
                        dolorem itaque ipsum fugiat praesentium nobis libero rerum, soluta inventore totam, laborum
                        maiores. Consectetur eligendi vel totam necessitatibus?
                    </span>
                    <button className="button">Shoping now</button>
                </Description>
            </Swiper>
        </>
    );
}

export default Banner;
