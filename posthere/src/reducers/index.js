const initialState = {
  isLoading: false,
  activity: null,
  error: null,
  token: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_LOGIN_START":
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'POST_LOGIN_SUCCESS':
      console.log('inside reducer: ', action.payload)
      if(action.payload) {
        return {
          ...state,
          isLoading: false,
          error: null,
          token: action.payload
        }
      } else {
        return {
          ...state,
          error: "Login fail! Try again?",
          isLoading: false,
        }
      }
    case "POST_USER_START":
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'POST_USER_SUCCESS':
      console.log('inside reducer: ', action.payload)
      if(action.payload) {
        return {
          ...state,
          isLoading: false,
          error: null,
        }
      } else {
        return {
          ...state,
          error: "Registration fail! Try again?",
          isLoading: false,
        }
      }
    case 'POST_FAIL':
      return {
        ...state,
        error: "Server Error!",
        isLoading: false
      }
    default:
      return state;
  }
};