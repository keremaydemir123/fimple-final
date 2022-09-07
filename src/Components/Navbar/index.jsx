import React, { useContext } from "react";
import "./navbar.css";
import { BsSun, BsMoon } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";
import Languages from "../Languages";
import companyLogo from "../../Assets/company-logo.png";

function Navbar({ theme, setTheme, lang, setLang }) {
  const handleLang = () => {
    setLang(lang.lang === "tr" ? Languages["en"] : Languages["tr"]);
  };

  return (
    <div className={`navbar-wrapper ${theme}`}>
      <img src={companyLogo} alt="logo" className="company-logo" />
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

      <MdLanguage className={`lang-switcher moon ${theme}`} />
      <select
        id="lang-select"
        className={theme}
        onChange={handleLang}
        defaultValue={"en"}
      >
        <option value="tr" label="TR"></option>
        <option value="en" label="EN"></option>
      </select>
    </div>
  );
}

export default Navbar;
