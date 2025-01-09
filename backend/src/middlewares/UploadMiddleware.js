import multer from "multer";

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Create the multer instance
const upload = multer({ 
    storage: storage,
    // limits: { fileSize: 2 * 1024 * 1024 }, // Limit file size to 2MB
 });

export default upload