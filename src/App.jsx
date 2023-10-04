// eslint-disable-next-line no-unused-vars
import { useContext } from "react";
import NavBar from "./components/navbar/NavBar";
import Intro from "./components/intro/Intro";
import Skill from "./components/skill/Skill";
import ProjectSection from "./components/projectSection/ProjectSection";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import "../style.css";
import { Theme } from "./context/Context";

import fb from "../src/assets/facebook-icon.png";
import insta from "../src/assets/instagram.png";

import yt from "../src/assets/youtube.png";

import twi from "../src/assets/twitter.png";

const App = () => {
  const { light } = useContext(Theme);
  return (
    <div
      style={{
        background: light ? "white" : "rgb(30,30,30)",
        color: light ? "black" : "white",
        fontSize: light ? "20px" : "20px",
      }}
    >
      <NavBar />
      <Intro />
      <Skill />
      <ProjectSection />
      <Experience />

      <Contact />
    </div>
  );
};

export default App;
