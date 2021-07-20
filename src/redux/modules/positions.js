import positions from "./defaultPositions";

const moduleName = "positions";

const GET_POSITIONS = `${moduleName}/GET_POSITIONS`;
const CHANGE_POSITION_COUNT = `${moduleName}/CHANGE_POSITION_COUNT`;

const initialState = {
  positions: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSITIONS:
      return {
        ...state,
        positions: payload.positions,
      };
    case CHANGE_POSITION_COUNT:
      return {
        ...state,
        positions: payload.positions,
      };
    default:
      return state;
  }
};

export default reducer;

// Hooks

export const getPositions = () => async (dispatch) => {
  dispatch({ type: GET_POSITIONS, payload: { positions } });
};

export const changePositionCount =
  (newValue, positionId) => async (dispatch, getState) => {
    if (newValue <= 0) return;
    
    const state = getState();
    const positions = state.positions.positions;
    const newPositions = positions.map((position) => {
      if (position.id === positionId) {
        return {
          ...position,
          count: { ...position.count, value: newValue },
        };
      } else {
        return position;
      }
    });

    dispatch({type: CHANGE_POSITION_COUNT, payload: {positions: newPositions}})
  };
