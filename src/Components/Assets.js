import React from "react";
import asset1 from "../assets/asset1.svg";
import { RightIcon } from "../assets/images";

const Assets = () => {
  return (
    <section className="assets">
      <h1>Asset Classes</h1>
      <p>It’s your money, choose where you invest it</p>
      <main>
        <div>
          <div className="top">
            <div className="circle">
              <img src={asset1} alt="asset 1" />
            </div>
          </div>
          <div className="content">
            <h3>Stocks</h3>
            <p>
              We help you invest and manage your money by investing in our
              portfolio of 30 high-growth stocks across the US market with our
              equity portfolio of power stocks.
            </p>
            <p className="noMargin">
              <span>Historical returnd:</span> 14% per annum
            </p>
            <p>
              <span>Risk Level:</span> Medium
            </p>
          </div>
          <a href="#">
            Learn how Stocks work <RightIcon />
          </a>
        </div>
      </main>
    </section>
  );
};

export default Assets;
