import axios from "axios";

export const GET_CINEMAS = "GET_CINEMAS";
export const GET_TIMELIST = "GET_TIMELIST";
export const GET_MOVIES = "GET_MOVIES";

export const getCinemas = (page) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_CINEMAS,
      payload: {
        loading: true,
        data: false,
        error: false,
      },
    });

    // get cinema
    axios
      .get(
        `https://tickitz.herokuapp.com/api/cinema?${
          page && page >= 1 ? `page=${page}` : ""
        }`
      )
      .then((res) => {
        // success get
        dispatch({
          type: GET_CINEMAS,
          payload: {
            loading: false,
            data: res.data.data,
            error: false,
          },
        });
      })
      .catch((err) => {
        // failed get
        console.log(err);
        dispatch({
          type: GET_CINEMAS,
          payload: {
            loading: false,
            data: false,
            error: true,
          },
        });
      });
  };
};

export const getMovies = () => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_MOVIES,
      payload: {
        loading: true,
        data: false,
        error: false,
      },
    });

    // get movie
    axios
      .get(
        `https://tickitz.herokuapp.com/api/movie/?searchBy=release_date&sort_by=id_movies&sort_type=asc&limit=6&page=1`
      )
      .then((res) => {
        // success get
        dispatch({
          type: GET_MOVIES,
          payload: {
            loading: false,
            data: res.data,
            error: false,
          },
        });
      })
      .catch((err) => {
        // failed get
        console.log(err);
        dispatch({
          type: GET_MOVIES,
          payload: {
            loading: false,
            data: false,
            error: true,
          },
        });
      });
  };
};

export const getTimeList = (id_movie, id_cinema) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_TIMELIST,
      payload: {
        loading: true,
        data: false,
        error: false,
      },
    });

    // get time
    axios
      .get(
        `https://tickitz.herokuapp.com/api/movie-time/${id_movie}/${id_cinema}`
      )
      .then((res) => {
        // success get
        // console.log(res.data.Data);
        // res.data.Data.map((item, index) => {
        //   if (index === 0) {
        //     console.log(item);
        //   } else if (index !== 0 && item !== res.data.Data[index - 1]) {
        //     console.log(item);
        //   }
        // });
        dispatch({
          type: GET_TIMELIST,
          payload: {
            loading: false,
            data: res.data.Data,
            error: false,
          },
        });
      })
      .catch((err) => {
        // failed get
        console.log(err);
        dispatch({
          type: GET_TIMELIST,
          payload: {
            loading: false,
            data: false,
            error: true,
          },
        });
      });
  };
};
