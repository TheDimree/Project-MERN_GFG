import myModel from "../models/AuthModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const login = async(req, res) => {
    try {
        const JWT_SECRET = process.env.JWT_SECRET ?? "your_super_secret_key_2414677793!@#$%^&*()";
        const {email, password} = req.body;
        const user = await myModel.findOne({email: email})
        if(!user) {
            return res.json({"err": true, "msg": "Please register then try again"})
        }
        // compare the entered password with the hashed one in the database
        const isMatched = await bcrypt.compareSync(password, user.password);
        if(!isMatched) {
            return res.json({"err": true, "msg": "Invalid password"})
        }
        let payload = {
            name: user.name,
            email: user.email,
            role: user.role
        }
        let token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:'1hr'})
        res.json({"err": false, "msg": "Login successful with token", "token": token})   
    } catch(err) {
        console.error("Error during login:", err); // Log the error details
        res.json({"err": true, "msg": "Invalid credentials"})
    }
}

const register = async (req, res) => {
    try {
        const data = req.body;
        // check if the user already exists
        const existingUser = await myModel.findOne({email: data.email});
        if(existingUser) {
            return res.json({"err": true, "msg": "User already exists"})
        }
        // * check if the password is strong enough
        // const complexityCheck = await bcrypt.getProgress(data.password);
        // if(complexityCheck.score < 30) {
        //     return res.json({"err": true, "msg": "Password is too weak"})
        // }

        // remove any special characters from the password
        const cleanPassword = data.password.replace(/[^a-zA-Z0-9]/g, '');

        // check if the password is at least 4 characters long
        if(cleanPassword.length < 4) {
            return res.json({"err": true, "msg": "Password must be at least 4 characters long"})
        }
        // encrypting the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hashSync(data.password, salt);

        data.password = hashedPassword;
        const user = new myModel(data);
        await user.save();
        console.log("User registered:", user)
        res.json({"err": false, "msg": "Registration successful"})
    } catch(err) {
        console.error("Error during registration:", err); // Log the error details
        res.json({ "err": true, "msg": err });
    }
}

export {login, register}