import { createContext, Dispatch, SetStateAction } from "react";

export type Language = "ua" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});
