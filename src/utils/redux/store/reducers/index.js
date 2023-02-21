import { combineReducers } from "redux";
import cinemasReducer from "../reducers/cinemaList";

const reducers = combineReducers({
  cinemasReducer,
});

export default reducers;
