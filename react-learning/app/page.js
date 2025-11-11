"use client";
import ChatMessages from "@/components/ChatMessages";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import { useState } from "react";

export default function Home() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "hello chatbot",
      sender: "user",
    },
    {
      message: "Hello! How can I help you?",
      sender: "robot",
    },
    {
      message: "2 text",
      sender: "user",
    },
    {
      message: "2 answer",
      sender: "robot",
    },
  ]);
  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  return (
    <div className="chatbot-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}
