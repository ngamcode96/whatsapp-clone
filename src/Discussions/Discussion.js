import React from 'react';
import ListDiscussions from './body/ListDiscussions';
import SearchInput from './body/SearchInput';
import './Discussion.css';
import Header from './header/Header';
const Discussion = () => {
  return (
    <div className='left'>
        <Header />
        <SearchInput />
        <ListDiscussions />
    </div>
  )
}

export default Discussion