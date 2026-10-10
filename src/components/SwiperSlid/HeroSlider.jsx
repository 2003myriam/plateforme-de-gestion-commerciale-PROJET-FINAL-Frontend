import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import addProduct from "../../assets/add-product.png";
import register from "../../assets/register.png";
import task from "../../assets/task.png";
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
        
        <img src={addProduct}  alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={register} alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={task} alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src= {register} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroSlider;