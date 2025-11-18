import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./HomePage.css";

const images = [
  "/images/montenegro1.png",
  "/images/montenegro2.png",
  "/images/montenegro3.png",
  "/images/montenegro4.png",
  "/images/montenegro5.png",
];

const HomePage = () => {
  return (
    <div className="vertical-slider">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Mousewheel]}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-bg"
              style={{ backgroundImage: `url(${src})` }}
            >
              <div className="slide-content">
                <h1>Meet2Explore MNE</h1>
                <p>Discover Montenegro — mountains & sea</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePage;