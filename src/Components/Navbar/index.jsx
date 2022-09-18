import React, { useRef } from "react";
import "./navbar.css";
import { BsSun, BsMoon } from "react-icons/bs";
import { ImCalculator } from "react-icons/im";
import Languages from "../Languages";

function Navbar({ theme, setTheme, lang, setLang }) {
  const langRef = useRef("en");

  const handleLang = () => {
    setLang(Languages[langRef.current.value]);
  };

  return (
    <div className={`navbar-wrapper ${theme}`}>
      <ImCalculator className="company-logo" />
      <div className={`company-name ${theme}`}>Credit Payment Calculator</div>
      {theme === "dark" ? (
        <BsMoon
          className={`theme-switcher moon ${theme}`}
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsSun
          className={`theme-switcher sun ${theme}`}
          onClick={() => setTheme("dark")}
        />
      )}
      <select
        id="lang-select"
        className={theme}
        onChange={handleLang}
        defaultValue={"en"}
        ref={langRef}
      >
        <option value="tr" label="TR"></option>
        <option value="en" label="EN"></option>
      </select>
    </div>
  );
}

export default Navbar;
