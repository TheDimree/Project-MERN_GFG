import axios from 'axios';

const URL = "http://localhost:8008/api/v1/products"
const getAllProducts = () => {
    return axios.get(`${URL}`)
}

const getProductById = (id) => {
    return axios.get(`${URL}/${id}`)
}

const addProduct = (product) => {
    return axios.post(`${URL}/add`, product) // * path must be same as defined in its router file.
}

const updateProduct = (id, data) => {
    return axios.put(`${URL}/update/${id}`, data) // * path must be same as defined in its router file.
}
const deleteProduct = (id) => {
    return axios.delete(`${URL}/delete/${id}`) // * path must be same as defined in its router file.
}

export {getAllProducts, getProductById, addProduct, updateProduct, deleteProduct}
