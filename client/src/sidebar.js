import React from 'react'
import "./sidebar.css"
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar , IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from "./sidebarchat"
import dp from "./images/dp.png"
import ashok from "./images/ashok.png"
import ritik from "./images/ritik.png"
import shubham from "./images/shubham.jpeg"
import sukuna from "./images/sukuna.jpg"
import yash from "./images/yash.png"
import hockey from "./images/hockey.webp"
import kirti from "./images/kirti.jpg"




function Sidebar() {
  return (
    <div className='sidebar'>
    
      <div className='sidebar_header'>
      <Avatar src={dp} />
        <div className='sidebar_header_right'>
             <IconButton>
                <DonutLargeIcon />
             </IconButton>
             <IconButton>
                <ChatIcon />
             </IconButton>
             <IconButton>
                <MoreVertIcon />
             </IconButton>
        </div>
      </div>
      <div className='sidebar_search'>
        <div className='sidebar_search_container'>
        <IconButton>
        <SearchIcon />
        </IconButton>
           
            <input type="text" placeholder='Search for Chats'></input>
        </div>
      </div>

        <div className='sidebar_chat'>
            <SidebarChat src={yash} name="Yash Bhai" last="Milte hai"/>
            <SidebarChat src="https://www.mykhel.com/thumb/247x100x233/cricket/players/8/3788.jpg" name="Virat Bhaiya" last="Thik hai Bro.."/>
            <SidebarChat src={hockey} name="The Hockey Club" last="We have practice today"/>
            <SidebarChat src={kirti} name="Kirti" last="..GN"/>
            <SidebarChat src={ritik} name="Ritik" last="Okay"/>
            <SidebarChat src={sukuna} name="Ashok" last="No class Today"/>
            <SidebarChat src={ashok} name="Chiku" last="kaise ho bhaiya"/>
            <SidebarChat src={shubham} name="Shubham" last="Hmmmm.."/>
            
            
        </div>

    </div>
  )
}

export default Sidebar
