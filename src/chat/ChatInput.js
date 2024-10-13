import React, { useState } from "react";
import "./ChatInput.css";
const ChatInput = ({ onSend }) => {
  const [input, SetInput] = useState("");
  const SendHandel = () => {
    if (input.trim()) {
      onSend(input);
      SetInput("");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      SendHandel();
    }
  };
  return (
    <div className="chat-input">
      <input
        type="text"
        value={input}
        placeholder="Type  your message "
        onChange={(e) => SetInput(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={SendHandel}>Send</button>
    </div>
  );
};

export default ChatInput;
