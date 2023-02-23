import * as types from "../actionTypes";

const initialState = {
  email: null,
  signupData: null,
  userData: null,
  changePassword: null,
  forgotPassword: null,
  isLogin: false,
  // loginUserInfo: null,
  // loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        signupData: action.payload,
      };
    case types.SIGNUP_ERROR:
      return {
        ...state,
        signupData: action.payload,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        userData: action.payload,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        userData: action.payload,
        isLogin: false,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        // isLogin: false,
        userData: action.payload,
      };
    case types.LOGOUT_ERROR:
      return {
        ...state,
        userData: action.payload,
      };
    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        changePassword: action.payload,
      };
    case types.RESET_PASSWORD_ERROR:
      return {
        ...state,
        changePassword: action.payload,
      };
    case types.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPassword: action.payload,
      };
    case types.FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        forgotPassword: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
