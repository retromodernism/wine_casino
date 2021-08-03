import defaultCasinos from "./defaultCasinos";

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
        casinos: payload.casinos,
      };
    default:
      return state;
  }
};

export default reducer;

// Hooks

export const getCasinos = () => async (dispatch) => {
  /* Заготовка запроса на сервер */
  const casinos = defaultCasinos;
  dispatch({ type: GET_CASINOS, payload: { casinos } });
};
