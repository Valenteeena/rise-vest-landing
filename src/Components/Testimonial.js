import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import testi1 from "../assets/testi1.svg";
import testi2 from "../assets/testi2.svg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Testimonial = () => {
  return (
    <section className="testimonial">
      <h1>From The People Who Use Rise</h1>
      <p>
        Our mission at Risevest is to empower more people just like you to
        achieve your personal financial goals.
      </p>
      <Carousel responsive={responsive}>
        <div className="testi">
          <p>
            I don’t want to invest in separate stocks because I’m not a
            financial expert and I would rather trust my money in the hands of
            people like Rise who are skilled and knowledgeable.
          </p>
          <div>
            <img src={testi1} alt="testi1" />
            <p>Lade</p>
          </div>
        </div>

        <div className="testi">
          <p>
            I don’t want to invest in separate stocks because I’m not a
            financial expert and I would rather trust my money in the hands of
            people like Rise who are skilled and knowledgeable.
          </p>
          <div>
            <img src={testi1} alt="testi1" />
            <p>Jesse</p>
          </div>
        </div>

        <div className="testi">
          <p>
            I chose Rise because of its leadership, wealth of knowledge and the
            people who support them. I invest with Rise in order to protect my
            savings and investment from being depleted by devaluation and
            inflation that’s at an all-time high in Nigeria.
          </p>
          <div>
            <img src={testi2} alt="testi2" />
            <p>Raye</p>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonial;
