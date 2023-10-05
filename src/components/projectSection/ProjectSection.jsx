// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./ProjectSection.css";

import Project from "../projectCard/Project";
import { client } from "../../sanity";

const getdata = async () => {
  return await client.fetch(`*[_type == "project"]`);
};

const ProjectSection = () => {
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
    <section id="projectSection">
      <h2 className="header">Projects</h2>
      <span className="desc">
        {" "}
        I have developed a range of projects using Java, React.js, and React
        Native. With React.js, I ve created responsive web interfaces and
        integrated with backends. React Native allowed me to build
        cross-platform mobile apps. These projects highlight my versatile
        software development skills.
      </span>

      <div className="projects">
        {data.map((elem, index) => {
          return (
            <div key={index}>
              <Project
                title={elem.name}
                imgsrc={elem.image}
                link1={elem.link}
                link2={elem.github}
              />
            </div>
          );
        })}

        {/* <Project title="Laundry App" imgsrc={pro2} link="Github" />
        <Project
          title="Online Assesment Platform"
          imgsrc={pro3}
          link="Github"
        />
        <Project title="Snake n Ladder Game" imgsrc={pro4} link="Github" />
        <Project title="Education App" imgsrc={pro5} link="Github" /> */}
      </div>
    </section>
  );
};

export default ProjectSection;
