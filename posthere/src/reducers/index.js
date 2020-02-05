const initialState = {
  isLoading: false,
  activity: null,
  error: null,
  posts: null,
  user: {
    name: '',
    posts: null,
    user_id: null
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START":
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'POST_FAIL':
      return {
        ...state,
        error: "Server Error!",
        isLoading: false
      }
    case 'POST_LOGIN_SUCCESS':
      console.log('inside reducer: ', action.payload)
      if(action.payload) {
        localStorage.setItem('token', action.payload.token)
        return {
          ...state,
          isLoading: false,
          error: null,
          user: {
            ...state.user,
            user_id: action.payload.id
          }
        }
      } else {
        return {
          ...state,
          error: "Login fail! Try again?",
          isLoading: false,
        }
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
      };
    case 'GET_POSTS_SUCCESS':
      console.log('inside reducer: ', action.payload)
      if(action.payload) {
        return {
          ...state,
          isLoading: false,
          error: null,
          posts: action.payload
        }
      } else {
        return {
          ...state,
          error: "Registration fail! Try again?",
          isLoading: false,
        }
      };
    case 'GET_USER_POSTS_SUCCESS':
      console.log('inside reducer: ', action.payload)
      if(action.payload) {
        return {
          ...state,
          isLoading: false,
          error: null,
          user: {
            ...state.user,
            posts: action.payload
          }
        }
      } else {
        return {
          ...state,
          error: "Registration fail! Try again?",
          isLoading: false,
        }
      };
    case 'POST_POST_SUCCESS':
      console.log('inside reducer: ', action.payload)
      if(action.payload) {
        return {
          ...state,
          isLoading: false,
          error: null,
          posts: [...state.posts, action.payload],
          user: {
            ...state.user, 
            posts: [...state.user.posts, action.payload]
          }
        }
      } else {
        return {
          ...state,
          error: "Registration fail! Try again?",
          isLoading: false,
        }
      };
    case 'DELETE_POST_SUCCESS':
      console.log('inside reducer: ', action.payload)
      if(action.payload) {
        return {
          ...state,
          isLoading: false,
          error: null,
          posts: state.posts.filter(post => post.id !== action.payload),
          user: {
            ...state.user,
            posts: [state.user.posts.filter(post => post.id !== action.payload)]
          }
        }
      } else {
        return {
          ...state,
          error: "Registration fail! Try again?",
          isLoading: false,
        }
      };
    case 'EDIT_POST_SUCCESS':
      console.log('inside reducer: ', action.payload)
      if(action.payload) {
        return {
          ...state,
          isLoading: false,
          error: null,
          posts: [...state.posts, action.payload]
        }
      } else {
        return {
          ...state,
          error: "Registration fail! Try again?",
          isLoading: false,
        }
      };
    default:
      return state;
  }
};