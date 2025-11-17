"use client";
import { useState } from "react";

const ChatInput = ({ chatMessages, setChatMessages }) => {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (!inputText || loading) return;
    setLoading(true);
    setInputText("");

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);
    setChatMessages([
      ...newChatMessages,
      {
        message: "Loading...",
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    const response = await Chatbot.getResponseAsync(inputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setLoading(false);
  }

  function keyDown(event) {
    if (event.key == "Enter") {
      sendMessage({ chatMessages, setChatMessages });
    } else if (event.key == "Escape") {
      setInputText("");
    }
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={keyDown}
        className="chat-input"
      />
      <button
        onClick={sendMessage}
        disabled={loading || !inputText}
        className="send-button"
      >
        {loading ? "Loading..." : "Send"}
      </button>
    </div>
  );
};

export default ChatInput;
