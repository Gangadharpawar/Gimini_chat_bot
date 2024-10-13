import React from "react";
import "./ChatWindow.css";
import ReactMarkdown from "react-markdown";
// import { marked } from "marked";
const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message ${
            msg.from === "user" ? "user-message" : "bot-message"
          }`}
          // dangerouslySetInnerHTML={{ __html: marked(msg.text) }}
        >
          {" "}
          <ReactMarkdown>{msg.text}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
