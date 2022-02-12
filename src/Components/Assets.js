import React from "react";
import asset1 from "../assets/asset1.svg";
import asset2 from "../assets/asset2.svg";
import asset3 from "../assets/asset3.svg";
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

        <div>
          <div className="top pur">
            <div className="circle">
              <img src={asset3} alt="asset 3" />
            </div>
          </div>
          <div className="content">
            <h3>Real Estate</h3>
            <p>
              Our Real Estate plan is the sweet middle. Best for those who want
              a balance of good returns and medium risk. This plan invests in
              rented buildings in the US.
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

        <div>
          <div className="top blu">
            <div className="circle">
              <img src={asset2} alt="asset 2" />
            </div>
          </div>
          <div className="content">
            <h3>Fixed Income</h3>
            <p>
              A low-risk asset perfect for anyone who wants to protect their
              money in a secure, appreciating currency, i.e. the dollar. For
              people who want to protect their hard-earned money from inflation
              while earning steady returns.
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
