import Image from "next/image";

const ChatMessage = ({ message, sender }) => {
  return (
    <>
      <div
        className={`${
          sender === "user"
            ? "chat-message-container-user"
            : "chat-message-container-robot"
        }`}
      >
        {sender === "robot" && (
          <Image
            src="/images/chatbot-robot-avatar.png"
            width="50"
            height="50"
            className="chat-message-profile"
            alt="robot avatar"
          />
        )}
        <p className="chat-message-contents">{message}</p>
        {sender === "user" && (
          <Image
            src="/images/chatbot-user-avatar.png"
            width="50"
            height="50"
            className="chat-message-profile"
            alt="user avatar"
          />
        )}
      </div>
    </>
  );
};

export default ChatMessage;
