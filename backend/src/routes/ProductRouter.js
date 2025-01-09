import express from "express"
import { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from "../controllers/ProductController.js";
import upload from "../middlewares/UploadMiddleware.js";

const router = express.Router();

router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.post('/add', upload.single('image'), addProduct)
router.put('/update/:id', updateProduct)
router.delete('/delete/:id', deleteProduct)

export default router;