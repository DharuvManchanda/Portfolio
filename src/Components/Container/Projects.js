import React from 'react'
import { FaLink } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

const Projects = ({pName,pLink,img,heading}) => {
  return (
    <> 
       <div className='card'>
      <img className='images' src={img} alt="" />
      <div className="cardHover">
        <h5>{heading}</h5>
        <div className="cardName">
            <h1>{pName}</h1>
<div className="cardFlex">
{/* <div className="color cardBtn">
<IoMdHeartEmpty onClick={()=>{dispatch(increment())}}/>
<h4>{count} Likes</h4>
</div> */}
<div className="color cardBtn">
<Link to={pLink}>Live Link
<FaLink className='cardIcon'/>
</Link>
</div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Projects
