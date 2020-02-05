import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

export const postLogin = (login) => {
  return dispatch => {
    dispatch({ type: "START" });
    axios
      .post('https://ordnajela.herokuapp.com/api/auth/login', login.credentials)
      .then(response => {
        console.log('this is the response from Login Post: ', response);
        dispatch({type: 'POST_LOGIN_SUCCESS', payload: response.data})
      })
      .catch(err => {
        console.log(err);
        dispatch({type: 'POST_FAIL'})
      });
  };
};

export const getPosts = () => {
  return dispatch => {
    dispatch({type: 'START'})
    axiosWithAuth()
      .get('api/posts')
      .then(response => {
        console.log('Inside posts', response)
        dispatch({type: 'GET_POSTS_SUCCESS', payload: response.data})
      })
      .catch(err => {
        console.log(err);
        dispatch({type: 'POST_FAIL'})
      });
  }
}

export const getUserPosts = (id) => {
  return dispatch => {
    dispatch({type: 'START'})
    axiosWithAuth()
      .get(`api/posts/${id}/user`)
      .then(response => {
        console.log('Inside user posts', response)
        dispatch({type: 'GET_USER_POSTS_SUCCESS', payload: response.data})
      })
      .catch(err => {
        console.log(err);
        dispatch({type: 'POST_FAIL'})
      });
  }
}

export const addPost = (post) => {
  return dispatch => {
    dispatch({type: 'START'})
    axiosWithAuth()
      .post('api/posts', post)
      .then(response => {
        console.log('this is the response from Post Post: ', response);
        dispatch({type: 'POST_POST_SUCCESS', payload: post})
      })
      .catch(err => {
        console.log(err);
        dispatch({type: 'POST_FAIL'})
      });
  }
}

export const deletePost = (id) => {
  return dispatch => {
    dispatch({type: 'START'})
    axiosWithAuth()
      .delete(`api/posts/${id}`)
      .then(response => {
        console.log('Inside Delete', response)
        dispatch({type: 'DELETE_POST_SUCCESS', payload: id})
      })
      .catch(err => {
        console.log(err);
        dispatch({type: 'POST_FAIL'})
      });
  }
}

export const editPost = (post) => {
  return dispatch => {
    dispatch({type: 'EDIT_START'})
    axiosWithAuth()
      .put(`api/posts/${post.id}`, post)
      .then(response => {
        console.log('Inside Edit', response)
        dispatch({type: 'EDIT_POST_SUCCESS', payload: response.data})
      })
      .catch(err => {
        console.log(err);
        dispatch({type: 'POST_FAIL'})
      });
  }
}

export const registerUser = (user) => {
  return dispatch => {
    dispatch({ type: "POST_USER_START" });
    axios
      .post('https://ordnajela.herokuapp.com/api/auth/register', user.credentials)
      .then(response => {
        console.log('this is the response from Registration Post: ', response);
        dispatch({type: 'POST_USER_SUCCESS', payload: response.data})
      })
      .catch(err => {
        console.log(err);
        dispatch({type: 'POST_FAIL'})
      });
  };
};

// const thunk = action => next => store => {
//   if (typeof action === "function") {
//     action();
//   } else if (typeof action === "object") {
//     next(action);
//   }
// };