import { useContext } from "react";
import parse from "html-react-parser";

import objectImage from "../../assets/object.png";
import localization from "../../localization/home.json";
import { LanguageContext } from "../../context/language-context";
import viewMoreArrow from "../../assets/viewMoreArrow.png";
import Button from "../button";
import { SwiperContext } from "../../context/swiper-context";
import { Link } from "react-router-dom";

function PresentationSlide(): JSX.Element {
  const { language } = useContext(LanguageContext);
  const { slideNext } = useContext(SwiperContext);

  const slideLocalization = localization.presentationSlide;

  return (
    <div className="flex items-center w-full h-full overflow-hidden">
      <div className="h-full w-full relative">
        <div className="absolute w-[70%] h-[70%] rounded-full bg-accent-yellow blur-[150px] top-[55%] translate-y-[-50%] z-0 left-[10%]"></div>
        <img
          src={objectImage}
          alt="Object"
          className="ml-[100px] h-[80%] absolute top-[20%] left-[55%] translate-x-[-100%] z-5"
        ></img>
      </div>
      <div className="relative flex flex-col h-full mt-[270px] w-full z-5">
        <div className="max-w-[590px] mt-[60px]">
          <h1 className="text-[54px] leading-[60px] font-bold tracking-wide">
            {parse(slideLocalization.title[language])}
          </h1>
          <h4 className="text-[24px] leading-[28px] mt-6 relative tracking-wide">
            {slideLocalization.subtitle[language]}
          </h4>
        </div>
        <div className="flex items-center gap-[20px] mt-6 z-5 relative">
          <Button
            text={localization.presentationSlide.getStartedButton[language]}
            onClick={slideNext}
          />
          <div className="flex w-[160px] items-center text-xl gap-2">
            <Link to="/blog" className="flex items-center text-xl gap-2">
              {localization.presentationSlide.viewMoreButton[language]}
              <img src={viewMoreArrow} alt="More arrow" />
            </Link>
          </div>
        </div>
        <div className="absolute w-[50%] h-[50%] rounded-full bg-accent-yellow blur-[150px] top-[35%] translate-y-[-50%] z-[-1] left-[15%]"></div>
      </div>
    </div>
  );
}

export default PresentationSlide;
