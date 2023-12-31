import { combineReducers, createStore } from "redux";
import { reducerMeetingType } from "./reducer";
const rootReducer = combineReducers({ reducerMeetingType });
export const store = createStore(rootReducer);
