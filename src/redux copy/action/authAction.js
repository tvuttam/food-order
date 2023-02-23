import axios from "axios";
import * as types from "../actionTypes";

export const signupAction = (field) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/register`,
      field
    );
    dispatch({ type: types.SIGNUP_SUCCESS, payload: res.data });
  } catch (error) {
    console.log("err", error);
    dispatch({ type: types.SIGNUP_ERROR, payload: error.response.data });
  }
};

export const loginAction = (field) => async (dispatch) => {
  try {
    axios
      .post(`${process.env.REACT_APP_API_URL}/user/login`, {
        email: field.email,
        password: field.password,
        user_type: 3,
      })
      .then(function (result) {
        if (result.status === 200) {
          localStorage.setItem("isLogin", true);
          localStorage.setItem("token", result.data.accessToken);
          dispatch({ type: types.LOGIN_SUCCESS, payload: result });
        } else {
          dispatch({
            type: types.LOGIN_ERROR,
            payload: result.data.status,
          });
        }
      })
      .catch((error) => {
        // console.log("ERROR", error);
        dispatch({ type: types.LOGIN_ERROR, payload: error.response.data });
      });
  } catch (error) {
    // console.log("err", error);
    dispatch({ type: types.LOGIN_ERROR, payload: error.response.data });
  }
};

export const logoutAction = () => async (dispatch) => {
  try {
    const res = "";
    dispatch({ type: types.LOGOUT_SUCCESS, payload: res });
    localStorage.setItem("isLogin", false);
    localStorage.removeItem("email");
    localStorage.removeItem("user_id");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
  } catch (error) {
    console.log("err", error);
    dispatch({ type: types.LOGOUT_ERROR, payload: error.response.data });
  }
};

export const resetPasswordAction = (field, email) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8000/resetPassword", field);
    // console.log("res", res);

    dispatch({ type: types.RESET_PASSWORD_SUCCESS, payload: res.data });
  } catch (error) {
    console.log("err", error);
    dispatch({
      type: types.RESET_PASSWORD_ERROR,
      payload: error.response.data,
    });
  }
};

export const forgetPasswordAction = (email) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8000/forgetPassword", email);
    // console.log("res", res);

    dispatch({ type: types.FORGOT_PASSWORD_SUCCESS, payload: res.data });
  } catch (error) {
    console.log("err", error);
    dispatch({
      type: types.FORGOT_PASSWORD_ERROR,
      payload: error.response.data,
    });
  }
};
