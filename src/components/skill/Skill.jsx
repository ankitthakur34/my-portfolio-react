// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./Skill.css";
import Skillset from "../skillSet/Skillset";

import { client } from "../../sanity";
const getdata = async () => {
  return await client.fetch(`*[_type == "skills"]`);
};
const Skill = () => {
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
    <section id="skill">
      <span className="title">What I Do</span>
      <span className="desc">
        An individual who is in the process of developing their skills and
        knowledge in the field of software development. Strong understanding of
        programming languages and concepts like{" "}
        <span className="descHead">
          {" "}
          Java, JavaScript, React.js, React-Native, Data Structures and
          Algorithms, OOPs and DBMS{" "}
        </span>{" "}
        also have a Working experience of over 1 year in the field of Software
        Development.
      </span>
      <div className="skillBars">
        {data.map((elem, index) => {
          return (
            <div key={index}>
              <Skillset
                imgsrc={elem.image}
                alt="web image"
                title={elem.name}
                bgColor="rgb(50,50,50)"
                para={elem.description}
              />
            </div>
          );
        })}
        {/* <Skillset
          imgsrc={webd}
          alt="web image"
          title="Web Developer"
          bgColor="rgb(50,50,50)"
          para=" jhgfdghjkhg hjgfdxdfcgvhj jkhugyfxcgvhjb jhgfdghjkhg hjgfdxdfcgvhj jkhugyfxcgvhjb jhgfdghjkhg hjgfdxdfcgvhj jkhugyfxcgvhjbvjhgfdghjkhg hjgfdxdfcgvhj jkhugyfxcgvhjbv jhgfdghjkhg hjgfdxdfcgvhj jkhugyfxcgvhjb"
        />
        <Skillset
          imgsrc={uiD}
          alt="ui/ux image"
          title="UI/UX Developer"
          bgColor="rgb(50,50,50)"
          para="jhgfdghjkhg hjgfdxdfcgvhj jkhugyfxcgvhjb"
        />
        <Skillset
          imgsrc={appd}
          alt="app image"
          title="React Native Developer"
          bgColor="rgb(50,50,50)"
          para="jhgfdghjkhg hjgfdxdfcgvhj jkhugyfxcgvhjb"
        /> */}
      </div>
    </section>
  );
};

export default Skill;
