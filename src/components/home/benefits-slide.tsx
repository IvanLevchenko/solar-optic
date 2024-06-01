import { useContext } from "react";
import parse from "html-react-parser";

import storehouseImage from "../../assets/storehouse.png";
import { LanguageContext } from "../../context/language-context";
import slideLocalization from "../../localization/home.json";
import sunIcon from "../../assets/sunIcon.png";
import Button from "../button";

import "../../styles/styles.css";
import { SwiperContext } from "../../context/swiper-context";

function BenefitsSlide(): JSX.Element {
  const { language } = useContext(LanguageContext);
  const { slideNext } = useContext(SwiperContext);

  const localization = slideLocalization.benefitsSlide;

  return (
    <div className="flex gap-24 justify-center">
      <div className=" pt-12 w-1/3">
        <img
          src={storehouseImage}
          className="w-full  -white blurred-"
          alt="Storehouse"
        />
      </div>
      <div className="w-1/4 pt-36  relative">
        <div className="absolute w-full h-full rounded-full z-[-1] bg-accent-yellow blur-[160px]"></div>
        <div className="text-4xl mb-12">
          {parse(localization.title[language])}
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex text-3xl items-center gap-3">
            <img src={sunIcon} alt="Sun icon" />
            {localization.points.first[language]}
          </div>
          <div className="flex text-3xl items-center gap-3">
            <img src={sunIcon} alt="Sun icon" />
            {localization.points.second[language]}
          </div>
          <div className="flex text-3xl items-center gap-3">
            <img src={sunIcon} alt="Sun icon" />
            {localization.points.third[language]}
          </div>
        </div>
        <div className="pt-8">
          <Button
            onClick={slideNext}
            text={localization.continueButton[language]}
          />
        </div>
      </div>
    </div>
  );
}

export default BenefitsSlide;
