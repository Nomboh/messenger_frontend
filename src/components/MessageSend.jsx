import React from "react";
import {
  FaFileImage,
  FaGift,
  FaPaperPlane,
  FaPlusCircle,
} from "react-icons/fa";

function MessageSend({
  inputHandler,
  newMessage,
  sendMessage,
  emojiSend,
  ImageSend,
}) {
  const emojis = [
    "😀",
    "😄",
    "😁",
    "😆",
    "😂",
    "🤣",
    "😊",
    "🙂",
    "🙃",
    "😉",
    "😌",
    "😍",
    "😝",
    "😜",
    "🧐",
    "🤓",
    "😎",
    "😕",
    "🤑",
    "🥴",
    "😱",
  ];
  return (
    <div className="message-send-section">
      <input type="checkbox" id="emoji" />
      <div className="file hover-attachment">
        <div className="add-attachment">Add Attachment</div>
        <FaPlusCircle />
      </div>

      <div className="file hover-image">
        <div className="add-image">Add Image</div>
        <input
          onChange={ImageSend}
          type="file"
          id="pic"
          className="form-control"
        />
        <label htmlFor="pic">
          {" "}
          <FaFileImage />{" "}
        </label>
      </div>

      <div className="file hover-gift">
        <div className="add-gift">Add gift</div>
        <FaGift />
      </div>

      <div className="message-type">
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Aa"
          className="form-control"
          value={newMessage}
          onChange={inputHandler}
        />

        <div className="file hover-gift">
          <label htmlFor="emoji">
            {" "}
            <FaPaperPlane />{" "}
          </label>
        </div>
      </div>

      <div className="file" onClick={sendMessage}>
        ❤
      </div>

      <div className="emoji-section">
        <div className="emoji">
          {emojis.map((e, i) => (
            <span onClick={() => emojiSend(e)} key={i}>
              {e}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MessageSend;
