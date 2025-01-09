import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
    name: {type:String, required:true, unique: true},
    price : {type: Number, required:true},
    category : {type: String, required:true},
    features : {type: String, required:true},
    image : {type: String, require: true},
    quantity : {type: Number, required:true}
}, {timestamps:true})

const myModel = mongoose.model("product", mySchema)

export default myModel;