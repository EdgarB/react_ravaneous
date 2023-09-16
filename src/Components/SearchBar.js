import React from 'react';
import './SearchBar.scss';

function SearchBar(){
  return(
    <form className='c-search-bar'>
      <div className='c-search-bar__sorting-options'>
        <div className='c-search-bar__sorting-options__item'>
          Best
          <br/>
          Match
        </div>
        <div className='c-search-bar__sorting-options__item'>
          Highest
          <br/>
          Rated
        </div>
        <div className='c-search-bar__sorting-options__item'>
          Most
          <br/>
          Reviewed
        </div>
      </div>
      <div className='c-search-bar__inputs-container'>
        <input className='c-search-bar__input' type='text'/>
        <input className='c-search-bar__input' type='text'/>
      </div>
      <button className='c-search-bar__btn' type='submit'>Let's Go</button>
    </form>
  );
}

export default SearchBar;