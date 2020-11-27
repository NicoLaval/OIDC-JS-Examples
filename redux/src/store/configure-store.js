import { createStore, combineReducers } from "redux";
import { reducer as oidc } from "@axa-fr/react-oidc-redux";

const rootReducer = combineReducers({
  authType: (s = "") => s,
  oidc,
});

export const configureStore = (initialState) =>
  createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
