import React, { useState } from "react";

const NavBar = () => {
  const [menuShow, setMenuShow] = useState("secondary-nav displayNav");
  const hamControl = () => {
    setMenuShow("secondary-nav");
  };
  return (
    <header>
      <div className="logo">
        <img src="images/logo.svg" alt="logo" />
        <span>Treact</span>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#topBanner">About</a>
          </li>
          <li>
            <a href="#topBlog">Blog</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li className="signUp">
            <button>Sign Up</button>
          </li>
        </ul>
        <img
          src="images/hamburger.svg"
          alt=""
          className="hamBurger"
          onClick={hamControl}
        />
      </nav>
      <div className={menuShow}>
        <ul>
          <li>
            <a href="#topBanner">About</a>
          </li>
          <li>
            <a href="#topBlog">Blog</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li className="signUp">
            <button>Sign Up</button>
          </li>
        </ul>
        <span onClick={() => setMenuShow("secondary-nav displayNav")}>✖</span>
      </div>
    </header>
  );
};

export default NavBar;
