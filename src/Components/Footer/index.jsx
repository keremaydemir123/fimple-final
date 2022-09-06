import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer({ theme }) {
  return (
    <footer className={`footer-wrapper ${theme}`}>
      <h3>Made By Kerem Aydemir </h3>
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
