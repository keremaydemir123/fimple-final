import React from "react";
import "./hero.css";
import svg1 from "../../Assets/svg1.svg";
import svg2 from "../../Assets/svg2.svg";
import svg3 from "../../Assets/svg3.svg";

function Hero({ theme, lang }) {
  return (
    <div className="hero-wrapper">
      <div className={`hero ${theme}`}>
        <img src={svg1} alt="svg1" className="hero-svg" />
        <p>{lang.heroCardL}</p>
      </div>
      <div className={`hero ${theme}`}>
        <img src={svg2} alt="svg2" className="hero-svg" />
        <p>{lang.heroCardM}</p>
      </div>
      <div className={`hero ${theme}`}>
        <img src={svg3} alt="svg3" className="hero-svg" />
        <p>{lang.heroCardR}</p>
      </div>
    </div>
  );
}

export default Hero;
