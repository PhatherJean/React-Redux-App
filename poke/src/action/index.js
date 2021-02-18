import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESSFUL = "FETCH_SUCCESSFUL";
export const ERROR = "ERROR";

export const getPokemon = (limit, offset) => (dispatch) => {
  dispatch(fetchingPokeLoading());
  axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=250&offset=0")
    .then((res) => {
      dispatch(fetchingPokeSuccessful(res.data.results));
    })
    .catch((err) => {
      dispatch(error(err));
    });
};

export const fetchingPokeLoading = () => {
  return { type: FETCH_DATA };
};

export const fetchingPokeSuccessful = (poke) => {
  console.log("success", poke);
  return { type: FETCH_SUCCESSFUL, payload: poke };
};

export const error = (err) => {
  return { type: ERROR, payload: err };
};
