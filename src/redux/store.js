import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import reduxLogger from "redux-logger";

import rootReducers from "./modules";

const isProduction = process.env.NODE_ENV === "production";
  
const configureStore = (reducers = {}, preloadedState = {}, middlewares = []) =>
  isProduction
    ? createStore(
        combineReducers({
          ...rootReducers,
          ...reducers,
        }),
        preloadedState,
        compose(applyMiddleware(...middlewares, thunk))
      )
    : createStore(
        combineReducers({
          ...rootReducers,
          ...reducers,
        }),
        preloadedState,
        compose(
          applyMiddleware(...middlewares, thunk, reduxLogger),
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      );

export default configureStore;
