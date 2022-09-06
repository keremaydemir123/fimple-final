import React, { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import InputForm from "./InputForm";
import Navbar from "./Navbar";

function Container() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`Container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Header theme={theme} />
      <Hero theme={theme} />
      <InputForm theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default Container;
