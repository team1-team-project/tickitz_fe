import { combineReducers } from "redux";
import { profileIdReducer } from "./userProfileReduce";
import cinemasReducer from "../reducers/cinemaList";

const reducers = combineReducers({
  profileIdUser: profileIdReducer,
  cinemasReducer,
});

export default reducers;
