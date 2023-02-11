import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import "./chat.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import axios from "./axios";
import ritik from "./images/ritik.png"


function Chat({ messages }) {
    const [input, setInput] = useState("")

    const sendMessage = async (e) => {
        e.preventDefault();
        const date = new Date().toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute:'2-digit'
          });

        await axios.post("/messages/new", {
            message: input,
            name: "Ritik",
            timeStamp: date,
            recieved: false,
        });

        setInput("");

    };



    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar src={ritik}/>

                <div className='chat_header_info'>
                    <h3>Ritik</h3>
                    <p>Last seen.. {messages.timeStamp}</p>
                </div>

                <div className='chat_header_right'>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className='chat_body'>
                {messages.map(message => (
                    <p className={message.recieved ? "chat_message" : " chat_reciever chat_message"}>
                        <span className='chat_name'>{message.name}</span>
                        {message.message}
                        <span className='chat_time'>
                            {message.timeStamp}
                        </span>
                    </p>
                ))}

            </div>

            <div className='chat_footer'>
            <IconButton>
                <InsertEmoticonIcon />
            </IconButton>
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='Type a message' type="text" />
                    <button onClick={sendMessage} type='submit'>Send a message</button>
                </form>
                <IconButton>
                <MicIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
