const moduleName = "headerSocialsHover";

const SET_HOVER = `${moduleName}/SET_HOVER`;

const initialState = {
  isHovered: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_HOVER:
      return {
        ...state,
        isHovered: payload,
      };
    default:
      return state;
  }
};

export default reducer;

export const setHover = (isHovered) => async (dispatch) => {
  dispatch({ type: SET_HOVER, payload: isHovered });
};
