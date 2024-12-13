import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow'; // Required for coverflow effect
import 'swiper/css/pagination'; // Optional if you want pagination
import './SwiperComponent.css';
import s1 from '../../assets/images/23-10g.png';
import s2 from '../../assets/images/23-11g.png';
import s3 from '../../assets/images/23-12g.png';
import s4 from '../../assets/images/23-13g.png';
import s5 from '../../assets/images/23-14g.png';
import s6 from '../../assets/images/23-15g.png';
import s7 from '../../assets/images/23-1g.png';
import s8 from '../../assets/images/23-2g.png';
import s9 from '../../assets/images/23-3g.png';
import s10 from '../../assets/images/23-4g.png';
import s11 from '../../assets/images/23-5g.png';
import s12 from '../../assets/images/23-6g.png';
import s13 from '../../assets/images/23-7g.png';
import s14 from '../../assets/images/23-8g.png';
import s15 from '../../assets/images/23-9g.png';

const SwiperComponent = () => {
  return (
    <div>
      <div className="swiper_head">
        <h2 className="text-center mb-5">MENU ITEMS</h2>
      </div>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={s1} alt="Item 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s2} alt="Item 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s3} alt="Item 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s4} alt="Item 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s5} alt="Item 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s6} alt="Item 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s7} alt="Item 7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s8} alt="Item 8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s9} alt="Item 9" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s10} alt="Item 10" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s11} alt="Item 11" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s12} alt="Item 12" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s13} alt="Item 13" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s14} alt="Item 14" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s15} alt="Item 15" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;



