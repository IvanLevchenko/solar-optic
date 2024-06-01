import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import Header from "../../components/header/header";

import "swiper/css";
import "swiper/css/pagination";
import PresentationSlide from "../../components/home/presentation-slide";
import ProsSlide from "../../components/home/pros-slide";
import BenefitsSlide from "../../components/home/benefits-slide";
import CalculatorSlide from "../../components/home/calculator-slide";
import TeamSlide from "../../components/home/team-slide";
import { useRef } from "react";
import { SwiperContext } from "../../context/swiper-context";

function App() {
  const ref = useRef(null);

  const slideTo = (slideNum: number): void => {
    // @ts-ignore
    if (ref.current.swiper) {
      // @ts-ignore
      ref.current.swiper.slideTo(slideNum);
    }
  };

  const slideNext = (): void => {
    // @ts-ignore
    if (ref.current.swiper) {
      // @ts-ignore
      ref.current.swiper.slideNext();
    }
  };

  return (
    <div>
      <Header slideToTop={() => slideTo(0)} slideToEnd={() => slideTo(5)} />
      <div className="relative h-screen">
        <SwiperContext.Provider value={{ slideNext }}>
          <Swiper
            ref={ref}
            direction={"vertical"}
            draggable={false}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            speed={1300}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper h-full"
          >
            <SwiperSlide>
              <PresentationSlide />
            </SwiperSlide>
            <SwiperSlide>
              <ProsSlide />
            </SwiperSlide>
            <SwiperSlide>
              <BenefitsSlide />
            </SwiperSlide>
            <SwiperSlide>
              <CalculatorSlide />
            </SwiperSlide>
            <SwiperSlide>
              <TeamSlide />
            </SwiperSlide>
          </Swiper>
        </SwiperContext.Provider>
      </div>
    </div>
  );
}

export default App;
