import React, { useContext } from "react";
import { Fade, Slide } from "react-awesome-reveal";

import "./ExCompo.css";
import { ThemeContext } from "@emotion/react";
import { Theme } from "../../context/Context";

const ExperienceCompo = (props) => {
  const { light } = useContext(Theme);
  console.log(props);
  return (
    <Slide cascade={true}>
      <div
        className="skillBar2"
        style={{ background: light ? "#E0E0E0" : props.bgColor }}
      >
        <img src={props.imgsrc} alt={props.alt} className="skillBarImg2" />
        <div className="skillBarText2">
          <h2>{props.title}</h2>
          <p>{props.para}</p>
        </div>
      </div>
    </Slide>
  );
};

export default ExperienceCompo;
