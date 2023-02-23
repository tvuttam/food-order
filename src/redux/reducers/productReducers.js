import {
  PRODUCT_LIST,
  ADD_TO_CART,
  REMOVE_TO_CART,
} from "../reducers/actionType";

const initialState = {
  getProduct: null,
  cardItems: [],
};
export const productData = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case PRODUCT_LIST:
      console.log("productData1");
      return {
        ...state,
        getProduct: action.payload,
      };
   
    case REMOVE_TO_CART:
      console.log("REMOVE");
      const cartItem = state.cardItems.filter(
        (carItem) => carItem._id !== action.data
      );
      console.log("caritem", cartItem);
      const cartData = state.cardItems.find(
        (cartItem) => cartItem._id === action.data._id
      );
      console.log("cartData@", cartData);
      console.log("state", state);

      if (cartData) {
        if (cartData.qty === 1) {
          return {
            ...state,
            cardItems: cartItem,
          };
        } else {
          return {
            ...state,
            cardItems: state.cardItems.map((item) => {
              return item._id === action.data._id
                ? {
                    ...item,
                    qty: item.qty - 1,
                  }
                : item;
            }),
          };
        }
      } else {
        return {
          ...state,
          cardItems: cartItem,
        };
      }
    default:
      return state;
  }
};
