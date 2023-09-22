import React from 'react';
import './SearchBar.scss';
import { useState } from 'react';
import clsx from 'clsx';



function SearchBar(props){
  const [sortingOption, setSortingOption] = useState('best_match');
  const [location, setlocation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const optionSelectedClass = (optionName) => {
    if(sortingOption === optionName){
      return 'c-search-bar__sorting-options__item--selected';
    }else{
      return '';
    }
  }

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.currentTarget.value);
  }

  const handleLocationChange = (event) => {
    setlocation(event.currentTarget.value);
  }

  const handleFormSubmit = async (event)=>{
    event.preventDefault();
    const searchResults = await props.search(searchTerm, location, sortingOption);
    props.setSearchResults(searchResults);
  }
  return(
    <form className='c-search-bar' onSubmit={handleFormSubmit}>
      <input type='hidden' name='sorting' value={sortingOption}/>
      <div className='c-search-bar__sorting-options'>
        <div 
        className={clsx('c-search-bar__sorting-options__item', optionSelectedClass('best_match'))} 
        onClick={()=>{setSortingOption('best_match')}} >
          Best
          <br/>
          Match
        </div>
        <div 
        className={clsx('c-search-bar__sorting-options__item', optionSelectedClass('rating'))} 
        onClick={()=>{setSortingOption('rating')}} >
          Highest
          <br/>
          Rated
        </div>
        <div 
        className={clsx('c-search-bar__sorting-options__item', optionSelectedClass('review_count'))} 
        onClick={()=>setSortingOption('review_count')} >
          Most
          <br/>
          Reviewed
        </div>
      </div>
      <div className='c-search-bar__inputs-container'>
        <input className='c-search-bar__input' type='text' placeholder='Search Businesses' value={searchTerm} onChange={handleSearchTermChange}/>
        <input className='c-search-bar__input' type='text' placeholder='Where?' value={location} onChange={handleLocationChange}/>
      </div>
      <button className='c-search-bar__btn' type='submit'>Let's Go</button>
    </form>
  );
}

export default SearchBar;