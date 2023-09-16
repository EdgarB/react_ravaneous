import './App.scss';
import Business from './Components/Business';

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

function App() {
  return (
    <div className="c-app">
      <h1>Welcome to Ravenous!</h1>
      <p>Here you'll find the best restaurants recomendations depending on your area!</p>
      
      <div className='c-app__restaurants'>
        {dummyRestaurants.map( r => {
          return (
            <Business 
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
    </div>
  );
}

export default App;
