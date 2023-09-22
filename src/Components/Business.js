import React from 'react';
import './Business.scss';
import SquaredImg from './SquaredImg.js';

function Business(props) {
  const {image, name, address, city, state, zipCode, category, rating, reviewsCount} = props.businessObj;
    return (
        <div className='c-business'>
          <div className='c-business__header'>
            <SquaredImg src={image} size="250px"/>
          </div>
          <div className='c-business__body'>
            <p className='c-business__body-title'>{name}</p>
            <div className='c-business__body-columns'>
              <div className='c-business__body-first-col'>
                <p>{address}</p>
                <p>{city}</p>
                <p>{state} {zipCode}</p>
              </div>
              <div className='c-business__body-right-side'>
                <p className='c-business__body-category'>{category}</p>
                <p className='c-business__body-rating'>{rating} stars</p>
                <p>{reviewsCount} reviews</p>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Business;