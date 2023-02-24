import {
  ADD_TO_CART,
  ADD_CART_SUCCESS,
  REMOVE_TO_CART,
} from "../reducers/actionType";

const initialState = {
  cardItems: [],
};

export const cartData = (state = initialState, action) => {
  console.log("cartreducer", action);
  switch (action.type) {
    case ADD_TO_CART:
      console.log("Add to cart");
      return {
        ...state,
        cardItems: [action.data, ...state.cardItems],
      };
    case ADD_CART_SUCCESS:
      console.log("ADD_CART_SUCCESS");
      return {
        ...state,
        cardItems: action.payload,
      };
    case REMOVE_TO_CART:
      console.log("REMOVE_TO_CART");
      return {
        ...state,
        cardItems: action.payload,
      };
    default:
      return state;
  }
};
