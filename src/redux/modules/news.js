import news from "./defaultNews";

const moduleName = "news";

const GET_NEWS = `${moduleName}/GET_NEWS`;

const initialState = {
  news: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_NEWS:
      return {
        ...state,
        news: payload.news,
      };
    default:
      return state;
  }
};

export default reducer;

// Hooks

export const getNews = () => async (dispatch) => {
  dispatch({ type: GET_NEWS, payload: { news } });
};
