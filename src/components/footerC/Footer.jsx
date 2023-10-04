import React from "react";
import "./Footer.css";

import fb from "../../assets/facebook-icon.png";
import insta from "../../assets/instagram.png";

import yt from "../../assets/youtube.png";

import twi from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div id="footer">
      <div className="link">
        <img src={fb} alt="fb" className="links" />
        <img src={insta} alt="insta" className="links" />
        <img src={yt} alt="yt" className="links" />

        <img src={twi} alt="twi" className="links" />
      </div>
      Copywrite Content All Right reserverd
    </div>
  );
};

export default Footer;
