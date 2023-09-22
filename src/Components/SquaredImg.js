import React from 'react';
import "./SquaredImg.scss";

function SquaredImg(props){

  const inLineStyles= {
    backgroundImage: `url(${props.src})`,
    width: props.size,
    height: props.size
  }
  return(
    <div className='c-squared-img' style={inLineStyles}></div>
  )
}

export default SquaredImg;