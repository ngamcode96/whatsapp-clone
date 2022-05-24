import { Avatar } from '@mui/material';
import React from 'react';
import LastUserMessage from './LastUserMessage';
import './UserMessage.css';

const UserMessage = ({name, msg, time}) => {
  return (
    <div className='user_message'>
        <Avatar 
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
            alt="avatar"
        />

        <LastUserMessage 
            name = {name}
            msg = {msg}
        />

        <span className='last_user_msg_time'>{time}</span>
    </div>
  )
}

export default UserMessage