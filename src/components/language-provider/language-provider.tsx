import { useEffect, useState } from "react";
import { Route, HashRouter, Routes } from "react-router-dom";

import { Language, LanguageContext } from "../../context/language-context";
import App from "../../pages/app/app";
import Blog from "../../pages/blog/blog";

function LanguageProvider(): JSX.Element {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    document.title = "Solar Optic";
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </HashRouter>
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
