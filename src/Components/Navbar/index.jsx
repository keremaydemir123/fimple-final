import React, { useContext } from "react";
import "./navbar.css";
import { BsSun, BsMoon } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";

function Navbar({ theme, setTheme }) {
  return (
    <div className={`navbar-wrapper ${theme}`}>
      <div className="company-name">Credit Payment Calculator</div>
      {theme === "dark" ? (
        <BsMoon
          className="theme-switcher moon"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsSun
          className="theme-switcher sun"
          onClick={() => setTheme("dark")}
        />
      )}

      <MdLanguage />
      <select id="lang-select" className={theme}>
        <option value="tr">TR</option>
        <option value="en" selected>
          EN
        </option>
      </select>
    </div>
  );
}

export default Navbar;
