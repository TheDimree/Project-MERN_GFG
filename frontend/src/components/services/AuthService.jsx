import axios from 'axios';
import { jwtDecode } from "jwt-decode";

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

const getDataFromToken = () => {
    try {
        return jwtDecode(getToken())
    } catch(err) {
        return null;
    }
}

const isLoggedIn = () => {
    return getToken() !== null ? true : false;
}

const isAdmin = () => {
    const user = getDataFromToken();
    try {
        return user.role === 'admin'? true : false;
    } catch (err) {
        return null;
    }
}
export {signInService, signUpService, getToken, isLoggedIn, getDataFromToken, isAdmin}