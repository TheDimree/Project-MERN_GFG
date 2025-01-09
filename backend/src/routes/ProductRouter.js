import express from "express"
import { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from "../controllers/ProductController.js";

const router = express.Router();

router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.post('/add', addProduct)
router.put('/update/:id', updateProduct)
router.delete('/delete/:id', deleteProduct)

export default router;