import React, {useState, useEffect} from 'react';
import './App.scss';
import BusinessList from './Components/BusinessList';
import SearchBar from './Components/SearchBar';
import headerImg from './header.jpg';
import NavBar from './Components/NavBar';
import yelpSearch from './Utils/YelpApi';



function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [businesses, setBusinesses] = useState([]);

  useEffect(()=>{
    const businesses = searchResults.map((result)=>{
      return {
        image: result.image_url,
        name: result.name,
        address: result.location.address1, 
        city: result.location.city,
        state: result.location.state,
        zipCode: result.location.zip_code,
        category: result.categories[0].title,
        rating: result.rating,
        reviewsCount: result.review_count,
      }
    })
    setBusinesses(businesses);
  }, [searchResults])

  return (
    <div className="c-app">
      <NavBar/>
      <div className='c-app__header'>
        <img src={headerImg} className='c-app__header-img' alt=''/>
        <div className='c-app__header-img-credit'>
        Foto de <a href="https://unsplash.com/es/@toddquackenbush?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Todd Quackenbush</a> en <a href="https://unsplash.com/es/fotos/x5SRhkFajrA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </div>
        <div className='c-app__header-content'>
          <SearchBar search={yelpSearch} setSearchResults={setSearchResults}/>
        </div>
      </div>
      <div className='c-app__body'>
        <BusinessList businessList={businesses}/>
      </div>
    </div>
  );
}

export default App;
