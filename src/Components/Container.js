import React, { useState } from "react";
import VerticalTabs from "./Container/VerticalTabs";
import Form from "./Container/Form";
import Front from "./Container/Front";
import Skills from "./Container/Skills";
import { Data } from "./Data";
import Projects from "./Container/Projects";
import { CardData } from "./Data";
import Footer from "./Container/Footer";
const Container = () => {
  return (
    <div className="Container">
 <Front />
      <h3 id="education">Education Journey</h3>
      <VerticalTabs />
      <h3 id="skills">Skills </h3>
      <div className="Wrap">
        {Data.map((skill) => {
          return <Skills key={skill.id} {...skill} />;
        })}
      </div>
      <h3 id="project">Recent Projects</h3>
      <div className="Wrap">
        {CardData.map((skill) => {
          return <Projects key={skill.id} {...skill} />;
        })}
      </div>
      <h3>Get In Touch</h3>
      <Form />
    </div>
  );
};

export default Container;
