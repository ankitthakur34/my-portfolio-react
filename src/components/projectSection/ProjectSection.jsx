import React, { useState, useEffect } from "react";
import "./ProjectSection.css";

import Project from "../projectCard/Project";
import pro1 from "../../assets/homeFit.jpg";
import pro2 from "../../assets/laundry.jpg";
import pro3 from "../../assets/test.jpg";
import pro4 from "../../assets/snakeL.jpg";
import pro5 from "../../assets/edu.jpg";
import { client } from "../../../../ankport-backend/sanity";

import imageUrlBuilder from "@sanity/image-url";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

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
        Native. With React.js, I've created responsive web interfaces and
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
