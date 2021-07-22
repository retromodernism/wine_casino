const moduleName = "tabletSearchBar";

const TOGGLE_SEARCHBAR = `${moduleName}/TOGGLE_SEARCHBAR`;

const initialState = {
  searchBarIsOpen: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_SEARCHBAR:
      return {
        ...state,
        searchBarIsOpen: payload.searchBarIsOpen,
      };
    default:
      return state;
  }
};

export default reducer;

// Hooks

export const openSearchBar = () => async (dispatch) => {
  dispatch({ type: TOGGLE_SEARCHBAR, payload: { searchBarIsOpen: true } });
};

export const closeSearchBar = () => async (dispatch) => {
  dispatch({ type: TOGGLE_SEARCHBAR, payload: { searchBarIsOpen: false } });
};
