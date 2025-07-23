import jwt from 'jsonwebtoken';
import { environment } from '../../../environments/environment';

const generateTokenAndSetCookie = (userId:any, res:any)=>{
    const token = jwt.sign({userId}, environment.jwtId, {
        expiresIn: '1h'
    });

    res.cookie('jwt', token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true, // prevent xss attacks  
        sameSite: 'strict', // csrf protection disabled
    })
} 

export default generateTokenAndSetCookie;