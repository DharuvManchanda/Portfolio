import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

export const ColorObjectData={
  color:"#39D1B4",
}
export const colorObject=function creamMode(){
  document.querySelector("body").setAttribute("data-theme", "cream");
  ColorObjectData.color="#ffffff";
  console.log("white.color",ColorObjectData.color);
}
const Hero = () => {
  function greenMode() {
    document.querySelector("body").setAttribute("data-theme", "green");
ColorObjectData.color="#303030";
console.log("Green.color",ColorObjectData.color);

  }
  // function creamMode() {
  //   document.querySelector("body").setAttribute("data-theme", "cream");
  // }
  function blackMode() {
    document.querySelector("body").setAttribute("data-theme", "black");
  }
  function blueMode() {
    document.querySelector("body").setAttribute("data-theme", "blue");
  } 
  const[open,setOpen]=useState(false);
  return (
    <div className="Hero" id="top">
      <h1>Dharuv</h1>
      <div className="text">
        <div className="color">
          <p className="black circle" onClick={blackMode}></p>
          <p className="blue circle" onClick={blueMode}></p>
          <p className="cream circle" onClick={colorObject}></p>
          <p className="green circle" onClick={greenMode}></p>
        </div>
        <div className="backgroundHead">
        <h2>Developer & People Person</h2>
{ open ? <IoIosArrowUp className="fa-solid fa-rotate" onClick={()=>{setOpen(!open)}}/>:<IoIosArrowDown className="fa-solid fa-rotate" onClick={()=>{setOpen(!open)}}/>} 
</div>
        <div className={open?"paraText open":"paraText close"}>
        <p>
         I am a passionate full-stack web developer with a strong enthusiasm for learning and exploring new technologies. I have successfully crafted numerous projects that showcase my expertise in the field.
        </p>
 
      <br />
      <p style={{letterSpacing:0.5,wordSpacing:"2px"}} >
        I am excited to continue my journey, embracing new challenges and refining my abilities as I strive for excellence in the ever-evolving world of web development:

        <span style={{color:"#ed8936",fontWeight:"700"}}> JavaScript, </span>
        <span style={{color:"#f56565",fontWeight:"700"}}> MERN Stack, </span>
and
        <span style={{color:"#db4437",fontWeight:"700"}}> JAVA. </span> 
</p>
<br />
        <p>Want to Connect? Schedule
        <Link to='mailto:dharuvmanchanda@gmail.com' className="linkColor"> Email me </Link>
or
        <Link to='https://calendly.com/dharuvmanchanda001' className="linkColor"> Sign up </Link>
        for Meeting.
         </p>
        </div>
        <div className="icons">
          <Link to="https://github.com/DharuvManchanda">
<BsGithub className="fa-brands"/>
          </Link>
        
          <Link to="https://www.linkedin.com/in/dharuv-manchanda-270326233/">
          <FaLinkedin className="fa-brands"/>
          </Link>
          <Link to="https://twitter.com/manchanda00">
          <FaTwitter className="fa-brands"/>
          </Link>
          <Link to="https://www.instagram.com/dharuv_manchanda003/">
          <FaInstagram className="fa-brands"/>

          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

