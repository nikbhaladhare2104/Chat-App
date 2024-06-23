import React, { useEffect, useRef } from "react";
import { useAuth } from "../contextProviders/AuthContext";
import { useChat } from "../contextProviders/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useAuth();
  const { data } = useChat();

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const date = new Date(message.date.seconds * 1000);
  const time = date.getHours() + ":" + date.getMinutes();

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>{time}</span>
      </div>
      <div className="messageContent">
        <div>
          <p>{message.text}</p>
          {currentUser ? (
            <img src="/green-tick.png" alt="" />
          ) : (
            <img src="/double-tick.png" alt="" />
          )}
        </div>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
