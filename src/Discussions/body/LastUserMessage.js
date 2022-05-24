import React from 'react';
import './LastUserMessage.css';
import CheckIcon from '@mui/icons-material/Check';

const LastUserMessage = ({name, msg}) => {
  return (
    <div className='last_user_message'>
        <span className='user_name'>{name}</span>
        <span className='user_msg'> <CheckIcon style={{fontSize : "14px"}} /> {msg} </span>
    </div>
  )
}

export default LastUserMessage