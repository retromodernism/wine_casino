const moduleName = "scroll";

const SCROLL_TO_PAGE = `${moduleName}/SCROLL_TO_PAGE`;

const initialState = {
  currentPage: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SCROLL_TO_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    default:
      return state;
  }
};

export default reducer;

export const scrollTo = (pageNumber) => async (dispatch) => {
  dispatch({ type: SCROLL_TO_PAGE, payload: pageNumber });
};
