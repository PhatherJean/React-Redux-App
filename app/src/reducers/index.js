import { FETCH_DATA_START } from "../action";

const initialState = {
  data: [
    {
      fetch: false,
      error: "",
    },
  ],
  jokes: {
    category: "",
    type: "",
    joke: "",
    setup: "",
    delivery: "",
  },
  id: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
