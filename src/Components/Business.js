import React from 'react';
import './Business.scss';

function Business(props) {
    return (
        <div className='c-business'>
            <img src={props.image} alt='Business image'/>
            <p>{props.name}</p>
            <p>{props.address}</p>
            <p>{props.city}</p>
            <p>{props.state}</p>
            <p>{props.zipCode}</p>
            <p>{props.category}</p>
            <p>{props.rating} stars</p>
            <p>{props.reviewCount} reviews</p>
        </div>
    );
}

export default Business;