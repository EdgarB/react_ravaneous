import React from 'react';
import Business from './Business';
import './BusinessList.scss';

function restaurantFactory(){
    return (
      {
        name: 'The restaurant',
        image: 'https://dummyimage.com/200x200/000/fff.jpg',
        address: 'Random address',
        city: 'New York',
        state: 'New York',
        zip_code: '10001',
        category: 'Elegante',
        rating: '5',
        review_count: '42'
      }
    );
  }
  
  const dummyRestaurants = [
    restaurantFactory(),
    restaurantFactory(),
    restaurantFactory(),
    restaurantFactory(),
    restaurantFactory(),
    restaurantFactory(),
    restaurantFactory(),
    restaurantFactory(),
    restaurantFactory(),
    restaurantFactory(),
    restaurantFactory()
  ]

function BusinessList(){
    return(
      <div className='c-business-list'>
        {dummyRestaurants.map( (r, index) => {
          return (
            <Business 
              key={r.name.toLowerCase() + index}
              name={r.name}
              address={r.address}
              image= {r.image}
              city= {r.city}
              state= {r.state}
              zipCode= {r.zip_code}
              category= {r.category}
              rating= {r.rating}
              reviewCount= {r.review_count}
            />)
          })}
      </div>
    );
}

export default BusinessList;