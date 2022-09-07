import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer({ theme, lang }) {
  return (
    <footer className={`footer-wrapper ${theme}`}>
      <h2 className="designer">{lang.footerText} </h2>
      <a href="https://github.com/keremaydemir123" target="_blank">
        <FaGithub className="github" />
      </a>
      <a href="https://www.linkedin.com/in/kerem-aydemir/" target="_blank">
        <FaLinkedin className="linkedin" />
      </a>
    </footer>
  );
}

export default Footer;
