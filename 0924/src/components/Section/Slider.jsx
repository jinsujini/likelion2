import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules'
import 'swiper/css'
import Img1 from '../../assets/img/png/slider01.png'
import Img2 from '../../assets/img/png/slider02.png'
import Img3 from '../../assets/img/png/slider03.png'
import Img4 from '../../assets/img/png/slider04.png'
import 'swiper/scss/pagination';

const Slider = () => {
    return (
        <div className='slider'>
             <Swiper
                        className='swiper-wrap'
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 4000 }}
                        modules={[Autoplay, Pagination]}
                        pagination={true}

                    >
                        <SwiperSlide className='slide'> <img src={Img1} alt="cardnews" /></SwiperSlide>
                        <SwiperSlide  className='slide'> <img src={Img2} alt="cardnews" /></SwiperSlide>
                        <SwiperSlide  className='slide'> <img src={Img3} alt="cardnews" /></SwiperSlide>
                        <SwiperSlide  className='slide'> <img src={Img4} alt="cardnews" /></SwiperSlide>


                    </Swiper>
        </div>
    )
}

export default Slider