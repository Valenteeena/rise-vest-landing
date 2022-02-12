import React from "react";
import goalsPic from "../assets/goalsPic.svg";

const Goals = () => {
  return (
    <>
      <section className="goals">
        <div className="goalsPic">
          <img src={goalsPic} alt="goalsPic" />
        </div>
        <div className="goalsText">
          <h3>The Rise App</h3>
          <h1>
            Save for your <span>future</span>
          </h1>
          <p>
            With Rise, you achieve your financial goals faster. Save for school,
            your home, vacations, your children’s future and more.
          </p>
          <button>Start Saving</button>
        </div>
      </section>
      <section className="regulation">
        <div>
          <h1>How we are Regulated</h1>
          <p>
            Rise is registered and regulated both in the US and in Nigeria. Our
            team is made up of US registered investment advisers, our Nigerian
            users are covered by our SEC licensed trustees, ARM Trustees and all
            our assets are held with regulated third parties, in all relevant
            jurisdictions
          </p>{" "}
        </div>
      </section>
    </>
  );
};

export default Goals;
