import React from "react";
import { RightIcon } from "../assets/images";
import plan1 from "../assets/plan1.svg";
import plan2 from "../assets/plan2.svg";
import plan3 from "../assets/plan3.svg";
import plan4 from "../assets/plan4.svg";

const InvestmentInfo = () => {
  return (
    <section className="plans">
      <div className="plan">
        <div>
          <h2>Invest your money in dollars</h2>
          <p>
            By holding your investments in a stable currency, your money grows
            more over time and retains its value better.
          </p>
          <a href="#">
            Start Investing now <RightIcon />{" "}
          </a>
        </div>
        <img src={plan1} alt="plan 1" />
      </div>

      <div className="plan">
        <img src={plan2} alt="plan 2" />

        <div>
          <h2>Choose what's best for you</h2>
          <p>
            Unlike other platforms, Rise lets you pick between stocks, US real
            estate and fixed income, according to your risk appetite. That way
            you can spread your risk and tap into different investments all in
            one place.
          </p>
          <a href="#">
            Start Investing now <RightIcon />{" "}
          </a>
        </div>
      </div>

      <div className="plan">
        <div>
          <h2>Set goals and reach them</h2>
          <p>
            You can invest towards a goal on Rise--retirement, higher education,
            save for your home or travel budgets. Or create a goal of your own
            and invest periodically to achieve them.
          </p>
          <a href="#">
            Start Investing now <RightIcon />{" "}
          </a>
        </div>
        <img src={plan3} alt="plan 3" />
      </div>

      <div className="plan">
        <img src={plan4} alt="plan 4" />

        <div>
          <h2>We remember so you dont have to</h2>
          <p>
            Our Auto-invest feature makes it easy to stay consistent, even when
            you forget. Set a funding amount, frequency and payment method and
            Rise will automatically fund your investment, on schedule.
          </p>
          <a href="#">
            Start Investing now <RightIcon />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvestmentInfo;
