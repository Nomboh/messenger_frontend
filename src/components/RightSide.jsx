import React from "react";
import { FaPhoneAlt, FaRocketchat, FaVideo } from "react-icons/fa";
import FriendsInfo from "./FriendsInfo";
import Message from "./Message";
import MessageSend from "./MessageSend";

function RightSide(props) {
  const {
    currentFriend,
    newMessage,
    inputHandler,
    sendMessage,
    messages,
    scrollRef,
    emojiSend,
    ImageSend,
  } = props;
  return (
    <div className="col-9">
      <div className="right-side">
        <input type="checkbox" id="dot" />
        <div className="row">
          <div className="col-8">
            <div className="message-send-show">
              <div className="header">
                <div className="image-name">
                  <div className="image">
                    <img
                      src={`/images/${currentFriend.image}`}
                      alt={currentFriend.userName}
                    />
                  </div>
                  <div className="name">
                    <h3> {currentFriend.userName}</h3>
                  </div>
                </div>

                <div className="icons">
                  <div className="icon">
                    <FaPhoneAlt />
                  </div>

                  <div className="icon">
                    <FaVideo />
                  </div>

                  <div className="icon">
                    <label htmlFor="dot">
                      {" "}
                      <FaRocketchat />
                    </label>
                  </div>
                </div>
              </div>
              <Message
                currentFriend={currentFriend}
                messages={messages}
                scrollRef={scrollRef}
              />
              <MessageSend
                inputHandler={inputHandler}
                newMessage={newMessage}
                sendMessage={sendMessage}
                emojiSend={emojiSend}
                ImageSend={ImageSend}
              />
            </div>
          </div>

          <div className="col-4">
            <FriendsInfo currentFriend={currentFriend} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
