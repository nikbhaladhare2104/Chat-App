import React, { useContext } from "react";
import Cam from "/cam.png";
import Add from "/add.png";
import More from "/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { useChat } from "../contextProviders/ChatContext";

const Chat = () => {
  const { data } = useChat();

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
