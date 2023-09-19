import React from 'react';
import Business from './Business';
import './BusinessList.scss';


function BusinessList(props){
    return(
      <div className='c-business-list'>
        {props.businessList.map( (r, index) => {
          return (
            <Business 
              key={r.name.toLowerCase() + index}
              businessObj = {r}
            />)
          })}
      </div>
    );
}

export default BusinessList;