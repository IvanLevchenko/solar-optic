import { useContext } from "react";
import parse from "html-react-parser";

import { LanguageContext } from "../../context/language-context";
import homeLocalization from "../../localization/home.json";
import bulbImage from "../../assets/bulb.png";
import sunImage from "../../assets/sunIcon.png";
import Button from "../button";
import { SwiperContext } from "../../context/swiper-context";

function ProsSlide(): JSX.Element {
  const { language } = useContext(LanguageContext);
  const { slideNext } = useContext(SwiperContext);

  const localization = homeLocalization.prosSlide;

  return (
    <div className="flex h-screen px-36 justify-evenly">
      <div className="flex flex-col gap-10 w-[70%] max-w-[766px] pt-16">
        <div className="text-2xl 2xl:text-3xl">
          {parse(localization.title[language])}
        </div>
        <div className="text-xl 2xl:text-2xl">
          {parse(localization.subtitle[language])}
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img src={sunImage} alt="Sun icon" />
            <div className="text-xl 2xl:text-2xl">
              {localization.points.first[language]}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={sunImage} alt="Sun icon" />
            <div className="text-xl 2xl:text-2xl">
              {localization.points.second[language]}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={sunImage} alt="Sun icon" />
            <div className="text-xl 2xl:text-2xl">
              {localization.points.third[language]}
            </div>
          </div>
        </div>
        <Button
          onClick={slideNext}
          text={localization.continuteButton[language]}
        />
      </div>
      <div className="relative h-[80%] flex items-center">
        <img src={bulbImage} alt="Bulb" className="h-full" />
        <div className="absolute bottom-0 left-[-20%] z-[-1] w-[140%] h-[60%] blur-3xl rounded-full bg-accent-yellow"></div>
      </div>
    </div>
  );
}

export default ProsSlide;
