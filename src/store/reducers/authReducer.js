import {
  ERROR_CLEAR,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SUCCESS_MESSAGE_CLEAR,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
} from "../types/authTypes";
import jwtDecode from "jwt-decode";

const initialState = {
  loading: true,
  authenticate: false,
  error: null,
  successMessage: "",
  myInfo: "",
};

export const authReducer = (state = initialState, action) => {
  const { payload, type } = action;

  const decodeToken = token => {
    const decoded = jwtDecode(token);
    const expTime = new Date(decoded.exp * 1000);
    if (new Date() > expTime) {
      return null;
    }
    return decoded;
  };

  const token = localStorage.getItem("authToken");
  if (token) {
    const myInfo = decodeToken(token);
    if (myInfo) {
      initialState.authenticate = true;
      initialState.myInfo = myInfo;
      initialState.loading = false;
    }
  }

  if (type === REGISTER_FAIL || type === USER_LOGIN_FAIL) {
    return {
      ...state,
      loading: true,
      authenticate: false,
      error: payload.error,
      myInfo: "",
    };
  }

  if (type === REGISTER_SUCCESS || type === USER_LOGIN_SUCCESS) {
    return {
      ...state,
      loading: false,
      authenticate: true,
      error: null,
      successMessage: payload.successMessage,
      myInfo: decodeToken(payload.token),
    };
  }

  if (type === SUCCESS_MESSAGE_CLEAR) {
    return {
      ...state,
      successMessage: "",
    };
  }

  if (type === ERROR_CLEAR) {
    return {
      ...state,
      error: null,
    };
  }

  return state;
};
