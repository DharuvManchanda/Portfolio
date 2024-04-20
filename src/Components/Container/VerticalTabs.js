import React, { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
const VerticalTabs = () => {

  return (
    <div className="VerticalTabs">
      <Tabs className="Tabs" isLazy>
        <TabList className="TabList">
          <Tab _selected={{bg:"#ffffff16" }} className="Tab">
            <h5> Full Stack Web Developer </h5>
          </Tab>
          <Tab _selected={{ bg: "#ffffff16" }} className="Tab">
            <h5> React Js </h5>
          </Tab>
          <Tab _selected={{ bg: "#ffffff16" }} className="Tab">
            <h5> JavaScript </h5>
          </Tab>
          <Tab _selected={{ bg: "#ffffff16" }} className="Tab">
            <h5> Java </h5>
          </Tab>
          <Tab _selected={{ bg: "#ffffff16" }} className="Tab">
            <h5> BGIET, Sangrur </h5>
          </Tab>
        </TabList>
        <TabPanels className="TabPannels">
          <TabPanel className="TabText">
            <div className="TabTitle">
              <h2> @ Full-Stack Web Development</h2> <h5>Oct 2023 - Present</h5>
              <li>
                Dived into full stack web development and gained expertise in
                the MERN stack (MongoDB, Express.js, React.js, Node.js).
              </li>
              <li>
                Well-versed in both frontend and backend development, with a
                strong understanding of the entire development process from
                conception to deployment.{" "}
              </li>
              <li>
                Capable of developing responsive and user-friendly frontend
                interfaces using HTML, CSS, and JavaScript frameworks like
                React.js, ensuring optimal user experience across various
                devices and screen sizes.
              </li>
            </div>
          </TabPanel>
          <TabPanel className="TabText">
            <div className="TabTitle">
              <h2> Proficient in React js</h2> <h5>June 2023 - Present</h5>
              <li>
                Demonstrated expertise in building modern, dynamic user
                interfaces using React.js and Developed responsive and efficient
                web applications with a focus on component-based architecture.
              </li>
              <li>
                Utilized React Context API to manage global state and avoid prop
                drilling in large-scale applications.
              </li>
              <li>
                Integrated context providers to share data and functionality
                across components, promoting a scalable and maintainable
                codebase.
              </li>
            </div>
          </TabPanel>
          <TabPanel className="TabText">
            <div className="TabTitle">
              <h2>JavaScript</h2>
              <h5>Jan 2023 - Present</h5>
              <li>
                Proficient in manipulating the Document Object Model (DOM) to
                dynamically update the content and structure of web pages. This
                skill is essential for creating dynamic and responsive websites.
              </li>
              <li>
                Integrated third-party APIs to fetch and display external data,
                enhancing the functionality of the website. This includes
                working with APIs for social media, maps, and other services.
              </li>
            </div>
          </TabPanel>
          <TabPanel className="TabText">
            <div className="TabTitle">
              <h2> Java Projects @ Java and DSA</h2>{" "}
              <h5>August 2022 - Dec 2022</h5>
              <li>
                Explored Java programming language and completed several
                projects to strengthen my understanding.
              </li>
              <li>
                Learned various Java concepts like object-oriented programming,
                file handling, and data manipulation etc.
              </li>
              <li>
                Strong understanding of core Java concepts such as classes,
                inheritance, polymorphism, encapsulation, and abstraction.
              </li>
            </div>
          </TabPanel>
          <TabPanel className="TabText">
            <div className="TabTitle">
              <h2> B.Tech CSE @ BGIET, Sangrur</h2> <h5>April 2021 - 2025</h5>
              <li>
                Currently pursuing B.tech in Computer Science and Engineering at
                BGIET, Sangrur with a current CGPA of 7.80.
              </li>
              <li>
                Actively participating in various tech fests, workshops, and
                seminars to enhance my knowledge and skills in the field.
              </li>
              <li>
                Studying a wide range of subjects related to computer science,
                including algorithms, data structures, and software development.
              </li>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default VerticalTabs;
