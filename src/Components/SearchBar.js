import React from 'react';
import './SearchBar.scss';
import { useState } from 'react';
import clsx from 'clsx';



function SearchBar(){
  const [sortingOption, setSortingOption] = useState('best_match');
  const [location, setlocation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const selectSortingOption = (event) => {
    const optionSelected = event.currentTarget.getAttribute('data-sorting-option');
    setSortingOption(optionSelected);
  }

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

  const handleFormSubmit = (event)=>{
    event.preventDefault();
    console.log(`Searching ${searchTerm}, ${location}, ${sortingOption}`);
    setSearchTerm('');
    setlocation('');
  }
  return(
    <form className='c-search-bar' onSubmit={handleFormSubmit}>
      <input type='hidden' name='sorting' value={sortingOption}/>
      <div className='c-search-bar__sorting-options'>
        <div 
        className={clsx('c-search-bar__sorting-options__item', optionSelectedClass('best_match'))} 
        onClick={selectSortingOption} data-sorting-option='best_match'>
          Best
          <br/>
          Match
        </div>
        <div 
        className={clsx('c-search-bar__sorting-options__item', optionSelectedClass('highest_rating'))} 
        onClick={selectSortingOption} data-sorting-option='highest_rating'>
          Highest
          <br/>
          Rated
        </div>
        <div 
        className={clsx('c-search-bar__sorting-options__item', optionSelectedClass('most_reviewed'))} 
        onClick={selectSortingOption} data-sorting-option='most_reviewed'>
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