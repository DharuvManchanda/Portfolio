import React from 'react'
import image from '../../assets/profile.png'
import { FaLink } from "react-icons/fa";
const Front = () => {
  return (
    <div className="Front">
        <span className='aboutMe' id='about'>• ABOUT ME</span>
      <img className='image' src={image} alt="" />
            <div className="Front-Text">
            {/* <h2>Hey, I'm a Full Stack Web Developer</h2> */}
            <h2>Open for Job Opportunities</h2>
            <p>
            Hello, I'm Dharuv Manchanda. I'm a full-stack developer with 2+ years of production experience across Next.js and Node.js, comfortable owning a product from specification through production release.
            </p>
                <p>
                Work across the stack: PostgreSQL/Prisma data models, contract-first OpenAPI endpoints, and production deployments on Vercel and a self-managed VPS (Nginx, PM2).</p>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className='btn1'>View Resume
                <FaLink/>
                </a>
              </div> 
        </div>
  )
}

export default Front
