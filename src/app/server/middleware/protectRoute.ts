import jwt from 'jsonwebtoken';
import User from '../models/user.models.js';
import { environment } from '../../../environments/environment.js';

export const protectRoute = async (req:any, res:any, next:any) => {
    try {
        const token = req.cookies.jwt;

        if(!token) {
            return res.status(401).json({ error: "Unauthorized! - No token"});
        }
        const decoded:any = jwt.verify(token, environment.jwtId);
        if(!decoded) {
            return res.status(401).json({ error: "Unauthorized! - Invalid token"});
        }

        const user = await User.findById(decoded.userId).select('-password');
        if(!user) {
            return res.status(404).json({ error: "Unauthorized! - User not found"});
        }
        req.user = user;
        next();
        
    } catch (error) {
        console.log("Error from protectRoute: ",error);
        res.status(500).json({ error: error, message: "Internal Server Error!!!" });
    }
}