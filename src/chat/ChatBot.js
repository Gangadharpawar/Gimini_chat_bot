import React, { useState } from "react";
import "./ChatBot.css";
import ChatInput from "./ChatInput.js";
import ChatWindow from "./ChatWindow.js";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import LogoutButton from "../components/Logout";
const ChatBot = () => {
  const history = useHistory();
  const [messages, SetMessages] = useState([]);
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (!isLoading && !isAuthenticated) {
    //redirect to login
    history.push("/login");
  }
  //is user logged
  const Handelmessage = async (text) => {
    const newmessage = [...messages, { from: "user", text }];
    SetMessages(newmessage);
    // Replace this URL with your API endpoint
    try {
      const response = await axios.post(
        process.env.REACT_APP_CHAT_BOT_BACKEND_URL,

        {
          message: text,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      SetMessages([...newmessage, { from: "bot", text: response.data.reply }]);
    } catch (error) {
      console.log("error to sending message", error);
      SetMessages([
        ...newmessage,
        { from: "bot", text: " Sorry, something went wrong..." },
      ]);
    }
  };

  return (
    <div className="chat-container">
      <LogoutButton />
      <ChatWindow messages={messages} />
      <ChatInput onSend={Handelmessage} />
    </div>
  );
};

export default ChatBot;
