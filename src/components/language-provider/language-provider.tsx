import { useState } from "react";
import { Language, LanguageContext } from "../../context/language-context";
import App from "../../pages/app/app";

function LanguageProvider(): JSX.Element {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <App />
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
