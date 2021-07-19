const moduleName = 'plug';

const PLUG_ACTION = `${moduleName}/GET_CASINOS`;

const initialState = {
  plug: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PLUG_ACTION:
      return {
        ...state,
        plug: payload,
      };
    default:
      return state;
  }
};

export default reducer;

// Hooks

export const plugHook = () => async (dispatch) => {
  dispatch({ type: PLUG_ACTION, payload: [] });
};
