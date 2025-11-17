"use client";
import ChatMessage from "./ChatMessage";
import { useEffect, useRef } from "react";

const ChatMessages = ({ chatMessages }) => {
  const chatMessagesRef = useRef(null);
  // Automaticly save an HTML element from the component

  // useEffect runs after component is created
  useEffect(() => {
    // Elem - means contains HTML element
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);
  // [ChatMessages] = run this function every time ChatMessages changes

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage, index) => (
        <ChatMessage
          key={`chatMessage${index}`}
          message={chatMessage.message}
          sender={chatMessage.sender}
        />
      ))}
    </div>
  );
};

export default ChatMessages;
