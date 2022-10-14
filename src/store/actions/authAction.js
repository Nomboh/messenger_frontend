import axios from "axios";

export const registerUser = (data) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const result = await axios.post("/api/messenger/register", data, config);

      console.log(result.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
};
