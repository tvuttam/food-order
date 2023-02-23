import { PRODUCT_LIST } from "../reducers/actionType";
import axios from "axios";
import { config } from "../header";

export const getProductOrder = () => async (dispatch) => {
  try {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/product/get`, config)
      .then(async function (result) {
        console.log("result", result.data.data);
        if (result.status === 200) {
          dispatch({
            type: PRODUCT_LIST,
            payload: result.data.data,
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  } catch (error) {
    console.log("error", error);
  }
};
