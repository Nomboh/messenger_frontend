import React from "react";
import { FaCaretSquareDown } from "react-icons/fa";

function FriendsInfo({ currentFriend }) {
  return (
    <div className="friend-info">
      <input type="checkbox" id="gallery" />
      <div className="image-name">
        <div className="image">
          <img
            src={`/images/${currentFriend.image}`}
            alt={currentFriend.userName}
          />
        </div>
        <div className="active-user">Active</div>

        <div className="name">
          <h4>{currentFriend.userName} </h4>
        </div>
      </div>

      <div className="others">
        <div className="custom-chat">
          <h3>Coustomise Chat </h3>
          <FaCaretSquareDown />
        </div>

        <div className="privacy">
          <h3>Privacy and Support </h3>
          <FaCaretSquareDown />
        </div>

        <div className="media">
          <h3>Shared Media </h3>
          <label htmlFor="gallery">
            {" "}
            <FaCaretSquareDown />{" "}
          </label>
        </div>
      </div>

      <div className="gallery">
        <img src="/images/2163788_photo_free_20220307_225637.jpg" alt="" />
        <img src="/images/2163788_photo_free_20220307_225637.jpg" alt="" />
        <img src="/images/2163788_photo_free_20220307_225637.jpg" alt="" />
        <img src="/images/2163788_photo_free_20220307_225637.jpg" alt="" />
      </div>
    </div>
  );
}

export default FriendsInfo;
