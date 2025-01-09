import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
    name: {type:String, required:true},
    email : {type: String, required:true, unique:true},
    mobile : {type: String, required:true},
    password : {type: String, require: true},
    role : {type: String, required:true}
}, {timestamps:true})

const myModel = mongoose.model("user", mySchema)

export default myModel;