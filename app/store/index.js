import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import initState from "./initialState";

function configureStore(initialState = initState) {
  const middleware = [thunk];
  if (typeof window !== "undefined") {
    middleware.push(createLogger({ collapsed: true }));
  }
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
}
export default configureStore;
