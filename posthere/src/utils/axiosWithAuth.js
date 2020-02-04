import axios from 'axios';
import { connect } from 'react-redux';

export const axiosWithAuth = (props) => {
  return axios.create({
    baseURL: 'https://ordnajela.herokuapp.com/',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};