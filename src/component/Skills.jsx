import React from "react";
import { FaHtml5, FaNode } from "react-icons/fa";
import { DiJavascript1, DiReact } from "react-icons/di";
import { SiBulma,SiMongodb } from "react-icons/si";

function Skills() {
  let skills = [
    { icon: <FaHtml5 />, name: "HTML & CSS" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <FaNode />, name: "Node/Express" },
    { icon: <SiMongodb />, name: "Mongo DB" },
    { icon: <DiReact />, name: "React" },
    { icon: <SiBulma />, name: "Bulma" },
  ];
  return (
    <>
      <section id="skills" className="hero is-small my-6">
        <div className="hero-body is-half">
          <h2 className="has-text-info is-size-2 has-text-centered py-3">
            Skills
          </h2>
          <div className="columns is-desktop is-four-fifth">
            {skills.map((skill, index) => (
              <div key={index} className="container flex column">
                <div className="is-primary is-desktop">
                  <div className="is-size-1 is-size-1 has-text-centered py-3 has-text-black-bis">
                    {skill.icon}
                  </div>
                  <h1 className="py-0 has-text-black-bis is-size-5 has-text-centered">
                    {skill.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
