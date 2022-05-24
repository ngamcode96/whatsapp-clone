import { Avatar } from '@mui/material';
import React from 'react';
import './MessageHeader.css';
import MessageOptions from './MessageOptions';

const MessageHeader = () => {
  return (
    <div className='message_header'>
       
       <div className='user'>
            <Avatar 
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="avatar"
            />

            <div class='user_name_seen'>
                <span className='display_name'>Amadou Ly</span>
                <span className='last_seen'>vu aujourd'hui à 14:12</span>
            </div>

            

       </div>
        <MessageOptions />

        
    </div>
  )
}

export default MessageHeader