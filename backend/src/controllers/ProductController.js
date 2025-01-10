import ProductModel from '../models/ProductModel.js';
import multer from "multer"

const getAllProducts = async (req, res) => {
    return res.json({ "err": true, "msg": "All Products" })
}
const getProductById = async (req, res) => {
    return res.json({ "err": true, "msg": "All " })
}
const addProduct = async (req, res) => {
    try {
        if(!req.file) {
            return res.status(400).json({ "err": true, "msg": "No file uploaded" })
        }
        let newProduct = req.body;
        newProduct = {...newProduct, "image": req.file.filename}
        const product = new ProductModel(newProduct)
        await product.save()
        return res.json({ "success": true, "msg": "Product added successfully" })
    } catch (err) {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({ "success": false, "msg": err.message });
        }
        console.error(err);
        return res.status(500).json({ "err": true, "msg": "Something went wrong" });
    }
}
const updateProduct = async (req, res) => {
    return res.json({ "err": true, "msg": "All Products" })
}
const deleteProduct = async (req, res) => {
    return res.json({ "err": true, "msg": "All Products" })
}

export { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct }