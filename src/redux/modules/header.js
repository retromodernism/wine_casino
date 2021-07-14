const moduleName = "header";

const TOGGLE_HEADER = `${moduleName}/TOGGLE_HEADER`;

const initialState = {
  isActive: true,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_HEADER:
      return {
        ...state,
        isActive: payload,
      };
    default:
      return state;
  }
};

export default reducer;

export const hideHeader = () => async (dispatch) => {
  dispatch({
    type: TOGGLE_HEADER,
    payload: false,
  });
};

export const showHeader = () => async (dispatch) => {
  dispatch({
    type: TOGGLE_HEADER,
    payload: true,
  });
};
