import React from "react";
import { AppleIcon, PlayStore } from "../assets/images";
import "../styles.css";
import heroImage from "../assets/hero-img.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Dollar investments that help you grow</h1>
        <p>
          We put your money in high quality assets that help you build wealth
          and achieve your financial goals.
        </p>

        <div className="buttonGroup">
          <button>
            <AppleIcon />
            <span>
              Download on the
              <br />
              <b> App Store</b>
            </span>
          </button>
          <button>
            <PlayStore />
            <span>
              Download on the
              <br />
              <b> Google Play</b>
            </span>
          </button>
        </div>
      </div>

      <div className="hero-img">
        <img src={heroImage} alt="hero-img" />
      </div>
    </section>
  );
};

export default Hero;
