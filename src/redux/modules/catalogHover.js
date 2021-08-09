const moduleName = "catalogHover";

// const SET_HOVER = `${moduleName}/SET_HOVER`;
const TOGGLE_FOOD_CASINOS = `${moduleName}/TOGGLE_FOOD_CASINOS`;
const TOGGLE_CLASSIC_CASINOS = `${moduleName}/TOGGLE_CLASSIC_CASINOS`;

const initialState = {
  // isHovered: false,
  foodCasinosIsOpen: false,
  classicCasinosIsOpen: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_FOOD_CASINOS:
      return {
        ...state,
        foodCasinosIsOpen: payload.foodCasinosIsOpen,
      };
    case TOGGLE_CLASSIC_CASINOS:
      return {
        ...state,
        classicCasinosIsOpen: payload.classicCasinosIsOpen,
      };
    default:
      return state;
  }
};

export default reducer;

// export const setCatalogHover = (isHovered) => async (dispatch) => {
//   dispatch({ type: SET_HOVER, payload: isHovered });
// };

export const openFoodCasinos = () => async (dispatch) => {
  dispatch({ type: TOGGLE_FOOD_CASINOS, payload: { foodCasinosIsOpen: true } });
};

export const closeFoodCasinos = () => async (dispatch) => {
  dispatch({ type: TOGGLE_FOOD_CASINOS, payload: { foodCasinosIsOpen: false } });
};

export const openClassicCasinos = () => async (dispatch) => {
  dispatch({ type: TOGGLE_CLASSIC_CASINOS, payload: { classicCasinosIsOpen: true } });
};

export const closeClassicCasinos = () => async (dispatch) => {
  dispatch({ type: TOGGLE_CLASSIC_CASINOS, payload: { classicCasinosIsOpen: false } });
};
