import axios from "axios";
import {
  FRIEND_GET_SUCCESS,
  GET_MESSAGE_SUCCESS,
  SEND_MESSAGE_SUCCESS,
} from "../types/messengerTypes";

export const getFriends = () => async dispatch => {
  try {
    const response = await axios.get("/get-friends");
    dispatch({
      type: FRIEND_GET_SUCCESS,
      payload: {
        friends: response.data.friends,
      },
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const messageSend = data => async dispatch => {
  try {
    const result = await axios.post("/send-message", data);

    dispatch({
      type: SEND_MESSAGE_SUCCESS,
      payload: {
        message: result.data.message,
      },
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getMessages = id => {
  return async dispatch => {
    try {
      const res = await axios.get("/get-message/" + id);
      dispatch({
        type: GET_MESSAGE_SUCCESS,
        payload: {
          message: res.data.message,
        },
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const ImageMessageSend = data => async dispatch => {};
