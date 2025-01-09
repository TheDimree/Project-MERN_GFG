import axios from 'axios';

const URL = "http://localhost:8008/api/v1/products"
const getAllProducts = () => {
    return axios.get(`${URL}`)
}

export {getAllProducts}
