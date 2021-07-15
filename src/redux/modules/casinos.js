const moduleName = "casinos";

const GET_CASINOS = `${moduleName}/GET_CASINOS`;

const initialState = {
  casinos: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CASINOS:
      return {
        ...state,
        casinos: [...payload],
      };
    default:
      return state;
  }
};

export default reducer;

export const getCasino = () => async (dispatch) => {
  dispatch({ type: GET_CASINOS, payload: [] });
};
