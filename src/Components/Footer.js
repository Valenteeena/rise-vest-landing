import React from "react";
import { LinkArrow, DarkLogo } from "../assets/images";

const Footer = () => {
  return (
    <footer>
      <div>
        <DarkLogo />
        <ul>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Contact Info</a>
          </li>
          <li>
            <a href="#">Press</a>
          </li>
          <li>
            <a href="#">Rise Impact</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Explore</h3>
        <ul>
          <li>
            <a href="#">
              Investment Club <LinkArrow />
            </a>
          </li>
          <li>
            <a href="#">
              Blog <LinkArrow />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Products</h3>
        <ul>
          <li>
            <a href="#">Rise App</a>
          </li>
          <li>
            <a href="#">Wallets</a>
          </li>
          <li>
            <a href="#">Asset Classes</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Contact Us</h3>
        <ul>
          <li>
            <a href="#">
              0818 714 7405 <LinkArrow />
            </a>
          </li>
          <li>
            <a href="#">
              hello@rise.capital <LinkArrow />
            </a>
          </li>
          <li>
            <a href="#">
              Newsletter <LinkArrow />
            </a>
          </li>
          <li>
            <a href="#">
              Instagram <LinkArrow />
            </a>
          </li>
          <li>
            <a href="#">
              Twitter <LinkArrow />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
