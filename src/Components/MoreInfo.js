import React from "react";
import community from "../assets/community.svg";
import { AppleIcon, PlayStore } from "../assets/images";
import phone from "../assets/Phone.svg";
const MoreInfo = () => {
  return (
    <>
      <section className="community">
        <div className="comm-text">
          <h1>Join The Rise Community</h1>
          <p>
            If you want to go far, go together. Our Telegram community surrounds
            you with others who can help you along your financial journey with
            tips, support, advice and learning. It's completely free and open to
            new and seasoned investors.
          </p>
          <button>Join our Community</button>
        </div>
        <img src={community} alt="community" />
      </section>
      <section className="download">
        <div className="download-text">
          <h4>Download the Rise App</h4>
          <h1>Join our 100,000 users investing and setting long term goals!</h1>
          <p>Dollar investments that help you grow.</p>

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
        <img src={phone} alt="phone" />
      </section>
    </>
  );
};

export default MoreInfo;
