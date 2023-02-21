import {
  GET_CINEMAS,
  GET_MOVIES,
  GET_TIMELIST,
} from "../../../action/movieList";

const initialState = {
  getCinemasLoading: false,
  getCinemasResult: false,
  getCinemasError: false,

  getTimeLoading: false,
  getTimeResult: false,
  getTimeError: false,
};

const cinemas = (state = initialState, action) => {
  switch (action.type) {
    case GET_CINEMAS:
      return {
        ...state,
        getCinemasLoading: action.payload.loading,
        getCinemasResult: action.payload.data,
        getCinemasError: action.payload.error,
      };
    case GET_MOVIES:
      return {
        ...state,
        getMovieLoading: action.payload.loading,
        getMovieResult: action.payload.data,
        getMovieError: action.payload.error,
      };
    case GET_TIMELIST:
      return {
        ...state,
        getTimeLoading: action.payload.loading,
        getTimeResult: action.payload.data,
        getTimeError: action.payload.error,
      };
    default:
      return state;
  }
};

export default cinemas;
