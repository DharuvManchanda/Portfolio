import React, { useEffect } from 'react'
import image from '../MyImages/whiteOutlineee.png'
import { FaLink } from "react-icons/fa";
import { Link } from 'react-router-dom'
const Front = () => {
  return (
    <div className="Front">
        <span className='aboutMe' id='about'>• ABOUT ME</span>
      <img className='image' src={image} alt="" />
            <div className="Front-Text">
            {/* <h2>Hey, I'm a Full Stack Web Developer</h2> */}
            <h2>Open for Job Opportunities</h2>
            <p>
            Hello, I'm Dharuv Manchanda. I'm a full-stack developer with strong enthusiasm of learning & growing. I enjoy building sites & designs.
            </p>
                <p>
                Expertise in JavaScript stack, including React.js for front-end development and Express.js for back-end, enabling seamless communication between client and server.                </p>
                  {/* <p>Ability to create responsive web applications that adapt seamlessly to various devices and screen sizes, enhancing user experience across desktop, tablet, and mobile platforms.                </p> */}
                <Link to="https://drive.google.com/file/d/1M0bumhNO51ceeEyenBALlrEbVBiQrSzs/view?usp=sharing" className='btn1'>Download Resume
                <FaLink/>
                </Link>
              </div> 
        </div>
  )
}

export default Front
