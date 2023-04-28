const initialState = {
  loading: true,
};

export const changeLoading = (input) => {
  return { type: "CHANGE_LOADING", payload: input };
};

export const loadingReducer = (state = initialState.loading, action) => {
  switch (action.type) {
    case "CHANGE_LOADING":
      return action.payload;
    default:
      return state;
  }
};
