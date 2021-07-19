const moduleName = "popup";

const TOGGLE_CART_POPUP = `${moduleName}/TOGGLE_CART_POPUP`;

const initialState = {
  cartPopupIsOpen: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART_POPUP:
      return {
        ...state,
        cartPopupIsOpen: payload.cartPopupIsOpen,
      };
    default:
      return state;
  }
};

export default reducer;

// Hooks

export const openCartSuccessPopup = () => async (dispatch) => {
  dispatch({ type: TOGGLE_CART_POPUP, payload: { cartPopupIsOpen: true } });
};

export const closeCartSuccessPopup = () => async (dispatch) => {
  dispatch({ type: TOGGLE_CART_POPUP, payload: { cartPopupIsOpen: false } });
};
