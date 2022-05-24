import React from 'react';
import './SearchInput.css';

const SearchInput = () => {
  return (
    <div className='search'>
        <input 
            className='search_input'
            type='text'
            placeholder='Rechercher ou démarrer une nouvelle discussion'
        />
    </div>
  )
}

export default SearchInput