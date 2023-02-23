import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import auth from "./reducers/authReducer";
import getData from './reducers/getDataReducer'
// // reducer list

// const rootReducer = combineReducers({
//   auth
// });
// // store
// const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
// export default store;

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const rootReducer = combineReducers({
  auth,
  getData,
});
const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
export default store;
