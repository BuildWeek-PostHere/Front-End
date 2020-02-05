import axios from 'axios';

export const axiosWithAuth = (props) => {
  return axios.create({
    baseURL: 'https://ordnajela.herokuapp.com/',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};