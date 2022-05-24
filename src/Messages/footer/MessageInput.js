import React from 'react';
import './MessageInput.css';

const MessageInput = () => {
  return (
    <div class='message_input'>
        <input type='text' className='typing_message' placeholder='Taper un message' />
    </div>
  )
}

export default MessageInput