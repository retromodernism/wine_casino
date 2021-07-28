const moduleName = "headerColor";

const CHANGE_COLOR = `${moduleName}/CHANGE_COLOR`;

const initialState = {
  color: "dark",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_COLOR:
      return {
        ...state,
        color: payload.color,
      };
    default:
      return state;
  }
};

export default reducer;

// Hooks

export const makeHeaderDark = () => async (dispatch) => {
  dispatch({ type: CHANGE_COLOR, payload: { color: "dark" } });
};

export const makeHeaderLight = () => async (dispatch) => {
  dispatch({ type: CHANGE_COLOR, payload: { color: "light" } });
};
