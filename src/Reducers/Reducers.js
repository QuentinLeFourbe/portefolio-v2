export const dataReducer = (dataState, action) => {
  switch (action.type) {
    case "APP_LOADING":
      return { ...dataState, isAppLoading: true };
    case "APP_LOADED":
      return { ...dataState, isAppLoading: false };
    default:
      return dataState;
  }
};
