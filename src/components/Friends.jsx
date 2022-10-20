import React from "react";

function Friends({ friend }) {
  return (
    <div className="friend">
      <div className="friend-image">
        <div className="image">
          <img src={`/images/${friend.image}`} alt={friend.userName} />
        </div>
      </div>

      <div className="friend-name-seen">
        <div className="friend-name">
          <h4>{friend.userName}</h4>
        </div>
      </div>
    </div>
  );
}

export default Friends;
