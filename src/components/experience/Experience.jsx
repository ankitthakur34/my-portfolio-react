// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./Experience.css";
import Skillset from "../skillSet/Skillset";

import { client } from "../../sanity";
import ExperienceCompo from "./ExperienceCompo";
const getData = () => {
  return client.fetch(`*[_type == "experience"]`);
};
const Experience = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log("data fetching err", error);
      });
  }, []);

  return (
    <section id="exp">
      <span className="title">Work Experience</span>
      <span className="desc">
        Work or internship experience in the IT field is crucial as it provides
        practical application of knowledge gained from academic study. It offers
        the opportunity to work on real-world projects, collaborate with teams,
        and solve complex problems. This hands-on experience not only hones
        technical skills but also helps individuals adapt to industry practices,
        build a professional network, and gain a competitive edge in their IT
        careers.
      </span>
      <div className="skillBars">
        {data.map((elem, index) => {
          return (
            <div key={index}>
              <ExperienceCompo
                imgsrc={elem.image}
                alt="web image"
                title={elem.name}
                bgColor="black"
                para={elem.description}
              />
            </div>
          );
        })}

        {/* <Skillset
          imgsrc={webd}
          alt="web image"
          title="Web Developer"
          bgColor="black"
          para=" jhgfdghjkhg hjgfdxdfcgvhj jkhugyfxcgvhjb jhgfdghjkhg hjgfdxdfcgvhj jkhugyfxcgvhjb jhgfdghjkhg hjgfdxdfcgvhj jkhugyfxcgvhjbvjhgfdghjkhg hjgfdxdfcgvhj jkhugyfxcgvhjbv jhgfdghjkhg hjgfdxdfcgvhj jkhugyfxcgvhjb"
        /> */}
      </div>
    </section>
  );
};

export default Experience;
