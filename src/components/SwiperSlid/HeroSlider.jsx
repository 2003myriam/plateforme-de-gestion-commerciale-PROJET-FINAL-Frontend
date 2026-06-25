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
        
        <img src="/src/assets/add Product.png" alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-abstract-cloudy-background-beautiful-natural-streaks-of-sky-and-clouds-red-image_15684333.jpg" alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20250227/pngtree-a-meadow-of-pink-and-purple-flowers-image_17005010.jpg" alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/dashboard4.png" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroSlider;