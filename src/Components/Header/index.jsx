import React from "react";
import "./header.css";

function Header({ theme, lang }) {
  console.log("lang:", lang);
  return (
    <header className={`header-wrapper ${theme}`}>
      <div className={`header-svg-line ${theme}`}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <h1>{lang.headerQuote}</h1>
      <h2>-Benjamin Franklin</h2>
      <article>{lang.headerDesc}</article>

      <h3>{lang.headerScroll}</h3>
      <button className={`scroll-btn ${theme}`}>Go</button>
    </header>
  );
}

export default Header;
