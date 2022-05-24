import React from 'react';
import './Header.css';
import {Avatar} from '@mui/material';

import Option from './Option';
const Header = () => {
  return (
    <div className='header'>
        <Avatar
          style={{marginLeft : "7px"}} 
          alt="Image" 
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />

        <Option />
    </div>
  )
}

export default Header