import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

export const getDragonBall = () => (dispatch) => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("https://api.jikan.moe/v3/search/anime?q=dragonballz")
    .then((res) => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.results });
    })
    .catch((err) => {
      dispatch({ type: FETCH_DATA_FAIL, payload: err.response.code });
    });
};
