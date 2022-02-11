import React from "react";
import { Logo } from "../assets/images";
import "../styles.css";
const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav>
        <p className="active">Home</p>
        <p>Products </p>
        <p>Investment Club</p>
        <p>Blog</p>
        <p>About us</p>
        <p>FAQS</p>
      </nav>
    </header>
  );
};

export default Header;
