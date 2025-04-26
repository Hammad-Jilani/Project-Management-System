import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import projectReducer from "./Project/Reducer";
import commentReducer from "./Comment/Reducer";
import chatReducer from "./Chat/Reducer";
import { authReducer } from "./Auth/Reducer";
import issueReducer from "./Issue/Reducer";
import { LOGOUT } from "./Auth/ActionType";

const appReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  chat: chatReducer,
  comment: commentReducer,
  issue: issueReducer
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
