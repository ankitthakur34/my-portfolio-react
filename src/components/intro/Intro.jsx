/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Intro.css";
import profile from "../../assets/ankgg.gif";
import { Link } from "react-scroll";
import hireImg from "../../assets/hireme.png";
import { Fade, Zoom } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";

import fb from "../../assets/ll.png";
import insta from "../../assets/github-logo.png";

import yt from "../../assets/leetcode.png";

import twi from "../../assets/twitter1.png";

import { client } from "../../../../ankport-backend/sanity";

const getdata = async () => {
  return await client.fetch(`*[_type == "links"]`);
};

const Intro = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getdata()
      .then((data) => {
        setdata(data);
      })
      .catch((error) => {
        console.log("error fetching data", error);
      });
  }, []);
  return (
    <section id="intro" style={{ color: "white" }}>
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I am <span>Ankit</span>
          <br></br>
          <span className="introName">
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "App Developer",
                  "React Native Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </span>
        <p className="introPara">
          I am a Full Stack Web and Android Developer with experience in
          <br></br>
          creating user friendy websites and applications.
        </p>

        <a href={data[0].link} target="-blank">
          <button className="btn">
            <img src={hireImg} alt="hire me" className="btnImg" />
            Resume
          </button>
        </a>
        <div className="link">
          <a
            href="https://www.linkedin.com/in/ankit-singh-thakur-0333b0200/"
            target="_blank"
          >
            <img src={fb} alt="linkedin" className="links" />
          </a>
          <a href="https://github.com/ankitthakur34" target="_blank">
            <img src={insta} alt="github" className="links" />
          </a>
          <a href="https://leetcode.com/ankit0003/" target="_blank">
            <img src={yt} alt="leetcode" className="links" />
          </a>
          <a href="https://twitter.com/Ankitst03" target="_blank">
            <img src={twi} alt="twi" className="links" />
          </a>
        </div>
      </div>
      <img src={profile} alt="profile" className="profile1" />
    </section>
  );
};

export default Intro;
