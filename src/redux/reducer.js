const initialState = {
    isLoading: false,
    isAuthenticated: false || window.sessionStorage.getItem("check") === process.env.REACT_APP_SECRET_KEY,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOADING":
        return {
          ...state,
          isLoading: action.value,
        };
      case "AUTHENTICATED":
        return {
          ...state,
          isAuthenticated: action.value,
        };
      default:
        return state;
    }
  };
  
  export default reducer;