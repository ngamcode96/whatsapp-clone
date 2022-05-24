import { IconButton } from '@mui/material';
import React from 'react';
import './NewMessage.css';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MessageInput from './MessageInput';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
const NewMessage = () => {
  return (
    <div className='new_message'>
      
        <IconButton>
            <EmojiEmotionsOutlinedIcon style={{fontSize: "30px"}}/>
        </IconButton>
        <IconButton>
            <AttachFileIcon style={{fontSize: "30px"}} />
        </IconButton>

        <MessageInput />

        <IconButton>
            <MicOutlinedIcon style={{fontSize: "30px"}} />
        </IconButton>
        
    </div>
  )
}

export default NewMessage