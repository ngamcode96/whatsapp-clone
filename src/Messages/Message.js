import React from 'react';
import Conversation from './body/Conversation';
import NewMessage from './footer/NewMessage';
import MessageHeader from './header/MessageHeader';
import './Message.css';

const Message = () => {
  return (
    <div className="right">
      <MessageHeader />
      <Conversation />
      <NewMessage />
      
    </div>
  )
}

export default Message