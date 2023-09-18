import React from 'react';
import './Business.scss';

function Business(props) {
    return (
        <div className='c-business'>
          <div className='c-business__header'>
            <img className='c-business__header-img'src={props.image} alt='Business image'/>
          </div>
          <div className='c-business__body'>
            <p className='c-business__body-title'>{props.name}</p>
            <div className='c-business__body-columns'>
              <div className='c-business__body-first-col'>
                <p>{props.address}</p>
                <p>{props.city}</p>
                <p className='c-business__body-row'>{props.state} {props.zipCode}</p>
              </div>
              <div className='c-business__body-second-col'>
                <p className='c-business__body-category'>{props.category}</p>
                <p className='c-business__body-rating'>{props.rating} stars</p>
                <p>{props.reviewCount} reviews</p>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Business;