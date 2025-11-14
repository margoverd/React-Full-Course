"use client";
import "./page.css";
import ChatMessages from "@/components/ChatMessages";
import Script from "next/script";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import { useState } from "react";

export default function chat() {
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
    <>
      <Script
        src="https://unpkg.com/supersimpledev/chatbot.js"
        strategy="afterInteractive"
      />
      <div className="chatbot-container">
        <ChatMessages chatMessages={chatMessages} />
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      </div>
    </>
  );
}
