const moduleName = "burger";

const TOGGLE_BURGER = `${moduleName}/TOGGLE_BURGER`;

const initialState = {
  burgerIsOpen: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_BURGER:
      return {
        ...state,
        burgerIsOpen: payload.burgerIsOpen,
      };
    default:
      return state;
  }
};

export default reducer;

// Hooks

export const openBurger = () => async (dispatch) => {
  dispatch({ type: TOGGLE_BURGER, payload: { burgerIsOpen: true } });
};

export const closeBurger = () => async (dispatch) => {
  dispatch({ type: TOGGLE_BURGER, payload: { burgerIsOpen: false } });
};
