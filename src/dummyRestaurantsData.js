import BusinessPlaceholderImg from './food.jpg';

function restaurantFactory(){
  return (
    {
      name: 'The restaurant',
      image: BusinessPlaceholderImg,
      address: 'Random address',
      city: 'New York',
      state: 'New York',
      zip_code: '10001',
      category: 'Elegante',
      rating: '5',
      reviews_count: '42'
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

export default dummyRestaurants;