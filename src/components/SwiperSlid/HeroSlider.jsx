import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Swiper.css"

function HeroSlider() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: false,
      }}
      modules={[EffectCoverflow, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        
        <img src="/src/assets/add-product.png" alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/src/assets/register.png" alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/src/assets/add-product.png" alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/src/assets/register.png" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroSlider;