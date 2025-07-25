import User from '../models/user.models';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken';

export const login = async (req:any, res:any) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if(!user){
            return res.status(404).json({ error: 'User Not Found!'});
        }
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if(!user || !isPasswordCorrect){
            return res.status(400).json({ error: 'Invalid Username or Password!'});
        }
        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            gender: user.gender,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        });
        
    } catch (error) {
        console.log("Error from login controller: ",error);
        res.status(500).json({ error: "Internal Server Error!"});
    }
}

export const logout = (req:any, res:any) => {
    try {
        res.cookie("jwt","", {maxAge: 0});
        res.status(200).json({ message: "Logout successfully!"});
    } catch (error) {
        console.log("Error from logout controller: ",error);
        res.status(500).json({ error: "Internal Server Error!"});
    }
}

export const signup = async (req:any, res:any) => {
    try {
        const { name, username, email, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password and Confirm Password not matched!" })
        }
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "User already exists!" });
        }

        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(password, salt);

        const newUser = new User({
            name,
            username,
            email,
            password: hashedPassword,
            gender
        });
        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                username: newUser.username,
                email: newUser.email,
                gender: newUser.gender,
                createdAt: newUser.createdAt,
            });
        } else {
            res.status(400).json({ error: "Invalid User Data!" });
        }
    } catch (error) {
        console.log("Error from signup controller: ",error);
        res.status(500).json({ error: "Internal Server Error!"});
    }
}