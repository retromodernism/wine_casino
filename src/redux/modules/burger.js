const moduleName = "burger";

const TOGGLE_BURGER = `${moduleName}/TOGGLE_BURGER`;
const SET_BURGER_INFO = `${moduleName}/SET_BURGER_INFO`;

const initialState = {
  isOpen: false,
  links: [],
  phone: {
    tel: undefined,
    title: undefined,
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_BURGER:
      return {
        ...state,
        isOpen: payload,
      };
    case SET_BURGER_INFO:
      return {
        ...state,
        links: [...payload.links],
        phone: { ...payload.phone },
      };
    default:
      return state;
  }
};

export default reducer;

export const setBurgerInfo = (links, phone) => async (dispatch) => {
  dispatch({
    type: SET_BURGER_INFO,
    payload: {
      links,
      phone,
    },
  });
};

export const openBurgerMenu = () => async (dispatch, getState) => {
  dispatch({
    type: TOGGLE_BURGER,
    payload: true,
  });
};
export const closeBurgerMenu = () => async (dispatch, getState) => {
  dispatch({
    type: TOGGLE_BURGER,
    payload: false,
  });
};
