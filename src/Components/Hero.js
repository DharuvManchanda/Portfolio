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
         I like building things people actually use — and sticking around for the unglamorous parts: the edge cases, the production bugs, and the small details that make software feel solid.
        </p>
 
      <br />
      <p style={{letterSpacing:0.5,wordSpacing:"2px"}} >
        These days, most of what I build is written in
        <span style={{color:"#ed8936",fontWeight:"700"}}> TypeScript, </span>
runs on
        <span style={{color:"#f56565",fontWeight:"700"}}> Next.js & Node.js, </span>
and keeps its data in
        <span style={{color:"#db4437",fontWeight:"700"}}> PostgreSQL. </span>
</p>
<br />
        <p>Want to connect?
        <Link to='mailto:dharuvmanchanda001@gmail.com' className="linkColor"> Email me </Link>
or
        <Link to='https://calendly.com/dharuvmanchanda001' className="linkColor"> book a meeting</Link>.
         </p>
        </div>
        <div className="icons">
          <Link to="https://github.com/DharuvManchanda">
<BsGithub className="fa-brands"/>
          </Link>
        
          <Link to="https://linkedin.com/in/dharuvmanchanda">
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

