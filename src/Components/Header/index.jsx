import React from "react";
import "./header.css";
import { Link } from "react-scroll";
import { AiOutlineArrowDown } from "react-icons/ai";

function Header({ theme, lang }) {
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
      <button className={`scroll-btn ${theme}`} tabIndex={-1}>
        <Link
          activeClass="active"
          to="inputForm"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <AiOutlineArrowDown className="active" />
        </Link>
      </button>
    </header>
  );
}

export default Header;
