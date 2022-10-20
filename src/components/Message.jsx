import React from "react";

function Message({ messages, currentFriend, scrollRef }) {
  return (
    <div className="message-show">
      {messages && messages.length > 0
        ? messages.map(message =>
            message.recieverId === currentFriend._id ? (
              <div key={message._id} ref={scrollRef} className="my-message">
                <div className="image-message">
                  <div className="my-text">
                    <p className="message-text">{message.message.text}</p>
                  </div>
                </div>
                <div className="time">2 Jan 2022</div>
              </div>
            ) : (
              <div key={message._id} ref={scrollRef} className="fd-message">
                <div className="image-message-time">
                  <img src={`/images/${currentFriend.image}`} alt={""} />
                  <div className="message-time">
                    <div className="fd-text">
                      <p className="message-text"> {message.message.text} </p>
                    </div>
                    <div className="time">3 Jan 2022</div>
                  </div>
                </div>
              </div>
            )
          )
        : ""}
    </div>
  );
}

export default Message;
