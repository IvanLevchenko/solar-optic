import { useContext } from "react";
import LanguageSwitcher from "./language-switcher";
import Logo from "./logo";
import { LanguageContext } from "../../context/language-context";
import homeLocalization from "../../localization/home.json";
import { Link } from "react-router-dom";

type Props = {
  slideToTop: () => void;
  slideToEnd: () => void;
};

function Header(props: Props): JSX.Element {
  const { language } = useContext(LanguageContext);

  return (
    <header className="flex justify-evenly items-center mt-[12px]">
      <Logo />

      <div className="relative">
        <div className="flex gap-48 text-lg font-normal">
          <div
            className="text-xl cursor-pointer hover:text-base-blue"
            onClick={props.slideToTop}
          >
            {homeLocalization.header.product[language]}
          </div>
          <div className="text-xl cursor-pointer">
            <Link to="/blog">{homeLocalization.header.blog[language]}</Link>
          </div>
          <div
            className="text-xl cursor-pointer hover:text-base-blue"
            onClick={props.slideToEnd}
          >
            {homeLocalization.header.aboutUs[language]}
          </div>
        </div>
        <div className="bg-base-blue h-[3px] mt-6 absolute w-[200%] left-[-50%]"></div>
      </div>

      <LanguageSwitcher />
    </header>
  );
}

export default Header;
