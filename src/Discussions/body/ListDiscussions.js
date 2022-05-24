import React from 'react';
import './ListDiscussions.css'
import UserMessage from './UserMessage';


const ListDiscussions = () => {
  return (
    <div className='list_discussions'>
        <UserMessage 
            name="Amadou Ly"
            msg="D'accord"
            time="aujourd'hui"
        />
        <UserMessage 
            name="Seydou Ba FR"
            msg="Salut Amadou. Ca fait un bail"
            time="hier"
        />

        <UserMessage 
            name="Maman"
            msg="Diam Wali"
            time="05/05/2022"
        />

        <UserMessage 
            name="Amadou Ly"
            msg="D'accord"
            time="aujourd'hui"
        />
        <UserMessage 
            name="Seydou Ba FR"
            msg="Salut Amadou. Ca fait un bail"
            time="hier"
        />

        <UserMessage 
            name="Maman"
            msg="Diam Wali"
            time="05/05/2022"
        />

        
        <UserMessage 
            name="Amadou Ly"
            msg="D'accord"
            time="aujourd'hui"
        />
        <UserMessage 
            name="Seydou Ba FR"
            msg="Salut Amadou. Ca fait un bail"
            time="hier"
        />

        <UserMessage 
            name="Maman"
            msg="Diam Wali"
            time="05/05/2022"
        />

    
    </div>
  )
}

export default ListDiscussions