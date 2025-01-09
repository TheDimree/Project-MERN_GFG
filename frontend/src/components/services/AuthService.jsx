import axios from 'axios';

const URL = "http://localhost:8008/api/v1/auth"
const signUpService = (data) => {
    return axios.post(`${URL}/signup`, data)
}

const signInService = (data) => {
    return axios.post(`${URL}/signin`, data)
}

const getToken = () => {
    return localStorage.getItem('_token')
}

const isLoggedIn = () => {
    return getToken() !== undefined ? true : false;
}

export {signInService, signUpService, getToken, isLoggedIn}