import { MoreVert, Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import './MessageOptions.css';

const MessageOptions = () => {
  return (
    <div className='message_options'>

        <IconButton>
            <Search />
        </IconButton>

        <IconButton>
            <MoreVert />
        </IconButton>
    </div>
  )
}

export default MessageOptions