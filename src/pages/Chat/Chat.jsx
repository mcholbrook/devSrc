
import React, { useState, useEffect } from 'react';
import useChat from "../../useChat";
import "./Chat.css";

const Chat = (props) => {
  const { room } = 'chat';
  const { messages, sendMessage } = useChat(room);
  const [newMessage, setNewMessage] = useState("");
  //const {chatters, setChatters } = 

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div>
      <h1>Chat</h1>
      <div>
        <ul>
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.sentByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              {message.name}: 
              {message.body}
              
            </li>
          ))}
        </ul>
      </div>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Send a message..."
      />
      <button onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
};

export default Chat;