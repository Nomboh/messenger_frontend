import React, { useEffect, useState } from "react";
import { FaEllipsisH, FaEdit, FaSistrix } from "react-icons/fa";
import ActiveFriends from "./ActiveFriends";
import Friends from "./Friends";
import RightSide from "./RightSide";
import { useDispatch, useSelector } from "react-redux";
import {
  getFriends,
  getMessages,
  ImageMessageSend,
  messageSend,
} from "../store/actions/messengerAction";
import { useRef } from "react";
import { io } from "socket.io-client";

function Messenger() {
  const dispatch = useDispatch();

  const scrollRef = useRef();
  const socket = useRef();

  const [currentFriend, setCurrentFriend] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  const { friends, messages } = useSelector((state) => state.messenger);
  const { myInfo } = useSelector((state) => state.auth);

  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    socket.current = io("ws://localhost:5000");
  }, []);

  useEffect(() => {
    socket.current?.emit("addUser", myInfo.id, myInfo);
  }, []);

  useEffect(() => {
    socket.current.on("getUser", (users) => {
      const userFilter = users.filter((u) => u.userId !== myInfo.id);
      setActiveUser(userFilter);
    });
  }, []);
  const inputHandler = (e) => {
    setNewMessage(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    const data = {
      senderName: myInfo.userName,
      recieverId: currentFriend._id,
      message: newMessage ? newMessage : "❤",
    };

    dispatch(messageSend(data));
    setNewMessage("");
  };

  const emojiSend = (emu) => {
    setNewMessage(`${newMessage}` + emu);
  };

  const ImageSend = (e) => {
    if (e.target.files.length !== 0) {
      const imagename = e.target.files[0].name;
      const newImageName = Date.now() + imagename;

      const formData = new FormData();

      formData.append("senderName", myInfo.userName);
      formData.append("imageName", newImageName);
      formData.append("recieverId", currentFriend._id);
      formData.append("image", e.target.files[0]);
      dispatch(ImageMessageSend(formData));
    }
  };

  useEffect(() => {
    dispatch(getFriends());
  }, []);

  useEffect(() => {
    if (friends && friends.length > 0) {
      setCurrentFriend(friends[0]);
    }
  }, [friends]);

  useEffect(() => {
    dispatch(getMessages(currentFriend?._id));
  }, [currentFriend?._id]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="messenger">
      <div className="row">
        <div className="col-3">
          <div className="left-side">
            <div className="top">
              <div className="image-name">
                <div className="image">
                  <img src={`/images/${myInfo.image}`} alt={myInfo.userName} />
                </div>
                <div className="name">
                  <h3> Hi {myInfo.userName} </h3>
                </div>
              </div>

              <div className="icons">
                <div className="icon">
                  <FaEllipsisH />
                </div>
                <div className="icon">
                  <FaEdit />
                </div>
              </div>
            </div>

            <div className="friend-search">
              <div className="search">
                <button>
                  {" "}
                  <FaSistrix />{" "}
                </button>
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control"
                />
              </div>
            </div>
            <div className="active-friends">
              {activeUser && activeUser.length > 0
                ? activeUser.map((u) => (
                    <ActiveFriends key={u.userId} user={u} />
                  ))
                : ""}
            </div>
            <div className="friends">
              {friends && friends.length > 0
                ? friends.map((friend) => (
                    <div
                      onClick={() => setCurrentFriend(friend)}
                      key={friend._id}
                      className={
                        currentFriend?._id === friend._id
                          ? "hover-friend active"
                          : "hover-friend"
                      }
                    >
                      <Friends friend={friend} />
                    </div>
                  ))
                : "No Friend"}
            </div>
          </div>
        </div>
        {currentFriend ? (
          <RightSide
            currentFriend={currentFriend}
            inputHandler={inputHandler}
            newMessage={newMessage}
            sendMessage={sendMessage}
            messages={messages}
            scrollRef={scrollRef}
            emojiSend={emojiSend}
            ImageSend={ImageSend}
          />
        ) : (
          "please select a friend to begin chatting"
        )}
      </div>
    </div>
  );
}

export default Messenger;
