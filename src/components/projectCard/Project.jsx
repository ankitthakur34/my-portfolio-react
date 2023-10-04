import React, { useContext } from "react";
import "./Projects.css";
import pro1 from "../../assets/portfolio-1.png";
import { Bounce } from "react-awesome-reveal";
import { Theme } from "../../context/Context";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";

const Project = (props) => {
  const { light } = useContext(Theme);
  return (
    <Bounce>
      <div
        className="project"
        style={{ background: light ? "#E0E0E0" : "#9933FF" }}
      >
        <img src={props.imgsrc} alt="pro1" className="proImg" />
        <div className="proContent">
          <span className="proTitle">{props.title} </span>
          <div>
            <a className="proLink" href={props.link1}>
              <AiOutlineLink />
            </a>
            <a className="proLink" href={props.link2}>
              <AiOutlineGithub />
            </a>
          </div>
        </div>
      </div>
    </Bounce>
  );
};

export default Project;
