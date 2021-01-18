import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import authService from './services/authService'

const SOCKET_SERVER_URL = "http://localhost:3001";
const newChatMessageEvent = "newChatMessage";

const useChat = (room) => {
  const [messages, setMessages] = useState([]);
  const [chatters, setChatters] = useState([])
  const socketRef = useRef();

  
  useEffect(() => {
    let user = authService.getUser()
    //console.log(user.name)
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { room: room, user: user.name },
    });

    socketRef.current.on(newChatMessageEvent, (message) => {
      const incomingMessage = {
        ...message,
        sentByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [room]);

  const sendMessage = (messageBody) => {
    let user = authService.getUser()
    socketRef.current.emit(newChatMessageEvent, {
      body: messageBody,
      senderId: socketRef.current.id,
      name: user.name
    });
  };

  return { messages, sendMessage };



};

export default useChat;