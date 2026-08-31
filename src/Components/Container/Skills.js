import React from 'react'
const Skills = ({img,icon:Icon,color,title}) => {
  return (
      <div className="box">
        {Icon ? <Icon style={color ? {color} : undefined} /> : <img src={img} alt={title} />}
        <h4>{title}</h4>
    </div>
  )
}

export default Skills
