const moduleName = "plug";

const ADD_POSITION = `${moduleName}/ADD_POSITION`;
const REMOVE_POSITION = `${moduleName}/REMOVE_POSITION`;
const RESET_CART = `${moduleName}/RESET_CART`;

const initialState = {
  positions: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POSITION:
      return {
        ...state,
        cart: [payload.position, ...state.cart],
      };
    case REMOVE_POSITION:
      return {
        ...state,
        positions: [...state.positions.filter(({ id }) => id !== payload.id)],
      };
    case RESET_CART:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;

// Hooks

export const addPosition = (positionId) => async (dispatch, getState) => {
  const positions = getState().positions.positions;
  const pickedPosition = positions.filter(({ id }) => id === positionId)[0];
  dispatch({ type: ADD_POSITION, payload: { position: pickedPosition } });
};

export const removePosition = (positionId) => async (dispatch) => {
  dispatch({ type: REMOVE_POSITION, payload: { positionId } });
};
