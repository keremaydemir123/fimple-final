import { createContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("tr");
  const langObject = { lang, setLang };

  return (
    <LanguageContext.Provider value={langObject}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
