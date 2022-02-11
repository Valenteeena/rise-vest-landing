import React from "react";
import ARM from "../assets/ARM.png";
import westernUnion from "../assets/westernUnion.png";
import techstars from "../assets/techstars.png";
import sponsor4 from "../assets/sponsor4.png";

const Sponsors = () => {
  return (
    <section className="sponsors">
      <img src={ARM} alt="ARM" />
      <img src={westernUnion} alt="western -union" />
      <img src={techstars} alt="tech-stars" />
      <img src={sponsor4} alt="sponsor4" />
    </section>
  );
};

export default Sponsors;
