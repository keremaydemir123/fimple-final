import React, { useContext } from "react";
import LanguageContext from "./Context/LanguageContext";
import ThemeContext from "./Context/ThemeContext";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import InputForm from "./InputForm";
import Navbar from "./Navbar";

function Container() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <div className={`Container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
      <Header theme={theme} lang={lang} />
      <InputForm theme={theme} lang={lang} />
      <Footer theme={theme} lang={lang} />
    </div>
  );
}

export default Container;

//!<Hero theme={theme} lang={lang} />
