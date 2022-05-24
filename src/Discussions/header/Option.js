import React from 'react';
import { Chat, DonutLarge, MoreVert } from '@mui/icons-material';
import './Option.css';
import {IconButton} from '@mui/material';

const Option = () => {
  return (
    <div className='option'>
      <IconButton>
         <DonutLarge />
      </IconButton>

      <IconButton>
         <Chat  />
      </IconButton>

      <IconButton>
         <MoreVert  />
      </IconButton>
       
        
    </div>
  )
}

export default Option