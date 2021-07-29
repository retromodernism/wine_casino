const moduleName = "kindsOfGames";

const SHOW_POSITION = `${moduleName}/SHOW_POSITION`;

const initialState = {
  activePositionId: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_POSITION:
      return {
        ...state,
        activePositionId: payload.positionId,
      };
    default:
      return state;
  }
};

export default reducer;

// Hooks

export const showPosition = (positionId) => async (dispatch) => {
  dispatch({ type: SHOW_POSITION, payload: { positionId } });
};
