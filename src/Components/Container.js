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
  function test(a,b) {
   return a*b;
  }
  console.log('testing',test(a,b));

// A correct function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

// A function with an intentional error: variable 'a' is misspelled as 'aa'
function multiplyNumbers(a, b) {
  // Intentional error: 'aa' is undefined, should be 'a'
  return aa * b;
}

// Testing the functions
console.log("Sum:", addNumbers(2, 3));
console.log("Product:", multiplyNumbers(2, 3));

  return (
    <div className="Container">
      <Front />
      <h3 id="education">Education Journey</h3>
      <VerticalTabs />
      <h3 id="skill">Skills </h3>
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
      <h3 id="contact">Get In Touch</h3>
      <Form />
      <Footer />
    </div>
  );
};

export default Container;
