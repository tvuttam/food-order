import axios from "axios";
import * as types from "../actionTypes";
import { config } from "../header";
const FormData = require("form-data");

export const getAllUserAction = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/getUser");
    console.log("res", res);

    dispatch({ type: types.GET_USERINFO, payload: res.data });
  } catch (error) {
    console.log("err", error);
  }
};
export const getAllstate = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/city-state/get-state`,
      config
    );
    console.log("res------->", res.data);
    dispatch({ type: types.GET_STATE, payload: res.data });
  } catch (error) {
    console.log("err", error);
  }
};
export const getAllcity = () => async (dispatch) => {
  try {
    const res = await axios
      .get(`${process.env.REACT_APP_API_URL}/city-state/get-all-city`, config)
      .then(function (result) {
        if (result.status === 200) {
          dispatch({
            type: types.GET_CITY,
            payload: result.data,
          });
        }
      });

    // dispatch({ type: types.GET_CITY, payload: res.data });
  } catch (error) {
    console.log("err", error);
  }
};

export const getAllCityByStateId = (id) => async (dispatch) => {
  console.log("CITY API CALL", id);
  try {
    console.log("Try call 1");
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/city-state/get-all-city/${id}`,
      config
    );
    console.log("Try Response 2", res);
    dispatch({ type: types.GET_STATE_WISE_CITY, payload: res.data });
  } catch (error) {
    console.log("error", error);
  }
};

export const addUser = (data) => async (dispatch) => {
  console.log("DATA OF BODY ----->", data);
  try {
    var formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("gender", data.gender);
    formData.append("phone_no", data.phone_no);
    formData.append("status", data.status);
    formData.append("state_id", data.state_id);
    formData.append("profile_pic", data.profile_pic[0]);
    formData.append("city_id", data.city_id);
    formData.append("password", data.password);
    formData.append("user_delete", 0);
    formData.append("user_type", 0);
    console.log("FORM DATA LOG ---->", formData);

    const res = await axios
      .post(`${process.env.REACT_APP_API_URL}/user/add-user`, formData, config)
      .then(function (result) {
        console.log("USER ADD", result);
        if (result.status === 200) {
          dispatch({
            type: types.SET_USER,
            payload: result.data,
          });
        }
      });
    console.log("CALLING RESPONSE------>", res);
  } catch (error) {
    console.log("error", error);
  }
};
export const getAllUserData = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/add-user`,
      config
    );
    console.log("res", res);

    dispatch({ type: types.GET_ALL_USER, payload: res.data });
  } catch (error) {
    console.log("err", error);
  }
};
//update user
// export const profileUpdate = (data) => async (dispatch) => {
//   try {
//     let body = {
//       data: {
//         id: data.uuid,
//         first_name:  data.first_name,
//         last_name: data.last_name,
//         email: data.email,
//         gender: data.gender,
//         phone_no: data.phone_no,
//         status: data.status,
//         state_id: data.state_id,
//         profile_pic: data.profile_pic[0],
//         city_id: data.city_id,
//         password: data.password,
//         user_delete: 0,
//         user_type: 0,

//       },
//     };

//     axios
//       .patch(`${process.env.REACT_APP_API_URL}/user/user-info-update`, body, config)
//       .then(function (result) {
//         if (result.status === 200) {
//           dispatch({
//             type: types.UPDATE_USER,
//             payload: result.data,
//           });
//         }
//       })
//       .catch((error) => {
//         dispatch({
//           type: types.PROFILE_DATA_ERROR,
//           payload: error.response.data,
//         });
//       });
//   } catch (error) {
//     dispatch({ type: types.PROFILE_DATA_ERROR, payload: error.response.data });
//   }
// };
