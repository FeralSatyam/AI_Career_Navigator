import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';


export const getItems = async(req, res) => {

    const verifyToken = (req, res, next) => {
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith('Bearer ')){
            return res.status(401).json({message: 'Access denied!'})
        }

        const token = authHeader.split(' ')[1];
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch(error) {
            return res.status(403).json({message: 'Invalid or expired token'})
        }
    }


    
    const user = await User.findById(req.params._id);
    const items = [
        user.full_name,
        user.email,
    ]

    return res.status(200).json({message: 'Data fetched sucess', data: items});
}