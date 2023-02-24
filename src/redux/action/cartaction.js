import {
  ADD_TO_CART,
  ADD_CART_SUCCESS,
  REMOVE_TO_CART,
} from "../reducers/actionType";
import axios from "axios";
import { config } from "../header";

export const addtocart = (product) => async (dispatch) => {
  console.log("product", product);
  try {
    await axios
      .post(`${process.env.REACT_APP_API_URL}/cart/add`, product, config)
      .then(async function (result) {
        console.log("cartaction", result.data);
        if (result.status === 200) {
          dispatch({
            type: ADD_TO_CART,
            payload: result.data,
          });
          dispatch(getCart());
        }
      })
      .catch((error) => {
        console.log("error1", error);
      });
  } catch (error) {
    console.log("error2", error);
  }
};
export const getCart = () => async (dispatch) => {
  try {
    axios
      .get(`${process.env.REACT_APP_API_URL}/cart/get`, config)
      .then(function (result) {
        console.log("getCart", result);
        if (result.status === 200) {
          dispatch({ type: ADD_CART_SUCCESS, payload: result.data });
        }
      })
      .catch((error) => {
        console.log("error1", error);
      });
  } catch (error) {
    console.log("error2", error);
  }
};
export const removeCart = (item) => async (dispatch) => {
  let body = {
    isInCart: item.isInCart,
  };
  console.log("removecartitem", item);
  try {
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/cart/delete/${item._id}`,
        body,
        config
      )
      .then(function (result) {
        console.log("removeCart", result);

        if (result.status === 200) {
          dispatch(getCart());
        }
      })
      .catch((error) => {
        console.log("error1", error);
      });
  } catch (error) {
    console.log("error2", error);
  }
};
