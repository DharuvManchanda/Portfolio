import React from 'react'
const Skills = ({img,title}) => {
  return (
      <div className="box">
        <img src={img} alt="" />
        <h4>{title}</h4>
    </div>
  )
}

export default Skills
