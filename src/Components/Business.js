import React from 'react';
import './Business.scss';

function Business(props) {
    return (
        <div className='c-business'>
          <img src={props.image} alt='Business image'/>
          <p className='c-business__title'>{props.name}</p>
          <div className='c-business__columns'>
            <div className='c-business__first-col'>
              <p>{props.address}</p>
              <p>{props.city}</p>
              <p className='c-business__row'>{props.state} {props.zipCode}</p>
            </div>
            <div className='c-business__second-col'>
              <p className='c-business__category'>{props.category}</p>
              <p className='c-business__rating'>{props.rating} stars</p>
              <p>{props.reviewCount} reviews</p>
            </div>
          </div>
        </div>
    );
}

export default Business;