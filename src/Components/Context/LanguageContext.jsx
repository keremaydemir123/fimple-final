import { createContext, useState } from "react";
import Languages from "../Languages";
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(Languages["en"]);
  const langObject = { lang, setLang };

  return (
    <LanguageContext.Provider value={langObject}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
