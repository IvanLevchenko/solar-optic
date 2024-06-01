import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Language, LanguageContext } from "../../context/language-context";
import App from "../../pages/app/app";
import Blog from "../../pages/blog/blog";

function LanguageProvider(): JSX.Element {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
