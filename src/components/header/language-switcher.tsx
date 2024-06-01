import { useContext } from "react";
import { Language, LanguageContext } from "../../context/language-context";

function LanguageSwitcher(): JSX.Element {
  const { setLanguage, language } = useContext(LanguageContext);

  const handleChangeLanguage = (language: Language): void => {
    setLanguage(language);
  };

  return (
    <div className="flex gap-16">
      <span
        onClick={() => handleChangeLanguage("ua")}
        className={`text-xl cursor-pointer translition ${
          language === "ua" && "text-blue-800"
        }`}
      >
        UKR
      </span>
      <span
        onClick={() => handleChangeLanguage("en")}
        className={`text-xl cursor-pointer translition ${
          language === "en" && "text-blue-800"
        }`}
      >
        ENG
      </span>
    </div>
  );
}

export default LanguageSwitcher;
