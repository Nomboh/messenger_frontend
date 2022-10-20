import axios from "axios";
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
} from "../types/authTypes";

export const registerUser = data => {
  return async dispatch => {
    try {
      const result = await axios.post("/register", data);

      localStorage.setItem("authToken", result.data.token);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          successMessage: result.data.successMessage,
          token: result.data.token,
        },
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: { error: error.response.data.error.errorMessage },
      });
    }
  };
};

export const loginUser = data => {
  return async dispatch => {
    try {
      const result = await axios.post("/login", data);

      localStorage.setItem("authToken", result.data.token);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: {
          successMessage: result.data.successMessage,
          token: result.data.token,
        },
      });
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: { error: error.response.data.error.errorMessage },
      });
    }
  };
};
