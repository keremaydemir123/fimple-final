import React from "react";
import "./header.css";

function Header({ theme }) {
  return (
    <header className={`header-wrapper ${theme}`}>
      <h1>"An investment in knowledge pays the best interest."</h1>
      <h2>-Benjamin Franklin</h2>
      <article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, amet
        architecto. Rerum, odit eos expedita possimus alias doloribus
        blanditiis! Voluptatum iste veniam sapiente repellendus voluptas quidem
        quo aspernatur error saepe.
      </article>

      <h3>Calculate Now!</h3>
      <button>Go</button>
    </header>
  );
}

export default Header;
