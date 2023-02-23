import * as types from "../actionTypes";

const initialState = {
  userInfo: null,
  getState: [],
  getCity: [],
  getCityId: [],
  addUserData: {},
  getAllUser: [],
};

const getDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERINFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case types.GET_STATE:
      return {
        ...state,
        getState: action.payload,
      };
    case types.GET_CITY:
      return {
        ...state,
        getCity: action.payload,
      };
    case types.GET_STATE_WISE_CITY:
      console.log("Reducer State", ...state);
      return {
        ...state,
        getCityId: action.payload,
      };
    case types.SET_USER:
      return {
        ...state,
        addUserData: action.payload,
      };
    case types.GET_ALL_USER:
      return {
        ...state,
        getAllUser: action.payload,
      };
    default:
      return state;
  }
};
export default getDataReducer;
