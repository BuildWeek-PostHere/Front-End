import {axiosWithAuth} from "../utils/axiosWithAuth";
import axios from "axios";

export const postLogin = (login) => {
  return dispatch => {
    dispatch({ type: "POST_LOGIN_START" });
    axios
      .post('https://ordnajela.herokuapp.com/api/auth/login', login.credentials)
      .then(response => {
        console.log('this is the response from Login Post: ', response);
        dispatch({type: 'POST_LOGIN_SUCCESS', payload: response.data.token})
      })
      .then(response => {
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
      })
      .catch(err => {
        console.log(err);
        dispatch({type: 'POST_FAIL'})
      });
  };
};

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

const thunk = action => next => store => {
  if (typeof action === "function") {
    action();
  } else if (typeof action === "object") {
    next(action);
  }
};