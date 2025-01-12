import ProductModel from '../models/ProductModel.js';
import multer from "multer"

const getAllProducts = async (req, res) => {
    try {
        let products = await ProductModel.find();
        return res.json({ "success": true, "products": products });
    } catch(err) {
        console.log("Error: ", err)
        return res.status(500).json({ "success": false, "msg":err });
    }
    return res.json({ "err": true, "msg": "All Products" })
}
const getProductById = async (req, res) => {
    const {id} = req.params;
    try {
        let product = await ProductModel.findById(id);
        if(!product) {
            return res.status(404).json({ "success": false, "msg": "Product not found" })
        }
        return res.json({ "success": true, "product": product });
    } catch(err) {
        console.log("Error: ", err)
        return res.status(500).json({ "success": false, "msg":err });
    }
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
    try {
        const {id} = req.params
        let data = req.body;
        // console.log("req.file: ", req.file)
        // console.log("body data: ", req.body)
        if(!req.body) {
            console.log("No data provided.")
            return res.status(400).json({ "err": true, "msg": "No data provided" })
        }
        if(req.file) {
            data = {...data, "image": req.file.filename}
        }
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, data)
        // const updatedProduct = await ProductModel.updateOne({_id:id}, data)
        if(!updatedProduct) {
            return res.status(404).json({ "success": false, "msg": "Product not found" })
        }
        return res.json({ "success": true, "msg": "Product updated successfully", "product": updatedProduct })
    } catch(err) {
        console.log("Error: ", err)
        return res.status(500).json({ "success": false, "msg":err });
    }
}

const deleteProduct = async (req, res) => {
    try {
        let id = req.params.id;
        await ProductModel.findByIdAndDelete(id);
        return res.status(200).json({ "success": true, "msg": "Product deleted"})
    }catch(err) {
        console.log("Error: ", err)
        return res.status(500).json({ "success": false, "msg":err });
    }
    return res.json({ "err": true, "msg": "All Products" })
}

export { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct }