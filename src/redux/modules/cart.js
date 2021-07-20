const moduleName = "plug";

const ADD_POSITION = `${moduleName}/ADD_POSITION`;
const REMOVE_POSITION = `${moduleName}/REMOVE_POSITION`;
const CHANGE_POSITION_COUNT = `${moduleName}/CHANGE_POSITION_COUNT`;
const RESET_CART = `${moduleName}/RESET_CART`;

const initialState = {
  positionsIds: [
    "99160ccf9721ced060baa45784dbac7dd9b7a217",
    "d40942f27ffb836b995ac0e4c9d593de0d0eee87",
    "a51bed70a17750788df66173fefda37c8cd0f65b",
    "ea13ef8b2d993755855f951240435d46eb8c9259",
    "08da6f36615b5d86a279f342c4ffba74758c1083",
    "f2b6a5cb8794c1dd8674c9c15a54ac14d31f69e0",
    "5dbdaadb579cd63ef3b1bb32f006ca339cac1756",
    "a23c820344806f85aed62c20dd7a1ef511acd545",
  ],
};
// const initialState = {
//   positionsIds: [],
// };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POSITION:
      return {
        ...state,
        positionsIds: [payload.positionsId, ...state.positionsIds],
      };
    case REMOVE_POSITION:
      return {
        ...state,
        positionsIds: [...payload.positionsIds],
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
  const state = getState();
  const positionsIdsInCart = state.cart.positionsIds;
  const positionAlreadyInCart =
    positionsIdsInCart.filter((id) => id === positionId).length !== 0;

  if (positionAlreadyInCart) return;

  dispatch({ type: ADD_POSITION, payload: { positionsId: positionId } });
};

export const removePosition = (positionId) => async (dispatch, getState) => {
  const state = getState();
  const cartPositionIds = state.cart.positionsIds;
  // console.log(cartPositionIds)
  const newPositionIds = cartPositionIds.filter((id) => id !== positionId);

  dispatch({
    type: REMOVE_POSITION,
    payload: { positionsIds: newPositionIds },
  });
};

export const getCartItems = () => async (dispatch, getState) => {
  const state = getState();
  const cartPositionsIds = state.cart.positionsIds;
  const positions = state.positions.positions;
  const positionsInCart = positions.filter(({ id }) =>
    cartPositionsIds.includes(id)
  );

  return positionsInCart;
};

export const resetCart = () => async (dispatch) => {
  dispatch({ type: RESET_CART, payload: null });
};
