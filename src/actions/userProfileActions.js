import axios from "axios";

const geprofileByIdRequest = () => {
  return {
    type: "GET_DATA_PROFILE_BYID_REQUEST",
  };
};

const geProfileByIdSuccess = (data) => {
  return {
    type: "GET_DATA_PROFILE_BYID_SUCCESS",
    payload: data,
  };
};

const geProfileByIdFail = (err) => {
  return {
    type: "GET_DATA_PROFILE_BYID_FAIL",
    payload: err,
  };
};

export const getProfileById = () => {
  return (dispatch) => {
    dispatch(geprofileByIdRequest());
    return axios
      .get(`http://localhost:5000/api/profile/0f879d60-563b-4134-8432-6ea646763e7f`)
      .then((res) => {
        dispatch(geProfileByIdSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(geProfileByIdFail(err.response.data));
      });
  };
};
