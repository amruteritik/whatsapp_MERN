import { Avatar } from '@mui/material'
import React from 'react'
import "./sidebarchat.css"

function SidebarChat(props) {
  return (
    <div className={ props.name === "Ritik" ? ' ritik_highlight' : 'sidebarchat'}>
      <Avatar src={props.src} />
      <div className='sidebarchat_info'>
        <h2>{props.name}</h2>
        <p>{props.last}</p>
      </div>
    </div>
  )
}

export default SidebarChat
