import {
  FRIEND_GET_SUCCESS,
  GET_MESSAGE_SUCCESS,
  SEND_MESSAGE_SUCCESS,
} from "../types/messengerTypes";

const messengerState = {
  friends: [],
  messages: [],
};

export const messengerReducer = (state = messengerState, action) => {
  const { type, payload } = action;
  if (type === FRIEND_GET_SUCCESS) {
    return {
      ...state,
      friends: payload.friends,
    };
  }

  if (type === SEND_MESSAGE_SUCCESS) {
    return {
      ...state,
      messages: [...state.messages, payload.message],
    };
  }

  if (type === GET_MESSAGE_SUCCESS) {
    return {
      ...state,
      messages: payload.message,
    };
  }

  return state;
};
