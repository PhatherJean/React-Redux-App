import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

export const getJokes = () => (dispatch) => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("https://v2.jokeapi.dev/joke/Any")
    .then((res) => {
      console.log("retrieved data:", res.data);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_DATA_FAIL, payload: err.response.code });
    });
};
