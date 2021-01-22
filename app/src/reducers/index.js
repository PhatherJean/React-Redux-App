import { FETCH_DATA_START } from "../action";

const initialState = {
  data: [
    {
      fetch: false,
      error: "",
    },
  ],
  dbz: [
    {
      title: "",
      episodes: "",
      image_url: "",
      rated: "",
      start_date: "",
      end_date: "",
      synopsis: "",
    },
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state.data,
        fetch: true,
        error: "",
      };

    default:
      return state;
  }
};
