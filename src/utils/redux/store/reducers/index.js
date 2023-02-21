import { combineReducers } from "redux";
import { profileIdReducer } from "./userProfileReduce";

const reducers = combineReducers({
  profileIdUser: profileIdReducer,
});

export default reducers;
